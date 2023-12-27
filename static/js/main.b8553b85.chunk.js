(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),i=c.n(l),d=(c(9),c(10),c(11),c(0)),r=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})};function o(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var j=function(e){var t=e.todo,c=e.isOpened,s=e.closeModal,a=i.a.useState(null),j=Object(n.a)(a,2),b=j[0],h=j[1],u=i.a.useState(!1),O=Object(n.a)(u,2),m=O[0],x=O[1];return Object(l.useEffect)((function(){x(!0);!function(){var e;(e=t.userId,o("/users/".concat(e))).then((function(e){h(e)})).finally((function(){return x(!1)}))}()}),[t.userId]),Object(d.jsxs)("div",{className:c?"modal is-active":"modal","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),c&&Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head","data-cy":!0,children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(d.jsx)("button",{type:"button","data-cy":"modal-close",className:"delete",onClick:s,children:Object(d.jsx)("span",{"aria-hidden":"true",children:"x"})})]}),Object(d.jsx)("div",{className:"modal-card-body",children:m?Object(d.jsx)(r,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(d.jsx)("strong",{className:t.completed?"has-text-success":"has-text-danger",children:t.completed?"Done":"Planned"})," by ",Object(d.jsx)("span",{children:null===b||void 0===b?void 0:b.name})]})]})})]})]})},b=function(e){var t=e.todos,c=Object(l.useState)(null),s=Object(n.a)(c,2),a=s[0],i=s[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e,t){return Object(d.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(d.jsx)("td",{className:"is-vcentered",children:t+1}),Object(d.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){i(e)}(e)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:a!==e?"far fa-eye":"far fa-eye-slash"})})})})]},e.id)}))})]}),a&&Object(d.jsx)(j,{todo:a,isOpened:null!==a,closeModal:function(){i(null)}})]})},h=function(e){var t=e.todos,c=e.setFilteredTodos,s=Object(l.useState)(""),a=Object(n.a)(s,2),i=a[0],r=a[1],o=Object(l.useState)("all"),j=Object(n.a)(o,2),b=j[0],h=j[1],u=function(e,s){var a=t;switch(e){case"active":a=t.filter((function(e){return!e.completed}));break;case"completed":a=t.filter((function(e){return e.completed}))}s&&(a=a.filter((function(e){return e.title.toLowerCase().includes(s)}))),c(a)};return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){var t=e.target.value;h(t),u(t,i)},children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:i,onChange:function(e){var t=e.currentTarget.value.toLowerCase();r(t),u(b,t)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-search"})}),Object(d.jsx)("span",{className:"icon is-right",children:i&&Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){r(""),u(b,"")},children:Object(d.jsx)("span",{"aria-hidden":"true",children:"x"})})})]})]})},u=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(!1),i=Object(n.a)(a,2),j=i[0],u=i[1],O=Object(l.useState)([]),m=Object(n.a)(O,2),x=m[0],f=m[1];return Object(l.useEffect)((function(){u(!0);o("/todos").then((function(e){s(e),f(e)})).finally((function(){return u(!1)}))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(h,{setFilteredTodos:f,todos:c})}),Object(d.jsxs)("div",{className:"block",children:[j&&Object(d.jsx)(r,{}),Object(d.jsx)(b,{todos:x})]})]})})})})};a.a.render(Object(d.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.b8553b85.chunk.js.map