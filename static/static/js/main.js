(this.webpackJsonpshopredux=this.webpackJsonpshopredux||[]).push([[0],{117:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=(a(93),a(40)),i=a(14),s=a(29),m=a(19),u=a(17),p=JSON.parse(localStorage.getItem("carts")),d={carts:p||[],products:[],isAuthenticated:!1,token:""},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return localStorage.setItem("token",JSON.stringify(t.token)),Object(u.a)({},e,{isAuthenticated:!0,token:t.token});case"LOGIN-CHECK":return Object(u.a)({},e,{isAuthenticated:!0,token:t.token});case"LOGOUT":return localStorage.removeItem("token"),Object(u.a)({},e,{isAuthenticated:!1});case"ADD_CART":if(e.carts!==[]){var a=e.carts.findIndex((function(e){return e.pk===t.cart.pk}));if(-1!==a){var n=Object.assign([],e.carts),r=n.find((function(e){return e.pk===t.cart.pk}));return r.quantityCart++,n.splice(a,1,r),Object(u.a)({},e,{carts:n})}}var c=Object.assign({},t.cart,{quantityCart:1}),o=Object.assign([],e.carts);return o.push(c),Object(u.a)({},e,{carts:o});case"REDUCE_CART":var l=e.carts.find((function(e){return e.pk===t.cart.pk}));if(void 0!==l&&l.quantityCart>1){var i=e.carts.find((function(e){return e.pk===t.cart.pk})),s=Object(u.a)({},i);s.quantityCart--;var p=Object(m.a)(e.carts),E=p.findIndex((function(e){return e.pk===t.cart.pk}));return p.splice(E,1,s),Object(u.a)({},e,{carts:p})}var f=e.carts.filter((function(e){return e.pk!==t.cart.pk}));return console.log(f," reduceCart"),console.log(e.carts," state.carts"),Object(u.a)({},e,{carts:f});case"GET_PRODUCTS":return Object(u.a)({},e,{products:t.products});case"REMOVE_CART":var h=e.carts.filter((function(e){return e.pk!==t.cart.pk}));return Object(u.a)({},e,{carts:h});case"SAVE_CART":return localStorage.setItem("carts",JSON.stringify(e.carts)),e;default:return e}},f=a(25),h=a(32),g=a.n(h),b=a(71),v=a(163),O=a(164),y=a(167),k=a(165),j=a(169),C=a(166),w=a(72),S=a.n(w),N=a(168),x=a(44),T=a.n(x),A=Object(b.a)({card:{maxWidth:345},media:{height:140}});function _(e){var t=e.product,a=e.add,n=A();return r.a.createElement(v.a,{className:n.card},r.a.createElement(O.a,null,r.a.createElement(k.a,null,r.a.createElement(C.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.name),r.a.createElement(C.a,{variant:"body2",color:"textSecondary",component:"p"},"Lizards are a widespread group of squamate reptiles  ",t.description))),r.a.createElement(y.a,null,r.a.createElement(N.a,{container:!0,spacing:1},r.a.createElement(N.a,{item:!0,xs:!0},r.a.createElement(C.a,{gutterBottom:!0,variant:"h5",component:"h2"},"$",t.price)),r.a.createElement(N.a,{item:!0,xs:!0},r.a.createElement(j.a,{size:"small",onClick:a},r.a.createElement(S.a,{style:{color:T.a[500]}}))))))}var R=a(170);var D=function(){var e=Object(i.c)((function(e){return e.products})),t=Object(i.c)((function(e){return e.carts})),a=Object(i.b)();return Object(n.useEffect)((function(){t.length>-1&&a({type:"SAVE_CART"})}),[t]),Object(n.useEffect)((function(){g.a.get("https://shoppingcart-django-redux.herokuapp.com/products/").then((function(e){a({type:"GET_PRODUCTS",products:e.data})})).catch((function(e){console.log(" err in fetching ",e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h1",null,"Products"),r.a.createElement(R.a,{maxWidth:"md",style:{marginTop:"10px"}},"undefined"!==typeof e?r.a.createElement(N.a,{container:!0,spacing:1},e.map((function(e){return r.a.createElement(N.a,{item:!0,xs:3,key:e.pk},r.a.createElement(_,{product:e,add:function(){return a({type:"ADD_CART",cart:e})}}))}))):r.a.createElement(N.a,{container:!0,spacing:1},r.a.createElement(N.a,{item:!0,xs:!0},r.a.createElement("div",{className:"empty"},"No books to read. Hello free time :).")))))},I=a(4),q=a(173),z=a(176),L=a(175),B=a(172),G=a(174),P=a(171),V=a(81),W=a(75),J=a.n(W),U=a(73),X=a.n(U),$=a(74),H=a.n($),M=Object(I.a)((function(e){return{root:{backgroundColor:e.palette.background.default}}}))(P.a),K=Object(b.a)({table:{minWidth:650},total:{borderColor:"white"}});function F(){var e=Object(i.c)((function(e){return e.carts})),t=Object(i.b)(),a=K();return Object(n.useEffect)((function(){e.length>-1&&t({type:"SAVE_CART"})}),[e]),r.a.createElement("div",null,r.a.createElement("h1",null,"Shopping Cart"),r.a.createElement(N.a,{container:!0,spacing:1},r.a.createElement(N.a,{item:!0,xs:1}),r.a.createElement(N.a,{item:!0},0!==e.length?r.a.createElement(B.a,{component:V.a},r.a.createElement(q.a,{"aria-label":"simple table"},r.a.createElement(G.a,null,r.a.createElement(P.a,null,r.a.createElement(L.a,null,"Name"),r.a.createElement(L.a,{align:"right"},"Price"),r.a.createElement(L.a,{align:"right"},"Quantity"),r.a.createElement(L.a,{align:"center"},"Actions"))),r.a.createElement(z.a,null,e.map((function(e){return r.a.createElement(P.a,{key:e.pk},r.a.createElement(L.a,{component:"th",scope:"row"},e.name),r.a.createElement(L.a,{align:"right"},"$",e.price),r.a.createElement(L.a,{align:"right"},e.quantityCart),r.a.createElement(L.a,{align:"right"},r.a.createElement(j.a,{size:"small"},r.a.createElement(X.a,{fontSize:"small",style:{color:T.a[500]},onClick:function(){return t({type:"ADD_CART",cart:e})}})),r.a.createElement(j.a,{size:"small"},r.a.createElement(H.a,{fontSize:"small",color:"secondary",onClick:function(){return t({type:"REDUCE_CART",cart:e})}})),r.a.createElement(j.a,{size:"small"},r.a.createElement(J.a,{fontSize:"small",onClick:function(){return t({type:"REMOVE_CART",cart:e})}}))))})),r.a.createElement(M,{className:a.total},r.a.createElement(L.a,{component:"th",scope:"row"},"Total"),r.a.createElement(L.a,{align:"right"},"$",e.reduce((function(e,t){return+e+ +t.price}),0)*e.reduce((function(e,t){return+e+ +t.quantityCart}),0)),r.a.createElement(L.a,{align:"right"},e.reduce((function(e,t){return+e+ +t.quantityCart}),0)))))):r.a.createElement("p",null,"No items in the Shopping Cart"))))}var Q=a(10),Z=a(48),Y=function(e,t){var a=Object(n.useState)({}),r=Object(Z.a)(a,2),c=r[0],o=r[1],l=Object(n.useState)({}),i=Object(Z.a)(l,2),s=i[0],m=i[1],p=Object(n.useState)(!1),d=Object(Z.a)(p,2),E=d[0],f=d[1];Object(n.useEffect)((function(){0===Object.keys(s).length&&E&&e()}),[s]);return{handleChange:function(e){e.persist(),o((function(t){return Object(u.a)({},t,Object(Q.a)({},e.target.name,e.target.value))})),m(t(c))},handleSubmit:function(e){e&&e.preventDefault(),m(t(c)),f(!0)},values:c,errors:s}};function ee(e){var t={};return e.name?e.name.length<2&&(t.name="Password must be 2 or more characters"):t.name="name address is required",e.password?e.password.length<2&&(t.password="Password must be 2 or more characters"):t.password="Password is required",t}var te=a(186),ae=a(177),ne=a(185),re=a(76),ce=a.n(re),oe=Object(b.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),le=function(e){var t=Object(i.b)(),a=oe(),n=Y((function(){g.a.post("https://shoppingcart-django-redux.herokuapp.com/products/api/token/",{username:c.name,password:c.password}).then((function(a){console.log(a.data.access),t({type:"LOGIN",token:a.data.access}),e.history.push("/"),window.location.reload(!0)})).catch((function(e){console.log(" err in fetching ",e)}))}),ee),c=n.values,o=n.errors,l=n.handleChange,s=n.handleSubmit;return r.a.createElement("div",{className:"section is-fullheight"},r.a.createElement(R.a,{component:"main",maxWidth:"xs"},r.a.createElement(ae.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(te.a,{className:a.avatar},r.a.createElement(ce.a,null)),r.a.createElement(C.a,{component:"h1",variant:"h5"},"Log in"),r.a.createElement(C.a,{component:"h1",variant:"h5"},"username: admin"),r.a.createElement(C.a,{component:"h1",variant:"h5"},"password: admin"),r.a.createElement("form",{className:a.form,onSubmit:s,noValidate:!0},r.a.createElement(N.a,{container:!0,spacing:2},r.a.createElement(N.a,{item:!0,xs:12},r.a.createElement(ne.a,{variant:"outlined",required:!0,fullWidth:!0,autoComplete:"name",name:"name",id:"name",label:"Name",autoFocus:!0,onChange:l,value:c.name||"",helperText:o.name,error:"string"===typeof o.name}),r.a.createElement(C.a,{component:"h1",variant:"h5"})),r.a.createElement(N.a,{item:!0,xs:12},r.a.createElement(ne.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"component-error",autoComplete:"current-password",onChange:l,value:c.password||"",helperText:o.password,error:"string"===typeof o.password}))),r.a.createElement(j.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Log in")))))},ie=a(178),se=a(179),me=a(182),ue=a(78),pe=a.n(ue),de=a(180),Ee=a(181),fe=Object(b.a)((function(e){return{root:{flexGrow:3},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},navButtonStyle:{color:"white","text-decoration":"none"}}}));var he=function(){var e=Object(i.c)((function(e){return e.carts})),t=fe();return r.a.createElement("div",null,r.a.createElement(ie.a,null,r.a.createElement(se.a,null,r.a.createElement(j.a,{color:"default"},r.a.createElement(s.b,{activeClassName:"active",exact:!0,to:"/",className:t.navButtonStyle},r.a.createElement(C.a,{color:"inherit",variant:"subtitle1"},"Products  ",r.a.createElement(de.a,{fontSize:"small"}))))," ",r.a.createElement("br",null),r.a.createElement(j.a,{color:"default"},r.a.createElement(s.b,{activeClassName:"active",exact:!0,to:"/login",className:t.navButtonStyle},r.a.createElement(C.a,{color:"inherit",variant:"subtitle1"},"Login  ",r.a.createElement(Ee.a,{fontSize:"small"})))),r.a.createElement("br",null),r.a.createElement(j.a,{color:"default"},r.a.createElement(s.b,{activeClassName:"active",exact:!0,to:"/cartlist",className:t.navButtonStyle},r.a.createElement(C.a,{color:"inherit",variant:"subtitle1"},r.a.createElement(me.a,{badgeContent:e.length,color:"secondary",showZero:!0},"Cart",r.a.createElement(pe.a,null))))))))};var ge=function(){return r.a.createElement("h1",null,"Notfound")};var be=function(){var e=Object(i.b)(),t=localStorage.getItem("token");return Object(n.useEffect)((function(){null!==t&&e({type:"LOGIN-CHECK",token:JSON.parse(t)})}),[JSON.parse(t)]),r.a.createElement("div",null,r.a.createElement(he,null),r.a.createElement("div",{style:{marginTop:80}},r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:D}),r.a.createElement(f.a,{exact:!0,path:"/cartlist",component:F}),r.a.createElement(f.a,{exact:!0,path:"/login",component:le}),r.a.createElement(f.a,{component:ge}))))},ve=(a(117),a(183)),Oe=a(79),ye=a(184),ke=Object(l.b)(E,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var je=function(){var e=Object(ve.a)("(prefers-color-scheme: dark)"),t=r.a.useMemo((function(){return Object(Oe.a)({typography:{useNextVariants:!0},palette:{type:e?"dark":"light"}})}),[e]);return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{store:ke},r.a.createElement(ye.a,{theme:t},r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(be,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=localStorage.getItem("token");Ce&&(g.a.defaults.headers.common={Authorization:"Bearer "+JSON.parse(Ce),"Content-Type":"application/json"}),o.a.render(r.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},88:function(e,t,a){e.exports=a(118)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.44a2f197.chunk.js.map