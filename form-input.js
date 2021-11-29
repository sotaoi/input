const { BaseInput } = require('./base-input');

class FormInput extends BaseInput {
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
    if (value instanceof FormInput) {
      return value;
    }
    return new FormInput(typeof value === 'string' && value ? value : null);
  }

  deserializeCondition(fieldPayload, payloadJson) {
    return typeof payloadJson.si !== 'undefined';
  }

  deserialize(value) {
    if (!value) {
      return new FormInput(null);
    }
    const parsed = JSON.parse(value);
    if (typeof parsed !== 'object' || typeof parsed.si !== 'string') {
      throw new Error('bad string input');
    }
    return new FormInput(parsed.si);
  }
}

module.exports = { FormInput };
