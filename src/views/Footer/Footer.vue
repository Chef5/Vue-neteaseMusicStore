<template>
    <footer class="footer">
        <div class="content">
            <div class="flex">
                <div class="info">
                    <div class="info-some">
                        <a href="#">关于网易</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                        <a href="#">客户服务</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                        <a href="#">服务条款</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                        <a href="#">网站导航</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                        <a href="#">意见反馈</a>
                    </div>
                    <div class="info-copy">
                        开源精神，乐于分享 &copy; 2019  <a href="https://github.com/Patrick-Jun/">Patrick-Jun</a> Vue+buefy仿写：<a href="https://github.com/Patrick-Jun/Vue-neteaseMusicStore">Vue-neteaseMusicStore</a>
                    </div>
                </div>
                <div class="other">
                    <div class="other-item">
                        <div class="other-item-icon">
                            <b-icon icon="compact-disc" size="is-large"></b-icon>
                        </div>
                        <div class="other-item-icon">
                            独立音乐人
                        </div>
                    </div>

                    <div class="other-item">
                        <div class="other-item-icon">
                            <b-icon icon="compact-disc" size="is-large"></b-icon>
                        </div>
                        <div class="other-item-icon">
                            独立音乐人
                        </div>
                    </div>

                    <div class="other-item">
                        <div class="other-item-icon">
                            <b-icon icon="compact-disc" size="is-large"></b-icon>
                        </div>
                        <div class="other-item-icon">
                            独立音乐人
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="less" scoped>
    footer{
        width: 100%;
        padding: 3rem 1.5rem 3rem;
    }
    .info-some a{
        color: #aaa;
        font-size: 13px;
        font-weight: 500;
    }
    .content{
        width: 100%;
        margin: 0 10% 0;
    }
    .flex{
        display: flex;
        flex-direction: row;
    }
    .info{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .info-some,.info-copy{
        padding: 5px;
    }
    .other{
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .other-item{
        width: 100px;
        color: #bbb;
        font-size: 12px;
    }
</style>
