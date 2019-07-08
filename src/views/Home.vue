<template>
  <v-container class="home" fluid>
    <v-layout>
      <v-flex xs8 class="home__left">
        <HomeLeft />
      </v-flex>
      <v-flex xs4 class="home__right">
        <HomeRight />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HomeLeft from "../components/Home_Left";
import HomeRight from "../components/Home_Right";
export default {
  components: {
    HomeLeft,
    HomeRight
  }
};
</script>
