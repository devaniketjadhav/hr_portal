(this.webpackJsonphr_portal=this.webpackJsonphr_portal||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(8),r=s.n(n),l=(s(13),s(14),s(3)),i=s(4),o=s(2),h=s(6),u=s(5),d=(s(15),s(16),s(17),s(0)),j=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={id:a.props.data.id||null,userId:a.props.data.userId||null,title:a.props.data.title||null,completed:a.props.data.completed||null},a}return Object(i.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("tr",{className:"task",children:[Object(d.jsx)("td",{className:"taskName",children:this.state.title}),Object(d.jsx)("td",{className:"status",children:this.state.completed?"Yes":"No"})]})}}]),s}(a.Component),b=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).getTasks=function(){fetch("https://jsonplaceholder.typicode.com/users/".concat(a.state.id,"/todos")).then((function(e){return e.json()})).then((function(e){a.setTasks(e)})).catch((function(e){return console.log("Eror"+e)}))},a.setTasks=function(e){0===e.length?a.setState({errorMessage:"Data is currently unavailable!"}):a.setState({todoList:e})},a.closeOverlay=function(){a.setState({todoList:[]})},a.state={id:a.props.data.id||null,name:a.props.data.name||null,email:a.props.data.email||null,city:a.props.data.address.city||null,website:a.props.data.website||null,todoList:[],errorMessage:""},a.getTasks=a.getTasks.bind(Object(o.a)(a)),a.setTasks=a.setTasks.bind(Object(o.a)(a)),a}return Object(i.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"employeeInfo",children:[Object(d.jsxs)("div",{className:"employeeDetails",children:[Object(d.jsxs)("div",{className:"name",children:["Name: ",this.state.name||"Unavailable"]}),Object(d.jsxs)("div",{className:"email",children:["Email: ",this.state.email||"Unavailable"]}),Object(d.jsxs)("div",{className:"city",children:["City: ",this.state.city||"Unavailable"]}),Object(d.jsxs)("div",{className:"website",children:["Website: ",this.state.website||"Unavailable"]})]}),Object(d.jsx)("button",{className:"todoSubmit",onClick:this.getTasks,children:"Task Details"})]}),Object(d.jsxs)("div",{className:"todooverlay",style:{display:this.state.todoList.length?"block":"none"},children:[Object(d.jsx)("div",{className:"closeOverlay",onClick:this.closeOverlay,children:"x"}),Object(d.jsx)("div",{className:"searchError",style:{display:this.state.errorMessage?"block":"none"},children:this.state.errorMessage}),Object(d.jsxs)("table",{className:"taskContainer",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Task"}),Object(d.jsx)("th",{children:"Completed"})]})}),Object(d.jsx)("tbody",{children:this.state.todoList.map((function(e){return Object(d.jsx)(j,{data:e},e.id)}))})]})]})]})}}]),s}(a.Component),m=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).searchEmployees=function(){if(0===a.state.employeeData.length)a.setState({errorMessage:"Data is currently unavailable!"});else{a.setState({errorMessage:""});var e=[];a.state.employeeData.map((function(t){(t.name.toLowerCase().includes(a.state.searchValue.toLowerCase())||t.address.city.toLowerCase().includes(a.state.searchValue.toLowerCase()))&&e.push(t)})),0===e.length?a.setState({errorMessage:"No matching results!"}):a.setState({searchResult:e})}},a.setSearchValue=function(e){a.setState({searchValue:e.target.value})},a.clearSearch=function(){a.setState({searchValue:null,errorMessage:"",searchResult:[]})},a.state={searchValue:null,errorMessage:"",employeeData:[],searchResult:[]},a.searchEmployees=a.searchEmployees.bind(Object(o.a)(a)),a.setSearchValue=a.setSearchValue.bind(Object(o.a)(a)),a.clearSearch=a.clearSearch.bind(Object(o.a)(a)),a}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({employeeData:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)("input",{className:"searchbar",placeholder:"Enter employee name or city",onChange:this.setSearchValue}),Object(d.jsx)("button",{className:"searchSubmit",value:this.state.searchValue,onClick:this.searchEmployees,children:"Search"}),Object(d.jsx)("button",{className:"searchClear",onClick:this.clearSearch,children:"Clear"})]}),Object(d.jsx)("div",{className:"searchError",style:{display:this.state.errorMessage?"block":"none"},children:this.state.errorMessage}),Object(d.jsx)("div",{className:"resultContainer",children:this.state.searchResult.map((function(e){return Object(d.jsx)(b,{data:e},e.id)}))})]})}}]),s}(a.Component);var p=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(m,{})})},O=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),n(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),O()}],[[19,1,2]]]);
//# sourceMappingURL=main.235f2a4d.chunk.js.map