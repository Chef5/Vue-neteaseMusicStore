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
              <div class="recommend-title">
                  编辑推荐
              </div>
              <div class="recommend-container">
                  <div class="recommend-item" v-for="item of goodsList" :key="item.id">
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
            goodsList: [
                {
                    id: "0001",
                    title: "伯朗H16 Pro 开盖弹窗智能触控苹果安卓通用蓝牙5.0",
                    img: "http://p3.music.126.net/BNhuRZ512iAK0TUvE0L7Fg==/109951164276758539.jpg?param=244y244",
                    tips: "特价",
                    newPrice: 299,
                    oldPrice: 299
                },
                {
                    id: "0002",
                    title: "伯朗H16 Pro 开盖弹窗智能触控苹果安卓通用蓝牙5.0",
                    img: "http://p3.music.126.net/BNhuRZ512iAK0TUvE0L7Fg==/109951164276758539.jpg?param=244y244",
                    tips: "特价",
                    newPrice: 299,
                    oldPrice: ""
                },
                {
                    id: "0003",
                    title: "伯朗H16 Pro 开盖弹窗智能触控苹果安卓通用蓝牙5.0",
                    img: "http://p3.music.126.net/BNhuRZ512iAK0TUvE0L7Fg==/109951164276758539.jpg?param=244y244",
                    tips: "特价",
                    newPrice: 299,
                    oldPrice: ""
                },
                {
                    id: "0004",
                    title: "伯朗H16 Pro 开盖弹窗智能触控苹果安卓通用蓝牙5.0",
                    img: "http://p3.music.126.net/BNhuRZ512iAK0TUvE0L7Fg==/109951164276758539.jpg?param=244y244",
                    tips: "特价",
                    newPrice: 299,
                    oldPrice: 299
                },
                {
                    id: "0005",
                    title: "伯朗H16 Pro 开盖弹窗智能触控苹果安卓通用蓝牙5.0",
                    img: "http://p3.music.126.net/BNhuRZ512iAK0TUvE0L7Fg==/109951164276758539.jpg?param=244y244",
                    tips: "特价",
                    newPrice: 299,
                    oldPrice: ""
                }
            ]
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

    /*商品推荐*/
    .recommend > div{
        width: 100%;
    }
    .recommend-title{
        text-align: left;
        font-size: 28px;
        font-family: "Microsoft YaHei UI";
        font-weight: 700;
        padding:0px 0px 10px 8px;
    }
    .recommend-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-items: center;
        .recommend-item{
            /*width: 25%;*/
            width: 263px;
            /*padding: 0px calc((25% - 263)/2) 0px;*/
            margin: 0px 5px 0px 8px;
            height: 382px;
        }
    }
</style>
