import{u as g,j as e,b as w,g as y,r as h}from"./index-d7b616ef.js";import{r as N,s as v,t as _}from"./utils-efc83923.js";import{u as C}from"./useDispatch-6200ca8e.js";import{F as T}from"./Form-8d86b9e5.js";import{E as m}from"./config-16fea0ec.js";import{M as E}from"./Modal-825bef68.js";import{b as S}from"./bootstrap.bundle.min-a4afe193.js";import"./Grow-920096fd.js";function I({contest:o,setCurrentQuestion:s,currentQuestion:d}){var c;const r=C(),u=g();return e.jsxs("div",{className:"d-flex flex-column h-100",children:[e.jsx("div",{className:"py-3 fs-3 fw-bold border-bottom",children:o.name}),e.jsx("div",{className:"py-3 flex-grow-1 overflow-auto border-bottom",children:e.jsx("ul",{className:"list-group",children:(c=o.questions)==null?void 0:c.map((i,f)=>e.jsx("li",{className:`list-group-item ${i.id==d?"active":""}`,children:e.jsx("a",{className:`text-decoration-none ${i.id==d?"text-white":"text-dark"}`,href:"#",onClick:()=>{s(i.id)},children:i.name})},f))})}),e.jsx("div",{className:"my-4",children:e.jsx("button",{className:"btn btn-primary",onClick:()=>{r(w({type:"success",text:"Вы успешно вышли из соревнования"})),u("/")},children:"Закончить соревнование"})})]})}function $({currentQuestion:o,GetQuestion:s,UpdateQuestion:d}){function r(){var n,t;if(!s())return[];switch(s().type){case"singl":return[{label:"Ответ",type:m.INPUT,name:"answer",settings:{}}];case"bool":return[{label:"Ответ",type:m.COMBOBOX,name:"answer",settings:{options:[{id:"true",label:"Да"},{id:"false",label:"Нет"}]}}];case"table":return[{label:"Ответ",type:m.TABLE_INPUT,name:"answer",settings:{headers:[...(n=s())==null?void 0:n.ans_list]}}];case"vertical_table":return[{label:"Ответ",type:m.TABLE_INPUT,name:"answer",settings:{headers:[...(t=s())==null?void 0:t.ans_list],vertical:!0}}];case"check":return s().ans_list.map((a,l)=>({label:`${l+1}. ${a}`,type:m.CHECKBOX,name:String(l),settings:{}}));case"radio":return s().ans_list.map((a,l)=>({label:`${l+1}. ${a}`,type:m.RADIO,name:String(l),settings:{connect_with:`${s().id}`}}));default:return[]}}function u(n){switch(s().type){case"table":case"vertical_table":return{answer:n?n.split(","):null};case"check":case"radio":let t={};return n!=null&&n.split(",").map(a=>{t[a]=!0}),t;default:return{answer:n||null}}}function c(n){if(!n)return"";switch(s().type){case"table":case"vertical_table":return n.join(",");case"check":case"radio":return Object.keys(n).filter(t=>n[t]).join(",");default:return n.answer}}const i={true:"Да",false:"Нет",tru:"Да",fals:"Нет"},f={singl:"col-4",multi:"col-4",table:"col-12",bool:"col-4"};return e.jsx(e.Fragment,{children:o==-1?e.jsxs("div",{className:"h-100 d-flex justify-content-center align-items-center",children:[e.jsx("i",{className:"bi bi-arrow-left fs-1 me-2"}),e.jsx("h3",{className:"m-0",children:"Выберете задание из списка слева"})]}):e.jsxs(e.Fragment,{children:[e.jsxs(E,{title:"Ответ записан",connected_with:"answer",children:['Ответ "',s().type=="bool"?i[s().answer]:s().answer,'" на вопрос "',s().name,'" записан!']}),e.jsxs("div",{className:"d-flex flex-column h-100",children:[e.jsxs("div",{className:" p-3 d-flex align-items-center border-bottom",children:[e.jsx("h3",{className:"fw-bold m-0 me-3",children:s().name}),s().answer?e.jsxs("p",{className:"text-secondary m-0",children:[e.jsx("i",{className:"bi bi-check-circle me-1"}),"Ответ сохранен"]}):null]}),e.jsx("div",{className:"p-3 flex-grow-1 border-bottom",dangerouslySetInnerHTML:{__html:s().legend}}),e.jsx("div",{className:"my-4 row",children:e.jsx("div",{className:f[s().type],children:e.jsx(T,{elements:r(),onSubmit:n=>{let t;["table","vertical_table"].includes(s().type)?t=c(n.answer):t=c(n),N(o,t).then(()=>{d(!0),t&&new S.Modal(document.getElementById("answer"),{}).show()})},additionalClassesButton:s().answer?"btn-outline-primary":void 0,buttonText:s().answer?"Перезаписать ответ":"Отправить ответ",instance:u(s().answer)})})})]})]})})}function O(){const o=y(),[s,d]=h.useState({}),[r,u]=h.useState(-1);h.useEffect(()=>{v(o.contest_id).then(t=>{d(t)})},[]);function c(){var a;let t=(a=s.questions)==null?void 0:a.findIndex(l=>l.id==r);return t==-1?{}:s.questions[t]}function i(t=!1){!r||r==-1||c().legend&&!t||_(r).then(a=>{var x,p,b;const l=(x=s.questions)==null?void 0:x.findIndex(j=>j.id==r);d({...s,questions:[...(p=s.questions)==null?void 0:p.slice(0,l),a,...(b=s.questions)==null?void 0:b.slice(l+1)]})})}function f(){return s.error?new Date(s.start_time)-new Date(s.error):0}function n(t){return`${new Date(t).getUTCHours()} часов и ${new Date(t).getUTCMinutes()} минут `}return h.useEffect(()=>{i()},[r]),e.jsx("div",{className:"row h-100",style:{maxWidth:"100%"},children:s.error?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"col-12 h-100 text-center d-flex justify-content-center align-items-center flex-column",children:[e.jsx("div",{children:e.jsx("h1",{children:"Соревнование еще не началось"})}),e.jsxs("p",{children:["Перезагрузите страницу через ",n(f())]})]})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"col-lg-2 col-md-3 border-end h-100 text-center",children:e.jsx(I,{contest:s,currentQuestion:r,setCurrentQuestion:u})}),e.jsx("div",{className:"col-lg-10 col-md-9 h-100 overflow-auto",children:e.jsx($,{currentQuestion:r,GetQuestion:c,UpdateQuestion:i})})]})})}export{O as default};