(function(t){function e(e){for(var a,c,i=e[0],u=e[1],s=e[2],h=0,d=[];h<i.length;h++)c=i[h],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(a=!1)}a&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},c={app:0},o={app:0},r=[];function i(t){return u.p+"js/"+({"auth~chat~contact":"auth~chat~contact",auth:"auth",chat:"chat",contact:"contact",chats:"chats","no-conection":"no-conection","not-found":"not-found"}[t]||t)+"."+{"auth~chat~contact":"4f1c003b",auth:"b5202bef",chat:"2b582673",contact:"18905359",chats:"0e4c975e","no-conection":"84782247","not-found":"2b492b70"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={auth:1,chat:1,contact:1,chats:1,"no-conection":1,"not-found":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise((function(e,n){for(var a="css/"+({"auth~chat~contact":"auth~chat~contact",auth:"auth",chat:"chat",contact:"contact",chats:"chats","no-conection":"no-conection","not-found":"not-found"}[t]||t)+"."+{"auth~chat~contact":"31d6cfe0",auth:"0cc09f86",chat:"91a322f7",contact:"6fd3cc00",chats:"5182cf08","no-conection":"5ccf8d46","not-found":"8f79512c"}[t]+".css",o=u.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var s=r[i],h=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(h===a||h===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],h=s.getAttribute("data-href");if(h===a||h===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[t],f.parentNode.removeChild(f),n(r)},f.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(f)})).then((function(){c[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=r);var s,h=document.createElement("script");h.charset="utf-8",h.timeout=120,u.nc&&h.setAttribute("nonce",u.nc),h.src=i(t);var d=new Error;s=function(e){h.onerror=h.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:h})}),12e4);h.onerror=h.onload=s,document.head.appendChild(h)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],h=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var f=h;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3b46":function(t,e,n){},"440e":function(t,e,n){"use strict";n("efdb")},"4ce0":function(t,e,n){"use strict";n("6af6")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c={class:"app__container"};function o(t,e,n,o,r,i){var u=Object(a["x"])("AuthPopUp"),s=Object(a["x"])("Header"),h=Object(a["x"])("router-view"),d=Object(a["x"])("Footer");return Object(a["q"])(),Object(a["d"])("div",c,[r.showAuthPopUp?(Object(a["q"])(),Object(a["d"])(u,{key:0,onHide:i.hidePopUp},null,8,["onHide"])):Object(a["e"])("",!0),Object(a["g"])(s,{onShowPopUp:i.showPopUp},null,8,["onShowPopUp"]),Object(a["g"])(h),Object(a["g"])(d)])}n("7db0"),n("b0c0"),n("d3b7");var r=n("5530"),i=Object(a["I"])("data-v-265ccf56"),u=i((function(t,e,n,c,o,r){return Object(a["q"])(),Object(a["d"])("footer")}));n("8baf");const s={};s.render=u,s.__scopeId="data-v-265ccf56";var h=s,d=Object(a["I"])("data-v-17badf1a");Object(a["t"])("data-v-17badf1a");var f={class:"header"},l=Object(a["g"])("div",null,null,-1),b=Object(a["g"])("span",null,"Back",-1),O={class:"header__nav"},p=Object(a["g"])("svg",{class:"header__img fas fa-home"},null,-1),m=Object(a["g"])("span",null,null,-1),_=Object(a["g"])("svg",{class:"header__img fas fa-comments"},null,-1),v=Object(a["g"])("span",null,null,-1),j={class:"header__profileLink"},g={class:"userIcon"},T={class:"header__authUser"},E=Object(a["g"])("svg",{class:"header__img fas fa-user"},null,-1);Object(a["r"])();var C=d((function(t,e,n,c,o,r){var i=Object(a["x"])("router-link"),u=Object(a["x"])("MessageNotification");return Object(a["q"])(),Object(a["d"])("div",f,[Object(a["g"])("div",{class:["header__backButton",{"header__backButton--disabled":r.isHomePage}],onClick:e[1]||(e[1]=function(){return r.backInHistory.apply(r,arguments)})},[l,b],2),Object(a["g"])("nav",null,[Object(a["g"])("div",O,[Object(a["g"])("div",{class:["header__links",{"header__links--active":"/"==r.routePath}]},[p,Object(a["g"])(i,{to:"/"},{default:d((function(){return[m]})),_:1})],2),t.authorizedUser?(Object(a["q"])(),Object(a["d"])("div",{key:0,class:["header__links",{"header__links--active":"/chats"==r.routePath}]},[_,Object(a["g"])(i,{to:"/chats"},{default:d((function(){return[v]})),_:1}),Object(a["g"])(u,{notificationCount:r.authorizedUserObj.notifications.length,color:"red",class:"header__notificationIcon"},null,8,["notificationCount"])],2)):Object(a["e"])("",!0),Object(a["g"])("div",{onClick:e[2]||(e[2]=function(){return r.showPopUpinAPP.apply(r,arguments)}),class:"header__links"},[Object(a["F"])(Object(a["g"])("div",j,[Object(a["g"])("div",g,[Object(a["g"])("img",{src:o.BACKEND_DOMAIN+r.authUserPhoto,alt:""},null,8,["src"])]),Object(a["g"])("span",T,Object(a["z"])(t.authorizedUser),1)],512),[[a["C"],t.authorizedUser]]),Object(a["F"])(Object(a["g"])("div",null,[E],512),[[a["C"],!t.authorizedUser]])])])])])})),A=n("954b"),P=Object(a["I"])("data-v-e24031b2");Object(a["t"])("data-v-e24031b2");var U={class:"container"},N={class:"contacts mainList"},S={key:0,class:"contacts__item mainList__elem"},y={class:"contacts__image userIcon"},w={class:"contacts__name"};Object(a["r"])();var I=P((function(t,e,n,c,o,r){var i=Object(a["x"])("router-link");return Object(a["q"])(),Object(a["d"])("div",U,[Object(a["g"])("main",null,[Object(a["g"])("div",N,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(t.contacts,(function(e){return Object(a["q"])(),Object(a["d"])(a["a"],{key:e.name},[e.name!=t.authorizedUser?(Object(a["q"])(),Object(a["d"])("div",S,[Object(a["g"])(i,{to:{name:"contactView",params:{contactName:e.name}}},null,8,["to"]),Object(a["g"])("div",y,[Object(a["g"])("img",{src:o.BACKEND_DOMAIN+e.photo,alt:""},null,8,["src"])]),Object(a["g"])("div",w,Object(a["z"])(e.name),1),Object(a["g"])("div",{class:["status",{"status--active":e.status}]},null,2)])):Object(a["e"])("",!0)],64)})),128))])])])})),k=n("5502"),z=n("8575"),L={name:"Home",data:function(){return{BACKEND_DOMAIN:z["a"]}},computed:Object(r["a"])({},Object(k["d"])(["contacts","authorizedUser"]))};n("918e");L.render=I,L.__scopeId="data-v-e24031b2";var H=L;function x(t,e,n,c,o,r){var i=Object(a["x"])("router-view");return Object(a["q"])(),Object(a["d"])(i)}var G={name:"contact"};G.render=x;var M=G,D=[{path:"/",name:"Home",component:H},{path:"/NoConection",name:"NoConection",component:function(){return n.e("no-conection").then(n.bind(null,"f3df"))}},{path:"/404",name:"NotFound",component:function(){return n.e("not-found").then(n.bind(null,"2da5"))}},{path:"/chats",name:"Chats",component:function(){return n.e("chats").then(n.bind(null,"c98b"))}},{path:"/:contactName",name:"contact",component:M,props:!0,children:[{path:"chat",name:"Chat",component:function(){return Promise.all([n.e("auth~chat~contact"),n.e("chat")]).then(n.bind(null,"293a"))}},{path:"",name:"contactView",component:function(){return Promise.all([n.e("auth~chat~contact"),n.e("contact")]).then(n.bind(null,"ea79"))},props:!0}]}],R=Object(A["a"])({history:Object(A["b"])("/"),routes:D});R.beforeEach((function(t,e,n){t.matched.length?n():n("/404")}));var W=R,q=n("b779"),B={data:function(){return{BACKEND_DOMAIN:z["a"]}},components:{MessageNotification:q["a"]},computed:Object(r["a"])(Object(r["a"])({routePath:function(){return this.$route.path},isHomePage:function(){return"/"===this.$route.path}},Object(k["d"])(["authorizedUser","contacts","chats"])),{},{authorizedUserObj:function(){return this.$parent.getAuthObj()},authUserPhoto:function(){return this.authorizedUserObj?this.authorizedUserObj.photo:""}}),methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(k["b"])(["GET_CONTACT"])),Object(k["c"])(["DELETE_AUTH"])),{},{backInHistory:function(){W.go(-1)},showPopUpinAPP:function(){this.$emit("showPopUp")},checkUserExist:function(){var t=this,e=this.contacts.find((function(e){return e.name==t.authorizedUser}));e||this.DELETE_AUTH()}}),mounted:function(){this.checkUserExist()}};n("4ce0");B.render=C,B.__scopeId="data-v-17badf1a";var F=B,K=n("bc3a"),$=n.n(K),J={components:{Footer:h,Header:F,AuthPopUp:Object(a["h"])((function(){return Promise.all([n.e("auth~chat~contact"),n.e("auth")]).then(n.bind(null,"a5ef"))}))},data:function(){return{showAuthPopUp:!1}},computed:Object(r["a"])({},Object(k["d"])(["authorizedUser","contacts"])),methods:Object(r["a"])(Object(r["a"])({},Object(k["b"])(["GET_CHATS","GET_CONTACT","CHECK_AUTORIZED","LOG_OUT"])),{},{hidePopUp:function(){this.showAuthPopUp=!1},showPopUp:function(){this.showAuthPopUp=!0},pingToServer:function(){var t=this;setInterval((function(){t.GET_CONTACT().then((function(e){e&&t.$router.push("/NoConection")})),t.authorizedUser&&t.GET_CHATS()}),2e3)},getAuthObj:function(){var t=this,e=this.contacts.find((function(e){return e.name==t.authorizedUser}));return e||{notifications:[]}}}),mounted:function(){var t=this;this.pingToServer(),this.GET_CONTACT().then((function(e){e&&t.$router.push("/NoConection")}))}};n("9cdc");J.render=o;var V=J,Z=(n("99af"),n("4de4"),n("4160"),n("159b"),n("4328")),Q=n.n(Z),X=n("0e44"),Y=Object(k["a"])({state:{authorizedUser:"",contacts:[],chats:[]},plugins:[Object(X["a"])()],mutations:{CONTACT_TO_STORE:function(t,e){t.contacts=e},CHATS_TO_STORE:function(t,e){t.chats=e},SET_NEW_MESSAGE:function(t,e){var n=e.message,a=e.chatId,c=t.chats.filter((function(t){return t.id==a}))[0];c.messages.push(n)},CLEAN_NOTS:function(t,e){var n=e.authUser,a=e.chatWith;if(n){var c=t.contacts.find((function(t){return t.name==n})),o=c.notifications.filter((function(t){return t.messageFrom!=a}));c.notifications=o}},NEW_CHAT_TO_STORE:function(t,e){t.chats.unshift(e)},NEW_CONTACT_TO_STORE:function(t,e){t.contacts.push(e)},NEW_PROFILE_NAME:function(t,e){var n=e.newUsername,a=e.oldUsername;t.contacts.forEach((function(t){t.name==a&&(t.name=n)})),t.authorizedUser=n},LOG_OUT:function(t,e){var n=e.index,a=e.last_seen;t.contacts[n].last_seen=a,t.contacts[n].status=!1,t.authorizedUser=""},DELETE_AUTH:function(t){t.authorizedUser=""},LOG_IN:function(t,e){t.authorizedUser=e}},actions:{GET_CONTACT:function(t){var e=t.commit;return new Promise((function(t){$.a.get(z["a"]+"/APIgetContacts/").then((function(t){e("CONTACT_TO_STORE",t.data)})).catch((function(e){t(e)}))}))},GET_CHATS:function(t){var e=t.commit,n=this.state.authorizedUser;return $.a.get("".concat(z["a"],"/APIgetChats/").concat(n,"/")).then((function(t){e("CHATS_TO_STORE",t.data)}))},SEND_MESSAGE:function(t,e){var n=t.commit,a=e.message,c=e.chatId;return new Promise((function(t){$()({method:"POST",url:"".concat(z["a"],"/APIsendMessage/").concat(c,"/"),data:Q.a.stringify(a)}).then((function(){n("SET_NEW_MESSAGE",{message:a,chatId:c}),t()}))}))},CLEAN_NOTS:function(t,e){var n=t.commit,a=e.authUser,c=e.chatWith;n("CLEAN_NOTS",{authUser:a,chatWith:c});var o={authUser:a,chatWith:c};$()({method:"POST",url:"".concat(z["a"],"/APIclearNots/"),data:Q.a.stringify(o)}).then((function(t){return t}))},SET_NEW_CHAT:function(t,e){var n=t.commit;return new Promise((function(t){$()({method:"POST",url:"".concat(z["a"],"/APIsetNewChat/"),data:Q.a.stringify(e)}).then((function(e){var a=e.data;n("NEW_CHAT_TO_STORE",a),t(a)}))}))},SET_NEW_CONTACT:function(t,e){var n=t.commit;return new Promise((function(t){$()({method:"POST",url:"".concat(z["a"],"/APIreg/"),data:Q.a.stringify(e)}).then((function(e){var a=e.data;n("NEW_CONTACT_TO_STORE",a),t(a)}))}))},CHANGE_PROFILE:function(t,e){var n=t.commit,a=e.changes,c=e.oldUsername,o=e.newUsername;$()({method:"POST",url:"".concat(z["a"],"/APIchengeProfileData/").concat(c,"/"),data:a,headers:{"content-type":"multipart/form-data"}}).then((function(){o&&n("NEW_PROFILE_NAME",{newUsername:o,oldUsername:c})}))},LOG_IN:function(t,e){var n=t.commit,a=e.name;return new Promise((function(t){$()({method:"POST",url:"".concat(z["a"],"/APIlog/"),data:Q.a.stringify(e)}).then((function(e){if(e.data)n("LOG_IN",a);else{var c="";n("LOG_IN",c)}t(e)}))}))},LOG_OUT:function(t,e){var n=t.commit,a=this.state.authorizedUser,c=e.index;$()({method:"POST",url:"".concat(z["a"],"/APIlogout/").concat(a,"/"),data:Q.a.stringify(e)}).then((function(t){if(t.data){var e=t.data;n("LOG_OUT",{index:c,last_seen:e})}}))}},modules:{}});n("7051");Object(a["c"])(V).use(Y).use(W).mount("#app")},"595d":function(t,e,n){},"6af6":function(t,e,n){},8575:function(t,e,n){"use strict";var a="https://109k4.pythonanywhere.com";e["a"]=a},"8baf":function(t,e,n){"use strict";n("595d")},"918e":function(t,e,n){"use strict";n("dc6c")},"9cdc":function(t,e,n){"use strict";n("3b46")},b779:function(t,e,n){"use strict";var a=n("7a23"),c=Object(a["I"])("data-v-9e85ed7a"),o=c((function(t,e,n,c,o,r){return Object(a["q"])(),Object(a["d"])("span",{style:"border-radius:".concat(r.borderRadius),class:[[n.notificationCount?"newMessages--active":"",r.setColor()],"newMessages"]},Object(a["z"])(n.notificationCount),7)})),r=(n("a9e3"),{props:{notificationCount:Number,color:String},computed:{borderRadius:function(){var t=String(this.notificationCount).length;return 1===t?"50%":2===t?"45%":"40%"}},methods:{setColor:function(){var t=this.color;return"red"==t?"newMessages--red":"newMessages--grey"}}});n("440e");r.render=o,r.__scopeId="data-v-9e85ed7a";e["a"]=r},dc6c:function(t,e,n){},efdb:function(t,e,n){}});
//# sourceMappingURL=app.c51fb21e.js.map