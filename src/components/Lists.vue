<template>
    <div class="lists">
        <div class="lists-add">
            <Add @getData="getData" />
        </div>
        <div v-if="listData.length > 0">
            <div class="content-wrap" v-for="(item, index) in listData" :key="index">
                <div class="item">{{ item.age }} {{ item.name }}</div>
                <Modify @getData="getData" :item="item" />
                <Delete @getData="getData" :item="item" />
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
    @Prop() private msg!: string;
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
    .content-wrap {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 10px 0;
        .item {
            width: 300px;
        }
    }
    &-add {
        display: flex;
        justify-content: center;
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
