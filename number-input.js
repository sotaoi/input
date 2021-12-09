const { BaseInput } = require('@sotaoi/input/base-input');

class NumberInput extends BaseInput {
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
    return false;
  }

  serialize(forStorage) {
    if (forStorage) {
      return this.value.toString();
    }
    return JSON.stringify({ v: this.value });
  }

  convert(value) {
    if (value instanceof NumberInput) {
      return value;
    }
    if (typeof value !== 'number') {
      throw new Error('failed to parse number input');
    }
    return new NumberInput(value);
  }

  deserializeCondition(fieldPayload, payloadJson) {
    return typeof payloadJson.v === 'number' && Object.keys(payloadJson).length === 1;
  }
  deserialize(value) {
    const parsed = JSON.parse(value);
    if (typeof parsed !== 'object' || (typeof parsed.value !== 'number' && isNaN(parsed.value))) {
      throw new Error('failed to parse number input');
    }
    return new NumberInput(parsed.value);
  }
}

module.exports = { NumberInput };
