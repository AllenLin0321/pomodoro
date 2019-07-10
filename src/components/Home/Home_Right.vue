<template>
  <nav class="navigation">
    <div class="navigation__icon">
      <v-icon medium @click="toPage(`dashboard`)">{{icons.todolist}}</v-icon>
      <v-icon medium @click="toPage(`dashboard/analytics`)">{{icons.analytics}}</v-icon>
      <v-icon medium @click="toPage(`dashboard/ringtones`)">{{icons.ringtones}}</v-icon>
    </div>
    <v-spacer></v-spacer>
    <div class="navigation__title">
      <h1>pomodoro</h1>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      icons: null
    }
  },
  methods: {
    toPage(pageName) {
      this.$router.push(pageName);
    }
  },
  created() {
    this.icons = this.$store.getters.getIcons;
  }
}
</script>

