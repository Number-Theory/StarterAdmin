(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{qq80:function(e,t,r){"use strict";var a=r("fbTi"),s=r("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("QOaD");var l=s(r("oSJN"));r("lloV");var n=s(r("EZJh"));r("ZUEu");var i=s(r("A+px"));r("SgaC");var d=s(r("pjoe"));r("W30E");var u=s(r("qVcM"));r("CaXA");var o=s(r("1Ccs")),c=s(r("mK77")),f=s(r("43Yg")),g=s(r("/tCh")),m=s(r("scpF")),p=s(r("O/V9")),h=s(r("8aBX"));r("5gzX");var v=s(r("PgYa"));r("vUNy");var E=s(r("M6FO"));r("a0tz");var w=s(r("LKwA")),y=r("EPoL"),b=a(r("2w0b")),M=s(r("T6Od")),F=r("XLjY"),k=s(r("tFEz")),C=s(r("vyRF")),P=w.default.Item,S=E.default.Option,N=v.default.Group,q={ok:b.default.createElement("div",{className:C.default.success},b.default.createElement(y.FormattedMessage,{id:"userandregister.strength.strong"})),pass:b.default.createElement("div",{className:C.default.warning},b.default.createElement(y.FormattedMessage,{id:"userandregister.strength.medium"})),poor:b.default.createElement("div",{className:C.default.error},b.default.createElement(y.FormattedMessage,{id:"userandregister.strength.short"}))},x={ok:"success",pass:"normal",poor:"exception"},z=function(e){function t(){var e,r;(0,f.default)(this,t);for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return r=(0,m.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(s))),r.state={count:0,confirmDirty:!1,visible:!1,help:"",prefix:"86"},r.interval=void 0,r.onGetCaptcha=function(){var e=59;r.setState({count:e}),r.interval=window.setInterval(function(){e-=1,r.setState({count:e}),0===e&&clearInterval(r.interval)},1e3)},r.getPasswordStatus=function(){var e=r.props.form,t=e.getFieldValue("password");return t&&t.length>9?"ok":t&&t.length>5?"pass":"poor"},r.handleSubmit=function(e){e.preventDefault();var t=r.props,a=t.form,s=t.dispatch;a.validateFields({force:!0},function(e,t){if(!e){var a=r.state.prefix;s({type:"userAndregister/submit",payload:(0,c.default)({},t,{prefix:a})})}})},r.checkConfirm=function(e,t,a){var s=r.props.form;t&&t!==s.getFieldValue("password")?a((0,y.formatMessage)({id:"userandregister.password.twice"})):a()},r.checkPassword=function(e,t,a){var s=r.state,l=s.visible,n=s.confirmDirty;if(t)if(r.setState({help:""}),l||r.setState({visible:!!t}),t.length<6)a("error");else{var i=r.props.form;t&&n&&i.validateFields(["confirm"],{force:!0}),a()}else r.setState({help:(0,y.formatMessage)({id:"userandregister.password.required"}),visible:!!t}),a("error")},r.changePrefix=function(e){r.setState({prefix:e})},r.renderPasswordProgress=function(){var e=r.props.form,t=e.getFieldValue("password"),a=r.getPasswordStatus();return t&&t.length?b.default.createElement("div",{className:C.default["progress-".concat(a)]},b.default.createElement(o.default,{status:x[a],className:C.default.progress,strokeWidth:6,percent:10*t.length>100?100:10*t.length,showInfo:!1})):null},r}return(0,h.default)(t,e),(0,g.default)(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.userAndregister,r=e.form,a=r.getFieldValue("mail");"ok"===t.status&&(u.default.success("\u6ce8\u518c\u6210\u529f\uff01"),k.default.push({pathname:"/user/register-result",state:{account:a}}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,t=e.form,r=e.submitting,a=t.getFieldDecorator,s=this.state,u=s.count,o=s.prefix,c=s.help,f=s.visible;return b.default.createElement("div",{className:C.default.main},b.default.createElement("h3",null,b.default.createElement(y.FormattedMessage,{id:"userandregister.register.register"})),b.default.createElement(w.default,{onSubmit:this.handleSubmit},b.default.createElement(P,null,a("mail",{rules:[{required:!0,message:(0,y.formatMessage)({id:"userandregister.email.required"})},{type:"email",message:(0,y.formatMessage)({id:"userandregister.email.wrong-format"})}]})(b.default.createElement(v.default,{size:"large",placeholder:(0,y.formatMessage)({id:"userandregister.email.placeholder"})}))),b.default.createElement(P,{help:c},b.default.createElement(d.default,{getPopupContainer:function(e){return e&&e.parentNode?e.parentNode:e},content:b.default.createElement("div",{style:{padding:"4px 0"}},q[this.getPasswordStatus()],this.renderPasswordProgress(),b.default.createElement("div",{style:{marginTop:10}},b.default.createElement(y.FormattedMessage,{id:"userandregister.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:f},a("password",{rules:[{validator:this.checkPassword}]})(b.default.createElement(v.default,{size:"large",type:"password",placeholder:(0,y.formatMessage)({id:"userandregister.password.placeholder"})})))),b.default.createElement(P,null,a("confirm",{rules:[{required:!0,message:(0,y.formatMessage)({id:"userandregister.confirm-password.required"})},{validator:this.checkConfirm}]})(b.default.createElement(v.default,{size:"large",type:"password",placeholder:(0,y.formatMessage)({id:"userandregister.confirm-password.placeholder"})}))),b.default.createElement(P,null,b.default.createElement(N,{compact:!0},b.default.createElement(E.default,{size:"large",value:o,onChange:this.changePrefix,style:{width:"20%"}},b.default.createElement(S,{value:"86"},"+86"),b.default.createElement(S,{value:"87"},"+87")),a("mobile",{rules:[{required:!0,message:(0,y.formatMessage)({id:"userandregister.phone-number.required"})},{pattern:/^\d{11}$/,message:(0,y.formatMessage)({id:"userandregister.phone-number.wrong-format"})}]})(b.default.createElement(v.default,{size:"large",style:{width:"80%"},placeholder:(0,y.formatMessage)({id:"userandregister.phone-number.placeholder"})})))),b.default.createElement(P,null,b.default.createElement(l.default,{gutter:8},b.default.createElement(i.default,{span:16},a("captcha",{rules:[{required:!0,message:(0,y.formatMessage)({id:"userandregister.verification-code.required"})}]})(b.default.createElement(v.default,{size:"large",placeholder:(0,y.formatMessage)({id:"userandregister.verification-code.placeholder"})}))),b.default.createElement(i.default,{span:8},b.default.createElement(n.default,{size:"large",disabled:!!u,className:C.default.getCaptcha,onClick:this.onGetCaptcha},u?"".concat(u," s"):(0,y.formatMessage)({id:"userandregister.register.get-verification-code"}))))),b.default.createElement(P,null,b.default.createElement(n.default,{size:"large",loading:r,className:C.default.submit,type:"primary",htmlType:"submit"},b.default.createElement(y.FormattedMessage,{id:"userandregister.register.register"})),b.default.createElement(M.default,{className:C.default.login,to:"/user/login"},b.default.createElement(y.FormattedMessage,{id:"userandregister.register.sign-in"})))))}}]),t}(b.Component),A=(0,F.connect)(function(e){var t=e.userAndregister,r=e.loading;return{userAndregister:t,submitting:r.effects["userAndregister/submit"]}})(w.default.create()(z));t.default=A},vyRF:function(e,t,r){e.exports={main:"antd-pro-pages-user-register-style-main",getCaptcha:"antd-pro-pages-user-register-style-getCaptcha",submit:"antd-pro-pages-user-register-style-submit",login:"antd-pro-pages-user-register-style-login",error:"antd-pro-pages-user-register-style-error",success:"antd-pro-pages-user-register-style-success",warning:"antd-pro-pages-user-register-style-warning","progress-pass":"antd-pro-pages-user-register-style-progress-pass",progress:"antd-pro-pages-user-register-style-progress"}}}]);