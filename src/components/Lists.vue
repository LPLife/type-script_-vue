<template>
    <div class="lists">
        <div class="lists-add">
            <Add @getData="getData" />
        </div>
        <div class="title-tip">
            <div class="title-type"><span>姓名</span><span>年龄</span></div>
            <div class="title-op"> 操作</div>
        </div>
        <div v-if="listData.length > 0">

            <div class="content-wrap" v-for="(item, index) in listData" :key="index">
                <div class="item"> <span>{{ item.name }}</span> <span>{{ item.age }}</span></div>
                <div class="operating-btn">
                    <Modify @getData="getData" :item="item" />
                    <Delete @getData="getData" :item="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Modify from '@/components/modify';
    import Add from '@/components/add';
    import Delete from '@/components/delete';

    import Request from '@/request';
    @Component({
        components: {
            Modify,
            Add,
            Delete
        }
    })
    export default class Lists extends Vue {
        @Prop()
        private msg!: string;
        listData: any = [];
        mounted() {
            this.getData();
        }
        async getData() {
            let data: any = await Request.getLists();
            this.listData = data;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.lists {
    display: flex;
    flex-direction: column;
    .content-wrap:not(:first-child) {
        border-top: none;
    }
    .title-tip {
        font-size: 30px;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #dddddd;
        background: darkgray;

        .title-type {
            height: 80px;
            width: 80%;
            display: flex;
            justify-content: center;
            flex-direction: row;
            line-height: 80px;

            span {
                text-align: center;
                display: block;
                width: 50%;
            }
            span:nth-child(1) {
                border-right: 1px solid #dddddd;
            }
            span:nth-child(2) {
                border-right: 1px solid #dddddd;
            }
        }
        .title-op {
            flex: 1;
        }
    }
    .content-wrap {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #dddddd;
        font-size: 28px;
        color: #333333;

        .item {
            height: 80px;
            width: 80%;
            display: flex;
            justify-content: center;
            flex-direction: row;
            line-height: 80px;
            span {
                text-align: center;
                display: block;
                width: 50%;
            }
            span:nth-child(1) {
                border-right: 1px solid #dddddd;
            }
            span:nth-child(2) {
                border-right: 1px solid #dddddd;
            }
        }
    }
    &-add {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 32px;
    }
    .operating-btn {
        flex: 1;
        display: flex;
        justify-content: space-around;
    }
    /deep/ .el-dialog__body {
        padding: 0;
    }
    .dialog-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    /deep/ .el-dialog__body .form {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 10px;
        align-items: center;
        input {
            width: 100px;
        }
    }
}
</style>
