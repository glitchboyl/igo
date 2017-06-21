<template>
  <div class="file-upload">
    <label :for="todo.name" v-if="todo.title"><span v-if="todo.necessary">*</span>{{ todo.title }}：</label>
    <span class="upload-button">{{ todo.uploadText }}<input type="file" :id="todo.name" :name="todo.name" :multiple="todo.multiple ? 'multiple' : ''" @change="upload($event)" /></span> {{ fileName }}
  </div>
</template>

<script>
  export default {
    props: ['todo'],
    data() {
      return {
        fileName: ''
      }
    },
    methods: {
      upload(file) {
        let self = this;
        let fileList = file.srcElement.files;
        self.todo.value = fileList;
        if (fileList.length == 0) {
          self.fileName = '';
        } else {
          self.fileName = fileList[0].name;
          for (let i = 1; i < fileList.length; i++) {
            self.fileName += '; ' + fileList[i].name;
          }
        }
      }
    }
  }
</script>

<style scoped>
  .file-upload {
    font-size: 14px;
    margin-bottom: 20px;
  }
  .file-upload:last-child {
    margin-bottom: 0;
  }
  .file-upload .upload-button {
    margin-left: 5px;
    margin-right: 10px;
    background-color: #FFFFFF;
    padding: 3px 10px;
    border: 1px solid #F1655D;
    color: #F1655D;
    display: inline-block;
    position: relative;
    cursor: pointer;
  }
  .file-upload input[type=file] {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    position: absolute;
    z-index: 1;
  }
</style>
