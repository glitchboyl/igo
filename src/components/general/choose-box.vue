<template>
<div class="choose-box">
  <span class="title" v-if="todo.title"><span v-if="todo.necessary">*</span>{{ todo.title }}：</span>
  <div class="box-container" :style="{ width: todo.width + 'px' }" v-click-outside="close">
    <div class="cascader-input" @click="open">
      <input type="text" ref="input" readonly="readonly" autocomplete="off" :placeholder="placeholder" v-model="todo.showText" @focus="focus(true)" @blur="focus(false)" />
      <span class="caret" :class="{active:isOpen}"></span>
    </div>
    <div class="cascader-container" v-if="isOpen">
      <cascader :todo="todo.items" keep-alive></cascader>
    </div>
  </div>
</div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import Bus from '@/assets/eventBus'
import cascader from './cascader'
export default {
  props: ['todo'],
  data() {
    let self = this;
    return {
      placeholder: self.todo.placeholder ? self.todo.placeholder : '请选择',
      isOpen: false,
      active: [],
      find(arr, value) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] == value) {
            return true;
          }
        }
        return false;
      }
    }
  },
  directives: {
    ClickOutside
  },
  components: {
    cascader
  },
  methods: {
    open() {
      let self = this;
      self.$refs.input.focus();
      self.isOpen = !self.isOpen;

      function init(arr) {
        if (!arr.length) {
          return;
        }
        for (let i = 0; i < arr.length; i++) {
          if (self.find(self.active, arr[i].catalogId)) {
            arr[i].isOpen = true;
            init(arr[i].children);
          }
        }
      }
      init(self.todo.items);
    },
    close() {
      let self = this;
      self.isOpen = false;

      function ac(arr) {
        if (!arr.length) {
          return;
        }
        for (let i = 0; i < arr.length; i++) {
          arr[i].isOpen = false;
          ac(arr[i].children);
        }
      }
      ac(self.todo.items);
    },
    focus(b) {
      Bus.$emit("cascaderFocus", b);
    }
  },
  mounted() {
    let self = this;
    Bus.$on("cascaderClose", function(r) {
      self.isOpen = false;
      self.active = r.active;
      self.todo.value = r.id;
      self.todo.showText = r.content;
    });
  }
}
</script>

<style scoped>
.choose-box {
  font-size: 14px;
  margin-bottom: 22px;
}

.choose-box .title span {
  color: #FF1F20;
  margin-right: 5px;
}

.choose-box .box-container {
  display: inline-block;
  width: 250px;
  font-size: 0;
  position: relative;
}

.choose-box .box-container .cascader-input {
  font-size: 14px;
}

.choose-box .box-container .cascader-input input[type=text] {
  width: 100%;
  padding: 3px 24px 3px 5px;
  font-size: 14px;
  font-family: 'Microsoft YaHei';
  color: #BBBBBB;
  border: 1px solid #DDDDDD;
  transition: color .3s ease, border .3s ease;
  cursor: pointer;
}

.choose-box .box-container .cascader-input input[type=text]:focus {
  color: #656565;
  border: 1px solid #A9A9A9;
}

.choose-box .box-container .cascader-input input[type=text]::-webkit-input-placeholder {
  color: #BBBBBB;
}

.choose-box .box-container .cascader-input input[type=text]::-moz-placeholder {
  color: #BBBBBB;
}

.choose-box .box-container .cascader-input input[type=text]:-ms-input-placeholder {
  color: #BBBBBB;
}

.choose-box .box-container .cascader-input input[type=text]::placeholder {
  color: #BBBBBB;
}

.choose-box .box-container .cascader-input .caret {
  display: inline-block;
  width: 27px;
  height: 27px;
  top: 0;
  right: 0;
  padding: 11px;
  position: absolute;
}

.choose-box .box-container .cascader-input .caret:before {
  content: '';
  border: 5px solid transparent;
  border-top: 5px solid #404040;
  border-bottom: 0;
  position: absolute;
  cursor: pointer;
  transition: transform .3s;
}

.choose-box .box-container .cascader-input .caret.active:before {
  transform: rotate(180deg);
}

.choose-box .box-container .cascader-container {
  margin-top: -1px;
  position: absolute;
}

.choose-box:last-child {
  margin-bottom: 0;
}
</style>﻿
