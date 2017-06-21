<template>
<ul class="cascader" :class="{focus:isFocus}">
  <li v-for="item in todo" class="cascader-item" @mouseenter="open(item,todo)" @mouseleave="close(item)" @click="choose(item)">
    <span class="title" :class="{active:item.isOpen}">
    {{ item.nodeName }}
    <i v-if="item.children.length>0"></i>
    </span>
    <cascader :todo="item.children" v-if="item.isOpen && item.children.length>0"></cascader>
  </li>
</ul>
</template>

<script>
import Bus from '@/assets/eventBus'
export default {
  name: 'cascader',
  props: ['todo'],
  data() {
    return {
      isFocus: true
    }
  },
  methods: {
    open(i, t) {
      if (i.children.length) {
        function ac(arr) {
          if (!arr.length) {
            return;
          }
          for (let m = 0; m < arr.length; m++) {
            arr[m].isOpen = false;
            ac(arr[m].children);
          }
        }
        ac(t);
        i.isOpen = true;
      }
    },
    close(i) {
      i.isOpen = false;
    },
    choose(i) {
      if (!i.children.length) {
        let self = this;
        let content = i.nodeName;
        let id = i.catalogId
        let active = [i.catalogId];
        let parent = i.parent;
        while (parent) {
          content = parent.nodeName + ' / ' + content;
          active.unshift(parent.catalogId);
          parent = parent.parent;
        }
        Bus.$emit("cascaderClose", {
          id,
          content,
          active
        });
      }
    }
  },
  mounted() {
    let self = this;
    Bus.$on("cascaderFocus", function(b) {
      self.isFocus = b;
    });
  }
}
</script>

<style scoped>
.cascader {
  height: 100%;
  border: 1px solid #DDDDDD;
  border-top: 0;
  margin-right: -2px;
  display: inline-flex;
  flex-direction: column;
  background-color: #FFFFFF;
}

.cascader.focus {
  border: 1px solid #A9A9A9;
  border-top: 0;
}

.cascader>.cascader-item {
  text-align: left;
}

.cascader>.cascader-item>.title {
  min-width: 120px;
  padding: 8px 5px 8px 10px;
  font-size: 14px;
  display: block;
}

.cascader>.cascader-item>.title:hover {
  cursor: pointer;
  color: #FFFFFF;
  background-color: #F1675F;
}

.cascader>.cascader-item:first-child>.title {
  border-top: 1px solid #DDDDDD;
}

.cascader.focus>.cascader-item:first-child>.title {
  border-top: 1px solid #A9A9A9;
}

.cascader>.cascader-item>.title.active {
  color: #FFFFFF;
  background-color: #F1675F;
}

.cascader>.cascader-item>.title i {
  right: 12px;
  margin-top: 5px;
  float: right;
  position: absolute;
}

.cascader>.cascader-item>.title i:before {
  content: '';
  border: 5px solid transparent;
  border-left: 5px solid #404040;
  border-right: 0;
  position: absolute;
  cursor: pointer;
}

.cascader>.cascader-item>.cascader {
  top: 0;
  margin-left: 100%;
  position: absolute;
}
</style>﻿
