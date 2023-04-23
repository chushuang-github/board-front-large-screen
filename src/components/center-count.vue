<template>
  <div class="no">
    <div class="no-hd">
      <div class="top">
        <div id="number1">125811</div>
        <div id="number2">104563</div>
      </div>
    </div>
    <div class="no-bd">
      <div class="bottom">
        <div>前端需求人数</div>
        <div>市场供应人数</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { CountUp } from "countup.js"
onMounted(() => {
  const option = {
    duration: 1,         // 动画时长
    useGrouping: false   // 是否分组 1000 -> 1,000 这种形式
  }
  new CountUp('number1', 125811, option).start()
  new CountUp('number2', 104563, option).start()
})
</script>

<style lang="less" scoped>
.no {
  background: rgba(101, 132, 226, 0.1);
  padding: 15px;
  .no-hd {
    position: relative;
    border: 1px solid rgba(25, 186, 139, 0.17);
    .top {
      display: flex;
      div {
        position: relative;
        flex: 1;
        height: 80px;
        line-height: 80px;
        font-size: 70px;
        color: #ffeb7b;
        text-align: center;
        font-family: electronicFont;
        &:first-child {
          &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 25%;
            height: 50%;
            width: 1px;
            background-color: rgba(255, 255, 255, 0.2);
          }
        }
      }
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 30px;
      height: 10px;
      border-top: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
    }
    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 30px;
      height: 10px;
      border-right: 2px solid #02a6b5;
      border-bottom: 2px solid #02a6b5;
    }
  }

  .no-bd {
    .bottom {
      display: flex;
      div {
        flex: 1;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        color: rgba(255, 255, 255, 0.7);
        text-align: center;
        padding-top: 10px;
      }
    }
  }
}
</style>