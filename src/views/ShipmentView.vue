<script setup lang="ts">
import FigureSummary from '@/components/FigureSummary.vue'
import { onErrorCaptured, ref, type Ref, computed } from 'vue'
import fakeFetch from '@/utils/fakeFetch'
import { useRouter } from 'vue-router'
import { useStore } from '@/stores/figures'

const router = useRouter()
const store = useStore()

const name: Ref<string> = ref('')
const surnname: Ref<string> = ref('')
const phoneNumber: Ref<string> = ref('')
const email: Ref<string> = ref('')
const birthDate: Ref<string> = ref('')
const address: Ref<string> = ref('')
const city: Ref<string> = ref('')
const state: Ref<string> = ref('')
const zipCode: Ref<string> = ref('')

const isLoading: Ref = ref(false)

const validName: Ref = ref()
const validateName = (): void => {
  validName.value = name.value.length > 0 ? 'valid' : 'notValid'
}

const validSurname: Ref = ref()
const validateSurname = (): void => {
  validSurname.value = surnname.value.length > 0 ? 'valid' : 'notValid'
}

const validPhoneNumber: Ref = ref()
const validatePhoneNumber = (): void => {
  phoneNumber.value = phoneNumber.value.replace(/\s*/g, '')
  validPhoneNumber.value = phoneNumber.value.match(/^\d{9}$/) || phoneNumber.value.match(/^\+\d{2}\d{9}$/) ? 'valid' : 'notValid'
}

const validEmail: Ref = ref()
const validateEmail = (): void => {
  email.value = email.value.trim()
  validEmail.value = email.value.match(/^.*@.*\..*$/) ? 'valid' : 'notValid'
}

const validDate: Ref = ref()
const validateDate = (): void => {
  const givenDate: number = Date.parse(birthDate.value)
  if (givenDate === NaN) validDate.value = 'notValid'
  validDate.value = (Date.now() > givenDate && givenDate > Date.parse('1900-01-01')) ? 'valid' : 'notValid'
}

const handleKeyEventDate = (e: KeyboardEvent) => {
  birthDate.value = birthDate.value.replace(/\/\//g, '/')
  if (!e.key.match(/\d+/) && !e.key.match('Backspace')) return e.preventDefault()
  if (birthDate.value.match(/^\d{4}$/)) birthDate.value += '/'
  else if (birthDate.value.match(/^\d{4}\/\d{2}$/)) birthDate.value += '/'
  else if (birthDate.value.length === 10) return e.preventDefault()
}

const validAddress: Ref = ref()
const validateAddress = (): void => {
  validAddress.value = address.value.length > 0 ? 'valid' : 'notValid'
}

const validCity: Ref = ref()
const validateCity = (): void => {
  validCity.value = city.value.length > 0 ? 'valid' : 'notValid'
}

const validState: Ref = ref()
const validateState = (): void => {
  validState.value = state.value.length > 0 ? 'valid' : 'notValid'
}

const validZipCode: Ref = ref()
const validateZipCode = (): void => {
  validZipCode.value = zipCode.value.match(/\d{2}-\d{3}/) ? 'valid' : 'notValid'
}

const handleKeyEventZipCode = (e: KeyboardEvent): void => {
  if (!e.key.match(/\d+/) && !e.key.match('Backspace')) return e.preventDefault()
  if (zipCode.value.match(/^\d{2}$/)) zipCode.value += '-'
  else if (zipCode.value.length === 6) return e.preventDefault()
}

const formFilledCorrectly = computed((): boolean => {
  return (validName.value &&
    validSurname.value &&
    validPhoneNumber.value &&
    validDate.value &&
    validAddress.value &&
    validCity.value &&
    validState.value &&
    validZipCode.value)
})

const submit = async (): Promise<void> => {

  isLoading.value = true

  await fakeFetch('/fake/rest/api-service', {
    name: name.value,
    surnname: surnname.value,
    phoneNumber: phoneNumber.value,
    birthDate: birthDate.value,
    address: address.value,
    city: city.value,
    state: state.value,
    zipCode: zipCode.value
  })

  isLoading.value = false

  store.$reset()
  store.homePageMsg = "Thank you for your order!"
  router.push('/')
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
          <label v-if="validPhoneNumber === 'notValid'">Please provide correct phone number</label>
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input v-model="email" @blur="validateEmail" :class="{ 'error': validEmail === 'notValid' }" id="email"
            type="text">
          <label v-if="validEmail === 'notValid'">Please provide correct email</label>
        </div>
        <div class="field">
          <label for="birth-date">Date of birth</label>
          <input v-model="birthDate" @blur="validateDate" @keypress="handleKeyEventDate"
            :class="{ 'error': validDate === 'notValid' }" id="birth-date" placeholder="yyyy/mm/dd" type="text">
          <label v-if="validDate === 'notValid'">Please provide correct date</label>
        </div>
        <div class="field">
          <label for="address">Address</label>
          <input v-model="address" @blur="validateAddress" :class="{ 'error': validAddress === 'notValid' }"
            id="address" type="text">
          <label v-if="validAddress === 'notValid'">Please provide your address</label>
        </div>
        <div class="field">
          <label for="city">City</label>
          <input v-model="city" @blur="validateCity" :class="{ 'error': validCity === 'notValid' }" id="city"
            type="text">
          <label v-if="validCity === 'notValid'">Please provide a correct city</label>
        </div>

        <div class="d-flex">
          <div class="field w-50">
            <label for="state">State</label>
            <input v-model="state" @blur="validateState" :class="{ 'error': validState === 'notValid' }" id="state"
              type="text">
            <label v-if="validState === 'notValid'">Please provide your state</label>
          </div>

          <div class="field w-50">
            <label for="zip-code">Zip Code</label>
            <input v-model="zipCode" @blur="validateZipCode" @keypress="handleKeyEventZipCode"
              :class="{ 'error': validZipCode === 'notValid' }" id="zip-code" type="text" placeholder="##-###">
            <label v-if="validZipCode === 'notValid'">Please provide correct zip code</label>
          </div>
        </div>
      </form>
    </div>
    <div class="summary">
      <Suspense>
        <FigureSummary></FigureSummary>
      </Suspense>
      <button :disabled="!formFilledCorrectly" @click="submit" :class="{ 'disabled': !formFilledCorrectly }"
        class="button mb-4 mt-8">
        <div v-if="isLoading" class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span v-else>SUBMIT</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.shipment-view {
  display: flex;
  justify-content: space-between;
  width: 80%;
}

.summary {
  background: var(--vt-c-white);
  color: black;
  width: 35%;
  margin-left: 3rem;
  border-radius: 1rem;
}

.w-50 {
  width: 50%;
}

@media screen and (min-width: 650px) and (max-width: 990px) {
  .shipment-view {
    flex-direction: column;
    width: 100% !important;
  }

  .form-wrapper {
    width: 100% !important;
  }

  .summary {
    width: 60% !important;
    margin: 0 auto !important;
  }
}

@media screen and (max-width: 649px) {
  .shipment-view {
    flex-direction: column;
    width: 100% !important;
  }

  .form-wrapper {
    width: 100% !important;
  }

  .summary {
    width: 100% !important;
    margin: 0 auto !important;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
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