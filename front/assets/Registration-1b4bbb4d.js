import{u as l,j as e,L as m,b as i}from"./index-475ebcbf.js";import{C as p}from"./Card-9733c669.js";import{F as c}from"./Form-a4bbeb91.js";import{E as s}from"./config-d7ec2646.js";import{R as d}from"./utils-0d29d525.js";import{u as g}from"./useDispatch-46a20cf1.js";import"./Grow-a1b9d88b.js";function b(){const o=l();function r(a){if(a.password!==a.password2){t(i({type:"danger",text:"Пароли не совпадают"}));return}d(a).then(()=>{t(i({type:"success",text:"Регистрация прошла успешно. Проверьте почту"})),o("/login")}).catch(n=>{console.log(n),t(i({type:"danger",text:n.response.status===409?n.response.data:"Произошла ошибка"}))})}const t=g();return e.jsx("div",{className:"full-height container",children:e.jsx("div",{className:"row h-100 justify-content-center align-items-center",children:e.jsx("div",{className:"col-lg-4",children:e.jsxs(p,{children:[e.jsx("h3",{children:"Регистрация"}),e.jsx(c,{elements:[{label:"Логин",name:"login",type:s.INPUT,settings:{}},{label:"Пароль",name:"password",type:s.INPUT,settings:{type:"password"}},{label:"Повторите пароль",name:"password2",type:s.INPUT,settings:{type:"password"}},{label:"Электропочта",name:"email",type:s.INPUT,settings:{type:"email"}},{label:"Дополнительный код (необязательно)",name:"key",type:s.INPUT,settings:{}}],onSubmit:r,buttonText:"Зарегистрироваться"}),e.jsxs("p",{className:"text-secondary m-0 mt-3",children:["Уже есть аккаунт? ",e.jsx(m,{to:"/login",children:"Войти"})]})]})})})})}export{b as default};
