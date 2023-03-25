"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{4146:function(V,u,x){x.d(u,{e:function(){return Y}});var K,r,n,i,t,e=x(7689),s=x(6797),a=x(168),q=x(82),A=x(1087),d=q.ZP.ul(K||(K=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  gap: 28px;\n"]))),c=q.ZP.li(r||(r=(0,a.Z)(["\n  flex-basis: 24%;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    transform: scale(1.03);\n    cursor: pointer;\n  }\n"]))),p=(0,q.ZP)(A.rU)(n||(n=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),o=q.ZP.img(i||(i=(0,a.Z)(["\n  object-fit: cover;\n  height: 520px;\n  max-width: 100%; \n"]))),f=q.ZP.h3(t||(t=(0,a.Z)(["\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: center;\n  font-size: 24px;\n\n  :hover,\n  :focus {\n    color: #303f9f;\n  }\n"]))),F=x(184),Y=function(V){var u=V.movies,x=(0,e.TH)();return(0,F.jsx)(d,{children:u.map((function(V){var u=V.id,K=V.title,r=V.original_title,n=V.poster_path;return(0,F.jsxs)(c,{children:[(0,F.jsx)(p,{to:"/movies/".concat(u),state:{from:x},children:(0,F.jsx)(o,{src:n?"https://image.tmdb.org/t/p/original/".concat(n):s,alt:K})}),(0,F.jsx)(f,{children:null!==K&&void 0!==K?K:r})]},u)}))})}},3485:function(V,u,x){x.r(u),x.d(u,{default:function(){return c}});var K,r=x(5861),n=x(9439),i=x(4687),t=x.n(i),e=x(2791),s=x(6611),a=x(4146),q=x(168),A=x(82).ZP.h1(K||(K=(0,q.Z)(["\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 48px;\n  color: #3f51b5;\n"]))),d=x(184);function c(){var V=(0,e.useState)([]),u=(0,n.Z)(V,2),x=u[0],K=u[1];return(0,e.useEffect)((function(){function V(){return(V=(0,r.Z)(t().mark((function V(){var u;return t().wrap((function(V){for(;;)switch(V.prev=V.next){case 0:return V.prev=0,V.next=3,(0,s.wr)();case 3:u=V.sent,K(u),V.next=10;break;case 7:V.prev=7,V.t0=V.catch(0),console.log(V.t0.message);case 10:case"end":return V.stop()}}),V,null,[[0,7]])})))).apply(this,arguments)}!function(){V.apply(this,arguments)}()}),[]),(0,d.jsxs)("main",{children:[(0,d.jsx)(A,{children:"Trending today"}),x&&(0,d.jsx)(a.e,{movies:x})]})}},6611:function(V,u,x){x.d(u,{Hx:function(){return o},Y5:function(){return A},bI:function(){return a},wr:function(){return e},xc:function(){return c}});var K=x(5861),r=x(4687),n=x.n(r),i=x(1243),t="c633fbd383276868549332293f6b233d";function e(){return s.apply(this,arguments)}function s(){return(s=(0,K.Z)(n().mark((function V(){var u;return n().wrap((function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,i.Z.get("trending/movie/day?api_key=".concat(t));case 2:return u=V.sent,V.abrupt("return",u.data.results);case 4:case"end":return V.stop()}}),V)})))).apply(this,arguments)}function a(V){return q.apply(this,arguments)}function q(){return(q=(0,K.Z)(n().mark((function V(u){var x;return n().wrap((function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,i.Z.get("search/movie?api_key=".concat(t,"&query=").concat(u,"&page=1"));case 2:return x=V.sent,V.abrupt("return",x.data.results);case 4:case"end":return V.stop()}}),V)})))).apply(this,arguments)}function A(V){return d.apply(this,arguments)}function d(){return(d=(0,K.Z)(n().mark((function V(u){var x;return n().wrap((function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,i.Z.get("movie/".concat(u,"?api_key=").concat(t));case 2:return x=V.sent,V.abrupt("return",x.data);case 4:case"end":return V.stop()}}),V)})))).apply(this,arguments)}function c(V){return p.apply(this,arguments)}function p(){return(p=(0,K.Z)(n().mark((function V(u){var x;return n().wrap((function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,i.Z.get("movie/".concat(u,"/credits?api_key=").concat(t));case 2:return x=V.sent,V.abrupt("return",x.data.cast);case 4:case"end":return V.stop()}}),V)})))).apply(this,arguments)}function o(V){return f.apply(this,arguments)}function f(){return(f=(0,K.Z)(n().mark((function V(u){var x;return n().wrap((function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,i.Z.get("movie/".concat(u,"/reviews?api_key=").concat(t));case 2:return x=V.sent,V.abrupt("return",x.data.results);case 4:case"end":return V.stop()}}),V)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3/"},6797:function(V){V.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=485.cd056ef0.chunk.js.map