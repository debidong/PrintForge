<template>
  <el-header>
    <h1>印刷机械定制平台</h1>
  </el-header>
  <el-menu :default-active="activeIndex" mode="horizontal" router>
    <el-menu-item index="/home">首页</el-menu-item>
    <el-menu-item index="/order">订单</el-menu-item>
    <el-menu-item index="/info" disabled>关于</el-menu-item>
  </el-menu>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.el-header {
  position: relative;
  text-align: center;
  justify-content: center;
  font-size: large;
}
</style>
