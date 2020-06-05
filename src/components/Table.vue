<template>
  <div class="main-container">
    <Header message="ElementUI Table">
      
    </Header>

    <div class="content">
      <div>
        <button class="gradient" @click="showNotify"
          style="">默认按钮</button>
      </div>
      <div v-if="loading">
        loading...
      </div>
      <el-table
        v-loading="loading"
        element-loading-text="Loading..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="#F5F7FA"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Header from './Header';

export default {
  name: 'Element',
  components: {
    Header
  },
  data() {
    return {
      tableData: [{
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
        }],
        loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  methods: {

    showNotify() {
      this.loading = !this.loading;
      this.$notify.error({
        title: '错误',
        message: '这是一条错误的提示消息'
      });
    }
  }
}
</script>

<style>
.main-container {
  padding: 1.25rem 1.25rem .75rem;
}

.content {
  padding-top: 15px; 
}

.gradient {
  color: #fff;
  font-size: .875rem;
  font-weight:bold;
  line-height: 1rem;
  padding: .75rem 1.1875rem;
  background-image: linear-gradient(90deg,#2ce69b,#00d68f);
  box-shadow: 0 0 0 0 #00b887, 0 0 0 0 #00997a, 0 0 transparent;
  border: none;
  outline: none;
  border-radius: .25rem;
}
.gradient:hover {
  background-image: linear-gradient(90deg,#8cfac7,#2ce69b);
}
</style>
