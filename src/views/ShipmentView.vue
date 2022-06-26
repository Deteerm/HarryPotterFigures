<script setup lang="ts">
import FigureSummary from '@/components/FigureSummary.vue'
</script>

<template>
  <section class="shipment-view">
    <div class="form-wrapper">
      <h1>SHIPPING DETAILS</h1>
      <form>
        <div class="d-flex">
          <div class="field w-50">
            <label for="name">Name</label>
            <input id="name" type="text">
          </div>
          <div class="field w-50">
            <label for="surname">Surame</label>
            <input id="surname" type="text">
          </div>
        </div>
        <div class="field">
          <label for="phone-number">Phone Number</label>
          <input id="phone-number" type="text">
        </div>
        <div class="field">
          <label for="birth-date">Date of birth</label>
          <input id="birth-date" type="text">
        </div>
        <div class="field">
          <label for="address">Address</label>
          <input id="address" type="text">
        </div>
        <div class="field">
          <label for="city">City</label>
          <input id="city" type="text">
        </div>
        <div class="d-flex">
          <div class="field w-50">
            <label for="state">State</label>
            <input id="state" type="text">
          </div>
          <div class="field w-50">
            <label for="zip-code">Zip Code</label>
            <input id="zip-code" type="text">
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
}
</style>