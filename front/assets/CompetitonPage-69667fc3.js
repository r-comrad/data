import{a as c,U as m}from"./axios-2f89820f.js";import{G as _,z as d,r as l,o as e,c as s,K as p,L as u,N as h,a as r,M as f,R as g,Q as k,P as v}from"./runtime-core.esm-bundler-2db63ed2.js";const x={class:"d-flex justify-content-center align-items-center",style:{height:"100%"}},y={class:"card m-2"},N={class:"card-body m-5 text-center"},B={class:"card-title"},D={__name:"CompetitonPage",setup(C){const t=_();return c.get(m+"/get/if/user_competition[competition_id[id;name;start_time]]/user_id="+JSON.parse(localStorage.getItem("user")).id).then(o=>{t.value=o.data,t.value.user_competitions.forEach(a=>{a.competition.start_time=new Date(a.competition.start_time)})}),d(()=>new Date),(o,a)=>{const n=l("router-link");return e(),s("div",x,[t.value?(e(!0),s(p,{key:0},u(t.value.user_competitions,i=>(e(),s("div",y,[r("div",N,[r("h5",B,f(i.competition.name),1),(e(),g(n,{key:0,class:"btn btn-outline-primary",to:{name:"task_list",params:{c_id:i.competition.id}}},{default:k(()=>[v("Участвовать ")]),_:2},1032,["to"]))])]))),256)):h("",!0)])}}};export{D as default};