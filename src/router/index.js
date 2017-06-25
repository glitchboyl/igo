import Vue from "vue";
import Router from "vue-router";
import Main from "@/Index";
import Login from "@/Login";
import Error from "@/Error";
import Index from "@/components/index/inner";
import Commodity from "@/components/commodity";
import Order from "@/components/order";
import Member from "@/components/member";

Vue.use(Router);

let meta = {
  requireAuth: true
};

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Main,
      meta,
      children: [
        {
          path: "",
          name: "index",
          component: Index,
          meta
        },
        {
          path: "commodity",
          redirect: "commodity/list"
        },
        {
          path: "commodity/list",
          name: "list",
          component: Commodity.list,
          meta
        },
        {
          path: "commodity/add",
          redirect: "commodity/add/basic",
          name: "add",
          component: Commodity.add.inner,
          meta,
          children: [
            {
              path: "basic",
              name: "add-basic",
              component: Commodity.add.basic,
              meta
            },
            {
              path: "desc",
              name: "add-desc",
              component: Commodity.add.desc,
              meta
            },
            {
              path: "album",
              name: "add-album",
              component: Commodity.add.album,
              meta
            }
          ]
        },
        {
          path: "commodity/sort",
          name: "sort",
          component: Commodity.sort.inner,
          meta
        },
        {
          path: "commodity/sort/add",
          name: "sort-add",
          component: Commodity.sort.add,
          meta
        },
        {
          path: "commodity/brand",
          name: "brand",
          component: Commodity.brand.inner,
          meta
        },
        {
          path: "commodity/brand/add",
          name: "brand-add",
          component: Commodity.brand.add,
          meta
        },
        {
          path: "commodity/extend",
          name: "extend",
          component: Commodity.extend,
          meta
        },
        {
          path: "order",
          redirect: "order/pending",
          name: "order",
          component: Order.inner,
          meta,
          children: [
            {
              path: "pending",
              name: "pending",
              component: Order.pending,
              meta
            }
          ]
        },
        {
          path: "member",
          name: "member",
          component: Member,
          meta
        }
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
