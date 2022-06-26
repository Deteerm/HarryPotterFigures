<script setup lang="ts">
import pickRandomResults from '@/utils/pickRandomResults'
import { useStore } from '@/stores/figures'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const API_KEY = import.meta.env.VITE_API_KEY

const store = useStore()
const router = useRouter()

const isError = ref(false)
const isLoading = ref(false)

const fetchFigures = async () => {
  try {
    setIsLoading(true)
    const data = await fetch(`https://rebrickable.com/api/v3/lego/minifigs/?page_size=500&in_theme_id=246&key=${API_KEY}`)
    const { results } = await data.json()
    const randomFigures = pickRandomResults(results, 3)
    store.figures = randomFigures
    setIsLoading(false)
    router.push('/figures')
  } catch (e) {
    console.error(e)
    isError.value = true
  }
}

const setIsLoading = (bool: boolean): void => {
  isLoading.value = bool
}
</script>

<template>
  <section class="home-view">
    <div v-if="!isError">
      <h1>LEGO MINIFIGS MYSTERY BOX</h1>
      <button @click="fetchFigures" class="button">
        <div v-if="isLoading" class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span v-else>LET'S GO!</span>
      </button>
    </div>
    <div v-else>
      <h1>THERE WAS AN ERROR WHILE TRYING TO FETCH YOUR FIGURES</h1>
      <button @click="setIsLoading(true)" class="button"><a href="/">
          <div v-if="isLoading" class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <span v-else>GO BACK</span>
        </a></button>
    </div>
  </section>
</template>

<style scoped>
.button {
  margin-top: 2rem;
}
</style>