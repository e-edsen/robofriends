(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),s=n.n(c),a=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))}),o=(n(13),n(2)),i=n(3),h=n(5),l=n(4),u=n(0),b=function(e){var t=e.id,n=e.name,c=e.email;return Object(u.jsx)(r.Fragment,{children:Object(u.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(u.jsx)("img",{alt:"cardPhoto",src:"https://robohash.org/".concat(t,"?size=200x200")}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:n}),Object(u.jsx)("p",{children:c})]})]})})},d=function(e){var t=e.robots,n=t.map((function(e,n){return Object(u.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].username)}));return Object(u.jsx)("div",{children:n})},j=function(e){e.searchfield;var t=e.searchChange;return Object(u.jsx)("div",{className:"pa2",children:Object(u.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robot",onChange:t})})},f=function(e){return Object(u.jsx)("div",{style:{overflow:"scroll",border:"1px solid black",height:"800px"},children:e.children})},O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Oooops. Something went absolutely wrong."}):this.props.children}}]),n}(r.Component),g=(n(15),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.title="robofriends",fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(u.jsx)(j,{searchChange:this.onSearchChange}),Object(u.jsx)(f,{children:Object(u.jsx)(O,{children:Object(u.jsx)(d,{robots:r})})})]}):Object(u.jsx)("h1",{className:"tc f1",children:"Loading..."})}}]),n}(r.Component));s.a.render(Object(u.jsx)(g,{}),document.getElementById("root")),a()}},[[16,1,2]]]);
//# sourceMappingURL=main.9c4adae0.chunk.js.map