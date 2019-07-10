<template>
  <div class="navbar">
    <div
      v-for="(nav_bar, key) in nav_bars"
      :key="key"
      class="navbar__item"
      :class="{'navbar__item--active': key==pageIndex}"
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
      pageIndex: 0,
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
    // Router push
    toPage(pageName) {
      this.$router.push(pageName);
      this.updateNavColor();
    },
    // Change the Nav Bar color
    updateNavColor() {
      const vm = this;
      const currentPage = vm.$route.meta.page;
      vm.nav_bars.forEach((element, index) => {
        if (element.url == currentPage) {
          vm.pageIndex = index;
        }
      });
    }
  },
  mounted() {
    this.updateNavColor();
  }
};
</script>


