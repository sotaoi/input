const { BaseInput } = require('./base-input');

class BooleanInput extends BaseInput {
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
      return !!this.value;
    }
    return JSON.stringify({ bi: this.value });
  }

  convert(value) {
    return BooleanInput.convert(value);
  }

  deserializeCondition(fieldPayload, payloadJson) {
    return typeof payloadJson.bi !== 'undefined';
  }
  deserialize(value) {
    const parsed = JSON.parse(value);
    if (typeof parsed.bi !== 'boolean') {
      throw new Error('failed to parse options select input');
    }
    return new BooleanInput(parsed.bi);
  }

  static convert(value) {
    if (value instanceof BooleanInput) {
      return value;
    }
    if (typeof value === 'boolean') {
      return new BooleanInput(value);
    }
    if (typeof value === 'string' || typeof value === 'number') {
      return new BooleanInput(!!value);
    }
    throw new Error('failed to parse options select input');
  }
}

module.exports = { BooleanInput };
