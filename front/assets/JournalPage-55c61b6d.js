import{j as e,f as k,r as x,u as w,g as N,a as y}from"./index-be40ab28.js";import{G as D,S}from"./utils-e053d425.js";import{B as G}from"./Form-3c54cf79.js";import{M as J}from"./ModalButton-d354bf13.js";import{M as P}from"./Modal-60fb6456.js";import{J as C}from"./JournalSelect-5013abff.js";import{P as B}from"./Paginator-42b67d19.js";import{M as L}from"./utils-978ca1b9.js";import{u as $}from"./useDispatch-bdb3e9c4.js";import"./axios-4a70c6fc.js";import"./Grow-f1dfb45a.js";import"./bootstrap.bundle.min-ad4f528d.js";function I({lessons:r}){return e.jsxs("thead",{children:[e.jsxs("tr",{children:[e.jsx("th",{colSpan:2}),e.jsx("th",{colSpan:r.length,className:"text-center",children:"Даты"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"№"}),e.jsx("th",{children:"Фамилия, имя"}),r.map(a=>e.jsx("th",{children:e.jsx("div",{className:"m-auto text-center",children:`${new Date(a.date_val).getDate()<10?"0":""}${new Date(a.date_val).getDate()}`})},a.id))]})]})}function E({grade:r,lessons:a,onMarkChange:o}){function l(n,i){const d=n.marks.find(h=>h.student_id===i.id);return d?d.mark_value:""}return e.jsx("tbody",{children:r.map((n,i)=>e.jsxs("tr",{children:[e.jsx("td",{children:i+1}),e.jsxs("td",{style:{width:"15%"},children:[n.surname," ",n.name[0],"."]}),a.map(d=>e.jsx("td",{className:"m-0 p-0",children:e.jsx(G,{simple:!0,additionalClasses:"text-center invisible-input border-0",onInput:h=>{o(n.id,d.id,h.currentTarget.value)},value:l(d,n)})},d.id))]},n.id))})}function T({lessons:r}){function a(o){const l=new Date(o),n=l.getMonth()+1,i=l.getDate();return`${i>9?i:"0"+i}.${n>9?n:"0"+n}`}return e.jsx("table",{className:"table table-bordered table-striped",children:e.jsx("tbody",{children:r.map((o,l)=>e.jsxs("tr",{children:[e.jsx("td",{style:{verticalAlign:"middle"},children:a(o.date_val)}),e.jsx("td",{children:o.theme.name})]},l))})})}function X(){const r=k(),[a,o]=x.useState([]),[l,n]=x.useState(0),[i,d]=x.useState([]),h=$(),b=w();x.useEffect(()=>{D({id:Number(r.journal_id)}).then(t=>{o(t.lessons),d(t.grade.sort((s,m)=>s.surname.localeCompare(m.surname)))})},[r.journal_id]);function v(t,s,m){const c=a,u=c.findIndex(_=>_.id===s),g=c[u].marks.findIndex(_=>_.student_id===t);let f;g===-1?(c[u].marks.push({student_id:t,mark_value:m,lesson_id:s}),f=c[u].marks[c[u].marks.length-1]):(c[u].marks[g].mark_value=m,f=c[u].marks[g]),S({mark:f}).then(()=>{}),o(c)}function M(t){t.length==0?h(y({type:"danger",text:"Нет журнала для этого класса и предмета"})):b(`/journal/${t[0].id}`)}function p(){const t=[];for(let s=0;s<a.length;s++){const m=new Date(a[s].date_val);t.push(m.getMonth())}return Array.from(new Set(t))}function j(){let t=p()[l];return a.filter(s=>new Date(s.date_val).getMonth()===t)}return e.jsxs(e.Fragment,{children:[e.jsx(P,{connected_with:"select_journal_modal",title:"Выбор журнала",children:e.jsx(C,{GetJournal:M})}),e.jsx(J,{connected_with:"select_journal_modal",additionalClasses:"m-3",button_text:"Выбор журнала"}),a.length>0?e.jsxs("div",{className:"row m-0 p-0",children:[e.jsxs("div",{className:"col-lg-10 col-12",children:[e.jsx(B,{max_page:p().length-1,current_page:l,onPageChange:t=>{n(t)},custom_page_names:p().map(t=>L(t))}),e.jsxs("table",{className:"table table-striped table-bordered",children:[e.jsx(I,{lessons:j()}),e.jsx(E,{grade:i,lessons:j(),onMarkChange:v})]})]}),e.jsx("div",{className:"col-2 overflow-auto d-none d-lg-block",style:{maxHeight:"80vh"},children:e.jsx(T,{lessons:j()})})]}):e.jsx(N,{})]})}export{X as default};
