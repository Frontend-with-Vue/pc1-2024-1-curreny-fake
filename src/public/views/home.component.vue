<script setup>
import HeaderContent from "../components/header-content.component.vue";
import FooterContent from "../components/footer-content.component.vue";
import CurrencyList from "../../currency/components/currency-list.component.vue";
</script>

<template>
  <div class="container">
    <HeaderContent class="header"/>
    <main class="main">
      <CurrencyList/>
    </main>
    <FooterContent class="footer"/>
  </div>
</template>

<style scoped>
  .container {
    width: 100%;
    height: auto;
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
    grid-template-areas:
          'header'
          'main'
          'footer';
    background-color: #000048;
  }
  .header {
    grid-area: header;
  }
  .main {
    grid-area: main;
  }
  .footer {
    grid-area: footer;
  }
</style>