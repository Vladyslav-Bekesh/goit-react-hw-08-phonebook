"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[891],{1735:function(n,e,t){t.d(e,{CR:function(){return p},il:function(){return u},mT:function(){return d}});var r,i,a,o,c=t(168),s=t(7686),l=t(3302),d=s.Z.form(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  color: white;\n\n  overflow: hidden;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 12px;\n"]))),u=(s.Z.button(i||(i=(0,c.Z)(["\n  display: inline-block;\n  padding: 10px 8px;\n  border: 0;\n  border-radius: 15px;\n  min-width: 120px;\n\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  cursor: pointer;\n  outline: none;\n  background: linear-gradient(141.22deg, #ffc226 20%, #f84119 80%);\n  color: white;\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: default;\n\n    background-color: #444444;\n  }\n\n  &:enabled {\n    opacity: 1;\n  }\n\n  &:not(:disabled):hover {\n    background-color: orangered;\n    transform: scale(1.1);\n  }\n"]))),s.Z.label(a||(a=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 12px;\n  "," {\n    width: 479px;\n  }\n  "," {\n    width: 768px;\n  }\n  "," {\n    width: 1024px;\n  }\n"])),l.Z.mobile,l.Z.tablet,l.Z.desktop)),p=s.Z.input(o||(o=(0,c.Z)(["\n  color: white;\n  background-color: inherit;\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: #f87719 1px solid;\n  border-radius: 15px;\n  outline: none;\n  padding: 8px 10px;\n  margin-top: 8px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n    text-align: center;\n  }\n\n  "," {\n    width: 480px;\n  }\n  "," {\n    width: 570px;\n  }\n"])),l.Z.mobile,l.Z.tablet)},7891:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r=t(2791),i=t(9434),a=t(4270),o=t(208),c=function(n){return n.contacts.items},s=function(n){return n.contacts.isLoading},l=function(n){return n.contacts.error},d=function(n){return n.filter.filter},u=t(9439),p=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",t=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&t[n];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e},f=t(1735),h=t(7813),x=t(184);var m,g,b,v,j,Z,w=function(){var n=(0,r.useState)(""),e=(0,u.Z)(n,2),t=e[0],a=e[1],s=(0,r.useState)(""),l=(0,u.Z)(s,2),d=l[0],m=l[1],g=(0,i.I0)(),b=(0,i.v9)(c),v=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":m(r);break;case"number":a(r);break;default:return}},j=function(){a(""),m("")},Z=function(n,e){var t=n.trim(),r=e.trim();if(b.some((function(n){return n.name===t})))alert("This contact is already in contacts");else{var i={name:t,number:r,id:p()};g((0,o.uK)(i))}};return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(f.mT,{onSubmit:function(n){n.preventDefault(),Z(d,t),j()},children:[(0,x.jsxs)(f.il,{children:["Enter name",(0,x.jsx)(f.CR,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:d,onChange:v,required:!0})]}),(0,x.jsxs)(f.il,{children:["Enter number",(0,x.jsx)(f.CR,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:t,onChange:v,required:!0})]}),(0,x.jsx)(h.A,{type:"submit",disabled:""===d||""===t,text:"Add to contact"})]})})},y=t(168),k=t(7686),C=k.Z.h2(m||(m=(0,y.Z)(["\n  display: flex;\n  justify-content: center;\n  color: #fff;\n"])));function z(n){var e=n.title;return(0,x.jsx)(C,{children:e})}var A=k.Z.div(g||(g=(0,y.Z)(["\n  width: 480px;\n  border: tomato 1px solid;\n  padding: 32px;\n  border-radius: 15px;\n  margin-left: auto;\n  margin-right: auto;\n\n  &:not(:last-child) {\n    margin-bottom: 13px;\n  }\n"]))),F=k.Z.div(b||(b=(0,y.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),_=k.Z.button(v||(v=(0,y.Z)(["\n  display: block;\n  width: 120px;\n  height: 32px;\n\n  border: 1px solid black;\n  background: linear-gradient(141.22deg, #ffc226 20%, #f84119 80%);\n  border-radius: 74px;\n  color: #111111;\n  cursor: pointer;\n\n  &:hover {\n    background: linear-gradient(141.22deg, #cb4e13 9.4%, #dcb311 91.91%);\n    color: white;\n  }\n"]))),R=k.Z.span(j||(j=(0,y.Z)(["\n  color: white;\n  font-weight: 500;\n  font-size: 18px;\n"]))),q=k.Z.span(Z||(Z=(0,y.Z)(["\n  color: white;\n  margin-left: 8px;\n"])));var E=function(n){var e=n.contacts,t=(0,i.I0)();return e.map((function(n){var e=n.name,r=n.id,i=n.number;return(0,x.jsx)(A,{children:(0,x.jsxs)(F,{children:[(0,x.jsxs)(R,{children:[e,":"]}),(0,x.jsx)(q,{children:i}),(0,x.jsx)(_,{type:"DeleteBtn",onClick:function(){!function(n){t((0,o.GK)(n))}(r)},children:"delete"})]},r)})}))},I=t(5147);var S=function(){var n=(0,i.v9)(c),e=(0,i.v9)(d),t=(0,i.I0)();return(0,x.jsx)(x.Fragment,{children:n.length>0&&(0,x.jsx)(f.mT,{action:"",children:(0,x.jsxs)(f.il,{children:["Enter name from contacts",(0,x.jsx)(f.CR,{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:e,onChange:function(n){t((0,I.G)(n.target.value))},required:!0})]})})})};var L,T=function(){var n=(0,i.v9)(c),e=(0,i.v9)(d),t=(0,i.v9)(l),a=(0,i.v9)(s),u=(0,i.I0)();(0,r.useEffect)((function(){u((0,o.yF)())}),[u]);var p=function(){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))};return(0,x.jsxs)(x.Fragment,{children:[a&&(0,x.jsx)(z,{title:"Loading"}),0===n.length&&!t&&!a&&(0,x.jsx)(z,{title:"U haven't any friends"}),0!==n.length&&(0,x.jsx)(S,{}),0!==n.length&&""===e&&(0,x.jsx)(E,{contacts:n}),""!==e&&0!==p().length&&(0,x.jsx)(E,{contacts:p()}),""!==e&&0===p().length&&(0,x.jsx)(z,{title:"No matches"}),t&&(0,x.jsx)(z,{title:t})]})},B=k.Z.h1(L||(L=(0,y.Z)(["\n  color: #fff;\n  display: flex;\n  justify-content: center;\n"])));function N(){var n=(0,i.I0)(),e=(0,i.v9)(s);return(0,r.useEffect)((function(){n((0,o.yF)())}),[n]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a.q,{children:(0,x.jsx)("title",{children:"Your contacts"})}),(0,x.jsx)(x.Fragment,{children:e&&"Request in progress..."}),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(B,{children:"Phonebook"}),(0,x.jsx)("br",{}),(0,x.jsx)(w,{}),(0,x.jsx)("br",{}),(0,x.jsx)(T,{})]})]})}}}]);
//# sourceMappingURL=891.60e2b3c8.chunk.js.map