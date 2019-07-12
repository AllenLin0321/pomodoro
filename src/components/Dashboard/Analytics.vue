<template>
  <div>
    <div class="todolist-title">
      <h2 class="todolist-title__content">focus time</h2>
    </div>
    <div>
      <v-layout row>
        <v-flex class="analytics-data">
          <h3 class="analytics-data__title">Today</h3>
          <h4 class="analytics-data__number">
            0
            <span class="analytics-data__unit">/tomato</span>
          </h4>
        </v-flex>
        <v-flex class="analytics-data">
          <h3 class="analytics-data__title">Week</h3>
          <h4 class="analytics-data__number">
            9
            <span class="analytics-data__unit">/tomato</span>
          </h4>
        </v-flex>
      </v-layout>
    </div>
    <div class="todolist-title mt-3">
      <h2 class="todolist-title__content">Chart</h2>
    </div>
      <Chart class="mt-3"/>
  </div>
</template>

<script>
import Chart from "./Chart";
export default {
  components: {
    Chart
  }
};
</script>

