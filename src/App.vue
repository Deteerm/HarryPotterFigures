<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
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

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.button {
  border-radius: 2rem;
  padding: 10px 50px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.5);
  background-color: rgb(52, 129, 201);
  border: none;
  margin: 2rem auto 10px auto;
  display: block;
  min-width: 168px;
}

a,
.button {
  color: var(--vt-c-white);
  font-weight: 700;
  text-decoration: none;
}

.button:hover {
  cursor: pointer;
  background-color: rgb(52, 107, 158);
}

.lds-ellipsis {
  display: inline-block;
  position: relative;
  left: -35px;
}

.lds-ellipsis div {
  position: absolute;
  width: 8px;
  height: 8px;
  top: -8px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}

.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}

@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(24px, 0);
  }
}
</style>
