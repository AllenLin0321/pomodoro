<template>
  <v-layout fluid fill-height>
    <v-flex xs7>
      <v-layout justify-space-between column fill-height>
        <!-- Input a new mission -->
        <v-flex xs2>
          <AddMission v-on:renewList="updateTodoList" />
        </v-flex>

        <!-- Current pomodoro -->
        <v-flex class="currentList">
          <ToDoList :content="missions[0].content" class="currentList__title" />
          <Counter />
        </v-flex>

        <!-- pomodoro List -->
        <v-flex xs4>
          <ToDoList
            v-for="(mission, index) in missions.slice(1,4)"
            :key="index"
            :content="mission.content"
            :index="index"
            @changeOrder="changeOrder"
          />
          <v-btn color="#FF4384" flat small outline v-if="showMore">More</v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex></v-flex>
  </v-layout>
</template>

<script>
import AddMission from "./AddMission";
import ToDoList from "./ToDoList";
import Counter from "./Counter";

import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      missions: [],
      // Check if To Do Lists's length is over 4
      showMore: false
    };
  },
  components: {
    AddMission,
    ToDoList,
    Counter
  },
  computed: {
    ...mapGetters(["get_currentMission", "get_allMission"])
  },
  methods: {
    updateTodoList() {
      const allMission = this.get_allMission;

      // DO NOT show the List which already finish
      const non_finish_list = allMission.filter(
        mission => mission.isFinish == false
      );

      // If More than 3 Mission
      if (non_finish_list.length > 4) {
        this.showMore = true;
      }
      this.missions = non_finish_list;
    },
    changeOrder(order) {
      
      // Change the order in Vuex
      this.$store.dispatch("change_order", order);

      // Re-render the page
      this.updateTodoList();
    }
  },
  created() {
    this.updateTodoList();
  }
};
</script>
