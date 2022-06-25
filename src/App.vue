<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

h1 {
  font-weight: bold;
}

body {
  display: flex;
  place-items: center;
}

.button {
  border-radius: 2rem;
  padding: 10px 50px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.5);
  background-color: rgb(52, 129, 201);
  border: none;
  margin: 10px auto;
  display: block;
}

.button a {
  color: var(--vt-c-white);
  font-weight: 700;
  text-decoration: none;
}
</style>
