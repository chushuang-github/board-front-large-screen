<template>
  <Panel>
    <div class="title">
      <span>折线图 - 人员变化</span>
      <template v-for="(item, index) in yearData" :key="index">
        <a href="javascript:;" @click="handleTabClick(index)">{{ item.year }}</a>
      </template>
    </div>
    <div ref="chartRef" class="chart"></div>
  </Panel>
</template>

<script setup>
import Panel from "../components/panel.vue"
import { ref, onMounted } from "vue"
import useEcharts from "../hooks/useEcharts"

// 数据
let yearData = ref([
  {
    year: '2020',  // 年份
    data: [  // 两个数组是因为有两条线
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ]
  },
  {
    year: '2021',  // 年份
    data: [  // 两个数组是因为有两条线
      [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
      [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
    ]
  }
])

let chartRef = ref(null)
let hyChart = null
onMounted(() => {
  setupEchart()
})
function setupEchart() {
  if(!hyChart) {
    hyChart = useEcharts(chartRef.value)
  }
  let option = getOption(yearData.value[0].data)
  hyChart.setOption(option)
}
function getOption(data) {
  return {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      textStyle: {
        color: '#4c9bfd' // 图例文字颜色
      },
      right: '10%' // 距离右边10%
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,                // 显示边框
      borderColor: '#012f4a',    // 边框颜色
      containLabel: true         // 包含刻度文字在内
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      // 去除刻度线
	    axisTick: {
        show: false
      },
       // 文本颜色
      axisLabel: {
        color: '#4c9bfd'
      },
      // 去除轴线
      axisLine: {
        show: false 
      },
      // 去除轴内间距
      boundaryGap: false  
    },
    yAxis: {
      type: 'value',
      // 去除刻度
      axisTick: {
        show: false  
      },
      // 文字颜色
      axisLabel: {
        color: '#4c9bfd' 
      },
      // 分割线颜色
      splitLine: {
        lineStyle: {
          color: '#012f4a' 
        }
      }
    },
    // 两条折线的颜色
    color: ['#00f2f1', '#ed3f35'],
    series: [
      {
        name:'新增粉丝',
        type: 'line',
        // 折线修饰为圆滑
        smooth: true,
        data: data[0]
      },
      {
        name:'新增游客',
        type: 'line',
        // 折线修饰为圆滑
        smooth: true,
        data: data[1]
      }
    ]
  }
}

// 点击tab栏切换
function handleTabClick(index) {
  let data = yearData.value[index].data
  let option = getOption(data)
  hyChart.setOption(option)
}
</script>

<style lang="less" scoped>
.title {
  a {
    text-decoration: none;
    margin: 0px 10px;
    font-size: 15px;
    color: orange;
  }
}
</style>