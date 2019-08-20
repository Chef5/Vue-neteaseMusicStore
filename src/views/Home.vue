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
      </div>
  </div>
</template>

<script>
import TheSwipper from '../components/theSwipper'
import sideFloatMenu from '../components/sideFloatMenu'
export default {
  name: 'home',
  components: {
      TheSwipper,
      sideFloatMenu
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
        height: 800px;
        /*background: #42b983;*/
        .hot{
            padding: 40px 0px 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
    }
</style>
