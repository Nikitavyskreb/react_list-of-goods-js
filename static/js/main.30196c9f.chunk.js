(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(5),s=n.n(c),o=n(4),i=(n(10),n(11),n(2)),r=n.n(i),a=n(1),l=n(0),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b="alphabet",j="length",h=function(){var t=Object(a.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)(!1),i=Object(o.a)(s,2),h=i[0],d=i[1],g=function(t,e){var n=[].concat(u);return t&&n.sort((function(e,n){switch(t){case b:return e.localeCompare(n);case j:return e.length-n.length;default:return 0}})),e&&n.reverse(),n}(n,h);return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:r()("button","is-info",{"is-light":n!==b}),onClick:function(){return c(b)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:r()("button","is-success",{"is-light":n!==j}),onClick:function(){return c(j)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:r()("button","is-warning",{"is-light":!h}),onClick:function(){return d(!h)},children:"Reverse"}),(n||h)&&Object(l.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){d(!1),c("")},children:"Reset"})]}),Object(l.jsx)("ul",{children:g.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.30196c9f.chunk.js.map