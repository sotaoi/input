const { BaseInput } = require('@sotaoi/input/base-input');

class OptionsSelectInput extends BaseInput {
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
    return !this.value;
  }

  serialize(forStorage) {
    if (forStorage) {
      return JSON.stringify(this.value);
    }
    return JSON.stringify({ osi: this.value });
  }

  convert(value) {
    return OptionsSelectInput.convert(value);
  }

  deserializeCondition(fieldPayload, payloadJson) {
    return typeof payloadJson.osi !== 'undefined';
  }
  deserialize(value) {
    const parsed = JSON.parse(value);
    if (typeof parsed.osi !== 'object') {
      throw new Error('failed to parse options select input');
    }
    return new OptionsSelectInput(parsed.osi);
  }

  static convert(value) {
    if (value instanceof OptionsSelectInput) {
      return value;
    }
    if (typeof value === 'object') {
      return new OptionsSelectInput(value);
    }
    if (typeof value === 'string') {
      return new OptionsSelectInput(JSON.parse(value));
    }
    throw new Error('failed to parse options select input');
  }
}

module.exports = { OptionsSelectInput };
