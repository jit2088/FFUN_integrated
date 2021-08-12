(this["webpackJsonpreact-table-crud-example"]=this["webpackJsonpreact-table-crud-example"]||[]).push([[0],{46:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(31),s=a.n(n),r=a(14),l=a(2),o=(a(41),a(42),a(43),a(46),a(11)),i=a(3),d=a(9),j=a(32),u=a.n(j).a.create({baseURL:"http://localhost:8080/api",headers:{"Content-type":"application/json"}}),b={getAll:function(){return u.get("/cars")},get:function(e){return u.get("/cars/".concat(e))},create:function(e){return u.post("/cars",e)},update:function(e,t){return u.put("/cars/".concat(e),t)},remove:function(e){return u.delete("/cars/".concat(e))},removeAll:function(){return u.delete("/cars")},findByMake:function(e){return u.get("/cars?make=".concat(e))}},m=a(0),h=function(){var e={id:null,make:"",model:"",year:0,price:0,status:"Live"},t=Object(c.useState)(e),a=Object(d.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(!1),l=Object(d.a)(r,2),j=l[0],u=l[1],h=function(e){var t=e.target,a=t.name,c=t.value;s(Object(i.a)(Object(i.a)({},n),{},Object(o.a)({},a,c)))};return Object(m.jsx)("div",{className:"submit-form",children:j?Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:"You submitted successfully!"}),Object(m.jsx)("button",{className:"btn btn-success",onClick:function(){s(e),u(!1)},children:"Add"})]}):Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"make",children:"Make"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"make",required:!0,value:n.make,onChange:h,name:"make"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"model",children:"Model"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"model",required:!0,value:n.model,onChange:h,name:"model"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"year",children:"Year"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"year",required:!0,value:n.year,onChange:h,name:"year"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"price",children:"Price"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"price",required:!0,value:n.price,onChange:h,name:"price"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"status",children:"Status"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"status",required:!0,value:n.status,onChange:h,name:"status"})]}),Object(m.jsx)("button",{onClick:function(){var e={make:n.make,model:n.model,year:n.year,price:n.price,status:n.status};b.create(e).then((function(e){s({id:e.data.id,make:e.data.make,model:e.data.model,year:e.data.year,price:e.data.price,status:e.data.status}),u(!0),console.log(e.data)})).catch((function(e){console.log(e)}))},className:"btn btn-success",children:"Submit"})]})})},O=function(e){var t=Object(c.useState)({id:null,make:"",model:"",year:0,price:0,status:"Live"}),a=Object(d.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(""),l=Object(d.a)(r,2),j=l[0],u=l[1];Object(c.useEffect)((function(){var t;t=e.match.params.id,b.get(t).then((function(e){s(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[e.match.params.id]);var h=function(e){var t=e.target,a=t.name,c=t.value;s(Object(i.a)(Object(i.a)({},n),{},Object(o.a)({},a,c)))};return Object(m.jsx)("div",{children:n?Object(m.jsxs)("div",{className:"edit-form",children:[Object(m.jsx)("h4",{children:"Car"}),Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"make",children:"Make"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"make",name:"make",value:n.make,onChange:h})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"model",children:"Model"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"model",name:"model",value:n.model,onChange:h})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"year",children:"Year"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"year",name:"year",value:n.year,onChange:h})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"price",children:"Price"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"price",name:"price",value:n.year,onChange:h})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"status",children:"Status"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"status",name:"status",value:n.status,onChange:h})]})]}),Object(m.jsx)("button",{className:"badge badge-danger mr-2",onClick:function(){b.remove(n.id).then((function(t){console.log(t.data),e.history.push("/cars")})).catch((function(e){console.log(e)}))},children:"Delete"}),Object(m.jsx)("button",{type:"submit",className:"badge badge-success",onClick:function(){b.update(n.id,n).then((function(e){console.log(e.data),u("The Car was updated successfully!")})).catch((function(e){console.log(e)}))},children:"Update"}),Object(m.jsx)("p",{children:j})]}):Object(m.jsxs)("div",{children:[Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"Please click on a Car..."})]})})},p=a(36),x=a(33),f=a(34),v=a.n(f),g=function(e){var t=Object(c.useState)([]),a=Object(d.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(""),l=Object(d.a)(r,2),o=l[0],j=l[1],u=Object(c.useRef)();u.current=n,Object(c.useEffect)((function(){h()}),[]);var h=function(){b.getAll().then((function(e){console.log("line 28 from CarList.js ",e.data),s(e.data)})).catch((function(e){console.log(e)}))},O=function(t){var a=u.current[t].id;e.history.push("/cars/"+a)},f=function(t){var a=u.current[t].id;b.remove(a).then((function(a){e.history.push("/cars");var c=Object(p.a)(u.current);c.splice(t,1),s(c)})).catch((function(e){console.log(e)}))},g=Object(c.useMemo)((function(){return[{Header:"Make",accessor:"make"},{Header:"Model",accessor:"model"},{Header:"Year",accessor:"year"},{Header:"Price",accessor:"price"},{Header:"Status",accessor:"status"},{Header:"Actions",accessor:"actions",Cell:function(e){var t=e.row.id;return Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{onClick:function(){return O(t)},children:Object(m.jsx)("i",{className:"far fa-edit action mr-2"})}),Object(m.jsx)("span",{onClick:function(){return f(t)},children:Object(m.jsx)("i",{className:"fas fa-trash action"})})]})}}]}),[]),N=Object(x.useTable)({columns:g,data:n}),y=N.getTableProps,k=N.getTableBodyProps,C=N.headerGroups,F=N.rows,S=N.prepareRow;console.log("line 139 of CarList.js  ",n);var P=[n.filter((function(e){return"Sold"===e.status})).length,n.filter((function(e){return"Live"===e.status})).length];return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:Object(m.jsx)(v.a,{xLabels:["Sold","Live"],yValues:P,width:"400",height:"200",options:{fillColor:"#314deb",strokeColor:"#0000FF",scaleFontSize:12,scaleFontStyle:"bold"}})}),Object(m.jsxs)("div",{className:"list row",children:[Object(m.jsx)("div",{className:"col-md-8",children:Object(m.jsxs)("div",{className:"input-group mb-3",children:[Object(m.jsx)("input",{type:"text",className:"form-control",placeholder:"Search by make",value:o,onChange:function(e){var t=e.target.value;j(t)}}),Object(m.jsx)("div",{className:"input-group-append",children:Object(m.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){b.findByMake(o).then((function(e){s(e.data)})).catch((function(e){console.log(e)}))},children:"Search"})})]})}),Object(m.jsx)("div",{className:"col-md-12 list",children:Object(m.jsxs)("table",Object(i.a)(Object(i.a)({className:"table table-striped table-bordered"},y()),{},{children:[Object(m.jsx)("thead",{children:C.map((function(e){return Object(m.jsx)("tr",Object(i.a)(Object(i.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(m.jsx)("th",Object(i.a)(Object(i.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(m.jsx)("tbody",Object(i.a)(Object(i.a)({},k()),{},{children:F.map((function(e,t){return S(e),Object(m.jsx)("tr",Object(i.a)(Object(i.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(m.jsx)("td",Object(i.a)(Object(i.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))})]})]})};var N=function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(m.jsx)("a",{href:"/cars",className:"navbar-brand",children:"FFUN"}),Object(m.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(r.b,{to:"/cars",className:"nav-link",children:"Cars"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(r.b,{to:"/add",className:"nav-link",children:"Add Cars"})})]})]}),Object(m.jsx)("div",{className:"container mt-3",children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{exact:!0,path:["/","/cars"],component:g}),Object(m.jsx)(l.a,{exact:!0,path:"/add",component:h}),Object(m.jsx)(l.a,{path:"/cars/:id",component:O})]})})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,75)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};s.a.render(Object(m.jsx)(r.a,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),y()}},[[74,1,2]]]);
//# sourceMappingURL=main.7e2431ef.chunk.js.map