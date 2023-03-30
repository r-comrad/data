import{a as $,U as S}from"./axios-2f89820f.js";import{v as D,a as V}from"./runtime-dom.esm-bundler-6f3b7d2d.js";import{z as y,G as f,H as C,o as d,c as i,a as s,J as M,K as b,L as g,M as v,y as w,N as x,A as U,b as k,O as N}from"./runtime-core.esm-bundler-c941a8b7.js";import{M as B}from"./bootstrap.esm-9a522539.js";const A={class:"row my-3"},T={class:"col-2"},q=["value"],O={class:"col-2"},F=["disabled"],H=["value"],I={class:"col-2 ms-auto"},z={__name:"SelectionBlock",props:["journals","grades","groups","show_themes"],emits:["setJournal","setShow"],setup(_,{emit:c}){const o=_,u=y(()=>{let e=[];for(let t of o.journals)e.includes(t.subject)||e.push(t.subject);return e}),l=f(""),a=y(()=>{let e=[];for(let t of o.journals)!e.includes(t.group_id)&&t.subject===l.value&&(t.is_group?e.push(o.groups.filter(r=>r.id===t.group_id)[0]):e.push(o.grades.filter(r=>r.id===t.group_id)[0]));return e}),n=f("");return C(n,e=>{const t=o.journals.filter(r=>r.group_id===n.value&&r.subject===l.value)[0];t&&c("setJournal",t)}),(e,t)=>(d(),i("div",A,[s("div",T,[M(s("select",{class:"form-select","onUpdate:modelValue":t[0]||(t[0]=r=>l.value=r)},[(d(!0),i(b,null,g(w(u),r=>(d(),i("option",{value:r},v(r),9,q))),256))],512),[[D,l.value]])]),s("div",O,[M(s("select",{class:"form-select","aria-label":"Default select example",disabled:l.value==="","onUpdate:modelValue":t[1]||(t[1]=r=>n.value=r)},[(d(!0),i(b,null,g(w(a),r=>(d(),i("option",{value:r.id},v(r.name),9,H))),256))],8,F),[[D,n.value]])]),s("div",I,[n.value!==""?(d(),i("button",{key:0,type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=r=>e.$emit("setShow",!_.show_themes))},v(_.show_themes?"Убрать темы":"Показать темы"),1)):x("",!0)])]))}},E=s("th",{style:{"min-width":"10vw"}},"Имя",-1),G=s("th",null,"Сред.",-1),K=["onClick"],P={__name:"TableHeader",props:{lessons:{type:Array,required:!0}},emits:["setModalLesson"],setup(_,{emit:c}){const o=l=>{let a=new Date(l);return`${String(a.getDate()).padStart(2,"0")}.${String(a.getMonth()+1).padStart(2,"0")}`},u=l=>{c("setModalLesson",l),new B("#lesson").toggle()};return(l,a)=>(d(),i("thead",null,[s("tr",null,[E,G,(d(!0),i(b,null,g(_.lessons,n=>(d(),i("th",{scope:"col",style:{},onClick:e=>u(n)},v(o(n.date)),9,K))),256))])]))}},R={scope:"row",style:{}},Q={style:{}},W={__name:"TableBody",props:{lessons:{type:Array,required:!0},marks:{type:Array,required:!0},students:{type:Array,required:!0}},setup(_){const c=_;function o(a,n){for(const e of c.marks)if(e.student===a&&e.lesson===n)return e;c.marks.push({value:"",id:-1,student:a,lesson:n});for(const e of c.marks)if(e.student===a&&e.lesson===n)return e}const u=U({});function l(a){let n=0,e=0;for(const t of c.marks)t.student===a&&["1","2","3","4","5"].includes(t.value)&&(n+=parseInt(t.value),e+=1);e===0?u[a]="":u[a]=parseFloat((n/e).toFixed(3))}return C(c,()=>{for(let a of c.students)l(a.id)}),(a,n)=>(d(),i("tbody",null,[(d(!0),i(b,null,g(_.students,e=>(d(),i("tr",null,[s("th",R,v(e.surname)+" "+v(e.name[0])+".",1),s("td",null,v(u[e.id]),1),(d(!0),i(b,null,g(_.lessons,t=>(d(),i("td",Q,v(o(e.id,t.id).value),1))),256))]))),256))]))}},X={class:"table table-striped table-bordered"},Y=s("thead",null,[s("tr",null,[s("th",{scope:"col"},"Тема"),s("th",{style:{width:"15%"}},"Дата")])],-1),Z=["onClick"],ee={__name:"ThemeBlock",props:["lessons"],emits:["setModalLesson"],setup(_,{emit:c}){const o=l=>{let a=new Date(l);return`${String(a.getDate()).padStart(2,"0")}.${String(a.getMonth()+1).padStart(2,"0")}`},u=l=>{c("setModalLesson",l),new B("#lesson").toggle()};return(l,a)=>(d(),i("table",X,[Y,s("tbody",null,[(d(!0),i(b,null,g(_.lessons,n=>(d(),i("tr",null,[s("th",{scope:"col",onClick:e=>u(n)},v(n.theme),9,Z),s("td",null,v(o(n.date)),1)]))),256))])]))}},se={class:"modal fade",id:"lesson","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"lesson","aria-hidden":"true"},te={class:"modal-dialog"},oe={class:"modal-content"},le={class:"modal-header"},ae={class:"modal-title fs-5",id:"staticBackdropLabel"},ne=s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),re={class:"modal-body"},ue={class:"mb-3"},de=s("label",{class:"form-label"},"Дата",-1),ie={class:"mb-3"},ce=s("label",{class:"form-label"},"Тип контроля занятия",-1),me={class:"mb-3"},_e=s("label",{class:"form-label"},"Домашняя работа",-1),pe=s("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Закрыть",-1),ve={__name:"LessonModal",props:["lesson"],emits:["updateLesson"],setup(_,{emit:c}){const o=_,u=f(""),l=f("");C(o,()=>{u.value=o.lesson.control,l.value=o.lesson.homework});const a=()=>{console.log({id:o.lesson.id,homework:l.value,control:u.value}),$({url:S+"/lesson",method:"POST",data:{id:o.lesson.id,homework:l.value,control:u.value},headers:{token:JSON.parse(localStorage.getItem("user")).token}}).then(()=>{c("updateLesson",{id:o.lesson.id,homework:l.value,control:u.value})})};return(n,e)=>(d(),i("div",se,[s("div",te,[s("div",oe,[s("div",le,[s("h1",ae,v(_.lesson.theme),1),ne]),s("div",re,[s("div",ue,[de,s("p",null,v(_.lesson.date),1)]),s("div",ie,[ce,M(s("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>u.value=t)},null,512),[[V,u.value]])]),s("div",me,[_e,M(s("textarea",{type:"text",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>l.value=t)},null,512),[[V,l.value]])])]),s("div",{class:"modal-footer"},[pe,s("button",{type:"button",class:"btn btn-primary",onClick:a,"data-bs-dismiss":"modal"},"Сохранить")])])])]))}},he={class:"row"},fe={key:0,class:"table table-striped table-bordered",style:{overflow:"auto"}},be={key:0,class:"col-3",style:{overflow:"auto","max-height":"80vh"}},$e={__name:"HeadView",setup(_){const c=f([]),o=f("");let u=JSON.parse(localStorage.getItem("user"));$.get(S+"/get_grade_journals/"+u.id,{headers:{token:u.token}}).then(m=>{c.value=m.data.journals});const l=y(()=>{let m=[];for(let p of c.value)p.is_group||$.get(S+"/grade/"+p.group_id,{headers:{token:u.token}}).then(h=>{m.push(h.data)});return m}),a=y(()=>{let m=[];for(let p of c.value)p.is_group&&$.get(S+"/group/"+p.group_id,{headers:{token:u.token}}).then(h=>{m.push(h.data)});return m}),n=y(()=>o.value.is_group?a.value.filter(m=>m.id===o.value.group_id)[0].students:l.value.filter(m=>m.id===o.value.group_id)[0].students),e=m=>{m.lessons.sort((p,h)=>{let j=new Date(p.date),L=new Date(h.date);if(j<L)return-1;if(j===L)return 0;if(j>L)return 1}),o.value=m},t=f(!1),r=f(""),J=m=>{r.value.homework=m.homework,r.value.control=m.control};return(m,p)=>(d(),i(b,null,[k(z,{journals:c.value,grades:w(l),groups:w(a),show_themes:t.value,onSetJournal:e,onSetShow:p[0]||(p[0]=h=>{t.value=h})},null,8,["journals","grades","groups","show_themes"]),k(ve,{lesson:r.value,onUpdateLesson:J},null,8,["lesson"]),s("div",he,[s("div",{class:N(t.value?"col-9":"col-12"),style:{overflow:"auto"}},[o.value?(d(),i("table",fe,[k(P,{lessons:o.value.lessons,onSetModalLesson:p[1]||(p[1]=h=>{r.value=h})},null,8,["lessons"]),k(W,{students:w(n),marks:o.value.marks,lessons:o.value.lessons},null,8,["students","marks","lessons"])])):x("",!0)],2),t.value?(d(),i("div",be,[k(ee,{lessons:o.value.lessons,onSetModalLesson:p[2]||(p[2]=h=>{r.value=h})},null,8,["lessons"])])):x("",!0)])],64))}};export{$e as default};
