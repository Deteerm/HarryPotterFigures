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

a,
.green {
  text-decoration: none;
  color: rgb(88, 0, 189);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    color: rgb(146, 79, 221);
  }
}

body {
  display: flex;
  place-items: center;
}
</style>
