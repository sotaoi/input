const { BaseInput } = require('@sotaoi/input/base-input');

class RefSelectInput extends BaseInput {
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

  serialize() {
    return this.value.serialize() || null;
  }

  convert(value) {
    if (!value) {
      return new RefSelectInput(null);
    }
    if (value instanceof RecordRef) {
      return new RefSelectInput(value);
    }
    if (typeof value !== 'string') {
      throw new Error('failed to parse ref select input');
    }
    return new RefSelectInput(RecordRef.deserialize(value));
  }

  deserializeCondition(fieldPayloada, payloadJson) {
    return (
      typeof payloadJson.repository === 'string' &&
      typeof payloadJson.uuid === 'string' &&
      Object.keys(payloadJson).length === 2
    );
  }

  deserialize(value) {
    if (typeof value !== 'string') {
      throw new Error('failed to parse ref select input');
    }
    return new RefSelectInput(RecordRef.deserialize(value));
  }
}

module.exports = { RefSelectInput };
