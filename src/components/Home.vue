<template>
  <el-row>
    <el-col :span="6" />
    <el-col :span="12">
    <el-carousel :interval="5000" arrow="never">
    <el-carousel-item v-for="(value, key) in infos" :key="key">
      <div class="intro">
        <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>{{ key }}</span>
          </div>
        </template>
        <div>
          {{ value }}
        </div>
      </el-card>
      </div>
    </el-carousel-item>
  </el-carousel>
    </el-col>
  </el-row>
  
</template>
  
<script>
export default {
  name: "HomeVue",
  data() {
    return {
      infos: {
        "个性化定制体验": '平台支持根据用户需求定制个性化印刷机械产品。定制系统实时展示定制产品；用户可全方位、多角度浏览。定制内容包括选择产品颜色和印制自定义logo，提升客户定制交互体验。',
        '强大的零部件供应链支持': '平台整合了全面的印刷机械零部件产品供应链数据库，顾客在订制产品时能够自由选择信赖的零部件品牌和厂家，为用户提供更可靠的产品支持。'
      }
    }

  }
}
</script>

<style scooped>
.intro {
  font-size: large;
  margin-top: 10%;
  margin-bottom: 10%;
}

.box-card {
  height: 100%;
}
</style>