<template>
    <div class="gs-containers">
        <div class="gs-containers-img">
            <div class="gs-old-price" v-if="goodsInfo.oldPrice">
                <div class="gs-price-new">¥{{goodsInfo.newPrice}}</div>
                <div class="gs-price-old">
                    <del>¥{{goodsInfo.oldPrice}}</del>
                </div>
            </div>
            <a :href="'#/'+goodsInfo.id">
                <img :src="goodsInfo.img" alt="">
            </a>
        </div>
        <div class="gs-containers-info">
            <a :href="'#/'+goodsInfo.id">
                <span v-if="goodsInfo.tips">
                {{goodsInfo.tips}}
                </span>
                {{goodsInfo.title}}
            </a>
        </div>
        <div class="gs-containers-price">
            ¥{{goodsInfo.newPrice}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "goods",
        props: {
            goodsInfo: {
                type: Object,
                default () {
                    return {
                        id: 0,
                        title: "伯朗H16 Pro 开盖弹窗智能触控苹果安卓通用蓝牙5.0",
                        img: "http://p3.music.126.net/BNhuRZ512iAK0TUvE0L7Fg==/109951164276758539.jpg?param=244y244",
                        tips: "特价",
                        newPrice: 299,
                        oldPrice: 299
                    }
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .gs-containers{
        width: 263px;
        height: 382px;
        /*background: #42b983;*/
        a{
            text-decoration: none;
            color: inherit;
        }
    }
    .gs-containers > div{
        width: 100%;
    }
    .gs-containers-img{
        position: relative;
        background: #f1f1f1;
    }
    .gs-containers-img img{
        width: 263px;
        height: 263px;
    }
    .gs-old-price{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        top: 10px;
        left: 10px;
        background: #d23a31;
        color: white;
        font-size: 15px;
        line-height: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .gs-price-old{
        color: #dddddd;
        font-size: 13px;
        opacity: 0.7;
    }

    .gs-containers-info{
        text-align: center;
        font-size: 14px;
        margin-top: 8px;
    }
    .gs-containers-info span{
        display: inline-block;
        padding: 0px 2px 0px;
        font-size: 12px;
        color: #d23a31;
        border: 1px solid #d23a31;
    }
    .gs-containers-price{
        text-align: center;
        font-size: 16px;
        color: #d23a31;
    }
</style>
