(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[15],{130:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var a=r(62),n=r(132),i=r(6),c=function(t){var e=Object(i.useState)(null),r=Object(a.a)(e,2),c=r[0],o=r[1];return Object(i.useEffect)((function(){var e=t.current,r=new n.a((function(t,e){t.forEach((function(t,e){o(t.contentRect)}))}));return r.observe(e),function(){r.unobserve(e)}}),[t]),c}},311:function(t,e,r){"use strict";r.r(e);var a=r(93),n=r(111),i=r.n(n),c=r(139),o=r(16),s=r(130),l=r(23),u=r(207),d=r(304),p=r(94),f=r(292),m=r(279),v=r(298),h=r(270),b=r(133),O=r(206),j=r(126),g=r(268),T=r(6),S=r.n(T),x=r(308);var k=function(t){t.data;var e=t.mapScale,r=t.mapOption,a=t.statistic,n=Object(x.a)().t,i=Object(T.useRef)(null),c=Object(T.useRef)(),k=Object(s.a)(c);return Object(T.useEffect)((function(){var t=Object(g.a)(i.current),s=k||c.current.getBoundingClientRect(),T=s.width,S=s.height;if(!T||!S){var x=c.current.getBoundingClientRect();T=x.width,S=x.height}if(r===o.h.HOTSPOTS){var y=t.transition().duration(o.b);t.select(".ramp").transition(y).attr("opacity",0).attr("xlink:href",null),t.select(".bars").selectAll("rect").transition(y).attr("opacity",0).remove(),t.selectAll(".axis > *:not(.axistext)").remove(),t.select(".axistext").text("");var A=e.domain()[1];t.select(".circles").attr("transform","translate(48,40)").attr("text-anchor","middle").selectAll("circle").data([A/10,2*A/5,A]).join("circle").attr("fill","none").attr("stroke","#ccc").transition(y).attr("cy",(function(t){return-e(t)})).attr("r",e);var w=e.copy().range([0,-2*e(A)]);t.select(".circleAxis").attr("transform","translate(48,50)").transition(y).call(Object(p.b)(w).tickSize(0).tickPadding(0).tickValues([A/10,2*A/5,A]).tickFormat(Object(f.a)("0~s"))).selectAll(".tick text").style("text-anchor","middle"),t.select(".circleAxis").call((function(t){return t.select(".domain").remove()}))}else t.call((function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.svg,r=t.color,a=t.title,n=t.tickSize,i=void 0===n?6:n,c=t.width,s=void 0===c?320:c,l=t.height,g=void 0===l?44+i:l,T=t.marginTop,S=void 0===T?18:T,x=t.marginRight,k=void 0===x?0:x,y=t.marginBottom,A=void 0===y?16+i:y,w=t.marginLeft,N=void 0===w?0:w,R=t.ticks,M=void 0===R?s/64:R,C=t.tickFormat,I=t.tickValues,L=t.ordinalWeights;e.selectAll(".circles > *").remove(),e.selectAll(".circleAxis > *").remove();var P,_=e.transition().duration(o.b),D=function(t){t.selectAll(".tick line").attr("y1",S+A-g)};if(r.interpolate){var H=Math.min(r.domain().length,r.range().length);P=r.copy().rangeRound(Object(m.a)(Object(v.a)(N,s-k),H)),e.select(".ramp").attr("class","ramp").attr("x",N).attr("y",S).attr("width",s-N-k).attr("height",g-S-A).attr("preserveAspectRatio","none").attr("xlink:href",E(r.copy().domain(Object(m.a)(Object(v.a)(0,1),H))).toDataURL())}else if(r.interpolator){if(e.select(".bars").selectAll("rect").transition(_).attr("opacity",0).remove(),P=Object.assign(r.copy().interpolator(Object(h.a)(N,s-k)),{range:function(){return[N,s-k]}}),e.select(".ramp").attr("class","ramp").attr("x",N).attr("y",S).attr("width",s-N-k).attr("height",g-S-A).attr("preserveAspectRatio","none").attr("xlink:href",E(r.interpolator()).toDataURL()).transition(_).attr("opacity",1),!P.ticks){if(void 0===I){var F=Math.round(M+1);I=Object(u.a)(F).map((function(t){return Object(d.a)(r.domain(),t/(F-1))}))}"function"!==typeof C&&(C=Object(f.a)(void 0===C?",f":C))}}else if(r.invertExtent){var z=r.thresholds?r.thresholds():r.quantiles?r.quantiles():r.domain(),Z=void 0===C?function(t){return t}:"string"===typeof C?Object(f.a)(C):C;P=Object(b.a)().domain([-1,r.range().length-1]).rangeRound([N,s-k]),e.append("g").selectAll("rect").data(r.range()).join("rect").attr("x",(function(t,e){return P(e-1)})).attr("y",S).attr("width",(function(t,e){return P(e)-P(e-1)})).attr("height",g-S-A).attr("fill",(function(t){return t})),I=Object(u.a)(-1,z.length),C=function(t){return-1===t?Z(1):t!==z.length-1?t===z.length-2?Z(z[t]+"+",t):Z(z[t],t):void 0}}else{if(e.select(".ramp").transition(_).attr("opacity",0).attr("xlink:href",null),L){var B=Object(b.a)().domain([0,L.reduce((function(t,e){return t+e}))]).rangeRound([0,s-N-k]),U=L.map((function(t,e){return L.slice(0,e).reduce((function(t,e){return t+B(e)}),N)}));P=Object(j.a)().domain(r.domain()).range(U),e.select(".bars").selectAll("rect").data(r.domain()).join((function(t){return t.append("rect").attr("x",P).attr("width",(function(t,e){return B(L[e])}))})).attr("y",S).attr("height",g-S-A).attr("fill",r).transition(_).attr("x",P).attr("width",(function(t,e){return B(L[e])})).attr("opacity",1)}else P=Object(O.a)().domain(r.domain()).rangeRound([N,s-k]),e.selectAll("rect").data(r.domain()).join("rect").attr("x",P).attr("y",S).attr("width",Math.max(0,P.bandwidth()-1)).attr("height",g-S-A).attr("fill",r);D=function(){}}return e.select(".axis").attr("transform","translate(0,".concat(g-A,")")).transition(_).attr("class","axis").call(Object(p.a)(P).ticks(M,"string"===typeof C?C:void 0).tickFormat("function"===typeof C?C:void 0).tickSize(i).tickValues(I)).on("start",(function(){e.call(D).call((function(t){return t.select(".domain").remove()}))})).call((function(t){return t.select(".axistext").attr("class","axistext").attr("x",N).attr("y",S+A-g-6).attr("fill","currentColor").attr("text-anchor","start").attr("font-weight","bold").text(a)})),e.node()}({svg:t,color:e,title:r===o.h.PER_MILLION?"".concat(n(Object(l.a)(a))," ").concat(n("cases per million")):"".concat(n(Object(l.a)(a))," ").concat(n("cases")),width:T,height:S,ticks:5,tickFormat:function(t,e,a){if(r!==o.h.TOTAL||Number.isInteger(t))return e===a.length-1?Object(l.f)(t)+"+":Object(l.f)(t)},marginLeft:2,marginRight:20})}));t.attr("class",r===o.h.ZONES?"zone":"")}),[n,k,e,r,a]),S.a.createElement("div",{className:"svg-parent maplegend",style:{height:o.f},ref:c},S.a.createElement("svg",{id:"legend",preserveAspectRatio:"xMidYMid meet",ref:i},S.a.createElement("image",{className:"ramp"}),S.a.createElement("g",{className:"bars"}),S.a.createElement("g",{className:"circles"}),S.a.createElement("g",{className:"circleAxis"}),S.a.createElement("g",{className:"axis"},S.a.createElement("text",{className:"axistext"}))),S.a.createElement("canvas",{className:"color-scale",style:{position:"absolute",height:0}}))};function E(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,r=Object(g.a)(".color-scale").node(),a=(r.width=e,r.height=1,r).getContext("2d"),n=0;n<e;++n)a.fillStyle=t(n/(e-1)),a.fillRect(n,0,1,1);return r}var y=r(211),A=r(285),w=r(290),N=r(295),R=r(224),M=r(312),C=r(280),I=r(281),L=r(282),P=r(283),_=r(284),D=r(148),H=r(101),F=r(286),z=r(102),Z=r(241),B={confirmed:function(t){return Object(C.a)(.85*t)},active:function(t){return Object(I.a)(.85*t)},recovered:function(t){return Object(L.a)(.85*t)},deceased:function(t){return Object(P.a)(.85*t)},tested:function(t){return Object(_.a)(.85*t)}},U=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Object(l.j)(t,"total",e,r)};e.default=function(t){var e,r,n=t.currentMap,s=t.data,u=t.changeMap,d=t.regionHighlighted,p=t.setRegionHighlighted,f=t.statistic,m=t.isCountryLoaded,v=Object(x.a)().t,h=Object(T.useRef)(null),b=o.g[n.code],O=Object(z.a)(b.geoDataFile,function(){var t=Object(c.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(A.a)(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{revalidateOnFocus:!1,suspense:!0}).data,E=Object(T.useMemo)((function(){var t=Object.keys(s).filter((function(t){return"TT"!==t&&Object.keys(o.g).includes(t)}));return n.view===o.k.STATES?Object(y.a)(t,(function(t){return U(s[t],f,n.option===o.h.PER_MILLION?o.t[t]:1)})):Object(y.a)(t,(function(t){var e;return(null===(e=s[t])||void 0===e?void 0:e.districts)?Object(y.a)(Object.values(s[t].districts),(function(t){return U(t,f)})):0}))}),[s,n.option,n.view,f]),C=Object(T.useMemo)((function(){return U(s[n.code],f,n.option===o.h.PER_MILLION?o.t[n.code]:1)}),[s,n.code,n.option,f]),I=Object(T.useMemo)((function(){return n.option===o.h.ZONES?Object(j.a)(Object.keys(o.y),Object.values(o.y)):n.option===o.h.HOTSPOTS?Object(R.b)([0,Math.max(E,1)],[0,40]).clamp(!0).nice(3):Object(M.a)([0,Math.max(1,E)],B[f]).clamp(!0)}),[n.option,f,E]);return Object(T.useEffect)((function(){var t=Z.a(O,O.objects[b.graphObjectStates||b.graphObjectDistricts]),e=Object(g.a)(h.current),r=Object(w.a)().fitSize([432,488],t),i=Object(N.a)(r),c=n.view===o.k.STATES?Z.a(O,O.objects[b.graphObjectStates]).features:b.mapType===o.j.COUNTRY&&n.option===o.h.HOTSPOTS?[].concat(Object(a.a)(Z.a(O,O.objects[b.graphObjectStates]).features),Object(a.a)(Z.a(O,O.objects[b.graphObjectDistricts]).features)):Z.a(O,O.objects[b.graphObjectDistricts]).features;c=c.map((function(t){var e=t.properties.district,r=t.properties.st_nm,a=Object.assign({},t);return a.id="".concat(n.code,"-").concat(r).concat(e?"-"+e:""),a}));var d=function(t){var e,r,a=o.p[t.properties.st_nm],i=t.properties.district,c=s[a],l=null===c||void 0===c||null===(e=c.districts)||void 0===e?void 0:e[i];return 0===(r=n.option===o.h.ZONES?(null===l||void 0===l?void 0:l.zone)||0:i?U(l,f):U(c,f,n.option===o.h.PER_MILLION?o.t[a]:1))?"#ffffff00":I(r)},m=function(t){return n.option===o.h.ZONES?"#343a40":o.a[f]},v=Object(H.a)().duration(o.b),j=null;e.select(".regions").selectAll("path").data(n.option!==o.h.HOTSPOTS?c:[],(function(t){return t.id})).join((function(t){var e=t.append("path").attr("d",i).attr("stroke-width",1.8).attr("stroke-opacity",0).style("cursor","pointer").on("mouseenter",(function(t){p({stateCode:o.p[t.properties.st_nm],districtName:t.properties.district})})).on("mouseleave",(function(t){j===t&&(j=null)})).on("touchstart",(function(t){j=j===t?null:t})).attr("fill",d).attr("stroke",m);return e.append("title"),e}),(function(t){return t.call((function(t){return t.transition(v).attr("fill",d).attr("stroke",m)}))})).attr("pointer-events","all").on("click",(function(t){var r;D.b.stopPropagation();var a=o.p[t.properties.st_nm];!j&&b.mapType!==o.j.STATE&&(null===(r=s[a])||void 0===r?void 0:r.districts)&&(e.attr("pointer-events","none"),e.select(".regions").selectAll("path").attr("pointer-events","none"),u(o.p[t.properties.st_nm]))})).select("title").text((function(t){if(n.option===o.h.TOTAL){var e,r,a=t.properties.st_nm,i=o.p[a],c=t.properties.district,u=s[i],d=null===u||void 0===u||null===(e=u.districts)||void 0===e?void 0:e[c];return r=U(c?d:u,f),Object(l.f)(r/(C||.001)*100)+"% from "+Object(l.b)(c||a)}})),e.transition().duration(b.mapType===o.j.STATE?v.duration()/2:0).on("end",(function(){return e.attr("class",n.option===o.h.ZONES?"zone":"")}));var T=[];n.option===o.h.HOTSPOTS&&(T=c.map((function(t){var e,r,a=o.p[t.properties.st_nm],n=t.properties.district,i=s[a],c=null===i||void 0===i||null===(e=i.districts)||void 0===e?void 0:e[n];return t.value=U(n?c:null===i||void 0===i||null===(r=i.districts)||void 0===r?void 0:r[o.x],f),t})).sort((function(t,e){return e.value-t.value}))),e.select(".circles").selectAll("circle").data(T,(function(t){return t.id})).join((function(t){return t.append("circle").attr("transform",(function(t){return"translate(".concat(i.centroid(t),")")})).attr("fill-opacity",.5).style("cursor","pointer").attr("pointer-events","all").on("mouseenter",(function(t){p({stateCode:o.p[t.properties.st_nm],districtName:t.properties.district||o.x})})).on("click",(function(){D.b.stopPropagation()}))})).transition(v).attr("fill",o.a[f]+"70").attr("stroke",o.a[f]+"70").attr("r",(function(t){return I(t.value)}));var S=[];b.mapType===o.j.COUNTRY&&((S=[Z.b(O,O.objects[b.graphObjectStates])])[0].id=b.graphObjectStates);var x=[];n.view===o.k.DISTRICTS&&((x=[Z.b(O,O.objects[b.graphObjectDistricts])])[0].id=b.graphObjectDistricts),e.select(n.view===o.k.STATES?".state-borders":".district-borders").attr("fill","none").attr("stroke-width",(function(){return b.mapType===o.j.COUNTRY&&n.view===o.k.DISTRICTS?0:1.5})).selectAll("path").data(n.view===o.k.STATES?S:x,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",i)})).transition(v).attr("stroke",(function(){return n.option===o.h.ZONES?"#00000060":o.a[f]+"30"})),e.select(n.view===o.k.STATES?".district-borders":".state-borders").selectAll("path").data(n.view===o.k.STATES?x:S,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",i).attr("fill","none").attr("stroke-width",1.5)})).transition(v).attr("stroke","#343a4050"),e.attr("pointer-events","auto").on("click",(function(){b.mapType!==o.j.STATE&&p({stateCode:"TT",districtName:null})}))}),[O,s,b,n,p,u,m,I,f,C]),Object(T.useEffect)((function(){var t=o.r[d.stateCode],e=d.districtName,r=Object(g.a)(h.current);n.option===o.h.HOTSPOTS?r.select(".circles").selectAll("circle").attr("fill-opacity",(function(r){var a;return t===r.properties.st_nm&&(!e||e===(null===(a=r.properties)||void 0===a?void 0:a.district)||e===o.x&&!r.properties.district)?1:.5})):r.select(".regions").selectAll("path").each((function(r){var a,i=t===r.properties.st_nm&&(n.view===o.k.STATES||e===(null===(a=r.properties)||void 0===a?void 0:a.district));i&&this.parentNode.appendChild(this),Object(g.a)(this).attr("stroke-opacity",i?1:0)}))}),[O,s,n.option,n.view,d.stateCode,d.districtName,f]),S.a.createElement(S.a.Fragment,null,S.a.createElement("div",{className:"svg-parent"},S.a.createElement("svg",{id:"chart",viewBox:"0 0 ".concat(432," ").concat(488),preserveAspectRatio:"xMidYMid meet",ref:h},S.a.createElement("g",{className:"regions"}),S.a.createElement("g",{className:"state-borders"}),n.view===o.k.DISTRICTS&&S.a.createElement("g",{className:"district-borders"}),n.option===o.h.HOTSPOTS&&S.a.createElement("g",{className:"circles"})),b.mapType===o.j.STATE&&!!U(null===(e=s[n.code])||void 0===e||null===(r=e.districts)||void 0===r?void 0:r[o.x],f)&&S.a.createElement("div",{className:"disclaimer"},S.a.createElement(F.a,null),v("District-wise {{statistic}} numbers need reconciliation",{statistic:v(f)}))),I&&S.a.createElement(k,{data:s,mapScale:I,mapOption:n.option,statistic:f}),S.a.createElement("svg",{style:{position:"absolute",height:0}},S.a.createElement("defs",null,S.a.createElement("filter",{id:"balance-color",colorInterpolationFilters:"sRGB"},S.a.createElement("feColorMatrix",{type:"matrix",values:"0.91372549  0           0            0  0.08627451 0           0.91372549  0            0  0.08627451 0           0           0.854901961  0  0.145098039 0           0           0            1  0"})))))}}}]);
//# sourceMappingURL=MapVisualizer.c7302382.chunk.js.map