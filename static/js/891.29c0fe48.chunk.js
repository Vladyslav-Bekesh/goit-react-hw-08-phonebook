"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[891],{1735:function(n,e,t){t.d(e,{CR:function(){return u},il:function(){return d},mT:function(){return l}});var r,i,a,o=t(168),s=t(7686),c=t(3302),l=s.Z.form(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  color: white;\n\n  overflow: hidden;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 12px;\n"]))),d=s.Z.label(i||(i=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 12px;\n  "," {\n    width: 479px;\n  }\n  "," {\n    width: 768px;\n  }\n  "," {\n    width: 1024px;\n  }\n"])),c.Z.mobile,c.Z.tablet,c.Z.desktop),u=s.Z.input(a||(a=(0,o.Z)(["\n  color: white;\n  background-color: inherit;\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: #f87719 1px solid;\n  border-radius: 15px;\n  outline: none;\n  padding: 8px 10px;\n  margin-top: 8px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n    text-align: center;\n  }\n\n  "," {\n    width: 480px;\n  }\n  "," {\n    width: 570px;\n  }\n"])),c.Z.mobile,c.Z.tablet)},7891:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r=t(2791),i=t(9434),a=t(4270),o=t(208),s=function(n){return n.contacts.items},c=function(n){return n.contacts.isLoading},l=function(n){return n.contacts.error},d=function(n){return n.filter.filter},u=t(9439),h=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",t=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&t[n];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e},p=t(1735),x=t(7813),f=t(184);var m,g=function(){var n=(0,r.useState)(""),e=(0,u.Z)(n,2),t=e[0],a=e[1],c=(0,r.useState)(""),l=(0,u.Z)(c,2),d=l[0],m=l[1],g=(0,i.I0)(),b=(0,i.v9)(s),j=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":m(r);break;case"number":a(r);break;default:return}},v=function(){a(""),m("")},Z=function(n,e){var t=n.trim(),r=e.trim();if(b.some((function(n){return n.name===t})))alert("This contact is already in contacts");else{var i={name:t,number:r,id:h()};g((0,o.uK)(i))}};return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(p.mT,{onSubmit:function(n){n.preventDefault(),Z(d,t),v()},children:[(0,f.jsxs)(p.il,{children:["Enter name",(0,f.jsx)(p.CR,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:d,onChange:j,required:!0})]}),(0,f.jsxs)(p.il,{children:["Enter number",(0,f.jsx)(p.CR,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:t,onChange:j,required:!0})]}),(0,f.jsx)(x.A,{type:"submit",disabled:""===d||""===t,text:"Add to contact"})]})})},b=t(168),j=t(7686),v=j.Z.h2(m||(m=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  color: #fff;\n"])));function Z(n){var e=n.title;return(0,f.jsx)(v,{children:e})}var w,y,k,C,A,z,F=t(3302),_=j.Z.ul(w||(w=(0,b.Z)(["\n  width: 280px;\n  border: tomato 1px solid;\n  padding: 10px;\n  border-radius: 10px;\n  margin-left: auto;\n  margin-right: auto;\n\n  &:not(:last-child) {\n    margin-bottom: 13px;\n  }\n  "," {\n    padding: 18px;\n    width: 320px;\n  }\n  "," {\n    padding: 25px;\n    width: 370px;\n  }\n"])),F.Z.mobile,F.Z.tablet),R=j.Z.li(y||(y=(0,b.Z)(["\n  display: block;\n  "," {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"])),F.Z.mobile),q=j.Z.button(k||(k=(0,b.Z)(["\n  display: block;\n  width: 120px;\n  height: 32px;\n\n  border: 1px solid black;\n  background: linear-gradient(141.22deg, #ffc226 20%, #f84119 80%);\n  border-radius: 74px;\n  color: #111111;\n  cursor: pointer;\n\n  &:hover {\n    background: linear-gradient(141.22deg, #cb4e13 9.4%, #dcb311 91.91%);\n    color: white;\n  }\n  margin: 0 auto;\n  margin-top: 10px;\n"]))),E=j.Z.span(C||(C=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),I=j.Z.span(A||(A=(0,b.Z)(["\n  color: white;\n  font-weight: 500;\n  font-size: 18px;\n"]))),S=j.Z.span(z||(z=(0,b.Z)(["\n  color: white;\n  margin-left: 8px;\n"])));var L=function(n){var e=n.contacts,t=(0,i.I0)();return e.map((function(n){var e=n.name,r=n.id,i=n.number;return(0,f.jsx)(_,{children:(0,f.jsxs)(R,{children:[(0,f.jsxs)(E,{children:[(0,f.jsxs)(I,{children:[e,":"]}),(0,f.jsx)(S,{children:i})]}),(0,f.jsx)(q,{type:"DeleteBtn",onClick:function(){!function(n){t((0,o.GK)(n))}(r)},children:"delete"})]},r)})}))},T=t(5147);var B=function(){var n=(0,i.v9)(s),e=(0,i.v9)(d),t=(0,i.I0)();return(0,f.jsx)(f.Fragment,{children:n.length>0&&(0,f.jsx)(p.mT,{action:"",children:(0,f.jsxs)(p.il,{children:["Enter name from contacts",(0,f.jsx)(p.CR,{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:e,onChange:function(n){t((0,T.G)(n.target.value))},required:!0})]})})})};var N,U=function(){var n=(0,i.v9)(s),e=(0,i.v9)(d),t=(0,i.v9)(l),a=(0,i.v9)(c),u=(0,i.I0)();(0,r.useEffect)((function(){u((0,o.yF)())}),[u]);var h=function(){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))};return(0,f.jsxs)(f.Fragment,{children:[a&&(0,f.jsx)(Z,{title:"Loading"}),0===n.length&&!t&&!a&&(0,f.jsx)(Z,{title:"U haven't any friends"}),0!==n.length&&(0,f.jsx)(B,{}),0!==n.length&&""===e&&(0,f.jsx)(L,{contacts:n}),""!==e&&0!==h().length&&(0,f.jsx)(L,{contacts:h()}),""!==e&&0===h().length&&(0,f.jsx)(Z,{title:"No matches"}),t&&(0,f.jsx)(Z,{title:t})]})},D=j.Z.h1(N||(N=(0,b.Z)(["\n  color: #fff;\n  display: flex;\n  justify-content: center;\n"])));function G(){var n=(0,i.I0)(),e=(0,i.v9)(c);return(0,r.useEffect)((function(){n((0,o.yF)())}),[n]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.q,{children:(0,f.jsx)("title",{children:"Your contacts"})}),(0,f.jsx)(f.Fragment,{children:e&&"Request in progress..."}),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(D,{children:"Phonebook"}),(0,f.jsx)("br",{}),(0,f.jsx)(g,{}),(0,f.jsx)("br",{}),(0,f.jsx)(U,{})]})]})}}}]);
//# sourceMappingURL=891.29c0fe48.chunk.js.map