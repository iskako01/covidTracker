<template>
  <select
    @change="onChange"
    class="form-select mt-10 block w-full border p-3 rounded"
    v-model="selectedCountry"
  >
    <option value="0">Select Country</option>
    <option v-for="country in countries" :value="country.ID" :key="country.ID">
      {{ country.Country }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    countries: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedCountry: 0,
    };
  },
  methods: {
    onChange() {
      this.$emit("on-change", this.selectedCountry);
    },
  },
};
</script>

<style></style>
