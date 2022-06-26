<script setup lang="ts">
import Figure from '@/components/Figure.vue'
import { RouterLink } from "vue-router"
import { useStore } from '@/stores/figures'
import { ref } from 'vue'

import type { State } from '@/stores/figures'
import type { Ref } from 'vue'

const store: State = useStore()

const selectedFigureRef: Ref<number | null> = ref(null)

const selectFigure = (index: number): void => {
  selectedFigureRef.value = index
  store.selectedFigureSetNum = store.figures[index].set_num
}
</script>

<template>
  <section class="figures-view">
    <h1>CHOOSE YOUR MINIFIG</h1>
    <div class="figures-container">
      <Figure v-for="(figure, i) in store.figures" :key="figure.set_num" :figure="figure" @click="selectFigure(i)"
        :class="{ 'selected-figure': selectedFigureRef == i }" class="figure-component"></Figure>
    </div>
    <RouterLink :class="{ 'disabled': selectedFigureRef === null }" to="/shipment">
      <button :disabled="selectedFigureRef === null" class="button">
        PROCEED TO SHIPMENT
      </button>
    </RouterLink>
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
  box-shadow: 0 0 14px 0 var(--vt-c-orange);
  cursor: pointer;
}

.selected-figure {
  box-shadow: 0 0 14px 0 var(--vt-c-orange-hover);
}
</style>