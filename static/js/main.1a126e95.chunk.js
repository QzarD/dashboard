(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{23:function(e,a,t){e.exports={card:"Card_card__1kWob",cardText:"Card_cardText__39y2N",btnDelete:"Card_btnDelete__2QNS4"}},4:function(e,a,t){e.exports={dashboardHome:"Dashboard_dashboardHome__W_aB3",dashboard:"Dashboard_dashboard__1iaPb",column:"Dashboard_column__z1r90",nameColumnRow:"Dashboard_nameColumnRow__HqdHk",nameColumn:"Dashboard_nameColumn__3fPI3",btnDeleteColumn:"Dashboard_btnDeleteColumn__2D5jq",btnAddCard:"Dashboard_btnAddCard__2BQt0",sectionAddCard:"Dashboard_sectionAddCard__A6pF4",btnAddCardNow_Row:"Dashboard_btnAddCardNow_Row__3G3Zf",btnAddCardNow:"Dashboard_btnAddCardNow__53K3i",btnCancelAddCard:"Dashboard_btnCancelAddCard__1Lszg",addColumnCardText:"Dashboard_addColumnCardText__2cS05",addColumnCardBtn:"Dashboard_addColumnCardBtn__19Foj",form:"Dashboard_form__1ABkc",buttonContainer:"Dashboard_buttonContainer__1GEsq",buttonRow:"Dashboard_buttonRow__3WDCo"}},52:function(e,a,t){e.exports=t(98)},57:function(e,a,t){},58:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var n=t(0),d=t.n(n),r=t(14),o=t.n(r),c=(t(57),t(58),t(31)),l=t(4),i=t.n(l),u=function(e){var a=e.column,t=e.addColumn,n=e.addCard,r=e.columnIndex,o=d.a.useState(!1),l=Object(c.a)(o,2),u=l[0],s=l[1],b=d.a.useState(""),m=Object(c.a)(b,2),p=m[0],C=m[1],_=function(){a?t(p):n(r,p),s(!1),C("")};return d.a.createElement("div",{className:i.a.buttonContainer},d.a.createElement("div",null,u?d.a.createElement("div",null,d.a.createElement("textarea",{placeholder:a?"Enter text of a new column":"Enter text of a new card",autoFocus:!0,onBlur:function(){s(!1),C("")},value:p,onChange:function(e){C(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&_()},className:i.a.form,name:"textarea",id:"textarea",cols:"3"})):d.a.createElement("div",{onClick:function(){s(!0)},className:i.a.addColumnCardText},"+ ",a?"Add column":"Add card")),d.a.createElement("div",null,u?d.a.createElement("div",{className:i.a.buttonRow},d.a.createElement("button",{onMouseDown:p?_:null,variant:"contained",className:i.a.addColumnCardBtn},a?"Add column":"Add card")):null))},s=t(23),b=t.n(s),m=t(11),p=function(e){var a=e.text,t=e.id,n=e.index,r=e.deleteCard,o=e.columnId;return d.a.createElement(m.b,{draggableId:String(t),index:n},(function(e){return d.a.createElement("div",Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps),d.a.createElement("div",{className:b.a.card},d.a.createElement("div",{className:b.a.cardText},a),d.a.createElement("div",{onClick:function(){r(o,n)},className:b.a.btnDelete},"X")))}))},C=function(e){var a=e.title,t=e.cards,n=e.addColumn,r=e.addCard,o=e.columnId,c=e.columnIndex,l=e.deleteColumn,s=e.deleteCard,b=e.index;return d.a.createElement(m.b,{draggableId:String(c),index:b},(function(e){return d.a.createElement("div",Object.assign({},e.draggableProps,{ref:e.innerRef},e.dragHandleProps,{className:i.a.column}),d.a.createElement(m.c,{droppableId:String(o)},(function(e){return d.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),d.a.createElement("div",{className:i.a.nameColumnRow},d.a.createElement("div",{className:i.a.nameColumn},a),d.a.createElement("span",{onClick:function(){l(o)},className:i.a.btnDeleteColumn},"X")),t.map((function(e,a){return d.a.createElement(p,{deleteCard:s,columnId:o,index:a,id:e.id,key:e.id,text:e.text})})),e.placeholder,d.a.createElement(u,{columnIndex:c,addColumn:n,addCard:r}))})))}))},_=t(10),f=t(48),E=t(9);function I(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?I(Object(t),!0).forEach((function(a){Object(f.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var x="dashboard/ADD_COLUMN",D="dashboard/ADD_CARD",O="dashboard/DRAG_CARD",v=3,g=5,j=[{title:"Home",id:"1",cards:[{id:"cardId-1",text:"Clean"},{id:"cardId-2",text:"Cooking"},{id:"cardId-3",text:"Go to the shop"}]},{title:"On work",id:"2",cards:[{id:"cardId-4",text:"Coffee"},{id:"cardId-5",text:"Working"}]},{title:"Shopping",id:"3",cards:[]}],y=Object(_.b)((function(e){return{columns:e.dashboard}}),{addColumn:function(e){return{type:x,title:e}},addCard:function(e,a){return{type:D,columnIndex:e,text:a}},sort:function(e,a,t,n,d){return{type:O,droppableIdStart:e,droppableIdEnd:a,droppableIdIndexStart:t,droppableIdIndexEnd:n,typeDrag:d}},deleteColumn:function(e){return{type:"dashboard/DELETE_COLUMN",index:e}},deleteCard:function(e,a){return{type:"dashboard/DELETE_CARD",columnId:e,index:a}}})((function(e){var a=e.columns,t=e.addColumn,n=e.addCard,r=e.sort,o=e.deleteColumn,c=e.deleteCard;return d.a.createElement(m.a,{onDragEnd:function(e){var a=e.destination,t=e.source,n=e.type;a&&r(t.droppableId,a.droppableId,t.index,a.index,n)}},d.a.createElement("div",{className:i.a.dashboardHome},d.a.createElement(m.c,{droppableId:"all-lists",direction:"horizontal",type:"list"},(function(e){return d.a.createElement("div",Object.assign({className:i.a.dashboard},e.droppableProps,{ref:e.innerRef}),a.map((function(e,a){return d.a.createElement(C,{deleteCard:c,deleteColumn:o,columnId:a,index:a,columnIndex:e.id,addColumn:t,addCard:n,key:e.id,title:e.title,cards:e.cards})})),e.placeholder,d.a.createElement(u,{column:!0,addColumn:t}))}))))}));var w=function(){return d.a.createElement("div",{className:"App"},d.a.createElement(y,null))},N=t(51),A=t(5),S=t(49),P=Object(A.c)({dashboard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case x:return v+=1,[].concat(Object(E.a)(e),[{title:a.title,id:v,cards:[]}]);case"dashboard/DELETE_COLUMN":return Object(E.a)(e.filter((function(e,t){return a.index!==t})));case D:return g+=1,e.map((function(e){return e.id===a.columnIndex?h({},e,{cards:[].concat(Object(E.a)(e.cards),[{id:"cardId-".concat(g),text:a.text}])}):e}));case"dashboard/DELETE_CARD":return e.map((function(e,t){return t===a.columnId?h({},e,{cards:Object(E.a)(e.cards.filter((function(e,t){return a.index!==t})))}):e}));case O:var t=Object(E.a)(e);if("list"===a.typeDrag){var n=t.splice(a.droppableIdIndexStart,1);return t.splice.apply(t,[a.droppableIdIndexEnd,0].concat(Object(E.a)(n))),t}if(a.droppableIdStart===a.droppableIdEnd){var d,r=e[a.droppableIdStart],o=r.cards.splice(a.droppableIdIndexStart,1);(d=r.cards).splice.apply(d,[a.droppableIdIndexEnd,0].concat(Object(E.a)(o)))}if(a.droppableIdStart!==a.droppableIdEnd){var c,l=e[a.droppableIdStart],i=l.cards.splice(a.droppableIdIndexStart,1),u=e[a.droppableIdEnd];(c=u.cards).splice.apply(c,[a.droppableIdIndexEnd,0].concat(Object(E.a)(i)))}return t;default:return e}}}),R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.d,k=Object(A.e)(P,R(Object(A.a)(S.a)));o.a.render(d.a.createElement(N.a,null,d.a.createElement(_.a,{store:k},d.a.createElement(w,null))),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.1a126e95.chunk.js.map