<template>
  <Panel>
    <div class="title">柱形图 - 就业行业</div>
    <div ref="chartRef" class="chart"></div>
  </Panel>
</template>

<script setup>
import Panel from "../components/panel.vue"
import { ref, onMounted } from "vue"
import useEcharts from "../hooks/useEcharts"

let chartRef = ref(null)
let hyChart = null
onMounted(() => {
  setupEchart()
})
function setupEchart() {
  if(!hyChart) {
    hyChart = useEcharts(chartRef.value)
  }
  let option = getOption()
  hyChart.setOption(option)
}
function getOption() {
  return {
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '4%',
      top: '10px',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: [ "旅游行业","教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业" ],
        axisTick: {
          alignWithLabel: true
        },
        // x轴文字颜色和大小
        axisLabel: {
          color: "rgba(255, 255, 255, 0.6)",
          fontSize: "12"
        },
        // x轴坐标轴线
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      { 
        type: 'value',
        // y轴文字颜色和大小
        axisLabel: {
          color: "rgba(255, 255, 255, 0.6)",
          fontSize: "12"
        },
        // y轴坐标轴线
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(255, 255, 255, 0.1)",
          }
        },
        // y轴水平的线
        splitLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.1)"
          }
        }
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      }
    ]
  }
}
</script>

<style lang="less" scoped></style>