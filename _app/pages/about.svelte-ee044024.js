import{S as N,i as Q,s as U,e as g,t as j,k as V,c as p,a as $,g as x,d as c,n as P,b as m,f as S,H as u,h as X,I as z,j as L,m as H,o as J,x as E,u as I,v as M,r as fe,w as ue,J as de,D as re,E as se,F as ae,G as ne,X as Y,Y as He,K as Je,Z as Me,l as ke,P as Ae,Q as Be}from"../chunks/vendor-319cdc38.js";import{a as Ce,D as Fe,L as Te,P as Ne}from"../chunks/Layout-ebe892af.js";function Qe(n){let t,s,r=n[0].title+"",e,a,l,i,o=n[0].title+"",w,k,y=n[0].description+"",h;return{c(){t=g("div"),s=g("h4"),e=j(r),a=V(),l=g("div"),i=g("span"),w=j(o),k=V(),h=j(y),this.h()},l(D){t=p(D,"DIV",{class:!0});var _=$(t);s=p(_,"H4",{class:!0});var d=$(s);e=x(d,r),d.forEach(c),a=P(_),l=p(_,"DIV",{class:!0});var f=$(l);i=p(f,"SPAN",{class:!0});var v=$(i);w=x(v,o),v.forEach(c),k=P(f),h=x(f,y),f.forEach(c),_.forEach(c),this.h()},h(){m(s,"class","border-b-2 border-blue-300 border-dotted"),m(i,"class","bg-green-400 dark:bg-gray-800 font-bold mr-1 px-2 rounded text-white"),m(l,"class","skill-description bg-purple-300 dark:bg-blue-900 left-0 px-2 py-2 rounded svelte-r1cwlt"),m(t,"class","rounded shadow-sm bg-yellow-100 dark:bg-gray-600 hover:bg-purple-100 px-4 py-2 skill-container cursor-pointer svelte-r1cwlt")},m(D,_){S(D,t,_),u(t,s),u(s,e),u(t,a),u(t,l),u(l,i),u(i,w),u(l,k),u(l,h)},p(D,[_]){_&1&&r!==(r=D[0].title+"")&&X(e,r),_&1&&o!==(o=D[0].title+"")&&X(w,o),_&1&&y!==(y=D[0].description+"")&&X(h,y)},i:z,o:z,d(D){D&&c(t)}}}function Ue(n,t,s){let{skill:r}=t;return n.$$set=e=>{"skill"in e&&s(0,r=e.skill)},[r]}class Ke extends N{constructor(t){super();Q(this,t,Ue,Qe,U,{skill:0})}}function ye(n,t,s){const r=n.slice();return r[1]=t[s],r}function we(n){let t,s;return t=new Ke({props:{skill:n[1]}}),{c(){L(t.$$.fragment)},l(r){H(t.$$.fragment,r)},m(r,e){J(t,r,e),s=!0},p:z,i(r){s||(E(t.$$.fragment,r),s=!0)},o(r){I(t.$$.fragment,r),s=!1},d(r){M(t,r)}}}function qe(n){let t,s,r=n[0],e=[];for(let l=0;l<r.length;l+=1)e[l]=we(ye(n,r,l));const a=l=>I(e[l],1,1,()=>{e[l]=null});return{c(){t=g("div");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=p(l,"DIV",{class:!0});var i=$(t);for(let o=0;o<e.length;o+=1)e[o].l(i);i.forEach(c),this.h()},h(){m(t,"class","flex gap-x-3 gap-y-2 flex-wrap relative")},m(l,i){S(l,t,i);for(let o=0;o<e.length;o+=1)e[o].m(t,null);s=!0},p(l,[i]){if(i&1){r=l[0];let o;for(o=0;o<r.length;o+=1){const w=ye(l,r,o);e[o]?(e[o].p(w,i),E(e[o],1)):(e[o]=we(w),e[o].c(),E(e[o],1),e[o].m(t,null))}for(fe(),o=r.length;o<e.length;o+=1)a(o);ue()}},i(l){if(!s){for(let i=0;i<r.length;i+=1)E(e[i]);s=!0}},o(l){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)I(e[i]);s=!1},d(l){l&&c(t),de(e,l)}}}function Ge(n){return[[{title:"HTML",description:"It's not much but it's honest work!"},{title:"JavaScript",description:"Most familiar among all things here. From JS embedded inside HTML to JS frameworks in both frontend and backend, worked with all."},{title:"NodeJS",description:"Backend language (or runtime environment) of choice. 2 years of professional experience. More years of personal experience."},{title:"Angular(+JS)",description:"Frontend framework of choice. Moderate amount of experience."},{title:"Git",description:"Duh!"},{title:"Python",description:"Love Python! Did not have the opportunity to use Python for anything work related yet. Would love to work more in Python."},{title:"PostgresSQL, MySQL",description:"Most of my DBMS experience is in RDBMS. Has experience of designing schema from scratch."},{title:"CSS",description:"Trying to up my CSS game. It's hard :(."},{title:"Kafka",description:"Recently (Q4, 2020) started using Kafka. Built oauth component, connectors and streams application using Kafka."}]]}class We extends N{constructor(t){super();Q(this,t,Ge,qe,U,{})}}function Re(n){let t,s,r,e,a;return s=new Ce({}),e=new Fe({}),{c(){t=g("div"),L(s.$$.fragment),r=V(),L(e.$$.fragment),this.h()},l(l){t=p(l,"DIV",{class:!0});var i=$(t);H(s.$$.fragment,i),r=P(i),H(e.$$.fragment,i),i.forEach(c),this.h()},h(){m(t,"class","flex ml-auto gap-4")},m(l,i){S(l,t,i),J(s,t,null),u(t,r),J(e,t,null),a=!0},p:z,i(l){a||(E(s.$$.fragment,l),E(e.$$.fragment,l),a=!0)},o(l){I(s.$$.fragment,l),I(e.$$.fragment,l),a=!1},d(l){l&&c(t),M(s),M(e)}}}class Oe extends N{constructor(t){super();Q(this,t,null,Re,U,{})}}const Xe=n=>({}),Ee=n=>({}),Ye=n=>({}),Ie=n=>({}),Ze=n=>({}),De=n=>({class:""}),ze=n=>({}),Se=n=>({});function Ve(n){let t,s;const r=n[2].footer,e=re(r,n,n[1],Ee);return{c(){t=g("div"),e&&e.c()},l(a){t=p(a,"DIV",{});var l=$(t);e&&e.l(l),l.forEach(c)},m(a,l){S(a,t,l),e&&e.m(t,null),s=!0},p(a,l){e&&e.p&&(!s||l&2)&&se(e,r,a,a[1],s?ne(r,a[1],l,Xe):ae(a[1]),Ee)},i(a){s||(E(e,a),s=!0)},o(a){I(e,a),s=!1},d(a){a&&c(t),e&&e.d(a)}}}function et(n){let t,s,r,e,a,l,i,o;const w=n[2].title,k=re(w,n,n[1],Se),y=n[2].subtitle,h=re(y,n,n[1],De),D=n[2].body,_=re(D,n,n[1],Ie);let d=n[0].footer&&Ve(n);return{c(){t=g("div"),s=g("div"),k&&k.c(),r=V(),e=g("div"),h&&h.c(),a=V(),l=g("div"),_&&_.c(),i=V(),d&&d.c(),this.h()},l(f){t=p(f,"DIV",{class:!0});var v=$(t);s=p(v,"DIV",{});var K=$(s);k&&k.l(K),K.forEach(c),r=P(v),e=p(v,"DIV",{class:!0});var B=$(e);h&&h.l(B),B.forEach(c),a=P(v),l=p(v,"DIV",{});var q=$(l);_&&_.l(q),q.forEach(c),i=P(v),d&&d.l(v),v.forEach(c),this.h()},h(){Y(s,"mb-1",n[0].title),m(e,"class","text-gray-500"),Y(e,"mb-1",n[0].subtitle),Y(l,"mb-2",n[0].body),m(t,"class","px-4 py-2 shadow bg-white rounded dark:bg-gray-600 border-t-2 border-pink-800")},m(f,v){S(f,t,v),u(t,s),k&&k.m(s,null),u(t,r),u(t,e),h&&h.m(e,null),u(t,a),u(t,l),_&&_.m(l,null),u(t,i),d&&d.m(t,null),o=!0},p(f,[v]){k&&k.p&&(!o||v&2)&&se(k,w,f,f[1],o?ne(w,f[1],v,ze):ae(f[1]),Se),v&1&&Y(s,"mb-1",f[0].title),h&&h.p&&(!o||v&2)&&se(h,y,f,f[1],o?ne(y,f[1],v,Ze):ae(f[1]),De),v&1&&Y(e,"mb-1",f[0].subtitle),_&&_.p&&(!o||v&2)&&se(_,D,f,f[1],o?ne(D,f[1],v,Ye):ae(f[1]),Ie),v&1&&Y(l,"mb-2",f[0].body),f[0].footer?d?(d.p(f,v),v&1&&E(d,1)):(d=Ve(f),d.c(),E(d,1),d.m(t,null)):d&&(fe(),I(d,1,1,()=>{d=null}),ue())},i(f){o||(E(k,f),E(h,f),E(_,f),E(d),o=!0)},o(f){I(k,f),I(h,f),I(_,f),I(d),o=!1},d(f){f&&c(t),k&&k.d(f),h&&h.d(f),_&&_.d(f),d&&d.d()}}}function tt(n,t,s){let{$$slots:r={},$$scope:e}=t;const a=He(r);return n.$$set=l=>{"$$scope"in l&&s(1,e=l.$$scope)},[a,e,r]}class lt extends N{constructor(t){super();Q(this,t,tt,et,U,{})}}function Pe(n,t,s){const r=n.slice();return r[1]=t[s],r}function rt(n){let t,s,r=n[0].title+"",e,a,l,i,o,w,k;return o=new Je({props:{data:Me}}),{c(){t=g("div"),s=g("h2"),e=j(r),a=V(),l=g("a"),i=j("Demo "),L(o.$$.fragment),this.h()},l(y){t=p(y,"DIV",{slot:!0,class:!0});var h=$(t);s=p(h,"H2",{class:!0});var D=$(s);e=x(D,r),D.forEach(c),a=P(h),l=p(h,"A",{href:!0,target:!0,class:!0});var _=$(l);i=x(_,"Demo "),H(o.$$.fragment,_),_.forEach(c),h.forEach(c),this.h()},h(){m(s,"class","text-xl font-bold"),m(l,"href",w=n[0].projectUrl),m(l,"target","_blank"),m(l,"class","text-blue-500 dark:text-blue-200"),m(t,"slot","title"),m(t,"class","flex justify-between")},m(y,h){S(y,t,h),u(t,s),u(s,e),u(t,a),u(t,l),u(l,i),J(o,l,null),k=!0},p(y,h){(!k||h&1)&&r!==(r=y[0].title+"")&&X(e,r),(!k||h&1&&w!==(w=y[0].projectUrl))&&m(l,"href",w)},i(y){k||(E(o.$$.fragment,y),k=!0)},o(y){I(o.$$.fragment,y),k=!1},d(y){y&&c(t),M(o)}}}function st(n){let t,s=n[0].description+"",r;return{c(){t=g("div"),r=j(s),this.h()},l(e){t=p(e,"DIV",{slot:!0});var a=$(t);r=x(a,s),a.forEach(c),this.h()},h(){m(t,"slot","body")},m(e,a){S(e,t,a),u(t,r)},p(e,a){a&1&&s!==(s=e[0].description+"")&&X(r,s)},d(e){e&&c(t)}}}function je(n){let t,s=n[1]+"",r,e;return{c(){t=g("span"),r=j(s),e=V(),this.h()},l(a){t=p(a,"SPAN",{class:!0});var l=$(t);r=x(l,s),e=P(l),l.forEach(c),this.h()},h(){m(t,"class","rounded-full bg-gray-300 dark:bg-gray-800 px-3")},m(a,l){S(a,t,l),u(t,r),u(t,e)},p(a,l){l&1&&s!==(s=a[1]+"")&&X(r,s)},d(a){a&&c(t)}}}function at(n){let t,s=n[0].languages,r=[];for(let e=0;e<s.length;e+=1)r[e]=je(Pe(n,s,e));return{c(){t=g("div");for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){t=p(e,"DIV",{slot:!0,class:!0});var a=$(t);for(let l=0;l<r.length;l+=1)r[l].l(a);a.forEach(c),this.h()},h(){m(t,"slot","footer"),m(t,"class","flex flex-wrap gap-2")},m(e,a){S(e,t,a);for(let l=0;l<r.length;l+=1)r[l].m(t,null)},p(e,a){if(a&1){s=e[0].languages;let l;for(l=0;l<s.length;l+=1){const i=Pe(e,s,l);r[l]?r[l].p(i,a):(r[l]=je(i),r[l].c(),r[l].m(t,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=s.length}},d(e){e&&c(t),de(r,e)}}}function nt(n){let t,s;return t=new lt({props:{$$slots:{footer:[at],body:[st],title:[rt]},$$scope:{ctx:n}}}),{c(){L(t.$$.fragment)},l(r){H(t.$$.fragment,r)},m(r,e){J(t,r,e),s=!0},p(r,[e]){const a={};e&17&&(a.$$scope={dirty:e,ctx:r}),t.$set(a)},i(r){s||(E(t.$$.fragment,r),s=!0)},o(r){I(t.$$.fragment,r),s=!1},d(r){M(t,r)}}}function ot(n,t,s){let{data:r}=t;return n.$$set=e=>{"data"in e&&s(0,r=e.data)},[r]}class it extends N{constructor(t){super();Q(this,t,ot,nt,U,{data:0})}}function xe(n,t,s){const r=n.slice();return r[1]=t[s],r}function Le(n){let t,s;return t=new it({props:{data:n[1]}}),{c(){L(t.$$.fragment)},l(r){H(t.$$.fragment,r)},m(r,e){J(t,r,e),s=!0},p:z,i(r){s||(E(t.$$.fragment,r),s=!0)},o(r){I(t.$$.fragment,r),s=!1},d(r){M(t,r)}}}function ct(n){let t,s,r=n[0],e=[];for(let l=0;l<r.length;l+=1)e[l]=Le(xe(n,r,l));const a=l=>I(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=ke()},l(l){for(let i=0;i<e.length;i+=1)e[i].l(l);t=ke()},m(l,i){for(let o=0;o<e.length;o+=1)e[o].m(l,i);S(l,t,i),s=!0},p(l,[i]){if(i&1){r=l[0];let o;for(o=0;o<r.length;o+=1){const w=xe(l,r,o);e[o]?(e[o].p(w,i),E(e[o],1)):(e[o]=Le(w),e[o].c(),E(e[o],1),e[o].m(t.parentNode,t))}for(fe(),o=r.length;o<e.length;o+=1)a(o);ue()}},i(l){if(!s){for(let i=0;i<r.length;i+=1)E(e[i]);s=!0}},o(l){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)I(e[i]);s=!1},d(l){de(e,l),l&&c(t)}}}function ft(n){return[[{title:"OBE",projectUrl:"https://copo.jahir.me",description:"An application to manage outcome based education. It allows teachers to set evaluation criterias and grade students.",languages:["NodeJS","Angular","PostgreSQL"]}]]}class ut extends N{constructor(t){super();Q(this,t,ft,ct,U,{})}}function dt(n){let t,s,r;return s=new Oe({}),{c(){t=g("div"),L(s.$$.fragment),this.h()},l(e){t=p(e,"DIV",{slot:!0,class:!0});var a=$(t);H(s.$$.fragment,a),a.forEach(c),this.h()},h(){m(t,"slot","header"),m(t,"class","ml-auto")},m(e,a){S(e,t,a),J(s,t,null),r=!0},i(e){r||(E(s.$$.fragment,e),r=!0)},o(e){I(s.$$.fragment,e),r=!1},d(e){e&&c(t),M(s)}}}function ht(n){let t,s,r,e,a,l,i,o,w,k,y,h,D,_,d,f,v,K,B,q,oe,Z,F,ee,C,G,ie,ce,W,T,te;return F=new We({}),T=new ut({}),{c(){t=g("div"),s=g("img"),e=V(),a=g("div"),l=g("div"),i=j(`I am Jahirul Islam, currently working as a Software Engineer at Fiftywo Digital
					Ltd. Before that I was a Software Engineer at Enosis Solutions.`),o=V(),w=g("div"),k=j("I graduated from East West University in Computer Science & Engineering."),y=V(),h=g("div"),D=j("This page will gradually get updated (hopefully) with new contents"),_=V(),d=g("div"),f=g("h2"),v=j("Skills"),K=V(),B=g("h3"),q=j("From most familiar to the least, sort of .."),oe=V(),Z=g("div"),L(F.$$.fragment),ee=V(),C=g("div"),G=g("h2"),ie=j("Projects"),ce=V(),W=g("div"),L(T.$$.fragment),this.h()},l(b){t=p(b,"DIV",{class:!0});var A=$(t);s=p(A,"IMG",{class:!0,src:!0,alt:!0}),A.forEach(c),e=P(b),a=p(b,"DIV",{class:!0});var R=$(a);l=p(R,"DIV",{});var he=$(l);i=x(he,`I am Jahirul Islam, currently working as a Software Engineer at Fiftywo Digital
					Ltd. Before that I was a Software Engineer at Enosis Solutions.`),he.forEach(c),o=P(R),w=p(R,"DIV",{});var _e=$(w);k=x(_e,"I graduated from East West University in Computer Science & Engineering."),_e.forEach(c),y=P(R),h=p(R,"DIV",{});var me=$(h);D=x(me,"This page will gradually get updated (hopefully) with new contents"),me.forEach(c),R.forEach(c),_=P(b),d=p(b,"DIV",{class:!0});var O=$(d);f=p(O,"H2",{class:!0});var ge=$(f);v=x(ge,"Skills"),ge.forEach(c),K=P(O),B=p(O,"H3",{class:!0});var pe=$(B);q=x(pe,"From most familiar to the least, sort of .."),pe.forEach(c),oe=P(O),Z=p(O,"DIV",{});var $e=$(Z);H(F.$$.fragment,$e),$e.forEach(c),O.forEach(c),ee=P(b),C=p(b,"DIV",{class:!0});var le=$(C);G=p(le,"H2",{class:!0});var ve=$(G);ie=x(ve,"Projects"),ve.forEach(c),ce=P(le),W=p(le,"DIV",{class:!0});var be=$(W);H(T.$$.fragment,be),be.forEach(c),le.forEach(c),this.h()},h(){m(s,"class","profile-image svelte-1l9b2f8"),Be(s.src,r="/profile_image.jpg")||m(s,"src",r),m(s,"alt","Jahirul Islam"),m(t,"class","mb-6"),m(a,"class","space-y-3"),m(f,"class","text-2xl font-bold"),m(B,"class","text-gray-400 italic my-2"),m(d,"class","mt-6 mb-4"),m(G,"class","text-2xl font-bold mb-3"),m(W,"class","grid md:grid-cols-2 gap-4"),m(C,"class","mt-6 mb-4")},m(b,A){S(b,t,A),u(t,s),S(b,e,A),S(b,a,A),u(a,l),u(l,i),u(a,o),u(a,w),u(w,k),u(a,y),u(a,h),u(h,D),S(b,_,A),S(b,d,A),u(d,f),u(f,v),u(d,K),u(d,B),u(B,q),u(d,oe),u(d,Z),J(F,Z,null),S(b,ee,A),S(b,C,A),u(C,G),u(G,ie),u(C,ce),u(C,W),J(T,W,null),te=!0},i(b){te||(E(F.$$.fragment,b),E(T.$$.fragment,b),te=!0)},o(b){I(F.$$.fragment,b),I(T.$$.fragment,b),te=!1},d(b){b&&c(t),b&&c(e),b&&c(a),b&&c(_),b&&c(d),M(F),b&&c(ee),b&&c(C),M(T)}}}function _t(n){let t,s,r;return s=new Ne({props:{$$slots:{default:[ht]},$$scope:{ctx:n}}}),{c(){t=g("div"),L(s.$$.fragment),this.h()},l(e){t=p(e,"DIV",{slot:!0});var a=$(t);H(s.$$.fragment,a),a.forEach(c),this.h()},h(){m(t,"slot","content")},m(e,a){S(e,t,a),J(s,t,null),r=!0},p(e,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:e}),s.$set(l)},i(e){r||(E(s.$$.fragment,e),r=!0)},o(e){I(s.$$.fragment,e),r=!1},d(e){e&&c(t),M(s)}}}function mt(n){let t,s,r;return s=new Te({props:{$$slots:{content:[_t],header:[dt]},$$scope:{ctx:n}}}),{c(){t=V(),L(s.$$.fragment),this.h()},l(e){Ae('[data-svelte="svelte-1ine71f"]',document.head).forEach(c),t=P(e),H(s.$$.fragment,e),this.h()},h(){document.title="About"},m(e,a){S(e,t,a),J(s,e,a),r=!0},p(e,[a]){const l={};a&1&&(l.$$scope={dirty:a,ctx:e}),s.$set(l)},i(e){r||(E(s.$$.fragment,e),r=!0)},o(e){I(s.$$.fragment,e),r=!1},d(e){e&&c(t),M(s,e)}}}class $t extends N{constructor(t){super();Q(this,t,null,mt,U,{})}}export{$t as default};
