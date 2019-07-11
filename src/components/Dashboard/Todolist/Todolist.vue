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
        <ToDoList
          v-for="(mission, index) in n_finish_list"
          :key="index"
          :content="mission.content"
          :index="index+1"
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
      <div class="nFinishList">
        <ToDoList
          v-for="(mission, index) in finish_list"
          :key="index"
          :content="mission.content"
          :index="index+1"
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
      all_missions: [],
      n_finish_list: [],
      finish_list: []
    };
  },
  components: {
    AddMission,
    ToDoList
  },
  computed: {
    ...mapGetters(["get_allMission"])
  },
  methods: {
    updateTodoList() {
      // Get All Missions from vuex
      this.all_missions = this.get_allMission;

      // DO NOT show the List which already finish
      this.n_finish_list = this.all_missions.filter(
        mission => mission.isFinish == false
      );

      this.finish_list = this.all_missions.filter(
        mission => mission.isFinish == true
      );
    }
  },
  created() {
    this.updateTodoList();
  }
};
</script>
