(function(e){function t(t){for(var r,s,o=t[0],c=t[1],l=t[2],p=0,d=[];p<o.length;p++)s=o[p],n[s]&&d.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},i=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-column vh-100 avenir",attrs:{id:"app"}},[a("div",{staticClass:"flex flex-auto",attrs:{id:"middle"}},[a("div",{staticClass:"br b--light-gray overflow-auto pa2-ns",class:{collapsed:!e.sidebarOpen},attrs:{id:"sidebar"}},[a("div",{staticClass:"container br bg-white b--light-gray overflow-auto pa2 bw2"},[a("h3",[e._v("Carte d’entraide & de soutien aux soignants Covid-19")]),a("CategoryFilter",{staticClass:"mb4"}),a("FeatureInfo"),a("div",{staticClass:"tc"},[a("div",{staticClass:"dib ba b--dark-blue dim pointer pa3 bg-blue white br1",on:{click:function(t){e.sidebarOpen=!1}}},[e._v("Voir la carte")])]),e._m(0)],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.sidebarOpen,expression:"!sidebarOpen"}],staticClass:"relative br b--gray bw2",staticStyle:{width:"20px"},attrs:{id:"sidebar-rim"},on:{click:function(t){e.sidebarOpen=!0}}}),a("div",{staticClass:"relative flex-auto",attrs:{id:"map-container"}},[a("Map"),a("div",{staticClass:"absolute bg-white f3 br bt bb br--right br-100 b--magenta bw1 magenta pa1 pointer grow fw8",attrs:{id:"sidebarToggle"},on:{click:function(t){e.sidebarOpen=!e.sidebarOpen}}},[e.sidebarOpen?e._e():a("span",[e._v("→")]),e.sidebarOpen?a("span",[e._v("←")]):e._e()]),a("div",{staticClass:"absolute",attrs:{id:"overlay"}})],1)]),a("div",{staticClass:"bt b--light-gray flex-none",attrs:{id:"bottom"}})])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Ajoute tes souhaits ou tes propositions d’aides via le formulaire en ligne "),a("a",{attrs:{href:"https://framaforms.org/entraide-soutien-aux-soignants-covid-19-1585006214"}},[e._v("ici")]),e._v(".")])}],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"absolute absolute--fill",attrs:{id:"map"}})},o=[],c=a("f499"),l=a.n(c),u=a("75fc"),p=(a("96cf"),a("3b8d")),d=a("e192"),f=a.n(d),v=a("ef12"),h=a.n(v),g=a("7914"),m=new r["a"],b=(a("ac6d"),{data:function(){return{selectedId:-1}},mounted:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,a,r,n,i=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return f.a.accessToken="pk.eyJ1Ijoic3RldmFnZSIsImEiOiJjazNmNGV5enAwMTF1M2tuejhtc2twcXo5In0.mLPrYIYJ2FiFZ3KMqVIj6w",t=new f.a.Map({container:"map",center:[-149.3296,-17.5697],zoom:10,style:"mapbox://styles/mapbox/streets-v11",hash:"loc"}),h.a.init(t,f.a),window.map=t,window.app.Map=this,t.U.loadImage("Je propose","offer-marker.png"),t.U.loadImage("Je cherche","demand-marker.png"),t.U.loadImage("Je propose-selected","offer-marker-selected.png"),t.U.loadImage("Je cherche-selected","demand-marker-selected.png"),a="2PACX-1vQZHOrhL8jW3t5R7Zr1lsZOg7WlOTvH8_F6kP5dCJn0oRsSwhLWAdM_odXCjFukhjZuPuZAH4Z4Ydy-",e.next=12,Object(g["a"])(a);case 12:r=e.sent,t.U.onLoad(function(){t.U.setFillColor("water","hsl(200,50%,90%)"),t.U.addGeoJSON("points",r,{generateId:!0}),t.U.addSymbol("points-pins","points",i.iconStyle),t.U.hoverPointer("points-pins"),t.on("click","points-pins",function(e){console.log(e.features[0]),m.$emit("select-feature",e.features[0]),n&&t.setFeatureState(n,{selected:!1}),i.selectedId=e.features[0].id,n={source:"points",id:e.features[0].id},t.setFeatureState(n,{selected:!0}),i.$nextTick(function(){return t.U.setLayerStyle("points-pins",i.iconStyle)})}),t.U.hoverPopup("points-pins",function(e){return"<h3>".concat(e.properties.Categorie,"</h3> ").concat(e.properties.Description,"</h3>")})}),m.$on("filter-change",function(e){var a=["any"].concat(Object(u["a"])(e.map(function(e){return!!e.state&&["==",["get","Categorie"],e.category]})));console.log(l()(a,2)),t.U.setFilter("points-pins",a)});case 15:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),computed:{iconStyle:function(){return console.log("iconstyle",this.selectedId),{iconImage:["case",["==",["get","id"],this.selectedId],["concat",["get","Categorie"],"-selected"],["get","Categorie"]],iconSize:this.iconSize,iconOffset:[0,-60],iconAllowOverlap:!0}},iconSize:function(){return["interpolate",["linear"],["zoom"],9,["case",["==",["get","id"],this.selectedId||null],.25,.125],11,["case",["==",["get","id"],this.selectedId||null],.375,.25]]}}}),_=b,y=a("2877"),w=Object(y["a"])(_,s,o,!1,null,"03175822",null);w.options.__file="Map.vue";var C=w.exports,O=function(){var e,t=this,a=t.$createElement,r=t._self._c||a;return t.p?r("div",{staticClass:"ba bw2 br4 b--light-gray pa2 mb5",class:(e={},e[t.p.Type]=!0,e)},[t.imageUrl?r("img",{staticClass:"image",attrs:{src:t.imageUrl}}):t._e(),r("h1",{staticClass:"f3"},[t._v(t._s(t.p.Identification))]),r("div",[r("div",{staticClass:"dib b ba br4 b--light-blue pa2"},[t._v(t._s(t.p.Categorie))])]),r("p",[t._v(t._s(t.p.Description))]),r("table",[t.p.Conditions.trim()?r("tr",[r("th",[t._v("Conditions")]),r("td",[t._v(t._s(t.p.Conditions))])]):t._e(),t.p.Commentaires.trim()?r("tr",{staticClass:"i"},[r("th",[t._v("Commentaires")]),r("td",[t._v(t._s(t.p.Commentaires))])]):t._e(),t.p.Date.trim()?r("tr",[r("th",[t._v("Date")]),r("td",[t._v(t._s(t.p.Date))])]):t._e(),t.p.Phone?r("tr",[r("th",[t._v("Phone")]),r("td",[t._v(t._s(t.p.Phone))])]):t._e(),t.p.Email?r("tr",[r("th",[t._v("Email")]),r("td",[t._v(t._s(t.p.Email))])]):t._e(),t.p.OtherContact?r("tr",[r("th",[t._v("Contact")]),r("td",[t._v(t._s(t.p.OtherContact))])]):t._e()])]):t._e()},x=[],k={name:"FeatureInfo",data:function(){return{feature:void 0,ignoreProps:["id","Longitude","Latitude","image_url"]}},computed:{p:function(){return this.feature&&this.feature.properties},imageUrl:function(){return this.p&&this.p.image_url}},created:function(){var e=this;window.app.FeatureInfo=this,m.$on("select-feature",function(t){return e.feature=t})}},I=k,j=(a("a258"),Object(y["a"])(I,O,x,!1,null,"17ffe74c",null));j.options.__file="FeatureInfo.vue";var F=j.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"CategoryFilter"}},[a("h4",{staticClass:"mb0"},[e._v("Montrer:")]),e._l(e.categories,function(t,r){return a("div",{staticClass:"mv2"},[a("label",{staticClass:"pa1",attrs:{for:"category-"+r}},[a("img",{staticClass:"w1 v-mid",attrs:{src:t.icon}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.state,expression:"category.state"}],staticClass:"ma1",attrs:{id:"category-"+r,type:"checkbox"},domProps:{checked:Array.isArray(t.state)?e._i(t.state,null)>-1:t.state},on:{change:[function(a){var r=t.state,n=a.target,i=!!n.checked;if(Array.isArray(r)){var s=null,o=e._i(r,s);n.checked?o<0&&e.$set(t,"state",r.concat([s])):o>-1&&e.$set(t,"state",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(t,"state",i)},e.filterChange]}}),e._v(e._s(t.label||t.category))])])})],2)},P=[],$={name:"CategoryFilter",data:function(){return{categories:[{category:"Je cherche",categories:[],state:!0,icon:"demand-marker.png"},{category:"Je propose",categories:[],state:!0,icon:"offer-marker.png"}]}},created:function(){window.CategoryFilter=this},methods:{filterChange:function(){m.$emit("filter-change",this.categories)}}},U=$,M=Object(y["a"])(U,S,P,!1,null,"753ebc9e",null);M.options.__file="CategoryFilter.vue";var J=M.exports;window.app={};var A={name:"app",components:{Map:C,FeatureInfo:F,CategoryFilter:J},data:function(){return{sidebarOpen:!0}},created:function(){var e=this;window.app.App=this,m.$on("select-feature",function(){return e.sidebarOpen=!0})},watch:{sidebarOpen:function(){this.$nextTick(function(){return window.map.resize()})}}};a("948e");var T=A,E=(a("a5d2"),Object(y["a"])(T,n,i,!1,null,null,null));E.options.__file="App.vue";var Z=E.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(Z)}}).$mount("#app")},a258:function(e,t,a){"use strict";var r=a("c16f"),n=a.n(r);n.a},a5d2:function(e,t,a){"use strict";var r=a("f809"),n=a.n(r);n.a},c16f:function(e,t,a){},f809:function(e,t,a){}});
//# sourceMappingURL=app.c2c11f82.js.map