import{a as f}from"./runtime-dom.esm-bundler-7b46b8fa.js";import{u as h}from"./vue-router-95605d56.js";import{u as g}from"./vuex.esm-bundler-49e4e032.js";import{a as u,U as r}from"./axios-2f89820f.js";import{G as m,U as q,H as w,z as b,o as y,c as S,a as s,M as l,y as k,J as x}from"./runtime-core.esm-bundler-2db63ed2.js";const M={class:"ps-5"},N={class:"my-3"},B=["innerHTML"],L={class:"my-3 border-top py-3"},T={action:"",onsubmit:"return false"},U={class:"form-label"},D={class:"row"},E={class:"col-4"},H={class:"col-4"},Q={__name:"QuestionPage",setup(J){const o=h(),i=g(),e=m(""),d=()=>{let t=i.state.tasks.questions_list.find(a=>a.id===Number(o.params.id));t.legend===void 0&&o.params.id?u.get(r+"/get_question/"+o.params.id+"/"+JSON.parse(localStorage.getItem("user")).id).then(a=>{e.value=a.data.question,e.value.answer&&(e.value.answer=e.value.answer.slice(0,e.value.answer.length-1),n.value=e.value.answer),i.commit("update_singe_question",{id:e.value.id,new_value:e.value})}):(e.value=t,n.value=e.value.answer)},n=m(),c=()=>{i.state.tasks.questions_list.length===0?u.get(r+"/get/if/competition_question/competition_id="+o.params.c_id).then(t=>{t.data.competition_questions.forEach(a=>{a.id=a.question_id}),i.commit("set_questions_list",t.data.competition_questions),d()}):d()};q(()=>{c()}),w(o,()=>{o.name==="question_page"&&c()});const _=b(()=>{switch(e.value.type){case 0:return"Введите правильный ответ";case 1:return"Выберите правильный ответ";case 2:return"Выберите все правильные ответы";default:return"Загрузка...."}}),p=()=>{u({url:r+"/post/answer",method:"POST",data:{user_id:JSON.parse(localStorage.getItem("user")).id,question_id:Number(o.params.id),value:n.value}}).then(t=>{e.value.sent=!0,e.value.answer=n.value,i.commit("update_singe_question",{id:e.value.id,new_value:e.value})})};return window.addEventListener("beforeunload",function(t){t.preventDefault(),t.returnValue=""}),(t,a)=>(y(),S("div",M,[s("h3",N,l(e.value.name),1),s("div",{innerHTML:e.value.legend,class:"border-top pt-3"},null,8,B),s("div",L,[s("form",T,[s("label",U,l(k(_)),1),s("div",D,[s("div",E,[x(s("input",{class:"form-control",maxlength:"10","onUpdate:modelValue":a[0]||(a[0]=v=>n.value=v),required:""},null,512),[[f,n.value]])]),s("div",H,[s("button",{class:"btn btn-primary",type:"submit",onClick:p},l(e.value.verdict?"Изменить ответ":"Отправить"),1)])])])])]))}};export{Q as default};
