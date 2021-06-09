(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{19:function(n,e,t){},21:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var r,a,c,i,o,p,s,d,u=t(0),b=t.n(u),x=t(11),l=t.n(x),h=(t(19),t(4)),j=t.n(h),g=t(6),f=t(9),O=(t(21),t(2)),m=t(3),w=m.a.input(r||(r=Object(O.a)(["\n  width: 70vw;\n  padding: 12px 20px;\n  margin: 40px 0px 20px 0px;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 20px;\n"]))),v=m.a.h2(a||(a=Object(O.a)(["\n    margin: 5px 0px 0px 0px;\n    padding: none;\n"]))),k=m.a.p(c||(c=Object(O.a)(["\n    /* margin-bottom: 3px; */\n    margin: none;\n    font-weight: 400;\n"]))),y=t(1),C=m.a.div(i||(i=Object(O.a)(["\n    align-content: center;\n    border: 1px solid;\n    background-color: white;\n    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.3);\n    box-sizing: border-box;\n    margin: auto;\n    margin-top: 70px;\n    padding: 20px;\n    text-align: center;\n    height: 200px;\n    width: 500px;\n    display: grid;\n    grid-template-columns: 50% 50%;\n"]))),z=function(n){var e=n.data;return Object(y.jsx)(C,{children:e?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(v,{"aria-label":"title",children:e.name}),Object(y.jsx)("img",{alt:"Weather logo",src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png")}),Object(y.jsx)("div",{children:e.weather[0].description.replace(/\b\w/g,(function(n){return n.toUpperCase()}))})]}),Object(y.jsxs)("div",{children:[Object(y.jsxs)(k,{children:["Temperature: ",e.main.temp]}),Object(y.jsxs)(k,{children:["Max: ",e.main.temp_max," C\xb0"]}),Object(y.jsxs)(k,{children:["Min: ",e.main.temp_min," C\xb0"]})]})]}):Object(y.jsx)("div",{children:"City noy found"})})},S=m.a.button(o||(o=Object(O.a)(["\n    background-color: white;\n    border: none;\n    padding: 10px;\n    border-radius: 6px;\n    text-align: center;\n    display: block;\n    height: auto;\n    width: auto;\n    cursor: pointer;\n    font-size: 20px;\n    margin: auto;\n    color: #555555;\n    &:active{\n        background-color: #D5D9E1;\n    }\n"]))),F=m.a.h1(p||(p=Object(O.a)(["\n    margin: 0px;\n    text-align: left;\n    padding: none;\n    color: #fefbd8;\n    font-size: 36px;\n"]))),D=m.a.footer(s||(s=Object(O.a)(["\n    margin: 0px;\n    text-align: left;\n    padding: none;\n    color: #fefbd8;\n    font-size: 36px;\n    margin-top: 150px;\n"]))),E=m.a.p(d||(d=Object(O.a)(["\n    font-size: 14px;\n    text-align: center;\n    a{\n        text-decoration: none;\n        color: inherit\n    }\n"]))),A=function(){return Object(y.jsx)(D,{children:Object(y.jsxs)(E,{children:["Created by ",Object(y.jsx)("a",{href:"https://github.com/OrnellaSofia",target:"_blank",children:"Ornella Acerbi"})]})})},L="3363377f6299bd7b3df6b6cd2ae93b39";var M=function(){var n=Object(u.useState)(""),e=Object(f.a)(n,2),t=e[0],r=e[1],a=Object(u.useState)(),c=Object(f.a)(a,2),i=c[0],o=c[1];Object(u.useEffect)((function(){function n(){return(n=Object(g.a)(j.a.mark((function n(){var e,t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=".concat(L,"&units=metric"));case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,o(t);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]);var p=function(){var n=Object(g.a)(j.a.mark((function n(){var e;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.length){n.next=5;break}return n.next=3,s(t);case 3:(e=n.sent).props.data?o(e.props.data):o(null);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=Object(g.a)(j.a.mark((function n(e){var t,r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat(L,"&units=metric"));case 2:return t=n.sent,n.next=5,t.json();case 5:if("404"!==(r=n.sent).cod){n.next=10;break}return n.abrupt("return",{props:{error:r.message}});case 10:return n.abrupt("return",{props:{data:r}});case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsxs)("div",{onKeyDown:function(n){"Enter"===n.key&&p()},children:[Object(y.jsx)(F,{children:"Weather App"}),Object(y.jsx)(w,{onChange:function(n){r(n.target.value)},value:t,placeholder:"Please enter a city"}),Object(y.jsx)(S,{onClick:p,children:"Search"}),Object(y.jsx)(z,{data:i})]}),Object(y.jsx)(A,{})]})},P=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),c(n),i(n)}))};l.a.render(Object(y.jsx)(b.a.StrictMode,{children:Object(y.jsx)(M,{})}),document.getElementById("root")),P()}},[[25,1,2]]]);
//# sourceMappingURL=main.41e56b51.chunk.js.map