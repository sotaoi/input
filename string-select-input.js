import { BaseInput } from '@sotaoi/input/base-input';

class StringSelectInput extends BaseInput {
  constructor(value) {
    super(value);
    this.value = value;
  }

  input(fiel) {
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
      return this.value || null;
    }
    return JSON.stringify({ ssi: this.value || null });
  }

  convert(value) {
    return StringSelectInput.convert(value);
  }

  deserializeCondition(fieldPayload, payloadJson) {
    return typeof payloadJson.ssi !== 'undefined';
  }
  deserialize(value) {
    const parsed = JSON.parse(value);
    if (typeof parsed.ssi !== 'string' && parsed.ssi !== null) {
      throw new Error('failed to parse string select input');
    }
    return new StringSelectInput(parsed.ssi);
  }

  static convert(value) {
    if (!value) {
      return new StringSelectInput(null);
    }
    if (value instanceof StringSelectInput) {
      return value;
    }
    if (typeof value === 'string') {
      return new StringSelectInput(value);
    }
    throw new Error('failed to parse string select input');
  }
}

module.exports = { StringSelectInput };
