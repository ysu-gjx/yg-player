(function(e){function t(t){for(var c,i,s=t[0],o=t[1],l=t[2],d=0,b=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);u&&u(t);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,s=1;s<n.length;s++){var o=n[s];0!==r[o]&&(c=!1)}c&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},r={app:0},a=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/yg-player/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=o;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"22e7":function(e,t,n){"use strict";n("d0e1")},"26e4":function(e,t,n){"use strict";n("bdb4")},"302c":function(e,t,n){"use strict";n("c8ea")},"38c9":function(e,t,n){},"4bc6":function(e,t,n){"use strict";n("f41d")},"503c":function(e,t,n){"use strict";n("62eb")},"55a9":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"currentSong",(function(){return qt}));var r={};n.r(r),n.d(r,"selectPlay",(function(){return Dt})),n.d(r,"randomPlay",(function(){return Gt}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function i(e,t,n,c,r,i){var s=Object(a["y"])("m-header"),o=Object(a["y"])("tab"),l=Object(a["y"])("router-view");return Object(a["q"])(),Object(a["e"])(a["a"],null,[Object(a["g"])(s),Object(a["g"])(o),Object(a["g"])(l)],64)}var s=Object(a["I"])("data-v-407aa0df");Object(a["t"])("data-v-407aa0df");var o={class:"header"},l=Object(a["g"])("span",{class:"icon"},null,-1),u=Object(a["g"])("h1",{class:"text"},"Chicken Music",-1),d=Object(a["g"])("i",{class:"icon-mine"},null,-1);Object(a["r"])();var b=s((function(e,t,n,c,r,i){var b=Object(a["y"])("router-link");return Object(a["q"])(),Object(a["e"])("div",o,[l,u,Object(a["g"])(b,{to:"/user",class:"mine"},{default:s((function(){return[d]})),_:1})])})),O={name:"m-header"},j=(n("78e1"),n("d959")),f=n.n(j);const g=f()(O,[["render",b],["__scopeId","data-v-407aa0df"]]);var p=g,v=(n("b0c0"),Object(a["I"])("data-v-7c06ae7a"));Object(a["t"])("data-v-7c06ae7a");var m={class:"tab"},h={class:"tab-link"};Object(a["r"])();var A=v((function(e,t,n,c,r,i){var s=Object(a["y"])("router-link");return Object(a["q"])(),Object(a["e"])("div",m,[(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["w"])(r.tabs,(function(e){return Object(a["q"])(),Object(a["e"])(s,{key:e.path,to:e.path,class:"tab-item"},{default:v((function(){return[Object(a["g"])("span",h,Object(a["C"])(e.name),1)]})),_:2},1032,["to"])})),128))])})),y={name:"tab",data:function(){return{tabs:[{name:"推荐",path:"/recommend"},{name:"歌手",path:"/singer"},{name:"排行",path:"/top-list"},{name:"搜索",path:"/search"}]}}};n("817a");const I=f()(y,[["render",A],["__scopeId","data-v-7c06ae7a"]]);var S=I,w={components:{MHeader:p,Tab:S}};const x=f()(w,[["render",i]]);var k=x,C=n("6c02"),q=Object(a["I"])("data-v-4df07bea");Object(a["t"])("data-v-4df07bea");var R={class:"recommend"},M={class:"slider-wrapper"},T={class:"slider-content"},L={class:"recommend-list"},z={class:"list-title"},D={class:"icon"},G={width:"60",height:"60",alt:""},Z={class:"text"},B={class:"name"},J={class:"title"};Object(a["r"])();var H=q((function(e,t,n,c,r,i){var s=Object(a["y"])("slider"),o=Object(a["y"])("scroll"),l=Object(a["z"])("lazy"),u=Object(a["z"])("loading");return Object(a["G"])((Object(a["q"])(),Object(a["e"])("div",R,[Object(a["g"])(o,{class:"recommend-content"},{default:q((function(){return[Object(a["g"])("div",null,[Object(a["g"])("div",M,[Object(a["g"])("div",T,[r.sliders.length?(Object(a["q"])(),Object(a["e"])(s,{key:0,sliders:r.sliders},null,8,["sliders"])):Object(a["f"])("",!0)])]),Object(a["g"])("div",L,[Object(a["G"])(Object(a["g"])("h1",z,"热门歌单推荐",512),[[a["E"],!i.loading]]),Object(a["g"])("ul",null,[(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["w"])(r.albums,(function(e){return Object(a["q"])(),Object(a["e"])("li",{class:"item",key:e.id},[Object(a["g"])("div",D,[Object(a["G"])(Object(a["g"])("img",G,null,512),[[l,e.pic]])]),Object(a["g"])("div",Z,[Object(a["g"])("h2",B,Object(a["C"])(e.username),1),Object(a["g"])("p",J,Object(a["C"])(e.title),1)])])})),128))])])])]})),_:1})],512)),[[u,i.loading,r.loadingText]])})),P=n("1da1"),Y=(n("96cf"),n("bc3a")),E=n.n(Y),Q=0,W="/";function N(e,t){return E.a.get(e,{params:t}).then((function(e){var t=e.data;if(t.code===Q)return t.result})).catch((function(e){console.log(e)}))}function U(){return N("/api/getRecommend")}E.a.defaults.baseURL=W;n("9911");var F=Object(a["I"])("data-v-f9a1039e");Object(a["t"])("data-v-f9a1039e");var V={class:"slider",ref:"rootRef"},K={class:"slider-group"},X={class:"dots-wrapper"};Object(a["r"])();var _=F((function(e,t,n,c,r,i){return Object(a["q"])(),Object(a["e"])("div",V,[Object(a["g"])("div",K,[(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["w"])(n.sliders,(function(e,t){return Object(a["q"])(),Object(a["e"])("div",{class:"slider-page",key:t},[Object(a["g"])("a",{href:e.link},[Object(a["g"])("img",{src:e.pic,alt:""},null,8,["src"])],8,["href"])])})),128))]),Object(a["g"])("div",X,[(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["w"])(n.sliders,(function(e,t){return Object(a["q"])(),Object(a["e"])("span",{class:["dot",{active:c.currentPageIndex===t}],key:t},null,2)})),128))])],512)})),$=n("229e"),ee=n("2bb4");function te(e){var t=Object(a["v"])(null),n=Object(a["v"])(0);return Object(a["o"])((function(){var c=t.value=new $["a"](e.value,{click:!0,scrollX:!0,scrollY:!1,momentum:!1,bounce:!1,probeType:2,slide:!0});c.on("slideWillChange",(function(e){n.value=e.pageX}))})),Object(a["p"])((function(){t.value.destroy()})),{slider:t,currentPageIndex:n}}$["a"].use(ee["a"]);var ne={props:{sliders:{type:Array,default:function(){return[]}}},setup:function(){var e=Object(a["v"])(null),t=te(e),n=t.currentPageIndex;return{rootRef:e,currentPageIndex:n}}};n("503c");const ce=f()(ne,[["render",_],["__scopeId","data-v-f9a1039e"]]);var re=ce,ae={ref:"rootRef"};function ie(e,t,n,c,r,i){return Object(a["q"])(),Object(a["e"])("div",ae,[Object(a["x"])(e.$slots,"default")],512)}n("a9e3");var se=n("5530"),oe=n("2cd8");function le(e,t,n){var c=Object(a["v"])(null);return Object(a["o"])((function(){var r=c.value=new $["a"](e.value,Object(se["a"])({observeDOM:!0},t));t.probeType>0&&r.on("scroll",(function(e){n("scroll",e)}))})),Object(a["p"])((function(){c.value.destroy()})),c}$["a"].use(oe["a"]);var ue={props:{click:{type:Boolean,default:!0},probeType:{type:Number,default:0}},emits:["scroll"],setup:function(e,t){var n=t.emit,c=Object(a["v"])(null),r=le(c,e,n);return{rootRef:c,scroll:r}}};const de=f()(ue,[["render",ie]]);var be=de,Oe={name:"recommend",data:function(){return{sliders:[],albums:[],loadingText:"loading..."}},computed:{loading:function(){return!this.sliders.length&&!this.albums.length}},created:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,U();case 2:n=t.sent,e.sliders=n.sliders,e.albums=n.albums,console.log(n);case 6:case"end":return t.stop()}}),t)})))()},components:{Slider:re,Scroll:be}};n("22e7");const je=f()(Oe,[["render",H],["__scopeId","data-v-4df07bea"]]);var fe=je,ge=Object(a["I"])("data-v-2fc78b35");Object(a["t"])("data-v-2fc78b35");var pe={class:"singer"};Object(a["r"])();var ve=ge((function(e,t,n,c,r,i){var s=Object(a["y"])("index-list"),o=Object(a["y"])("router-view");return Object(a["q"])(),Object(a["e"])("div",pe,[Object(a["g"])(s,{data:r.singers,onSelect:i.selectSinger},null,8,["data","onSelect"]),Object(a["g"])(o,null,{default:ge((function(e){var t=e.Component;return[Object(a["g"])(a["b"],{appear:"",name:"slide"},{default:ge((function(){return[(Object(a["q"])(),Object(a["e"])(Object(a["A"])(t),{singer:r.selectedSinger},null,8,["singer"]))]})),_:2},1024)]})),_:1})])}));function me(){return N("/api/getSingerList")}function he(e){return N("/api/getSingerDetail",{mid:e.mid})}var Ae=Object(a["I"])("data-v-78f2ad76");Object(a["t"])("data-v-78f2ad76");var ye={ref:"groupRef"},Ie={class:"title"},Se={class:"avatar"},we={class:"name"},xe={class:"fixed-title"};Object(a["r"])();var ke=Ae((function(e,t,n,c,r,i){var s=Object(a["y"])("Scroll"),o=Object(a["z"])("lazy"),l=Object(a["z"])("loading");return Object(a["G"])((Object(a["q"])(),Object(a["e"])(s,{class:"index-list","probe-type":3,onScroll:c.onScroll,ref:"scrollRef"},{default:Ae((function(){return[Object(a["g"])("ul",ye,[(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["w"])(n.data,(function(e){return Object(a["q"])(),Object(a["e"])("li",{key:e.title,class:"group"},[Object(a["g"])("h2",Ie,Object(a["C"])(e.title),1),Object(a["g"])("ul",null,[(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["w"])(e.list,(function(e){return Object(a["q"])(),Object(a["e"])("li",{key:e.id,class:"item",onClick:function(t){return c.onItemClick(e)}},[Object(a["G"])(Object(a["g"])("img",Se,null,512),[[o,e.pic]]),Object(a["g"])("span",we,Object(a["C"])(e.name),1)],8,["onClick"])})),128))])])})),128))],512),Object(a["G"])(Object(a["g"])("div",{class:"fixed",style:c.fixedStyle},[Object(a["g"])("div",xe,Object(a["C"])(c.fixedTitle),1)],4),[[a["E"],c.fixedTitle]]),Object(a["g"])("div",{class:"shortcut",onTouchstart:t[1]||(t[1]=Object(a["H"])((function(){return c.onShortcutTouchStart&&c.onShortcutTouchStart.apply(c,arguments)}),["stop","prevent"])),onTouchmove:t[2]||(t[2]=Object(a["H"])((function(){return c.onShortcutTouchMove&&c.onShortcutTouchMove.apply(c,arguments)}),["stop","prevent"])),onTouchend:t[3]||(t[3]=Object(a["H"])((function(){}),["stop","prevent"]))},[Object(a["g"])("ul",null,[(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["w"])(c.shortcutList,(function(e,t){return Object(a["q"])(),Object(a["e"])("li",{key:t,class:["item",{current:c.currentIndex===t}],"data-index":t},Object(a["C"])(e),11,["data-index"])})),128))])],32)]})),_:1},8,["onScroll"])),[[l,!n.data.length]])}));function Ce(e){var t=30,n=Object(a["v"])(null),c=Object(a["v"])([]),r=Object(a["v"])(0),i=Object(a["v"])(0),s=Object(a["v"])(0),o=Object(a["c"])((function(){var t=e.data[i.value];return r.value<0?"":t?t.title:""})),l=Object(a["c"])((function(){var e=s.value,n=e>0&&e<t?e-t:0;return{transform:"translate3d(0, ".concat(n,"px, 0)")}}));function u(){var e=n.value.children,t=c.value,r=0;t.length=0,t.push(r);for(var a=0;a<e.length;a++)r+=e[a].clientHeight,t.push(r)}function d(e){r.value=-e.y}return Object(a["F"])((function(){return e.data}),Object(P["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["l"])();case 2:u();case 3:case"end":return e.stop()}}),e)})))),Object(a["F"])(r,(function(e){for(var t=c.value,n=0;n<t.length-1;n++){var r=t[n],a=t[n+1];e>=r&&e<=a&&(i.value=n,s.value=a-e)}})),{groupRef:n,onScroll:d,fixedTitle:o,fixedStyle:l,currentIndex:i}}n("d81d");function qe(e,t){var n=18,c=Object(a["v"])(null),r=Object(a["c"])((function(){return e.data.map((function(e){return e.title}))})),i={};function s(e){i.y1=e.touches[0].pageY;var t=parseInt(e.target.dataset.index);i.anchorIndex=t,l(t)}function o(e){i.y2=e.touches[0].pageY;var t=(i.y2-i.y1)/n|0,c=i.anchorIndex+t;l(c)}function l(e){if(!isNaN(e)){e=Math.max(0,Math.min(r.value.length-1,e));var n=t.value.children[e],a=c.value.scroll;a.scrollToElement(n,0)}}return{shortcutList:r,onShortcutTouchStart:s,scrollRef:c,onShortcutTouchMove:o}}var Re={name:"index-list",props:{data:{type:Array,default:function(){return[]}}},emits:["select"],setup:function(e,t){var n=t.emit,c=Ce(e),r=c.groupRef,a=c.onScroll,i=c.fixedTitle,s=c.fixedStyle,o=c.currentIndex,l=qe(e,r),u=l.shortcutList,d=l.scrollRef,b=l.onShortcutTouchStart,O=l.onShortcutTouchMove;function j(e){n("select",e)}return{onItemClick:j,groupRef:r,onScroll:a,fixedTitle:i,fixedStyle:s,currentIndex:o,shortcutList:u,scrollRef:d,onShortcutTouchStart:b,onShortcutTouchMove:O}},components:{Scroll:be}};n("5f17");const Me=f()(Re,[["render",ke],["__scopeId","data-v-78f2ad76"]]);var Te=Me,Le=n("335a"),ze="__singer__",De={sequence:0,loop:1,random:2},Ge={name:"singer",data:function(){return{singers:[],selectedSinger:null}},created:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,me();case 2:n=t.sent,e.singers=n.singers,console.log(e.singers);case 5:case"end":return t.stop()}}),t)})))()},methods:{selectSinger:function(e){this.selectedSinger=e,this.cacheSinger(e),this.$router.push({path:"/singer/".concat(e.mid)})},cacheSinger:function(e){Le["a"].session.set(ze,e)}},components:{IndexList:Te}};n("6a7f");const Ze=f()(Ge,[["render",ve],["__scopeId","data-v-2fc78b35"]]);var Be=Ze,Je=Object(a["I"])("data-v-182294c8"),He=Je((function(e,t,n,c,r,i){return Object(a["q"])(),Object(a["e"])("div",null," 排行页面 ")})),Pe={name:"top-list"};const Ye=f()(Pe,[["render",He],["__scopeId","data-v-182294c8"]]);var Ee=Ye,Qe=Object(a["I"])("data-v-3a5d1b4c"),We=Qe((function(e,t,n,c,r,i){return Object(a["q"])(),Object(a["e"])("div",null," 搜索页面 ")})),Ne={name:"search"};const Ue=f()(Ne,[["render",We],["__scopeId","data-v-3a5d1b4c"]]);var Fe=Ue,Ve=Object(a["I"])("data-v-6d199bb0");Object(a["t"])("data-v-6d199bb0");var Ke={class:"singer-detail"};Object(a["r"])();var Xe=Ve((function(e,t,n,c,r,i){var s=Object(a["y"])("music-list");return Object(a["q"])(),Object(a["e"])("div",Ke,[Object(a["g"])(s,{songs:r.songs,pic:i.pic,title:i.title,loading:r.loading},null,8,["songs","pic","title","loading"])])}));n("d3b7"),n("4de4");function _e(e){return e.length?N("/api/getSongsUrl",{mid:e.map((function(e){return e.mid}))}).then((function(t){var n=t.map;return e.map((function(e){return e.url=n[e.mid],e})).filter((function(e){return e.url.indexOf("vkey")>-1}))})):Promise.resolve(e)}var $e=Object(a["I"])("data-v-59d4de14");Object(a["t"])("data-v-59d4de14");var et={class:"music-list"},tt=Object(a["g"])("i",{class:"icon-back"},null,-1),nt={class:"title"},ct=Object(a["g"])("i",{class:"icon-play"},null,-1),rt=Object(a["g"])("span",{class:"text"},"随机播放全部",-1),at={class:"song-list-wrapper"};Object(a["r"])();var it=$e((function(e,t,n,c,r,i){var s=Object(a["y"])("song-list"),o=Object(a["y"])("scroll"),l=Object(a["z"])("loading"),u=Object(a["z"])("no-result");return Object(a["q"])(),Object(a["e"])("div",et,[Object(a["g"])("div",{class:"back",onClick:t[1]||(t[1]=function(){return i.goBack&&i.goBack.apply(i,arguments)})},[tt]),Object(a["g"])("h1",nt,Object(a["C"])(n.title),1),Object(a["g"])("div",{class:"bg-image",style:i.bgImageStyle,ref:"bgImage"},[Object(a["g"])("div",{class:"play-btn-wrapper",style:i.playBtnStyle},[Object(a["G"])(Object(a["g"])("div",{class:"play-btn",onClick:t[2]||(t[2]=function(){return i.random&&i.random.apply(i,arguments)})},[ct,rt],512),[[a["E"],n.songs.length>0]])],4),Object(a["g"])("div",{class:"filter",style:i.filterStyle},null,4)],4),Object(a["G"])(Object(a["g"])(o,{class:"list",style:i.listStyle,"probe-type":3,onScroll:i.onScroll},{default:$e((function(){return[Object(a["g"])("div",at,[Object(a["g"])(s,{songs:n.songs,onSelect:i.selectItem},null,8,["songs","onSelect"])])]})),_:1},8,["style","onScroll"]),[[l,n.loading],[u,i.noResult,n.noResultText]])])})),st=(n("99af"),Object(a["I"])("data-v-5a515231"));Object(a["t"])("data-v-5a515231");var ot={class:"song-list"},lt={class:"content"},ut={class:"name"},dt={class:"desc"};Object(a["r"])();var bt=st((function(e,t,n,c,r,i){return Object(a["q"])(),Object(a["e"])("ul",ot,[(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["w"])(n.songs,(function(e,t){return Object(a["q"])(),Object(a["e"])("li",{class:"item",key:e.id,onClick:function(n){return i.selectItem(e,t)}},[Object(a["g"])("div",lt,[Object(a["g"])("h2",ut,Object(a["C"])(e.name),1),Object(a["g"])("p",dt,Object(a["C"])(i.getDesc(e)),1)])],8,["onClick"])})),128))])})),Ot={name:"song-list",props:{songs:{type:Array,default:function(){return[]}}},emits:["select"],methods:{getDesc:function(e){return"".concat(e.singer,"路").concat(e.album)},selectItem:function(e,t){this.$emit("select",{song:e,index:t})}}};n("fe32");const jt=f()(Ot,[["render",bt],["__scopeId","data-v-5a515231"]]);var ft=jt,gt=n("5502"),pt=40,vt={name:"music-list",props:{songs:Array,pic:String,title:String,loading:Boolean,noResultText:{type:String,default:"抱歉，没有找到可播放的歌曲"}},data:function(){return{imageHeight:0,scrollY:0,maxTranslateY:0}},computed:{noResult:function(){return!this.loading&&0===this.songs.length},playBtnStyle:function(){var e="";return this.scrollY>=this.maxTranslateY&&(e="none"),{display:e}},bgImageStyle:function(){var e=this.scrollY,t=0,n="70%",c=0,r=0,a=1;return e>this.maxTranslateY&&(t=10,n=0,c="".concat(pt,"px"),r=1),e<0&&(a=1+Math.abs(e/this.imageHeight)),{zIndex:t,paddingTop:n,height:c,backgroundImage:"url(".concat(this.pic,")"),transform:"scale(".concat(a,")translateZ(").concat(r,"px)")}},listStyle:function(){return{top:"".concat(this.imageHeight,"px")}},filterStyle:function(){var e=0,t=this.scrollY,n=this.imageHeight;return t>=0&&(e=20*Math.min(this.maxTranslateY/n,t/n)),{backdropFilter:"blur(".concat(e,"px)")}}},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.maxTranslateY=this.imageHeight-pt},methods:Object(se["a"])({goBack:function(){this.$router.back()},onScroll:function(e){this.scrollY=-e.y},selectItem:function(e){e.song;var t=e.index;this.selectPlay({list:this.songs,index:t})},random:function(){this.randomPlay(this.songs)}},Object(gt["c"])(["selectPlay","randomPlay"])),components:{Scroll:be,SongList:ft}};n("6b66");const mt=f()(vt,[["render",it],["__scopeId","data-v-59d4de14"]]);var ht=mt,At={name:"singer-detail",props:{singer:Object},data:function(){return{songs:[],loading:!0}},computed:{computedSinger:function(){var e=null,t=this.singer;if(t)e=t;else{var n=Le["a"].session.get(ze);n&&n.mid===this.$route.params.id&&(e=n)}return e},pic:function(){var e=this.computedSinger;return e&&e.pic},title:function(){var e=this.computedSinger;return e&&e.name}},components:{MusicList:ht},created:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var n,c,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.computedSinger,n){t.next=5;break}return c=e.$route.matched[0].path,e.$router.push({path:c}),t.abrupt("return");case 5:return t.next=7,he(n);case 7:return r=t.sent,t.next=10,_e(r.songs);case 10:e.songs=t.sent,e.loading=!1,console.log(e.songs);case 13:case"end":return t.stop()}}),t)})))()}};n("302c");const yt=f()(At,[["render",Xe],["__scopeId","data-v-6d199bb0"]]);var It=yt,St=[{path:"/",redirect:"/recommend"},{path:"/recommend",component:fe},{path:"/singer",component:Be,children:[{path:":id",component:It}]},{path:"/top-list",component:Ee},{path:"/search",component:Fe}],wt=Object(C["a"])({history:Object(C["b"])("/yg-player/"),routes:St}),xt=wt,kt={sequenceList:[],playList:[],playing:!1,playMode:De.sequence,currentIndex:0,fullScreen:!1},Ct=kt,qt=function(e){return e.playList[e.currentIndex]},Rt={setPlayingState:function(e,t){e.playing=t},setSequenceList:function(e,t){e.sequenceList=t},setPlayList:function(e,t){e.playList=t},setPlayMode:function(e,t){e.playMode=t},setCurrentIndex:function(e,t){e.currentIndex=t},setFullScreen:function(e,t){e.fullScreen=t}},Mt=Rt;n("fb6a");function Tt(e){for(var t=e.slice(),n=0;n<t.length;n++){var c=Lt(n);zt(t,n,c)}return t}function Lt(e){return Math.floor(Math.random()*(e+1))}function zt(e,t,n){var c=e[t];e[t]=e[n],e[n]=c}function Dt(e,t){var n=e.commit,c=t.list,r=t.index;n("setPlayMode",De.sequence),n("setSequenceList",c),n("setPlayingState",!0),n("setFullScreen",!0),n("setPlayList",c),n("setCurrentIndex",r)}function Gt(e,t){var n=e.commit;n("setPlayMode",De.random),n("setSequenceList",t),n("setPlayingState",!0),n("setFullScreen",!0),n("setPlayList",Tt(t)),n("setCurrentIndex",0)}var Zt=!1,Bt=Object(gt["b"])({state:Ct,getters:c,mutations:Mt,actions:r,strict:Zt,plugins:Zt?[Object(gt["a"])()]:[]}),Jt=n("a468"),Ht=n("73ff"),Pt=n.n(Ht),Yt=Object(a["I"])("data-v-624c8e48");Object(a["t"])("data-v-624c8e48");var Et={class:"loading"},Qt={class:"loading-content"},Wt=Object(a["g"])("img",{width:"24",height:"24",src:Pt.a},null,-1),Nt={class:"desc"};Object(a["r"])();var Ut=Yt((function(e,t,n,c,r,i){return Object(a["q"])(),Object(a["e"])("div",Et,[Object(a["g"])("div",Qt,[Wt,Object(a["g"])("p",Nt,Object(a["C"])(r.title),1)])])})),Ft={name:"loading",data:function(){return{title:"正在载入..."}},methods:{setTitle:function(e){this.title=e}}};n("4bc6");const Vt=f()(Ft,[["render",Ut],["__scopeId","data-v-624c8e48"]]);var Kt=Vt;n("caad");function Xt(e,t){e.classList.contains(t)||e.classList.add(t)}function _t(e,t){e.classList.remove(t)}var $t="g-relative";function en(e){var t=e.name;return{mounted:function(c,r){var i=Object(a["d"])(e),s=i.mount(document.createElement("div"));c[t]||(c[t]={}),c[t].instance=s;var o=r.arg;"undefined"!==typeof o&&s.setTitle(o),r.value&&n(c)},updated:function(e,r){var a=r.arg;"undefined"!==typeof a&&e[t].instance.setTitle(a),r.value!==r.oldValue&&(r.value?n(e):c(e))}};function n(e){var n=getComputedStyle(e);["fixed","relavive","absolute"].includes(n.position)||Xt(e,$t),e.appendChild(e[t].instance.$el)}function c(e){_t(e,$t),e.removeChild(e[t].instance.$el)}}var tn=en(Kt),nn=Object(a["I"])("data-v-257babda");Object(a["t"])("data-v-257babda");var cn={class:"no-result"},rn={class:"no-result-content"},an=Object(a["g"])("div",{class:"icon"},null,-1),sn={class:"text"};Object(a["r"])();var on=nn((function(e,t,n,c,r,i){return Object(a["q"])(),Object(a["e"])("div",cn,[Object(a["g"])("div",rn,[an,Object(a["g"])("p",sn,Object(a["C"])(r.title),1)])])})),ln={name:"no-result",data:function(){return{title:"抱歉，没有结果"}},methods:{setTitle:function(e){this.title=e}}};n("26e4");const un=f()(ln,[["render",on],["__scopeId","data-v-257babda"]]);var dn=un,bn=en(dn);n("a41b");Object(a["d"])(k).use(Bt).use(xt).use(Jt["a"],{loading:n("6bcd")}).directive("loading",tn).directive("no-result",bn).mount("#app")},"5f17":function(e,t,n){"use strict";n("38c9")},"62eb":function(e,t,n){},"6a7f":function(e,t,n){"use strict";n("8095")},"6b66":function(e,t,n){"use strict";n("55a9")},"6bcd":function(e,t,n){e.exports=n.p+"img/default.cbc0e020.png"},"73ff":function(e,t){e.exports="data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+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"},"78e1":function(e,t,n){"use strict";n("d751")},8095:function(e,t,n){},"817a":function(e,t,n){"use strict";n("9471")},9471:function(e,t,n){},a41b:function(e,t,n){},bdb4:function(e,t,n){},c8ea:function(e,t,n){},d0e1:function(e,t,n){},d751:function(e,t,n){},e616:function(e,t,n){},f41d:function(e,t,n){},fe32:function(e,t,n){"use strict";n("e616")}});
//# sourceMappingURL=app.248fa652.js.map