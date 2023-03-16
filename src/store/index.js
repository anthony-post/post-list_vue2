import Vue from "vue";
import Vuex from "vuex";
import exampleJsonFile from "../../example.json";

const postDataObj = exampleJsonFile;
const postDataArray = postDataObj.posts.slice();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: postDataArray,
    postList: [],
    searchText: null,
  },
  mutations: {
    SET_DATA: (state, chunkData) => {
      state.postList = [...state.postList, ...chunkData];
    },
    EDIT__POST: (state, payload) => {
      state.postList[payload.indexInArray].name = payload.name;
    },
    DELETE_POST: (state, payload) => {
      state.postList.splice(payload.indexInArray, 1);
    },
    ADD_POST: (state, payload) => {
      state.postList.unshift({
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
  actions: {
    GET_DATA({ commit }, { startIndex, endIndex }) {
      const chunkData = postDataArray.slice(startIndex, endIndex);
      commit("SET_DATA", chunkData);
    },
  },
  getters: {
    FILTERED_POSTLIST_BY_TEXT: (state) => {
      if (state.searchText) {
        return state.postList.filter((post) => {
          return post.name
            .toLowerCase()
            .includes(state.searchText.toLowerCase());
        });
      } else {
        return state.postList;
      }
    },
  },
  modules: {},
});
