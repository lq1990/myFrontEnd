<template>
  <tr class="row">
    <template v-if="isEdit">
      <td v-for="(item, index) of propsArray" :key="index">
        <!-- rowData是这一行所有的数据，(item, index) 又对这一行数据进行 遍历。
        故这里的item是id、name、、-->
        <template v-if="item=='id'">{{userObj[item]}}</template>
        <template v-else>
          <input type="text" v-model="userObj[item]">
        </template>
      </td>
      <td>
        <a @click="cancelEdit" href="javascript:">Cancel</a>
        &nbsp;
        <a @click="saveUser" href="javascript:">Submit</a>
      </td>
    </template>
    <template v-else>
      <td v-for="(item, index) of propsArray" :key="index">{{userObj[item]}}</td>
      <td>
        <a @click="delUser" href="javascript:">Del</a>
        &nbsp;
        <a @click="isEdit=true" href="javascript:">Edit</a>
      </td>
    </template>
  </tr>
</template>

<script>
import axios from "axios";
import { Message } from "element-ui";
export default {
  name: "row",
  props: ["rowData", "propsArray"], // 属性不要进行修改。父到子 传递数据通过props
  data() {
    return {
      isEdit: false,
      userObj: { ...this.rowData } //此处为深拷贝，用的展开运算符。 rowData: 这一行所有的数据
      // userObj: Object.assign({}, this.rowData);
    };
  },
  methods: {
    delUser() {
      this.$emit("delete:id", this.rowData.id);
    },
    saveUser() {
      this.isEdit = false;
      axios
        .put("http://localhost:56789/users/" + this.rowData.id, this.userObj)
        .then(() => {
          this.$emit("update:user", { ...this.userObj });
          this.isEdit = false;
          Message.success("save successfully");
        })
        .catch(() => {
          Message.error("failed to save");
        });
    },
    cancelEdit() {
      Object.assign(this.userObj, this.rowData); // Object.assign() 深拷贝obj
      this.isEdit = false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
