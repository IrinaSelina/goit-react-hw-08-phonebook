(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{140:function(e,t,r){"use strict";function n(e){var t=e.props,r=e.states,n=e.muiFormControl;return r.reduce((function(e,r){return e[r]=t[r],n&&"undefined"===typeof t[r]&&(e[r]=n[r]),e}),{})}r.d(t,"a",(function(){return n}))},141:function(e,t,r){"use strict";r.d(t,"b",(function(){return a}));var n=r(0),o=n.createContext();function a(){return n.useContext(o)}t.a=o},156:function(e,t,r){"use strict";var n=r(1),o=r(4),a=r(0),i=(r(10),r(8)),l=r(13),s=a.forwardRef((function(e,t){var r=e.classes,l=e.className,s=e.row,u=void 0!==s&&s,c=Object(o.a)(e,["classes","className","row"]);return a.createElement("div",Object(n.a)({className:Object(i.a)(r.root,l,u&&r.row),ref:t},c))}));t.a=Object(l.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(s)},159:function(e,t,r){"use strict";var n=r(1),o=r(4),a=r(0),i=(r(10),r(8)),l=r(69),s=r(140),u=r(141),c=r(13),d=r(15),f=r(32),p=r(55);function m(e,t){return parseInt(e[t],10)||0}var b="undefined"!==typeof window?a.useLayoutEffect:a.useEffect,h={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},v=a.forwardRef((function(e,t){var r=e.onChange,i=e.rows,l=e.rowsMax,s=e.rowsMin,u=e.maxRows,c=e.minRows,d=void 0===c?1:c,v=e.style,g=e.value,y=Object(o.a)(e,["onChange","rows","rowsMax","rowsMin","maxRows","minRows","style","value"]),w=u||l,x=i||s||d,O=a.useRef(null!=g).current,j=a.useRef(null),C=Object(f.a)(t,j),k=a.useRef(null),E=a.useRef(0),S=a.useState({}),M=S[0],R=S[1],N=a.useCallback((function(){var t=j.current,r=window.getComputedStyle(t),n=k.current;n.style.width=r.width,n.value=t.value||e.placeholder||"x","\n"===n.value.slice(-1)&&(n.value+=" ");var o=r["box-sizing"],a=m(r,"padding-bottom")+m(r,"padding-top"),i=m(r,"border-bottom-width")+m(r,"border-top-width"),l=n.scrollHeight-a;n.value="x";var s=n.scrollHeight-a,u=l;x&&(u=Math.max(Number(x)*s,u)),w&&(u=Math.min(Number(w)*s,u));var c=(u=Math.max(u,s))+("border-box"===o?a+i:0),d=Math.abs(u-l)<=1;R((function(e){return E.current<20&&(c>0&&Math.abs((e.outerHeightStyle||0)-c)>1||e.overflow!==d)?(E.current+=1,{overflow:d,outerHeightStyle:c}):e}))}),[w,x,e.placeholder]);a.useEffect((function(){var e=Object(p.a)((function(){E.current=0,N()}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[N]),b((function(){N()})),a.useEffect((function(){E.current=0}),[g]);return a.createElement(a.Fragment,null,a.createElement("textarea",Object(n.a)({value:g,onChange:function(e){E.current=0,O||N(),r&&r(e)},ref:C,rows:x,style:Object(n.a)({height:M.outerHeightStyle,overflow:M.overflow?"hidden":null},v)},y)),a.createElement("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:k,tabIndex:-1,style:Object(n.a)({},h,v)}))}));function g(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}var y="undefined"===typeof window?a.useEffect:a.useLayoutEffect,w=a.forwardRef((function(e,t){var r=e["aria-describedby"],c=e.autoComplete,p=e.autoFocus,m=e.classes,b=e.className,h=(e.color,e.defaultValue),w=e.disabled,x=e.endAdornment,O=(e.error,e.fullWidth),j=void 0!==O&&O,C=e.id,k=e.inputComponent,E=void 0===k?"input":k,S=e.inputProps,M=void 0===S?{}:S,R=e.inputRef,N=(e.margin,e.multiline),D=void 0!==N&&N,$=e.name,F=e.onBlur,A=e.onChange,B=e.onClick,q=e.onFocus,z=e.onKeyDown,W=e.onKeyUp,H=e.placeholder,L=e.readOnly,I=e.renderSuffix,T=e.rows,K=e.rowsMax,U=e.rowsMin,V=e.maxRows,P=e.minRows,X=e.startAdornment,J=e.type,G=void 0===J?"text":J,Z=e.value,Q=Object(o.a)(e,["aria-describedby","autoComplete","autoFocus","classes","className","color","defaultValue","disabled","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","rowsMax","rowsMin","maxRows","minRows","startAdornment","type","value"]),Y=null!=M.value?M.value:Z,_=a.useRef(null!=Y).current,ee=a.useRef(),te=a.useCallback((function(e){0}),[]),re=Object(f.a)(M.ref,te),ne=Object(f.a)(R,re),oe=Object(f.a)(ee,ne),ae=a.useState(!1),ie=ae[0],le=ae[1],se=Object(u.b)();var ue=Object(s.a)({props:e,muiFormControl:se,states:["color","disabled","error","hiddenLabel","margin","required","filled"]});ue.focused=se?se.focused:ie,a.useEffect((function(){!se&&w&&ie&&(le(!1),F&&F())}),[se,w,ie,F]);var ce=se&&se.onFilled,de=se&&se.onEmpty,fe=a.useCallback((function(e){!function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(g(e.value)&&""!==e.value||t&&g(e.defaultValue)&&""!==e.defaultValue)}(e)?de&&de():ce&&ce()}),[ce,de]);y((function(){_&&fe({value:Y})}),[Y,fe,_]);a.useEffect((function(){fe(ee.current)}),[]);var pe=E,me=Object(n.a)({},M,{ref:oe});"string"!==typeof pe?me=Object(n.a)({inputRef:oe,type:G},me,{ref:null}):D?!T||V||P||K||U?(me=Object(n.a)({minRows:T||P,rowsMax:K,maxRows:V},me),pe=v):pe="textarea":me=Object(n.a)({type:G},me);return a.useEffect((function(){se&&se.setAdornedStart(Boolean(X))}),[se,X]),a.createElement("div",Object(n.a)({className:Object(i.a)(m.root,m["color".concat(Object(d.a)(ue.color||"primary"))],b,ue.disabled&&m.disabled,ue.error&&m.error,j&&m.fullWidth,ue.focused&&m.focused,se&&m.formControl,D&&m.multiline,X&&m.adornedStart,x&&m.adornedEnd,"dense"===ue.margin&&m.marginDense),onClick:function(e){ee.current&&e.currentTarget===e.target&&ee.current.focus(),B&&B(e)},ref:t},Q),X,a.createElement(u.a.Provider,{value:null},a.createElement(pe,Object(n.a)({"aria-invalid":ue.error,"aria-describedby":r,autoComplete:c,autoFocus:p,defaultValue:h,disabled:ue.disabled,id:C,onAnimationStart:function(e){fe("mui-auto-fill-cancel"===e.animationName?ee.current:{value:"x"})},name:$,placeholder:H,readOnly:L,required:ue.required,rows:T,value:Y,onKeyDown:z,onKeyUp:W},me,{className:Object(i.a)(m.input,M.className,ue.disabled&&m.disabled,D&&m.inputMultiline,ue.hiddenLabel&&m.inputHiddenLabel,X&&m.inputAdornedStart,x&&m.inputAdornedEnd,"search"===G&&m.inputTypeSearch,"dense"===ue.margin&&m.inputMarginDense),onBlur:function(e){F&&F(e),M.onBlur&&M.onBlur(e),se&&se.onBlur?se.onBlur(e):le(!1)},onChange:function(e){if(!_){var t=e.target||ee.current;if(null==t)throw new Error(Object(l.a)(1));fe({value:t.value})}for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];M.onChange&&M.onChange.apply(M,[e].concat(n)),A&&A.apply(void 0,[e].concat(n))},onFocus:function(e){ue.disabled?e.stopPropagation():(q&&q(e),M.onFocus&&M.onFocus(e),se&&se.onFocus?se.onFocus(e):le(!0))}}))),x,I?I(Object(n.a)({},ue,{startAdornment:X})):null)})),x=Object(c.a)((function(e){var t="light"===e.palette.type,r={color:"currentColor",opacity:t?.42:.5,transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})},o={opacity:"0 !important"},a={opacity:t?.42:.5};return{"@global":{"@keyframes mui-auto-fill":{},"@keyframes mui-auto-fill-cancel":{}},root:Object(n.a)({},e.typography.body1,{color:e.palette.text.primary,lineHeight:"1.1876em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center","&$disabled":{color:e.palette.text.disabled,cursor:"default"}}),formControl:{},focused:{},disabled:{},adornedStart:{},adornedEnd:{},error:{},marginDense:{},multiline:{padding:"".concat(6,"px 0 ").concat(7,"px"),"&$marginDense":{paddingTop:3}},colorSecondary:{},fullWidth:{width:"100%"},input:{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"".concat(6,"px 0 ").concat(7,"px"),border:0,boxSizing:"content-box",background:"none",height:"1.1876em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{"-webkit-appearance":"none"},"label[data-shrink=false] + $formControl &":{"&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&:-ms-input-placeholder":o,"&::-ms-input-placeholder":o,"&:focus::-webkit-input-placeholder":a,"&:focus::-moz-placeholder":a,"&:focus:-ms-input-placeholder":a,"&:focus::-ms-input-placeholder":a},"&$disabled":{opacity:1},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},inputMarginDense:{paddingTop:3},inputMultiline:{height:"auto",resize:"none",padding:0},inputTypeSearch:{"-moz-appearance":"textfield","-webkit-appearance":"textfield"},inputAdornedStart:{},inputAdornedEnd:{},inputHiddenLabel:{}}}),{name:"MuiInputBase"})(w),O=a.forwardRef((function(e,t){var r=e.disableUnderline,l=e.classes,s=e.fullWidth,u=void 0!==s&&s,c=e.inputComponent,d=void 0===c?"input":c,f=e.multiline,p=void 0!==f&&f,m=e.type,b=void 0===m?"text":m,h=Object(o.a)(e,["disableUnderline","classes","fullWidth","inputComponent","multiline","type"]);return a.createElement(x,Object(n.a)({classes:Object(n.a)({},l,{root:Object(i.a)(l.root,!r&&l.underline),underline:null}),fullWidth:u,inputComponent:d,multiline:p,ref:t,type:b},h))}));O.muiName="Input";t.a=Object(c.a)((function(e){var t="light"===e.palette.type?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return{root:{position:"relative"},formControl:{"label + &":{marginTop:16}},focused:{},disabled:{},colorSecondary:{"&$underline:after":{borderBottomColor:e.palette.secondary.main}},underline:{"&:after":{borderBottom:"2px solid ".concat(e.palette.primary.main),left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},"&$focused:after":{transform:"scaleX(1)"},"&$error:after":{borderBottomColor:e.palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:"1px solid ".concat(t),left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},"&:hover:not($disabled):before":{borderBottom:"2px solid ".concat(e.palette.text.primary),"@media (hover: none)":{borderBottom:"1px solid ".concat(t)}},"&$disabled:before":{borderBottomStyle:"dotted"}},error:{},marginDense:{},multiline:{},fullWidth:{},input:{},inputMarginDense:{},inputMultiline:{},inputTypeSearch:{}}}),{name:"MuiInput"})(O)},160:function(e,t,r){"use strict";var n=r(1),o=r(4),a=r(0),i=(r(10),r(8)),l=r(140),s=r(141);function u(){return a.useContext(s.a)}var c=r(13),d=r(15),f=a.forwardRef((function(e,t){var r=e.children,s=e.classes,c=e.className,f=(e.color,e.component),p=void 0===f?"label":f,m=(e.disabled,e.error,e.filled,e.focused,e.required,Object(o.a)(e,["children","classes","className","color","component","disabled","error","filled","focused","required"])),b=u(),h=Object(l.a)({props:e,muiFormControl:b,states:["color","required","focused","disabled","error","filled"]});return a.createElement(p,Object(n.a)({className:Object(i.a)(s.root,s["color".concat(Object(d.a)(h.color||"primary"))],c,h.disabled&&s.disabled,h.error&&s.error,h.filled&&s.filled,h.focused&&s.focused,h.required&&s.required),ref:t},m),r,h.required&&a.createElement("span",{"aria-hidden":!0,className:Object(i.a)(s.asterisk,h.error&&s.error)},"\u2009","*"))})),p=Object(c.a)((function(e){return{root:Object(n.a)({color:e.palette.text.secondary},e.typography.body1,{lineHeight:1,padding:0,"&$focused":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),colorSecondary:{"&$focused":{color:e.palette.secondary.main}},focused:{},disabled:{},error:{},filled:{},required:{},asterisk:{"&$error":{color:e.palette.error.main}}}}),{name:"MuiFormLabel"})(f),m=a.forwardRef((function(e,t){var r=e.classes,s=e.className,c=e.disableAnimation,d=void 0!==c&&c,f=(e.margin,e.shrink),m=(e.variant,Object(o.a)(e,["classes","className","disableAnimation","margin","shrink","variant"])),b=u(),h=f;"undefined"===typeof h&&b&&(h=b.filled||b.focused||b.adornedStart);var v=Object(l.a)({props:e,muiFormControl:b,states:["margin","variant"]});return a.createElement(p,Object(n.a)({"data-shrink":h,className:Object(i.a)(r.root,s,b&&r.formControl,!d&&r.animated,h&&r.shrink,"dense"===v.margin&&r.marginDense,{filled:r.filled,outlined:r.outlined}[v.variant]),classes:{focused:r.focused,disabled:r.disabled,error:r.error,required:r.required,asterisk:r.asterisk},ref:t},m))}));t.a=Object(c.a)((function(e){return{root:{display:"block",transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},asterisk:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 12px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}}),{name:"MuiInputLabel"})(m)}}]);
//# sourceMappingURL=0.76fb0789.chunk.js.map