<template>
  <div class="navbar">
    <div
      v-for="(nav_bar, key) in nav_bars"
      :key="key"
      class="navbar__item"
      @click="toPage(nav_bar.url)"
    >
      <v-icon class="navbar__icon">{{ nav_bar.icon_name }}</v-icon>
      <p class="navbar__content">{{ nav_bar.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["icons"],
  data() {
    return {
      nav_bars: [
        {
          name: "To-do list",
          icon_name: this.icons.todolist,
          url: "todolist"
        },
        {
          name: "analaytics",
          icon_name: this.icons.analytics,
          url: "analytics"
        },
        {
          name: "ringtones",
          icon_name: this.icons.ringtones,
          url: "ringtones"
        }
      ]
    };
  },
  methods: {
    toPage(pageName) {
      this.$router.push(pageName);
    }
  },
  created() {
    console.log(this.$route);
  }
};
</script>


