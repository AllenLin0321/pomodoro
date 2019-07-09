<template>
  <v-container class="home" fluid>
    <v-layout>
      <v-flex xs8 class="home__left" :style="{ backgroundColor : color.light}">
        <HomeLeft @updateColor="updateColor" />
      </v-flex>
      <v-flex xs4 class="home__right">
        <HomeRight />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HomeLeft from "../components/Home/Home_Left";
import HomeRight from "../components/Home/Home_Right";
export default {
  data() {
    return {
      color: null
    };
  },
  components: {
    HomeLeft,
    HomeRight
  },
  methods: {
    updateColor() {
      console.log(this.color);
      this.color = this.getColor();
    }
  },
  created() {
    this.color = this.getColor();
  }
};
</script>
