import axios from "axios";

/**
 * URL Base
 * @type {string}
 */
const API_URL = "https://freetestapi.com/api/v1";

/**
 * Axios Instance
 * @type {axios.AxiosInstance}
 */
const http = axios.create({
    baseURL: API_URL,
})

/**
 * Currency Fake API Service
 * @class CurrencyFakeApiService
 * @description
 * This class represents a currency fake API service.
 */
export class CurrencyFakeApiService {
    /**
     * Fetch currencies.
     * @returns {Promise<AxiosResponse<any>>} The promise object representing the currencies.
     */
    getCurrencies() {
        return http.get('/currencies?limit=10')
    }
}
