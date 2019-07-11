<template>
  <v-layout fluid fill-height>
    <v-flex xs7>
      <v-layout justify-space-between column fill-height>
        <!-- Input a new mission -->
        <v-flex xs2>
          <AddMission @updateTodoList="updateTodoList" :color="color" />
        </v-flex>

        <!-- Current pomodoro -->
        <v-flex class="currentList">
          <ToDoList :list="nFinishList[0]" class="currentList__title" />
          <Counter @updateColor="updateColor" />
        </v-flex>

        <!-- pomodoro List -->
        <v-flex xs4>
          <ToDoList
            v-for="mission in nFinishList.slice(1,4)"
            :key="mission.index"
            :list="mission"
            @changeOrder="changeOrder"
          />
          <v-btn
            :color="color.dark"
            flat
            small
            outline
            v-if="showMore"
            @click="toPage(`/dashboard`)"
          >More</v-btn>
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
      nFinishList: [],
      // Check if To Do Lists's length is over 4
      showMore: false,
      isBreak: null,
      color: null
    };
  },
  components: {
    AddMission,
    ToDoList,
    Counter
  },
  computed: {
    ...mapGetters(["get_currentMission", "get_nFinishList"])
  },
  methods: {
    updateTodoList() {
      let nFinishList = this.get_nFinishList;

      // If More than 3 Mission, shiw MORE button
      if (nFinishList.length > 4) {
        this.showMore = true;
      }

      this.nFinishList = nFinishList;
    },
    changeOrder(index) {
      // Change the order in Vuex
      this.$store.dispatch("change_order", index);

      // Re-render the page
      this.updateTodoList();
    },
    updateColor() {
      this.color = this.getColor();
      this.$emit("updateColor");
    },
    toPage(pageName) {
      this.$router.push(pageName);
    }
  },
  created() {
    this.updateColor();
    this.updateTodoList();
  }
};
</script>
