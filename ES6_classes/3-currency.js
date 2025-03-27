export default class Currency {
    constructor(code, name) {
        _code = code;
        _name = name;
    }
    
    get code() {
        return _code;
    }

    get name() {
        return _name;
    }

    set code(newCode) {
        _code = newCode;
    }

    set name(newName) {
        _name = newName;
    }

    displayFullCurrency() {
        return `${_name} (${_code})`;
    }
}