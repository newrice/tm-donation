(this["webpackJsonptm-donation"]=this["webpackJsonptm-donation"]||[]).push([[0],{73:function(t,e,n){},87:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(10),o=n.n(c),i=(n(73),n(125)),s=n(122),u=n(60),h=n(123),d=n(14),p=n.n(d),j=n(18),l=n(24),b=n(53),f=n.n(b),m=n(115),O=n(119),x=n(120),v=n(124),w=n(121),y=n(59),g=n.n(y),S=n(44),k={donations:"/donations"},E=5275,L={production:"https://h0x0vwtnni.execute-api.ap-northeast-1.amazonaws.com",development:"https://h0x0vwtnni.execute-api.ap-northeast-1.amazonaws.com",test:"http://localhost:3001"}.production,N={"Content-Type":"application/json; charset=utf-8"},C=function(){var t=Object(j.a)(p.a.mark((function t(e){var n,r,a,c,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,r=e.params,a=e.headers,c=new URL(n),o=new URLSearchParams,r&&(Object.keys(r).forEach((function(t){return o.append(t,r[t])})),c.search=o.toString()),t.abrupt("return",fetch(c.toString(),{method:"GET",mode:"cors",cache:"no-cache",headers:a,redirect:"follow"}).then((function(t){return t.json()})).catch((function(t){return t})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),P=function(){var t=Object(j.a)(p.a.mark((function t(e){var n,r,a,c,o,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,r=e.params,a=e.body,c=e.headers,o=new URL(n),i=new URLSearchParams,r&&(Object.keys(r).forEach((function(t){return i.append(t,r[t])})),o.search=i.toString()),t.abrupt("return",fetch(o.toString(),{method:"Post",mode:"cors",cache:"no-cache",headers:c,redirect:"follow",body:JSON.stringify(a)}).then((function(t){return t.json()})).catch((function(t){return t})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),R=function(){var t=Object(j.a)(p.a.mark((function t(e){var n,r,a,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,r=void 0===n?L:n,a=e.params,c={url:r,params:a,headers:N},t.abrupt("return",C(c));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),T=function(){var t=Object(j.a)(p.a.mark((function t(e){var n,r,a,c,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,r=void 0===n?L:n,a=e.params,c=e.body,o={url:r,params:a,body:c,headers:N},t.abrupt("return",P(o));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),U="".concat(L).concat(k.donations),z=function(t){var e=String(t).split("."),n=String(e[0]).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,");return e.length>1&&(n+=".".concat(e[1])),n},I=n(8),J=function(t){var e=0;return t&&!Object(S.isEmpty)(t)&&Object(S.isArray)(t)&&t.forEach((function(t){e+=t.amount})),e},F=function(t){return t>=E},W=function(){var t=Object(r.useState)(""),e=Object(l.a)(t,2),n=e[0],a=e[1],c=Object(r.useState)(""),o=Object(l.a)(c,2),i=o[0],s=o[1],u=Object(r.useState)(""),h=Object(l.a)(u,2),d=h[0],b=h[1],y=Object(r.useState)(""),k=Object(l.a)(y,2),L=k[0],N=k[1],C=Object(r.useState)(0),P=Object(l.a)(C,2),W=P[0],A=P[1],B=Object(r.useState)(!1),G=Object(l.a)(B,2),M=G[0],$=G[1];Object(r.useEffect)((function(){(function(){var t=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R({url:U});case 2:(e=t.sent).body&&A(J(e.body)),a(""),b("");case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[M]);var q=function(){$(!M)},D=function(){var t=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T({url:U,body:{name:n,amount:"string"===typeof d?0:d||0}}).then((function(t){return t}));case 2:(e=t.sent).result&&!e.result.error&&q();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("div",{className:"column-container ai-center-container",children:[Object(I.jsxs)(m.a,{className:"margin-tb-8 column-container ai-center-container",style:{width:"80%",maxWidth:500,padding:"10px"},children:[Object(I.jsx)(O.a,{variant:"h5",children:"\u5409\u7530\u3055\u3093\u30d7\u30ec\u30bc\u30f3\u30c8\u4ee3"}),Object(I.jsx)(O.a,{variant:"h6",children:"\u73fe\u5728\u306e\u652f\u63f4\u7dcf\u984d\uff1a".concat(z(W||0),"\u5186")}),Object(I.jsx)(O.a,{children:"\u76ee\u6a19\u91d1\u984d\u306f\uff1a".concat(z(E),"\u5186")})]}),Object(I.jsxs)(m.a,{style:{width:"80%",maxWidth:500,padding:"0px 20px"},children:[Object(I.jsx)("div",{className:"margin-tb-8 row-container jc-flex-end-container",children:Object(I.jsx)(x.a,{size:"small",onClick:q,children:Object(I.jsx)(g.a,{})})}),Object(I.jsxs)("div",{className:"margin-tb-8 column-container each-margin-tb-8-container",children:[Object(I.jsx)(v.a,{label:"\u304a\u540d\u524d",error:!!i,helperText:i,value:n,onChange:function(t){var e=t.target.value;a(e),s(function(t){return t?"":"\u540d\u524d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"}(e))},inputProps:{maxLength:10}}),Object(I.jsx)(v.a,{label:"\u91d1\u984d",error:!!L,helperText:L,type:"number",value:d,onChange:function(t){var e=parseInt(t.target.value,10);b(e),N(function(t){return t?!Object(S.isInteger)(t)||t<1||t>5e3?"".concat(1,"\u301c").concat(5e3,"\u306e\u6574\u6570\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"):"":"\u91d1\u984d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"}(e))}}),Object(I.jsx)(w.a,{color:"primary",variant:"contained",disabled:!!(i||L||F(W)),onClick:D,children:"\u652f\u63f4\u3059\u308b"}),Object(I.jsx)("div",{className:"margin-tb-8 row-container jc-flex-end-container",children:Object(I.jsx)(O.a,{children:"\u203b\u304a\u652f\u6255\u3044\u306f\u73fe\u91d1 or LinePay\u3067\u304a\u9858\u3044\u3057\u307e\u3059"})})]})]})]}),F(W)&&Object(I.jsx)(f.a,{})]})},A=function(){return Object(I.jsx)(i.b,{injectFirst:!0,children:Object(I.jsx)(s.a,{theme:Object(u.a)({}),children:Object(I.jsx)(h.a,{children:Object(I.jsx)(W,{})})})})};o.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(A,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.da23c260.chunk.js.map