(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(1),r=c(3),o=c(4),s=(c(13),c(0)),a=function(){var t=Object(n.useState)(" "),e=Object(o.a)(t,2),c=e[0],r=e[1],a=["#fcba03","#30fc03","#03cafc","#a103fc"],i=Object(n.useRef)(),j=function(){fetch("https://type.fit/api/quotes").then((function(t){return t.json()})).then((function(t){var e=Math.floor(Math.random()*t.length);r(t[e])}))};return Object(n.useEffect)((function(){j()}),[]),Object(n.useEffect)((function(){i.current.style.color=a[Math.floor(Math.random()*a.length)]}),[c]),Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("div",{id:"quote-box",children:[Object(s.jsx)("p",{ref:i,children:c.text}),Object(s.jsx)("p",{children:c.author}),Object(s.jsxs)("div",{className:"button",children:[Object(s.jsx)("button",{onClick:j,children:"Get Quote"}),Object(s.jsx)("a",{href:" ",className:"btn",children:"tweet"})]})]})})},i=document.getElementById("root");Object(r.createRoot)(i).render(Object(s.jsx)(n.StrictMode,{children:Object(s.jsx)(a,{})}))}},[[15,1,2]]]);
//# sourceMappingURL=main.896ebf7f.chunk.js.map