(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{86:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(33),l=a(34),o=a(36),s=a(35),i=a(0),c=a(8),h=a(23),u=a(1),b={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},p=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var l=arguments.length,o=new Array(l),s=0;s<l;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:""},e.reset=function(){e.setState({email:"",password:""})},e.handleChange=function(t){e.setState(Object(n.a)({},t.currentTarget.name,t.currentTarget.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.onLogIn(e.state),e.reset()},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043b\u043e\u0433\u0438\u043d\u0430"}),Object(u.jsxs)("form",{style:b.form,autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(u.jsxs)("label",{style:b.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(u.jsx)("input",{type:"email",name:"email",value:t,placeholder:"Enter your email",onChange:this.handleChange})]}),Object(u.jsxs)("label",{style:b.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(u.jsx)("input",{type:"password",name:"password",value:a,placeholder:"Enter your password",onChange:this.handleChange})]}),Object(u.jsx)("button",{type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}}]),a}(i.Component),d={onLogIn:h.a.logIn};t.default=Object(c.b)(null,d)(p)}}]);
//# sourceMappingURL=5.6b53a33b.chunk.js.map