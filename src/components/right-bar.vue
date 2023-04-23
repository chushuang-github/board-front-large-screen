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
  let myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"]
  return {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%",
      containLabel: false
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: 'category',
        data: ["React", "Webpack", "JavaScript", "Vue", "Node"],
        inverse: true,
        //不显示y轴线条
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff"
        },
      },
      {
        show: true,
        data: [702, 350, 610, 793, 664],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        }
      }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        // 关联yAxis里面的第0项
        yAxisIndex: 0,
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 柱子设为圆角
        itemStyle: {
          barBorderRadius: 20,
          color: function(params){
            return myColor[params.dataIndex]
          }
        },
        label: {
          show: true,
          color: "white",
          // 显示柱子内部的文字
          position: "inside",
          // 文字的显示格式
          formatter: "{c}%"
        },
        data: [70, 34, 60, 78, 69]
      },
      {
        name: '框',
        type: 'bar',
        // 关联yAxis里面的第1项
        yAxisIndex: 1,
        barCategoryGap: 50,
        barWidth: 16,
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        },
        data: [100, 100, 100, 100, 100]
      }
    ]
  }
}
</script>

<style lang="less" scoped></style>