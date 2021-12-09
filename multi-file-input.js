const { BaseInput } = require('@sotaoi/input/base-input');

class MultiFileInput extends BaseInput {
  constructor(value) {
    super(value);
    this.value = value;
  }

  input(field) {
    return {
      input: this,
      field,
    };
  }

  getValue() {
    return this.value;
  }

  isEmpty() {
    return !this.value.length;
  }

  append(fileInput) {
    this.value.push(fileInput);
  }

  getFiles() {
    return this.value.filter((fileInput) => !!fileInput.value.file).map((fileInput) => fileInput.value.file);
  }

  serialize(forStorage) {
    if (forStorage) {
      throw new Error('multi file input save method is embedded in storage');
    }
    if (!this.getValue().length) {
      return [];
    }
    return (
      this.getValue().map((input) => {
        const file = input.getValue().file;
        const asset = input.getValue().asset;
        if (!file && !asset) {
          throw new Error('something went wrong with multi file input serialization, both filename and asset are null');
        }
        return file || JSON.stringify({ mfi: asset });
      }) || []
    );
  }

  convert(value) {
    const { FileInput } = require('@sotaoi/input/file-input');

    if (!value) {
      return new MultiFileInput([]);
    }
    if (value instanceof MultiFileInput) {
      return value;
    }
    if (value instanceof Array) {
      const multiFileInput = new MultiFileInput([]);
      this.value.map((fileInput) => {
        if (!(fileInput.value.file instanceof File)) {
          throw new Error('something went wrong running "convert" in MultiFileInput');
        }
        multiFileInput.value.push(
          new FileInput(
            '',
            fileInput.value.file.name,
            null,
            URL.createObjectURL(fileInput.value.file),
            fileInput.value.file
          )
        );
      });
      return multiFileInput;
    }
    throw new Error('something went wrong running "convert" in MultiFileInput');
  }

  deserializeCondition(fieldPayload, payloadJson) {
    if (fieldPayload instanceof Array) {
      return true;
    }
    if (typeof payloadJson.mfi !== 'undefined') {
      return true;
    }
    return false;
  }

  deserialize(value) {
    const { FileInput, Asset } = require('@sotaoi/input/file-input');

    if (!(value instanceof Array)) {
      throw new Error('something went wrong deserializing multi file input');
    }
    if (!value.length) {
      return new MultiFileInput([]);
    }
    const inputs = value.map((input) => {
      if (typeof input !== 'string') {
        return new FileInput(input.path, input.filename, null, null, input.file || null);
      }
      return new FileInput('', '', new Asset(JSON.parse(input).mfi), null, null);
    });
    return new MultiFileInput(inputs);
  }
}

module.exports = { MultiFileInput };
