(this["webpackJsonpreact-phonebook"]=this["webpackJsonpreact-phonebook"]||[]).push([[4],{109:function(e,t,r){"use strict";r.r(t);var n,c,a,u,o,s,i,b,j=r(0),l=r.n(j),O=r(22),f=r.n(O),d=r(16),g=(r(60),r(10)),h=r(52),p=r(33),x=r(4),v=r(18),m=r(53),k=r.n(m),C=r(2),S=r(8),E=r(9),_=[],y="",U=!1,R=null,q=Object(x.c)(_,(n={},Object(C.a)(n,E.j,(function(e,t){return t.payload})),Object(C.a)(n,E.c,(function(e,t){var r=t.payload;return[].concat(Object(p.a)(e),[r])})),Object(C.a)(n,E.g,(function(e,t){var r=t.payload;return e.filter((function(e){return e.id!==r}))})),n)),N=Object(x.c)(U,(c={},Object(C.a)(c,E.b,(function(){return!0})),Object(C.a)(c,E.c,(function(){return!1})),Object(C.a)(c,E.a,(function(){return!1})),Object(C.a)(c,E.f,(function(){return!0})),Object(C.a)(c,E.g,(function(){return!1})),Object(C.a)(c,E.e,(function(){return!1})),Object(C.a)(c,E.i,(function(){return!0})),Object(C.a)(c,E.j,(function(){return!1})),Object(C.a)(c,E.h,(function(){return!1})),c)),w=function(e,t){return t.payload},L=Object(x.c)(R,(a={},Object(C.a)(a,E.a,w),Object(C.a)(a,E.e,w),Object(C.a)(a,E.h,w),a)),T=Object(x.c)(y,Object(C.a)({},E.d,(function(e,t){return t.payload}))),A=Object(S.c)({items:q,loading:N,error:L,filter:T}),z=r(3),M=null,P=null,B="",I=!1,J=!1,K=Object(x.c)(M,(u={},Object(C.a)(u,z.a.registerSuccess,(function(e,t){return t.payload.user})),Object(C.a)(u,z.a.loginSuccess,(function(e,t){return t.payload.user})),Object(C.a)(u,z.a.logoutSuccess,(function(){return M})),Object(C.a)(u,z.a.getCurrentUserSuccess,(function(e,t){return t.payload})),u)),F=Object(x.c)(J,(o={},Object(C.a)(o,z.a.registerRequest,(function(){return!0})),Object(C.a)(o,z.a.registerSuccess,(function(){return!1})),Object(C.a)(o,z.a.registerError,(function(){return!1})),Object(C.a)(o,z.a.loginRequest,(function(){return!0})),Object(C.a)(o,z.a.loginSuccess,(function(){return!1})),Object(C.a)(o,z.a.loginError,(function(){return!1})),Object(C.a)(o,z.a.logoutRequest,(function(){return!0})),Object(C.a)(o,z.a.logoutSuccess,(function(){return!1})),Object(C.a)(o,z.a.logoutError,(function(){return!1})),Object(C.a)(o,z.a.getCurrentUserRequest,(function(){return!0})),Object(C.a)(o,z.a.getCurrentUserSuccess,(function(){return!1})),Object(C.a)(o,z.a.getCurrentUserError,(function(){return!1})),o)),H=Object(x.c)(P,(s={},Object(C.a)(s,z.a.registerSuccess,(function(e,t){return t.payload.token})),Object(C.a)(s,z.a.loginSuccess,(function(e,t){return t.payload.token})),Object(C.a)(s,z.a.logoutSuccess,(function(){return null})),s)),W=function(e,t){return t.payload},D=Object(x.c)(B,(i={},Object(C.a)(i,z.a.registerError,W),Object(C.a)(i,z.a.loginError,W),Object(C.a)(i,z.a.logoutError,W),Object(C.a)(i,z.a.getCurrentUsererror,W),i)),Q=Object(x.c)(I,(b={},Object(C.a)(b,z.a.registerSuccess,(function(){return!0})),Object(C.a)(b,z.a.loginSuccess,(function(){return!0})),Object(C.a)(b,z.a.getCurrentUserSuccess,(function(){return!0})),Object(C.a)(b,z.a.registerError,(function(){return!1})),Object(C.a)(b,z.a.loginError,(function(){return!1})),Object(C.a)(b,z.a.getCurrentUsererror,(function(){return!1})),Object(C.a)(b,z.a.logoutSuccess,(function(){return!1})),b)),Y=Object(S.c)({user:K,isAuthenticated:Q,token:H,error:D,loading:F}),G=Object(p.a)(Object(x.d)({serializableCheck:{ignoredActions:[v.a,v.f,v.b,v.c,v.d,v.e]}})),V={key:"auth",storage:k.a,whitelist:["token"]},X=Object(x.a)({reducer:{auth:Object(v.g)(V,Y),contacts:A},middleware:G,devTools:!1}),Z={store:X,persistor:Object(v.h)(X)},$=(r(67),r(7)),ee={home:"/",register:"/register",login:"/login",contacts:"/contacts"},te=r(37),re=r.n(te),ne=(r(55),r(21)),ce=(r(86),r(87),r(27)),ae=r.n(ce),ue=function(e){return e.auth.isAuthenticated},oe=function(e){return e.auth.user.name},se=function(e){return e.auth.loading},ie=r(1),be=function(){var e=Object(g.c)(ue);return Object(ie.jsxs)("nav",{children:[Object(ie.jsx)(d.b,{to:ee.home,exact:!0,className:ae.a.link,activeClassName:ae.a.activeLink,children:"Home"}),e&&Object(ie.jsx)(d.b,{to:ee.contacts,exact:!0,className:ae.a.link,activeClassName:ae.a.activeLink,children:"Contacts"})]})},je=r(28),le=r.n(je),Oe=function(){return Object(ie.jsxs)("div",{children:[Object(ie.jsx)(d.b,{to:ee.register,exact:!0,className:le.a.link,activeClassName:le.a.activeLink,children:"Registration"}),Object(ie.jsx)(d.b,{to:ee.login,exact:!0,className:le.a.link,activeClassName:le.a.activeLink,children:"Login"})]})},fe=r(30),de=r.p+"static/media/avatar.fb653606.png",ge=r(29),he=r.n(ge),pe=function(){var e=Object(g.b)(),t=Object(g.c)(oe);return Object(ie.jsxs)("div",{className:he.a.container,children:[Object(ie.jsx)("img",{src:de,alt:"user avatar",width:"32",className:he.a.avatar}),Object(ie.jsxs)("span",{className:he.a.name,children:["Welcome, ",t]}),Object(ie.jsx)("button",{className:he.a.button,type:"button",onClick:function(){e(fe.a.logout())},children:"Logout"})]})},xe=r(54),ve=r.n(xe),me=function(){var e=Object(g.c)(ue);return console.log(e),Object(ie.jsxs)("header",{className:ve.a.header,children:[Object(ie.jsx)(be,{}),e?Object(ie.jsx)(pe,{}):Object(ie.jsx)(Oe,{})]})},ke=r(23),Ce=r(34),Se=function(e){var t=e.redirectTo,r=e.children,n=Object(Ce.a)(e,["redirectTo","children"]),c=Object(g.c)(ue);return Object(ie.jsx)($.b,Object(ke.a)(Object(ke.a)({},n),{},{children:c?r:Object(ie.jsx)($.a,{to:t})}))};Se.defaultProps={routeProps:null};var Ee=Se,_e=function(e){var t=e.redirectTo,r=e.children,n=Object(Ce.a)(e,["redirectTo","children"]),c=Object(g.c)(ue);return Object(ie.jsx)($.b,Object(ke.a)(Object(ke.a)({},n),{},{children:c&&n.restricted?Object(ie.jsx)($.a,{to:t}):r}))};_e.defaultProps={redirectTo:null,routeProps:null};var ye=_e,Ue=Object(j.lazy)((function(){return r.e(1).then(r.bind(null,138))})),Re=Object(j.lazy)((function(){return Promise.all([r.e(7),r.e(0)]).then(r.bind(null,137))})),qe=Object(j.lazy)((function(){return r.e(2).then(r.bind(null,139))})),Ne=Object(j.lazy)((function(){return r.e(3).then(r.bind(null,140))})),we=function(){var e=Object(g.b)(),t=Object(g.c)(se);return Object(j.useEffect)((function(){e(fe.a.getCurrentUser())}),[e]),Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(me,{}),Object(ie.jsx)(ne.a,{}),Object(ie.jsxs)("div",{className:"container",children:[t&&Object(ie.jsx)(re.a,{type:"Puff",color:"#C48613",height:75,width:75}),Object(ie.jsx)(j.Suspense,{fallback:Object(ie.jsx)(re.a,{type:"Puff",color:"#C48613",height:75,width:75}),children:Object(ie.jsxs)($.d,{children:[Object(ie.jsx)(ye,{exact:!0,path:ee.home,children:Object(ie.jsx)(Ue,{})}),Object(ie.jsx)(ye,{path:ee.register,restricted:!0,redirectTo:ee.contacts,children:Object(ie.jsx)(Ne,{})}),Object(ie.jsx)(ye,{path:ee.login,restricted:!0,redirectTo:ee.contacts,children:Object(ie.jsx)(qe,{})}),Object(ie.jsx)(Ee,{path:ee.home,redirectTo:ee.login,children:Object(ie.jsx)(Re,{})})]})})]})]})};f.a.render(Object(ie.jsx)(l.a.StrictMode,{children:Object(ie.jsx)(g.a,{store:Z.store,children:Object(ie.jsx)(h.a,{loading:null,persistor:Z.persistor,children:Object(ie.jsx)(d.a,{children:Object(ie.jsx)(we,{})})})})}),document.getElementById("root"))},27:function(e,t,r){e.exports={link:"Navigation_link__MKy2i",activeLink:"Navigation_activeLink__1K5qY"}},28:function(e,t,r){e.exports={link:"AuthNav_link__3OdN-",activeLink:"AuthNav_activeLink__FcjIk"}},29:function(e,t,r){e.exports={button:"UserMenu_button__31f9Q",container:"UserMenu_container__BDdSC",avatar:"UserMenu_avatar__1HW3K",name:"UserMenu_name__2bAMT"}},3:function(e,t,r){"use strict";var n=r(4),c=Object(n.b)("auth/registerRequest"),a=Object(n.b)("auth/registerSuccess"),u=Object(n.b)("auth/registerError"),o=Object(n.b)("auth/loginRequest"),s=Object(n.b)("auth/loginSuccess"),i=Object(n.b)("auth/loginError"),b=Object(n.b)("auth/logoutRequest"),j=Object(n.b)("auth/logoutSuccess"),l=Object(n.b)("auth/logoutError"),O=Object(n.b)("auth/getCurrentUserRequest"),f=Object(n.b)("auth/getCurrentUserSuccess"),d=Object(n.b)("auth/getCurrentUserError");t.a={registerRequest:c,registerSuccess:a,registerError:u,loginRequest:o,loginSuccess:s,loginError:i,logoutRequest:b,logoutSuccess:j,logoutError:l,getCurrentUserRequest:O,getCurrentUserSuccess:f,getCurrentUserError:d}},30:function(e,t,r){"use strict";var n=r(17),c=r.n(n),a=r(26),u=r(19),o=r.n(u),s=r(3),i=r(21);o.a.defaults.baseURL="https://connections-api.herokuapp.com";var b=function(e){o.a.defaults.headers.common.Authorization="Bearer ".concat(e)},j=function(){o.a.defaults.headers.common.Authorization=""};t.a={register:function(e){return function(){var t=Object(a.a)(c.a.mark((function t(r){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(s.a.registerRequest()),t.prev=1,t.next=4,o.a.post("/users/signup",e);case 4:n=t.sent,b(n.data.token),r(s.a.registerSuccess(n.data)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),i.b.error(t.t0.message),r(s.a.registerError(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(e){return function(){var t=Object(a.a)(c.a.mark((function t(r){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(s.a.loginRequest()),t.prev=1,t.next=4,o.a.post("/users/login",e);case 4:n=t.sent,b(n.data.token),r(s.a.loginSuccess(n.data)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),i.b.error(t.t0.message),r(s.a.loginError(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logout:function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(s.a.logoutRequest()),e.prev=1,e.next=4,o.a.post("/users/logout");case 4:j(),t(s.a.logoutSuccess()),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),i.b.error(e.t0.message),t(s.a.logoutError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var e=Object(a.a)(c.a.mark((function e(t,r){var n,a,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r(),a=n.auth.token){e.next=3;break}return e.abrupt("return");case 3:return b(a),t(s.a.getCurrentUserRequest()),e.prev=6,e.next=9,o.a.get("/users/current");case 9:u=e.sent,t(s.a.getCurrentUserSuccess(u.data)),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(6),i.b.error(e.t0.message),t(s.a.getCurrentUserError(e.t0.message));case 17:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(t,r){return e.apply(this,arguments)}}()}}},54:function(e,t,r){e.exports={header:"AppBar_header__IyJtw"}},67:function(e,t,r){},87:function(e,t,r){},9:function(e,t,r){"use strict";r.d(t,"i",(function(){return c})),r.d(t,"j",(function(){return a})),r.d(t,"h",(function(){return u})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return i})),r.d(t,"f",(function(){return b})),r.d(t,"g",(function(){return j})),r.d(t,"e",(function(){return l})),r.d(t,"d",(function(){return O}));var n=r(4),c=Object(n.b)("conatacts/fetchContactsRequest"),a=Object(n.b)("conatacts/fetchContactsSuccess"),u=Object(n.b)("conatacts/fetchContactsError"),o=Object(n.b)("conatacts/addContactRequest"),s=Object(n.b)("conatacts/addContactSuccess"),i=Object(n.b)("conatacts/addContactError"),b=Object(n.b)("conatacts/deleteContactRequest"),j=Object(n.b)("conatacts/deleteContactSuccess"),l=Object(n.b)("conatacts/deleteContactError"),O=Object(n.b)("conatacts/filter");Object(n.b)("conatacts/clearContactsError")}},[[109,5,6]]]);
//# sourceMappingURL=main.11269401.chunk.js.map