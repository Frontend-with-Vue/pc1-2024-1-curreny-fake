<script setup>
import {ref} from "vue";

const author = ref('u202317638 Jhosepmyr Orlando');
</script>

<template>
  <footer class="footer" aria-label="Footer information">
    <p aria-label="Copyright information">Copyright © 2024 Fake Store, inc. All rights reserved</p>
    <p aria-label="Developed by">Developed by {{author}}</p>
  </footer>
</template>

<style scoped>
  .footer {
    grid-area: footer;
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    width: 100%;
  }
</style>