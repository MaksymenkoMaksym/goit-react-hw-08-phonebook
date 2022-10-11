"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[131],{9131:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var i=n(885),a=n(1413),r=n(2791),o=n(9434),s=n(1087),d=n(7689),l=n(2598),c=n(835),u=n(3978),m=n(7205),x=n(3793),h=n(4088),p=n(1065),f=n(8823),b=n(6283),v=n(5953),Z=n(6015),g=n(403),j=n(4565),k=n(4942),W=n(3366),w=n(7462),y=n(8182),S=n(7312),C=n(1217),P=n(4419),N=n(7078),G=(0,n(4046).ZP)(),R=n(5080),M=n(184),_=["className","component","disableGutters","fixed","maxWidth","classes"],D=(0,R.Z)(),T=G("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,S.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),F=function(e){return(0,N.Z)({props:e,name:"MuiContainer",defaultTheme:D})},I=function(e,t){var n=e.classes,i=e.fixed,a=e.disableGutters,r=e.maxWidth,o={root:["root",r&&"maxWidth".concat((0,S.Z)(String(r))),i&&"fixed",a&&"disableGutters"]};return(0,P.Z)(o,(function(e){return(0,C.Z)(t,e)}),n)};var L=n(9853),q=n(277),A=n(5513),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?T:t,i=e.useThemeProps,a=void 0===i?F:i,o=e.componentName,s=void 0===o?"MuiContainer":o,d=n((function(e){var t=e.theme,n=e.ownerState;return(0,w.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,k.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var i=n,a=t.breakpoints.values[i];return 0!==a&&(e[t.breakpoints.up(i)]={maxWidth:"".concat(a).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,w.Z)({},"xs"===n.maxWidth&&(0,k.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,k.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),l=r.forwardRef((function(e,t){var n=a(e),i=n.className,r=n.component,o=void 0===r?"div":r,l=n.disableGutters,c=void 0!==l&&l,u=n.fixed,m=void 0!==u&&u,x=n.maxWidth,h=void 0===x?"lg":x,p=(0,W.Z)(n,_),f=(0,w.Z)({},n,{component:o,disableGutters:c,fixed:m,maxWidth:h}),b=I(f,s);return(0,M.jsx)(d,(0,w.Z)({as:o,ownerState:f,className:(0,y.Z)(b.root,i),ref:t},p))}));return l}({createStyledComponent:(0,q.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,L.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,A.Z)({props:e,name:"MuiContainer"})}}),H=E,z=n(4360),O=n(7012);function U(e){return(0,M.jsxs)(j.Z,(0,a.Z)((0,a.Z)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",(0,M.jsx)(b.Z,{color:"inherit",href:"https://github.com/MaksymenkoMaksym/",children:"Git Hub"})," ",(new Date).getFullYear(),"."]}))}var V=(0,z.Z)();function Y(){var e=(0,r.useState)(!1),t=(0,i.Z)(e,2),n=t[0],a=t[1],b=(0,d.s0)();(0,o.v9)(c.v).token&&b("/signIn");var k=(0,o.I0)();return(0,M.jsx)(O.Z,{theme:V,children:(0,M.jsxs)(H,{component:"main",maxWidth:"xs",children:[(0,M.jsx)(x.ZP,{}),(0,M.jsxs)(Z.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,M.jsx)(u.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,M.jsx)(g.Z,{})}),(0,M.jsx)(j.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,M.jsxs)(Z.Z,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget),n={name:t.get("firstName")+" "+t.get("lastName"),email:t.get("email"),password:t.get("password")};k((0,l.SA)(n))},sx:{mt:3},children:[(0,M.jsxs)(v.ZP,{container:!0,spacing:2,children:[(0,M.jsx)(v.ZP,{item:!0,xs:12,sm:6,children:(0,M.jsx)(h.Z,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),(0,M.jsx)(v.ZP,{item:!0,xs:12,sm:6,children:(0,M.jsx)(h.Z,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name"})}),(0,M.jsx)(v.ZP,{item:!0,xs:12,children:(0,M.jsx)(h.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),(0,M.jsx)(v.ZP,{item:!0,xs:12,children:(0,M.jsx)(h.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})}),(0,M.jsx)(v.ZP,{item:!0,xs:12,children:(0,M.jsx)(p.Z,{control:(0,M.jsx)(f.Z,{value:"allowExtraEmails",color:"primary",checked:n,onChange:function(){a((function(e){return!e}))},inputProps:{"aria-label":"controlled"}}),label:"I am not support war in Ukraine"})})]}),(0,M.jsx)(m.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:!n,children:"Sign Up"}),(0,M.jsx)(v.ZP,{container:!0,justifyContent:"flex-end",children:(0,M.jsx)(v.ZP,{item:!0,children:(0,M.jsx)(s.OL,{variant:"body2",style:{margin:"0",fontFamily:"Roboto,Helvetica,Arial,sans-serif",fontWeight:"400",fontSize:"0.875rem",lineHeight:"1.43",letterSpacing:"0.01071em",color:" #1976d2",WebkitTextDecoration:"underline",textDecoration:"underline",textDecorationColor:" rgba(25, 118, 210, 0.4)"},to:"/signIn",children:"Already have an account? Sign in"})})})]})]}),(0,M.jsx)(U,{sx:{mt:5}})]})})}},835:function(e,t,n){n.d(t,{v:function(){return i}});var i=function(e){return e.auth}}}]);
//# sourceMappingURL=131.78af48ae.chunk.js.map