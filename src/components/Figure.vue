<script setup lang="ts">
import type FigureType from '@/types/FigureType'
const props = defineProps<{
  figure: FigureType
}>()
</script>

<template>
  <div class="figure">
    <img class="img" :src="figure.set_img_url" alt="No photo available">
    <div class="text-container">
      <p>{{ figure.name }}</p>
      <a target="_blank" :href="figure.set_url">Show details</a>
    </div>
  </div>
</template>


<style scoped>
.figure {
  background-color: #fff;
  color: black;
  width: 320px;
  height: 320px;
  padding: 25px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 40%;
}

.text-container p {
  font-weight: 700;
  margin-top: 10px;
}

.img {
  min-height: 60%;
  max-height: 60%;
  width: auto;
  margin-bottom: 10px;
}

.figure a {
  color: var(--vt-c-orange);
  font-weight: 700;
  text-decoration: none;
}

a:hover {
  color: var(--vt-c-orange-hover);
}
</style>