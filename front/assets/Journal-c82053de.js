import{r as a,j as i}from"./index-475ebcbf.js";import{k as j,h as y,b as C,f as J,e as w,P as A,l as $}from"./utils-0d29d525.js";import{T as v}from"./Table-3d38f329.js";import{M as D}from"./Modal-7e4fc0c0.js";import{M as F}from"./ModalButton-05781e6e.js";import{F as U}from"./Form-a4bbeb91.js";import{E as d}from"./config-d7ec2646.js";import{b as X}from"./bootstrap.bundle.min-e63a2eff.js";import"./Grow-a1b9d88b.js";function K(){const[f,m]=a.useState([]),[u,S]=a.useState([]),[r,x]=a.useState([]),[c,B]=a.useState([]),[p,E]=a.useState([]),[b,_]=a.useState({});a.useEffect(()=>{j().then(e=>{m(e)}),y().then(e=>{S(e)}),C().then(e=>{x(e)}),J().then(e=>{B(e)}),w().then(e=>{E(e)})},[]);function G(){return r.filter(t=>!t.role.includes("student")).map(t=>({id:t.id,label:`${t.surname} ${t.name[0]}.`}))}function M(e){b.id&&(e.id=b.id),console.log(e)}function l(e,t){var n,o,h,g,O;switch(e){case"grade_id":return(n=u.find(s=>s.id===t.grade_id))==null?void 0:n.name;case"subject_id":return(o=c.find(s=>s.id===t.subject_id))==null?void 0:o.name;case"plan_id":return(h=p.find(s=>s.id===t.plan_id))==null?void 0:h.name;case"teacher_id":return(g=r.find(s=>s.id===t.teacher_id))==null?void 0:g.name;case"methodist_id":return(O=r.find(s=>s.id===t.methodist_id))==null?void 0:O.name;default:return t[e]}}function P(e,t){m([...f.sort((n,o)=>t?l(e,n)>l(e,o)?1:-1:l(e,n)<l(e,o)?1:-1)])}return i.jsxs(i.Fragment,{children:[i.jsx(D,{title:"Журнал",connected_with:"journal_modal",children:i.jsx(U,{elements:[{label:"Класс",name:"grade_id",type:d.COMBOBOX,settings:{options:u.map(e=>({id:e.id,label:e.name}))}},{label:"Предмет",name:"subject_id",type:d.COMBOBOX,settings:{options:c.map(e=>({id:e.id,label:e.name}))}},{label:"План",name:"plan_id",type:d.COMBOBOX,settings:{options:p.map(e=>({id:e.id,label:e.name}))}},{label:"Учитель",name:"teacher_id",type:d.COMBOBOX,settings:{options:G()}},{label:"Рассписание",name:"schedule",type:d.SCHEDULE,settings:{}}],instance:b,onSubmit:M})}),i.jsx(F,{connected_with:"journal_modal",button_text:"Создать журнал",additionalClasses:"m-3",preOpen:()=>{_({})}}),i.jsx(v,{elements:f,table_fields:[{label:"Класс",name:"grade_id",valueProcessing:e=>{var t;return(t=u.find(n=>n.id===e))==null?void 0:t.name}},{label:"Предмет",name:"subject_id",valueProcessing:e=>{var t;return(t=c.find(n=>n.id===e))==null?void 0:t.name}},{label:"План",name:"plan_id",valueProcessing:e=>{var t;return(t=p.find(n=>n.id===e))==null?void 0:t.name}},{label:"Учитель",name:"teacher_id",valueProcessing:e=>{let t=r.find(n=>n.id===e);if(t)return`${t.surname} ${t.name[0]}.`}},{label:"Методист",name:"methodist_id",valueProcessing:e=>{let t=r.find(n=>n.id===e);if(t)return`${t.surname} ${t.name[0]}.`}},{label:"Распечатать журналы",name:"id",checkbox:{onButtonClick:e=>{A(e).then(t=>{window.open(t)})}}}],NeedEdit:!0,NeedDelete:!0,Sort:P,onDelete:e=>{$(e).then(()=>{j().then(t=>{m(t)})})},onEdit:e=>{_(e),new X.Modal(document.getElementById("journal_modal"),{}).show()}})]})}export{K as default};
