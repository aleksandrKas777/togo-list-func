(this["webpackJsonptogo-list"]=this["webpackJsonptogo-list"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);n(7);var i=n(3),c=n(2),a=n(6),r=n.n(a),s=n(5),u=n(1),o=n.n(u),d=n(0),l=function(e){var t=e.id,n=e.importance,i=e.importanceTask,c=!1===n?"\u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043a\u0430\u043a \u0432\u0430\u0436\u043d\u043e\u0435":"\u0441\u043d\u044f\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \u043a\u0430\u043a \u0432\u0430\u0436\u043d\u043e\u0435";return Object(d.jsxs)("button",{onClick:function(){return i(t)},children:[" ",c]})};l.PropTypes={id:o.a.number.isRequired,importance:o.a.bool.isRequired,importanceTask:o.a.func.isRequired};var j=function(e){var t=e.id,n=e.active,i=e.activeTask,c=!1===n?"\u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443":"\u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443";return Object(d.jsxs)("button",{onClick:function(){return i(t)},children:[" ",c]})};j.PropTypes={id:o.a.number.isRequired,active:o.a.bool.isRequired,activeTask:o.a.func.isRequired};var b=function(e){var t=e.id,n=e.importance,i=e.active,c=e.name,a=e.deleteTask,r=e.importanceTask,s=e.activeTask,u={fontWeight:!1===n?"normal":"bolder",color:!1===i?"rgb(168, 168, 168)":"black"};return Object(d.jsxs)("li",{className:"line",children:[Object(d.jsxs)("div",{className:"tasks",style:u,children:[" ",c," "]}),Object(d.jsxs)("div",{className:"buttonLine",children:[Object(d.jsx)(l,{importance:n,id:t,importanceTask:r,activeTask:s}),Object(d.jsx)(j,{active:i,id:t,activeTask:s}),Object(d.jsx)("button",{onClick:function(){return a(t)},children:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"})]})]})};b.ProTypes={id:o.a.number.isRequired,name:o.a.string.isRequired,importance:o.a.bool.isRequired,active:o.a.bool.isRequired,deleteTask:o.a.func.isRequired,importanceTask:o.a.func.isRequired,activeTask:o.a.func.isRequired};var v=function(e){var t=e.taskList,n=void 0===t?[]:t,i=e.deleteTask,c=e.importanceTask,a=e.activeTask;return Object(d.jsxs)("ul",{children:[" \u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447",n.map((function(e){var t=Object.assign({},e);return Object(d.jsx)(b,Object(s.a)(Object(s.a)({},t),{},{deleteTask:i,importanceTask:c,activeTask:a}),e.id)}))]})},f=function(e){var t=e.displayList;return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){return t("all")},children:"\u0432\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"},101),Object(d.jsx)("button",{onClick:function(){return t("active")},children:"\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"},102),Object(d.jsx)("button",{onClick:function(){return t("completed")},children:"\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"},103)]})};f.PropTypes={displayList:o.a.func.isRequired};var m=function(e){var t=e.addNewTask,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],s=a[1],u=""===r;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:r,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("button",{disabled:u,onClick:function(){return t(r)},children:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c"})]})},p=function(){return Object(d.jsx)("div",{className:"loader",children:Object(d.jsx)("div",{className:"load",children:"Loading..."})})},O=function(){var e=[{id:1,name:"learn js",importance:!0,active:!1},{id:2,name:"task2",importance:!1,active:!0},{id:3,name:"drink coffee",importance:!1,active:!1},{id:4,name:"learn react",importance:!0,active:!0}],t=Object(c.useState)(null),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)("all"),u=Object(i.a)(s,2),o=u[0],l=u[1],j=Object(c.useState)(""),b=Object(i.a)(j,2),O=b[0],k=b[1],x=Object(c.useState)(!1),T=Object(i.a)(x,2),h=T[0],q=T[1];Object(c.useEffect)((function(){setTimeout((function(){r(e),q(!0)}),2e3)}),[]);var R=null;return R=""!==O?a.filter((function(e){return e.name.includes(O)})):"completed"===o?a.filter((function(e){return!1===e.active})):"active"===o?a.filter((function(e){return!0===e.active})):a,h?Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"panel",children:[Object(d.jsx)("div",{children:Object(d.jsx)(m,{addNewTask:function(e){r((function(t){var n=t.map((function(e){return e.id})),i={id:Math.max.apply(null,n)+1,name:e,importance:!0,active:!0};return t.push(i),t}))}})}),Object(d.jsx)("input",{onChange:function(e){return k(e.target.value)},value:O,type:"text"}),Object(d.jsx)("div",{children:Object(d.jsx)(f,{displayList:function(e){return l(e)}})})]}),Object(d.jsx)("div",{children:Object(d.jsx)(v,{taskList:R,deleteTask:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))},importanceTask:function(e){r((function(t){return t.map((function(t){return t.id===e&&(t.importance=!1===t.importance),t}))}))},activeTask:function(e){r((function(t){return t.map((function(t){return t.id===e&&(t.active=!1===t.active),t}))}))}})})]}):Object(d.jsx)(p,{})};r.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))},7:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.13e52353.chunk.js.map