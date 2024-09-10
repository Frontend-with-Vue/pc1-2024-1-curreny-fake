<script setup>
import {onMounted, ref} from 'vue';
import {CurrencyFakeApiService} from "../services/currency-fake-api.service.js";
import {Currency} from "../model/currency.entity.js";
import CurrencyItem from "./currency-item.component.vue";

const currencyList = ref([]);
const currencyFakeApiService = new CurrencyFakeApiService();

/**
 * @description Get the data of the currencies
 * @returns {void}
 */
function getDataCurrencies(){
    currencyFakeApiService.getCurrencies()
        .then(response => {
          let currencies = response.data;
          currencyList.value = buildCurrencyFromResponseData(currencies)
        })
        .catch(error => console.log(error));
}

/**
 * @description Build the currency from the response data
 * @param {Array} currencies
 * @returns {Currency[]}
 */
function buildCurrencyFromResponseData(currencies){
    return currencies.map(item => {
        return new Currency(item.code, item.name, item.symbol, item.image);
    });
}

onMounted(getDataCurrencies);

</script>

<template>
  <section class="currencies" aria-label="list of currencies">
    <currency-item v-for="currency in currencyList" :currency="currency"/>
  </section>
</template>

<style scoped>
  .currencies {
    grid-area: main;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-content: space-between;
    gap: 20px;
  }
</style>