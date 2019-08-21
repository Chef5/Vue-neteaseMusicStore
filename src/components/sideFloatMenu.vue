<template>
    <div class="sfm-container" :style="{'position': position, 'top': top}">
        <div class="sfm-item"><a href="#">查看<br>营业执照</a></div>
        <div class="sfm-item"><a href="#">100%<br>正品</a></div>
        <div class="sfm-item"><a href="#">7天无理<br>由退货</a></div>
        <div class="sfm-item">
            <a href="#">
                <shopping-cart style="margin-top: 5px"></shopping-cart>
                <div style="margin-top: -10px">购物车</div>
            </a>
        </div>
        <div class="sfm-item">
            <a href="#">
                <b-icon icon="headset" size="is-large"></b-icon>
                <div style="margin-top: -10px">客服</div>
            </a>
        </div>
        <div class="sfm-item-top" v-if="isShowToTop">
            <a href="#">
                <b-icon icon="angle-up" size="is-normal" style="margin-top: -5px"></b-icon>
                <div style="margin-top: -14px">TOP</div>
            </a>
        </div>
    </div>
</template>

<script>
    import ShoppingCart from './shoppingCart'
    export default {
        name: "sideFloatMenu",
        components: {
            ShoppingCart
        },
        props: {
            start: {
                type: String,
                default: ""
            },
            fixedTop: {
                type: String,
                default: ""
            }
        },
        data () {
            return {
                screenH: window.screen.height,
                scrollY: window.scrollY,
                top: "",
                position: "",
                isShowToTop: false
            }
        },
        methods: {
            handelScreenScroll () {
                this.scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                // console.log(this.scrollY)
            }
        },
        mounted () {
            window.addEventListener('scroll', this.handelScreenScroll)
        },
        created () {
            if (this.start != ""){
                this.position = "absolute"
                this.top = this.start;
            } else {
                this.position  = "fixed"
                this.top = this.fixedTop
            }
        },
        // computed: {
        //     top () {
        //         if (this.start != "") return this.start;
        //         else return this.fixedTop;
        //     },
        //     position () {
        //         if (this.start != "") return "absolute";
        //         else return "fixed";
        //     }
        // },
        watch: {
            scrollY( n ) {
                // 控制位置
                if (this.start != ""){
                    // if( n >= this.screenH * (this.fixedTop.replace("%","")/100))
                    if( n >= this.start.replace("px","") - this.screenH * (this.fixedTop.replace("%","")/100) ){
                        this.position = "fixed"
                        this.top = this.fixedTop
                    }else {
                        this.position = "absolute"
                        this.top = this.start
                    }
                }
                // 控制to top显示
                if ( n >= 260){
                    this.isShowToTop = true
                }else {
                    this.isShowToTop = false
                }

            }
        }
    }
</script>

<style lang="less" scoped>
    .sfm-container {
        z-index: 9999;
        width: 60px;
        /*position: absolute;*/
        /*top: 601px;*/
        /*position: fixed;*/
        /*top: 30%;*/
        right: 9%;
        padding: 0;
        border: 1px solid #565656;
        border-bottom: none;
        /*background: #42b983;*/
        a{
            display: block;
            text-decoration: none;
            color: #484848;
        }
        .sfm-item{
            width: 100%;
            height: 60px;
            font-size: 12px;
            border-bottom: 1px solid #565656;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .sfm-item-top{
            height: 36px;
            width: 100%;
            background: #484848;
            border: 1px solid #565656;
            border-top: none;
            a {
                display: block;
                color: white;
            }
        }
    }
</style>
