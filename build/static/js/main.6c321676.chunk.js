(this["webpackJsonptrustic-survey-react"]=this["webpackJsonptrustic-survey-react"]||[]).push([[0],{163:function(e,t,s){},164:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s(0),a=s.n(i),c=s(17),r=s.n(c),l=s(15),o=s(8),u=function(e){var t=e.openSimpleModal,s=e.openIntroductoryCallModal;return Object(n.jsx)(o.a,{children:Object(n.jsx)(o.b.nav,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"nav",children:Object(n.jsxs)("ul",{className:"nav__list",children:[Object(n.jsx)("li",{className:"nav__item",onClick:s,children:"Book an introductory call"}),Object(n.jsx)("li",{className:"nav__item",onClick:t,"data-simple-modal-opener":"nav",children:"Sign up for future retirement insights"})]})},"Nav")})},d=[{step:0,title:"Take our short survey to compare your retirement planning to other Canadians."},{step:1,title:"What personal goals or dreams do you want to accomplish after you retire?"},{step:2,title:"At present, what preparations have you made for your retirement?"},{step:3,title:"How will your retirement income be generated?"}],m=[{forQuestion:1,id:"q1-01",percentAnswered:100,questionText:"Travel, see the world"},{forQuestion:1,id:"q1-02",percentAnswered:31.25,questionText:"Time with spouse, kids, family, friends"},{forQuestion:1,id:"q1-03",percentAnswered:27.08,questionText:"Stay healthy, be more active"},{forQuestion:1,id:"q1-04",percentAnswered:27.08,questionText:"Spend more time on hobbies, passions"},{forQuestion:1,id:"q1-05",percentAnswered:22.91,questionText:"Have fun, enjoy life"},{forQuestion:1,id:"q1-06",percentAnswered:20.83,questionText:"Relax, have more time for myself"},{forQuestion:1,id:"q1-07",percentAnswered:18.75,questionText:"Volunteer, help others"},{forQuestion:1,id:"q1-08",percentAnswered:16.66,questionText:"Learn something new"},{forQuestion:1,id:"q1-09",percentAnswered:10.41,questionText:"Be debt-free, financially secure"},{forQuestion:1,id:"q1-10",percentAnswered:6.25,questionText:"Buy dream home / cabin, move somewhere new"},{forQuestion:1,id:"q1-11",percentAnswered:6.25,questionText:"Open a small business, work part-time"},{forQuestion:1,id:"q1-12",percentAnswered:6.25,questionText:"Don\u2019t know, nothing in particular"},{forQuestion:1,id:"q1-13",percentAnswered:2.08,questionText:"Live independently, not be a burden"},{forQuestion:2,id:"q2-01",percentAnswered:100,questionText:"Prepared a written Will"},{forQuestion:2,id:"q2-02",percentAnswered:83.11,questionText:"Obtained the services of a financial advisor"},{forQuestion:2,id:"q2-03",percentAnswered:77.92,questionText:"Prepared a written financial plan"},{forQuestion:2,id:"q2-04",percentAnswered:64.93,questionText:"Obtained a Power of Attorney"},{forQuestion:3,id:"q3-01",percentAnswered:100,questionText:"Government pension or benefits"},{forQuestion:3,id:"q3-02",percentAnswered:98.86,questionText:"RRSPs or RRIFs"},{forQuestion:3,id:"q3-03",percentAnswered:80.68,questionText:"Tax-Free Savings Account"},{forQuestion:3,id:"q3-04",percentAnswered:79.54,questionText:"Company Pension Plan"},{forQuestion:3,id:"q3-05",percentAnswered:73.86,questionText:"Funds invested outside an RRSP, RRIF or TFSA"},{forQuestion:3,id:"q3-06",percentAnswered:43.18,questionText:"Employment income (mine)"},{forQuestion:3,id:"q3-07",percentAnswered:42.04,questionText:"Employment income (partner)"},{forQuestion:3,id:"q3-08",percentAnswered:29.54,questionText:"Property generated income"},{forQuestion:3,id:"q3-09",percentAnswered:3.4,questionText:"Other"}],j=function(e){var t=e.currentStep,s=e.onClickHandler,i=e.openSimpleModal;return 0===t?Object(n.jsx)(o.a,{children:Object(n.jsxs)(o.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"intro",children:[Object(n.jsx)("h2",{className:"intro__heading",children:d[d.map((function(e){return e.step})).indexOf(t)].title}),Object(n.jsx)("p",{className:"intro__copy",children:"Want to find out what they said now? Download the survey results."}),Object(n.jsx)("button",{className:"intro__button",onClick:i,"data-simple-modal-opener":"intro",children:"Download Survey Results"}),Object(n.jsx)("button",{className:"intro__button",onClick:s,children:"Start Survey"})]},"Intro")}):null},p=function(e){var t=e.currentStep,s=e.currentQuestion,i=e.onClickHandler,a=e.handleCheckedOptions;return 1===t?Object(n.jsx)(o.a,{children:Object(n.jsxs)(o.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"question",children:[Object(n.jsx)("h2",{className:"question__heading",children:d[d.map((function(e){return e.step})).indexOf(t)].title}),Object(n.jsx)("ul",{className:"question__list",children:m.map((function(e){return e.forQuestion===s&&Object(n.jsxs)("li",{className:"question__item",children:[Object(n.jsx)("input",{className:"question__checkbox",type:"checkbox",id:e.id,onChange:a}),Object(n.jsx)("label",{className:"question__label",htmlFor:e.id,children:e.questionText})]},e.id)}))}),Object(n.jsx)("button",{onClick:i,children:"Next Question"})]},"Question1")}):null},b=function(e){var t=e.currentStep,s=e.currentQuestion,i=e.onClickHandler,a=e.handleCheckedOptions;return 2===t?Object(n.jsx)(o.a,{children:Object(n.jsxs)(o.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"question",children:[Object(n.jsx)("h2",{children:d[d.map((function(e){return e.step})).indexOf(t)].title}),Object(n.jsx)("ul",{className:"question__list",children:m.map((function(e){return e.forQuestion===s&&Object(n.jsxs)("li",{className:"question__item",children:[Object(n.jsx)("input",{className:"question__checkbox",type:"checkbox",id:e.id,onChange:a}),Object(n.jsx)("label",{className:"question__label",htmlFor:e.id,children:e.questionText})]},e.id)}))}),Object(n.jsx)("button",{onClick:i,children:"Next Question"})]},"Question2")}):null},h=function(e){var t=e.currentStep,s=e.currentQuestion,i=e.onClickHandler,a=e.handleCheckedOptions;return 3===t?Object(n.jsx)(o.a,{children:Object(n.jsxs)(o.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[Object(n.jsx)("h2",{children:d[d.map((function(e){return e.step})).indexOf(t)].title}),Object(n.jsx)("ul",{className:"question__list",children:m.map((function(e){return e.forQuestion===s&&Object(n.jsxs)("li",{className:"question__item",children:[Object(n.jsx)("input",{className:"question__checkbox",type:"checkbox",id:e.id,onChange:a}),Object(n.jsx)("label",{className:"question__label",htmlFor:e.id,children:e.questionText})]},e.id)}))}),Object(n.jsx)("button",{onClick:i,children:"See Results"})]},"Question3")}):null},x=s(50),O=s(52),_=function(){return Object(n.jsxs)("footer",{className:"footer",children:[Object(n.jsx)("h2",{children:"Hello from the Footer component"}),Object(n.jsx)(x.a,{icon:O.a}),Object(n.jsx)(x.a,{icon:O.b})]})},f=function(e){var t=e.checkedOptions,s=function(e){return t.indexOf(e.id)>-1?"selected":""};return Object(n.jsx)(o.a,{children:Object(n.jsxs)(o.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"results",children:[Object(n.jsxs)("div",{className:"results__hero-text",children:[Object(n.jsx)("h2",{className:"results__heading",children:"See how your answers align with other Canadians. Download the complete survey results to get the full picture, or get in touch to start planning."}),Object(n.jsxs)("p",{className:"results__reminder",children:["Below are the answers other Canadian's selected.",Object(n.jsx)("br",{}),"The highlighted answers are the ones you also selected."]}),Object(n.jsxs)("div",{className:"results__selections",children:[Object(n.jsx)("div",{className:"results__selections-box"}),Object(n.jsx)("p",{className:"results__selections-text",children:"= your selections"})]})]}),Object(n.jsx)("div",{className:"results__divider"}),Object(n.jsxs)("div",{className:"results__answers",children:[Object(n.jsx)("h3",{className:"results__answers-heading",children:d[0].title}),Object(n.jsx)("ul",{className:"results__answers-list",children:m.filter((function(e){return 1===e.forQuestion})).map((function(e){return Object(n.jsxs)("li",{className:"results__answers-item",children:[Object(n.jsx)("span",{className:"results__answers-text ".concat(s(e)),children:e.questionText}),Object(n.jsx)("div",{className:"results__answers-percent-bar ".concat(s(e)),style:{width:"".concat(e.percentAnswered,"%")}})]},e.id)}))})]}),Object(n.jsx)("div",{className:"results__divider"}),Object(n.jsxs)("div",{className:"results__answers",children:[Object(n.jsx)("h3",{className:"results__answers-heading",children:d[1].title}),Object(n.jsx)("ul",{className:"results__answers-list",children:m.filter((function(e){return 2===e.forQuestion})).map((function(e){return Object(n.jsxs)("li",{className:"results__answers-item",children:[Object(n.jsx)("span",{className:"results__answers-text ".concat(s(e)),children:e.questionText}),Object(n.jsx)("div",{className:"results__answers-percent-bar ".concat(s(e)),style:{width:"".concat(e.percentAnswered,"%")}})]},e.id)}))})]}),Object(n.jsx)("div",{className:"results__divider"}),Object(n.jsxs)("div",{className:"results__answers",children:[Object(n.jsx)("h3",{className:"results__answers-heading",children:d[2].title}),Object(n.jsx)("ul",{className:"results__answers-list",children:m.filter((function(e){return 3===e.forQuestion})).map((function(e){return Object(n.jsxs)("li",{className:"results__answers-item",children:[Object(n.jsx)("span",{className:"results__answers-text ".concat(s(e)),children:e.questionText}),Object(n.jsx)("div",{className:"results__answers-percent-bar ".concat(s(e)),style:{width:"".concat(e.percentAnswered,"%")}})]},e.id)}))})]}),Object(n.jsx)(_,{})]},"Results")})},N=s(32),v=s.n(N),w=s(66),y=s.n(w),q=s(67),g=s.n(q),S=(s(102),s.p+"static/media/trustic-logo.070286d9.png"),T=function(e){var t=e.isIntroductoryCallModalOpen,s=e.closeIntroductoryCallModal,a=Object(i.useState)(new Date),c=Object(l.a)(a,2),r=c[0],o=c[1],u=Object(i.useState)(new Date),d=Object(l.a)(u,2),m=d[0],j=d[1];return Object(i.useEffect)((function(){var e=new Date;return t&&(o(e),j(e)),function(){return!t}}),[t]),Object(n.jsxs)(v.a,{isOpen:t,contentLabel:"Simple Contact Form",onRequestClose:s,ariaHideApp:!1,closeTimeoutMS:500,className:"icm",children:[Object(n.jsx)("img",{className:"icm__logo",src:S,alt:"Trustic Logo"}),Object(n.jsxs)("form",{action:"icm__form",children:[Object(n.jsxs)("div",{className:"icm__form-group",children:[Object(n.jsx)("label",{className:"icm__label",htmlFor:"advisor",children:"Meeting with"}),Object(n.jsxs)("select",{className:"icm__input",name:"advisor",id:"advisor",children:[Object(n.jsx)("option",{value:"Choose Advisor",children:"Choose Advisor"}),Object(n.jsx)("option",{value:"Daniel",children:"Daniel"}),Object(n.jsx)("option",{value:"Gabriella",children:"Gabriella"}),Object(n.jsx)("option",{value:"Randall",children:"Randall"}),Object(n.jsx)("option",{value:"Lillian",children:"Lillian"}),Object(n.jsx)("option",{value:"Beatrice",children:"Beatrice"})]})]}),Object(n.jsxs)("div",{className:"icm__form-group",children:[Object(n.jsx)("label",{className:"icm__label",children:"On"}),Object(n.jsx)(g.a,{selected:r,onChange:function(e){return o(e)},className:"icm__input"})]}),Object(n.jsxs)("div",{className:"icm__form-group",children:[Object(n.jsx)("label",{className:"icm__label",children:"At"}),Object(n.jsx)(y.a,{onChange:j,value:m,className:"icm__input"})]}),Object(n.jsxs)("div",{className:"icm__form-group",children:[Object(n.jsx)("label",{className:"icm__label",htmlFor:"name",children:"Name"}),Object(n.jsx)("input",{className:"icm__input",type:"text",name:"name",id:"name",placeholder:"Enter your full name"})]}),Object(n.jsxs)("div",{className:"icm__form-group",children:[Object(n.jsx)("label",{className:"icm__label",htmlFor:"email",children:"Email"}),Object(n.jsx)("input",{className:"icm__input",type:"email",name:"email",id:"email",placeholder:"Enter your email address"})]}),Object(n.jsxs)("div",{className:"icm__form-group",children:[Object(n.jsx)("label",{className:"icm__label",htmlFor:"message",children:"Message"}),Object(n.jsx)("textarea",{name:"message",id:"message",cols:"30",rows:"5",placeholder:"Anything we should know?",className:"icm__message"})]}),Object(n.jsxs)("p",{className:"icm__legal",children:["By clicking below you agree to these ",Object(n.jsx)("span",{children:"Terms and Conditions"})," and"," ",Object(n.jsx)("span",{children:"Privacy Policies"}),"."]}),Object(n.jsx)("input",{className:"icm__submit",type:"submit",value:"Book Appointment"})]})]})},C=function(e){var t=e.isSimpleModalOpen,s=e.closeSimpleModal,i=e.simpleModalHeadingText;return Object(n.jsxs)(v.a,{isOpen:t,contentLabel:"Simple Contact Form",onRequestClose:s,ariaHideApp:!1,closeTimeoutMS:500,className:"sum",children:[Object(n.jsx)("img",{className:"sum__logo",src:S,alt:"Trustic Logo"}),Object(n.jsx)("h2",{className:"sum__heading",children:i}),Object(n.jsxs)("form",{className:"sum__form",action:"",children:[Object(n.jsxs)("div",{className:"sum__form-group",children:[Object(n.jsx)("label",{className:"sum__label",htmlFor:"name",children:"Name"}),Object(n.jsx)("input",{className:"sum__input",type:"text",name:"name",id:"name",placeholder:"Enter your full name"})]}),Object(n.jsxs)("div",{className:"sum__form-group",children:[Object(n.jsx)("label",{className:"sum__label",htmlFor:"email",children:"Email"}),Object(n.jsx)("input",{className:"sum__input",type:"email",name:"email",id:"email",placeholder:"Enter your email address"})]}),Object(n.jsx)("div",{className:"sum__form-group",children:Object(n.jsx)("input",{type:"submit",value:"Submit"})}),Object(n.jsx)("p",{className:"sum__legal",children:"By submitting, I agree to receive email communications from Trustic Wealth Management and personnel. I understand I may withdraw my consent to receive communications at any time."})]})]})},Q=function(){var e=Object(i.useState)(0),t=Object(l.a)(e,2),s=t[0],a=t[1],c=Object(i.useState)(1),r=Object(l.a)(c,2),o=r[0],d=r[1],m=Object(i.useState)(!1),x=Object(l.a)(m,2),O=x[0],_=x[1],N=Object(i.useState)(!1),v=Object(l.a)(N,2),w=v[0],y=v[1],q=Object(i.useState)(""),g=Object(l.a)(q,2),S=g[0],Q=g[1],A=Object(i.useState)([]),k=Object(l.a)(A,2),M=k[0],F=k[1],R=function(){a(s+1)},H=function(){a(s+1),d(o+1)},I=function(e){var t=e.target.dataset.simpleModalOpener;Q("nav"===t?"Sign Up and Stay Informed":"intro"===t?"Download the Survey Results":"Sign Up and Stay Informed"),_(!0)},B=function(e){var t=e.target.id;-1!==M.indexOf(t)?F(M.filter((function(e){return e!==t}))):F(M.concat(t))};return 4!==s?Object(n.jsxs)("div",{className:"master-form",children:[Object(n.jsx)(u,{openSimpleModal:I,openIntroductoryCallModal:function(){return y(!0)}}),Object(n.jsx)(j,{currentStep:s,onClickHandler:R,openSimpleModal:I}),Object(n.jsx)(p,{currentStep:s,currentQuestion:o,onClickHandler:H,handleCheckedOptions:B}),Object(n.jsx)(b,{currentStep:s,currentQuestion:o,onClickHandler:H,handleCheckedOptions:B}),Object(n.jsx)(h,{currentStep:s,currentQuestion:o,onClickHandler:R,handleCheckedOptions:B}),Object(n.jsx)(C,{isSimpleModalOpen:O,closeSimpleModal:function(){return _(!1)},simpleModalHeadingText:S}),Object(n.jsx)(T,{isIntroductoryCallModalOpen:w,closeIntroductoryCallModal:function(){return y(!1)}})]}):Object(n.jsx)(f,{currentStep:s,checkedOptions:M})},A=(s(163),function(){return Object(n.jsx)("div",{className:"app",children:Object(n.jsx)(Q,{})})});r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(A,{})}),document.getElementById("root"))}},[[164,1,2]]]);
//# sourceMappingURL=main.6c321676.chunk.js.map