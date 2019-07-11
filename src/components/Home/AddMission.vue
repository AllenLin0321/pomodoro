<template>
  <div class="input">
    <input
      v-model="input_content"
      type="text"
      class="input__content"
      autofocus
      placeholder="ADD A NEW MISSION..."
      @keypress.enter="add_mission"
      :style="{ color : color.dark}"
    />
    <v-icon class="input__action" large @click="add_mission" :color="color.dark">add</v-icon>

    <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="snackbar.timeout">
      {{ snackbar.text }}
      <v-btn dark flat @click="snackbar.show = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { truncate } from 'fs';
export default {
  props:['color'],
  data() {
    return {
      snackbar: {
        show: false,
        color: null,
        timeout: null,
        text: null
      },
      input_content: null
    };
  },
  methods: {
    add_mission() {
      if (this.input_content) {
        const data = {
          content: this.input_content,
          isFinish: false
        };
        // Add the mission to Vuex
        this.$store.dispatch("add_mission", data);

        // Clear the input field
        this.input_content = "";

        // Re-render the page
        this.$emit("updateTodoList");

        // Show the snackBar
        this.showSnackbar("待辦事項新增成功");
      } else {
        this.showSnackbar("請輸入待辦事項", "error");
      }
    },
    showSnackbar(text, color = "success", timeout = 2000) {
      this.snackbar.show = true;
      this.snackbar.text = text;
      this.snackbar.color = color;
      this.snackbar.timeout = timeout;
    }
  }
};
</script>

