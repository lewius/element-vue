<template>
  <div class="main-container">
    <Header message="ElementUI Transfer">
      
    </Header>

    <div class="content">
      <el-transfer
        v-model="value"
        :data="data">
      </el-transfer>
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
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };

    return {
      data: generateData(),
      value: [1, 4],
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

</style>
