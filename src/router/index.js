import Vue from "vue";
import Router from "vue-router";

// User
import User from "../views/user/list";
import AddUser from "../views/user/add";
import EditUser from "../views/user/edit";
import DetailUser from "../views/user/detail";
// plannogram
import plannogram from "../views/plannogram/list";
import Addplannogram from "../views/plannogram/add";
import Editplannogram from "../views/plannogram/edit";
import Detailplannogram from "../views/plannogram/detail";
// Product
import Product from "../views/product/list";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "list-user",
      component: User,
    },
    {
      path: "/list-user",
      name: "list-user",
      component: User,
    },
    {
      path: "/add-user",
      name: "add-user",
      component: AddUser,
    },
    {
      path: "/edit-user",
      name: "edit-user",
      component: EditUser,
    },
    {
      path: "/detail-user",
      name: "detail-user",
      component: DetailUser,
    },
    {
      path: "/list-product",
      name: "list-product",
      component: Product,
    },
    // plannogram routes
    {
      path: "/list-plannogram",
      name: "list-plannogram",
      component: plannogram,
    },
    {
      path: "/add-plannogram",
      name: "add-plannogram",
      component: Addplannogram,
    },
    {
      path: "/edit-plannogram",
      name: "edit-plannogram",
      component: Editplannogram,
    },
    {
      path: "/detail-plannogram",
      name: "detail-plannogram",
      component: Detailplannogram,
    },
  ],
});
