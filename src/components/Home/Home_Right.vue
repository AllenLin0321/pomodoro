<template>
  <nav class="navigation">
    <div class="navigation__icon">
      <v-icon medium @click="toPage(`dashboard`)">list</v-icon>
      <v-icon medium>insert_chart</v-icon>
      <v-icon medium>library_music</v-icon>
    </div>
    <v-spacer></v-spacer>
    <div class="navigation__title">
      <h1>pomodoro</h1>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toPage(pageName) {
      this.$router.push(pageName);
    }
  }
}
</script>

