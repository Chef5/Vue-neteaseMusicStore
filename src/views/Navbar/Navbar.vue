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
                    <shopping-cart></shopping-cart>
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
    import ShoppingCart from '../../components/shoppingCart'
    export default {
        name: "Navbar",
        components: {
            TheSearch,
            ThePerson,
            ShoppingCart
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
        height: 76px;
        margin: 0 10% 0;
        /*border-bottom: 1px solid rgb(83, 82, 87);*/
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


    /*登录*/

</style>
