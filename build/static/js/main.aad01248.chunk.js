(this["webpackJsonptm-donation"]=this["webpackJsonptm-donation"]||[]).push([[0],{529:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),o=n.n(c),i=(n(94),n(568)),s=n(564),u=n(82),l=n(565),j=n(18),d=n.n(j),p=n(28),b=n(17),h=n(74),O=n.n(h),m=n(562),f=n(563),x=n(570),v=n(566),g=n(41),y=n(567),w=n(81),S={api:{production:"https://h0x0vwtnni.execute-api.ap-northeast-1.amazonaws.com",development:"https://h0x0vwtnni.execute-api.ap-northeast-1.amazonaws.com",test:"http://localhost:3001"},url:{donations:"/donations"},app:{donation:{"\u30bf\u30a4\u30c8\u30eb":"\u85e4\u6e15\u3055\u3093\uff1a\u3054\u7d50\u69cb\u795d\u3044\u30b3\u30e1\u30f3\u30c8&\u3054\u795d\u5100","\u76ee\u6a19\u984d":1e4,"\u7de0\u5207":new Date(2021,4,31,23,59,59),"\u5bc4\u4ed8\u984d":{MAX:2e3,MIN:0,"\u76ee\u5b89\u8868\u793a\u984d":1e3}}},constants:{newId:"__new__"}},k=S.api.production,C={"Content-Type":"application/json; charset=utf-8"},N=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a,r,c,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,a=t.params,r=t.headers,c=new URL(n),o=new URLSearchParams,a&&(Object.keys(a).forEach((function(e){return o.append(e,a[e])})),c.search=o.toString()),e.abrupt("return",fetch(c.toString(),{method:"GET",mode:"cors",cache:"no-cache",headers:r,redirect:"follow"}).then((function(e){return e.json()})).catch((function(e){return e})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a,r,c,o,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,a=t.params,r=t.body,c=t.headers,o=new URL(n),i=new URLSearchParams,a&&(Object.keys(a).forEach((function(e){return i.append(e,a[e])})),o.search=i.toString()),e.abrupt("return",fetch(o.toString(),{method:"Post",mode:"cors",cache:"no-cache",headers:c,redirect:"follow",body:JSON.stringify(r)}).then((function(e){return e.json()})).catch((function(e){return e})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,a=void 0===n?k:n,r=t.params,c={url:a,params:r,headers:C},e.abrupt("return",N(c));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a,r,c,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,a=void 0===n?k:n,r=t.params,c=t.body,o={url:a,params:r,body:c,headers:C},e.abrupt("return",P(o));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E="".concat(k).concat(S.url.donations),I=function(e){var t=String(e).split("."),n=String(t[0]).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,");return t.length>1&&(n+=".".concat(t[1])),n},L=n(60),M=n(83),R=n(571),z=n(560),A=n(561),G=n(75),U=n.n(G),_=S.app.donation.\u5bc4\u4ed8\u984d,D=function(e){return e?"":"\u540d\u524d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"},J=function(e){return"string"!==typeof e||e?!Object(g.isInteger)(e)||e<_.MIN||e>_.MAX?"".concat(_.MIN,"\u301c").concat(_.MAX,"\u306e\u6574\u6570\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"):"":"\u91d1\u984d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"},Q=function(e){return e?U()(e)?"":"\u6709\u52b9\u306a\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044":"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"},W=function(e){return e?"":"\u30b3\u30e1\u30f3\u30c8\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"},X=n(9),q=function(e){var t=e.open,n=e.onCancelClick,r=e.onOkClick,c=e.cancelButtonText,o=e.okButtonText,i=Object(M.a)(e,["open","onCancelClick","onOkClick","cancelButtonText","okButtonText"]),s=Object(a.useState)(""),u=Object(b.a)(s,2),l=u[0],j=u[1],d=Object(a.useState)(""),p=Object(b.a)(d,2),h=p[0],O=p[1],m=Object(a.useState)(""),f=Object(b.a)(m,2),g=f[0],y=f[1],w=Object(a.useState)(""),k=Object(b.a)(w,2),C=k[0],N=k[1],P=Object(a.useState)(""),T=Object(b.a)(P,2),B=T[0],E=T[1],I=Object(a.useState)(""),G=Object(b.a)(I,2),U=G[0],_=G[1],q=Object(a.useState)(""),F=Object(b.a)(q,2),K=F[0],$=F[1],H=Object(a.useState)(""),V=Object(b.a)(H,2),Y=V[0],Z=V[1];return Object(X.jsxs)(R.a,Object(L.a)(Object(L.a)({open:t,onClose:n,PaperProps:{style:{width:"50%",maxWidth:"70%"}}},i),{},{children:[Object(X.jsxs)(z.a,{className:"column-container ai-center-container",children:[Object(X.jsx)(v.a,{label:"\u304a\u540d\u524d",className:"margin-tb-8",style:{width:"100%"},error:!!h,helperText:h,value:l,onChange:function(e){var t=e.target.value;j(t),O(D(t))},inputProps:{maxLength:10}}),Object(X.jsx)(v.a,{label:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",className:"margin-tb-8",style:{width:"100%"},error:!!U,helperText:U||"\u30b3\u30e1\u30f3\u30c8\u7de8\u96c6\u6642\u306b\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059",value:B,onChange:function(e){var t=e.target.value;E(t),_(Q(t))},inputProps:{maxLength:50}}),Object(X.jsx)(v.a,{label:"\u30b3\u30e1\u30f3\u30c8",multiline:!0,rows:3,className:"margin-tb-8",style:{width:"100%"},error:!!Y,helperText:Y,value:K,onChange:function(e){var t=e.target.value;$(t),Z(W(t))},inputProps:{maxLength:500}}),Object(X.jsx)(v.a,{label:"\u91d1\u984d",className:"margin-tb-8",style:{width:"100%"},error:!!C,helperText:C||"\u63a8\u5968\u91d1\u984d".concat(S.app.donation.\u5bc4\u4ed8\u984d.\u76ee\u5b89\u8868\u793a\u984d,"\u5186"),type:"number",value:g,onChange:function(e){var t=parseInt(e.target.value,10);y(t),N(J(t))}}),Object(X.jsx)("div",{className:"row-container jc-flex-end-container",style:{width:"100%"},children:"\u203b\u304a\u652f\u6255\u3044\u65b9\u6cd5\uff1aG3\u793e\u54e1\u3078\u73fe\u91d1\u6e21\u3057 or QR\u6c7a\u6e08"})]}),Object(X.jsxs)(A.a,{children:[Object(X.jsx)(x.a,{color:"primary",onClick:n,children:c||"Cancel"}),Object(X.jsx)(x.a,{color:"primary",variant:"contained",disabled:!!(D(l)||Q(B)||W(K)||J(g)),onClick:function(){var e={name:l,amount:"string"===typeof g?parseInt(g,10):g,comment:K,email:B};r(e)},children:o||"OK"})]})]}))},F=function(e){var t=e.open,n=e.onClose;return Object(X.jsx)(R.a,{open:t,onClose:n,children:Object(X.jsxs)(z.a,{children:[Object(X.jsx)("div",{children:"PayPay QRCode"}),Object(X.jsx)("img",{src:"/qr.jpg",alt:"qrcode",width:"180px",style:{}})]})})},K=function(e){var t=0;return e&&!Object(g.isEmpty)(e)&&Object(g.isArray)(e)&&e.forEach((function(e){t+=e.amount})),t},$=function(){return new Date>S.app.donation.\u7de0\u5207},H=function(){var e=Object(a.useState)(0),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),o=Object(b.a)(c,2),i=o[0],s=o[1],u=Object(a.useState)(!1),l=Object(b.a)(u,2),j=l[0],h=l[1],g=Object(a.useState)(!1),k=Object(b.a)(g,2),C=k[0],N=k[1],P=Object(a.useState)(!1),L=Object(b.a)(P,2),M=L[0],R=L[1],z=Object(a.useState)(!1),A=Object(b.a)(z,2),G=A[0],U=A[1];Object(a.useEffect)((function(){(function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,T({url:E});case 4:t=e.sent,s(t.body||[]),r(K(t.body||[])),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error : ".concat(e.t0.message));case 12:return e.prev=12,h(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}})()()}),[C]);var _,D=function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!1),e.next=3,B({url:E,body:t}).then((function(e){return e}));case 3:(n=e.sent).result&&!n.result.error&&N(!C);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)("div",{className:"column-container ai-center-container",children:[Object(X.jsx)(m.a,{className:"margin-tb-8 column-container ai-center-container",style:{width:"80%",maxWidth:500,padding:"10px"},children:Object(X.jsxs)("div",{className:"column-container",children:[Object(X.jsx)(f.a,{variant:"h5",className:"margin-tb-8",children:S.app.donation.\u30bf\u30a4\u30c8\u30eb}),Object(X.jsx)(f.a,{style:{fontSize:14,verticalAlign:"middle"},color:"textSecondary",gutterBottom:!0,children:"\u30fb\u73fe\u5728\u306e\u652f\u63f4\u7dcf\u984d"}),Object(X.jsx)(f.a,{variant:"h5",align:"center",children:j?"loading...":"".concat(I(n||0),"\u5186")}),Object(X.jsx)(f.a,{style:{fontSize:14},color:"textSecondary",gutterBottom:!0,children:"\u30fb\u76ee\u6a19\u91d1\u984d"}),Object(X.jsx)(f.a,{variant:"h5",align:"center",children:"".concat(I(S.app.donation.\u76ee\u6a19\u984d),"\u5186")}),Object(X.jsx)(f.a,{style:{fontSize:14},color:"textSecondary",gutterBottom:!0,children:"\u30fb\u52df\u96c6\u7d42\u4e86\u307e\u3067\u6b8b\u308a"}),Object(X.jsx)(f.a,{variant:"h5",align:"center",children:$()?"\u52df\u96c6\u7d42\u4e86\u3057\u307e\u3057\u305f":Object(y.a)(S.app.donation.\u7de0\u5207,new Date,{locale:w.ja})}),Object(X.jsxs)("div",{className:"row-container ",children:[Object(X.jsx)(x.a,{color:"primary",variant:"contained",className:"margin-8",style:{flexGrow:4},disabled:!!$(),onClick:function(){R(!0)},children:"\u652f\u63f4\u3059\u308b"}),Object(X.jsx)(x.a,{color:"default",variant:"contained",className:"margin-8",style:{flexGrow:1},disabled:!!$(),onClick:function(){U(!0)},children:"QR\u6c7a\u6e08"})]})]})}),Object(X.jsx)(q,{open:M,onOkClick:D,onCancelClick:function(){R(!1)}}),Object(X.jsx)(F,{open:G,onClose:function(){U(!1)}}),i.map((function(e){return Object(X.jsxs)(m.a,{style:{width:"80%",maxWidth:500,padding:10,margin:8},children:[Object(X.jsx)("div",{children:"".concat(e.name," \u3055\u3093\u3088\u308a")}),Object(X.jsx)(v.a,{multiline:!0,value:e.comment,className:"margin-tb-8",style:{width:"100%"}})]})}))]}),(_=n,_>=S.app.donation.\u76ee\u6a19\u984d&&Object(X.jsx)(O.a,{}))]})},V=function(){return Object(X.jsx)(i.b,{injectFirst:!0,children:Object(X.jsx)(s.a,{theme:Object(u.a)({}),children:Object(X.jsx)(l.a,{children:Object(X.jsx)(H,{})})})})};o.a.render(Object(X.jsx)(r.a.StrictMode,{children:Object(X.jsx)(V,{})}),document.getElementById("root"))},94:function(e,t,n){}},[[529,1,2]]]);
//# sourceMappingURL=main.aad01248.chunk.js.map