<script setup lang="ts">
import { useStore, type State } from '@/stores/figures'
import { ref } from 'vue'

const store: State = useStore()
const API_KEY = import.meta.env.VITE_API_KEY

const data: Response = await fetch(`https://rebrickable.com/api/v3/lego/minifigs/${store.selectedFigure.setNum}/parts/?key=${API_KEY}`)
const figureDetialsJSON = await data.json()
const figureDetials = ref(figureDetialsJSON)

const calculateText = (name: string): string => {
  return name.length > 34 ? name.slice(0, 34).trim() + '...' : name
}
</script>

<template>
  <div class="figure-summary">
    <h1>SUMMARY</h1>
    <div class="character">
      <img :src="store.selectedFigure.setImgUrl" alt="No photo available">
      <p>{{ store.selectedFigure.name }}</p>
    </div>
    <p class="mb-3">There are {{ figureDetials.results.length }} parts in this minifig:</p>
    <div class="part-details" v-for="result in figureDetials.results">
      <img :src="result.part.part_img_url" alt="No photo available">
      <div>
        <p>{{ calculateText(result.part.name) }}</p>
        <p class="part-num">{{ result.part.part_num }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.figure-summary {
  text-align: left;
  padding: 2rem;
}

.figure-summary img {
  width: 150px;
}

.figure-summary h1 {
  font-weight: 800;
  font-size: 1.75rem;
}

.figure-summary p {
  font-weight: 700;
  font-size: 0.9rem
}

.figure-summary .part-details img {
  width: 60px;
  height: auto;
  margin-right: 10px;
}

.part-details {
  display: flex;
  margin-bottom: 1.5rem;
}

.character {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0 3rem 0;
}

.character img {
  margin-bottom: 1rem;
}

.part-num {
  color: var(--vt-c-orange)
}
</style>