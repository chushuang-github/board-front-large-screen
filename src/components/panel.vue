<template>
  <div class="panel">
    <slot></slot>
    <div class="panel-footer"></div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.panel {
  position: relative;
  height: 310px;
  box-sizing: border-box;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: url("../assets/images/line.png") rgba(255, 255, 255, 0.03);
  padding: 0px 15px 40px;
  margin-bottom: 12px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-top: 2px solid #02a6b5;
    border-left: 2px solid #02a6b5;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-top: 2px solid #02a6b5;
    border-right: 2px solid #02a6b5;
  }
  .panel-footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 10px;
      height: 10px;
      border-bottom: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-bottom: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
    }
  }
}
</style>