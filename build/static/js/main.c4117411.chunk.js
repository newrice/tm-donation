(this["webpackJsonptm-donation"]=this["webpackJsonptm-donation"]||[]).push([[0],{535:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(14),o=n.n(c),i=(n(99),n(578)),s=n(574),u=n(85),l=n(575),j=n(18),d=n.n(j),p=n(27),h=n(29),b=n(77),O=n.n(b),f=n(572),x=n(538),m=n(573),v=n(576),y=n(571),g=n(84),w=n.n(g),k=n(57),S=n(577),C=n(83),B={api:{production:"https://h0x0vwtnni.execute-api.ap-northeast-1.amazonaws.com",development:"https://h0x0vwtnni.execute-api.ap-northeast-1.amazonaws.com",test:"http://localhost:3001"},url:{donations:"/donations"},app:{donation:{"\u76ee\u6a19\u984d":5275,"\u7de0\u5207":new Date(2021,2,19,23,59,59)}},constants:{newId:"__new__"}},T=B.api.production,E={"Content-Type":"application/json; charset=utf-8"},P=function(){var t=Object(p.a)(d.a.mark((function t(e){var n,r,a,c,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,r=e.params,a=e.headers,c=new URL(n),o=new URLSearchParams,r&&(Object.keys(r).forEach((function(t){return o.append(t,r[t])})),c.search=o.toString()),t.abrupt("return",fetch(c.toString(),{method:"GET",mode:"cors",cache:"no-cache",headers:a,redirect:"follow"}).then((function(t){return t.json()})).catch((function(t){return t})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),z=function(){var t=Object(p.a)(d.a.mark((function t(e){var n,r,a,c,o,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,r=e.params,a=e.body,c=e.headers,o=new URL(n),i=new URLSearchParams,r&&(Object.keys(r).forEach((function(t){return i.append(t,r[t])})),o.search=i.toString()),t.abrupt("return",fetch(o.toString(),{method:"Post",mode:"cors",cache:"no-cache",headers:c,redirect:"follow",body:JSON.stringify(a)}).then((function(t){return t.json()})).catch((function(t){return t})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),L=function(){var t=Object(p.a)(d.a.mark((function t(e){var n,r,a,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,r=void 0===n?T:n,a=e.params,c={url:r,params:a,headers:E},t.abrupt("return",P(c));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=Object(p.a)(d.a.mark((function t(e){var n,r,a,c,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,r=void 0===n?T:n,a=e.params,c=e.body,o={url:r,params:a,body:c,headers:E},t.abrupt("return",z(o));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),I="".concat(T).concat(B.url.donations),R=function(t){var e=String(t).split("."),n=String(e[0]).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,");return e.length>1&&(n+=".".concat(e[1])),n},U=n(63),_=n(86),D=n(580),F=n(568),J=n(569),A=n(570),W=n(9),G=function(t){var e=t.open,n=t.title,r=t.content,a=t.onCancelClick,c=t.onOkClick,o=t.cancelButtonText,i=t.okButtonText,s=Object(_.a)(t,["open","title","content","onCancelClick","onOkClick","cancelButtonText","okButtonText"]);return Object(W.jsxs)(D.a,Object(U.a)(Object(U.a)({open:e,onClose:a},s),{},{children:[Object(W.jsx)(F.a,{children:n}),Object(W.jsx)(J.a,{children:r}),Object(W.jsxs)(A.a,{children:[Object(W.jsx)(y.a,{color:"primary",onClick:a,children:o||"Cancel"}),Object(W.jsx)(y.a,{color:"primary",variant:"contained",onClick:c,children:i||"OK"})]})]}))},K=function(t){var e=0;return t&&!Object(k.isEmpty)(t)&&Object(k.isArray)(t)&&t.forEach((function(t){e+=t.amount})),e},M=function(){return new Date>B.app.donation.\u7de0\u5207},$=function(t){return t?"":"\u540d\u524d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"},q=function(t){return t?!Object(k.isInteger)(t)||t<1||t>5e3?"".concat(1,"\u301c").concat(5e3,"\u306e\u6574\u6570\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"):"":"\u91d1\u984d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"},H=function(t){return t>=B.app.donation.\u76ee\u6a19\u984d},Q=function(){var t=Object(r.useState)(""),e=Object(h.a)(t,2),n=e[0],a=e[1],c=Object(r.useState)(""),o=Object(h.a)(c,2),i=o[0],s=o[1],u=Object(r.useState)(""),l=Object(h.a)(u,2),j=l[0],b=l[1],g=Object(r.useState)(""),k=Object(h.a)(g,2),T=k[0],E=k[1],P=Object(r.useState)(0),z=Object(h.a)(P,2),U=z[0],_=z[1],D=Object(r.useState)(!1),F=Object(h.a)(D,2),J=F[0],A=F[1],Q=Object(r.useState)(!1),V=Object(h.a)(Q,2),X=V[0],Y=V[1];Object(r.useEffect)((function(){(function(){var t=Object(p.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L({url:I});case 2:(e=t.sent).body&&_(K(e.body)),a(""),b("");case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[J]);var Z=function(){A(!J)},tt=function(){var t=Object(p.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Y(!1),t.next=3,N({url:I,body:{name:n,amount:"string"===typeof j?0:j||0}}).then((function(t){return t}));case 3:(e=t.sent).result&&!e.result.error&&Z();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)("div",{className:"column-container ai-center-container",children:[Object(W.jsx)(f.a,{className:"margin-tb-8 column-container ai-center-container",style:{width:"80%",maxWidth:500,padding:"10px"},children:Object(W.jsxs)("div",{children:[Object(W.jsx)(x.a,{variant:"h5",children:"\u5409\u7530\u3055\u3093\u30d7\u30ec\u30bc\u30f3\u30c8\u4ee3"}),Object(W.jsx)(x.a,{style:{fontSize:14,verticalAlign:"middle"},color:"textSecondary",gutterBottom:!0,children:"\u30fb\u73fe\u5728\u306e\u652f\u63f4\u7dcf\u984d"}),Object(W.jsx)(x.a,{variant:"h5",align:"center",children:"".concat(R(U||0),"\u5186")}),Object(W.jsx)(x.a,{style:{fontSize:14},color:"textSecondary",gutterBottom:!0,children:"\u30fb\u76ee\u6a19\u91d1\u984d"}),Object(W.jsx)(x.a,{variant:"h5",align:"center",children:"".concat(R(B.app.donation.\u76ee\u6a19\u984d),"\u5186")}),Object(W.jsx)(x.a,{style:{fontSize:14},color:"textSecondary",gutterBottom:!0,children:"\u30fb\u52df\u96c6\u7d42\u4e86\u307e\u3067\u6b8b\u308a"}),Object(W.jsx)(x.a,{variant:"h5",align:"center",children:M()?"\u52df\u96c6\u7d42\u4e86\u3057\u307e\u3057\u305f":Object(S.a)(B.app.donation.\u7de0\u5207,new Date,{locale:C.ja})})]})}),Object(W.jsxs)(f.a,{style:{width:"80%",maxWidth:500,padding:"0px 20px"},children:[Object(W.jsx)("div",{className:"margin-tb-8 row-container jc-flex-end-container",children:Object(W.jsx)(m.a,{size:"small",onClick:Z,children:Object(W.jsx)(w.a,{})})}),Object(W.jsxs)("div",{className:"margin-tb-8 column-container each-margin-tb-8-container",children:[Object(W.jsx)(v.a,{label:"\u304a\u540d\u524d",error:!!i,helperText:i,value:n,onChange:function(t){var e=t.target.value;a(e),s($(e))},inputProps:{maxLength:10}}),Object(W.jsx)(v.a,{label:"\u91d1\u984d",error:!!T,helperText:T,type:"number",value:j,onChange:function(t){var e=parseInt(t.target.value,10);b(e),E(q(e))}}),Object(W.jsx)(y.a,{color:"primary",variant:"contained",disabled:!!($(n)||q(j)||H(U)||M()),onClick:function(){Y(!0)},children:"\u652f\u63f4\u3059\u308b"}),Object(W.jsx)("div",{className:"margin-tb-8 row-container jc-flex-end-container",children:Object(W.jsx)(x.a,{children:"\u203b\u304a\u652f\u6255\u3044\u306f\u73fe\u91d1 or LinePay\u3067\u304a\u9858\u3044\u3057\u307e\u3059"})})]})]})]}),H(U)&&Object(W.jsx)(O.a,{}),Object(W.jsx)(G,{open:X,title:"\u3054\u78ba\u8a8d",content:Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)("div",{style:{padding:"0px 20px"},children:[Object(W.jsx)(x.a,{children:"\u304a\u540d\u524d:".concat(n)}),Object(W.jsx)(x.a,{children:"\u91d1\u984d:".concat(j)})]})}),onOkClick:tt,onCancelClick:function(){Y(!1)},PaperProps:{style:{width:"50%"}}})]})},V=function(){return Object(W.jsx)(i.b,{injectFirst:!0,children:Object(W.jsx)(s.a,{theme:Object(u.a)({}),children:Object(W.jsx)(l.a,{children:Object(W.jsx)(Q,{})})})})};o.a.render(Object(W.jsx)(a.a.StrictMode,{children:Object(W.jsx)(V,{})}),document.getElementById("root"))},99:function(t,e,n){}},[[535,1,2]]]);
//# sourceMappingURL=main.c4117411.chunk.js.map