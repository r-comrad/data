import{A as t}from"./config-ZEIqkGks.js";async function r(e,n){const o=await fetch(`${t}/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:e,password:n})});return o.ok?{isGood:!0,value:(await o.json()).user}:{isGood:!1,reason:"Invalid login or password",value:{}}}async function d(e,n,o,a){const s=await fetch(`${t}/registration`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:e,password:n,email:o,key:a})});return{isGood:s.ok,value:s.ok}}export{r as L,d as R};