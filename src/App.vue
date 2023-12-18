<template>
  <el-container>
    <el-header>
      <h1>印刷机械定制平台</h1>
    </el-header>
    <el-main>
      <el-menu mode="horizontal" router>
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/order">定制</el-menu-item>
        <el-menu-item index="/component">零件选配</el-menu-item>
        <el-menu-item index="/info" disabled>关于</el-menu-item>
      </el-menu>
      <router-view />
    </el-main>
  </el-container>
  <el-footer class="center-text">© 2023 张熠彪</el-footer>
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

.center-text {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
