import{j as a}from"./index-d01e31b1.js";import"./bootstrap.bundle.min-a81abbd8.js";function i({connected_with:d,button_text:s,additionalClasses:l,preOpen:e}){return a.jsx("button",{type:"button",className:`btn btn-primary ${l}`,"data-bs-toggle":"modal",onClick:e,"data-bs-target":`#${d}`,children:s||"Click!"})}function n({children:d,title:s,connected_with:l}){return a.jsx("div",{className:"modal fade",id:l,tabIndex:-1,"aria-hidden":"true",children:a.jsx("div",{className:"modal-dialog",children:a.jsxs("div",{className:"modal-content",children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h1",{className:"modal-title fs-5",children:s}),a.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),a.jsx("div",{className:"modal-body",children:d})]})})})}export{n as M,i as a};
