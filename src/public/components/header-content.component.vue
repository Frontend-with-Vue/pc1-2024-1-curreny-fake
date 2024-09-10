<script setup>
import {ref} from "vue";

const title = ref('Fake Zoo API Showcase')
</script>

<template>
  <header aria-label="Main header">
    <pv-toolbar aria-label="Toolbar">
      <template #start>
        <h4 aria-label="Page title">{{title}}</h4>
      </template>
    </pv-toolbar>
  </header>
</template>

<style scoped>
  header{
    grid-area: header;
  }
  .p-toolbar {
    padding: 1rem;
    background-color: #333;
    color: #ffffff;
    border: none;
  }
</style>