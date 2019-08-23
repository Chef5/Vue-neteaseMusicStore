<template>
    <div class="detail">
        <sideFloatMenu fixedTop="30%"></sideFloatMenu>
        <div class="header">
            <div class="uri">
                <div class="uri-main">
                    首页
                </div>
                <div class="uri-sub">
                    <vue-fontawesome icon="angle-right" size="lg"></vue-fontawesome>
                    我的订单
                </div>
            </div>
        </div>

        <div class="container">
            <div class="left">
                <ul>
                    <li :class="activeClass[0]" @click="handleMenu(0)">我的订单</li>
                    <li :class="activeClass[1]" @click="handleMenu(1)">我的优惠券</li>
                    <li :class="activeClass[2]" @click="handleMenu(2)">我的收货地址</li>
                    <li :class="activeClass[3]" @click="handleMenu(3)">在线客服</li>
                </ul>
            </div>
            <div class="right">
                <theOrder v-if="isShowOrder"></theOrder>
                <theTicket v-if="isShowTicket"></theTicket>
                <theReceiveSite v-if="isShowReceiveSite"></theReceiveSite>
            </div>
        </div>
    </div>
</template>

<script>
    import sideFloatMenu from '../../components/sideFloatMenu'
    import theOrder from './components/theOrder'
    import theTicket from './components/theTicket'
    import theReceiveSite from './components/theReceiveSite'
    export default {
        name: "Personal",
        components: {
            sideFloatMenu,
            theOrder,
            theTicket,
            theReceiveSite
        },
        data () {
            return {
                activeClass: ["active","","",""],
                isShowOrder: true,
                isShowTicket: false,
                isShowReceiveSite: false
            }
        },
        methods: {
            handleMenu (e){
                let activeClass = ["","","",""]
                activeClass[e] = "active"
                this.activeClass = activeClass
                if(e==0){
                    this.isShowOrder = true
                    this.isShowTicket = false
                    this.isShowReceiveSite = false
                }else if(e==1){
                    this.isShowOrder = false
                    this.isShowTicket = true
                    this.isShowReceiveSite = false
                }else if(e==2){
                    this.isShowOrder = false
                    this.isShowTicket = false
                    this.isShowReceiveSite = true
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .header{
        position: relative;
        height: 80px;
        margin: 0 14% 0;
        border-bottom: 1px solid black;
        line-height: 80px;
        font-weight: 700;
        font-family: "Microsoft YaHei UI";
        /*background: #42b983;*/
    }
    .uri {
        position: absolute;
        left: 0px;
        padding-left: 10px;
        display: flex;
        flex-direction: row;

        .uri-main {
            font-size: 18px;
        }

        .uri-sub {
            font-size: 16px;
            padding-left: 5px;
            color: #bbbbbb;
        }
    }

    .container{
        display: flex;
        flex-direction: row;
        margin: 10px 14% 0px;
        position: relative;
    }
    .left{
        width: 150px;
        & li{
            display: inline-block;
            position: relative;
            width: 100%;
            height: 36px;
            line-height: 36px;
            font-size: 16px;
            text-align: left;
            padding: 0px 20px;
            cursor: pointer;
            &:hover{
                font-weight: 700;
            }
        }
    }
    .active{
        background: #f7f7f7;
        font-weight: 700;
        &::after{
            content: "";
            position: absolute;
            top: 8px;
            left: 1px;
            width: 2.5px;
            height: 20px;
            background-color: #d33a31;
        }
    }
    .right{
        flex: 1;
        margin-left: 20px;
        position: relative;
    }
</style>
