import{a as f}from"./runtime-dom.esm-bundler-7b46b8fa.js";import{u as g}from"./vue-router-95605d56.js";import{u as h}from"./vuex.esm-bundler-49e4e032.js";import{a as u,U as r}from"./axios-2f89820f.js";import{G as m,U as q,H as w,z as b,o as y,c as S,a as t,M as l,y as k,J as x}from"./runtime-core.esm-bundler-2db63ed2.js";const M={class:"ps-5"},N={class:"my-3"},B=["innerHTML"],L={class:"my-3 border-top py-3"},T={action:"",onsubmit:"return false"},U={class:"form-label"},D={class:"row"},H={class:"col-4"},J={class:"col-4"},Q={__name:"QuestionPage",setup(O){const a=g(),o=h(),e=m(""),c=()=>{let s=o.state.tasks.questions_list.find(i=>i.id===Number(a.params.id));s.legend===void 0&&a.params.id?u.get(r+"/get_question/"+a.params.id+"/"+JSON.parse(localStorage.getItem("user")).id).then(i=>{e.value=i.data.question,e.value.answer&&(e.value.answer=e.value.answer.slice(0,e.value.answer.length-1),n.value=e.value.answer),o.commit("update_singe_question",{id:e.value.id,new_value:e.value})}):(e.value=s,n.value=e.value.answer)},n=m(),d=()=>{o.state.tasks.questions_list.length===0?u.get(r+"/get/if/competition_question/competition_id="+a.params.c_id).then(s=>{o.state.tasks.questions_list.length===0&&o.commit("set_questions_list",s.data.competition_questions),c()}):c()};q(()=>{d()}),w(a,()=>{a.name==="question_page"&&d()});const _=b(()=>{switch(e.value.type){case 0:return"Введите правильный ответ";case 1:return"Выберите правильный ответ";case 2:return"Выберите все правильные ответы";default:return"Загрузка...."}}),p=()=>{u({url:r+"/post/answer",method:"POST",data:{user_id:JSON.parse(localStorage.getItem("user")).id,question_id:Number(a.params.id),value:n.value}}).then(s=>{e.value.sent=!0,e.value.answer=n.value,o.commit("update_singe_question",{id:e.value.id,new_value:e.value})})};return window.addEventListener("beforeunload",function(s){s.preventDefault(),s.returnValue=""}),(s,i)=>(y(),S("div",M,[t("h3",N,l(e.value.name),1),t("div",{innerHTML:e.value.legend,class:"border-top pt-3"},null,8,B),t("div",L,[t("form",T,[t("label",U,l(k(_)),1),t("div",D,[t("div",H,[x(t("input",{class:"form-control",maxlength:"10","onUpdate:modelValue":i[0]||(i[0]=v=>n.value=v),required:""},null,512),[[f,n.value]])]),t("div",J,[t("button",{class:"btn btn-primary",type:"submit",onClick:p},l(e.value.verdict?"Изменить ответ":"Отправить"),1)])])])])]))}};export{Q as default};