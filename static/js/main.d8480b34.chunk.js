(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(44)},42:function(e,t){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),i=a.n(o),l=a(22),c=a(11),s=a(8),m=a(14),p=a(12),u=a(15),h=a(48),b=a(49),y=a(46),d=a(45),f=a(47),_=function(e){return e.markers.map(function(e,t){return r.a.createElement(d.a,{key:t,position:e.position},"item.popup && ",r.a.createElement(f.a,null,e.popup))})},O=a(5),g=a.n(O),E=a(28),v=a.n(E),j=a(29),k=a.n(j),N=g.a.icon({iconUrl:v.a,shadowUrl:k.a,iconAnchor:[13,41],popupAnchor:[0,-41]});g.a.Marker.prototype.options.icon=N;var w=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.center,a=e.zoom,n=e.maxZoom,o=e.geoJSON,i=e.markers;return r.a.createElement(h.a,{center:t,zoom:a,maxZoom:n},r.a.createElement(b.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}),r.a.createElement(_,{markers:i}),r.a.createElement(y.a,{data:o.fromHomeToAlevel,style:function(e){return e.properties}}))}}]),t}(n.Component),C=Object(l.b)(function(e){return{center:e.map.initialCenter,zoom:e.map.initialZoom,maxZoom:e.map.maxZoom,geoJSON:e.map.geoJSON,markers:e.map.markers}},null)(w),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={visibility:!1},a.handleClick=function(){return a.setState(function(e){return{visibility:!e.visibility}})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.visibility;return r.a.createElement("header",{className:e?"header":"header header-hidden"},r.a.createElement("ul",{className:"header__list"},r.a.createElement("li",{className:"header__list__item"},r.a.createElement("button",{className:"header__list__item__button"},"test1")),r.a.createElement("li",{className:"header__list__item"},r.a.createElement("button",{className:"header__list__item__button"},"test2")),r.a.createElement("li",{className:"header__list__item"},r.a.createElement("button",{className:"header__list__item__button"},"test3"))),r.a.createElement("button",{className:"header__button",type:"button",onClick:this.handleClick},"Show menu"))}}]),t}(n.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(S,null),r.a.createElement(C,null))}}]),t}(n.Component),Z=a(9),A=a(31),J=(a(42),{map:{initialCenter:[49.964584,36.243356],initialZoom:13,maxZoom:19,geoJSON:{fromHomeToAlevel:{type:"FeatureCollection",features:[{type:"Feature",properties:{color:"blue",opacity:.7,weight:2},geometry:{type:"LineString",coordinates:[[36.24447584152222,49.93399985715558],[36.24511957168579,49.93339904657729],[36.24541997909546,49.93330926964071],[36.24594569206238,49.93341976430816],[36.248520612716675,49.93266701437029],[36.24914288520813,49.93242530318074],[36.25093460083007,49.93060207114826],[36.2514066696167,49.93021531609219],[36.25192165374755,49.93003575018973],[36.2623929977417,49.9308921354036],[36.26277923583984,49.93104407312632],[36.26211404800414,49.93209381157794],[36.262006759643555,49.9323838668551],[36.26041889190674,49.94243803722218],[36.26029014587402,49.94669109314266],[36.26020431518555,49.95279384847973],[36.25930309295654,49.961049286651686],[36.258788108825684,49.96411365428063],[36.25964641571044,49.971069872914505],[36.259474754333496,49.9717047158197],[36.25865936279296,49.97244995550095],[36.25359535217285,49.97636917424487],[36.251106262207024,49.97752831862053],[36.24565601348877,49.97998450846847],[36.2384033203125,49.983185646345525],[36.23857498168945,49.98348919146652],[36.23848915100098,49.983737545140855],[36.23793125152588,49.983875518850326],[36.237545013427734,49.98426184313156],[36.23595714569092,49.98583470281715],[36.23584985733032,49.985841601211256],[36.232019662857056,49.98464816431021],[36.23121500015259,49.98459297576037],[36.23092532157898,49.984530888566084],[36.23097896575928,49.98439291673635],[36.230517625808716,49.98439291673635],[36.23034596443176,49.987504085342984]]}},{type:"Feature",properties:{color:"#2e8921",fillOpacity:.2,fillColor:"#80ff33",opacity:1,weight:2},geometry:{type:"Polygon",coordinates:[[[36.24971956014633,49.93440729914742],[36.25346928834915,49.93450397979233],[36.253504157066345,49.934156964433384],[36.25454753637314,49.9341794082884],[36.2545046210289,49.93502708777476],[36.250647604465485,49.93665507397001],[36.25006556510925,49.93664471580117],[36.25009506940842,49.935885110684005],[36.248515248298645,49.93582641342655],[36.24854743480682,49.93512031434375],[36.249660551548004,49.9351254935923],[36.24971956014633,49.93440729914742]]]}},{type:"Feature",properties:{color:"#aa0000",fillOpacity:.2,fillColor:"#ff0000",opacity:1,weight:2},geometry:{type:"Polygon",coordinates:[[[36.251245737075806,49.933449114411594],[36.252726316452026,49.93349918219387],[36.2529194355011,49.93357169406217],[36.25304013490676,49.93366319697837],[36.253080368041985,49.93377196436975],[36.25304013490676,49.934015395260836],[36.25293552875519,49.934105170881914],[36.252769231796265,49.93416559668657],[36.251277923583984,49.93412934121287],[36.25109285116196,49.934082726992315],[36.250915825366974,49.93398259258834],[36.25081926584244,49.93382375827935],[36.250872910022736,49.93364593229051],[36.251095533370965,49.93349918219387],[36.251245737075806,49.933449114411594]]]}}]}},markers:[{popup:"A-level",position:[49.987504085342984,36.23034596443176]},{popup:"Bad location for life =)",position:[49.93399985715558,36.24447584152222]}],error:null,isFetching:!1}}),F=Object(Z.c)({map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J.map,t=arguments.length>1?arguments[1]:void 0;t.type,t.payload;return e}}),z=Object(Z.d)(F,J,Object(Z.a)(A.a));a(43);i.a.render(r.a.createElement(l.a,{store:z},r.a.createElement(x,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.d8480b34.chunk.js.map