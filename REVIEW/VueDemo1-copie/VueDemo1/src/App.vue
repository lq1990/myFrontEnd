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
import axios from 'axios';

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
      tableData: [] // 列表中的user信息
    }
  },
  methods: {
    submitAdd() {
      if (this.form.name) {
        axios.post('http://localhost:56789/users', this.form)
          .then((res) => {
            this.dialogVisible = false;
            this.form = {}
            this.tableData.push(res.data);
            Message.success("add successfully");
          }).catch((e) => {
            Message.error("failed to add. " + e);
          });
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
      this.form={};
    },
    submitEdit() {
      let id = this.form.id;
      // db & tableData
      axios.put("http://localhost:56789/users/" + id, this.form).then(() => {
        // Message.success("edit successfully");
        let idx = this.tableData.findIndex(u => u.id == id);
        this.tableData.splice(idx, 1, this.form);
        this.dialogVisible = false;
        this.form = {};
        Message.success("edit successfully");
      }).catch(() => {
        Message.error("failed to edit");
      });
    },
    handleClose() {
      this.dialogVisible = false;
    },
    delRow(row) { // row：有着这一行的数据，id,name,age,address
      let id = row.id;
      MessageBox.confirm("delete id: " + id+ ", name: "+row.name)
        .then(() => {
          axios.delete("http://localhost:56789/users/" + id).then(() => {
            let idx = this.tableData.findIndex(u => u.id == id);
            Message.success("delete successfully");
            this.tableData.splice(idx, 1);
          }).catch(() => {
            Message.error("failed to delete");
          });
        })
        .catch();
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
  },
  created() {
    // 在vue实例生命周期的created，借助axios get到server 的数据。传给table
    axios.get('http://localhost:56789/users').then((res) => {
      this.tableData = res.data;
    }).catch();
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
