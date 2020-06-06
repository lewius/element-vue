<template>
  <div class="main-container">
    <Header message="vue-quill-editor">
      
    </Header>

    <div class="content">
        <quill-editor
          class="editor"
          :content="content"
          :options="editorOption"
          @change="onEditorChange($event)"
        />

        <el-button type="primary" round @click="submit()">主要按钮</el-button>
    </div>
  </div>
</template>

<script>
import Header from './Header';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'Richtext',
  components:{
    Header,
    quillEditor
  },
  data() {
    return {
      content: '<h2>I am Example</h2>',
      editorOption: {
        // Some Quill options...
      }
    }
  },
  methods: {
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      this.content = html
    },
    submit() {
      console.log(this.content);
    }
  },
  mounted() {
    console.log('this is current quill instance object', this.editor)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .editor {
      height: 400px;
      overflow: hidden;
    }
</style>
