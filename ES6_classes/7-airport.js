export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
