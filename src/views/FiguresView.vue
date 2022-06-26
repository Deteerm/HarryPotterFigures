<script setup lang="ts">
import Figure from '@/components/Figure.vue'
import { RouterLink } from "vue-router"
import { useStore } from '@/stores/figures'
import type { State } from '@/stores/figures'

const { figures }: State = useStore()
</script>

<template>
  <section class="figures-view">
    <h1>CHOOSE YOUR MINIFIG</h1>
    <div class="figures-container">
      <Figure v-for="figure in figures" :figure="figure" class="figure-component"></Figure>
    </div>
    <button class="button">
      <RouterLink to="/shipment">PROCEED TO SHIPMENT</RouterLink>
    </button>
  </section>
</template>


<style scoped>
.figures-view {
  text-align: center;
}

.figures-view h1 {
  margin-bottom: 2rem;
  font-weight: 900;
}

.figures-container {
  display: flex;
  flex-wrap: no-wrap;
}

@media screen and (max-width: 1072px) {
  .figures-container {
    flex-direction: column;
  }
}

.figure-component {
  margin: 2rem 0.5rem;
  transition: all 0.3s ease-in-out;
}

.figure-component:hover {
  box-shadow: 0 0 14px 0 var(--vt-c-orange-hover);
  cursor: pointer;
}
</style>