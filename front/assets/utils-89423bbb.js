function o(){return JSON.parse(localStorage.getItem("user")||"null")}function n(){localStorage.removeItem("user")}function r(t){const e=new Date;return e.setMonth(t),e.toLocaleString("ru-RU",{month:"long"})}export{n as D,o as G,r as M};
