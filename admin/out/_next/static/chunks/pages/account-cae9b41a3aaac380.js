(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{93290:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account",function(){return r(57526)}])},8977:function(e,n,r){"use strict";r.d(n,{V:function(){return t}});var t="https://tennishapi.herokuapp.com"},93517:function(e,n,r){"use strict";var t=r(67294);n.Z=function(e){var n=(0,t.useState)(""),r=n[0],a=n[1];return(0,t.useEffect)((function(){a(sessionStorage.getItem(e))}),[]),r}},57526:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return C}});var t=r(85893),a=r(9008),i=r(67294),l=r(87357),s=r(27948),o=r(15861),u=r(86886),c=r(66242),m=r(44267),h=r(69661),d=r(67720),f=r(9669),x=r.n(f),g=r(93517),v=r(8977);function p(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var b=function(e){var n=(0,g.Z)("userId"),r=(0,i.useState)(),a=r[0],s=r[1];return(0,i.useEffect)((function(){if(n){var e="".concat(v.V,"/api/v1/main/users/").concat(n);x().get(e).then((function(e){s(e.data)})).catch((function(e){console.log(e)}))}}),[n,e.toggler]),(0,t.jsxs)(c.Z,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){p(e,n,r[n])}))}return e}({},e,{children:[(0,t.jsx)(m.Z,{children:(0,t.jsxs)(l.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column"},children:[(0,t.jsx)(h.Z,{src:"/static/images/avatars/avatar_6.png",sx:{height:64,mb:2,width:64}}),(0,t.jsx)(o.Z,{color:"textPrimary",gutterBottom:!0,variant:"h5",children:(null===a||void 0===a?void 0:a.firstName)+" "+(null===a||void 0===a?void 0:a.lastName)})]})}),(0,t.jsx)(d.Z,{})]}))},j=r(78445),N=r(86273),Z=r(83321),y=r(82175),P=r(74231),_=r(25520),w=(r(41664),(0,_.v0)(),function(e){var n=(0,g.Z)("userId"),r=(0,i.useState)(),a=r[0],s=r[1];(0,i.useEffect)((function(){if(n){var e="".concat(v.V,"/api/v1/main/users/").concat(n);x().get(e).then((function(e){s(e.data)})).catch((function(e){console.log(e)}))}}),[n,e.toggler]);var o=(0,y.TA)({enableReinitialize:!0,initialValues:a||{email:"",firstName:"",lastName:"",phoneNumber:""},validationSchema:P.Ry({email:P.Z_().email("Must be a valid email").max(255).required("Email is required"),firstName:P.Z_().max(255).required("First name is required"),lastName:P.Z_().max(255).required("Last name is required"),phoneNumber:P.Z_().min(10).max(10).required("Phone number is required")}),onSubmit:function(){if(n&&a){var r="".concat(v.V,"/api/v1/main/users/").concat(n),t={email:o.values.email,firstName:o.values.firstName,lastName:o.values.lastName,phoneNumber:o.values.phoneNumber};x().patch(r,t).then((function(n){e.settoggler(!e.toggler)})).catch((function(e){throw e}))}}});return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("form",{onSubmit:o.handleSubmit,children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(j.Z,{subheader:"The information can be edited",title:"Profile"}),(0,t.jsx)(d.Z,{}),(0,t.jsx)(m.Z,{children:(0,t.jsxs)(u.ZP,{container:!0,spacing:3,children:[(0,t.jsx)(u.ZP,{item:!0,md:6,xs:12,children:(0,t.jsx)(N.Z,{error:Boolean(o.touched.firstName&&o.errors.firstName),fullWidth:!0,helperText:o.touched.firstName&&o.errors.firstName,label:"First Name",margin:"normal",name:"firstName",onBlur:o.handleBlur,onChange:o.handleChange,value:o.values.firstName,variant:"outlined"})}),(0,t.jsx)(u.ZP,{item:!0,md:6,xs:12,children:(0,t.jsx)(N.Z,{error:Boolean(o.touched.lastName&&o.errors.lastName),fullWidth:!0,helperText:o.touched.lastName&&o.errors.lastName,label:"Last Name",margin:"normal",name:"lastName",onBlur:o.handleBlur,onChange:o.handleChange,value:o.values.lastName,variant:"outlined"})}),(0,t.jsx)(u.ZP,{item:!0,md:6,xs:12,children:(0,t.jsx)(N.Z,{error:Boolean(o.touched.email&&o.errors.email),fullWidth:!0,helperText:o.touched.email&&o.errors.email,label:"Email Address",margin:"normal",name:"email",onBlur:o.handleBlur,onChange:o.handleChange,type:"email",value:o.values.email,variant:"outlined"})}),(0,t.jsx)(u.ZP,{item:!0,md:6,xs:12,children:(0,t.jsx)(N.Z,{error:Boolean(o.touched.phoneNumber&&o.errors.phoneNumber),fullWidth:!0,helperText:o.touched.phoneNumber&&o.errors.phoneNumber,label:"Phone Number",margin:"normal",name:"phoneNumber",onBlur:o.handleBlur,onChange:o.handleChange,type:"number",value:o.values.phoneNumber,variant:"outlined"})})]})}),(0,t.jsx)(d.Z,{}),(0,t.jsx)(l.Z,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:(0,t.jsx)(Z.Z,{color:"primary",disabled:o.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Save"})})]})})})}),B=r(46447),S=function(){var e=(0,i.useState)(!1),n=e[0],r=e[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.default,{children:(0,t.jsx)("title",{children:"Account | Material Kit"})}),(0,t.jsx)(l.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,t.jsxs)(s.Z,{maxWidth:"lg",children:[(0,t.jsx)(o.Z,{sx:{mb:3},variant:"h4",children:"Account"}),(0,t.jsxs)(u.ZP,{container:!0,spacing:3,children:[(0,t.jsx)(u.ZP,{item:!0,lg:4,md:6,xs:12,children:(0,t.jsx)(b,{toggler:n,settoggler:r})}),(0,t.jsx)(u.ZP,{item:!0,lg:8,md:6,xs:12,children:(0,t.jsx)(w,{toggler:n,settoggler:r})})]})]})})]})};S.getLayout=function(e){return(0,t.jsx)(B.c,{children:e})};var C=S}},function(e){e.O(0,[275,959,331,273,388,141,93,447,774,888,179],(function(){return n=93290,e(e.s=n);var n}));var n=e.O();_N_E=n}]);