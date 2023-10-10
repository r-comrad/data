import{r as i,j as t}from"./index-4fc6d3e1.js";import{T as y}from"./Table-a3c22f31.js";import{b as f,c as M,D as N,d as I}from"./utils-d9615ed8.js";import{M as g}from"./Modal-16c8bc24.js";import{M as x}from"./ModalButton-c486e6eb.js";import{F as b}from"./Form-c17a99b6.js";import{E as s,M as a}from"./types-ea6d41af.js";import{G as C}from"./utils-89423bbb.js";import{b as F}from"./bootstrap.bundle.min-3b8a8c88.js";import{P as _}from"./Paginator-fe4dbc2b.js";import"./axios-4a70c6fc.js";import"./Grow-f6363472.js";function H(){const[n,o]=i.useState([]),[u,m]=i.useState({}),h=C(),[l,d]=i.useState(0);i.useEffect(()=>{f().then(e=>{o(e)})},[]);function E(e){switch(e){case"admin":return"Администратор";case"teacher":return"Преподаватель";case"student":return"Студент";case"submitor":return"Участник соревнований";default:return e}}function U(e){o(n.filter(r=>!e.includes(r.id))),N(e)}function j(e){e.school_id=h.school_id,u.id&&(e.id=u.id),I(e).then(()=>{f().then(r=>{o(r)})})}function P(e){m(e),new F.Modal(document.getElementById("user_modal"),{}).show()}function T(e,r){const S=n.sort((c,p)=>c[e]>p[e]?r?1:-1:c[e]<p[e]?r?-1:1:0);o([...S])}function w(){return n.slice(l*a,l*a+a)}return t.jsxs(t.Fragment,{children:[t.jsx(g,{connected_with:"user_modal",title:"Юзер",children:t.jsx(b,{elements:[{name:"name",label:"Имя",type:s.INPUT,settings:{required:!0}},{name:"surname",label:"Фамилия",type:s.INPUT,settings:{required:!0}},{name:"login",label:"Логин",type:s.INPUT,settings:{required:!0}},{name:"password",label:"Пароль",type:s.INPUT,settings:{required:!0}},{name:"role",label:"Роль",type:s.SELECT,settings:{options:[{value:"admin",text:"Администратор"},{value:"teacher",text:"Преподаватель"},{value:"student",text:"Студент"},{value:"submitor",text:"Участник соревнований"}],multiple:!0,required:!0}}],instance:u,onSubmit:j,buttonText:"Отправить"})}),t.jsx(x,{connected_with:"user_modal",additionalClasses:"m-3",preOpen:()=>{m({})},button_text:"Создание юзера"}),t.jsx(g,{connected_with:"multiple_users_modal",title:"Загрузка через файл",children:t.jsx(b,{elements:[{name:"file",label:"Файл",type:s.FILE,settings:{}}],onSubmit:e=>{M(e.file)},buttonText:"Отправить"})}),t.jsx(x,{connected_with:"multiple_users_modal",button_text:"Загрузить через файл"}),t.jsx(_,{max_page:n.length/a,current_page:l,onPageChange:e=>{d(e)}}),t.jsx(y,{elements:w(),additional_classes:"mt-3",table_fields:[{name:"name",label:"Имя"},{name:"surname",label:"Фамилия"},{name:"login",label:"Логин"},{name:"password",label:"Пароль"},{name:"role",label:"Роль",valueProcessing:e=>e.map(r=>E(r)).join(", "),width:20}],NeedEdit:!0,NeedDelete:!0,onEdit:P,onDelete:U,Sort:T}),t.jsx(_,{max_page:n.length/a,current_page:l,onPageChange:e=>{d(e)}})]})}export{H as default};
