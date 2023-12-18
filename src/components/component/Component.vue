<template>
    <el-row>
        <el-col :span="6">
            <el-menu class="el-menu-vertical-demo" @select="handleSelect">
                <el-menu-item index="刮刀">刮刀</el-menu-item>
                <el-menu-item index="气动元器件">气动元器件</el-menu-item>
                <el-menu-item index="热交换器">热交换器</el-menu-item>
                <el-menu-item index="烘箱风机">烘箱风机</el-menu-item>
                <el-menu-item index="马达类">马达类</el-menu-item>
                <el-menu-item index="墨泵类">墨泵类</el-menu-item>
                <el-menu-item index="棍子类">棍子类</el-menu-item>
                <el-menu-item index="轴承">轴承</el-menu-item>
                <el-menu-item index="其他机械标准件">其他机械标准件</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="6">
            <el-card class="box-card" style="height: 100%;" v-if="!isPartSelected">
                <el-empty description="请选择具体类别" />
            </el-card>
            <el-card class="box-card" style="height: 100%;" v-else>
                <div>
                    <el-table :data="parts" stripe style="width: 100%" :show-header="true" highlight-current-row
                        @current-change="handleQuery">
                        <el-table-column prop="part" label="零件型号" />
                    </el-table>
                </div>
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card class="box-card" style="height: 100%;" v-if="!isModelSelected">
                <el-empty description="请选择具体型号" />
            </el-card>
            <el-card class="box-card" style="height: 100%;" v-else>
                <el-table :data="details" stripe style="width: 100%" highlight-current-row @current-change="addCart">
                    <el-table-column prop="name" label="可选产品" />
                    <el-table-column prop="price" label="价格" />
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card class="box-card" style="height: 100%;">
                <template #header>
                    <div class="card-header">
                        <span>购物车</span>
                        <el-button type="success">提交</el-button>
                    </div>
                </template>
                <el-empty description="请选择具体零件" v-if="!isCartEmpty" />
                <el-table :data="cart" stripe style="width: 100%" :show-header="true" v-else>
                    <el-table-column prop="part" label="零件型号" />
                    <el-table-column prop="name" label="产品" />
                    <el-table-column prop="price" label="价格" />
                </el-table>
                <!-- <v-else router-view /> -->
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'ComponentVue',
    data() {
        return {
            isPartSelected: false,
            isModelSelected: false,
            isCartEmpty: false,
            parts: [],
            details: [],
            cart: []
        }
    },
    watch: {
        cart: {
            handler(newCart) {
                this.isCartEmpty = newCart.length === 0;
            },
            immediate: true,
        }
    },
    methods: {
        handleSelect(item) {
            console.log(item);
            switch (item) {
                case '刮刀':
                    this.handleScraper();
                    break;
                case '气动元器件':
                    this.handlePneumaticComponents();
                    break;
                case '热交换器':
                    this.handleHeatExchanger();
                    break;
                case '烘箱风机':
                    this.handleOvenFan();
                    break;
                case '马达类':
                    this.handleMotor();
                    break;
                case '墨泵类':
                    this.handleInkPump();
                    break;
                case '棍子类':
                    this.handleStick();
                    break;
                case '轴承':
                    this.handleBearing();
                    break;
                case '其他机械标准件':
                    this.handleOtherStandardComponents();
                    break;
                default:

            }
        },
        handleScraper() {
            this.isPartSelected = true
            this.parts = [
                {
                    part: '35*0.2*100 不锈钢 550',
                },
                {
                    part: '35*0.3*100 碳钢 350',
                },
                {
                    part: '30*0.15*100 碳钢 350',
                },
                {
                    part: '40*0.15*100 碳钢 350',
                },
                {
                    part: '60*0.15*100 碳钢 350'
                },
                {
                    part: '25*0.20*100 碳钢 350'
                }
            ]
        },
        handlePneumaticComponents() {

        },
        handleHeatExchanger() {

        },
        handleOvenFan() {

        },
        handleMotor() {

        },
        handleInkPump() {

        },
        handleStick() {

        },
        handleBearing() {

        },
        handleOtherStandardComponents() {

        },
        handleQuery(types) {
            if (types && types.part == '35*0.2*100 不锈钢 550') {
                this.details = [
                    {
                        part: '35*0.2*100 不锈钢 550',
                        name: '瑞典Primeblade(进口)',
                        price: '250欧元'
                    }, {
                        part: '35*0.2*100 不锈钢 550',
                        name: '广州锐健贸易有限公司',
                        price: '2200元(配)'
                    }, {
                        part: '35*0.2*100 不锈钢 550',
                        name: '广州兴盛印刷机械配件有限公司',
                        price: '2000元'
                    }, {
                        part: '35*0.2*100 不锈钢 550',
                        name: '冠荣印刷机械配件有限公司',
                        price: '2150元'
                    }, {
                        part: '35*0.2*100 不锈钢 550',
                        name: '俊鼎达机械有限公司',
                        price: '2100元'
                    },
                ]
                this.isModelSelected = true
            } else {
                this.isModelSelected = false
            }
        },
        addCart(model) {
            const index = this.cart.findIndex(item => item.part === model.part)
            if (index !== -1) {
                this.cart.splice(index, 1);
            }
            this.cart.push({
                "part": model.part,
                "name": model.name,
                "price": model.price
            });
        }
    }
}
</script>

<style scooped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>