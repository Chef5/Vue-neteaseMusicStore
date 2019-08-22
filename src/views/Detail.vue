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
                    伯朗H16 Pro 开盖弹窗智能触控苹果安卓通用蓝牙5.0
                </div>
            </div>
            <div class="share" @click="alertShareActive = !alertShareActive">
                <vue-fontawesome icon="share-square" size="lg"></vue-fontawesome>
                分享
            </div>
        </div>

        <div class="purchase">
            <div class="purchase-left">
                <div>
                    <img src="http://p3.music.126.net/BNhuRZ512iAK0TUvE0L7Fg==/109951164276758539.jpg?param=440y440" alt="">
                </div>
                <div>
                    <div><img src="http://p3.music.126.net/BNhuRZ512iAK0TUvE0L7Fg==/109951164276758539.jpg?param=76y76" alt=""></div>
                    <div><img src="http://p4.music.126.net/Ds8iWjVhstCWU7z5U1Qe_g==/109951164255206998.jpg?param=76y76" alt=""></div>
                    <div><img src="http://p4.music.126.net/nejrczYwXH0lUU6kPyWegw==/109951164255216209.jpg?param=76y76" alt=""></div>
                    <div><img src="http://p4.music.126.net/7o-O4jUayJtxGaR5LzB0Pg==/109951164255220513.jpg?param=76y76" alt=""></div>
                    <div><img src="http://p3.music.126.net/E-3DJjBowwL1Af7Lc7kdNg==/109951164255212828.jpg?param=76y76" alt=""></div>
                </div>
            </div>
            <div class="purchase-right">
                <div class="right-title">伯朗H16 Pro 开盖弹窗智能触控苹果安卓通用蓝牙5.0</div>
                <div class="right-subtitle">智能触控，音量加减 ，切换上下曲 ，开盖弹窗配对，续航4小时，双耳高清通话</div>
                <div class="right-price">
                    <span>¥229</span><span><del>¥299</del></span>
                </div>
                <div class="right-active">
                    <div>促销：</div>
                    <div class="right-active-box">
                        <div class="right-active-left">
                            <span>福利社</span>
                            <span>100元  伯朗H16福利券,无门槛</span>
                            <span>领券</span>
                        </div>
                        <div class="right-active-right">
                            <span>全部优惠券(2)</span>
                            <span>
                                <b-icon icon="angle-down" custom-class="nav-icon"></b-icon>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="right-color">
                    <div>颜色：</div>
                    <div>
                        <ul>
                            <li>红色</li>
                            <li>黑色</li>
                            <li>绿色</li>
                            <li>白色</li>
                        </ul>
                    </div>
                </div>
                <div class="right-material">
                    <div>材质：</div>
                    <div>
                        <ul>
                            <li>枫木</li>
                            <li>黑胡桃木</li>
                        </ul>
                    </div>
                </div>
                <div class="right-number">
                    <div>数量：</div>
                    <div>
                            <b-numberinput type="is-light" min="1" controls-position="compact" size="is-small"></b-numberinput>
                    </div>
                </div>
                <div class="right-service">
                    <div>服务：</div>
                    <div>
                        <a href="#">7天无理由退货</a>
                        <a href="#">15天无忧退货</a>
                        <a href="#">满199包邮</a>
                        <a href="#">包邮</a>
                        <a href="#">商家发货</a>
                        <a href="#">网易自营</a>
                    </div>
                </div>
                <div class="right-button">
                    <div>
                        <b-button type="is-danger" size="is-medium" outlined>立即购买</b-button>
                    </div>
                    <div>
                        <b-button type="is-danger" size="is-medium" icon-left="shopping-cart">
                            加入购物车
                        </b-button>
                    </div>
                </div>

            </div>
        </div>

        <div class="recommend">
            <div class="recommend-title">优惠套餐</div>
            <div class="recommend-container">
                <div class="recommend-left">
                    <div class="goods-item">
                        <div class="goods-item-img">
                            <img :src="recommend[0].img" alt="">
                        </div>
                        <div class="goods-item-info">
                            <div>{{recommend[0].title}}</div>
                            <div>
                                <span>¥{{recommend[0].newPrice}}</span>
                                <span><del>¥{{recommend[0].oldPrice}}</del></span>
                            </div>
                        </div>
                    </div>

                    <div class="goods-item-icon"><b-icon icon="plus" size="is-large"></b-icon></div>

                    <div class="goods-item">
                        <div class="goods-item-img">
                            <img :src="recommend[1].img" alt="">
                        </div>
                        <div class="goods-item-info">
                            <div>{{recommend[1].title}}</div>
                            <div>
                                <span>¥{{recommend[1].newPrice}}</span>
                                <span><del>¥{{recommend[1].oldPrice}}</del></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="recommend-right">
                    <p class="msg">共2件，已选择1件搭配商品</p>
                    <p class="price">套餐价：<span>¥248</span></p>
                    <p class="tit">可优惠：¥10</p>
                    <b-button type="is-danger" size="is-medium">
                        立即购买
                    </b-button>
                </div>
            </div>
        </div>

        <div class="goods-detail"></div>

    </div>
</template>

<script>
    import sideFloatMenu from '../components/sideFloatMenu'
    export default {
        name: "Detail",
        components: {
            sideFloatMenu
        },
        data() {
            return {
                alertShareActive: true,
                recommend: [
                    {
                        id: "0001",
                        title: "伯朗H16 Pro 开盖弹窗智能触控苹果安卓通用蓝牙5.0",
                        img: "http://p4.music.126.net/ZGqzOVg5SvW1O5orYabgDw==/109951164255253441.jpg?param=360y360",
                        tips: "用卷减50",
                        newPrice: 229,
                        oldPrice: 229
                    },
                    {
                        id: "0002",
                            title: "苹果安卓快充线数据线2.4A小米三星华为手机数据线（1米）",
                        img: "http://p3.music.126.net/10AjpeqySrHkl_l3BPrhJw==/109951163618886550.jpg?param=360y360",
                        tips: "特价",
                        newPrice: 19,
                        oldPrice: 29
                    }
                ]
            }
        },
        methods: {

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
    .uri{
        position: absolute;
        left: 0px;
        padding-left: 10px;
        display: flex;
        flex-direction: row;
        .uri-main{
            font-size: 18px;
        }
        .uri-sub{
            font-size: 16px;
            padding-left: 5px;
            color: #bbbbbb;
        }
    }
    .share{
        position: absolute;
        right: 0px;
        padding-right: 10px;
        font-size: 16px;
        color: #595959;
        cursor: pointer;
    }
    .share-box{
        height: 200px;
        width: 500px;
        background: white;
    }

    .purchase{
        margin: 20px 14% 0;
        display: flex;
        flex-direction: row;
        .purchase-left{
            &>div:first-child{
                width: 440px;
                height: 440px;
                background: #f7f7f7;
            }
            &>div:last-child{
                width: 450px;
                margin-top: 10px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                div{
                    width: 80px;
                    height: 80px;
                    background: #f7f7f7;
                    padding: 2px;
                    margin: 0px 10px 10px 0px;
                }
                div img{
                    width: 76px;
                    height: 76px;
                }
                div:first-child{
                    border: 2px solid red;
                }
                div:hover{
                    border: 2px solid red;
                }
            }
        }

        .purchase-right{
            /*flex: 1;*/
            margin-left: 40px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .right-title{
                font-size: 24px;
                font-family: "Microsoft YaHei UI";
            }
            .right-subtitle{
                font-size: 14px;
                padding-top: 5px;
                color: #aaaaaa;
            }
            .right-price{
                margin: 20px 0;
                & span:first-child{
                    font-size: 30px;
                    color: #d23a31;
                }
                & span:last-child{
                    font-size: 16px;
                    color: #aaaaaa;
                    padding-left: 16px;
                }
            }
            .right-active{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                margin-top: 16px;
                width: 100%;
                position: relative;
                &>div:first-child{
                    color: #aaaaaa;
                }
                &>div.right-active-box{
                    margin-left: 20px;
                    flex: 1;
                    height: 30px;
                    font-size: 12px;
                    line-height: 30px;
                    background: #fdf5f4;
                    border: 1px solid #f8e2e0;
                    display: flex;
                    flex-direction: row;
                    position: relative;
                    .right-active-left{
                        position: absolute;
                        left: 5px;
                        &>span:first-child{
                            border: 1px solid #d23a31;
                            padding: 2px;
                            color: #d23a31;
                        }
                        &>span:nth-child(2){
                            padding: 0px 8px 0px;
                        }
                        &>span:last-child{
                            color: #328ad4;
                            font-family: "Microsoft YaHei UI";
                            cursor: pointer;
                        }
                    }
                    .right-active-right{
                        position: absolute;
                        right: 0;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        &>span{
                            display: inline-block;
                            height: 30px;
                            line-height: 30px;
                            color: #909090;
                            cursor: pointer;
                        }
                        &>span:last-child{
                            margin-top: 3px;
                        }
                    }
                }
            }
            .right-color,.right-material{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                margin-top: 16px;
                & div:first-child{
                    color: #aaaaaa;
                }
                & div:last-child{
                    margin-left: 20px;
                }
                & li{
                    float: left;
                    height: 30px;
                    line-height: 30px;
                    padding: 0px 19px;
                    margin: 0px 10px 0px 0px;
                    border: 1px solid #dddddd;
                    cursor: pointer;
                }
                & li:hover{
                    border: 1px solid #aaaaaa;
                }
            }
            .right-number{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                margin-top: 16px;
                & div:first-child{
                    color: #aaaaaa;
                }
                & div:last-child{
                    margin-left: 10px;
                    width: 100px;
                }
            }
            .right-service{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                margin-top: 16px;
                & div:first-child{
                    color: #aaaaaa;
                }
                & div:last-child{
                    margin-left: 28px;
                }
                & a{
                    display: inline-block;
                    position: relative;
                    line-height: 20px;
                    margin-right: 28px;
                    font-weight: 500;
                    color: #666;
                }
                & a::after{
                    content: "";
                    position: absolute;
                    top: 8px;
                    left: -8px;
                    width: 3px;
                    height: 3px;
                    border-radius: 100%;
                    background-color: #d33a31;
                }
            }
            .right-button{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
                & div:first-child{

                }
                & div:last-child{
                    margin-left: 12px;
                }
            }

        }
    }

    .recommend{
        margin: 50px 14% 0;
        border: 1px solid #dddddd;
        .recommend-title{
            font-size: 16px;
            font-family: "Microsoft YaHei UI";
            font-weight: 700;
            color: black;
            width: 100%;
            padding: 8px 15px;
            text-align: left;
            background: #ddd;
        }
        .recommend-container{
            display: flex;
            flex-direction: row;
            position: relative;
            padding: 20px;
            .recommend-left{
                display: flex;
                flex-direction: row;
                .goods-item{
                    width: 180px;
                    .goods-item-img{
                        background: #f7f7f7;
                        height: 180px;
                    }
                    .goods-item-info{
                        margin-top: 10px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        & div:first-child{
                            font-size: 14px;
                            line-height: 18px;
                            text-align: left;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                        }
                        & div:last-child{
                            margin-top: 4px;
                            text-align: center;
                            & span:first-child{
                                font-size: 16px;
                                color: #d33a31;
                            }
                            & span:last-child{
                                padding-left: 10px;
                                font-size: 14px;
                                color: #999;
                            }
                        }
                    }
                }
                .goods-item img{
                    width: 180px;
                    height: 180px;
                }
                .goods-item-icon{
                    margin-top: 66px;
                }
            }
            .recommend-right{
                position: absolute;
                right: 0px;
                width: 250px;
                padding: 20px;
                border-left: 1px solid #aaaaaa;
                text-align: left;
                font-size: 15px;
                p.msg,p.tit{
                    color: #aaaaaa;
                }
                p.price{
                    margin-top: 36px;
                    & span{
                        font-size: 24px;
                        color: #d33a31;
                    }
                }
                p.tit{
                    font-size: 14px;
                    margin-bottom: 10px;
                }
            }
        }
    }

    .goods-detail{
        margin: 50px 14% 0;
        height: 100px;
    }
</style>
