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
    const data = await fetch(`https://rebrickable.com/api/v3/lego/minifigs/?page_size=500&in_theme_id=246&key=${API_KEY}`)
    const { results } = await data.json()
    const randomFigures = pickRandomResults(results, 3)
    store.figures = randomFigures
    router.push('/figures')
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <section class="home-view">
    <h1>LEGO MINIFIGS MYSTERY BOX</h1>
    <button @click="fetchFigures" class="button">
      <div class="loader" v-if="isLoading"></div>
      <span v-else>LET'S GO!</span>
    </button>
  </section>
</template>

<style scoped>
.button {
  margin-top: 2rem;
}
</style>