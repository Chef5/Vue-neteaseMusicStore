
<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide class="swi-item" style='background-image: url("http://p4.music.126.net/Jaq3q_W8oRpjmVInhjOFRw==/109951164290041616.jpg");'>
                <a href="#">
                    <img src="../assets/item1.jpg" alt="">
                </a>
            </swiper-slide>
            <swiper-slide class="swi-item" style='background-image: url("http://p4.music.126.net/Pr9wQo-DRjUr26LRAh9BZA==/109951164293122436.jpg");'>
                <a href="#">
                    <img src="../assets/item2.jpg" alt="">
                </a>
            </swiper-slide>
            <swiper-slide class="swi-item" style='background-image: url("http://p3.music.126.net/X5PKDm-959WltfYGqt694Q==/109951164302515626.jpg");'>
                <a href="#">
                    <img src="../assets/item3.jpg" alt="">
                </a>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "theSwiper",
        data() {
            return {
                swiperOption: {
                    loop: true,
                    autoplay: {
                        delay: 4000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                    }
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        }
    }
</script>

<style lang="less" >
    .swi-item{
        padding: 0;
        position: relative;
    }
    .swi-item img{
        display: block;
        height: 100%;
        margin: 0 auto;
        /*margin-top: 5px;*/
    }
</style>
