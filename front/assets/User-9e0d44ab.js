import{r as u,G as y,j as t}from"./index-648ea929.js";import{T as M}from"./Table-a7f3a1cb.js";import{b as g,c as N,D as I,d as C}from"./utils-e98f4032.js";import{M as x}from"./Modal-e56f6ae2.js";import{M as b}from"./ModalButton-19d58689.js";import{F as f}from"./Form-4cab7a04.js";import{E as s,M as a}from"./config-a5b38a07.js";import{b as F}from"./bootstrap.bundle.min-8af756cc.js";import{P as _}from"./Paginator-446d043a.js";import"./Grow-c1eb770b.js";function k(){const[n,o]=u.useState([]),[i,m]=u.useState({}),h=y(),[l,d]=u.useState(0);u.useEffect(()=>{g().then(e=>{o(e)})},[]);function E(e){switch(e){case"admin":return"Администратор";case"teacher":return"Преподаватель";case"student":return"Студент";case"submitor":return"Участник соревнований";default:return e}}function U(e){o(n.filter(r=>!e.includes(r.id))),I(e)}function j(e){e.school_id=h.school_id,i.id&&(e.id=i.id),C(e).then(()=>{g().then(r=>{o(r)})})}function P(e){m(e),new F.Modal(document.getElementById("user_modal"),{}).show()}function T(e,r){const S=n.sort((c,p)=>c[e]>p[e]?r?1:-1:c[e]<p[e]?r?-1:1:0);o([...S])}function w(){return n.slice(l*a,l*a+a)}return t.jsxs(t.Fragment,{children:[t.jsx(x,{connected_with:"user_modal",title:"Юзер",children:t.jsx(f,{elements:[{name:"name",label:"Имя",type:s.INPUT,settings:{required:!0}},{name:"surname",label:"Фамилия",type:s.INPUT,settings:{required:!0}},{name:"login",label:"Логин",type:s.INPUT,settings:{required:!0}},{name:"password",label:"Пароль",type:s.INPUT,settings:{required:!0}},{name:"role",label:"Роль",type:s.SELECT,settings:{options:[{value:"admin",text:"Администратор"},{value:"teacher",text:"Преподаватель"},{value:"student",text:"Студент"},{value:"submitor",text:"Участник соревнований"}],multiple:!0,required:!0}}],instance:i,onSubmit:j,buttonText:"Отправить"})}),t.jsx(b,{connected_with:"user_modal",additionalClasses:"m-3",preOpen:()=>{m({})},button_text:"Создание юзера"}),t.jsx(x,{connected_with:"multiple_users_modal",title:"Загрузка через файл",children:t.jsx(f,{elements:[{name:"file",label:"Файл",type:s.FILE,settings:{}}],onSubmit:e=>{N(e.file)},buttonText:"Отправить"})}),t.jsx(b,{connected_with:"multiple_users_modal",button_text:"Загрузить через файл"}),t.jsx(_,{max_page:n.length/a,current_page:l,onPageChange:e=>{d(e)}}),t.jsx(M,{elements:w(),additional_classes:"mt-3",table_fields:[{name:"name",label:"Имя"},{name:"surname",label:"Фамилия"},{name:"login",label:"Логин"},{name:"password",label:"Пароль"},{name:"role",label:"Роль",valueProcessing:e=>e.map(r=>E(r)).join(", "),width:20}],NeedEdit:!0,NeedDelete:!0,onEdit:P,onDelete:U,Sort:T}),t.jsx(_,{max_page:n.length/a,current_page:l,onPageChange:e=>{d(e)}})]})}export{k as default};