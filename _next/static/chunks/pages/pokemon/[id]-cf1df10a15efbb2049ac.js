(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{3663:function(n,t,e){"use strict";e.r(t);var r=e(1163),o=e(1623),u=e(5893);t.default=function(){var n=(0,r.useRouter)(),t=n.query.id?"https://pokeapi.co/api/v2/pokemon/".concat(n.query.id):null,e=(0,o.Z)(t),i=e.isLoading,c=e.data;return i?(0,u.jsx)("h2",{children:"...Loading"}):(0,u.jsxs)("div",{children:[(0,u.jsxs)("h1",{children:["Pokemon ",c.name]}),(0,u.jsx)("img",{src:c.sprites.front_default,alt:c.name})]})}},1623:function(n,t,e){"use strict";function r(n,t,e,r,o,u,i){try{var c=n[u](i),s=c.value}catch(a){return void e(a)}c.done?t(s):Promise.resolve(s).then(r,o)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(o,u){var i=n.apply(t,e);function c(n){r(i,o,u,c,s,"next",n)}function s(n){r(i,o,u,c,s,"throw",n)}c(void 0)}))}}e.d(t,{Z:function(){return s}});var u=e(7757),i=e.n(u),c=e(7294),s=function(n){var t=(0,c.useState)(!0),e=t[0],r=t[1],u=(0,c.useState)([]),s=u[0],a=u[1],f=(0,c.useState)(!1),p=f[0],d=f[1];function l(){return(l=o(i().mark((function t(){var e,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(n);case 3:return e=t.sent,t.next=6,e.json();case 6:o=t.sent,a(o),r(!1),console.log(o),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),d(!0),r(!1);case 17:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}return(0,c.useEffect)((function(){n&&function(){l.apply(this,arguments)}()}),[n]),{isLoading:e,data:s,isError:p}}},3126:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pokemon/[id]",function(){return e(3663)}])},1163:function(n,t,e){n.exports=e(4651)}},function(n){n.O(0,[774,888,179],(function(){return t=3126,n(n.s=t);var t}));var t=n.O();_N_E=t}]);