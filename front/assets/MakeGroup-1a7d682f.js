import{r as $}from"./index-073b7ca2.js";import{u as S}from"./vue-router-95605d56.js";import{a as C,d as G}from"./runtime-dom.esm-bundler-7b46b8fa.js";import{a as _,U as b}from"./axios-2f89820f.js";import{_ as M}from"./StudentsSearch-e806b55b.js";import{u as L}from"./vuex.esm-bundler-49e4e032.js";import{A as N,H as y,G as h,o as u,c as p,b as f,a as t,J as x,K as k,z as V,r as w,Q as D,L as I,M as O,P as R,R as U,y as B}from"./runtime-core.esm-bundler-2db63ed2.js";import"./utils-4f7fe0fc.js";const J={class:"modal fade",id:"group_create",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},T={class:"modal-dialog"},E={class:"modal-content"},P=t("div",{class:"modal-header"},[t("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Изменение групп"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),z={class:"modal-body",style:{}},A={class:"mb-3"},F=t("label",{class:"form-label"},"Имя",-1),H=t("div",{class:"mb-3"},[t("button",{class:"btn btn-primary","data-bs-target":"#group_students","data-bs-toggle":"modal"}," Выбрать обучающихся ")],-1),K={class:"modal-footer"},Q=["data-bs-target"],j={__name:"GroupModal",props:["group","students","backID"],emits:["ChangeGroup"],setup(n,{emit:c}){const o=n,i=L(),e=N({name:"",students:[],grade:"",id:""});y(o,()=>{e.name=o.group.name,e.students=o.group.students===void 0?[]:o.group.students,e.grade=o.group.grade,e.id=o.group.id===void 0?0:o.group.id}),h("");const d=s=>{let a=[];if(s)for(let r of s)a.push(r.id);return a},m=s=>{e.students=s},g=()=>{console.log({id:e.id,name:e.name,students:d(e.students),grade:e.grade.id}),_({url:b+"/manage_group",method:"POST",data:{id:e.id,name:e.name,students:d(e.students),grade:e.grade.id},headers:{token:JSON.parse(localStorage.getItem("user")).token}}).then(s=>{i.commit("changeReload")})};return(s,a)=>(u(),p(k,null,[f(M,{students:n.students,selected:d(e.students),"back-i-d":"#group_create",id:"group_students",onMakeList:m},null,8,["students","selected"]),t("div",J,[t("div",T,[t("div",E,[P,t("div",z,[t("div",A,[F,x(t("input",{type:"text",class:"form-control","onUpdate:modelValue":a[0]||(a[0]=r=>e.name=r)},null,512),[[C,e.name]])]),H,t("div",K,[t("button",{type:"button",class:"btn btn-primary","data-bs-target":n.backID,"data-bs-toggle":"modal"}," Назад ",8,Q),t("button",{type:"button",class:"btn btn-primary",onClick:g,"data-bs-dismiss":"modal"},"Сохранить")])])])])])],64))}},q={class:"table text-center"},W=t("th",null,"Имя",-1),X=t("th",null,"Изменить",-1),Y=["onClick"],Z=t("i",{class:"bi bi-pencil-fill"},null,-1),tt=[Z],et=["onUpdate:modelValue"],at={__name:"GroupList",props:["grade"],setup(n){const c=n,o=h([]),i=()=>{_.get(b+"/all_groups",{headers:{token:JSON.parse(localStorage.getItem("user")).token}}).then(s=>{console.log(s.data),o.value=s.data.groups.filter(a=>a.grade===c.grade.id);for(let a of o.value)a.grade=c.grade;o.value.forEach(a=>{a.to_delete=!1})})};i();let e=V(()=>store.state.needReload);y(e,()=>{i()});const d=h({}),m=s=>{d.value=s},g=()=>{let s=[];o.value.forEach(a=>{a.to_delete&&s.push(a.id)}),_({method:"POST",url:b+"/drop_groups",data:{groups:s}}).then(a=>{$.go()})};return(s,a)=>{const r=w("router-link");return u(),p(k,null,[f(j,{students:n.grade.students,"back-i-d":"#group_manage",group:d.value},null,8,["students","group"]),t("button",{type:"button",class:"btn btn-primary me-3 mt-3","data-bs-target":"#group_create","data-bs-toggle":"modal",onClick:a[0]||(a[0]=l=>m({grade:n.grade}))}," Создать новую группу "),f(r,{to:{name:"grade_management"},class:"btn btn-outline-primary mt-3"},{default:D(()=>[R(" Назад ")]),_:1}),t("table",q,[t("thead",null,[t("tr",null,[W,X,t("th",{style:{width:"10%"}},[t("button",{class:"btn btn-danger btn-sm",onClick:g},"Удалить")])])]),t("tbody",null,[(u(!0),p(k,null,I(o.value,l=>(u(),p("tr",null,[t("td",null,O(l.name),1),t("td",null,[t("button",{class:"btn btn-primary btn-sm",onClick:v=>m(l),"data-bs-target":"#group_create","data-bs-toggle":"modal"},tt,8,Y)]),t("td",null,[x(t("input",{type:"checkbox",class:"form-check-input","onUpdate:modelValue":v=>l.to_delete=v},null,8,et),[[G,l.to_delete]])])]))),256))])])],64)}}},it={__name:"MakeGroup",setup(n){return(c,o)=>(u(),U(at,{grade:JSON.parse(B(S)().params.grade)},null,8,["grade"]))}};export{it as default};