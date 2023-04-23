<template>
  <Panel>
    <div class="title">折现图 - 播放量</div>
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
      trigger: 'axis',
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: "12"
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
        // 文本颜色、文字大小为
        axisLabel: {
          textStyle: {
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: 12
          }
        },
         // x轴线的颜色
        axisLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.2)"
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: { show: false },
        // y轴线的颜色
        axisLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.1)"
          }
        },
        // y轴文件颜色和大小
        axisLabel: {
          textStyle: {
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: 12
          }
        },
	      // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.1)"
          }
        }
      }
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        // 填充区域
        areaStyle: {
          // 渐变色，只需要复制即可
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 线条圆滑
        smooth: true,
        // 单独修改线的样式
        lineStyle: {
          color: "#0184d5",
          width: 2 
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,
        // 开始不显示拐点，鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, 0.1)",
          borderWidth: 12
        },
        data: [30, 40, 30, 40,30, 40, 30,60, -20, 40, 30, 40, 30, 40,30, 40, 30,60, -20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40]
      },
      {
        name: 'Union Ads',
        type: 'line',
        // 填充区域
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(0, 216, 135, 0.4)"
              },
              {
                offset: 0.8,
                color: "rgba(0, 216, 135, 0.1)"
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 线条圆滑
        smooth: true,
        // 单独修改线的样式
        lineStyle: {
          color: "#00d887",
          width: 2
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 开始不显示拐点，鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, 0.1)",
          borderWidth: 12
        },
        data: [130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,-20, 140,30, -40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20]
      }
    ]
  }
}
</script>

<style lang="less" scoped></style>