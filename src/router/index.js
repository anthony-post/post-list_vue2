import Vue from "vue";
import VueRouter from "vue-router";
import PostList from "../views/PostList.vue";
import CreatePost from "../views/CreatePost.vue";
import PostEdit from "../views/PostEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "post-list",
    component: PostList,
  },
  {
    path: "/post/:id",
    name: "post-edit",
    component: PostEdit,
    props: true,
  },
  {
    path: "/create",
    name: "post-create",
    component: CreatePost,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
