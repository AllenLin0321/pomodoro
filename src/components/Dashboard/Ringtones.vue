<template>
  <div>
    <div class="todolist-title">
      <h2 class="todolist-title__content">work</h2>
    </div>
    <div>
      <v-radio-group v-model="radios_1" row>
        <v-radio label="None" value="radio-1" dark color="#FF4384"></v-radio>
        <v-radio label="Default" value="radio-2" dark color="#FF4384"></v-radio>
      </v-radio-group>
    </div>
    <div class="todolist-title mt-3">
      <h2 class="todolist-title__content">break</h2>
    </div>
    <div>
      <v-radio-group v-model="radios_2" row>
        <v-radio label="None" value="radio-3" dark color="#FF4384"></v-radio>
        <v-radio label="Default" value="radio-4" dark color="#FF4384"></v-radio>
      </v-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radios_1: "radio-1",
      radios_2: "radio-4",
    };
  }
};
</script>