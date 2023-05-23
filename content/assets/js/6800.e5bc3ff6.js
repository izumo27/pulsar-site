"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6800],{76800:(e,t,n)=>{n.d(t,{Z:()=>V});var r=n(63366),o=n(87462),a=n(67294),i=n(86010),s=n(94780),u=n(98216),l=n(90948),c=n(71657);let p,m=!0,h=!1;const d={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function y(e){e.metaKey||e.altKey||e.ctrlKey||(m=!0)}function g(){m=!1}function f(){"hidden"===this.visibilityState&&h&&(m=!0)}function v(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return m||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!d[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}const b=function(){const e=a.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",y,!0),t.addEventListener("mousedown",g,!0),t.addEventListener("pointerdown",g,!0),t.addEventListener("touchstart",g,!0),t.addEventListener("visibilitychange",f,!0))}),[]),t=a.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!v(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(h=!0,window.clearTimeout(p),p=window.setTimeout((()=>{h=!1}),100),t.current=!1,!0)},ref:e}};const Z=function(...e){return a.useMemo((()=>e.every((e=>null==e))?null:t=>{e.forEach((e=>{!function(e,t){"function"==typeof e?e(t):e&&(e.current=t)}(e,t)}))}),e)};var w=n(39707),x=n(1588),k=n(27621);function B(e){return(0,k.Z)("MuiTypography",e)}(0,x.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var S=n(85893);const C=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],M=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,u.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),W={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},P={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},R=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiTypography"}),a=(e=>P[e]||e)(n.color),l=(0,w.Z)((0,o.Z)({},n,{color:a})),{align:p="inherit",className:m,component:h,gutterBottom:d=!1,noWrap:y=!1,paragraph:g=!1,variant:f="body1",variantMapping:v=W}=l,b=(0,r.Z)(l,C),Z=(0,o.Z)({},l,{align:p,color:a,className:m,component:h,gutterBottom:d,noWrap:y,paragraph:g,variant:f,variantMapping:v}),x=h||(g?"p":v[f]||W[f])||"span",k=(e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:o,variant:a,classes:i}=e,l={root:["root",a,"inherit"!==e.align&&`align${(0,u.Z)(t)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,s.Z)(l,B,i)})(Z);return(0,S.jsx)(M,(0,o.Z)({as:x,ref:t,ownerState:Z,className:(0,i.Z)(k.root,m)},b))}));function T(e){return(0,k.Z)("MuiLink",e)}const A=(0,x.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var E=n(54844),L=n(41796);const N={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},D=({theme:e,ownerState:t})=>{const n=(e=>N[e]||e)(t.color),r=(0,E.DW)(e,`palette.${n}`,!1)||t.color,o=(0,E.DW)(e,`palette.${n}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,L.Fq)(r,.4)},F=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],$=(0,l.ZP)(R,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${(0,u.Z)(n.underline)}`],"button"===n.component&&t.button]}})((({theme:e,ownerState:t})=>(0,o.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:D({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${A.focusVisible}`]:{outline:"auto"}}))),V=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiLink"}),{className:l,color:p="primary",component:m="a",onBlur:h,onFocus:d,TypographyClasses:y,underline:g="always",variant:f="inherit",sx:v}=n,w=(0,r.Z)(n,F),{isFocusVisibleRef:x,onBlur:k,onFocus:B,ref:C}=b(),[M,W]=a.useState(!1),P=Z(t,C),R=(0,o.Z)({},n,{color:p,component:m,focusVisible:M,underline:g,variant:f}),A=(e=>{const{classes:t,component:n,focusVisible:r,underline:o}=e,a={root:["root",`underline${(0,u.Z)(o)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,s.Z)(a,T,t)})(R);return(0,S.jsx)($,(0,o.Z)({color:p,className:(0,i.Z)(A.root,l),classes:y,component:m,onBlur:e=>{k(e),!1===x.current&&W(!1),h&&h(e)},onFocus:e=>{B(e),!0===x.current&&W(!0),d&&d(e)},ref:P,ownerState:R,variant:f,sx:[...Object.keys(N).includes(p)?[]:[{color:p}],...Array.isArray(v)?v:[v]]},w))}))},39707:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(87462),o=n(63366),a=n(59766),i=n(44920);const s=["sx"],u=e=>{var t,n;const r={systemProps:{},otherProps:{}},o=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:i.Z;return Object.keys(e).forEach((t=>{o[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]})),r};function l(e){const{sx:t}=e,n=(0,o.Z)(e,s),{systemProps:i,otherProps:l}=u(n);let c;return c=Array.isArray(t)?[i,...t]:"function"==typeof t?(...e)=>{const n=t(...e);return(0,a.P)(n)?(0,r.Z)({},i,n):i}:(0,r.Z)({},i,t),(0,r.Z)({},l,{sx:c})}}}]);