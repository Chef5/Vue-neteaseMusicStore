<template>
    <div class="theOrder">
        <div class="theOrder-header">
            <ul>
                <li>待付款</li>
                <li>待发货</li>
                <li>待收货</li>
                <li>全部</li>
            </ul>
        </div>
        <div class="theOrder-main">
            <div><vue-fontawesome icon="receipt" size="8x"></vue-fontawesome></div>
            <div>你当前没有待支付订单</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "theOrder"
    }
</script>

<style lang="less" scoped>
    div.theOrder{
        /*background: #42b983;*/
        text-align: left;
        display: flex;
        flex-direction: column;
    }
    .theOrder-header{
        width: 100%;
        & li{
            display: inline-block;
            float: left;
            width: 80px;
            padding: 0px 5px;
            cursor: pointer;
            /*background: #aaaaaa;*/
        }
        & li:hover{
            font-weight: 700;
        }
    }
    .theOrder-main{
        color: #aaaaaa;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px 0px 100px;
        & div:last-child{
            margin-top: 20px;
        }
    }
</style>
