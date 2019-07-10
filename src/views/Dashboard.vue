<template>
  <v-container fluid class="dashboard">
    <v-layout align-start justify-space-between row fill-height>
      <!-- Nav Bar -->
      <v-flex xs4 class="dashboard__navbar">
        <Nav :icons="icons" />
      </v-flex>

      <!-- Content -->
      <v-flex xs6 class="dashboard__content">
        <transition enter-active-class="animated fadeIn fast">
          <router-view></router-view>
        </transition>
      </v-flex>

      <!-- Footer -->
      <v-flex xs2 class="dashboard__footer">
        <nav class="navigation">
          <div class="navigation__icon">
            <v-icon medium @click="toPage(`/`)">{{icons.close}}</v-icon>
          </div>
          <v-spacer></v-spacer>
          <div class="navigation__title">
            <h1>pomodoro</h1>
          </div>
        </nav>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Nav from "../components/Dashboard/Nav";
export default {
  data() {
    return {
      icons: null
    };
  },
  components: {
    Nav
  },
  methods: {
    toPage(pageName) {
      this.$router.push(pageName);
    }
  },
  created() {
    this.icons = this.$store.getters.getIcons;
  }
};
</script>
