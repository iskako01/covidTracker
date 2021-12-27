<template>
  <main>
    <the-loader v-if="loading" />

    <data-title :covidDate="covidDate" :title="title" />

    <data-boxes :stats="stats" />

    <country-select :countries="countries" @on-change="onChange" />
  </main>
</template>

<script>
import { fetchCovidData } from "../api";
import TheLoader from "../components/TheLoader.vue";
import DataTitle from "../components/DataTitle.vue";
import DataBoxes from "../components/DataBoxes.vue";
import CountrySelect from "../components/CountrySelect.vue";
export default {
  name: "Home",
  components: { TheLoader, DataTitle, DataBoxes, CountrySelect },
  data() {
    return {
      title: "Global",
      loading: true,
      covidDate: {},
      stats: {},
      countries: [],
    };
  },

  async created() {
    const data = await fetchCovidData();
    this.covidDate = data.Date;
    this.countries = data.Countries;
    this.stats = data.Global;
    this.loading = false;
  },
  methods: {
    onChange(countryId) {
      const country = this.countries.find((c) => c.ID === countryId);
      this.stats = country;
      this.title = country.Country;
    },
  },
};
</script>
