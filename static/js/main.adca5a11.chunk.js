(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(44)},23:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),s=a.n(r),c=(a(23),a(2)),i=a(3),o=a(6),m=a(4),u=a(5),h=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"Git Battle"),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},l.a.createElement("div",{className:"navbar-nav"},l.a.createElement("a",{className:"nav-item nav-link active",href:"#"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)")),l.a.createElement("a",{className:"nav-item nav-link",href:"#"},"Top Gitters")))))}}]),t}(n.Component),d=a(7),b=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.addGitterOne(e.state.query)},e.handleChange=e.handleChange.bind(Object(d.a)(Object(d.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(Object(d.a)(e))),e.state={query:""},e.style={borderRadius:"50%",width:"70%"},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return Object.keys(this.props.gitterOne).length>0?l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("img",{style:this.style,src:this.props.gitterOne.avatar_url,alt:"contender One"})),l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("h2",null,this.props.gitterOne.name))):l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"gitterOne"},"Contender One:"),l.a.createElement("input",{type:"text",id:"gitterOne",className:"form-control",placeholder:"Enter Your Github Username",onChange:this.handleChange})),l.a.createElement("input",{type:"submit",className:"btn btn-secondary",value:"Submit"}))}}]),t}(n.Component),p=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.addGitterTwo(e.state.query)},e.handleChange=e.handleChange.bind(Object(d.a)(Object(d.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(Object(d.a)(e))),e.state={query:""},e.style={borderRadius:"50%",width:"70%"},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return Object.keys(this.props.gitterTwo).length>0?l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("img",{style:this.style,src:this.props.gitterTwo.avatar_url,alt:"contender One"})),l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("h2",null,this.props.gitterTwo.name))):l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"gitterOne"},"Contender Two:"),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Your Github Username",onChange:this.handleChange})),l.a.createElement("input",{type:"submit",className:"btn btn-secondary",value:"Submit"}))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e;return this.props.battleIsOn&&(e=l.a.createElement("button",{onClick:this.props.battle,className:"btn btn-secondary"},"Battle")),l.a.createElement("div",null,l.a.createElement("div",{className:"row m-5"},l.a.createElement("div",{className:"col-2"}),l.a.createElement("div",{className:"col"},l.a.createElement(b,{addGitterOne:this.props.addGitterOne,battleIsOn:this.props.battleIsOn,gitterOne:this.props.gitterOne})),l.a.createElement("div",{className:"col-2"}),l.a.createElement("div",{className:"col"},l.a.createElement(p,{addGitterTwo:this.props.addGitterTwo,battleIsOn:this.props.battleIsOn,gitterTwo:this.props.gitterTwo})),l.a.createElement("div",{className:"col-2"})),l.a.createElement("div",{className:"row m-3"},l.a.createElement("div",{className:"col-5"}),l.a.createElement("div",{className:"col-2"},e),l.a.createElement("div",{className:"col-5"})))}}]),t}(n.Component),E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).style={borderRadius:"50%",width:"70%"},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"row m-5"},l.a.createElement("div",{className:"col-2"}),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 mb-2"},l.a.createElement("h2",{className:"pl-5"},"Winner!")),l.a.createElement("div",{className:"col-12 mb-2"},l.a.createElement("h4",{className:"pl-5"},"Score: ",this.props.winner.score)),l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"pl-3"},l.a.createElement("img",{style:this.style,src:this.props.winner.avatar_url,alt:"Winner"}))),l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("h2",null,this.props.winner.name)),l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("h5",null,"Followers: ",this.props.winner.followers)),l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("h5",null,"Public Gists: ",this.props.winner.public_gists)),l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("h5",null,"Public Repos: ",this.props.winner.public_repos)))),l.a.createElement("div",{className:"col-2"}),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 mb-2"},l.a.createElement("h2",{className:"pl-5"},"Loser!")),l.a.createElement("div",{className:"col-12 mb-2"},l.a.createElement("h4",{className:"pl-5"},"Score: ",this.props.loser.score)),l.a.createElement("div",{className:"col-12"},l.a.createElement("img",{style:this.style,src:this.props.loser.avatar_url,alt:"Loser"})),l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("h2",null,this.props.loser.name)),l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("h5",null,"Followers: ",this.props.loser.followers)),l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("h5",null,"Public Gists: ",this.props.loser.public_gists)),l.a.createElement("div",{className:"col-12 mt-2"},l.a.createElement("h5",null,"Public Repos: ",this.props.loser.public_repos)))),l.a.createElement("div",{className:"col-2"})))}}]),t}(n.Component),O=a(9),g=a.n(O),w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).addGitterOne=function(t){g.a.get("https://api.github.com/users/".concat(t)).then(function(t){e.setState({gitterOne:t.data}),Object.keys(e.state.gitterOne).length>0&&Object.keys(e.state.gitterTwo).length>0&&e.setState({battleIsOn:!0})})},e.addGitterTwo=function(t){g.a.get("https://api.github.com/users/".concat(t)).then(function(t){e.setState({gitterTwo:t.data}),Object.keys(e.state.gitterOne).length>0&&Object.keys(e.state.gitterTwo).length>0&&e.setState({battleIsOn:!0})})},e.battle=function(){var t=e.state.gitterOne,a=e.state.gitterTwo;return t.score=2*t.followers+10*t.public_repos+5*t.public_gists+(t.bio?1:0)+(t.Company?2:0),a.score=2*a.followers+10*a.public_repos+5*a.public_gists+(a.bio?1:0)+(a.Company?2:0),console.log(t.score+" "+a.score),t.score>a.score?(e.setState({winner:t}),void e.setState({loser:a})):t.score<a.score?(e.setState({winner:a}),void e.setState({loser:t})):void e.setState({tie:!0})},e.state={gitterOne:{},gitterTwo:{},battleIsOn:!1,winner:{},loser:{},tie:"false"},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=l.a.createElement(v,{addGitterOne:this.addGitterOne,addGitterTwo:this.addGitterTwo,battleIsOn:this.state.battleIsOn,gitterOne:this.state.gitterOne,gitterTwo:this.state.gitterTwo,battle:this.battle});return Object.keys(this.state.winner).length>0&&(e=l.a.createElement(E,{winner:this.state.winner,loser:this.state.loser})),l.a.createElement("div",null,l.a.createElement(h,null),e)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.adca5a11.chunk.js.map