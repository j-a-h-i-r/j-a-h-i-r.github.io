import{S as r,i as s,s as t,e,t as a,b as n,C as c,c as u,d as o,g as d,h as m,D as p}from"./chunks/vendor-dd583c0a.js";function f(r){let s,t,d=r[1].frame+"";return{c(){s=e("pre"),t=a(d)},m(r,e){n(r,s,e),c(s,t)},p(r,s){2&s&&d!==(d=r[1].frame+"")&&u(t,d)},d(r){r&&o(s)}}}function i(r){let s,t,d=r[1].stack+"";return{c(){s=e("pre"),t=a(d)},m(r,e){n(r,s,e),c(s,t)},p(r,s){2&s&&d!==(d=r[1].stack+"")&&u(t,d)},d(r){r&&o(s)}}}function l(r){let s,t,l,k,h,g,x,N,$=r[1].message+"",b=r[1].frame&&f(r),j=r[1].stack&&i(r);return{c(){s=e("h1"),t=a(r[0]),l=d(),k=e("pre"),h=a($),g=d(),b&&b.c(),x=d(),j&&j.c(),N=m()},m(r,e){n(r,s,e),c(s,t),n(r,l,e),n(r,k,e),c(k,h),n(r,g,e),b&&b.m(r,e),n(r,x,e),j&&j.m(r,e),n(r,N,e)},p(r,[s]){1&s&&u(t,r[0]),2&s&&$!==($=r[1].message+"")&&u(h,$),r[1].frame?b?b.p(r,s):(b=f(r),b.c(),b.m(x.parentNode,x)):b&&(b.d(1),b=null),r[1].stack?j?j.p(r,s):(j=i(r),j.c(),j.m(N.parentNode,N)):j&&(j.d(1),j=null)},i:p,o:p,d(r){r&&o(s),r&&o(l),r&&o(k),r&&o(g),b&&b.d(r),r&&o(x),j&&j.d(r),r&&o(N)}}}function k({error:r,status:s}){return{props:{error:r,status:s}}}function h(r,s,t){let{status:e}=s,{error:a}=s;return r.$$set=r=>{"status"in r&&t(0,e=r.status),"error"in r&&t(1,a=r.error)},[e,a]}class g extends r{constructor(r){super(),s(this,r,h,l,t,{status:0,error:1})}}export{g as default,k as load};