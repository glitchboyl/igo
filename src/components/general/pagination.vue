<template>
  <div class="support" style="padding: 20px;">
    <div class="shows">
      每页显示数量：
      <span class="quantity" v-for="i in showQuantity" :class="{active:i.value == todo.showQuantity}" :key="i.value" @click="changeQuantity(i,showQuantity)">{{ i.value }}</span>
    </div>
    <div class="pagination">
      第<span class="highlight"> {{ todo.page }} </span>页&nbsp;&nbsp;&nbsp;共<span class="highlight"> {{ todo.totalPage }} </span>页 &nbsp;&nbsp;&nbsp;
      <span class="page prev" v-if="todo.page != 1" @click="prev"><<上一页</span>
      <span class="page" v-for="i in todo.totalPage" :class="{active:todo.page==i}" :key="i" @click="changePage(i)">{{ i }}</span>
      <span class="page ellipsis" v-if="todo.totalPage >= 5">···</span>
      <span class="page next" v-if="todo.page != todo.totalPage" @click="next">下一页>></span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['todo'],
    data() {
      return {
        showQuantity: [{
          value: 10
        }, {
          value: 20
        }, {
          value: 30
        }]
      }
    },
    methods: {
      changeQuantity(i, list) {
        let self = this;
        if (!i.isActive) {
          let showQuantity = self.showQuantity;
          let sq = self.todo.showQuantity;
          let p = self.todo.page;
          for (let n = 0; n < showQuantity.length; n++) {
            if (showQuantity[n].isActive) {
              showQuantity[n].isActive = false;
            }
          }
          i.isActive = true;
          self.todo.showQuantity = sq = i.value;
          new Promise(function(resolve, reject) {
            let query = self.$route.query;
            let obj = {};
            for(let n in query){
              obj[n] = query[n];
            }
            obj.p = p;
            obj.sq = sq;
            resolve(obj);
          }).then(function(obj) {
            self.$router.push({
              query: obj
            });
          });
        } else {
          return;
        }
      },
      changePage(i) {
        let self = this;
        let p = self.todo.page;
        if (p != i) {
          let sq = self.todo.showQuantity;
          this.todo.page = p = i;
          self.$router.push({
            query: {
              p,
              sq
            }
          });
        } else {
          return;
        }
      },
      prev() {
        let self = this;
        let p = self.todo.page;
        let sq = self.todo.showQuantity;
        this.todo.page = p = --p;
        self.$router.push({
          query: {
            p,
            sq
          }
        });
      },
      next() {
        let self = this;
        let p = self.todo.page;
        let sq = self.todo.showQuantity;
        this.todo.page = p = ++p;
        self.$router.push({
          query: {
            p,
            sq
          }
        });
      }
    }
  }
</script>

<style scoped>
  .support {
    padding: 6px 20px;
    display: inline-flex;
    align-items: baseline;
  }
  
  .support .shows .quantity {
    padding: 3px 5px;
    margin-right: 5px;
    text-align: center;
    border: 1px solid #E5E5E5;
    display: inline-block;
    cursor: pointer;
  }
  
  .support .shows .quantity.active,
  .support .pagination .page.active {
    border: 1px solid #F1675F;
    color: #F1675F;
  }
  
  .support .pagination {
    flex-grow: 1;
    text-align: right;
  }
  
  .support .pagination .highlight {
    color: #F1675F;
  }
  
  .support .pagination .page {
    padding: 3px 7px;
    margin-right: 5px;
    text-align: center;
    border: 1px solid #E5E5E5;
    display: inline-block;
    transition: border .3s;
  }
  
  .support .pagination .page:not(.ellipsis):hover {
    cursor: pointer;
    border: 1px solid #999999;
  }
  
  .support .pagination .page.ellipsis {
    border: 1px solid #FFFFFF;
  }
</style>
