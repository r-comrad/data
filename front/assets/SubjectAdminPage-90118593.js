import{r as u,j as n}from"./index-2af6571f.js";import{M as p}from"./Modal-426246ce.js";import{M as b}from"./ModalButton-609a1b61.js";import{F as j}from"./Form-d60668ab.js";import{E as f}from"./config-d7ec2646.js";import{f as i,m as S,n as x}from"./utils-a9650f71.js";import{T as h}from"./Table-18c043ab.js";import{b as E}from"./bootstrap.bundle.min-d0a28253.js";import"./Grow-4fb3eeea.js";import"./axios-4a70c6fc.js";import"./utils-978ca1b9.js";function C(){const[m,r]=u.useState([]),[a,c]=u.useState({});u.useEffect(()=>{i().then(t=>{r(t)})},[]);function l(t){a.id&&(t.id=a.id),x(t).then(()=>{i().then(e=>{r(e)})})}function d(t,e){r(e?[...m.sort((o,s)=>o[t]>s[t]?1:o[t]<s[t]?-1:0)]:[...m.sort((o,s)=>o[t]<s[t]?1:o[t]>s[t]?-1:0)])}return n.jsxs(n.Fragment,{children:[n.jsx(p,{title:"Предмет",connected_with:"subject_modal",children:n.jsx(j,{elements:[{name:"name",label:"Название",type:f.INPUT,settings:{}}],onSubmit:l,instance:a})}),n.jsx(b,{connected_with:"subject_modal",button_text:"Создать предмет",additionalClasses:"m-3",preOpen:()=>{c({})}}),n.jsx(h,{elements:m,table_fields:[{label:"Название",name:"name"}],onEdit:t=>{c(t),new E.Modal(document.getElementById("subject_modal"),{}).show()},Sort:d,NeedEdit:!0,NeedDelete:!0,onDelete:t=>{S(t).then(()=>{i().then(e=>{r(e)})})}})]})}export{C as default};