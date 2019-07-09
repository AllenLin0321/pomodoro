<template>
  <div class="todolist">
    <!-- CheckBox -->
    <div class="todolist__checkBox" @click="isCheck = !isCheck">
      <v-icon v-if="isCheck">check_box_outline_blank</v-icon>
      <v-icon v-else>check_box</v-icon>
    </div>

    <!-- Content -->
    <div class="todolist__content" @click="isCheck = !isCheck" :class="{check: !isCheck}">
      <h1>{{ content }}</h1>
    </div>
    <v-spacer></v-spacer>

    <!-- Start Button -->
    <div class="todolist__start" @click="changeOrder">
      <v-icon>play_circle_outline</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCheck: {
        active: false,
        textDecoration: "line-through"
      }
    };
  },
  methods: {
    changeOrder() {
      this.$emit('changeOrder',this.index);
    }
  },
  props: ["content", "index"]
};
</script>


