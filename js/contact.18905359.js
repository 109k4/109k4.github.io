(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{"82cf":function(t,c,e){"use strict";e("91c4")},"91c4":function(t,c,e){},ea79:function(t,c,e){"use strict";e.r(c);var a=e("7a23"),r=Object(a["I"])("data-v-373a4f1d");Object(a["t"])("data-v-373a4f1d");var n={class:"container"},s={key:0,class:"contact-card"},i={class:"contact-card__name"},o={class:"contact-card__image mainImg"},u={class:"contact-card__bottom"},d={key:0,class:"contact-card__start-chat"};Object(a["r"])();var h=r((function(t,c,e,r,h,f){return Object(a["q"])(),Object(a["d"])("div",n,[f.curentUser?(Object(a["q"])(),Object(a["d"])("div",s,[Object(a["g"])("div",i,[Object(a["f"])(Object(a["z"])(t.$route.params.contactName)+" ",1),Object(a["g"])("span",{class:["status",{"status--active":f.curentUser.status}]},null,2)]),Object(a["g"])("div",o,[Object(a["g"])("img",{src:h.BACKEND_DOMAIN+f.curentUser.photo},null,8,["src"])]),Object(a["g"])("div",u,[t.authorizedUser?(Object(a["q"])(),Object(a["d"])("div",d,[Object(a["g"])("span",{class:"mainButton mainButton--blue",onClick:c[1]||(c[1]=function(c){return f.checkChat(t.$route.params.contactName)})},"Start chat")])):Object(a["e"])("",!0)])])):Object(a["e"])("",!0)])})),f=(e("7db0"),e("4160"),e("b0c0"),e("159b"),e("5530")),b=e("c1df"),O=e.n(b),j=(e("bc3a"),e("5502")),m=e("8575"),_={name:"contactView",data:function(){return{BACKEND_DOMAIN:m["a"]}},computed:Object(f["a"])(Object(f["a"])({},Object(j["d"])(["contacts","chats","authorizedUser"])),{},{curentUser:function(){var t=this.$route.params.contactName;return this.contacts.find((function(c){return c.name==t}))}}),methods:Object(f["a"])(Object(f["a"])({},Object(j["b"])(["GET_CONTACT","SET_NEW_CHAT","CHECK_AUTORIZED"])),{},{arrDifference:function(t,c){var e=[];return t.forEach((function(t){var a=!1;c.forEach((function(c){t==c&&(a=!0)})),a||e.push(t)})),e},isChatExist:function(t){var c=this,e=[t,this.authorizedUser],a=!1;return this.chats.forEach((function(t){0==c.arrDifference(t.users,e).length&&(a=!0)})),a},redirectToChat:function(t){this.$router.push("/"+t+"/chat")},createChat:function(){var t=this.curentUser.name,c=this.authorizedUser,e=O()().format("dddd, LL, h:mm:ss a"),a={first_user:t,second_user:c,create_dateStr:String(e)};return this.SET_NEW_CHAT(a)},checkChat:function(t){var c=this;c.isChatExist(t)?c.redirectToChat(t):c.createChat().then((function(e){c.redirectToChat(t)}))}}),mounted:function(){this.curentUser||this.$router.push("/404")}};e("82cf");_.render=h,_.__scopeId="data-v-373a4f1d";c["default"]=_}}]);
//# sourceMappingURL=contact.18905359.js.map