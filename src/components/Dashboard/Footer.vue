<template>
  <nav class="navigation">
    <div class="navigation__icon">
      <v-icon medium @click="toPage(`/`)">{{icons.close}}</v-icon>
    </div>
    <v-spacer></v-spacer>
    <div class="navigation__title">
      <h1>pomodoro</h1>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["icons"],
  methods: {
    toPage(pageName) {
      this.$router.push(pageName);
    }
  }
};
</script>

