<template>
    <div class="container" @mouseover="handleHover" @mouseleave="handelMouseLeave">
<!--        未登录-->
        <b-dropdown hoverable aria-role="list" @active-change="handel" v-if="!loginState">
            <div slot="trigger" class="person-nav">
                <span>登录</span><b-icon :icon="sortIcon" custom-class="nav-icon"></b-icon>
            </div>
            <b-dropdown-item aria-role="listitem" class="method-item">
                <b-icon icon="mobile-alt" custom-class="method-icon"></b-icon>
                <span class="method-text">手机号登录</span>
            </b-dropdown-item>
            <b-dropdown-item aria-role="listitem" class="method-item">
                <b-icon icon="weixin" pack="fab" custom-class="method-icon"></b-icon>
                <span class="method-text">微信登录</span>
            </b-dropdown-item>
            <b-dropdown-item aria-role="listitem" class="method-item">
                <b-icon icon="qq" pack="fab" custom-class="method-icon"></b-icon>
                <span class="method-text">QQ登录</span>
            </b-dropdown-item>
            <b-dropdown-item aria-role="listitem" class="method-item">
                <b-icon icon="weibo" pack="fab" custom-class="method-icon"></b-icon>
                <span class="method-text">新浪微博登录</span>
            </b-dropdown-item>
            <b-dropdown-item aria-role="listitem" class="method-item">
                <b-icon icon="compact-disc" custom-class="method-icon"></b-icon>
                <span class="method-text">网易邮箱账号登录</span>
            </b-dropdown-item>
        </b-dropdown>
<!--        已登录-->
        <b-dropdown hoverable aria-role="list" @active-change="handel" v-if="loginState" position="is-bottom-left">
            <div slot="trigger" class="person-nav">
                <img src="../../../assets/my2.jpg" alt=""><b-icon :icon="sortIcon" custom-class="nav-icon"></b-icon>
            </div>
            <b-dropdown-item aria-role="listitem" class="method-item">
                <b-icon icon="list-alt" custom-class="method-icon"></b-icon>
                <span class="method-text">我的订单</span>
            </b-dropdown-item>
            <b-dropdown-item aria-role="listitem" class="method-item">
                <b-icon icon="ticket-alt" custom-class="method-icon"></b-icon>
                <span class="method-text">我的优惠券</span>
            </b-dropdown-item>
            <b-dropdown-item aria-role="listitem" class="method-item">
                <b-icon icon="map-marker-alt" custom-class="method-icon"></b-icon>
                <span class="method-text">我的收货地址</span>
            </b-dropdown-item>
            <b-dropdown-item aria-role="listitem" class="method-item">
                <b-icon icon="compact-disc" custom-class="method-icon"></b-icon>
                <span class="method-text">网易云音乐首页</span>
            </b-dropdown-item>
            <b-dropdown-item aria-role="listitem" class="method-item">
                <b-icon icon="power-off" custom-class="method-icon"></b-icon>
                <span class="method-text">退出</span>
            </b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
    export default {
        name: "thePerson",
        data () {
            return {
                sortIcon: "angle-down",
                loginState: true
            }
        },
        methods: {
            handleHover () {
                this.sortIcon = "angle-up"
            },
            handelMouseLeave () {
                this.sortIcon = "angle-down"
            },
            handel (e) {
                console.log(e);
            }
        }
    }
</script>

<style scoped>
    .container{

    }
    .person-nav{
        height: 48px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .person-nav span{
        display: inline-block;
        line-height: 30px;
        font-size: 16px;
    }
    .person-nav img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
    }
    .nav-icon{

    }
    .method-item{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .method-text{
        padding-left: 6px;
    }
</style>
