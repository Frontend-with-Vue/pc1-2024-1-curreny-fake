/**
 * Currency entity.
 * @class Currency
 * @description
 * This class represents a currency entity
 * @property {string} code - The currency code.
 * @property {string} name - The currency name.
 * @property {string} symbol - The currency symbol.
 * @property {string} image - The currency image.
 */

export class Currency {
    /**
     * Create a currency entity.
     * @param {string} [code =''] - The currency code.
     * @param {string} [name =''] - The currency name.
     * @param {string} [symbol =''] - The currency symbol.
     * @param {string} [image =''] - The currency
     */
    constructor(code = '', name = '', symbol = '', image = '') {
        this._code = code;
        this._name = name;
        this._symbol = symbol;
        this._image = image;
    }

    /**
     * Get the currency code.
     * @returns {string}
     */
    get code() {
        return this._code;
    }

    /**
     * Get the currency name.
     * @returns {string}
     */
    get name() {
        return this._name;
    }

    /**
     * Get the currency symbol.
     * @returns {string}
     */
    get symbol() {
        return this._symbol;
    }

    /**
     * Get the currency image.
     * @returns {string}
     */
    get image() {
        return this._image;
    }
}