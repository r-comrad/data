import{j as a}from"./index-b129b865.js";function f({max_page:s,current_page:n,onPageChange:r,custom_page_names:i}){function l(){const t=[];for(let e=0;e<=s;e++)t.push(a.jsx("li",{className:`page-item ${e===n?"active":""}`,children:a.jsx("a",{className:"page-link",href:"#",onClick:c=>{c.preventDefault(),e!==n&&r(e)},children:i?i[e]:e+1})},e));return t}return a.jsx("nav",{className:"d-flex justify-content-center",children:a.jsx("ul",{className:"pagination",children:l()})})}export{f as P};
