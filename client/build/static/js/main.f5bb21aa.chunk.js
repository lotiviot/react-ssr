(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(18),r=n.n(i),s=(n(24),n(8)),j=n(9),a=n(11),o=n(10),u=n(2),h=(n(25),n(12)),b=n(1),l=function(t){Object(a.a)(n,t);var e=Object(o.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Project Home"}),Object(b.jsx)(h.b,{to:"./list",children:Object(b.jsx)("button",{variant:"raised",children:"My List"})})]})}}]),n}(c.Component),d=function(t){Object(a.a)(n,t);var e=Object(o.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).getList=function(){fetch("/api/getList").then((function(t){return t.json()})).then((function(t){return c.setState({list:t})}))},c.state={list:[]},c}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getList()}},{key:"render",value:function(){var t=this.state.list;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"List of Items"}),t.length?Object(b.jsx)("div",{children:t.map((function(t){return Object(b.jsx)("div",{children:t})}))}):Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:"No List Items Found"})})]})}}]),n}(c.Component),O=function(t){Object(a.a)(n,t);var e=Object(o.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var t=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{exact:!0,path:"/",component:l}),Object(b.jsx)(u.a,{path:"/list",component:d})]})})};return Object(b.jsx)(u.c,{children:Object(b.jsx)(t,{})})}}]),n}(c.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),r(t),s(t)}))};r.a.render(Object(b.jsx)(h.a,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),f()}},[[35,1,2]]]);
//# sourceMappingURL=main.f5bb21aa.chunk.js.map