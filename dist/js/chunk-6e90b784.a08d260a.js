(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e90b784"],{"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),a=n("825a"),i=n("d039"),o=n("ad6d"),c="toString",l=RegExp.prototype,u=l[c],s=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=c;(s||d)&&r(RegExp.prototype,c,(function(){var t=a(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in l)?o.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},3441:function(t,e,n){"use strict";n("f34d")},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),i=n("7b0b"),o=n("50c4"),c=n("a691"),l=n("1d80"),u=n("8aa5"),s=n("14c3"),d=Math.max,f=Math.min,p=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,x=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var v=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=r.REPLACE_KEEPS_$0,m=v?"$":"$0";return[function(n,r){var a=l(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,r):e.call(String(a),n,r)},function(t,r){if(!v&&b||"string"===typeof r&&-1===r.indexOf(m)){var i=n(e,t,this,r);if(i.done)return i.value}var l=a(t),p=String(this),h="function"===typeof r;h||(r=String(r));var g=l.global;if(g){var y=l.unicode;l.lastIndex=0}var S=[];while(1){var O=s(l,p);if(null===O)break;if(S.push(O),!g)break;var _=String(O[0]);""===_&&(l.lastIndex=u(p,o(l.lastIndex),y))}for(var R="",I=0,P=0;P<S.length;P++){O=S[P];for(var j=String(O[0]),U=d(f(c(O.index),p.length),0),C=[],T=1;T<O.length;T++)C.push(x(O[T]));var A=O.groups;if(h){var $=[j].concat(C,U,p);void 0!==A&&$.push(A);var w=String(r.apply(void 0,$))}else w=E(j,p,U,C,A,r);U>=I&&(R+=p.slice(I,U)+w,I=U+j.length)}return R+p.slice(I)}];function E(t,n,r,a,o,c){var l=r+t.length,u=a.length,s=g;return void 0!==o&&(o=i(o),s=h),e.call(c,s,(function(e,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(l);case"<":c=o[i.slice(1,-1)];break;default:var s=+i;if(0===s)return e;if(s>u){var d=p(s/10);return 0===d?e:d<=u?void 0===a[d-1]?i.charAt(1):a[d-1]+i.charAt(1):e}c=a[s-1]}return void 0===c?"":c}))}}))},6547:function(t,e,n){var r=n("a691"),a=n("1d80"),i=function(t){return function(e,n){var i,o,c=String(a(e)),l=r(n),u=c.length;return l<0||l>=u?t?"":void 0:(i=c.charCodeAt(l),i<55296||i>56319||l+1===u||(o=c.charCodeAt(l+1))<56320||o>57343?t?c.charAt(l):i:t?c.slice(l,l+2):o-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,c=i,l=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],d=l||s||u;d&&(c=function(t){var e,n,a,c,d=this,f=u&&d.sticky,p=r.call(d),h=d.source,g=0,x=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),x=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(h="(?: "+h+")",x=" "+x,g++),n=new RegExp("^(?:"+h+")",p)),s&&(n=new RegExp("^"+h+"$(?!\\s)",p)),l&&(e=d.lastIndex),a=i.call(f?n:d,x),f?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:l&&a&&(d.lastIndex=d.global?a.index+a[0].length:e),s&&a&&a.length>1&&o.call(a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),t.exports=c},"995b":function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"e",(function(){return l}));var r=n("0acc"),a=function(t){return Object(r["a"])({method:"POST",url:"/rememberme/admin/savephoto",data:t})},i=function(t){return Object(r["a"])({method:"POST",url:"/rememberme/admin/selectPagePhoto",data:t})},o=function(t){return Object(r["a"])({method:"POST",url:"/rememberme/admin/deletePhotoById",data:t})},c=function(t){return Object(r["a"])({method:"POST",url:"/rememberme/admin/getPhotoById",data:t})},l=function(t){return Object(r["a"])({method:"POST",url:"/rememberme/admin/updatePhotoById",data:t})}},9970:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("0acc"),a=function(t){return Object(r["a"])({method:"POST",url:"/rememberme/ossFileUpload",data:t})}},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,n){var r=n("83ab"),a=n("9bf2").f,i=Function.prototype,o=i.toString,c=/^\s*function ([^ (]*)/,l="name";r&&!(l in i)&&a(i,l,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),i=n("b622"),o=n("9263"),c=n("9112"),l=i("species"),u=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var h=i(t),g=!a((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),x=g&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!g||!x||"replace"===t&&(!u||!s||f)||"split"===t&&!p){var v=/./[h],b=n(h,""[t],(function(t,e,n,r,a){return e.exec===o?g&&!a?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),m=b[0],E=b[1];r(String.prototype,t,m),r(RegExp.prototype,h,2==e?function(t,e){return E.call(t,this,e)}:function(t){return E.call(t,this)})}d&&c(RegExp.prototype[h],"sham",!0)}},f34d:function(t,e,n){},ffbb:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"photo_upload"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/admin/photoupload"}}},[t._v("超级管理员界面")]),n("el-breadcrumb-item",[t._v("照片墙上传")])],1),n("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"https://huabei5zhanh.oss-cn-huhehaote.aliyuncs.com",data:t.dataObj,multiple:!1,"on-success":t.successUpload,"before-upload":t.beforeUpload,"on-error":t.errorupload,"on-change":t.filechange,"file-list":t.fileList}},[n("i",{staticClass:"el-icon-upload"}),n("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),n("em",[t._v("点击上传")])]),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])]),n("div",{staticStyle:{display:"flex"}},[t._l(t.imgs,(function(e){return[n("el-image",{attrs:{src:e}},[n("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" 加载中"),n("span",{staticClass:"dot"},[t._v("...")])])])]}))],2),n("div",{directives:[{name:"show",rawName:"v-show",value:t.imgs.length>0,expression:"imgs.length>0"}]},[t._v(" 上传成功的图片 ")])],1)])],1)},a=[],i=(n("b0c0"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("995b")),o=n("9970"),c={name:"fileupload",methods:{successUpload:function(t,e,n){this.fileList.pop(),this.fileList.push({name:e.name,url:this.dataObj.host+"/"+this.dataObj.key.replace("${filename}",e.name)}),console.log("最后的文件地址是"+this.fileList[0].url),this.imgs.push(this.fileList[0].url);var r={};r.photosurl=this.fileList[0].url,Object(i["c"])(JSON.stringify(r)).then((function(t){console.log(t)})).catch((function(t){console.log("保存图片有错误")}))},errorupload:function(t){},filechange:function(t,e){},beforeUpload:function(t){var e=this,n=this;return new Promise((function(t,r){Object(o["a"])().then((function(r){console.log("紫红色哥是"),console.log(r.data),n.dataObj.policy=r.data.policy,n.dataObj.signature=r.data.signature,n.dataObj.ossaccessKeyId=r.data.accessid,n.dataObj.key=r.data.dir+e.getUUID()+"_${filename}",n.dataObj.dir=r.data.dir,n.dataObj.host=r.data.host,t(!0)})).catch((function(t){r(!1)}))}))},getUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){return("x"===t?16*Math.random()|0:8).toString(16)}))}},data:function(){return{imgs:[],dataObj:{policy:"",signature:"",key:"",ossaccessKeyId:"",dir:"",host:""}}},computed:{fileList:function(){return[]}}},l=c,u=(n("3441"),n("2877")),s=Object(u["a"])(l,r,a,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-6e90b784.a08d260a.js.map