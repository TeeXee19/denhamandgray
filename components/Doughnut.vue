<template>
    <div>
      <DoughnutChart />
    </div>
  </template>
  
  <script>
  import { Doughnut } from 'vue-chartjs'
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  
  ChartJS.register(ArcElement, Tooltip, Legend)
  
  export default {
    name: 'DoughnutChart',
    components: {
      Doughnut
    },
    data() {
      return {
        chartData: {
          labels: ['58%', '42%'],
          datasets: [
            {
              data: [58, 42],
              backgroundColor: ['#42A5F5', '#EEEEEE'],
              hoverBackgroundColor: ['#64B5F6', '#E0E0E0']
            }
          ]
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '70%', // Adjust the cutout percentage to make the doughnut chart thicker or thinner
          plugins: {
            legend: {
              display: false // Hide the legend if you don't need it
            },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return tooltipItem.label + ': ' + tooltipItem.raw + '%'
                }
              }
            }
          }
        }
      }
    },
    mounted() {
      this.renderChart(this.chartData, this.chartOptions)
    },
    methods: {
      renderChart(chartData, chartOptions) {
        this.$refs.canvas.renderChart(chartData, chartOptions)
      }
    }
  }
  </script>
  
  <style scoped>
  .doughnut-container {
    position: relative;
    margin: auto;
    height: 40vh; /* Adjust the height of the chart container */
    width: 40vw;  /* Adjust the width of the chart container */
  }
  </style>
  