<script setup lang="ts">
import FigureSummary from '@/components/FigureSummary.vue'
import { ref, computed, type Ref } from 'vue'

const name: Ref<string> = ref('')
const surnname: Ref<string> = ref('')
const phoneNumber: Ref<string> = ref('')
const birthDate: Ref<string> = ref('')
const address: Ref<string> = ref('')
const city: Ref<string> = ref('')
const state: Ref<string> = ref('')
const zipCode: Ref<string> = ref('')

const validName: Ref = ref()
const validateName = (): void => {
  if (validName)
    validName.value = name.value.length > 0 ? 'valid' : 'notValid'
}

const validSurname: Ref = ref()
const validateSurname = (): void => {
  if (validSurname)
    validSurname.value = surnname.value.length > 0 ? 'valid' : 'notValid'
}

const validPhoneNumber: Ref = ref()
const validatePhoneNumber = (): void => {
  phoneNumber.value = phoneNumber.value.replace(/\s*/g, '')
  if (validPhoneNumber)
    validPhoneNumber.value = phoneNumber.value.match(/^\d{9}$/) || phoneNumber.value.match(/^+\d{2}\d{9}$/) ? 'valid' : 'notValid'
}
</script>

<template>
  <section class="shipment-view">
    <div class="form-wrapper">
      <h1 class="header">SHIPPING DETAILS</h1>
      <form>
        <div class="d-flex">
          <div class="field w-50">
            <label for="name">Name</label>
            <input v-model="name" @blur="validateName" :class="{ 'error': validName === 'notValid' }" id="name"
              type="text">
            <label v-if="validName === 'notValid'">Please provide your name</label>
          </div>
          <div class="field w-50">
            <label for="surname">Surame</label>
            <input v-model="surnname" @blur="validateSurname" :class="{ 'error': validSurname === 'notValid' }"
              id="surname" type="text">
            <label v-if="validSurname === 'notValid'">Please provide your surname</label>
          </div>
        </div>

        <div class="field">
          <label for="phone-number">Phone Number</label>
          <input v-model="phoneNumber" @blur="validatePhoneNumber" :class="{ 'error': validPhoneNumber === 'notValid' }"
            id="phone-number" type="text">
          <label v-if="validPhoneNumber === 'notValid'">Please provide a correct phone number</label>
        </div>


        <div class="field">
          <label for="birth-date">Date of birth</label>
          <input v-model="birthDate" id="birth-date" type="text">
        </div>
        <div class="field">
          <label for="address">Address</label>
          <input v-model="address" id="address" type="text">
        </div>
        <div class="field">
          <label for="city">City</label>
          <input v-model="city" id="city" type="text">
        </div>
        <div class="d-flex">
          <div class="field w-50">
            <label for="state">State</label>
            <input v-model="state" id="state" type="text">
          </div>
          <div class="field w-50">
            <label for="zip-code">Zip Code</label>
            <input v-model="zipCode" id="zip-code" type="text">
          </div>
        </div>
      </form>
    </div>
    <FigureSummary></FigureSummary>
  </section>
</template>

<style scoped>
.shipment-view {
  display: flex;
  justify-content: space-between;
  width: 80%;
}

.w-50 {
  width: 50%;
}

@media screen and (max-width: 900px) {
  .shipment-view {
    flex-direction: column;
    width: 100% !important;
  }
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  width: 100%;
}

form label {
  font-weight: 500;
}

form .field {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0.5rem 1.5rem 0;
}

form .field input {
  font-size: 0.8rem;
  padding: 0.7rem;
  font-weight: 700;
  color: black;
  border-radius: 4px;
  box-shadow: none;
  border: 1px solid;
}

form .field input:focus {
  outline: none;
  box-shadow: 0px 0px 4px 0 black inset;
}

.form-wrapper {
  text-align: left;
  width: 70%;
}

.d-flex {
  display: flex;
  align-items: start;
}

.header {
  margin-bottom: 2rem;
}

form .field .error {
  box-shadow: 0px 0px 4px 0 red inset;
}

form .field .error:focus {
  box-shadow: 0px 0px 8px 0 red inset;
}
</style>