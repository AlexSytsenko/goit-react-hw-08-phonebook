(this["webpackJsonpreact-phonebook"]=this["webpackJsonpreact-phonebook"]||[]).push([[3],{111:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(41);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,s=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(o){r=!0,s=o}finally{try{n||null==c.return||c.return()}finally{if(r)throw s}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},124:function(e,t,a){e.exports={button:"RegisterView_button__1Ir5j",label:"RegisterView_label__E_RXK",input:"RegisterView_input__1Rvnm",title:"RegisterView_title__1LeJH",form:"RegisterView_form__32MT1"}},140:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(111),r=a(0),s=a(10),i=a(30),c=a(124),o=a.n(c),l=a(1),u=function(){var e=Object(s.b)(),t=Object(r.useState)(""),a=Object(n.a)(t,2),c=a[0],u=a[1],b=Object(r.useState)(""),m=Object(n.a)(b,2),j=m[0],p=m[1],f=Object(r.useState)(""),d=Object(n.a)(f,2),h=d[0],O=d[1],v=function(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"name":u(n);break;case"email":p(n);break;case"password":O(n)}},w=function(){u(""),p(""),O("")};return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:o.a.title,children:"Registration page"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(i.a.register({name:c,email:j,password:h})),w()},className:o.a.form,autoComplete:"off",children:[Object(l.jsxs)("label",{className:o.a.label,children:["Name",Object(l.jsx)("input",{className:o.a.input,type:"text",name:"name",value:c,onChange:v})]}),Object(l.jsxs)("label",{className:o.a.label,children:["Email",Object(l.jsx)("input",{className:o.a.input,type:"email",name:"email",value:j,onChange:v})]}),Object(l.jsxs)("label",{className:o.a.label,children:["Password",Object(l.jsx)("input",{className:o.a.input,type:"password",name:"password",value:h,onChange:v})]}),Object(l.jsx)("button",{type:"submit",className:o.a.button,children:"Register new user"})]})]})}}}]);
//# sourceMappingURL=Register-page.0cd50177.chunk.js.map