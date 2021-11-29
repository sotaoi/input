const { BaseInput } = require('./base-input');

class StringInput extends BaseInput {
  constructor(value) {
    super(value);
  }

  input(field) {
    return {
      input: this,
      field,
    };
  }

  getValue() {
    return this.value || null;
  }

  isEmpty() {
    return !this.value;
  }

  serialize(forStorage) {
    if (forStorage) {
      return this.value || null;
    }
    return this.value ? JSON.stringify({ si: this.value }) : null;
  }

  convert(value) {
    if (value instanceof StringInput) {
      return value;
    }
    return new StringInput(typeof value === 'string' && value ? value : null);
  }

  deserializeCondition(fieldPayload, payloadJson) {
    return typeof payloadJson.si !== 'undefined';
  }

  deserialize(value) {
    if (!value) {
      return new StringInput(null);
    }
    const parsed = JSON.parse(value);
    if (typeof parsed !== 'object' || typeof parsed.si !== 'string') {
      throw new Error('bad string input');
    }
    return new StringInput(parsed.si);
  }
}

module.exports = { StringInput };
