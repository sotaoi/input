const { BaseInput } = require('@sotaoi/input/base-input');

class CollectionInput extends BaseInput {
  constructor(value) {
    super(value);
  }

  input(field) {
    throw new Error('collection input cannot call "input" method');
  }

  getValue() {
    throw new Error('collection input cannot call "getValue" method');
  }

  isEmpty() {
    throw new Error('collection input cannot call "isEmpty" method');
  }

  serialize(forStorage) {
    throw new Error('collection input cannot be serialized');
  }

  convert(value) {
    throw new Error('collection input cannot call "convert" method');
  }

  deserializeCondition(fieldPayload, payloadJson) {
    throw new Error('collection input cannot call "deserializeCondition" method');
  }

  deserialize(value) {
    return CollectionInput.deserialize(value);
  }

  static deserialize(value) {
    return new CollectionInput(value);
  }
}

module.exports = { CollectionInput };
