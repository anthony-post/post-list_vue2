"use strict";(self["webpackChunkpost_list_vue2"]=self["webpackChunkpost_list_vue2"]||[]).push([[55],{9055:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"create"},[e("div",{staticClass:"title-wrapper"},[e("BaseIcon",{attrs:{name:"file-plus",width:"30",height:"30"}}),e("h1",{staticClass:"title"},[t._v("Create post")])],1),e("BaseInput",{staticClass:"create__input",attrs:{placeholder:"enter ID",name:"id",title:"id",label:"Post's ID",type:"text"},model:{value:t.postId,callback:function(e){t.postId=e},expression:"postId"}},[t._v("Text")]),e("BaseTextArea",{staticClass:"create__textarea",attrs:{label:"Text",name:"text"},model:{value:t.postText,callback:function(e){t.postText=e},expression:"postText"}}),e("router-link",{staticClass:"button-link",attrs:{to:{name:"post-listobserver"}}},[e("BaseButton",{staticClass:"button-item",attrs:{type:"button",theme:"add"},on:{click:t.addPost}},[t._v("Add")])],1)],1)},l=[],o={name:"CreatePost",components:{},data(){return{postId:null,postText:null}},methods:{addPost(){this.$store.commit("ADD_POST",{id:this.postId,name:this.postText})}}},n=o,i=s(3736),r=(0,i.Z)(n,a,l,!1,null,null,null),u=r.exports}}]);
//# sourceMappingURL=55.804a8ec9.js.map