<template>
  <Panel>
    <div class="title">饼形图 - 地区分布</div>
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
    // 图例
    legend: {
      right: '0%',
      orient: 'vertical',
      textStyle: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 12
      },
      // 图例每项之间的间隔
      itemGap: 16
    },
    // 提示款
    tooltip: {
      trigger: 'item',
      // formatter: '{a} <br/> {b}：{c} ({d})%'
    },
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    series: [
      {
        name: '地区分布',
        type: 'pie',
        radius: ['20%', '75%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        // 文字标签
        label: {
          color: 'rgba(255, 255, 255, 0.5)',
          fontSize: 12
        },
        // 引导线调整
        labelLine: {
          // 连接扇形图线长
          length: 6,
          // 连接文字线长
          length2: 10
        },
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
        ]
      }
    ]
  }
}
</script>

<style lang="less" scoped></style>