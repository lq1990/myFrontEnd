<template>
  <div id="app">
    <h1>USERLIST</h1>
    <el-button @click="dialogVisible=true;isAdd=true;isEdit=false;" type="success" plain>ADD</el-button>
    <template v-if="isAdd">
      <el-dialog
        title="Add User"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose"
        :modal-append-to-body="modal"
      >
        <el-form :model="form">
          <el-form-item label="Name" required :label-width="formLabelWidth">
            <el-input ref="mark" v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Age" :label-width="formLabelWidth">
            <el-input v-model="form.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Address" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
          <el-button @click="cancelAdd">cancel</el-button>
          <el-button type="primary" @click="submitAdd">submit</el-button>
        </span>
      </el-dialog>
    </template>
    <template v-else-if="isEdit">
      <el-dialog
        title="Edit User"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose"
        :modal-append-to-body="modal"
      >
        <el-form :model="form">
          <el-form-item label="ID" :label-width="formLabelWidth">
            <el-input :disabled="edit" v-model="form.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Name" required :label-width="formLabelWidth">
            <el-input ref="mark" v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Age" :label-width="formLabelWidth">
            <el-input v-model="form.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Address" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
          <el-button @click="cancelEdit">cancel</el-button>
          <el-button type="primary" @click="submitEdit">submit</el-button>
        </span>
      </el-dialog>
    </template>
    <hr>

    <!-- 从json-server 获取数据放在表格 -->
    <el-table
      :data="tableData"
      stripe
      style="width: 70%; margin: 0 auto;font-size:18px;"
      size="medium"
    >
      <el-table-column fixed prop="id" sortable label="ID" width></el-table-column>
      <el-table-column prop="name" label="NAME" width></el-table-column>
      <el-table-column prop="age" label="AGE" width></el-table-column>
      <el-table-column prop="address" label="ADDRESS" width></el-table-column>
      <el-table-column label="EDIT" width>
        <template slot-scope="scope">
          <el-button @click="delRow(scope.row)" type="text" size="medium">Del</el-button>
          <el-button @click="editRow(scope.row)" type="text" size="medium">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { MessageBox, Message } from 'element-ui';

export default {
  name: 'app',
  components: {

  },
  data() {
    return {
      edit: true,
      isAdd: true,
      isEdit: false,
      dialogVisible: false,
      modal: true,
      formLabelWidth: "80px",
      form: { // add 表单的数据
        id: '',
        name: '',
        age: '',
        address: ''
      },
      tableData: [{
        "id": 1,
        "name": "明",
        "age": "100",
        "address": "ming1"
      },
      {
        "id": 10,
        "name": "小明",
        "age": "100",
        "address": "ming1"
      },
      {
        "id": 12,
        "name": "name12",
        "age": "",
        "address": ""
      },
      {
        "id": 15,
        "name": "name1555",
        "age": "15",
        "address": "nameaddress"
      },
      {
        "id": 16,
        "name": "anna",
        "age": "100",
        "address": "abc"
      },
      {
        "id": 17,
        "age": 10,
        "name": "ooo",
        "address": "abc"
      },
      {
        "id": 18,
        "age": 10,
        "name": "aaa",
        "address": "abc"
      },
      {
        "id": 19,
        "age": 10,
        "name": "bbb",
        "address": "abc"
      },
      {
        "id": 20,
        "name": "anna",
        "address": "abc",
        "age": 10
      },
      {
        "name": "lq",
        "age": "",
        "address": "",
        "id": 21
      },
      {
        "name": "lq",
        "age": "",
        "address": "",
        "id": 22
      },
      {
        "name": "lq1",
        "age": "1",
        "address": "add1",
        "id": 23
      },
      {
        "name": "lq2",
        "age": "",
        "address": "",
        "id": 25
      },
      {
        "name": "lq3",
        "age": "",
        "address": "",
        "id": 26
      },
      {
        "name": "lq4",
        "age": "",
        "address": "",
        "id": 27
      },
      {
        "name": "lq5",
        "id": 28
      },
      {
        "id": 29,
        "name": "lq6",
        "age": "666",
        "address": "lq666abc"
      },
      {
        "name": "new name",
        "id": 33
      },
      {
        "id": 34,
        "name": "lqlq",
        "age": "",
        "address": ""
      }] // 列表中的user信息
    }
  },
  methods: {
    submitAdd() {
      if (this.form.name) {
        this.form.id = Date.now();
        this.dialogVisible = false;
        this.tableData.push(this.form);
        this.form = {}
        Message.success("add successfully");
      } else {
        Message.warning("Name of the User is required.");
        // MessageBox.alert("Name of the User is required.");
        this.$refs.mark.$el.querySelector('input').focus(); // 使name获得焦点
      }
    },
    cancelAdd() {
      this.dialogVisible = false;
      this.form = {}
    },
    cancelEdit() {
      this.dialogVisible = false;
      this.form = {};
    },
    submitEdit() {
      let id = this.form.id;
      // db & tableData
      let idx = this.tableData.findIndex(u => u.id == id);
      this.tableData.splice(idx, 1, this.form);
      this.dialogVisible = false;
      this.form = {};
      Message.success("edit successfully");
    },
    handleClose() {
      this.dialogVisible = false;
    },
    delRow(row) { // row：有着这一行的数据，id,name,age,address
      let id = row.id;
      MessageBox.confirm("delete id: " + id + ", name: " + row.name)
        .then(() => {
          let idx = this.tableData.findIndex(u => u.id == id);
          this.tableData.splice(idx, 1);
          Message.success("delete successfully");
        })
    },
    editRow(row) {
      this.dialogVisible = true;
      this.isEdit = true;
      this.isAdd = false;
      this.form.id = row.id;
      this.form.name = row.name;
      this.form.age = row.age;
      this.form.address = row.address;
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
