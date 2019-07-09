<template>
  <div class="counter">
    <!-- Counter Circle Part -->
    <div class="counter__circle">
      <v-progress-circular
        :rotate="-90"
        :size="400"
        :width="15"
        :value="(time_remain/(1500)) * 100 "
        color="#FF4384"
      >
        <v-icon v-if="isCounting" @click="stopTimer">pause_circle_filled</v-icon>
        <v-icon v-else @click="startTimer">play_circle_filled</v-icon>
      </v-progress-circular>
    </div>
        <!-- Counter Text Part -->
    <div class="counter__text">
      <h2 class="currentList__time">{{ getRemainTime }}</h2>
      <v-btn color="warning" v-if="isCounting" @click="stopTimer">STOP</v-btn>
      <v-btn color="success" v-else @click="startTimer">START</v-btn>
      <v-btn color="info" @click="reSetTimer">Reset</v-btn>
    </div>
  </div>
</template>

<script>
import { clearInterval } from "timers";
export default {
  data() {
    return {
      // 25 minuted times 60 seconds
      time_remain: 25 * 60,
      currentTime: {
        minute: null,
        second: null
      },
      intervalId: null,
      isCounting: false
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
      this.currentTime.minute = Math.floor(this.time_remain / 60);
      this.currentTime.second = this.time_remain % 60;
    },
    countdown() {
      const vm = this;
      vm.intervalId = setInterval(() => {
        if (vm.time_remain > 0) {
          vm.time_remain -= 1;
          vm.initTimer();
        } else {
          return;
        }
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
      this.time_remain = 25 * 60;
      this.initTimer();
    }
  },
  created() {
    this.initTimer();
  }
};
</script>
