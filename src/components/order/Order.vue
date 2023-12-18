<template>
    <el-row>
        <el-col :span="6">
            <el-menu :default-openeds="openeds" class="el-menu-vertical-demo" router>
                <el-sub-menu index="1">
                    <template #title>
                        <span>外观</span>
                    </template>
                    <el-menu-item index="/order/exterior/color">
                        颜色
                    </el-menu-item>
                    <el-menu-item index="/order/exterior/logo">
                        Logo
                    </el-menu-item>
                    <el-menu-item index="/order/exterior/size">
                        外包装尺寸
                    </el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                        <span>局部</span>
                    </template>
                    <el-menu-item index="/order/local/drying-rack">
                        烘干架
                    </el-menu-item>
                    <el-menu-item index="/order/local/unloading-device">
                        放料装置
                    </el-menu-item>
                    <el-menu-item index="/order/local/spindle">
                        主轴
                    </el-menu-item>
                    <el-menu-item index="/order/local/workbench">
                        工作台
                    </el-menu-item>
                    <el-menu-item index="/order/local/reversing-device">
                        换向装置
                    </el-menu-item>
                    <el-menu-item index="/order/local/receiving-device">
                        收料装置
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-col>
        <el-col :span="18">
            <el-card style="height: 100%;">
                <el-empty description="请选择具体细节" v-if="empty" />
                <router-view v-else />
            </el-card>
        </el-col>
    </el-row>
</template>
  
<script>
export default {
    name: 'OrderVue',
    data() {
        return {
            openeds: ['1', '2'],
            empty: true
        }
    },
    watch: {
        $route() {
            this.empty = false
        },
    }
}
</script>