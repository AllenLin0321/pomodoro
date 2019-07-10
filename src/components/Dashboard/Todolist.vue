<template>
  <div>
    <AddMission :color="color" />
  </div>
</template>

<script>
import AddMission from "../Home/AddMission";
export default {
  data() {
    return {
      color: {
        dark: "#FF4384",
        light: "#FFEDF7"
      }
    };
  },
  components: {
    AddMission
  }
};
</script>
