<template>
  <div class="home">
      <the-swipper></the-swipper>
      <sideFloatMenu start="601px" fixedTop="30%"></sideFloatMenu>
<!--      菜单-->
      <div class="menu">
          <div class="menu-container">
              <a href="#">
                  <div class="menu-item">
                      <vue-fontawesome icon="headphones-alt" size="3x" />
                      <div><span>数码音影</span></div>
                  </div>
              </a>
              <a href="#">
                  <div class="menu-item">
                      <vue-fontawesome icon="shopping-basket" size="3x" />
                      <div><span>IP周边</span></div>
                  </div>
              </a>
              <a href="#">
                  <div class="menu-item">
                      <vue-fontawesome icon="fire-alt" size="3x" />
                      <div><span>热销产品</span></div>
                  </div>
              </a>
              <a href="#">
                  <div class="menu-item">
                      <vue-fontawesome icon="database" size="3x" />
                      <div><span>积分商城</span><span style="color: #ee2d0e"><br>112积分</span></div>
                  </div>
              </a>
          </div>
      </div>
<!--      正文-->
      <div class="container">
          <div class="hot">
              <div class="hot-item">
                  <a href="#"><img src="../assets/109951164207184328.jpg" alt=""></a>
              </div>
              <div class="hot-item">
                  <a href="#"><img src="../assets/109951163973446450.jpg" alt=""></a>
              </div>
          </div>

          <div class="recommend">
              <div class="goods-title">
                  编辑推荐
              </div>
              <div class="goods-container">
                  <div class="goods-item" v-for="item of goodsList.recommend" :key="item.id">
                      <Goods :goods-info="item"></Goods>
                  </div>
              </div>
          </div>

          <div class="hotGoods">
              <div class="goods-title">
                  热门商品
              </div>
              <div class="goods-container">
                  <div class="goods-item" v-for="item of goodsList.hotGoods" :key="item.id">
                      <Goods :goods-info="item"></Goods>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import TheSwipper from '../components/theSwipper'
import sideFloatMenu from '../components/sideFloatMenu'
import Goods from '../components/goods'
export default {
    name: 'home',
    components: {
        TheSwipper,
        sideFloatMenu,
        Goods
    },
    data () {
        return {
            goodsList: {
                recommend: [
                    {
                        id: "0001",
                        title: "伯朗H16 Pro 开盖弹窗智能触控苹果安卓通用蓝牙5.0",
                        img: "http://p3.music.126.net/BNhuRZ512iAK0TUvE0L7Fg==/109951164276758539.jpg?param=244y244",
                        tips: "用卷减50",
                        newPrice: 299,
                        oldPrice: 299
                    },
                    {
                        id: "0002",
                        title: "网易云音乐炫彩蓝款 24孔复音口琴 天鹅定制款 音乐的力量",
                        img: "http://p4.music.126.net/wQ7EXqz_9_aKk6IN4LW4iw==/109951163575010808.jpg?param=244y244",
                        tips: "特价",
                        newPrice: 69,
                        oldPrice: 99
                    },
                    {
                        id: "0003",
                        title: "网易云音乐联名款真无线蓝牙耳机TWS1",
                        img: "http://p4.music.126.net/ZGKchVsss1xw35wIq-caEg==/109951164143645117.jpg?param=244y244",
                        tips: "用卷减50",
                        newPrice: 298,
                        oldPrice: ""
                    },
                    {
                        id: "0004",
                        title: "网易云音乐 运动斜挎包",
                        img: "http://p4.music.126.net/IXmNI3O-HBhIQytCo9_X3Q==/109951163679756618.jpg?param=244y244",
                        tips: "特价",
                        newPrice: 56,
                        oldPrice: 99
                    },
                    {
                        id: "0005",
                        title: "【限定款】2支装·网易云音乐电音霓虹笔",
                        img: "http://p4.music.126.net/qAmfHpUsB9O2W3jTanfXoQ==/109951164209128932.jpg?param=244y244",
                        tips: "包邮",
                        newPrice: 19,
                        oldPrice: ""
                    },
                    {
                        id: "0006",
                        title: "网易云音乐定制款真无线耳机-音乐π",
                        img: "http://p3.music.126.net/IkWd0AKMT9abrn1n_EU5Rw==/109951164005233085.jpg?param=244y244",
                        tips: "特价",
                        newPrice: 299,
                        oldPrice: 399
                    }
                ],
                hotGoods: [
                    {
                        id: "1001",
                        title: "伯朗 E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话",
                        img: "http://p3.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=329x9999&quality=75",
                        tips: "特价",
                        newPrice: "299",
                        oldPrice: "399"
                    },
                    {
                        id: "1002",
                        title: "网易云音乐&本来设计 原木创意手机支架手机座扩音器",
                        img: "http://p3.music.126.net/R_r4pT1Gh874yl_G8kGhtg==/18905002928382973.jpg?param=329x9999&quality=75",
                        tips: "",
                        newPrice: "179",
                        oldPrice: ""
                    },
                    {
                        id: "1003",
                        title: "击音【触控级】降噪防水手势识别蓝牙运动耳机",
                        img: "http://p3.music.126.net/517Cf4Nuebgpn476tMbXyQ==/109951164017036341.jpg?param=329x9999&quality=75",
                        tips: "",
                        newPrice: "149",
                        oldPrice: ""
                    },
                    {
                        id: "1004",
                        title: "本来设计 原创木质冰箱磁贴 创意礼品生日礼物",
                        img: "http://p4.music.126.net/CuFi30UFj9utZXs6mTpNPA==/18984167765584687.jpg?param=329x9999&quality=75",
                        tips: "",
                        newPrice: "59",
                        oldPrice: ""
                    },
                    {
                        id: "1005",
                        title: "网易云音乐定制款W800X头戴式蓝牙耳机",
                        img: "http://p4.music.126.net/yimiaHWmSqDfNghy-uhPbQ==/109951163667583989.jpg?param=329x9999&quality=75",
                        tips: "用卷减30",
                        newPrice: "199",
                        oldPrice: ""
                    },
                    {
                        id: "1006",
                        title: "JBL C200SI立体声入耳式耳机  手机音乐耳机 运动游戏耳机 耳机耳麦 带麦可通话",
                        img: "http://p4.music.126.net/AJROyT-mKFn8sQhl5Z-QEg==/109951164111206325.jpg?param=329x9999&quality=75",
                        tips: "用卷减40",
                        newPrice: "138",
                        oldPrice: ""
                    },
                    {
                        id: "1007",
                        title: "网易云音乐氧气蓝牙耳机Pro版",
                        img: "http://p3.music.126.net/8kcx8B6BGwcqcWN2EbFIXg==/109951163679752096.jpg?param=329x9999&quality=75",
                        tips: "用卷减130",
                        newPrice: "399",
                        oldPrice: ""
                    },
                    {
                        id: "1008",
                        title: "弯头数据线快充2.4A苹果安卓Type-C 玩游戏充电线",
                        img: "http://p4.music.126.net/yWwHtMgKqA7iSR-91USAZg==/109951163618674656.jpg?param=329x9999&quality=75",
                        tips: "包邮",
                        newPrice: "29",
                        oldPrice: "49"
                    },
                    {
                        id: "1009",
                        title: "听键 让耳机秒变无线 五种音效+功放芯片 有线耳机必备配件 网易专享苹果安卓通用",
                        img: "http://p3.music.126.net/pNxPodPSMPVkyL91gJl7RA==/109951163290388638.jpg?param=329x9999&quality=75",
                        tips: "特价",
                        newPrice: "89",
                        oldPrice: "109"
                    }
                ]
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .home{
        width: 100%;
        position: relative;
    }
    .menu{
        width: 100%;
        border-bottom: #d1d1d1 solid 1px;
    }
    .menu-container{
        position: relative;
        margin: 0 14% 0;
        display: flex;
        flex-direction: row;
        a{
            display: block;
            width: 25%;
        }
        .menu-item{
            height: 80px;
            text-align: center;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            color: #595959;
            div{
                margin-left: 15px;
                color: #140f2a;
                font-weight: 700;
            }
        }
    }
    .container{
        position: relative;
        margin: 0 14% 0;
        display: flex;
        flex-direction: column;
        /*height: 800px;*/
        /*background: #42b983;*/
        .hot{
            padding: 40px 0px 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
    }

    /*商品*/
    .recommend,.hotGoods > div{
        width: 100%;
    }
    .goods-title{
        text-align: left;
        font-size: 28px;
        font-family: "Microsoft YaHei UI";
        font-weight: 700;
        padding:0px 0px 10px 8px;
    }
    .goods-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-items: center;
        .goods-item{
            /*width: 25%;*/
            width: 263px;
            /*padding: 0px calc((25% - 263)/2) 0px;*/
            margin: 0px 5px 0px 8px;
            height: 382px;
        }
    }
</style>
