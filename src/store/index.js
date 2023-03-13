import Vue from "vue";
import Vuex from "vuex";
import exampleJsonFile from "../../example.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    postList: exampleJsonFile,
    searchText: null,
  },
  mutations: {
    EDIT__POST: (state, payload) => {
      state.postList.posts[payload.indexInArray].name = payload.name;
    },
    DELETE_POST: (state, payload) => {
      state.postList.posts.splice(payload.indexInArray, 1);
    },
    ADD_POST: (state, payload) => {
      state.postList.posts.unshift({
        id: payload.id,
        name: payload.name,
      });
    },
    SET_SEARCHTEXT: (state, payload) => {
      state.searchText = payload.name;
    },
    RESET_SEARCHTEXT: (state) => {
      state.searchText = null;
    },
  },
  actions: {},
  getters: {
    FILTERED_POSTLIST_BY_TEXT: (state) => {
      if (state.searchText) {
        return state.postList.posts.filter((post) => {
          return post.name
            .toLowerCase()
            .includes(state.searchText.toLowerCase());
        });
      } else {
        return state.postList.posts;
      }
    },
  },
  modules: {},
});
