(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{15:function(e,t,a){e.exports=a(39)},2:function(e,t,a){},20:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),l=a.n(o),c=(a(20),a(2),a(3)),s=a(14),i=a.n(s);var m=function(e){return r.a.createElement("div",{className:"employee-card"},r.a.createElement("img",{src:e.people.picture.large,alt:"..."}),r.a.createElement("h3",null,e.people.name.first," ",e.people.name.last),r.a.createElement("h5",null,"Email: ",e.people.email," ",r.a.createElement("br",null),"Phone: ",e.people.phone))};var u=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(""),s=Object(c.a)(l,2),u=s[0],p=s[1];Object(n.useEffect)((function(){i.a.get("https://randomuser.me/api/?nat=us&results=20&seed=foobar").then((function(e){o(e.data.results)})).catch((function(e){console.log(e)}))}),[u]);var f=a.filter((function(e){return e.name.first.toLowerCase().includes(u.toLowerCase())})).map((function(e){return r.a.createElement(m,{key:e.name.first,people:e})}));return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron search-bar"},r.a.createElement("h1",{className:"title"},"Employee Directory"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-input",type:"text",placeholder:"Search",onChange:function(e){return p(e.target.value)}})),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return a.sort((function(e,t){return e.name.last<t.name.last?-1:e.name.last>t.name.last?1:0}))}},"Sort Names in Alpha Order")),f)};var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(38);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.2f55ee45.chunk.js.map