import{r as u,j as n}from"./index-be40ab28.js";import{M as b}from"./Modal-60fb6456.js";import{M as j}from"./ModalButton-d354bf13.js";import{F as p}from"./Form-3c54cf79.js";import{f as i,E as f,m as S,n as x}from"./utils-e053d425.js";import{T as h}from"./Table-b477c3ef.js";import{b as E}from"./bootstrap.bundle.min-ad4f528d.js";import"./Grow-f1dfb45a.js";import"./axios-4a70c6fc.js";import"./utils-978ca1b9.js";function B(){const[m,r]=u.useState([]),[a,c]=u.useState({});u.useEffect(()=>{i().then(t=>{r(t)})},[]);function l(t){a.id&&(t.id=a.id),x(t).then(()=>{i().then(e=>{r(e)})})}function d(t,e){r(e?[...m.sort((s,o)=>s[t]>o[t]?1:s[t]<o[t]?-1:0)]:[...m.sort((s,o)=>s[t]<o[t]?1:s[t]>o[t]?-1:0)])}return n.jsxs(n.Fragment,{children:[n.jsx(b,{title:"Предмет",connected_with:"subject_modal",children:n.jsx(p,{elements:[{name:"name",label:"Название",type:f.INPUT,settings:{}}],onSubmit:l,instance:a})}),n.jsx(j,{connected_with:"subject_modal",button_text:"Создать предмет",additionalClasses:"m-3",preOpen:()=>{c({})}}),n.jsx(h,{elements:m,table_fields:[{label:"Название",name:"name"}],onEdit:t=>{c(t),new E.Modal(document.getElementById("subject_modal"),{}).show()},Sort:d,NeedEdit:!0,NeedDelete:!0,onDelete:t=>{S(t).then(()=>{i().then(e=>{r(e)})})}})]})}export{B as default};
