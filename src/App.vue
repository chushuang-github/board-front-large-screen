<template>
  <RouterView />
</template>

<script setup>
import useScalPage from './hooks/useScalePage'

// 大屏适配
// 设计稿
let option = {
  targetX: 1920,        // 设计稿的宽度
  targetY: 1080,        // 设计稿的高度
  targetRatio: 16 / 9,  // 目标屏幕的宽高比
}
useScalPage(option)
</script>

<style lang="less" scoped>

</style>
