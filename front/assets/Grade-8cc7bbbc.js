import{r as l,j as s}from"./index-4fc6d3e1.js";import{h as f,b as S,i as O,j}from"./utils-d9615ed8.js";import{T as $}from"./Table-a3c22f31.js";import{M}from"./Modal-16c8bc24.js";import{M as w}from"./ModalButton-c486e6eb.js";import{F}from"./Form-c17a99b6.js";import{E as c}from"./types-ea6d41af.js";import{b as T}from"./bootstrap.bundle.min-3b8a8c88.js";import"./axios-4a70c6fc.js";import"./utils-89423bbb.js";import"./Grow-f6363472.js";function z(){const[u,a]=l.useState([]),[o,h]=l.useState([]),[m,p]=l.useState({});l.useEffect(()=>{f().then(t=>{a(t)}),S().then(t=>{h(t)})},[]);function b(){return o.filter(e=>!e.role.includes("student")).map(e=>({id:e.id,label:`${e.surname} ${e.name[0]}.`}))}function g(){return o.filter(e=>e.role.includes("student")).map(e=>({value:e.id,text:`${e.surname} ${e.name[0]}.`}))}function G(t){m.id&&(t.id=m.id),O(t).then(()=>{f().then(e=>{console.log(e),a(e)})})}function x(t){a(u.filter(e=>!t.includes(e.id))),j(t)}function E(t){p(t),new T.Modal(document.getElementById("grade_modal"),{}).show()}function i(t,e){var r;switch(e){case"head_id":let n=o.find(d=>d.id===t.head_id);return`${n==null?void 0:n.surname} ${n==null?void 0:n.name[0]}.`;case"student":return(r=t.student)==null?void 0:r.length;default:return t[e]}}function _(t,e){const r=u.sort((n,d)=>i(n,t)>i(d,t)?e?1:-1:i(n,t)<i(d,t)?e?-1:1:0);a([...r])}return s.jsxs(s.Fragment,{children:[s.jsx(M,{title:"Класс",connected_with:"grade_modal",children:s.jsx(F,{elements:[{name:"name",label:"Имя",type:c.INPUT,settings:{}},{name:"head_id",label:"Руководитель",type:c.COMBOBOX,settings:{options:b()}},{name:"student",label:"Ученики",type:c.SMART_SELECT,settings:{options:g(),multiple:!0,size:10}}],instance:m,onSubmit:G})}),s.jsx(w,{connected_with:"grade_modal",button_text:"Создание класса",additionalClasses:"m-3",preOpen:()=>{p({})}}),s.jsx($,{elements:u,table_fields:[{label:"Имя",name:"name"},{label:"Руководитель",name:"head_id",valueProcessing:t=>{let e=o.find(r=>r.id===t);if(e)return`${e.surname} ${e.name[0]}.`}},{label:"Количество учащихся",name:"student",valueProcessing:t=>t.length}],NeedDelete:!0,NeedEdit:!0,Sort:_,onDelete:x,onEdit:E})]})}export{z as default};
