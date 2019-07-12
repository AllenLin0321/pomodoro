<template>
  <canvas ref="myChart" width="500" height="250"></canvas>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "monthly-sales-chart",
  mounted() {
    new Chart(this.$refs.myChart, {
      type: "bar",
      data: {
        labels: ["7/15", "7/16", "7/17", "7/18", "7/19"],
        datasets: [
          {
            backgroundColor: [
              "rgba(255, 99, 132, 0.4)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)"
            ],
            borderWidth: 1,
            label: "Tomatos",
            data: [8, 10, 6, 4, 5]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
};
</script>
