(this["webpackJsonpreact-boilerplate"]=this["webpackJsonpreact-boilerplate"]||[]).push([[0],{14:function(t,e,n){t.exports=n.p+"static/media/note-icon.c0078032.png"},16:function(t,e,n){t.exports=n(40)},38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),i=n(15),u=n(2),l=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return r.a.createElement("li",{className:e.important?"note-important":"note"},e.content,r.a.createElement("button",{onClick:n},a))},m=n(3),s=n.n(m),p="https://guarded-ravine-22773.herokuapp.com/api/notes",f=function(){var t=s.a.get(p),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},d=function(t){return s.a.post(p,t).then((function(t){return t.data}))},v=function(t){return console.log("newObject",t),s.a.put("".concat(p,"/").concat(t.id),t).then((function(t){return t.data}))},E=function(t){var e=t.message;return null===e?null:r.a.createElement("div",{className:"error"},e)},b=n(14),h=n.n(b),g=(n(38),function(t){var e=Object(a.useState)([]),n=Object(u.a)(e,2),o=n[0],c=n[1],m=Object(a.useState)(""),s=Object(u.a)(m,2),p=s[0],b=s[1],g=Object(a.useState)(!0),O=Object(u.a)(g,2),j=O[0],k=O[1],N=Object(a.useState)(null),w=Object(u.a)(N,2),S=w[0],y=w[1];Object(a.useEffect)((function(){f().then((function(t){c(t)}))}),[]);var A=j?o:o.filter((function(t){return!0===t.important}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"App-header"},r.a.createElement("img",{src:h.a,className:"App-logo"}),"Notes"),r.a.createElement("div",{className:"AppBody"},r.a.createElement("div",null,r.a.createElement(E,{message:S}),r.a.createElement("button",{onClick:function(){return k(!j)}},"show ",j?"important":"all")),r.a.createElement("ul",null,r.a.createElement("div",null,"Key: ",r.a.createElement("strong",null,"important")," | not important"),r.a.createElement("br",null),r.a.createElement("div",null,A.map((function(t){return r.a.createElement(l,{key:t.id,note:t,toggleImportance:function(){return function(t){var e=o.find((function(e){return e.id===t})),n=Object(i.a)({},e,{important:!e.important});v(n).then((function(e){c(o.map((function(n){return n.id!==t?n:e})))})).catch((function(n){y("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){y(null)}),5e3),c(o.filter((function(e){return e.id!==t})))}))}(t.id)}})})))),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:p,date:(new Date).toISOString(),important:Math.random()<.5,id:o.length+1};d(e).then((function(t){c(o.concat(t)),b("")}))}},r.a.createElement("input",{placeholder:"a new note...",value:p,onChange:function(t){b(t.target.value)}}),r.a.createElement("button",{type:"submit"},"save"))))});n(39);c.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c01641ef.chunk.js.map