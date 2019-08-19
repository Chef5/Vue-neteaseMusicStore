<template>
    <div>
        <b-dropdown hoverable aria-role="list" class="search-width">
            <b-field slot="trigger" class="search-width">
                <b-input custom-class="inputs"
                        placeholder="氧气耳机"
                        type="search"
                        icon="search"
                        rounded
                >
                </b-input>
            </b-field>
            <label>热门搜索：</label>
            <b-dropdown-item class="search-width" aria-role="listitem">
                本子
            </b-dropdown-item>
            <b-dropdown-item class="search-width" aria-role="listitem">
                乐器
            </b-dropdown-item>
            <b-dropdown-item class="search-width" aria-role="listitem">
                蓝牙
            </b-dropdown-item>
            <b-dropdown-item class="search-width" aria-role="listitem">
                漫威
            </b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
    export default {
        name: "theSearch"
    }
</script>

<style lang="less" scoped>
    /*搜索*/
    label{
        display: inline-block;
        width: 100%;
        padding: 0px 16px 0px;
        text-align: left;
        font-weight: 600;
        font-size: 12px;
    }
    .dropdown-item{
        font-weight: 500 !important;
    }
    .search-width{
        width: 231px;
    }
</style>
