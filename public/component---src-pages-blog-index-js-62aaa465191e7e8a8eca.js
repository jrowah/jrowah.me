(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[524],{1619:function(e,t,n){"use strict";var r=n(7294);t.Z=e=>{let{children:t}=e;return r.createElement("footer",{className:"pt-4"}," ",t)}},8678:function(e,t,n){"use strict";var r=n(7294),a=n(1883),l=n(3710),o=n(1186),i=n.n(o);t.Z=e=>{let{pageTitle:t,children:n}=e;return r.createElement("div",{className:l.nC},r.createElement(i(),{url:"https://ibb.co/n7pTQqc"}),r.createElement("nav",null,r.createElement("ul",{className:l.FV},r.createElement("li",{className:l.up},r.createElement(a.rU,{to:"/",className:l.cP},"About")),r.createElement("li",{className:l.up},r.createElement(a.rU,{to:"/journey",className:l.cP},"Journey")),r.createElement("li",{className:l.up},r.createElement(a.rU,{to:"/blog",className:l.cP},"Blog")))),r.createElement("main",null,r.createElement("h1",{className:l.nP},t),n))}},9357:function(e,t,n){"use strict";var r=n(7294),a=n(1883);t.Z=e=>{let{title:t}=e;const n=(0,a.K2)("3159585216");return r.createElement("title",null,n.site.siteMetadata.title," | ",t)}},1025:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return c}});var r=n(7294),a=n(8678),l=n(9357),o=n(1619),i=n(1883);const c=()=>r.createElement(l.Z,{title:"Blog"});t.default=e=>{let{data:t}=e;return r.createElement("main",{class:"pt-4 pl-4"},r.createElement(a.Z,null,r.createElement("h1",{class:"text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white pt-8"},"My Blog")),r.createElement("section",{class:"bg-white dark:bg-gray-900"},r.createElement("div",{class:"container px-6 py-10 mx-auto"},r.createElement("div",{class:"grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2"},t.allMdx.nodes.map((e=>r.createElement("div",{class:"lg:flex",key:e.id},r.createElement("img",{class:"object-cover w-full h-56 rounded-lg lg:w-64",src:"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",alt:""}),r.createElement("div",{class:"flex flex-col justify-between py-6 lg:mx-6"},r.createElement(i.rU,{to:"/blog/"+e.frontmatter.slug},r.createElement("a",{href:"/blog/"+e.frontmatter.slug,class:"text-xl font-semibold text-gray-800 hover:underline dark:text-white "},e.frontmatter.title)),r.createElement("span",{class:"text-sm text-gray-500 dark:text-gray-300"},"On: ",e.frontmatter.date),r.createElement("p",null,e.excerpt)))))))),r.createElement(o.Z,null,r.createElement("ul",{id:"copyright"},r.createElement("li",null,"Copyright © Jrowah. All rights reserved. ",r.createElement("span",null,"2022")," ",r.createElement("span",null,r.createElement("a",{href:"/privacy-policy",target:"_blank",rel:"noopener noreferrer"},"Privacy Terms"))))))}},3710:function(e,t,n){"use strict";n.d(t,{FV:function(){return i},Ru:function(){return s},cP:function(){return o},iV:function(){return c},nC:function(){return r},nP:function(){return a},up:function(){return l}});var r="layout-module--container--78b04",a="layout-module--heading--f158c",l="layout-module--nav-link-item--a5f0a",o="layout-module--nav-link-text--69cda",i="layout-module--nav-links--1113b",c="layout-module--project--cb1db",s="layout-module--socialcontainer--31023"},1186:function(e,t,n){function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}var a=n(7294),l=n(5697),o=[];function i(e){var t=e.alertCount,n=e.alertFillColor,r=e.alertTextColor,a=e.callback,l=e.renderOverlay,o=e.url,i=e.canvasSize,c=document.createElement("img");c.crossOrigin="Anonymous",c.onload=function(){var e=document.createElement("canvas");e.width=i,e.height=i;var o=e.getContext("2d");o.clearRect(0,0,c.width,c.height),o.drawImage(c,0,0,e.width,e.height),t&&function(e,t){var n=t.fillColor,r=t.text,a=t.textColor,l=t.canvasSize,o=l/5;e.font="bold "+(l-2*o)+"px arial";var i=Math.min(e.measureText(r).width,l-o)+o,c=l-i,s=l/2-o,u=o+l/2,m=Math.min(i/2,u/2);e.beginPath(),e.moveTo(c+m,s),e.arcTo(c+i,s,c+i,s+u,m),e.arcTo(c+i,s+u,c,s+u,m),e.arcTo(c,s+u,c,s,m),e.arcTo(c,s,c+i,s,m),e.closePath(),e.fillStyle=n,e.fill(),e.fillStyle=a,e.textBaseline="bottom",e.textAlign="right",e.fillText(r,l-o/2,l,l-o)}(o,{fillColor:n,textColor:r,text:t,canvasSize:i}),l&&l(e,o),a(o.canvas.toDataURL())},c.src=o}var c=function(e){var t,n;function a(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={animationIndex:0,animationLoop:null,animationRunning:!1},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,r(t,n),a.getActiveInstance=function(){return a.mountedInstances[a.mountedInstances.length-1]},a.draw=function(){if("undefined"!=typeof document){var e,t=a.getActiveInstance();if(0===o.length){var n=document.getElementsByTagName("head")[0],r=document.createElement("link");r.type="image/x-icon",r.rel="icon";var l=document.createElement("link");l.rel="apple-touch-icon",o.push(r,l);for(var c=n.getElementsByTagName("link"),s=c.length;--s>=0;)/\bicon\b/i.test(c[s].getAttribute("rel"))&&!t.props.keepIconLink(c[s])&&n.removeChild(c[s]);o.forEach((function(e){return n.appendChild(e)}))}e=t.props.url instanceof Array?t.props.url[t.state.animationIndex]:t.props.url,t.props.alertCount||t.props.renderOverlay?i({alertCount:t.props.alertCount,alertFillColor:t.props.alertFillColor,alertTextColor:t.props.alertTextColor,callback:function(e){o.forEach((function(t){return t.href=e}))},renderOverlay:t.props.renderOverlay,url:e,canvasSize:t.props.iconSize}):o.forEach((function(t){return t.href=e}))}},a.update=function(){if("undefined"!=typeof document){var e=a.getActiveInstance(),t=e.props.url instanceof Array&&e.props.animated,n=null;if(clearInterval(e.state.animationLoop),t){var r=function(){var t=(e.state.animationIndex+1)%e.props.url.length;a.draw(),e.setState({animationIndex:t})};n=setInterval(r,e.props.animationDelay),r()}else a.draw();e.setState({animationLoop:n})}};var l=a.prototype;return l.componentDidMount=function(){a.mountedInstances.push(this),a.update()},l.componentWillUnmount=function(){var e=a.getActiveInstance();clearInterval(e.state.animationLoop)},l.componentDidUpdate=function(e){e.url===this.props.url&&e.animated===this.props.animated&&e.alertCount===this.props.alertCount&&e.alertFillColor===this.props.alertFillColor&&e.alertTextColor===this.props.alertTextColor&&e.renderOverlay===this.props.renderOverlay&&e.keepIconLink===this.props.keepIconLink&&e.iconSize===this.props.iconSize||a.update()},l.render=function(){return null},a}(a.Component);c.displayName="Favicon",c.mountedInstances=[],c.defaultProps={iconSize:16,alertCount:null,alertFillColor:"red",alertTextColor:"white",animated:!0,animationDelay:500,keepIconLink:function(){return!1},renderOverlay:null,url:null},c.propTypes={iconSize:l.number,alertCount:l.oneOfType([l.number,l.string]),alertFillColor:l.string,alertTextColor:l.string,animated:l.bool,animationDelay:l.number,keepIconLink:l.func,renderOverlay:l.func,url:l.oneOfType([l.arrayOf(l.string),l.string]).isRequired},e.exports=c}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-62aaa465191e7e8a8eca.js.map