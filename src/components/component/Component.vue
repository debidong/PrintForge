<template>
    <el-row>
        <el-col :span="6">
            <el-menu default-active="2" class="el-menu-vertical-demo" router>
                <el-menu-item index="1">刮刀</el-menu-item>
                <el-menu-item index="1">气动元器件</el-menu-item>
                <el-menu-item index="1">热交换器</el-menu-item>
                <el-menu-item index="1">烘箱风机</el-menu-item>
                <el-menu-item index="1">马达类</el-menu-item>
                <el-menu-item index="1">墨泵类</el-menu-item>
                <el-menu-item index="1">棍子类</el-menu-item>
                <el-menu-item index="1">轴承</el-menu-item>
                <el-menu-item index="1">其他机械标准件</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="9">
            <el-card class="box-card" style="height: 100%;">
                <template #header>
                    <div class="card-header">
                        <span>零件型号</span>
                    </div>
                </template>
                    <el-empty description="请选择具体类别" />
                    <router-view />
            </el-card>
        </el-col>
        <el-col :span="9">
            <el-card class="box-card" style="height: 100%;">
                <template #header>
                    <div class="card-header">
                        <span>零件产品</span>
                    </div>
                </template>
                    <el-empty description="请选择具体型号" />
                    <router-view />
            </el-card>
        </el-col>
    </el-row>
</template>

