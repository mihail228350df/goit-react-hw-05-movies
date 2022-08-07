"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[492],{6492:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,a,i=t(885),c=t(168),s=t(9128),o=t(3504),u=t(6031),p=t(184),l=(0,u.ZP)(o.rU)(r||(r=(0,c.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  :hover {\n    color: orangered;\n  }\n"]))),d=function(n){var e=n.to,t=n.children;return(0,p.jsxs)(l,{to:e,children:[(0,p.jsx)(s.jTe,{size:"24"}),t]})},f=t(3682),h=t(8787),x=u.ZP.div(a||(a=(0,c.Z)(["\n  padding: 10px;\n  border: 1px solid black;\n  margin-bottom: 20px;\n  display: flex;\n  img {\n    width: 340px;\n  }\n  h1 {\n    margin-bottom: 10px;\n  }\n  p {\n    margin-bottom: 10px;\n  }\n"])));function v(n){var e=n.id,t=n.url,r=n.title,a=n.genres,i=n.overview,c=n.vote_average,s=n.date,o="https://image.tmdb.org/t/p/w500";return t||(o="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Anonymous.svg/1481px-Anonymous.svg.png",t=""),(0,p.jsxs)(x,{id:e,children:[(0,p.jsx)("img",{src:"".concat(o).concat(t),alt:"Poster movie"}),(0,p.jsxs)(f.x,{p:4,children:[(0,p.jsxs)("h1",{children:[r," (",s,")"]}),(0,p.jsxs)("p",{children:["User Score: ",c," "]}),i&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{children:"Overview"}),(0,p.jsx)("p",{children:i})]}),a&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{children:"Genres"}),(0,p.jsx)("p",{children:a.map((function(n){return"".concat(n.name," ")}))})]})]})]})}var g=t(3951),m=t(2791),j=t(6871),w=t(4390);function b(){var n,e,t=(0,j.UO)().movieId,r=(0,m.useState)(null),a=(0,i.Z)(r,2),c=a[0],s=a[1],o=(0,j.TH)(),u=(0,j.s0)(),l=null!==(n=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";if((0,m.useEffect)((function(){(0,w.TP)(t).then((function(n){s(n)})).catch((function(n){u("/",{replace:!0})}))}),[t,u]),c){var x=c.id,b=c.backdrop_path,k=c.title,y=c.genres,_=c.overview,Z=c.vote_average,U=c.release_date;return(0,p.jsxs)(h.K,{children:[(0,p.jsx)(d,{to:l,children:"Back"}),(0,p.jsx)(v,{id:x,url:b,title:k,genres:y,overview:_,vote_average:Z,date:U}),(0,p.jsxs)(f.x,{p:4,border:"1px solid black",children:[(0,p.jsx)("p",{children:"Additional information"}),(0,p.jsxs)(f.x,{as:"ul",display:"flex",mt:"10px",children:[(0,p.jsx)("li",{children:(0,p.jsx)(g.F,{to:"cast",state:{from:l},children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(g.F,{to:"reviews",state:{from:l},children:"Reviews"})})]})]}),(0,p.jsx)(m.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading..."}),children:(0,p.jsx)(j.j3,{})})]})}}},4390:function(n,e,t){t.d(e,{H_:function(){return u},Hg:function(){return l},TP:function(){return f},tx:function(){return g},zv:function(){return x}});var r=t(5861),a=t(7757),i=t.n(a),c=t(4569),s=t.n(c),o="ab9c2583cd1a2f86525b45efd67b53f1";function u(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("trending/movie/day?api_key=".concat(o));case 2:return e=n.sent,t=e.data.results,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s().defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=492.480efb65.chunk.js.map