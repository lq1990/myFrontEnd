<template>
  <div id="app">
    <h1>USERLIST</h1>
    <el-button @click="showAddDialog" type="success" plain>ADD</el-button>
    <hr>
    <table class="table is-striped is-hoverable">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>PHONE</th>
          <th>ADDRESS</th>
          <th>EDIT</th>
        </tr>
      </thead>
      <tbody>
        <row v-for="(item,index) of userList" @update:user="saveUser" @delete:id="delUser($event)"
         :propsArray="['id','name','phone','address']" :key="index" :rowData="item"></row>
        <!-- <tr v-for="(item, index) of userList" :key="index">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.address}}</td>
          <td>
            <a @click="delUser(item.id)" href="javascript:">Del</a>
            &nbsp;
            <a @click="editUser(item.id)" href="javascript:">Edit</a>
          </td>
        </tr> -->
      </tbody>
    </table>
    <el-dialog
      title="Add User"
      :visible.sync="addDialogVisible"
      width="60%"
      :before-close="handleClose"
    >
      <el-form :model="form">
        <el-form-item label="NAME" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="PHONE" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="ADDRESS" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">cancel</el-button>
        <el-button type="primary" @click="submitAdd">submit</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 10px;
}
</style>

<script>
import "element-ui/lib/theme-chalk/index.css";
// import Demo from "./components/Demo";
import axios from "axios"; // ajax 请求库
import { Message, MessageBox } from "element-ui";
import Row from "./components/Row";

export default {
  name: "app",
  data() {
    return {
      age: 19,
      userList: [],
      addDialogVisible: false,
      form: {
        id: "",
        name: "",
        phone: "",
        address: ""
      },
      formLabelWidth: "120px"
    };
  },
  components: {
    row: Row
  },
  methods: {
    saveUser(e) {
      let idx = this.userList.findIndex(item => e.id === item.id);
      this.userList.splice(idx, 1, e);
    },
    submitAdd() {
      this.id = Date.now();
      axios
        .post("http://localhost:56789/users/", this.form)
        .then(res => {
          Message.info("add successfully");
          this.userList.push(res.data);
          this.addDialogVisible = false;
        })
        .catch(() => {
          Message.info("failed to add.");
        });
    },
    handleClose(done) {
      MessageBox.confirm("are you sure to close it?")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    showAddDialog() {
      this.addDialogVisible = true;
    },
    delUser(id) {
      MessageBox.confirm("del ID: " + id + " or not?", "del warning")
        .then(() => {
          axios
            .delete("http://localhost:56789/users/" + id)
            .then(res => { // eslint-disable-line
              let idx = this.userList.findIndex(item => item.id == id);
              if (idx >= 0) {
                this.userList.splice(idx, 1);
                Message.info("del successfully.");
              }
            })
            .catch(e => {
              Message.info("failed to del. " + e);
            });
        })
        .catch(() => {
          Message.info("cancel the del.");
        });
      // console.log(id);
    }
  },
  created() {
    // 生命周期中的
    axios
      .get("http://localhost:56789/users") // 启动Json-server后，从server get到数据
      .then(res => {
        // console.log(res.data);
        // console.log(res.status);
        // console.log(res.statusText);
        // console.log(res.headers);
        // console.log(res.config);
        this.userList = res.data; // 实现从javas-data到view自动的转换，通过vue框架，比传统开发方式方便。
        // this.userList.push(...res.data);
      })
      .catch(e => {
        Message.info("加载失败 " + e);
      }); // eslint-disable-line
  }
};
</script>
