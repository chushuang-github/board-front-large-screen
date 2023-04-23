<template>
  <Panel>
    <div class="title">饼形图 - 年龄分布</div>
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
    tooltip: {
      trigger: 'item',
      // formatter: '{a} <br/> {b}：{c} ({d})%'
    },
    legend: {
      // 距离底部为0%
      bottom: "0%",
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: "12"
      }
    },
    // 饼形图的颜色
    color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
    series: [
      {
        name: "年龄分布",
        type: "pie",
        // 设置饼形图在容器中的位置
        center: ["50%", "45%"],
        //  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的
        radius: ["45%", "70%"],
        // 不显示连接线
        labelLine: { show: false },
        avoidLabelOverlap: false,
        // 标签文字
        label: {
          show: false,
          position: 'center'
        },
        // 高亮
        emphasis: {
          label: {
            show: true,
            fontSize: 14,
            fontWeight: 'bold',
            color: 'white'
          }
        },
        data: [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" }
        ]
      }
    ]
  }
}
</script>

<style lang="less" scoped></style>