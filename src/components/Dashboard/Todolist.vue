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
      <div class="nFinishList">
        <ToDoList v-for="mission in nFinishList" :key="mission.index" :list="mission" />
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
      <div class="nFinishList">
        <ToDoList v-for="mission in FinishList" :key="mission.index" :list="mission" />
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
    ...mapGetters(["get_nFinishList", "get_finishList"]),
    refresh() {
      return this.$store.getters.get_refresh;
    }
  },
  watch: {
    refresh() {
      this.updateTodoList();
    }
  },
  methods: {
    updateTodoList() {
      // Get All Missions from vuex
      this.nFinishList = this.get_nFinishList;
      this.FinishList = this.get_finishList;
    }
  },
  created() {
    this.updateTodoList();
  }
};
</script>
