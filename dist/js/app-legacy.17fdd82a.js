(function(){"use strict";var t={4720:function(t,e,n){n(7057);var r=n(1911),a=(n(4663),n(338)),i=(n(8737),n(6632)),u=(n(6624),n(8235)),o=(n(2943),n(7735)),s=(n(9735),n(520)),c=(n(4112),n(5263)),l=(n(5758),n(976)),f=(n(6283),n(1197)),p=(n(8538),n(5992)),v=(n(6992),n(8674),n(9601),n(7727),n(8935)),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},d=[],m={name:"MusicAppApp"},Z=m,_=n(1001),y=(0,_.Z)(Z,h,d,!1,null,"4297f299",null),b=y.exports,w=n(2809),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"header"},[t._v("推荐歌单")]),n("van-row",{attrs:{type:"flex",justify:"space-between",gutter:"6"}},t._l(t.resList,(function(e){return n("van-col",{key:e.id,attrs:{span:"8"}},[n("van-image",{attrs:{fit:"contain",width:"100",height:"100",src:e.picUrl}}),n("p",[t._v(t._s(e.name))])],1)})),1),n("div",{staticClass:"header"},[t._v("推荐歌单")]),t._l(t.newsongList,(function(e){return n("van-cell",{key:e.id,attrs:{title:e.name,center:"",label:e.song.artists[0].name},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("van-icon",{attrs:{name:"play-circle-o"}})]},proxy:!0}],null,!0)})}))],2)},x=[],O=n(7906),k=n(6198),$=n(6166),L=n.n($);L().defaults.baseURL="https://netease-cloud-music-api-sooty-phi.vercel.app/";var j=L(),E=function(t){return j({url:"/personalized",params:t})},C=function(t){return j({url:"/personalized/newsong",params:t})},I=E,T=C,z={name:"HomeIndex",data:function(){return{resList:[],newsongList:[]}},created:function(){var t=this;return(0,k.Z)((0,O.Z)().mark((function e(){var n,r;return(0,O.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,I({limit:6});case 2:return n=e.sent,t.resList=n.data.result,e.next=6,T();case 6:r=e.sent,t.newsongList=r.data.result;case 8:case"end":return e.stop()}}),e)})))()}},A=z,M=(0,_.Z)(A,g,x,!1,null,"d5fb055c",null),P=M.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("search")])])}],F={name:"SearchIndex"},H=F,R=(0,_.Z)(H,S,U,!1,null,"20970110",null),q=R.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:t.layout_title,fixed:""}}),n("router-view"),n("van-tabbar",{attrs:{route:""}},[n("van-tabbar-item",{attrs:{replace:"",to:"/layout/home",icon:"home-o"}},[t._v("首页")]),n("van-tabbar-item",{attrs:{replace:"",to:"/layout/search",icon:"search"}},[t._v("搜索")])],1)],1)},D=[],G={name:"LayoutIndex",data:function(){return{layout_title:this.$route.meta.title}},watch:{$route:function(){this.layout_title=this.$route.meta.title}}},J=G,K=(0,_.Z)(J,B,D,!1,null,"65ec382a",null),N=K.exports;v.Z.use(w.Z);var Q=[{path:"/",redirect:"/layout"},{path:"/layout",redirect:"/layout/home",component:N,children:[{path:"home",component:P,meta:{title:"首页"}},{path:"search",component:q,meta:{title:"搜索"}}]}],V=new w.Z({routes:Q}),W=V;v.Z.config.productionTip=!1,v.Z.use(p.Z),v.Z.use(f.Z),v.Z.use(l.Z),v.Z.use(c.Z),v.Z.use(s.Z),v.Z.use(o.Z),v.Z.use(u.Z),v.Z.use(i.Z),v.Z.use(a.Z),v.Z.use(r.Z),new v.Z({router:W,render:function(t){return t(b)}}).$mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,i){if(!r){var u=1/0;for(l=0;l<t.length;l++){r=t[l][0],a=t[l][1],i=t[l][2];for(var o=!0,s=0;s<r.length;s++)(!1&i||u>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(o=!1,i<u&&(u=i));if(o){t.splice(l--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,i,u=r[0],o=r[1],s=r[2],c=0;if(u.some((function(e){return 0!==t[e]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(s)var l=s(n)}for(e&&e(r);c<u.length;c++)i=u[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkmusic_app"]=self["webpackChunkmusic_app"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4720)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.17fdd82a.js.map