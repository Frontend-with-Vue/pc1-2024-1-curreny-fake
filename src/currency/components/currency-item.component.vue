<script setup>
import {Currency} from "../model/currency.entity.js";
import {ref} from "vue";

/**
 * @description Define the props of the component
 * @type {Currency}
 */
defineProps(
  {
    currency: {
      type: Currency,
      required: true
    }
  }
);

/**
 * @description Define the rating of the currency
 * @type {Ref<number>}
 */
const rating = ref(0);
</script>

<template>
  <pv-card :aria-label="currency.name">
    <template #header>
      <img :src="currency.image" :alt="currency.name" aria-hidden="false">
    </template>
    <template #title>
      <h2 aria-label="Name of the currency">{{currency.name}}</h2>
    </template>
    <template #subtitle>
      <p aria-label="Code and symbol of the currency">{{currency.code}} - {{currency.symbol}}</p>
    </template>
    <template #footer>
      <pv-rating aria-label="Currency valuation" v-model="rating" :aria-valuenow="rating"></pv-rating>
    </template>
  </pv-card>
</template>

<style scoped>
  .p-card{
    padding: 10px;
  }
  h2 {
    font-size: 20px;
  }
  p {
    font-size: 16px;
  }
</style>