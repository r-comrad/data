import{u as o,r as s,j as t}from"./index-b129b865.js";import{T as l}from"./Table-d99c0d4b.js";import{q as i}from"./utils-e871904b.js";import"./config-a5b38a07.js";function b(){const a=o(),[n,r]=s.useState([]);return s.useEffect(()=>{i().then(e=>{r(e)})},[]),t.jsx(t.Fragment,{children:t.jsx(l,{elements:n,table_fields:[{name:"name",label:"Название"},{name:"start_time",label:"Дата начала",valueProcessing:e=>new Date(e).toLocaleString("ru-RU")},{name:"end_time",label:"Дата окончания",valueProcessing:e=>new Date(e).toLocaleString("ru-RU")},{name:"id",label:"Участвовать",button:{onClick:e=>{a(`/contest/${e}`)},text:"Участвовать"}}]})})}export{b as default};
