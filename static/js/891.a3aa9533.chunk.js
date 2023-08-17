"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[891],{1735:function(n,e,t){t.d(e,{CR:function(){return h},Xk:function(){return u},il:function(){return p},mT:function(){return d}});var r,i,a,o,c=t(168),s=t(7686),l=t(3302),d=s.Z.form(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  color: white;\n\n  overflow: hidden;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 12px;\n"]))),u=s.Z.button(i||(i=(0,c.Z)(["\n  display: inline-block;\n  padding: 10px 8px;\n  border: 0;\n  border-radius: 15px;\n  min-width: 120px;\n\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  cursor: pointer;\n  outline: none;\n  background-color: #f87719;\n  color: white;\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: default;\n\n    background-color: #444444;\n  }\n\n  &:enabled {\n    opacity: 1;\n  }\n\n  &:not(:disabled):hover {\n    background-color: orangered;\n    transform: scale(1.1);\n  }\n"]))),p=s.Z.label(a||(a=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 12px;\n  "," {\n    width: 479px;\n  }\n  "," {\n    width: 768px;\n  }\n  "," {\n    width: 1024px;\n  }\n"])),l.Z.mobile,l.Z.tablet,l.Z.desktop),h=s.Z.input(o||(o=(0,c.Z)(["\n  color: white;\n  background-color: inherit;\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: #f87719 1px solid;\n  border-radius: 15px;\n  outline: none;\n  padding: 8px 10px;\n  margin-top: 8px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n    text-align: center;\n  }\n\n  "," {\n    width: 480px;\n  }\n  "," {\n    width: 570px;\n  }\n"])),l.Z.mobile,l.Z.tablet)},7891:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r=t(2791),i=t(9434),a=t(4270),o=t(208),c=function(n){return n.contacts.items},s=function(n){return n.contacts.isLoading},l=function(n){return n.contacts.error},d=function(n){return n.filter.filter},u=t(9439),p=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",t=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&t[n];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e},h=t(1735),f=t(184);var x,m,g,b,v,j,Z=function(){var n=(0,r.useState)(""),e=(0,u.Z)(n,2),t=e[0],a=e[1],s=(0,r.useState)(""),l=(0,u.Z)(s,2),d=l[0],x=l[1],m=(0,i.I0)(),g=(0,i.v9)(c),b=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":x(r);break;case"number":a(r);break;default:return}},v=function(){a(""),x("")},j=function(n,e){var t=n.trim(),r=e.trim();if(g.some((function(n){return n.name===t})))alert("This contact is already in contacts");else{var i={name:t,number:r,id:p()};m((0,o.uK)(i))}};return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(h.mT,{onSubmit:function(n){n.preventDefault(),j(d,t),v()},children:[(0,f.jsxs)(h.il,{children:["Enter name",(0,f.jsx)(h.CR,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:d,onChange:b,required:!0})]}),(0,f.jsxs)(h.il,{children:["Enter number",(0,f.jsx)(h.CR,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:t,onChange:b,required:!0})]}),(0,f.jsx)(h.Xk,{type:"submit",disabled:""===d||""===t,children:"Add to contact"})]})})},w=t(168),y=t(7686),k=y.Z.h2(x||(x=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  color: #fff;\n"])));function C(n){var e=n.title;return(0,f.jsx)(k,{children:e})}var z=y.Z.div(m||(m=(0,w.Z)(["\n  width: 480px;\n  border: tomato 1px solid;\n  padding: 32px;\n  border-radius: 15px;\n  margin-left: auto;\n  margin-right: auto;\n\n  &:not(:last-child) {\n    margin-bottom: 13px;\n  }\n"]))),A=y.Z.div(g||(g=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),F=y.Z.button(b||(b=(0,w.Z)(["\n  display: block;\n  width: 120px;\n  height: 32px;\n\n  border: 1px solid black;\n  background: linear-gradient(141.22deg, #ffc226 20%, #f84119 80%);\n  border-radius: 74px;\n  color: #111111;\n  cursor: pointer;\n\n  &:hover {\n    background: linear-gradient(141.22deg, #cb4e13 9.4%, #dcb311 91.91%);\n    color: white;\n  }\n"]))),_=y.Z.span(v||(v=(0,w.Z)(["\n  color: white;\n  font-weight: 500;\n  font-size: 18px;\n"]))),R=y.Z.span(j||(j=(0,w.Z)(["\n  color: white;\n  margin-left: 8px;\n"])));var q=function(n){var e=n.contacts,t=(0,i.I0)();return e.map((function(n){var e=n.name,r=n.id,i=n.number;return(0,f.jsx)(z,{children:(0,f.jsxs)(A,{children:[(0,f.jsxs)(_,{children:[e,":"]}),(0,f.jsx)(R,{children:i}),(0,f.jsx)(F,{type:"DeleteBtn",onClick:function(){!function(n){t((0,o.GK)(n))}(r)},children:"delete"})]},r)})}))},E=t(5147);var I=function(){var n=(0,i.v9)(c),e=(0,i.v9)(d),t=(0,i.I0)();return(0,f.jsx)(f.Fragment,{children:n.length>0&&(0,f.jsx)(h.mT,{action:"",children:(0,f.jsxs)(h.il,{children:["Enter name from contacts",(0,f.jsx)(h.CR,{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:e,onChange:function(n){t((0,E.G)(n.target.value))},required:!0})]})})})};var S,L=function(){var n=(0,i.v9)(c),e=(0,i.v9)(d),t=(0,i.v9)(l),a=(0,i.v9)(s),u=(0,i.I0)();(0,r.useEffect)((function(){u((0,o.yF)())}),[u]);var p=function(){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))};return(0,f.jsxs)(f.Fragment,{children:[a&&(0,f.jsx)(C,{title:"Loading"}),0===n.length&&!t&&!a&&(0,f.jsx)(C,{title:"U haven't any friends"}),0!==n.length&&(0,f.jsx)(I,{}),0!==n.length&&""===e&&(0,f.jsx)(q,{contacts:n}),""!==e&&0!==p().length&&(0,f.jsx)(q,{contacts:p()}),""!==e&&0===p().length&&(0,f.jsx)(C,{title:"No matches"}),t&&(0,f.jsx)(C,{title:t})]})},T=y.Z.h1(S||(S=(0,w.Z)(["\n  color: #fff;\n  display: flex;\n  justify-content: center;\n"])));function B(){var n=(0,i.I0)(),e=(0,i.v9)(s);return(0,r.useEffect)((function(){n((0,o.yF)())}),[n]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.q,{children:(0,f.jsx)("title",{children:"Your tasks"})}),(0,f.jsx)(f.Fragment,{children:e&&"Request in progress..."}),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(T,{children:"Phonebook"}),(0,f.jsx)("br",{}),(0,f.jsx)(Z,{}),(0,f.jsx)("br",{}),(0,f.jsx)(L,{})]})]})}}}]);
//# sourceMappingURL=891.a3aa9533.chunk.js.map