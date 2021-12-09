const { BaseInput } = require('@sotaoi/input/base-input');

class Asset {
  constructor(item) {
    if (!item) {
      this.drive = null;
      this.domain = '';
      this.pathname = '';
      return;
    }
    this.drive = item.drive;
    this.domain = item.domain;
    this.pathname = item.pathname;
  }

  isEmpty() {
    return !this.drive && !this.domain && !this.pathname;
  }

  serialize(forStorage) {
    if (this.isEmpty()) {
      return null;
    }
    return JSON.stringify({
      drive: this.drive,
      domain: this.domain,
      pathname: this.pathname,
    });
  }

  static serializeMulti(assets) {
    if (!assets.length) {
      return null;
    }
    return JSON.stringify(assets);
  }
}

class MultiAsset {
  constructor(item) {
    this.drive = item.drive;
    this.domain = item.domain;
    this.getPathname = item.getPathname;
  }

  serialize(forStorage) {
    return JSON.stringify({
      drive: this.drive,
      domain: this.domain,
      // getPathname: this.getPathname,
    });
  }
}

class FileInput extends BaseInput {
  constructor(path, filename, storedItem, url, file) {
    const value = {
      path,
      filename,
      asset: new Asset(storedItem || null),
      url,
      file,
    };
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

  getPreview() {
    try {
      const url = this.getValue().url;
      if (!url && this.getValue().asset) {
        return this.asset(this.getValue().asset.serialize(false) || '') || '';
      }
      return url || '';
    } catch (err) {
      return '';
    }
  }

  isEmpty() {
    return this.value.asset.isEmpty() && !this.value.path && !this.value.file;
  }

  serialize(forStorage) {
    try {
      if (forStorage) {
        throw new Error('file input save method is embedded in storage');
      }
      return this.value.file || JSON.stringify({ fi: this.value.asset.serialize(forStorage) || null });
    } catch (err) {
      return '';
    }
  }

  convert(value) {
    if (!value) {
      return new FileInput('', '', null, null, null);
    }
    if (value instanceof FileInput) {
      return value;
    }
    if (value instanceof File) {
      return new FileInput('', value.name, null, URL.createObjectURL(value), value);
    }
    throw new Error('something went wrong running "convert" in FileInput');
  }

  deserializeCondition(fieldPayload, payloadJson) {
    return (
      typeof payloadJson.fi !== 'undefined' || (!!payloadJson.path && !!payloadJson.filename && !!payloadJson.bytes)
    );
  }

  deserialize(value) {
    // v1 -> { fi: null }
    // v2 -> file uploaded, you have path
    // v3 -> file input is null, in order to remove. this does not get processed
    // v4 -> file not uploaded, nothing changes, you have asset
    if (typeof value === 'string') {
      const parsed = JSON.parse(value);
      return new FileInput('', '', parsed.fi ? new Asset(JSON.parse(parsed.fi)) : null, null, null);
    }
    return new FileInput(value.path, value.filename, null, null, value.file || null);
  }
}

module.exports = { FileInput, Asset, MultiAsset };
