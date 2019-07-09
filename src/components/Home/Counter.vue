<template>
  <div class="counter">
    <!-- Counter Circle Part -->
    <div class="counter__circle">
      <v-progress-circular
        :rotate="-90"
        :size="400"
        :width="15"
        :value="(time_remain/(total_time)) * 100 "
        :color="color.dark"
      >
        <v-icon v-if="isCounting" @click="stopTimer" :color="color.dark">pause_circle_filled</v-icon>
        <v-icon v-else @click="startTimer" :color="color.dark">play_circle_filled</v-icon>
      </v-progress-circular>
    </div>
    <!-- Counter Text Part -->
    <div class="counter__text">
      <h2 class="currentList__time" :style="{ color : color.dark}">{{ getRemainTime }}</h2>
      <v-btn color="warning" v-if="isCounting" @click="stopTimer">STOP</v-btn>
      <v-btn color="success" v-else @click="startTimer">START</v-btn>
      <v-btn color="info" @click="reSetTimer">Reset</v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { clearInterval } from "timers";
export default {
  data() {
    return {
      total_time: null,
      // 25 minuted times 60 seconds
      time_remain: null,
      currentTime: {
        minute: null,
        second: null
      },
      intervalId: null,
      isCounting: false,
      isBreak: null,
      color: null
    };
  },
  computed: {
    getRemainTime() {
      if (this.currentTime.minute < 10) {
        this.currentTime.minute = "0" + this.currentTime.minute;
      }

      if (this.currentTime.second < 10) {
        this.currentTime.second = "0" + this.currentTime.second;
      }

      return `${this.currentTime.minute}:${this.currentTime.second}`;
    }
  },
  methods: {
    initTimer() {
      this.isBreak = this.$store.getters.isBreak;
      if (this.isBreak) {
        // 5 minutes break
        this.setTimer(1 * 5);
      } else {
        // 25 minutes Focus
        this.setTimer(1 * 5);
      }
      this.updateTimer();
      this.updateColor();
    },
    setTimer(second) {
      this.total_time = second;
      this.time_remain = second;
    },
    updateTimer() {
      // Update the Current remain Time
      this.currentTime.minute = Math.floor(this.time_remain / 60);
      this.currentTime.second = this.time_remain % 60;
    },
    changeState() {
      // Change the state
      this.$store.dispatch("change_break");
      this.initTimer();
      this.stopTimer();
      this.updateColor();
    },
    updateColor() {
      this.color = this.getColor();
      this.$emit("updateColor");
    },
    countdown() {
      const vm = this;
      vm.intervalId = setInterval(() => {
        if (vm.time_remain > 0) {
          vm.time_remain -= 1;
        } else {
          // Focus or break
          vm.changeState();
          return;
        }
        vm.updateTimer();
      }, 1000);
    },
    startTimer() {
      this.isCounting = true;
      this.countdown();
    },
    stopTimer() {
      this.isCounting = false;
      window.clearInterval(this.intervalId);
    },
    reSetTimer() {
      this.stopTimer();
      this.initTimer();
    }
  },
  created() {
    this.initTimer();
  }
};
</script>
