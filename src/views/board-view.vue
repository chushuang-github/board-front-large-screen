<template>
  <div class="box">
    <!-- 头部 -->
    <TopHeader />

    <!-- 页面主体部分 -->
    <div class="main-box">
      <div class="left">
        <LeftBar />
        <LeftLine />
        <LeftPie />
      </div>
      <div class="center">
        <CenterCount />
        <CenterMap />
      </div>
      <div class="right">
        <RightBar />
        <RightLine />
        <RightPie />
      </div>
    </div>
  </div>
</template>

<script setup>
import TopHeader from "../components/top-header.vue"
import LeftBar from "../components/left-bar.vue";
import LeftLine from "../components/left-line.vue";
import LeftPie from "../components/left-pie.vue";
import CenterCount from "../components/center-count.vue"
import CenterMap from "../components/center-map.vue"
import RightBar from "../components/right-bar.vue";
import RightLine from "../components/right-line.vue";
import RightPie from "../components/right-pie.vue";
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  .main-box {
    display: flex;
    padding: 10px 10px 0px;
    .left, .right {
      flex: 3;
    }
    .center {
      flex: 5;
      margin: 0px 10px 15px;
    }
  }
}
</style>