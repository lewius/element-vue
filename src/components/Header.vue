<template>
  <div class="container-header">
    <el-page-header @back="showMessage" :content="message">
    </el-page-header>
    <slot name="header"></slot>
    <slot name="main"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    message: String,
    msg: String
  },
  methods: {
    showMessage() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
