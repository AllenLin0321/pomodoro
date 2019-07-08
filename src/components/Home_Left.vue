<template>
  <v-layout fluid fill-height>
    <v-flex xs7>
      <v-layout justify-space-between column fill-height>
        <!-- Input a new mission -->
        <v-flex xs2>
          <AddMission />
        </v-flex>

        <!-- Current pomodoro -->
        <v-flex>
          <h1>THE FIRST THING TO DO TODAY</h1>
          <h2>25:00</h2>
        </v-flex>

        <!-- pomodoro List -->
        <v-flex>
          <h1>dsjflkjsafj</h1>
          <input type="text" name id />
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex></v-flex>
  </v-layout>
</template>

<script>
import AddMission from "./AddMission";
export default {
  components: {
    AddMission
  }
};
</script>
