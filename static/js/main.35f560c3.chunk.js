(this["webpackJsonpoptile-challenge-ichchha"]=this["webpackJsonpoptile-challenge-ichchha"]||[]).push([[0],{31:function(e,t,n){e.exports=n.p+"static/media/Arrow.3e045099.png"},46:function(e,t,n){e.exports=n(60)},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),i=n.n(c),o=n(97),l=n(8),u=n(14),m=Object(u.b)({name:"tempConverter",initialState:{currentUnit:"Fahrenheit"},reducers:{changeTemperatureUnit:function(e,t){e.currentUnit=t.payload}}}),s=m.actions.changeTemperatureUnit,h=function(e){return e.tempConverter.currentUnit},d=m.reducer,p=n(99),f=n(88);n(56);function g(){var e=Object(l.c)(h),t=Object(l.b)();return r.a.createElement(p.a,{name:"temperatureUnit",value:e,onChange:function(e){return t(s(e.target.value))},className:"temperature-unit-wrapper"},r.a.createElement(f.a,{value:"Celcius",control:r.a.createElement(o.a,null),label:"Celcius"}),r.a.createElement(f.a,{value:"Fahrenheit",control:r.a.createElement(o.a,null),label:"Fahrenheit"}))}var v=n(98),b=n(89),E=n(31),j=n.n(E),w=(n(57),Object(u.b)({name:"navigation",initialState:{activeCount:0},reducers:{incrementCount:function(e){e.activeCount=Math.min(e.activeCount+1,4)},decrementCount:function(e){e.activeCount=Math.max(e.activeCount-1,0)}}})),C=w.actions,O=C.incrementCount,y=C.decrementCount,x=function(e){return e.navigation.activeCount},D=w.reducer,F=Object(b.a)((function(e){return{imageButton:{padding:"1rem"},imageButtonRight:{transform:"rotate(180deg)"},imageSrc:{height:"2.5rem",width:"5rem",backgroundSize:"cover",backgroundPosition:"center 40%"}}}));function S(){var e=F(),t=Object(l.b)(),n=Object(l.c)(x);return r.a.createElement("div",{className:"navigation-wrapper"},r.a.createElement(v.a,{style:{visibility:0===n?"hidden":"visible"},className:e.imageButton,onClick:function(){return t(y())}},r.a.createElement("div",{className:e.imageSrc,style:{backgroundImage:"url(".concat(j.a,")")}})),r.a.createElement(v.a,{style:{visibility:4===n?"hidden":"visible"},className:"".concat(e.imageButton," ").concat(e.imageButtonRight),onClick:function(){return t(O())}},r.a.createElement("div",{className:e.imageSrc,style:{backgroundImage:"url(".concat(j.a,")")}})))}var N=n(92),k=n(93),B=Object(u.b)({name:"weatherData",initialState:{data:null},reducers:{setWeatherData:function(e,t){e.data=t.payload}}}),I=B.actions.setWeatherData,M=function(e){return!!e.weatherData.data},T=function(e){var t,n,a,r;return null===(t=e.weatherData)||void 0===t||null===(n=t.data)||void 0===n||null===(a=n.list)||void 0===a||null===(r=a.reduce)||void 0===r?void 0:r.call(a,(function(e,t){if(e.length>0){var n=e[e.length-1];new Date(n[0].dt_txt).toDateString()===new Date(t.dt_txt).toDateString()?n.push(t):e.push([t])}else e.push([t]);return e}),[])},U=B.reducer,A=n(62),W=n(90),P=n(91),_=n(40),z=n(38);n(58);function L(e){var t=e.chartData,n=void 0===t?[]:t,a=[["Time","Temperature"]].concat(Object(_.a)(n));return r.a.createElement("div",{className:"chart-wrapper "},r.a.createElement(z.a,{chartType:"ColumnChart",data:a,options:{vAxis:{gridlines:{color:"transparent"},baselineColor:"#fff",gridlineColor:"#fff",textPosition:"none"},legend:{position:"none"},width:"100%",height:"200px",hAxis:{textStyle:{fontFamily:"Arial",fontSize:15}}}}))}var R=Object(b.a)((function(e){return{root:{paddingTop:e.spacing(3),paddingBottom:e.spacing(3),overflow:"hidden"},innerWrapper:{transition:"transform 1s"},paper:{height:200,width:184-e.spacing(2),fontSize:20,textAlign:"left",padding:e.spacing(2),marginLeft:e.spacing(1),marginRight:e.spacing(1),transition:"transform 1s"},control:{padding:e.spacing(2)}}}));function J(){var e=R(),t=Object(W.a)(),n=Object(P.a)(t.breakpoints.down("sm")),c=Object(l.c)(x),i=Object(l.c)(T),o=Object(l.c)(h),u=Object(a.useCallback)((function(e){var t=e.tempInFahrenheit,n=e.withUnit,a=void 0!==n&&n,r="Fahrenheit"===o?Math.round(t):Math.round(5*(Math.round(t)-32)/9);return a?"".concat(r," ").concat("Fahrenheit"===o?"\xb0F":"\xb0C"):r}),[o]),m=Object(a.useMemo)((function(){return i[c].map((function(e){return[q(e.dt_txt),u({tempInFahrenheit:e.main.temp})]}))}),[i,c,u]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{container:!0,className:e.root},r.a.createElement(N.a,{container:!0,wrap:"nowrap",className:e.innerWrapper,style:{transform:"translateX(".concat(-184*c+184-(n?92+t.spacing(2):0),"px)")}},i.slice(0,5).map((function(t,n){return r.a.createElement(N.a,{key:n,item:!0},r.a.createElement(k.a,{className:e.paper,elevation:n===c?7:0,style:{transform:"scale(".concat(n===c?1.1:1,")")}},r.a.createElement(A.a,{component:"h1",variant:"h6",gutterBottom:!0},"Temp:"),r.a.createElement("div",null,u({tempInFahrenheit:t[0].main.temp,withUnit:!0})),r.a.createElement("br",null),r.a.createElement(A.a,{component:"h1",variant:"h6",gutterBottom:!0},"Date:"),r.a.createElement("div",null,new Date(t[0].dt_txt).toLocaleString("en",{day:"numeric",month:"short",year:"numeric"}))))})))),r.a.createElement(L,{chartData:m}))}function q(e){var t=new Date(e);return new Intl.DateTimeFormat("default",{hour12:!0,hour:"numeric",minute:"numeric"}).format(t)}function X(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(J,null))}var G=n(94),H=Object(b.a)((function(e){return{root:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center",flexDirection:"column"}}}));function K(){var e=H();return r.a.createElement("div",{className:e.root},r.a.createElement(G.a,null),r.a.createElement("p",null,"Loading..."))}var Q=n(95),V=Object(b.a)((function(e){return{root:{display:"flex",height:"100vh",flexDirection:"column"}}}));function Y(){var e=V(),t=Object(l.b)(),n=Object(l.c)(M);return Object(a.useEffect)((function(){fetch("http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&units=imperial&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40").then((function(e){return e.json()})).then((function(e){t(I(e))}))}),[t]),r.a.createElement(Q.a,{maxWidth:"sm",className:e.root},n?r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(X,null)):r.a.createElement(K,null))}var Z=n(96);n(59);var $=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Z.a,null),r.a.createElement(Y,null))},ee=Object(u.a)({reducer:{tempConverter:d,navigation:D,weatherData:U}});i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:ee},r.a.createElement($,null))),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.35f560c3.chunk.js.map