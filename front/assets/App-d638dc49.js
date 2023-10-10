import{j as t,L as We,r as i,O as bo,a as xo}from"./index-4fc6d3e1.js";import{G as F,D as To}from"./utils-89423bbb.js";import"./bootstrap.bundle.min-3b8a8c88.js";import{g as vo,a as yo,s as Q,P as Ue,_ as s,c as ze,b as Ve,u as wo,d as Po,e as jo,f as Co,h as No,i as Ro,j as Mo,k as Oo,l as S,G as De,m as k,n as $o}from"./Grow-f6363472.js";import{a as Ae}from"./axios-4a70c6fc.js";import{M as Lo}from"./MessageBlock-45922cee.js";import{u as Eo}from"./useDispatch-143b2f2c.js";function _o({title:o,bootstrap_icon_name:e}){const n=F();return t.jsx("nav",{className:"navbar navbar-expand-lg bg-body-tertiary",children:t.jsxs("div",{className:"container-fluid",children:[t.jsxs(We,{className:"navbar-brand",to:"/",children:[t.jsx("i",{className:`bi ${e} me-3`}),o]}),t.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:t.jsx("span",{className:"navbar-toggler-icon"})}),t.jsxs("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[t.jsx("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"}),t.jsx("p",{className:"p-0 m-0",children:n?`${n.surname} ${n.name[0]}.`:""})]})]})})}function So(o){return yo("MuiTooltip",o)}const ko=vo("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),f=ko,Io=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function Bo(o){return Math.round(o*1e5)/1e5}const Fo=o=>{const{classes:e,disableInteractive:n,arrow:c,touch:a,placement:p}=o,T={popper:["popper",!n&&"popperInteractive",c&&"popperArrow"],tooltip:["tooltip",c&&"tooltipArrow",a&&"touch",`tooltipPlacement${ze(p.split("-")[0])}`],arrow:["arrow"]};return $o(T,So,e)},Do=Q(Ue,{name:"MuiTooltip",slot:"Popper",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.popper,!n.disableInteractive&&e.popperInteractive,n.arrow&&e.popperArrow,!n.open&&e.popperClose]}})(({theme:o,ownerState:e,open:n})=>s({zIndex:(o.vars||o).zIndex.tooltip,pointerEvents:"none"},!e.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},e.arrow&&{[`&[data-popper-placement*="bottom"] .${f.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${f.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${f.arrow}`]:s({},e.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${f.arrow}`]:s({},e.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Ao=Q("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.tooltip,n.touch&&e.touch,n.arrow&&e.tooltipArrow,e[`tooltipPlacement${ze(n.placement.split("-")[0])}`]]}})(({theme:o,ownerState:e})=>s({backgroundColor:o.vars?o.vars.palette.Tooltip.bg:Ve(o.palette.grey[700],.92),borderRadius:(o.vars||o).shape.borderRadius,color:(o.vars||o).palette.common.white,fontFamily:o.typography.fontFamily,padding:"4px 8px",fontSize:o.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:o.typography.fontWeightMedium},e.arrow&&{position:"relative",margin:0},e.touch&&{padding:"8px 16px",fontSize:o.typography.pxToRem(14),lineHeight:`${Bo(16/14)}em`,fontWeight:o.typography.fontWeightRegular},{[`.${f.popper}[data-popper-placement*="left"] &`]:s({transformOrigin:"right center"},e.isRtl?s({marginLeft:"14px"},e.touch&&{marginLeft:"24px"}):s({marginRight:"14px"},e.touch&&{marginRight:"24px"})),[`.${f.popper}[data-popper-placement*="right"] &`]:s({transformOrigin:"left center"},e.isRtl?s({marginRight:"14px"},e.touch&&{marginRight:"24px"}):s({marginLeft:"14px"},e.touch&&{marginLeft:"24px"})),[`.${f.popper}[data-popper-placement*="top"] &`]:s({transformOrigin:"center bottom",marginBottom:"14px"},e.touch&&{marginBottom:"24px"}),[`.${f.popper}[data-popper-placement*="bottom"] &`]:s({transformOrigin:"center top",marginTop:"14px"},e.touch&&{marginTop:"24px"})})),Wo=Q("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(o,e)=>e.arrow})(({theme:o})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:o.vars?o.vars.palette.Tooltip.bg:Ve(o.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let I=!1,J=null,N={x:0,y:0};function B(o,e){return n=>{e&&e(n),o(n)}}const Uo=i.forwardRef(function(e,n){var c,a,p,T,Z,ee,oe,te,re,ne,se,ie,ae,le,pe,ce,ue,de,me;const D=wo({props:e,name:"MuiTooltip"}),{arrow:fe=!1,children:A,components:R={},componentsProps:h={},describeChild:Ge=!1,disableFocusListener:He=!1,disableHoverListener:he=!1,disableInteractive:Ke=!1,disableTouchListener:qe=!1,enterDelay:ge=100,enterNextDelay:be=0,enterTouchDelay:Xe=700,followCursor:W=!1,id:Ye,leaveDelay:xe=0,leaveTouchDelay:Je=1500,onClose:Te,onOpen:ve,open:Qe,placement:ye="bottom",PopperComponent:U,PopperProps:g={},slotProps:b={},slots:M={},title:v,TransitionComponent:Ze=De,TransitionProps:eo}=D,we=Po(D,Io),m=i.isValidElement(A)?A:t.jsx("span",{children:A}),z=jo(),oo=z.direction==="rtl",[y,Pe]=i.useState(),[V,to]=i.useState(null),O=i.useRef(!1),G=Ke||W,$=i.useRef(),L=i.useRef(),x=i.useRef(),je=i.useRef(),[ro,Ce]=Co({controlled:Qe,default:!1,name:"Tooltip",state:"open"});let d=ro;const H=No(Ye),w=i.useRef(),E=i.useCallback(()=>{w.current!==void 0&&(document.body.style.WebkitUserSelect=w.current,w.current=void 0),clearTimeout(je.current)},[]);i.useEffect(()=>()=>{clearTimeout($.current),clearTimeout(L.current),clearTimeout(x.current),E()},[E]);const Ne=r=>{clearTimeout(J),I=!0,Ce(!0),ve&&!d&&ve(r)},_=Ro(r=>{clearTimeout(J),J=setTimeout(()=>{I=!1},800+xe),Ce(!1),Te&&d&&Te(r),clearTimeout($.current),$.current=setTimeout(()=>{O.current=!1},z.transitions.duration.shortest)}),K=r=>{O.current&&r.type!=="touchstart"||(y&&y.removeAttribute("title"),clearTimeout(L.current),clearTimeout(x.current),ge||I&&be?L.current=setTimeout(()=>{Ne(r)},I?be:ge):Ne(r))},Re=r=>{clearTimeout(L.current),clearTimeout(x.current),x.current=setTimeout(()=>{_(r)},xe)},{isFocusVisibleRef:Me,onBlur:no,onFocus:so,ref:io}=Mo(),[,Oe]=i.useState(!1),$e=r=>{no(r),Me.current===!1&&(Oe(!1),Re(r))},Le=r=>{y||Pe(r.currentTarget),so(r),Me.current===!0&&(Oe(!0),K(r))},Ee=r=>{O.current=!0;const l=m.props;l.onTouchStart&&l.onTouchStart(r)},_e=K,Se=Re,ao=r=>{Ee(r),clearTimeout(x.current),clearTimeout($.current),E(),w.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",je.current=setTimeout(()=>{document.body.style.WebkitUserSelect=w.current,K(r)},Xe)},lo=r=>{m.props.onTouchEnd&&m.props.onTouchEnd(r),E(),clearTimeout(x.current),x.current=setTimeout(()=>{_(r)},Je)};i.useEffect(()=>{if(!d)return;function r(l){(l.key==="Escape"||l.key==="Esc")&&_(l)}return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[_,d]);const po=Oo(m.ref,io,Pe,n);!v&&v!==0&&(d=!1);const q=i.useRef(),co=r=>{const l=m.props;l.onMouseMove&&l.onMouseMove(r),N={x:r.clientX,y:r.clientY},q.current&&q.current.update()},P={},X=typeof v=="string";Ge?(P.title=!d&&X&&!he?v:null,P["aria-describedby"]=d?H:null):(P["aria-label"]=X?v:null,P["aria-labelledby"]=d&&!X?H:null);const u=s({},P,we,m.props,{className:S(we.className,m.props.className),onTouchStart:Ee,ref:po},W?{onMouseMove:co}:{}),j={};qe||(u.onTouchStart=ao,u.onTouchEnd=lo),he||(u.onMouseOver=B(_e,u.onMouseOver),u.onMouseLeave=B(Se,u.onMouseLeave),G||(j.onMouseOver=_e,j.onMouseLeave=Se)),He||(u.onFocus=B(Le,u.onFocus),u.onBlur=B($e,u.onBlur),G||(j.onFocus=Le,j.onBlur=$e));const uo=i.useMemo(()=>{var r;let l=[{name:"arrow",enabled:!!V,options:{element:V,padding:4}}];return(r=g.popperOptions)!=null&&r.modifiers&&(l=l.concat(g.popperOptions.modifiers)),s({},g.popperOptions,{modifiers:l})},[V,g]),C=s({},D,{isRtl:oo,arrow:fe,disableInteractive:G,placement:ye,PopperComponentProp:U,touch:O.current}),Y=Fo(C),ke=(c=(a=M.popper)!=null?a:R.Popper)!=null?c:Do,Ie=(p=(T=(Z=M.transition)!=null?Z:R.Transition)!=null?T:Ze)!=null?p:De,Be=(ee=(oe=M.tooltip)!=null?oe:R.Tooltip)!=null?ee:Ao,Fe=(te=(re=M.arrow)!=null?re:R.Arrow)!=null?te:Wo,mo=k(ke,s({},g,(ne=b.popper)!=null?ne:h.popper,{className:S(Y.popper,g==null?void 0:g.className,(se=(ie=b.popper)!=null?ie:h.popper)==null?void 0:se.className)}),C),fo=k(Ie,s({},eo,(ae=b.transition)!=null?ae:h.transition),C),ho=k(Be,s({},(le=b.tooltip)!=null?le:h.tooltip,{className:S(Y.tooltip,(pe=(ce=b.tooltip)!=null?ce:h.tooltip)==null?void 0:pe.className)}),C),go=k(Fe,s({},(ue=b.arrow)!=null?ue:h.arrow,{className:S(Y.arrow,(de=(me=b.arrow)!=null?me:h.arrow)==null?void 0:de.className)}),C);return t.jsxs(i.Fragment,{children:[i.cloneElement(m,u),t.jsx(ke,s({as:U??Ue,placement:ye,anchorEl:W?{getBoundingClientRect:()=>({top:N.y,left:N.x,right:N.x,bottom:N.y,width:0,height:0})}:y,popperRef:q,open:y?d:!1,id:H,transition:!0},j,mo,{popperOptions:uo,children:({TransitionProps:r})=>t.jsx(Ie,s({timeout:z.transitions.duration.shorter},r,fo,{children:t.jsxs(Be,s({},ho,{children:[v,fe?t.jsx(Fe,s({},go,{ref:to})):null]}))}))}))]})}),zo=Uo;function Vo({tooltipOpen:o,text:e,icon:n,href:c}){return t.jsx("li",{className:"nav-item",children:t.jsx(We,{to:c,className:"nav-link py-3 border-bottom rounded-0",children:t.jsx("div",{className:"d-flex align-items-center justify-content-center",children:t.jsx(zo,{title:t.jsx("div",{className:"fs-6",children:e}),placement:"right",children:t.jsx("i",{className:`bi ${n}`,style:{fontSize:"24px"}})})})})})}function Go({elements:o}){const[e,n]=i.useState(!1),c=F();return t.jsxs("div",{className:"d-flex flex-column flex-shrink-0 bg-body-tertiary full-height",onMouseEnter:a=>{n(!0)},onMouseLeave:()=>{n(!1)},children:[t.jsx("ul",{className:"nav nav-pills nav-flush flex-column mb-auto text-center",children:o.map((a,p)=>t.jsx(Vo,{text:a.text,icon:a.icon,tooltipOpen:e,href:a.href},p))}),t.jsxs("div",{className:"dropdown border-top",children:[t.jsx("a",{href:"#",className:"d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false",children:t.jsx("i",{className:"bi bi-person-circle",style:{fontSize:"24px"}})}),t.jsx("ul",{className:"dropdown-menu text-small shadow",children:c?t.jsx("li",{children:t.jsx("a",{className:"dropdown-item",href:"#",onClick:()=>{To(),window.location.reload()},children:"Выход"})}):""})]})]})}function Ho(o){Ae.interceptors.response.use(function(e){return e},function(e){return e.response.status==403&&(localStorage.removeItem("user"),o("Пожалуйста перезайдите на сайт"),setTimeout(()=>{window.location.href="/"},2e3)),Promise.reject(e)}),Ae.interceptors.request.use(function(e){return F(),e})}function et(){const[o,e]=i.useState([{text:"Домашняя страница",icon:"bi-house",href:"/"}]),n=Eo();function c(a){n(xo({type:"danger",text:a}))}return i.useEffect(()=>{Ho(c);const a=F(),p=[];a&&(a.role.includes("teacher")&&p.push({text:"Журнал",icon:"bi-book",href:"/journal"}),a.role.some(T=>T.includes("add"))&&p.push({text:"Управление",icon:"bi-gear",href:"/admin"}),a.role.includes("submitor")&&p.push({text:"Соревнования",icon:"bi-trophy",href:"/contest"}),p.push({text:"Прочие функции",icon:"bi-card-list",href:"/other"})),e([...o,...p])},[]),t.jsxs(t.Fragment,{children:[t.jsx(_o,{title:"KysSys",bootstrap_icon_name:"bi-cpu"}),t.jsxs("div",{className:"d-flex full-height",children:[t.jsx("div",{className:"full-height",children:t.jsx(Go,{elements:o})}),t.jsxs("div",{className:"flex-grow-1 overflowable mx-5",children:[t.jsx(Lo,{}),t.jsx(bo,{})]})]})]})}export{et as default};
