<script setup lang="ts">
import Figure from '@/components/Figure.vue'
import { RouterLink } from "vue-router"
</script>

<template>
  <section>
    <h1>CHOOSE YOUR MINIFIG</h1>
    <div>
      <Figure></Figure>
      <Figure></Figure>
      <Figure></Figure>
    </div>
    <button>
      <RouterLink to="/shipment">PROCEED TO</RouterLink>
    </button>
  </section>
</template>


<style scoped>
</style>