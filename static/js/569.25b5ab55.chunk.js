"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[569],{569:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r=t(791),a=t(434),s=t(270),i=t(208),o=function(e){return e.contacts.items},c=function(e){return e.contacts.isLoading},u=function(e){return e.contacts.error},l=function(e){return e.filter.filter},d=t(439),h=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&t[e];n+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return n},f=t(184);var m=function(){var e=(0,r.useState)(""),n=(0,d.Z)(e,2),t=n[0],s=n[1],c=(0,r.useState)(""),u=(0,d.Z)(c,2),l=u[0],m=u[1],x=(0,a.I0)(),j=(0,a.v9)(o),v=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":m(r);break;case"number":s(r);break;default:return}},p=function(){s(""),m("")},g=function(e,n){var t=e.trim(),r=n.trim();if(j.some((function(e){return e.name===t})))alert("This contact is already in contacts");else{var a={name:t,number:r,id:h()};x((0,i.uK)(a))}};return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g(l,t),p()},children:[(0,f.jsxs)("label",{children:["Enter name",(0,f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:l,onChange:v,required:!0})]}),(0,f.jsx)("br",{}),(0,f.jsxs)("label",{children:["Enter number",(0,f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:t,onChange:v,required:!0})]}),(0,f.jsx)("br",{}),(0,f.jsx)("button",{type:"submit",children:"Add to contact"})]})})};function x(e){var n=e.title;return(0,f.jsx)("h2",{children:n})}var j=function(e){var n=e.contacts,t=(0,a.I0)();return n.map((function(e){var n=e.name,r=e.id,a=e.number;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("span",{children:[n,": ",a]}),(0,f.jsx)("button",{type:"button",onClick:function(){!function(e){t((0,i.GK)(e))}(r)},children:"delete"})]},r)}))},v=t(147);var p=function(){var e=(0,a.v9)(o),n=(0,a.v9)(l),t=(0,a.I0)();return(0,f.jsx)(f.Fragment,{children:e.length>0&&(0,f.jsxs)("label",{children:["Enter name from contacts",(0,f.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:n,onChange:function(e){t((0,v.G)(e.target.value))},required:!0})]})})};var g=function(){var e=(0,a.v9)(o),n=(0,a.v9)(l),t=(0,a.v9)(u),s=(0,a.v9)(c),d=(0,a.I0)();(0,r.useEffect)((function(){d((0,i.yF)())}),[d]);var h=function(){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))};return(0,f.jsxs)(f.Fragment,{children:[s&&(0,f.jsx)(x,{title:"Loading"}),0===e.length&&!t&&!s&&(0,f.jsx)(x,{title:"U haven't any friends"}),0!==e.length&&(0,f.jsx)(p,{}),0!==e.length&&""===n&&(0,f.jsx)(j,{contacts:e}),""!==n&&0!==h().length&&(0,f.jsx)(j,{contacts:h()}),""!==n&&0===h().length&&(0,f.jsx)(x,{title:"No matches"}),t&&(0,f.jsx)(x,{title:t})]})};function b(){var e=(0,a.I0)(),n=(0,a.v9)(c);return(0,r.useEffect)((function(){e((0,i.yF)())}),[e]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.q,{children:(0,f.jsx)("title",{children:"Your tasks"})}),(0,f.jsx)(f.Fragment,{children:n&&"Request in progress..."}),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Phonebook"}),(0,f.jsx)("br",{}),(0,f.jsx)(m,{}),(0,f.jsx)("br",{}),(0,f.jsx)(g,{})]})]})}}}]);
//# sourceMappingURL=569.25b5ab55.chunk.js.map