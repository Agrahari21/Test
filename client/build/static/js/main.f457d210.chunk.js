(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,t,a){e.exports=a(60)},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),s=a(11),o=a(1),u=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"font-weight-light display-1 text-center"},"Restaurant Finder"))},m=a(2),i=a.n(m),p=a(8),d=a(4),v=a(29),E=a.n(v).a.create({baseURL:"/api/v1/restaurants"}),f=a(31),b=Object(n.createContext)(),g=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(null),o=Object(d.a)(s,2),u=o[0],m=o[1];return r.a.createElement(b.Provider,{value:{restaurants:c,setRestaurants:l,addRestaurants:function(e){l([].concat(Object(f.a)(c),[e]))},selectedRestaurant:u,setSelectedRestaurant:m}},e.children)},h=function(){var e=Object(n.useContext)(b).addRestaurants,t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),o=Object(d.a)(s,2),u=o[0],m=o[1],v=Object(n.useState)("Price Range"),f=Object(d.a)(v,2),g=f[0],h=f[1],N=function(){var t=Object(p.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,E.post("/",{name:c,location:u,price_range:g});case 4:n=t.sent,console.log(n.data.data),e(n.data.data.restaurant),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"mb-4"},r.a.createElement("form",{action:""},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{value:c,onChange:function(e){return l(e.target.value)},type:"text",className:"form-control",placeholder:"name"})),r.a.createElement("div",{className:"col"},r.a.createElement("input",{value:u,onChange:function(e){return m(e.target.value)},className:"form-control",type:"text",placeholder:"location"})),r.a.createElement("div",{className:"col"},r.a.createElement("select",{value:g,onChange:function(e){return h(e.target.value)},className:"custom-select my-1 mr-sm-2"},r.a.createElement("option",{disabled:!0},"Price Range"),r.a.createElement("option",{value:"1"},"$"),r.a.createElement("option",{value:"2"},"$$"),r.a.createElement("option",{value:"3"},"$$$"),r.a.createElement("option",{value:"4"},"$$$$"),r.a.createElement("option",{value:"5"},"$$$$$"))),r.a.createElement("button",{onClick:N,type:"submit",className:"btn btn-primary"},"Add"))))},N=function(e){for(var t=e.rating,a=[],n=1;n<=5;n++)n<=t?a.push(r.a.createElement("i",{key:n,className:"fas fa-star text-warning"})):n!==Math.ceil(t)||Number.isInteger(t)?a.push(r.a.createElement("i",{key:n,className:"far fa-star text-warning"})):a.push(r.a.createElement("i",{key:n,className:"fas fa-star-half-alt text-warning"}));return r.a.createElement(r.a.Fragment,null,a)},x=function(e){var t=Object(n.useContext)(b),a=t.restaurants,c=t.setRestaurants,l=Object(o.f)();Object(n.useEffect)((function(){(function(){var e=Object(p.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.get("/");case 3:t=e.sent,console.log(t.data.data),c(t.data.data.restaurants),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var s=function(){var e=Object(p.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),e.prev=1,e.next=4,E.delete("/".concat(n));case 4:e.sent,c(a.filter((function(e){return e.id!==n}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"list-group"},r.a.createElement("table",{className:"table table-hover table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"bg-primary"},r.a.createElement("th",{scope:"col"},"Restaurant"),r.a.createElement("th",{scope:"col"},"Location"),r.a.createElement("th",{scope:"col"},"Price Range"),r.a.createElement("th",{scope:"col"},"Ratings"),r.a.createElement("th",{scope:"col"},"Edit"),r.a.createElement("th",{scope:"col"},"Delete"))),r.a.createElement("tbody",null,a&&a.map((function(e){return r.a.createElement("tr",{onClick:function(){return t=e.id,void l.push("/restaurants/".concat(t));var t},key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.location),r.a.createElement("td",null,"$".repeat(e.price_range)),r.a.createElement("td",null,function(e){return e.count?r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{rating:e.id}),r.a.createElement("span",{className:"text-warning ml-1"},"(",e.count,")")):r.a.createElement("span",{className:"text-warning"},"0 reviews")}(e)),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(t){return function(e,t){e.stopPropagation(),l.push("/restaurants/".concat(t,"/update"))}(t,e.id)},className:"btn btn-warning"},"Update")),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(t){return s(t,e.id)},className:"btn btn-danger"},"Delete")))})))))},j=function(){return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(h,null),r.a.createElement(x,null))},O=function(e){var t=Object(o.h)().id,a=Object(o.f)(),c=(Object(n.useContext)(b).restaurants,Object(n.useState)("")),l=Object(d.a)(c,2),s=l[0],u=l[1],m=Object(n.useState)(""),v=Object(d.a)(m,2),f=v[0],g=v[1],h=Object(n.useState)(""),N=Object(d.a)(h,2),x=N[0],j=N[1];Object(n.useEffect)((function(){(function(){var e=Object(p.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/".concat(t));case 2:a=e.sent,console.log(a.data.data),u(a.data.data.restaurant.name),g(a.data.data.restaurant.location),j(a.data.data.restaurant.price_range);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var O=function(){var e=Object(p.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,E.put("/".concat(t),{name:s,location:f,price_range:x});case 3:e.sent,a.push("/");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("form",{action:""},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{value:s,onChange:function(e){return u(e.target.value)},id:"name",className:"form-control",type:"text"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"location"},"Location"),r.a.createElement("input",{value:f,onChange:function(e){return g(e.target.value)},id:"location",className:"form-control",type:"text"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"price_range"},"Price Range"),r.a.createElement("input",{value:x,onChange:function(e){return j(e.target.value)},id:"price_range",className:"form-control",type:"number"})),r.a.createElement("button",{type:"submit",onClick:O,className:"btn btn-primary"},"Submit")))},w=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"Update Restaurant"),r.a.createElement(O,null))},y=function(e){var t=e.reviews;return r.a.createElement("div",{className:"row row-cols-3 mb-2"},t.map((function(e){return r.a.createElement("div",{key:e.id,className:"card text-white bg-primary mb-3 mr-4",style:{maxWidth:"30%"}},r.a.createElement("div",{className:"card-header d-flex justify-content-between"},r.a.createElement("span",null,e.name),r.a.createElement("span",null,r.a.createElement(N,{rating:e.rating}))),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},e.review)))})))},k=function(){var e=Object(o.h)().id,t=Object(o.g)();console.log(t);var a=Object(o.f)();console.log(e);var c=Object(n.useState)(""),l=Object(d.a)(c,2),s=l[0],u=l[1],m=Object(n.useState)(""),v=Object(d.a)(m,2),f=v[0],b=v[1],g=Object(n.useState)("Rating"),h=Object(d.a)(g,2),N=h[0],x=h[1],j=function(){var n=Object(p.a)(i.a.mark((function n(r){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,n.next=4,E.post("/".concat(e,"/addReview"),{name:s,review:f,rating:N});case 4:n.sent,a.push("/"),a.push(t.pathname),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(1);case 11:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}();return r.a.createElement("div",{className:"mb-2"},r.a.createElement("form",{action:""},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-8"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{value:s,onChange:function(e){return u(e.target.value)},id:"name",placeholder:"name",type:"text",className:"form-control"})),r.a.createElement("div",{className:"form-group col-4"},r.a.createElement("label",{htmlFor:"rating"},"Rating"),r.a.createElement("select",{value:N,onChange:function(e){return x(e.target.value)},id:"rating",className:"custom-select"},r.a.createElement("option",{disabled:!0},"Rating"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"Review"},"Review"),r.a.createElement("textarea",{value:f,onChange:function(e){return b(e.target.value)},id:"Review",className:"form-control"})),r.a.createElement("button",{type:"submit",onClick:j,className:"btn btn-primary"},"Submit")))},R=function(){var e=Object(o.h)().id,t=Object(n.useContext)(b),a=t.selectedRestaurant,c=t.setSelectedRestaurant;return Object(n.useEffect)((function(){(function(){var t=Object(p.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.get("/".concat(e));case 3:a=t.sent,console.log(a),c(a.data.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}})()()}),[]),r.a.createElement("div",null,a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"text-center display-1"},a.restaurant.name),r.a.createElement("div",{className:"text-center"},r.a.createElement(N,{rating:a.restaurant.average_rating}),r.a.createElement("span",{className:"text-warning ml-1"},a.restaurant.count?"(".concat(a.restaurant.count,")"):"(0)")),r.a.createElement("div",{className:"mt-3"},r.a.createElement(y,{reviews:a.reviews})),r.a.createElement(k,null)))},C=function(){return r.a.createElement(g,null,r.a.createElement("div",{className:"container"},r.a.createElement(s.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:j}),r.a.createElement(o.a,{exact:!0,path:"/restaurants/:id/update",component:w}),r.a.createElement(o.a,{exact:!0,path:"/restaurants/:id",component:R})))))};l.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.f457d210.chunk.js.map