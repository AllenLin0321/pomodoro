<template>
  <v-app>
    <Home/>
  </v-app>
</template>

<script>
import Home from './views/Home'
export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
  components: {
    Home
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main';

</style>

