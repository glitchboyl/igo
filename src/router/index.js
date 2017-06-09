import Vue from "vue";
import Router from "vue-router";
import Main from "@/Index";
import Login from "@/Login";
import Error from "@/Error";
import Index from "@/components/index/inner";
import Commodity from "@/components/commodity";
// import Order from "@/components/order";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Main,
      children: [
        {
          path: "",
          name: "index",
          component: Index
        },
        {
          path: "commodity",
          redirect: "commodity/list"
        },
        {
          path: "commodity/list",
          name: "list",
          component: Commodity.list
        },
        {
          path: "commodity/add",
          redirect: "commodity/add/basic",
          name: "add",
          component: Commodity.add.inner,
          children: [
            {
              path: "basic",
              name: "add-basic",
              component: Commodity.add.basic
            },
            {
              path: "desc",
              name: "add-desc",
              component: Commodity.add.desc
            },
            {
              path: "album",
              name: "add-album",
              component: Commodity.add.album
            }
          ]
        },
        {
          path: "commodity/sort",
          name: "sort",
          component: Commodity.sort.inner
        },
        {
          path: "commodity/sort/add",
          name: "sort-add",
          component: Commodity.sort.add
        },
        {
          path: "commodity/brand",
          name: "brand",
          component: Commodity.brand.inner
        },
        {
          path: "commodity/brand/add",
          name: "brand-add",
          component: Commodity.brand.add
        },
        {
          path: "commodity/extend",
          name: "extend",
          component: Commodity.extend
        },
        // {
        //   path: "order",
        //   name: "order",
        //   component: Order
        // }
      ]
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/error",
      component: Error
    }
  ]
});
