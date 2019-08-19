<template>
    <div class="container">
        <div class="wrapper">
            <div class="logo">
                <a href=""></a>
            </div>
            <div class="right">
                <div class="search">
                    <the-search></the-search>
                </div>
                <div class="cart">
                    <b-icon icon="shopping-cart" size="is-large"></b-icon>
                    <span class="num">3</span>
                </div>
                <div class="person">
                    <the-person></the-person>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TheSearch from './components/theSearch'
    import ThePerson from './components/thePerson'
    export default {
        name: "Navbar",
        components: {
            TheSearch,
            ThePerson
        }
    }
</script>

<style lang="less" scoped>
    .container{
        width: 100%;
    }
    .wrapper {
        display: flex;
        flex-direction: row;
        margin: 0 10% 0;
    }
    .logo{
        width: 290px;
    }
    .logo a{
        width: 290px;
        height: 70px;
        display: inline-block;
        background-image: url(../../assets/logo.jpg);
        background-size: 290px 70px;
    }
    .right{
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }
    .cart,.person{
        margin-left: 20px;
    }
    /*购物车*/
    .cart{
        position: relative;
    }
    .num{
        width: 18px;
        height: 18px;
        padding: 2px;
        font-size: 12px;
        line-height: 14px;
        display: inline-block;
        background-color: #e23b20;
        color: white;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        top: 1px;
        right: 1px;
    }

    /*登录*/

</style>
