(this["webpackJsonpissue-board"]=this["webpackJsonpissue-board"]||[]).push([[0],{119:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(17),c=n.n(a),i=(n(63),n(10)),l=(n(64),n(9)),o=n(32),u=(n(65),n(2));var b=function(e){var t=e.cols,n=e.children;return Object(u.jsx)("div",{className:"Grid Grid_cols_".concat(t),children:n})},d=n(8),j=(n(67),n(23)),f=n(137),O=n(136),h=n(4);var p=function(){var e=Object(h.d)((function(e){return e.setSidebarSettingsIsOpen})),t=Object(h.e)((function(e){return e.sidebarSettingsIsOpen})),n=Object(h.d)((function(e){return e.setColsQty})),s=Object(h.e)((function(e){return e.issuesList})),a=["2","3","4"],c=Object(r.useState)(a[1]),i=Object(d.a)(c,2),l=i[0],b=i[1];return Object(u.jsxs)("div",{className:"Header",children:[Object(u.jsx)("div",{className:"Header_leftSide",children:Object(u.jsx)(o.a,{view:"brand",size:"m",weight:"bold",children:"IssueBoard"})}),Object(u.jsxs)("div",{className:"Header_rightSide",children:[Object(u.jsxs)("div",{className:"Header_rightSide_module",children:[Object(u.jsx)(o.a,{size:"s",children:"\u041a\u043e\u043b\u043e\u043d\u043e\u043a"}),Object(u.jsx)(f.a,{value:l,onChange:function(e){var t=e.value;b(t),n(Number(t))},items:a,getLabel:function(e){return e},size:"xs",view:"ghost",style:{marginLeft:"var(--space-xs)"}})]}),s&&Object(u.jsx)("div",{className:"Header_rightSide_module",children:Object(u.jsxs)(o.a,{size:"s",children:["\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e \u0438\u0448\u044c\u044e ",s.length]})}),Object(u.jsx)("div",{className:"Header_rightSide_module",children:Object(u.jsx)(j.a,{view:"ghost",size:"xs",iconRight:O.a,onlyIcon:!0,onClick:function(){return e(!t)}})})]})]})},m=n(11),x=n.n(m),v=n(28),g=(n(91),n(132)),w=n(22),C=n(48),_=(n(92),n(56));var y=function(e){var t=e.defaultValue,n=e.labelLeft,r=e.placeholder,s=e.width,a=e.onInputChange;return Object(u.jsxs)("div",{className:"InputWithLabel",children:[Object(u.jsx)("div",{className:"InputWithLabel_label",children:Object(u.jsx)(o.a,{view:"secondary",size:"xs",children:n})}),Object(u.jsx)(_.a,{onChange:function(e){var t=e.value;return a(t)},value:t,size:"m",placeholder:r,width:s})]})},S=n(47);var L=function(){var e=Object(h.d)((function(e){return e.setSidebarSettingsIsOpen})),t=Object(h.e)((function(e){return e.sidebarSettingsIsOpen})),n=function(){return e(!t)},s=Object(h.e)((function(e){return e.repoOwner})),a=Object(h.d)((function(e){return e.setRepoOwner})),c=Object(h.e)((function(e){return e.repoName})),l=Object(h.d)((function(e){return e.setRepoName})),b=Object(h.d)((function(e){return e.setIssuesList})),f=Object(h.d)((function(e){return e.setRepoLabelsList})),O=Object(r.useState)([]),p=Object(d.a)(O,2),m=p[0],_=p[1],L=Object(r.useState)(!1),N=Object(d.a)(L,2),k=N[0],z=N[1],I=function(){var e=Object(v.a)(x.a.mark((function e(t,n){var r,s,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],s=0;case 2:if(!(s<10)){e.next=14;break}return e.next=5,Object(S.a)("GET /repos/{owner}/{repo}/issues",{owner:t,repo:n,per_page:100,page:s});case 5:if(0!==(a=e.sent).data.length){e.next=10;break}return e.abrupt("break",14);case 10:r.push.apply(r,Object(i.a)(a.data));case 11:s++,e.next=2;break;case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),H=function(){var e=Object(v.a)(x.a.mark((function e(t,n){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)("GET /repos/{owner}/{repo}/labels",{owner:t,repo:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=[{labelLeft:"\u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f",placeholder:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c GitHub \u0438\u043b\u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f"},{labelLeft:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}];return Object(u.jsx)(g.a,{isOpen:t,hasOverlay:!0,position:"right",className:"SidebarSettings",onClickOutside:n,children:Object(u.jsxs)("div",{className:"SidebarSettings_content",children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"SidebarSettings_mainHeading",children:[Object(u.jsx)(o.a,{view:"primary",weight:"bold",size:"3xl",children:"IssueBoard"}),Object(u.jsx)(j.a,{view:"clear",iconLeft:w.a,onlyIcon:!0,size:"s",onClick:n})]}),Object(u.jsxs)(o.a,{view:"secondary",size:"l",className:"SidebarSettings_introParagraph",children:["IssueBoard \u2014 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0438\u0448\u044c\u044e \u0432 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u0445 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f\u0445 GitHub. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043d-\u0441\u0438\u0441\u0442\u0435\u043c\u044b",Object(u.jsxs)(o.a,{view:"link",size:"l",as:"a",target:"_blank",href:"http://consta.gazprom-neft.ru",children:[" ","Consta"]}),"."]}),Object(u.jsx)(y,{labelLeft:G[0].labelLeft,placeholder:G[0].placeholder,width:"full",defaultValue:s,onInputChange:a}),Object(u.jsx)(y,{labelLeft:G[1].labelLeft,placeholder:G[1].placeholder,width:"full",defaultValue:c,onInputChange:l})]}),m.length?Object(u.jsx)(C.a,{onClose:function(){return _([])},items:m,className:"SidebarSettings_snackBar"}):Object(u.jsx)(j.a,{view:"primary",size:"l",width:"full",label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c issues",className:"SidebarSettings_ctaButton",loading:k,onClick:function(){z(!0),s&&c?Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(s,c).then((function(e){b(e)}));case 2:return e.next=4,H(s,c).then((function(e){f(e)}));case 4:case"end":return e.stop()}}),e)})))().then(Object(v.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z(!1);case 2:return t.next=4,e(!1);case 4:case"end":return t.stop()}}),t)})))).catch((function(e){_([{key:1,message:"".concat(e.name," ").concat(e.status),status:"alert",autoClose:3,onAutoClose:function(){_([])}}]),z(!1)})):(_([{key:1,message:"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d \u043e\u0434\u0438\u043d \u0438\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430",status:"alert",autoClose:3,onAutoClose:function(){_([])}}]),z(!1))}})]})})},N=(n(96),n(133)),k=n(53),z=n.n(k),I=n(134),H=n(55),G=n.n(H),B=n(135);var R=function(e){var t=e.getFilterLabels,n=Object(r.useState)(null),s=Object(d.a)(n,2),a=s[0],c=s[1],i=Object(h.e)((function(e){return e.repoLabelsList}));return Object(r.useEffect)((function(){null===a&&t(null),a instanceof Array&&(0===a.length?t(null):t(a))}),[t,a]),Object(u.jsx)(B.a,{id:"filter",options:i,getOptionLabel:function(e){return e.label},size:"s",onChange:c,value:a})};var A=function(){var e=Object(r.useState)(null),t=Object(d.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(null),c=Object(d.a)(a,2),l=c[0],b=c[1],j=Object(h.e)((function(e){return e.issuesList})),f=Object(h.e)((function(e){return e.repoLabelsList}));return Object(r.useEffect)((function(){if(null!==j&&null!==l){var e=j.filter((function(e){var t,n=l.map((function(e){return e.label})),r=e.labels.map((function(e){return e.name}));return!(!n.includes("_no label")||0!==e.labels.length)||(t=r,!!n.every((function(e){return t.includes(e)})))})),t=new Set(Object(i.a)(e.map((function(e){return e.number})))),n=[];t.forEach((function(t){n.push(e.find((function(e){return e.number===t})))})),s(n)}null===l&&s(null)}),[l,j]),Object(u.jsxs)("div",{className:"ColumnContent",children:[Object(u.jsxs)("div",{className:"ColumnContent_controls",children:[Object(u.jsx)(R,{items:f,getFilterLabels:function(e){return b(e)}}),Object(u.jsx)(N.a,{status:"system",label:n?n.length:"-"})]}),Object(u.jsxs)("div",{className:"ColumnContent_content",children:[null!=n&&n.map((function(e,t){return Object(u.jsxs)("div",{className:"ColumnContent_card",children:[Object(u.jsx)(o.a,{size:"s",view:"primary",weight:"semibold",className:"ColumnContent_card_heading",as:"a",href:e.html_url,target:"_blank",children:e.title}),Object(u.jsxs)(o.a,{size:"xs",view:"secondary",className:"ColumnContent_card_subHeading",children:["#",e.number," \u0441\u043e\u0437\u0434\u0430\u043d\u043e"," ",Object(I.a)(new Date(e.created_at),"dd MMM yyyy",{locale:G.a}),"  ",Object(u.jsx)(o.a,{size:"xs",view:"secondary",weight:"semibold",as:"a",target:"_blank",href:e.user.html_url,children:e.user.login})]}),Object(u.jsx)("div",{className:"ColumnContent_card_badgeGroup",children:e.labels.map((function(e,t){return Object(u.jsx)(N.a,{size:"s",form:"round",label:e.name,className:"ColumnContent_card_badgeGroup_badge",style:{backgroundColor:"#"+e.color,color:z.a.findTextColor("#"+e.color)+""}},t)}))})]},t)})),null===n&&Object(u.jsx)("div",{className:"ColumnContent_centerWrapper",children:Object(u.jsx)(o.a,{size:"xs",view:"ghost",children:"\u0412\u044b\u0431\u0435\u0440\u0438 \u0444\u0438\u043b\u044c\u0442\u0440"})}),n instanceof Array&&0===n.length&&Object(u.jsx)("div",{className:"ColumnContent_centerWrapper",children:Object(u.jsxs)("div",{children:[Object(u.jsx)(o.a,{size:"m",lineHeight:"m",view:"ghost",style:{marginBottom:"var(--space-xs)"},children:"\xaf\\_(\u30c4)_/\xaf"}),Object(u.jsxs)(o.a,{size:"xs",lineHeight:"xs",view:"ghost",children:["\u041f\u043e",null!=l&&l.length>1?" \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u043c \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u043c":" \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u043c\u0443 \u0444\u0438\u043b\u044c\u0442\u0440\u0443",Object(u.jsx)("br",{})," \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u043d\u0435\u0442"]})]})})]})]})};var E=function(){var e=Object(h.e)((function(e){return e.sidebarSettingsIsOpen})),t=Object(h.e)((function(e){return e.colsQty}));return Object(u.jsx)(l.a,{preset:l.c,children:window.innerWidth<1e3?Object(u.jsx)("div",{className:"placeholder",children:Object(u.jsx)(o.a,{size:"m",view:"secondary",children:"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043d\u0430 \u0434\u0435\u0441\u043a\u0442\u043e\u043f"})}):Object(u.jsxs)("div",{style:{backgroundColor:"var(--color-bg-primary)"},children:[e&&Object(u.jsx)(L,{}),Object(u.jsx)(p,{}),Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(b,{cols:t,children:Object(i.a)(new Array(t)).map((function(e,t){return Object(u.jsx)(A,{},t)}))})})]})})},T={sidebarSettingsIsOpen:!0,setSidebarSettingsIsOpen:Object(h.b)((function(e,t){e.sidebarSettingsIsOpen=t})),repoOwner:"gazprom-neft",setRepoOwner:Object(h.b)((function(e,t){e.repoOwner=t})),repoName:"consta-uikit",setRepoName:Object(h.b)((function(e,t){e.repoName=t})),issuesList:null,setIssuesList:Object(h.b)((function(e,t){e.issuesList=Object(i.a)(t.filter((function(e){return void 0===e.pull_request})).filter((function(e){return null===e.closed_at})))})),repoLabelsList:[],setRepoLabelsList:Object(h.b)((function(e,t){e.repoLabelsList=[{label:"_no label",value:"no label"}].concat(Object(i.a)(t.map((function(e){return{label:e.name,value:e.id+""}}))))})),colsQty:3,setColsQty:Object(h.b)((function(e,t){e.colsQty=t}))},Q=Object(h.c)(T);c.a.render(Object(u.jsx)(h.a,{store:Q,children:Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(E,{})})}),document.getElementById("root"))},53:function(e,t,n){!function(){var n=function e(t){return t instanceof e?t:this instanceof e?void 0:new e(t)};function r(e){return.213*e[0]+.715*e[1]+.072*e[2]>127.5?"#000000":"#ffffff"}e.exports&&(t=e.exports=n),t.TEXTColor=n,n.findTextColor=function(e){var t=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/,n=e;if(/^(rgb|RGB)/.test(n))return r(n.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(","));if(t.test(n)){var s=e.toLowerCase();if(s&&t.test(s)){if(4===s.length){for(var a="#",c=1;c<4;c+=1)a+=s.slice(c,c+1).concat(s.slice(c,c+1));s=a}var i=[];for(c=1;c<7;c+=2)i.push(parseInt("0x"+s.slice(c,c+2)));return r(i)}return!1}return!1}}()},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},67:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},96:function(e,t,n){}},[[119,1,2]]]);
//# sourceMappingURL=main.a44743d2.chunk.js.map