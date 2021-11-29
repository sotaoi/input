const { asset } = require('./helper');

class BaseInput {
  // abstract
  input(field) {
    throw new Error('Field is missing "input" implementation');
  }

  // abstract
  getValue() {
    throw new Error('Field is missing "getValue" implementation');
  }

  // abstract
  isEmpty() {
    throw new Error('Field is missing "isEmpty" implementation');
  }

  // abstract
  serialize(forStorage) {
    throw new Error('Field is missing "serialize" implementation');
  }

  // abstract
  convert(value) {
    throw new Error('Field is missing "convert" implementation');
  }

  // abstract
  deserializeCondition(fieldPayload, payloadJson) {
    throw new Error('Field is missing "deserializeCondition" implementation');
  }

  // abstract
  deserialize(value) {
    throw new Error('Field is missing "deserialize" implementation');
  }

  constructor(value) {
    false && console.info(`Acknowleding "${value}"`);
  }

  asset(item, role = 'assets') {
    return asset(item, role);
  }

  assets(items, role = 'assets') {
    return (items && JSON.parse(items).map((item) => asset(item, role))) || null;
  }

  getKey(index) {
    return `${index.toString()}`;
  }

  static deserialize(value) {
    throw new Error('deserialization not implemented');
  }
}

class FormValidations {
  constructor(formValidations) {
    Object.entries(formValidations).map(([name, validation]) => {
      this[name] = validation;
    });
  }
}

module.exports = { BaseInput, FormValidations };
