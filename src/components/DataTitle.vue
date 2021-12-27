<template>
  <div class="text-center">
    <h2 class="text-3xl font-bold">{{ title }}</h2>
    <div class="text-2xl mt-4 mb-10">
      {{ dateformat }}
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    covidDate: {
      type: String,
    },
    title: {
      type: String,
      default: "Global",
    },
  },
  data() {
    return {};
  },
  computed: {
    dateformat() {
      return moment(this.covidDate).format("MMMM Do YYYY,h:mm:ss a");
    },
  },
};
</script>
