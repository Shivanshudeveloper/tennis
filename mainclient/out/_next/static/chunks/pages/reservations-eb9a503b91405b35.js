(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[669],{98949:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reservations",function(){return n(64119)}])},8977:function(e,t,n){"use strict";n.d(t,{V:function(){return r}});var r="https://tennishapi.herokuapp.com"},93517:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=(0,r.useState)(""),n=t[0],a=t[1];return(0,r.useEffect)((function(){a(sessionStorage.getItem(e))}),[]),n}},64119:function(e,t,n){"use strict";n.r(t);var r=n(34051),a=n.n(r),i=n(85893),o=n(9008),u=n(67294),l=n(50594),s=n(83321),c=n(53787),f=n(87357),d=n(27948),m=n(15861),h=n(64666),g=n(37645),x=n(31425),p=n(6514),v=n(83086),b=n(46419),j=n(46447),Z=n(47006),w=n(5344),y=n(96476),C=n(24424),k=(n(77773),n(1199)),S=n(11163),O=n(25520),P=n(9669),T=n.n(P),D=n(93517),W=n(8977);function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e,t,n,r,a,i,o){try{var u=e[i](o),l=u.value}catch(s){return void n(s)}u.done?t(l):Promise.resolve(l).then(r,a)}function B(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){A(i,r,a,o,u,"next",e)}function u(e){A(i,r,a,o,u,"throw",e)}o(void 0)}))}}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){_(e,t,n[t])}))}return e}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,u=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(l){u=!0,a=l}finally{try{o||null==n.return||n.return()}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var V=function(){var e=function(e,t){e=new Date(e);var n=(t=new Date(t)).getHours()+":"+t.getMinutes()+":00",r=e.getFullYear(),a=e.getMonth()+1,i=e.getDate();return new Date(r+"-"+a+"-"+i+" "+n)},t=function(){ke(!1)},n=(0,S.useRouter)(),r=(0,O.v0)();(0,u.useEffect)((function(){(0,O.Aj)(r,(function(e){e||n.push("/login")}))}),[]);var j=N(u.useState(!1),2),P=j[0],E=j[1],A=u.useRef(null),V=N(u.useState([]),2),F=V[0],M=V[1],R=N(u.useState(new Date),2),q=R[0],G=R[1],X=N(u.useState((new Date).getTime()),2),H=X[0],K=X[1],L=N(u.useState((new Date).getTime()),2),U=L[0],Y=L[1],$=(0,u.useState)({numberOfPeople:1,message:" "}),z=$[0],J=$[1],Q=(0,u.useState)([]),ee=Q[0],te=Q[1],ne=(0,D.Z)("userId"),re=(0,u.useState)(!1),ae=re[0],ie=re[1];(0,u.useEffect)(B(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ne){e.next=2;break}return e.abrupt("return");case 2:return t="".concat(W.V,"/api/v1/main/acceptedBookings/").concat(ne),e.next=5,T().get(t).then((function(e){console.log(e.data),te(e.data.reverse())})).catch((function(e){throw e}));case 5:case"end":return e.stop()}}),e)}))),[ne,ae]),(0,u.useEffect)(B(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(ne){t.next=2;break}return t.abrupt("return");case 2:if(0!==ee.length){t.next=4;break}return t.abrupt("return");case 4:n=ee.map((function(t,n){return{title:"Reservation "+t.message,start:e(t.date,t.startTime),id:t._id}})),M(n);case 6:case"end":return t.stop()}}),t)}))),[ee]);var oe=function(){E(!0)},ue=function(){E(!1)},le=(0,u.useState)({numberOfPeople:0,message:""}),se=le[0],ce=le[1],fe=N(u.useState(new Date),2),de=fe[0],me=fe[1],he=N(u.useState((new Date).getTime()),2),ge=he[0],xe=he[1],pe=N(u.useState((new Date).getTime()),2),ve=pe[0],be=pe[1],je=(0,u.useState)(),Ze=je[0],we=je[1],ye=(0,u.useState)(!1),Ce=ye[0],ke=ye[1];return(0,u.useEffect)((function(){if(Ze){ke(!0);var e="".concat(W.V,"/api/v1/main/getBooking/").concat(Ze);T().get(e).then((function(e){var t=e.data;me(t.date),xe(t.startTime),be(t.endTime),ce({numberOfPeople:t.numberOfPeople,message:t.message})})).catch((function(e){throw e}))}}),[Ze]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(h.Z,{open:Ce,onClose:t,"aria-labelledby":"alert-dialog-title",fullWidth:!0,maxWidth:"sm","aria-describedby":"alert-dialog-description",children:[(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(g.Z,{id:"alert-dialog-title",sx:{float:"left"},children:"View/Cancel booking"}),(0,i.jsx)(x.Z,{children:(0,i.jsx)(s.Z,{color:"error",onClick:t,children:(0,i.jsx)(l.Z,{})})})]}),(0,i.jsxs)(p.Z,{children:[(0,i.jsx)(w.Z,{dateAdapter:Z.Z,children:(0,i.jsx)(v.Z,{label:"Date",value:de,onChange:function(e){me(e)},renderInput:function(e){return(0,i.jsx)(c.Z,I({sx:{marginBottom:"1rem"},fullWidth:!0},e))}})}),(0,i.jsx)(w.Z,{dateAdapter:Z.Z,children:(0,i.jsx)(b.Z,{label:"Start Time",value:ge,onChange:function(e){xe(e)},renderInput:function(e){return(0,i.jsx)(c.Z,I({fullWidth:!0,sx:{marginBottom:"1rem"}},e))}})}),(0,i.jsx)(w.Z,{dateAdapter:Z.Z,children:(0,i.jsx)(b.Z,{label:"End Time",value:ve,onChange:function(e){be(e)},renderInput:function(e){return(0,i.jsx)(c.Z,I({fullWidth:!0,sx:{marginBottom:"1rem"}},e))}})}),(0,i.jsx)(c.Z,{fullWidth:!0,label:"Number of people?",required:!0,sx:{marginBottom:"1rem"},name:"numberOfPeople",value:se.numberOfPeople,onChange:function(e){var t=e.target,n=t.name,r=t.value;ce((function(e){return I({},e,_({},n,r))}))}}),(0,i.jsx)(c.Z,{fullWidth:!0,label:"Message (optional)",multiline:!0,rows:3,sx:{marginBottom:"1rem"},name:"message",value:se.message,onChange:function(e){var t=e.target,n=t.name,r=t.value;ce((function(e){return I({},e,_({},n,r))}))}})]}),(0,i.jsxs)(x.Z,{children:[(0,i.jsx)(s.Z,{autoFocus:!0,color:"error",onClick:function(){var e="".concat(W.V,"/api/v1/main/bookings/").concat(Ze);T().delete(e).then((function(e){console.log(e.data),ie(!ae),t()})).catch((function(e){console.log(e)}))},children:"Cancel reservation"}),(0,i.jsx)(s.Z,{onClick:t,autoFocus:!0,children:"Close"})]})]}),(0,i.jsxs)(h.Z,{open:P,onClose:ue,"aria-labelledby":"alert-dialog-title",fullWidth:!0,maxWidth:"sm","aria-describedby":"alert-dialog-description",children:[(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(g.Z,{id:"alert-dialog-title",sx:{float:"left"},children:"Reserve a Tennis Court"}),(0,i.jsx)(x.Z,{children:(0,i.jsx)(s.Z,{color:"error",onClick:ue,children:(0,i.jsx)(l.Z,{})})})]}),(0,i.jsxs)(p.Z,{children:[(0,i.jsx)(w.Z,{dateAdapter:Z.Z,children:(0,i.jsx)(v.Z,{label:"Date",value:q,onChange:function(e){G(e)},renderInput:function(e){return(0,i.jsx)(c.Z,I({sx:{marginBottom:"1rem"},fullWidth:!0},e))}})}),(0,i.jsx)(w.Z,{dateAdapter:Z.Z,children:(0,i.jsx)(b.Z,{label:"Start Time",value:H,onChange:function(e){K(e)},renderInput:function(e){return(0,i.jsx)(c.Z,I({fullWidth:!0,sx:{marginBottom:"1rem"}},e))}})}),(0,i.jsx)(w.Z,{dateAdapter:Z.Z,children:(0,i.jsx)(b.Z,{label:"End Time",value:U,onChange:function(e){Y(e)},renderInput:function(e){return(0,i.jsx)(c.Z,I({fullWidth:!0,sx:{marginBottom:"1rem"}},e))}})}),(0,i.jsx)(c.Z,{fullWidth:!0,label:"Number of people?",required:!0,sx:{marginBottom:"1rem"},name:"numberOfPeople",value:z.numberOfPeople,onChange:function(e){var t=e.target,n=t.name,r=t.value;J((function(e){return I({},e,_({},n,r))}))}}),(0,i.jsx)(c.Z,{fullWidth:!0,label:"Message (optional)",multiline:!0,rows:3,sx:{marginBottom:"1rem"},name:"message",value:z.message,onChange:function(e){var t=e.target,n=t.name,r=t.value;J((function(e){return I({},e,_({},n,r))}))}})]}),(0,i.jsxs)(x.Z,{children:[(0,i.jsx)(s.Z,{color:"error",onClick:ue,autoFocus:!0,children:"Close"}),(0,i.jsx)(s.Z,{onClick:function(){var e=I({},z,{date:q,startTime:H,endTime:U,status:"Pending",userId:ne}),t="".concat(W.V,"/api/v1/main/bookings");T().post(t,e).then((function(e){console.log(e.data),ie(!ae),J({numberOfPeople:1,message:" "}),G(new Date),K((new Date).getTime()),Y((new Date).getTime()),ue()}))},autoFocus:!0,children:"Submit"})]})]}),(0,i.jsx)(o.default,{children:(0,i.jsx)("title",{children:"Reservations | Material Kit"})}),(0,i.jsx)(f.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,i.jsxs)(d.Z,{maxWidth:"xl",children:[(0,i.jsxs)(m.Z,{sx:{mb:3},variant:"h4",children:["Reservation",(0,i.jsx)(s.Z,{onClick:oe,variant:"contained",sx:{float:"right"},children:"Book Now"})]}),(0,i.jsx)(y.ZPm,{ref:A,plugins:[k.ZP,C.ZP],initialView:"timeGridWeek",editable:!0,selectable:!0,events:F,dateClick:function(e){G(new Date(e.date)),K(new Date(e.date).getTime()),oe()},eventClick:function(e){we(e.event.id)}})]})})]})};V.getLayout=function(e){return(0,i.jsx)(j.c,{children:e})},t.default=V}},function(e){e.O(0,[870,275,959,878,787,388,923,644,447,774,888,179],(function(){return t=98949,e(e.s=t);var t}));var t=e.O();_N_E=t}]);