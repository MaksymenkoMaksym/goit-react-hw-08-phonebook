"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[131],{9131:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var i=n(885),a=n(1413),r=n(2791),o=n(9434),s=n(1087),d=n(2598),l=n(3978),c=n(7205),m=n(3793),u=n(4088),x=n(1065),h=n(8823),p=n(6283),f=n(5953),b=n(6015),Z=n(403),g=n(4565),v=n(4942),j=n(3366),W=n(7462),k=n(8182),w=n(7312),y=n(1217),S=n(4419),C=n(7078),P=(0,n(4046).ZP)(),N=n(5080),G=n(184),R=["className","component","disableGutters","fixed","maxWidth","classes"],M=(0,N.Z)(),_=P("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,w.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),D=function(e){return(0,C.Z)({props:e,name:"MuiContainer",defaultTheme:M})},T=function(e,t){var n=e.classes,i=e.fixed,a=e.disableGutters,r=e.maxWidth,o={root:["root",r&&"maxWidth".concat((0,w.Z)(String(r))),i&&"fixed",a&&"disableGutters"]};return(0,S.Z)(o,(function(e){return(0,y.Z)(t,e)}),n)};var F=n(9853),L=n(277),q=n(5513),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?_:t,i=e.useThemeProps,a=void 0===i?D:i,o=e.componentName,s=void 0===o?"MuiContainer":o,d=n((function(e){var t=e.theme,n=e.ownerState;return(0,W.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,v.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var i=n,a=t.breakpoints.values[i];return 0!==a&&(e[t.breakpoints.up(i)]={maxWidth:"".concat(a).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,W.Z)({},"xs"===n.maxWidth&&(0,v.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,v.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),l=r.forwardRef((function(e,t){var n=a(e),i=n.className,r=n.component,o=void 0===r?"div":r,l=n.disableGutters,c=void 0!==l&&l,m=n.fixed,u=void 0!==m&&m,x=n.maxWidth,h=void 0===x?"lg":x,p=(0,j.Z)(n,R),f=(0,W.Z)({},n,{component:o,disableGutters:c,fixed:u,maxWidth:h}),b=T(f,s);return(0,G.jsx)(d,(0,W.Z)({as:o,ownerState:f,className:(0,k.Z)(b.root,i),ref:t},p))}));return l}({createStyledComponent:(0,L.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,F.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,q.Z)({props:e,name:"MuiContainer"})}}),I=A,E=n(4360),H=n(7012);function z(e){return(0,G.jsxs)(g.Z,(0,a.Z)((0,a.Z)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",(0,G.jsx)(p.Z,{color:"inherit",href:"https://github.com/MaksymenkoMaksym/",children:"Git Hub"})," ",(new Date).getFullYear(),"."]}))}var O=(0,E.Z)();function U(){var e=(0,r.useState)(!1),t=(0,i.Z)(e,2),n=t[0],a=t[1],p=(0,o.I0)();return(0,G.jsx)(H.Z,{theme:O,children:(0,G.jsxs)(I,{component:"main",maxWidth:"xs",children:[(0,G.jsx)(m.ZP,{}),(0,G.jsxs)(b.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,G.jsx)(l.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,G.jsx)(Z.Z,{})}),(0,G.jsx)(g.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,G.jsxs)(b.Z,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget),n={name:t.get("firstName")+" "+t.get("lastName"),email:t.get("email"),password:t.get("password")};p((0,d.SA)(n))},sx:{mt:3},children:[(0,G.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,G.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,G.jsx)(u.Z,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),(0,G.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,G.jsx)(u.Z,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name"})}),(0,G.jsx)(f.ZP,{item:!0,xs:12,children:(0,G.jsx)(u.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),(0,G.jsx)(f.ZP,{item:!0,xs:12,children:(0,G.jsx)(u.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})}),(0,G.jsx)(f.ZP,{item:!0,xs:12,children:(0,G.jsx)(x.Z,{control:(0,G.jsx)(h.Z,{value:"allowExtraEmails",color:"primary",checked:n,onChange:function(){a((function(e){return!e}))},inputProps:{"aria-label":"controlled"}}),label:"I am not support war in Ukraine"})})]}),(0,G.jsx)(c.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:!n,children:"Sign Up"}),(0,G.jsx)(f.ZP,{container:!0,justifyContent:"flex-end",children:(0,G.jsx)(f.ZP,{item:!0,children:(0,G.jsx)(s.OL,{variant:"body2",style:{margin:"0",fontFamily:"Roboto,Helvetica,Arial,sans-serif",fontWeight:"400",fontSize:"0.875rem",lineHeight:"1.43",letterSpacing:"0.01071em",color:" #1976d2",WebkitTextDecoration:"underline",textDecoration:"underline",textDecorationColor:" rgba(25, 118, 210, 0.4)"},to:"/signIn",children:"Already have an account? Sign in"})})})]})]}),(0,G.jsx)(z,{sx:{mt:5}})]})})}}}]);
//# sourceMappingURL=131.77641b9b.chunk.js.map