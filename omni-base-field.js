class OmniBaseField {
  init() {
    throw new Error('Base Field must implement static "init" method');
  }

  set(value) {
    throw new Error('Base Field must implement static "set" method');
  }

  clear() {
    throw new Error('Base Field must implement static "clear" method');
  }

  isEmpty() {
    throw new Error('Base Field must implement static "isEmpty" method');
  }

  convert(value) {
    throw new Error('Base Field must implement static "convert" method');
  }

  getInputValue(input) {
    throw new Error('Base Field must implement static "getInputValue" method');
  }

  wasChanged() {
    throw new Error('Base Field must implement static "wasChanged" method');
  }

  initialState(props) {
    throw new Error('Base Field must implement static "initialState" method');
  }

  setValue(input, context) {
    throw new Error('Base Field must implement static "setValue" method');
  }

  getValue(context) {
    throw new Error('Base Field must implement static "getValue" method');
  }

  render(context) {
    throw new Error('Base Field must implement static "render" method');
  }

  asset(item, role) {
    throw new Error('Base Field must implement static "asset" method');
  }

  assets(items, role) {
    throw new Error('Base Field must implement static "assets" method');
  }

  getKey(index) {
    throw new Error('Base Field must implement static "getKey" method');
  }

  validate() {
    throw new Error('Base Field must implement static "validate" method');
  }

  isValid() {
    throw new Error('Base Field must implement static "isValid" method');
  }

  getErrors() {
    throw new Error('Base Field must implement static "getErrors" method');
  }

  setTouched(touched) {
    throw new Error('Base Field must implement static "setTouched" method');
  }

  wasTouched() {
    throw new Error('Base Field must implement static "wasTouched" method');
  }

  collection() {
    throw new Error('Base Field must implement static "collection" method');
  }

  addGroup() {
    throw new Error('Base Field must implement static "addGroup" method');
  }

  canRemoveGroup(index) {
    throw new Error('Base Field must implement static "canRemoveGroup" method');
  }

  removeGroup(index) {
    throw new Error('Base Field must implement static "removeGroup" method');
  }

  static input(value) {
    throw new Error('Base Field must implement static "input" method');
  }
}

module.exports = { OmniBaseField };
