<template>
    <div class="sc-container">
        <b-icon icon="shopping-cart" size="is-large"></b-icon>
        <span class="num">3</span>
    </div>
</template>

<script>
    export default {
        name: "shoppingCart"
    }
</script>

<style scoped>
    .sc-container{
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
</style>
