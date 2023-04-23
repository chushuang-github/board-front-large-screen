<template>
  <div class="header">
    <div class="title">可视化展板 - Echarts</div>
    <div class="show-time">{{ time }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
const time = ref(0)

// 计算当前时间
function fn() {
  let dt = new Date()
  let y = dt.getFullYear()
  let mt = dt.getMonth() + 1
  let day = dt.getDate()
  let h = dt.getHours()     //获取时
  let m = dt.getMinutes()   //获取分
  let s = dt.getSeconds()   //获取秒
  time.value = '当前时间：' + y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒"
}
onMounted(() => {
  fn()
  setInterval(fn, 1000)  //開始运行
})
</script>

<style lang="less" scoped>
.header {
  position: relative;
  height: 100px;
  background: url("../assets/images/head_bg.png");
  background-size: 100% 100%;
  .title {
    color: white;
    font-size: 38px;
    line-height: 80px;
    text-align: center;
  }
  .show-time {
    position: absolute;
    right: 30px;
    top: 0px;
    line-height: 75px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 20px;
  }
}
</style>