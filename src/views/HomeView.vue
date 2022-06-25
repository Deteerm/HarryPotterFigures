<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="home-view">
    <h1>LEGO MINIFIGS MYSTERY BOX</h1>
    <button class="button">
      <RouterLink to="/figures">LET'S GO!</RouterLink>
    </button>
  </section>
</template>

<style scoped>
.button {
  margin-top: 2rem;
}
</style>