<template>
    <div class="modify">
        <!-- 增删改 -->
        <el-button type="primary" @click="dialogVisible = true">修改</el-button>
        <!-- 弹窗 -->
        <el-dialog
            title="确定要修改吗？"
            :visible.sync="dialogVisible"
            width="50%"
            :show-close="false"
        >
            <div class="form">
                姓名：<input
                    @change="inputChange"
                    type="text"
                    :value="userInfo.name"
                    name="name"
                    id=""
                />
            </div>
            <div class="form">
                年龄：
                <input @change="inputChange" type="text" :value="userInfo.age" name="age" id="" />
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="modifyOperating(typeName)">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import Request from '../request';
@Component
export default class Modify extends Vue {
    @Prop() private item: any;
    dialogVisible: boolean = false;
    userInfo: any = {};
    mounted() {
        if (this.item) {
            this.userInfo = this.item;
        }
    }
    @Watch('item', {immediate: true, deep: true})
    watchitem(newVal: any = {}): void {
        this.userInfo = newVal;
    }
    inputChange(e: any) {
        switch (e.target.name) {
            case 'name':
                this.userInfo.name = e.target.value;
                break;
            case 'age':
                this.userInfo.age = e.target.value;
                break;
            default:
                break;
        }
    }

    async modifyOperating() {
        /**
         * 1.名字或者年龄过滤（省略）
         */

        await Request.modifyData(this.userInfo);
        this.$emit('getData');
        this.dialogVisible = false;
    }
}
</script>

<style scoped lang="less"></style>
