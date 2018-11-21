(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(63)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(7),c=t.n(r),o=(t(13),t(1)),s=t(2),l=t(4),m=t(3),d=t(5),u=(t(15),function(){return i.a.createElement("main",{className:"loading"},i.a.createElement("div",{className:"loading-frame"}))}),h=(t(17),t(19),function(e){return i.a.createElement("div",{className:"rdm ".concat(e.active),onClick:e.dialogue})}),g=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(l.a)(this,Object(m.a)(a).call(this))).rdmDialogue=function(){e.setState({dialogueActive:!0}),setTimeout(e.props.finishOnboarding,3e3)},e.state={dialogueActive:!1},e}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("main",{className:"onboarding-page"},i.a.createElement("h1",null,"Kevin Simpson - Front End Developer"),i.a.createElement("section",{className:"onboarding-row"},i.a.createElement("h3",{className:"onboarding-text"},"This is an interactive portfolio. Click on characters and items to learn more."),i.a.createElement("section",{className:"onboarding-scene-column"},i.a.createElement("article",{className:"onboarding-scene"},i.a.createElement(h,{dialogue:this.rdmDialogue,active:this.state.dialogueActive})),i.a.createElement("p",{className:"onboarding-dialogue ".concat(this.state.dialogueActive)},"You did it!"))))}}]),a}(n.Component),f=(t(21),function(e){return i.a.createElement("div",{onClick:e.handleHamburgerClick,className:"hamburger ".concat(e.menuDeployed)},i.a.createElement("div",{className:"hamburger-top"}),i.a.createElement("div",{className:"hamburger-middle"}),i.a.createElement("div",{className:"hamburger-bottom"}))}),p=(t(23),function(e){return i.a.createElement("nav",{className:"nav-menu ".concat(e.menuDeployed)},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"#intro-link"},"about")),i.a.createElement("li",null,i.a.createElement("a",{href:"#projects-link"},"projects")),i.a.createElement("li",null,i.a.createElement("a",{href:"#social-link"},"contact"))))}),b=(t(25),function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(l.a)(this,Object(m.a)(a).call(this))).handleHamburgerClick=function(){e.setState({menuDeployed:!e.state.menuDeployed})},e.state={menuDeployed:!1},e}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("header",{className:"header"},i.a.createElement(f,{handleHamburgerClick:this.handleHamburgerClick,menuDeployed:this.state.menuDeployed}),i.a.createElement(p,{menuDeployed:this.state.menuDeployed}))}}]),a}(n.Component)),E=(t(27),function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(l.a)(this,Object(m.a)(a).call(this))).char1=function(){e.setState({char1:!e.state.char1,char2:!1})},e.char2=function(){e.setState({char1:!1,char2:!e.state.char2})},e.state={char1:!1,char2:!1},e}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{className:"intro-row",id:"intro-link"},i.a.createElement("h4",{className:"intro-text"},"Kevin Simpson"),i.a.createElement("section",{className:"intro-wrapper"},i.a.createElement("div",{className:"house"}),i.a.createElement("div",{className:"grass"}),i.a.createElement("div",{className:"sidewalk"}),i.a.createElement("div",{className:"guy",onClick:this.char1}),i.a.createElement("div",{className:"guy-two",onClick:this.char2}),i.a.createElement("p",{className:"char1-dialogue ".concat(this.state.char1)},"Kevin Simpson is a front-end developer with a love for React, CSS transitions and animations, design, and archaic 16-bit role-playing games from the early 90's."),i.a.createElement("p",{className:"char2-dialogue ".concat(this.state.char2)},"He is skilled with HTML/CSS, JavaScript, React, React Native, Redux, Router, Enzyme/Jest, Responsive UI with Grid and Flexbox, Node.js, and Express.")))}}]),a}(n.Component)),k=(t(29),t(31),function(e){return i.a.createElement("div",{onClick:e.dialogue,className:"bard"})}),v=(t(33),function(e){return i.a.createElement("div",{onClick:e.dialogue,className:"barkeep"})}),w=(t(35),function(e){return i.a.createElement("div",{onClick:e.dialogue,className:"bar-patron"})}),N=(t(37),function(e){return i.a.createElement("div",{onClick:e.dialogue,className:"nodding-patron"})}),O=(t(39),function(e){return i.a.createElement("div",{onClick:e.dialogue,className:"standing-patron ".concat(e.active)})}),j=(t(41),function(){return i.a.createElement("div",{className:"fireplace"})}),P=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(l.a)(this,Object(m.a)(a).call(this))).bard=function(){e.setState({bard:!e.state.bard,barkeep:!1,barPatron:!1,noddingPatron:!1,standingPatron:!1})},e.barkeep=function(){e.setState({bard:!1,barkeep:!e.state.barkeep,barPatron:!1,noddingPatron:!1,standingPatron:!1})},e.barPatron=function(){e.setState({bard:!1,barkeep:!1,barPatron:!e.state.barPatron,noddingPatron:!1,standingPatron:!1})},e.noddingPatron=function(){e.setState({bard:!1,barkeep:!1,barPatron:!1,noddingPatron:!e.state.noddingPatron,standingPatron:!1})},e.standingPatron=function(){e.setState({bard:!1,barkeep:!1,barPatron:!1,noddingPatron:!1,standingPatron:!e.state.standingPatron,laughPatron:!0}),setTimeout(e.clearStandingPatron,5e3)},e.clearStandingPatron=function(){e.setState({laughPatron:!1})},e.state={bard:!1,barkeep:!1,barPatron:!1,noddingPatron:!1,standingPatron:!1},e}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{className:"projects-row",id:"projects-link"},i.a.createElement("section",{className:"projects"},i.a.createElement("div",{className:"tavern"}),i.a.createElement(v,{dialogue:this.barkeep}),i.a.createElement(k,{dialogue:this.bard}),i.a.createElement(w,{dialogue:this.barPatron}),i.a.createElement(N,{dialogue:this.noddingPatron}),i.a.createElement(O,{active:this.state.laughPatron,dialogue:this.standingPatron}),i.a.createElement(j,null),i.a.createElement("p",{className:"bard-dialogue ".concat(this.state.bard)},i.a.createElement("a",{href:"https://github.com/relasine/frontend-movie-tracker",target:"_blank"},"MovieTracker")," ","is a web application that allows users to search and filter films and favorite them. It uses the Movie Database API. Powered by React.js, Redux, and Express."),i.a.createElement("p",{className:"barkeep-dialogue ".concat(this.state.barkeep)},i.a.createElement("a",{href:"https://github.com/relasine/SWAPIBox/",target:"_blank"},"SWAPIBox"),', aka "Jedi Archives Access", is an application that requires a series of nested API calls for displaying Star Wars-related data. A highly-narrative experience powered by React.'),i.a.createElement("p",{className:"bar-patron-dialogue ".concat(this.state.barPatron)},i.a.createElement("a",{href:"https://github.com/relasine/game-time",target:"_blank"},"NOM NOM Snake")," ","is a fun take on the classic arcade game, 'Snake'. Powered by object-oriented JavaScript and HTML Canvas."),i.a.createElement("p",{className:"nodding-patron-dialogue ".concat(this.state.noddingPatron)},i.a.createElement("a",{href:"https://github.com/relasine/headcount2.0",target:"_blank"},"Headcount")," ","is a React application used to sort, display, and compare test score information for different Colorado school districts."),i.a.createElement("p",{className:"standing-patron-dialogue ".concat(this.state.standingPatron)},i.a.createElement("a",{href:"https://github.com/relasine/nmbus",target:"_blank"},"Nmbus Weather")," ","is a web-application built for phones that utilizies the Weather Underground API to display weather forecasts. Locations are searchable by city name or zip code. Powered by React.")),i.a.createElement("h4",{className:"projects-text"},"Projects/Applications"))}}]),a}(n.Component),y=(t(43),t(45),function(e){return i.a.createElement("div",{className:"shopkeep",onClick:e.dialogue})}),C=(t(47),function(e){return i.a.createElement("article",{className:"social-window ".concat(e.activeWindow)},i.a.createElement("p",{onClick:e.handleWindowClick,className:"close-social"},"x"),i.a.createElement("section",{className:"contact-wrapper"},i.a.createElement("div",{className:"social-pair-container"},i.a.createElement("a",{href:"https://www.linkedin.com/in/kevinjohnsimpson/",target:"_blank"},i.a.createElement("img",{src:"./linkedin-icon.png",alt:"linkedin"}),"linkedin")),i.a.createElement("div",{className:"social-pair-container"},i.a.createElement("a",{href:"https://twitter.com/relasine",target:"_blank"},i.a.createElement("img",{src:"./twitter-icon.png",alt:"twitter"}),"twitter")),i.a.createElement("div",{className:"social-pair-container"},i.a.createElement("a",{href:"https://github.com/relasine",target:"_blank"},i.a.createElement("img",{src:"./github-icon.png",alt:"github"}),"github")),i.a.createElement("div",{className:"social-pair-container"},i.a.createElement("a",{href:"https://www.instagram.com/kevinjohnsimpson/",target:"_blank"},i.a.createElement("img",{src:"./instagram-icon.png",alt:"instagram"}),"instagram")),i.a.createElement("div",{className:"social-pair-container"},i.a.createElement("a",{href:"mailto:simpsonkevinjohn@gmail.com"},i.a.createElement("img",{src:"./mail-icon.png",alt:"mail"}),"email"))))}),S=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(l.a)(this,Object(m.a)(a).call(this))).handleWindowClick=function(){e.setState({window:!e.state.window,shopkeep:!1})},e.closeWindow=function(){e.state.window&&e.setState({window:!1})},e.shopkeep=function(){e.setState({shopkeep:!e.state.shopkeep})},e.state={window:!1,shopkeep:!1},e}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{className:"social-row",id:"social-link"},i.a.createElement("h4",{className:"social-text"},"Social/Contact Info"),i.a.createElement("section",{className:"contact-social"},i.a.createElement("div",{className:"item-shop",onClick:this.closeWindow},i.a.createElement(y,{dialogue:this.shopkeep}),i.a.createElement("div",{className:"window-button",onClick:this.handleWindowClick}),i.a.createElement(C,{activeWindow:this.state.window,handleWindowClick:this.handleWindowClick})),i.a.createElement("p",{className:"shop-keep-dialogue ".concat(this.state.shopkeep)},"Contact and social media info is on the table.")))}}]),a}(n.Component),T=(t(49),t(51),function(e){return i.a.createElement("div",{onClick:e.dialogue,className:"fighter-one"})}),x=(t(53),function(e){return i.a.createElement("div",{onClick:e.dialogue,className:"fighter-two"})}),A=(t(55),function(e){return i.a.createElement("div",{onClick:e.dialogue,className:"fighter-three"})}),W=(t(57),function(){return i.a.createElement("div",{className:"spell-one"})}),D=(t(59),function(){return i.a.createElement("div",{className:"cast-two"})}),R=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(l.a)(this,Object(m.a)(a).call(this))).fighterOne=function(){e.setState({fighterOne:!e.state.fighterOne,fighterTwo:!1,fighterThree:!1})},e.fighterTwo=function(){e.setState({fighterOne:!1,fighterTwo:!e.state.fighterTwo,fighterThree:!1})},e.fighterThree=function(){e.setState({fighterOne:!1,fighterTwo:!1,fighterThree:!e.state.fighterThree})},e.state={fighterOne:!1,fighterTwo:!1,fighterThree:!1},e}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{className:"about"},i.a.createElement("div",{className:"about-row"},i.a.createElement("h4",{className:"about-text"},"Page Info"),i.a.createElement("article",{className:"about-scene-column"},i.a.createElement("div",{className:"about-scene"},i.a.createElement(T,{dialogue:this.fighterOne}),i.a.createElement(x,{dialogue:this.fighterTwo}),i.a.createElement(A,{dialogue:this.fighterThree}),i.a.createElement(W,null),i.a.createElement(D,null)),i.a.createElement("p",{className:"".concat(this.state.fighterOne," fighter-one-dialogue")},"Art assets are licensed by"," ",i.a.createElement("a",{href:"http://finalbossblues.com/",target:"_black"},"Jason Perry"),", aka 'Final Boss Blues'"),i.a.createElement("p",{className:"".concat(this.state.fighterTwo," fighter-two-dialogue")},"Thank you for coming to my lovely tea party."),i.a.createElement("p",{className:"".concat(this.state.fighterThree," fighter-three-dialogue")},"This page was built in React. All animations created using CSS."))))}}]),a}(n.Component),I=function(){return i.a.createElement("div",{className:"preload"},i.a.createElement("img",{src:"../css/images/darkworld1.png",alt:"darkworld1"}),i.a.createElement("img",{src:"../css/images/darkworld2.png",alt:"darkworld2"}),i.a.createElement("img",{src:"../css/images/deck1.png",alt:"deck1"}),i.a.createElement("img",{src:"../css/images/deck2.png",alt:"deck2"}),i.a.createElement("img",{src:"../css/images/grass.png",alt:"grass"}),i.a.createElement("img",{src:"../css/images/house.png",alt:"house"}),i.a.createElement("img",{src:"../css/images/itemshop.png",alt:"itemshop"}),i.a.createElement("img",{src:"../css/images/sidewalk.png",alt:"sidewalk"}),i.a.createElement("img",{src:"../css/images/social-board.png",alt:"social-board"}),i.a.createElement("img",{src:"../css/images/tavern.png",alt:"tavern"}))},_=(t(61),function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(l.a)(this,Object(m.a)(a).call(this))).finishLoading=function(){e.setState({loading:!1,onboarding:!0})},e.finishOnboarding=function(){e.setState({onboarding:!1,main:!0})},e.state={loading:!0,onboarding:!1,main:!1},e}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){setTimeout(this.finishLoading,4e3)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},this.state.loading&&i.a.createElement(u,null),this.state.onboarding&&i.a.createElement(g,{finishOnboarding:this.finishOnboarding}),this.state.main&&i.a.createElement("main",{className:"main-screen"},i.a.createElement(b,null),i.a.createElement(E,null),i.a.createElement(P,null),i.a.createElement(S,null),i.a.createElement(R,null)),i.a.createElement(I,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.9973228c.chunk.js.map