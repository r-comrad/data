import{a as p}from"./runtime-dom.esm-bundler-6f3b7d2d.js";import{u as f}from"./vue-router-275fa628.js";import{u as v}from"./vuex.esm-bundler-a5fb55b5.js";import{a as l,U as c}from"./axios-2f89820f.js";import{G as h,T as g,H as b,z as w,o as S,c as q,a as e,M as n,y,J as N}from"./runtime-core.esm-bundler-c941a8b7.js";const k={class:"ps-5"},x={class:"my-3"},M=["innerHTML"],O={class:"my-3 border-top py-3"},T={action:"",onsubmit:"return false"},B={class:"form-label"},D={class:"row"},I={class:"col-4"},J={class:"col-4"},Q={__name:"QuestionPage",setup(L){const a=f(),r=v(),t=h(""),i=()=>{t.value=r.state.tasks.questions_list.find(s=>s.id===Number(a.params.id))},u=()=>{r.state.tasks.questions_list.length===0?l.get(c+"/get_question/contest="+JSON.parse(localStorage.getItem("user")).school_id+"/user_id="+JSON.parse(localStorage.getItem("user")).id).then(s=>{for(let o of s.data.questions)o.sent=o.user_answer!==void 0;r.commit("set_questions_list",s.data.questions),i()}):i()};g(u),b(a,()=>{u()});const d=w(()=>{switch(t.value.type){case 0:return"Введите правильный ответ";case 1:return"Выберите один правильный ответ";case 2:return"Выберите все правильные ответы";default:return"Загрузка...."}}),_=()=>{l({url:c+"/post/user_answer",method:"POST",data:{user_id:JSON.parse(localStorage.getItem("user")).id,question_id:Number(a.params.id),user_answer:t.value.user_answer,time:new Date().toISOString()}}).then(()=>{t.value.sent=!0})};return window.addEventListener("beforeunload",function(s){s.preventDefault(),s.returnValue=""}),(s,o)=>(S(),q("div",k,[e("h3",x,n(t.value.title),1),e("div",{innerHTML:t.value.legend,class:"border-top pt-3"},null,8,M),e("div",O,[e("form",T,[e("label",B,n(y(d)),1),e("div",D,[e("div",I,[N(e("input",{class:"form-control",maxlength:"10","onUpdate:modelValue":o[0]||(o[0]=m=>t.value.user_answer=m),required:""},null,512),[[p,t.value.user_answer]])]),e("div",J,[e("button",{class:"btn btn-primary",type:"submit",onClick:_},n(t.value.sent?"Изменить ответ":"Отправить"),1)])])])])]))}};export{Q as default};
