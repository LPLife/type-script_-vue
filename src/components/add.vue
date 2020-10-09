<template>
    <div class="add">
        <!-- 增删改 -->
        <el-button type="primary" @click="dialogVisible = true">增加</el-button>
        <!-- 弹窗 -->
        <el-dialog title="确定要增加吗？" :visible.sync="dialogVisible" width="50%" :show-close="false">
            <div class="form">
                姓名：<input type="text" v-model="userInfo.name" name="name" id="" />
            </div>
            <div class="form">
                年龄：
                <input v-model="userInfo.age" type="text" name="age" id="" />
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addOperating">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import Request from '../request';
    @Component({})
    export default class Add extends Vue {
        dialogVisible: boolean = false;
        userInfo: any = {};
        mounted() {}

        async addOperating() {
            /**
             * 1.名字或者年龄过滤（省略）
             */
            await Request.addDate(this.userInfo);
            this.$emit('getData');
            this.dialogVisible = false;
        }
    }
</script>

<style scoped lang="less"></style>
