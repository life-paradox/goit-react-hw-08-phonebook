"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[419],{2419:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var a=t(2791),r="App_container__ZdBeZ",s="App_title__Xrt9W",c=t(9434),o=t(3634),i="ContactForm_form__dhl+T",l="ContactForm_label__-cVXI",u="ContactForm_input__Bl93P",d=t(184),m=function(){var e=(0,c.I0)();return(0,d.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.currentTarget,a={name:t.name.value,number:t.number.value};e((0,o.uK)(a)),t.reset()},className:i,children:[(0,d.jsxs)("label",{className:l,children:["Name",(0,d.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,className:u,autoComplete:"false"})]}),(0,d.jsxs)("label",{className:l,children:["Number",(0,d.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,className:u,autoComplete:"false"})]}),(0,d.jsx)("button",{type:"submit",children:"Add contact"})]})},h=t(1634),p="Filter_filterInput__1Cysk",f=function(){var e=(0,c.I0)();return(0,d.jsxs)("label",{children:["Find contacts by name",(0,d.jsx)("input",{type:"text",onChange:function(n){var t=n.currentTarget.value;e((0,h.T)(t))},className:p})]})},_="ContactListItem_item__UAAix",x="ContactListItem_deleteBtn__roUYm",b=(0,a.memo)((function(e){var n=e.id,t=e.name,a=e.number,r=(0,c.I0)();return(0,d.jsxs)("li",{className:_,children:[(0,d.jsxs)("span",{children:[t,": ",a]}),(0,d.jsx)("button",{className:x,id:n,onClick:function(e){r((0,o.GK)(e.currentTarget.id))},children:"Delete"})]})})),j=function(e){return e.contacts.contacts},v=function(e){return e.contacts.isLoading},C=function(e){return e.contacts.error},N=function(e){return e.filter},g=function(){var e=(0,c.v9)(j),n=function(e,n){return null===e||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}(e,(0,c.v9)(N));return null!==e&&void 0!==e&&e.length?null!==n&&void 0!==n&&n.length?(0,d.jsx)("ul",{children:n.map((function(e){return(0,d.jsx)(b,{id:e.id,name:e.name,number:e.number},e.id)}))}):(0,d.jsx)("p",{children:"Not found "}):(0,d.jsx)("p",{children:"You can add contacts"})},A=t(6474),k=function(){var e=(0,c.I0)(),n=(0,c.v9)(v),t=(0,c.v9)(C);return(0,a.useEffect)((function(){e((0,o.yF)())}),[e]),(0,d.jsx)("main",{children:(0,d.jsxs)("div",{className:r,children:[(0,d.jsx)("h1",{className:s,children:"Phonebook"}),(0,d.jsx)(m,{}),(0,d.jsx)("h2",{className:s,children:"Contacts"}),(0,d.jsx)(f,{}),n&&!t&&(0,d.jsx)(A.Z,{}),(0,d.jsx)(g,{})]})})}}}]);
//# sourceMappingURL=419.bebda40a.chunk.js.map