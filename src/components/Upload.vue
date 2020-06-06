<template>
  <div class="main-container">
    <Header message="ElementUI Upload">
      
    </Header>

    <div class="content">
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>


      <div class="cropper-content" >
        <div class="cropper">
          <vueCropper
            ref="cropper"
            :img="option.img"
            :outputSize="option.size"
            :outputType="option.outputType"
            :info="true"
            :full="option.full"
            :canMove="option.canMove"
            :canMoveBox="option.canMoveBox"
            :original="option.original"
            :autoCrop="option.autoCrop"
            :autoCropWidth="option.autoCropWidth"
            :autoCropHeight="option.autoCropHeight"
            :fixedBox="option.fixedBox"
            @realTime="realTime"
          ></vueCropper>
        </div>
        <div class="show-preview" v-if="!!previews"
          :style="{'width': previews.w + 'px', 'height': previews.h + 'px', 'margin': '5px'}">
          <div :style="previews.div" class="preview">
            <img :src="previews.url" :style="previews.img">
          </div>
        </div>
      </div>
      <div class="cropper-btn">
          <el-upload
            class="upload-btn"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :before-upload="beforeUpload"
            :on-success="handleSuccess">
            <el-button  icon="el-icon-upload2" circle></el-button>
          </el-upload>

          <el-button type="primary" icon="el-icon-zoom-in" circle @click="changeScale(1)"></el-button>
          <el-button type="primary" icon="el-icon-zoom-out" circle @click="changeScale(-1)"></el-button>
          <el-button type="primary" icon="el-icon-refresh-left" circle @click="rotateLeft()"></el-button>
          <el-button type="primary" icon="el-icon-refresh-right" circle @click="rotateRight()"></el-button>
      </div>

      <el-button style="margin-top: 15px;" type="danger" round @click="down('blob')">下载</el-button>

    </div>
  </div>
</template>

<script>
import Header from './Header';
import { VueCropper }  from 'vue-cropper' 


export default {
  name: 'Upload',
  components:{
    Header,
    VueCropper
  },
  data() {
    return {
      image: null,
      option: {
        img: 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png',
        size: 1,
        full: false,//输出原图比例截图 props名full
        outputType: 'png',
        canMove: true,
        original: false,
        canMoveBox: true,
        autoCrop: true,
        autoCropWidth: 200,
        autoCropHeight: 200,
        fixedBox: true
      },
      previews: null
    }
  },
  methods: {
    beforeUpload(file){
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('Avatar picture must be JPG format!');
      }
      if (!isLt2M) {
        this.$message.error('Avatar picture size can not exceed 2MB!');
      }
    },
    handleSuccess(res, file) {
      console.log('upload success', res, file)
      this.image = URL.createObjectURL(file.raw);
      this.option.img = this.image;
      console.log(this.image)
      console.log(this.option)
    },

    changeScale (num) { 
        num = num || 1 
        this.$refs.cropper.changeScale(num)
    }, 
    rotateLeft () { this.$refs.cropper.rotateLeft() }, 
    rotateRight () { this.$refs.cropper.rotateRight() }, 
    finish (type) {
      // 输出 
      // var test = window.open('about:blank') 
      // test.document.body.innerHTML = '图片生成中..' 
      if (type === 'blob') { 
        this.$refs.cropper.getCropBlob((data) => { 
          var img = window.URL.createObjectURL(data) 
          this.model = true
            this.modelSrc = img
        }) 
      } else { 
        this.$refs.cropper.getCropData((data) => { 
          this.model = true 
          this.modelSrc = data 
        })
      } 
    }, 
    // 实时预览函数
    realTime (data) { 
      console.log(data);
      this.previews = data
    }, 
    down (type) { 
      // event.preventDefault() 
      var aLink = document.createElement('a') 
      aLink.download = 'author-img' 
      // 输出 
      if (type === 'blob') { 
        this.$refs.cropper.getCropBlob((data) => { 
          console.log(data)
          console.log(window.URL.createObjectURL(data))
          aLink.href = window.URL.createObjectURL(data) 
          aLink.click() 
        })
      } else { 
        this.$refs.cropper.getCropData((data) => { 
          // this.downImg = data 
          aLink.href = data 
          aLink.click() 
        }) 
      } 
    },
    // uploadImg (e, num) { 
    //   //上传图片
    //   // this.option.img 
    //   var file = e.target.files[0] 
    //   if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) { 
    //     alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种') 
    //     return false 
    //   } 
    //   var reader = new FileReader() 
    //   reader.onload = (e) => { 
    //     let data 
    //     if (typeof e.target.result === 'object') { 
          
    //       // 把Array Buffer转化为blob 如果是base64不需要 
    //       data = window.URL.createObjectURL(new Blob([e.target.result])) 
    //     }  else { 
    //       data = e.target.result 
    //     } 
    //     if (num === 1) { 
    //       this.option.img = data 
    //     } else if (num === 2) { 
    //       this.example2.img = data 
    //     } 
    //   } 
    //   // 转化为base64 // 
    //   reader.readAsDataURL(file) 
    //   // 转化为blob 
    //   reader.readAsArrayBuffer(file) 
    // }, 
    imgLoad (msg) { 
      console.log(msg) 
    } 
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cropper-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
}
.cropper{
  margin-top: 20px;
  width: 350px;
  height: 300px;
}
.cropper-btn {
  margin-top: 8px;
}
.upload-btn {
  display: inline-block;
  margin-right: 10px;
}

</style>
