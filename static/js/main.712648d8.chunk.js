(this.webpackJsonpstartingpage=this.webpackJsonpstartingpage||[]).push([[0],{23:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),u=a(9),o=a(49),i=Object(u.a)({root:{background:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",borderRadius:3,border:0,color:"white",height:48,padding:"0 30px",margin:"30px auto",boxShadow:"0 3px 5px 2px rgba(33, 203, 243, .3)"},label:{textTransform:"uppercase"}})(o.a),s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{href:"https://patrycjapaczkowska.github.io/To-do-application/",className:"App_buttonToTask"},"Go to the tasks"))},p=a(6),m=function(e){var t=e.handleChangeTitle,a=e.oldTitle,r=e.close,c=Object(n.useState)(a),i=Object(p.a)(c,2),s=i[0],m=i[1];t(s);var d=Object(u.a)({root:{background:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",borderRadius:3,border:0,color:"white",fontSize:".5em",height:20,padding:"0 20px",margin:"10px",boxShadow:"0 3px 5px 2px rgba(33, 203, 243, .3)"},label:{textTransform:"uppercase"}})(o.a);return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{className:"App__greeting--input",type:"text",value:s,onChange:function(e){m(e.target.value)}}),l.a.createElement(d,{onClick:r},"Close"))},d=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("Hi, how is your plan today?"),u=Object(p.a)(c,2),o=u[0],i=u[1],s=function(e){if(a)i(e);else if(!a)return void r(!0)},d=a&&l.a.createElement(m,{handleChangeTitle:s,oldTitle:o,close:function(){r(!1)}}),E=a?null:l.a.createElement("p",{className:"App__greeting--button",onClick:s},"Change greeting");return l.a.createElement("div",{className:"App__greeting"},l.a.createElement("h1",{className:"App__greeting--title"},o),E,d)},E=function(){return l.a.createElement("div",{className:"App__Calculators__Simple"},"Simple Calculator")},g=function(){return l.a.createElement("div",{className:"App__Calculators__Currency"},"Currency Calculator")},b=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),u=Object(p.a)(c,2),o=u[0],i=u[1],s=a?l.a.createElement(E,null):null,m=o?l.a.createElement(g,null):null;return l.a.createElement("div",{className:"App__Calculators"},l.a.createElement("div",{className:"App__Calculators--buttons"},l.a.createElement("button",{className:"App__Calculators--button",onClick:function(){o?(i(!1),r(!0)):r(!0)}},"Default Calculator"),l.a.createElement("button",{className:"App__Calculators--button",onClick:function(){a?(r(!1),i(!0)):i(!0)}},"Currency Calculator"),l.a.createElement("button",{className:"App__Calculators--button",onClick:function(){r(!1),i(!1)}},"Close")),m,s)},_=function(){return l.a.createElement("div",{className:"App__Savings"},l.a.createElement("p",null,"Saving App"),l.a.createElement("div",null,l.a.createElement("div",{className:"panelOfSavings"},l.a.createElement("div",null,"Zaoszcz\u0119dzono:"),l.a.createElement("div",null,"Pozosta\u0142o")),l.a.createElement("input",{type:"text"}),l.a.createElement("input",{type:"number"})))},C=function(){return l.a.createElement("div",{className:"App__weather"},l.a.createElement("img",{src:"/",alt:"sun"}),l.a.createElement("p",null,"20.20.2021, 13:55:11"),l.a.createElement("p",null,"Gda\u0144sk"),l.a.createElement("p",null,"25",l.a.createElement("sup",null,"o"),"C"))};a(32);var f=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(C,null),l.a.createElement(d,null),l.a.createElement(s,null),l.a.createElement("div",{className:"App__panels"},l.a.createElement(_,null),l.a.createElement(b,null)))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.712648d8.chunk.js.map