(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14cc074c"],{"17b8":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"photoupdate"},[a("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e},opened:t.showopend}},[a("div",[a("img",{ref:"tarimg",staticStyle:{display:"block","max-width":"100%"},attrs:{src:t.preimg,alt:""}})]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.commitphoto}},[t._v("确 定")])],1)]),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/admin/photoadmin"}}},[t._v("超级管理员界面")]),a("el-breadcrumb-item",[t._v("图片修改")])],1)],1),a("div",[a("el-card",{staticClass:"box-card"},[a("img",{attrs:{src:t.photo.imgurl,alt:""}})]),a("input",{ref:"file",attrs:{type:"file",hidden:"hidden",id:"file"},on:{change:t.showdrag}}),a("el-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary"}},[a("label",{attrs:{for:"file"}},[t._v("点击修改")])])],1)])],1)},o=[],r=(a("d3b7"),a("ac1f"),a("25f0"),a("3ca3"),a("5319"),a("ddb0"),a("2b3d"),a("6107"),a("60fb"),a("995b")),n=a("bab4"),s=a.n(n),c=a("53e3"),d={name:"photoupdate",data:function(){return{dialogVisible:!1,preimg:"",cropper:null,photo:{}}},methods:{showdrag:function(){this.dialogVisible=!0;var t=this.$refs.file;this.preimg=window.URL.createObjectURL(t.files[0]),this.$refs.file.value=""},showopend:function(){if(null==this.cropper){var t=this.$refs.tarimg;this.cropper=new s.a(t,{aspectRatio:2,viewMode:1,dragMode:"none",cropBoxResizable:!0,cropBoxMovable:!0})}else this.cropper.replace(this.preimg)},commitphoto:function(){var t=this;this.cropper.getCroppedCanvas().toBlob((function(e){var a=new FormData,i="",o={};function n(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){return("x"===t?16*Math.random()|0:8).toString(16)}))}var s=Math.random()+".png";Object(c["b"])().then((function(d){o.policy=d.data.policy,o.signature=d.data.signature,o.ossaccessKeyId=d.data.accessid,o.key=d.data.dir+n()+"_${filename}",o.dir=d.data.dir,o.host=d.data.host,a.append("policy",o.policy),a.append("signature",o.signature),a.append("key",o.key),a.append("ossaccessKeyId",o.ossaccessKeyId),a.append("dir",o.dir),a.append("host",o.host),a.append("file",e,s),Object(c["a"])(a).then((function(e){i=o.host+"/"+o.key.replace("${filename}",s),t.photo.imgurl=i;var a={};a.imgurl=t.photo.imgurl,a.id=t.photo.id,Object(r["e"])(JSON.stringify(a)).then((function(e){t.dialogVisible=!1,t.$message({message:"恭喜你，修改成功",type:"success"})})).catch((function(t){})),t.dialogVisible=!1}))}))}))}},created:function(){var t=this,e={};e.id=this.$route.params["photoid"],Object(r["b"])(JSON.stringify(e)).then((function(e){t.photo=e.data.data})).catch((function(t){}))}},l=d,p=a("2877"),u=Object(p["a"])(l,i,o,!1,null,null,null);e["default"]=u.exports},"995b":function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"d",(function(){return r})),a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return s})),a.d(e,"e",(function(){return c}));var i=a("0acc"),o=function(t){return Object(i["a"])({method:"POST",url:"/rememberme/admin/savephoto",data:t})},r=function(t){return Object(i["a"])({method:"POST",url:"/rememberme/admin/selectPagePhoto",data:t})},n=function(t){return Object(i["a"])({method:"POST",url:"/rememberme/admin/deletePhotoById",data:t})},s=function(t){return Object(i["a"])({method:"POST",url:"/rememberme/admin/getPhotoById",data:t})},c=function(t){return Object(i["a"])({method:"POST",url:"/rememberme/admin/updatePhotoById",data:t})}}}]);
//# sourceMappingURL=chunk-14cc074c.d41c86b4.js.map