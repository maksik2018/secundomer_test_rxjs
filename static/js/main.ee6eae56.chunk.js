(this.webpackJsonpsecundomer_test_rxjs=this.webpackJsonpsecundomer_test_rxjs||[]).push([[0],{11:function(t,n,e){t.exports={watch:"secundomer_watch__2G7tY",button:"secundomer_button__1v2nS"}},22:function(t,n,e){},23:function(t,n,e){},25:function(t,n,e){"use strict";e.r(n);var c=e(5),o=e.n(c),r=e(17),s=e.n(r),u=(e(22),e(15)),i=(e(23),e(32)),a=e(16),b=e(28),l=e(31),j=e(29),f=e(30),O=e(11),d=e.n(O),p=e(4);function h(){var t=Object(c.useState)(0),n=Object(u.a)(t,2),e=n[0],o=n[1],r=Object(c.useState)("stop"),s=Object(u.a)(r,2),O=s[0],h=s[1],x=new i.a;return x.pipe(Object(b.a)(x.pipe(Object(l.a)(300))),Object(j.a)((function(t){return t.length})),Object(f.a)((function(t){return 2===t}))).subscribe((function(){h("wait")})),Object(c.useEffect)((function(){if("run"===O){var t=new a.a((function(t){var n=0,e=setInterval((function(){t.next(n+=1),console.log(n)}),1e3);return function(){clearInterval(e)}})),n={next:function(){o((function(t){return t+1e3}))},error:function(){console.log("error")},complete:function(){console.log("observer complete")}},e=t.subscribe(n);return function(){e.unsubscribe()}}"reset"===O&&h("run")}),[O]),Object(p.jsxs)("div",{className:d.a.watch,children:[Object(p.jsxs)("span",{children:[" ",new Date(e).toISOString().slice(11,19)]}),Object(p.jsx)("button",{className:d.a.button,onClick:function(){h("run")},children:"Start"}),Object(p.jsx)("button",{className:d.a.button,onClick:function(){h("stop"),o(0)},children:"Stop"}),Object(p.jsx)("button",{className:d.a.button,onClick:function(){o(0)},children:"Reset"}),Object(p.jsx)("button",{className:d.a.button,onClick:function(){x.next()},children:"Wait"})]})}s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(h,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ee6eae56.chunk.js.map