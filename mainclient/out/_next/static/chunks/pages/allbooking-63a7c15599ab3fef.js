(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{46395:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/allbooking",function(){return t(3514)}])},8977:function(e,n,t){"use strict";t.d(n,{V:function(){return r}});var r="https://tennishapi.herokuapp.com"},93517:function(e,n,t){"use strict";var r=t(67294);n.Z=function(e){var n=(0,r.useState)(""),t=n[0],i=n[1];return(0,r.useEffect)((function(){i(sessionStorage.getItem(e))}),[]),t}},3514:function(e,n,t){"use strict";t.r(n);var r=t(34051),i=t.n(r),a=t(85893),o=t(9008),l=t(67294),c=t(93946),s=t(83321),u=t(53787),d=t(87357),f=t(27948),m=t(15861),h=t(34386),g=t(77957),x=t(50594),p=t(5344),j=t(47006),Z=t(83086),b=t(46419),v=t(7906),w=t(295),y=t(53252),S=t(72882),k=t(53184),C=t(68509),T=t(55113),O=t(64666),P=t(37645),D=t(31425),A=t(6514),W=t(76798),B=t(87918),E=t(46447),_=t(9669),I=t.n(_),N=t(93517),F=t(8977);function V(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function M(e,n,t,r,i,a,o){try{var l=e[a](o),c=l.value}catch(s){return void t(s)}l.done?n(c):Promise.resolve(c).then(r,i)}function L(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){M(a,r,i,o,l,"next",e)}function l(e){M(a,r,i,o,l,"throw",e)}o(void 0)}))}}function U(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){U(e,n,t[n])}))}return e}function z(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a=[],o=!0,l=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(c){l=!0,i=c}finally{try{o||null==t.return||t.return()}finally{if(l)throw i}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return V(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return V(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var R=function(){var e=function(e){var n=e.getFullYear(),t=(1+e.getMonth()).toString();t=t.length>1?t:"0"+t;var r=e.getDate().toString();return(r=r.length>1?r:"0"+r)+" / "+t+" / "+n},n=z(l.useState(!1),2),t=n[0],r=n[1],E=(l.useRef(null),z(l.useState({}),2)),_=(E[0],E[1],function(){r(!1)}),V=z(l.useState(new Date),2),M=V[0],R=V[1],X=z(l.useState((new Date).getTime()),2),G=X[0],H=X[1],Y=z(l.useState((new Date).getTime()),2),$=Y[0],J=Y[1],K=(0,N.Z)("userId"),Q=(0,l.useState)({numberOfPeople:1,message:" "}),ee=Q[0],ne=Q[1],te=(0,l.useState)([]),re=te[0],ie=te[1],ae=(0,l.useState)(!1),oe=ae[0],le=ae[1];(0,l.useEffect)(L(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(K){e.next=2;break}return e.abrupt("return");case 2:return n="".concat(F.V,"/api/v1/main/bookings/").concat(K),e.next=5,I().get(n).then((function(e){console.log(e.data),ie(e.data.reverse())})).catch((function(e){throw e}));case 5:case"end":return e.stop()}}),e)}))),[K,oe]);var ce=(0,l.useState)(!1),se=ce[0],ue=ce[1],de=(0,l.useState)(),fe=de[0],me=de[1],he=function(){ue(!1)},ge=(0,l.useState)({numberOfPeople:0,message:""}),xe=ge[0],pe=ge[1],je=z(l.useState(new Date),2),Ze=je[0],be=je[1],ve=z(l.useState((new Date).getTime()),2),we=ve[0],ye=ve[1],Se=z(l.useState((new Date).getTime()),2),ke=Se[0],Ce=Se[1];function Te(){return(Te=L(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=q({},xe,{date:Ze,startTime:we,endTime:ke,status:"Pending"}),t="".concat(F.V,"/api/v1/main/bookings/").concat(fe),I().patch(t,n).then((function(e){le(!oe),he()})).catch((function(e){throw e}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,l.useEffect)((function(){if(se){var e="".concat(F.V,"/api/v1/main/getBooking/").concat(fe);I().get(e).then((function(e){var n=e.data;be(n.date),ye(n.startTime),Ce(n.endTime),pe({numberOfPeople:n.numberOfPeople,message:n.message}),console.log(n)})).catch((function(e){throw e}))}}),[fe]);var Oe=(0,l.useState)(!1),Pe=Oe[0],De=Oe[1],Ae=(0,a.jsx)(l.Fragment,{children:(0,a.jsx)(c.Z,{size:"small","aria-label":"close",color:"inherit",onClick:function(){De(!1)},children:(0,a.jsx)(x.Z,{fontSize:"small"})})});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(W.Z,{open:Pe,autoHideDuration:6e3,onClose:function(){De(!1)},message:"New booking created",action:Ae}),(0,a.jsxs)(O.Z,{open:t,onClose:_,"aria-labelledby":"alert-dialog-title",fullWidth:!0,maxWidth:"sm","aria-describedby":"alert-dialog-description",children:[(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(P.Z,{id:"alert-dialog-title",sx:{float:"left"},children:"Reserve a Tennis Court"}),(0,a.jsx)(D.Z,{children:(0,a.jsx)(s.Z,{color:"error",onClick:_,children:(0,a.jsx)(x.Z,{})})})]}),(0,a.jsxs)(A.Z,{children:[(0,a.jsx)(p.Z,{dateAdapter:j.Z,children:(0,a.jsx)(Z.Z,{label:"Date",value:M,onChange:function(e){R(e)},renderInput:function(e){return(0,a.jsx)(u.Z,q({sx:{marginBottom:"1rem"},fullWidth:!0},e))}})}),(0,a.jsx)(p.Z,{dateAdapter:j.Z,children:(0,a.jsx)(b.Z,{label:"Start Time",value:G,onChange:function(e){H(e)},renderInput:function(e){return(0,a.jsx)(u.Z,q({fullWidth:!0,sx:{marginBottom:"1rem"}},e))}})}),(0,a.jsx)(p.Z,{dateAdapter:j.Z,children:(0,a.jsx)(b.Z,{label:"End Time",value:$,onChange:function(e){J(e)},renderInput:function(e){return(0,a.jsx)(u.Z,q({fullWidth:!0,sx:{marginBottom:"1rem"}},e))}})}),(0,a.jsx)(u.Z,{fullWidth:!0,label:"Number of people?",required:!0,sx:{marginBottom:"1rem"},name:"numberOfPeople",value:ee.numberOfPeople,onChange:function(e){var n=e.target,t=n.name,r=n.value;ne((function(e){return q({},e,U({},t,r))}))}}),(0,a.jsx)(u.Z,{fullWidth:!0,label:"Message (optional)",multiline:!0,rows:3,sx:{marginBottom:"1rem"},name:"message",value:ee.message,onChange:function(e){var n=e.target,t=n.name,r=n.value;ne((function(e){return q({},e,U({},t,r))}))}})]}),(0,a.jsxs)(D.Z,{children:[(0,a.jsx)(s.Z,{color:"error",onClick:_,autoFocus:!0,children:"Close"}),(0,a.jsx)(s.Z,{onClick:function(){var e=q({},ee,{date:M,startTime:G,endTime:$,status:"Pending",userId:K}),n="".concat(F.V,"/api/v1/main/bookings");I().post(n,e).then((function(e){console.log(e.data),le(!oe),ne({numberOfPeople:1,message:" "}),R(new Date),H((new Date).getTime()),J((new Date).getTime()),De(!0),_()}))},autoFocus:!0,children:"Submit"})]})]}),(0,a.jsxs)(O.Z,{open:se,onClose:he,"aria-labelledby":"alert-dialog-title",fullWidth:!0,maxWidth:"sm","aria-describedby":"alert-dialog-description",children:[(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(P.Z,{id:"alert-dialog-title",sx:{float:"left"},children:"View/Edit booking"}),(0,a.jsx)(D.Z,{children:(0,a.jsx)(s.Z,{color:"error",onClick:he,children:(0,a.jsx)(x.Z,{})})})]}),(0,a.jsxs)(A.Z,{children:[(0,a.jsx)(p.Z,{dateAdapter:j.Z,children:(0,a.jsx)(Z.Z,{label:"Date",value:Ze,onChange:function(e){be(e)},renderInput:function(e){return(0,a.jsx)(u.Z,q({sx:{marginBottom:"1rem"},fullWidth:!0},e))}})}),(0,a.jsx)(p.Z,{dateAdapter:j.Z,children:(0,a.jsx)(b.Z,{label:"Start Time",value:we,onChange:function(e){ye(e)},renderInput:function(e){return(0,a.jsx)(u.Z,q({fullWidth:!0,sx:{marginBottom:"1rem"}},e))}})}),(0,a.jsx)(p.Z,{dateAdapter:j.Z,children:(0,a.jsx)(b.Z,{label:"End Time",value:ke,onChange:function(e){Ce(e)},renderInput:function(e){return(0,a.jsx)(u.Z,q({fullWidth:!0,sx:{marginBottom:"1rem"}},e))}})}),(0,a.jsx)(u.Z,{fullWidth:!0,label:"Number of people?",required:!0,sx:{marginBottom:"1rem"},name:"numberOfPeople",value:xe.numberOfPeople,onChange:function(e){var n=e.target,t=n.name,r=n.value;pe((function(e){return q({},e,U({},t,r))}))}}),(0,a.jsx)(u.Z,{fullWidth:!0,label:"Message (optional)",multiline:!0,rows:3,sx:{marginBottom:"1rem"},name:"message",value:xe.message,onChange:function(e){var n=e.target,t=n.name,r=n.value;pe((function(e){return q({},e,U({},t,r))}))}})]}),(0,a.jsxs)(D.Z,{children:[(0,a.jsx)(s.Z,{onClick:function(){he(),function(e){var n="".concat(F.V,"/api/v1/main/bookings/").concat(e);I().delete(n).then((function(e){console.log(e.data),le(!oe)})).catch((function(e){console.log(e)}))}(fe)},color:"error",children:"Cancel reservation"}),(0,a.jsx)(s.Z,{onClick:he,autoFocus:!0,children:"Close"}),(0,a.jsx)(s.Z,{autoFocus:!0,onClick:function(){return Te.apply(this,arguments)},children:"Submit"})]})]}),(0,a.jsx)(o.default,{children:(0,a.jsx)("title",{children:"All Booking"})}),(0,a.jsx)(d.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,a.jsxs)(f.Z,{maxWidth:"xl",children:[(0,a.jsx)(m.Z,{sx:{mb:3},variant:"h4",children:"All Booking"}),(0,a.jsx)(s.Z,{color:"primary",variant:"contained",sx:{float:"right",mb:2},onClick:function(){r(!0)},children:"Create new booking"}),(0,a.jsx)(S.Z,{component:T.Z,children:(0,a.jsxs)(v.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,a.jsx)(k.Z,{children:(0,a.jsxs)(C.Z,{children:[(0,a.jsx)(y.Z,{children:"Sl No."}),(0,a.jsx)(y.Z,{align:"center",children:"Booking Date"}),(0,a.jsx)(y.Z,{align:"center",children:"Check In Time"}),(0,a.jsx)(y.Z,{align:"center",children:"Check Out Time"}),(0,a.jsx)(y.Z,{align:"center",children:"Status"}),(0,a.jsx)(y.Z,{align:"center",children:"Action"})]})}),(0,a.jsx)(w.Z,{children:null===re||void 0===re?void 0:re.map((function(n,t){return(0,a.jsxs)(C.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,a.jsx)(y.Z,{component:"th",scope:"row",children:t+1}),(0,a.jsx)(y.Z,{align:"center",children:e(new Date(n.date))}),(0,a.jsx)(y.Z,{align:"center",children:new Date(n.startTime).toLocaleTimeString("en-US")}),(0,a.jsx)(y.Z,{align:"center",children:new Date(n.endTime).toLocaleTimeString("en-US")}),(0,a.jsx)(y.Z,{align:"center",children:(0,a.jsx)(B.Z,{label:n.status,color:"Pending"===n.status?"warning":"Accepted"===n.status?"success":"error"})}),(0,a.jsx)(y.Z,{align:"center",children:(0,a.jsx)(h.Z,{title:"Edit",children:(0,a.jsx)(c.Z,{onClick:function(){var e;e=n._id,me(e),ue(!0)},color:"primary","aria-label":"upload picture",component:"span",children:(0,a.jsx)(g.Z,{})})})})]},n._id)}))})]})})]})})]})};R.getLayout=function(e){return(0,a.jsx)(E.c,{children:e})},n.default=R}},function(e){e.O(0,[275,959,878,787,388,923,279,138,447,774,888,179],(function(){return n=46395,e(e.s=n);var n}));var n=e.O();_N_E=n}]);