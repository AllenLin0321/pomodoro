<template>
  <div>
    <AddMission :color="color" @updateTodoList="updateTodoList" />

    <!-- To do List -->
    <div class="mt-5">
      <!-- To do List Title -->
      <div class="todolist-title">
        <h2 class="todolist-title__content">to-do</h2>
        <v-spacer></v-spacer>
        <v-icon class="todolist-title__arrowIcon">keyboard_arrow_down</v-icon>
      </div>
      <!-- To do List Content -->
      <div class="dashboard_todolist">
        <ToDoList
          v-for="mission in nFinishList"
          :key="mission.index"
          :list="mission"
          @changeOrder="changeOrder"
          @updateStatus="updateTodoList"
        />
      </div>
    </div>

    <!-- Done List -->
    <div class="mt-5">
      <!-- Done List Title -->
      <div class="todolist-title">
        <h2 class="todolist-title__content">done</h2>
        <v-spacer></v-spacer>
        <v-icon class="todolist-title__arrowIcon">keyboard_arrow_down</v-icon>
      </div>
      <!-- Done List Content -->
      <div class="dashboard_todolist">
        <ToDoList
          v-for="mission in FinishList"
          :key="mission.index"
          :list="mission"
          @updateStatus="updateTodoList"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import AddMission from "@/components/Home/AddMission";
import ToDoList from "@/components/Home/ToDoList";

export default {
  data() {
    return {
      // Set the input filed Color
      color: {
        dark: "#FF4384",
        light: "#FFEDF7"
      },
      nFinishList: [],
      FinishList: []
    };
  },
  components: {
    AddMission,
    ToDoList
  },
  computed: {
    ...mapGetters(["get_nFinishList", "get_finishList"])
  },
  methods: {
    updateTodoList() {
      // Get All Missions from vuex
      this.nFinishList = this.get_nFinishList;
      this.FinishList = this.get_finishList;
    },
    changeOrder(index) {
      // Change the order in Vuex
      this.$store.dispatch("change_order", index);

      // Re-render the page
      this.updateTodoList();

      // Go to the clock page
      this.$router.push("/");
    }
  },
  created() {
    this.updateTodoList();
  }
};
</script>
