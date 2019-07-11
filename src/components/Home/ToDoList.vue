<template>
  <div class="todolist">
    <!-- CheckBox -->
    <div class="todolist__checkBox" @click="updateState">
      <v-icon v-if="!list.isFinish">check_box_outline_blank</v-icon>
      <v-icon v-else>check_box</v-icon>
    </div>

    <!-- Content -->
    <div class="todolist__content" @click="updateState" :class="{check: list.isFinish}">
      <h1>{{ list.content }}</h1>
    </div>
    <v-spacer></v-spacer>

    <!-- Start Button -->
    <div class="todolist__start" @click="changeOrder" v-if="!list.isFinish">
      <v-icon>play_circle_outline</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    updateState() {
      this.$store.dispatch("change_state", this.list.index);
    },
    changeOrder() {
      this.$emit("changeOrder", this.list.index);
    }
  },
  props: ["list"]
};
</script>


