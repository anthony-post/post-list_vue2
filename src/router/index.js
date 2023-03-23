import Vue from "vue";
import VueRouter from "vue-router";

const PostEdit = () => import("../views/PostEdit.vue");
const CreatePost = () => import("../views/CreatePost.vue");
const PostListObserver = () => import("../views/PostListObserver.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "post-listobserver",
    component: PostListObserver,
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
