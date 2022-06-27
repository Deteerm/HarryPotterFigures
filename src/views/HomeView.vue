<script setup lang="ts">
import pickRandomResults from '@/utils/pickRandomResults'
import { useStore } from '@/stores/figures'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import type FigureType from '@/types/FigureType'

const API_KEY = import.meta.env.VITE_API_KEY

const store = useStore()
const router = useRouter()

const isError = ref(false)
const isLoading = ref(false)

const fetchFigures = async (): Promise<void> => {
  setIsLoading(true)
  const data: Response = await fetch(`https://rebrickable.com/api/v3/lego/minifigs/?page_size=500&in_theme_id=246&key=${API_KEY}`)
  const { results } = await data.json()
  const randomFigures: Array<FigureType> = pickRandomResults(results, 3)
  store.figures = randomFigures
  setIsLoading(false)
  router.push('/figures')
}

const setIsLoading = (bool: boolean): void => {
  isLoading.value = bool
}
</script>

<template>
  <section class="home-view">
    <h1 class="home-msg" v-if="store.homePageMsg">{{ store.homePageMsg }}</h1>
    <div>
      <h1>LEGO MINIFIGS MYSTERY BOX</h1>
      <button :disabled="isLoading" @click="fetchFigures" class="button">
        <div v-if="isLoading" class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span v-else>
          <span v-if="store.homePageMsg">GO AGAIN?</span>
          <span v-else>LET'S GO</span>
        </span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.home-msg {
  font-style: italic;
  margin-bottom: 2rem;
}
</style>