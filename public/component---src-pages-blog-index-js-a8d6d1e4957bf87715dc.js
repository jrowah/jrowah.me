(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[524],{1619:function(e,t,n){"use strict";var r=n(7294);t.Z=e=>{let{children:t}=e;return r.createElement("footer",{className:"pt-4"},r.createElement("ul",{id:"copyright"},r.createElement("li",null,"Copyright © Jrowah. All rights reserved. ",r.createElement("span",null,"2023")," ",r.createElement("span",null,r.createElement("a",{href:"/privacy-policy",target:"_blank",rel:"noopener noreferrer"},"Privacy Terms")))))}},8678:function(e,t,n){"use strict";var r=n(7294),l=n(1883),a=n(3710),o=n(1186),i=n.n(o);t.Z=e=>{let{pageTitle:t,children:n}=e;return r.createElement("div",{className:a.nC},r.createElement(i(),{url:"https://www.linkpicture.com/q/jr_1.png"}),r.createElement("nav",null,r.createElement("ul",{className:a.FV},r.createElement("li",{className:a.up},r.createElement(l.Link,{to:"/",className:a.cP,class:"text-3xl text-blue-500 border-b-2 border-blue-500"},"About")),r.createElement("li",{className:a.up},r.createElement(l.Link,{to:"/journey",className:a.cP,class:"text-3xl text-blue-500 border-b-2 border-blue-500"},"Journey")),r.createElement("li",{className:a.up},r.createElement(l.Link,{to:"/blog",className:a.cP,class:"text-3xl text-blue-500 border-b-2 border-blue-500"},"Blog")))),r.createElement("main",null,r.createElement("h1",{class:"text-black text-3xl"},t),n))}},9357:function(e,t,n){"use strict";var r=n(7294),l=n(1883);t.Z=e=>{let{title:t}=e;const n=(0,l.useStaticQuery)("3159585216");return r.createElement("title",null,n.site.siteMetadata.title," | ",t)}},1025:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return c}});var r=n(7294),l=n(8678),a=n(9357),o=n(1619),i=n(1883);const c=()=>r.createElement(a.Z,{title:"Blog"});t.default=e=>{let{data:t}=e;return r.createElement("main",{class:"pt-4 pl-4"},r.createElement(l.Z,null,r.createElement("h1",{class:"text-3xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white pt-8"},"My Blog")),r.createElement("section",{class:"bg-white"},r.createElement("div",{class:"px-6 py-10  mx-auto"},r.createElement("div",{class:"grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2"},t.allMdx.nodes.map((e=>r.createElement("div",{class:"lg:flex",key:e.id},r.createElement("img",{class:"object-cover w-full h-56 rounded-lg lg:w-64",src:e.frontmatter.hero_image_credit_link,alt:"hero"}),r.createElement("div",{class:"flex flex-col justify-between py-6 lg:mx-6"},r.createElement(i.Link,{to:"/blog/"+e.frontmatter.slug},r.createElement("a",{href:"/blog/"+e.frontmatter.slug,class:"text-xl font-semibold text-blue"},e.frontmatter.title),r.createElement("hr",null)),r.createElement("span",{class:"text-sm text-gray-800 dark:text-gray-800"},"Posted On: ",e.frontmatter.date),r.createElement("p",null,e.excerpt)))))))),r.createElement(o.Z,null))}},3710:function(e,t,n){"use strict";n.d(t,{FV:function(){return o},Ru:function(){return i},cP:function(){return a},nC:function(){return r},up:function(){return l}});var r="layout-module--container--78b04",l="layout-module--nav-link-item--a5f0a",a="layout-module--nav-link-text--69cda",o="layout-module--nav-links--1113b",i="layout-module--socialcontainer--31023"},1186:function(e,t,n){function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}var l=n(7294),a=n(5697),o=[];function i(e){var t=e.alertCount,n=e.alertFillColor,r=e.alertTextColor,l=e.callback,a=e.renderOverlay,o=e.url,i=e.canvasSize,c=document.createElement("img");c.crossOrigin="Anonymous",c.onload=function(){var e=document.createElement("canvas");e.width=i,e.height=i;var o=e.getContext("2d");o.clearRect(0,0,c.width,c.height),o.drawImage(c,0,0,e.width,e.height),t&&function(e,t){var n=t.fillColor,r=t.text,l=t.textColor,a=t.canvasSize,o=a/5;e.font="bold "+(a-2*o)+"px arial";var i=Math.min(e.measureText(r).width,a-o)+o,c=a-i,s=a/2-o,u=o+a/2,m=Math.min(i/2,u/2);e.beginPath(),e.moveTo(c+m,s),e.arcTo(c+i,s,c+i,s+u,m),e.arcTo(c+i,s+u,c,s+u,m),e.arcTo(c,s+u,c,s,m),e.arcTo(c,s,c+i,s,m),e.closePath(),e.fillStyle=n,e.fill(),e.fillStyle=l,e.textBaseline="bottom",e.textAlign="right",e.fillText(r,a-o/2,a,a-o)}(o,{fillColor:n,textColor:r,text:t,canvasSize:i}),a&&a(e,o),l(o.canvas.toDataURL())},c.src=o}var c=function(e){var t,n;function l(){for(var t,n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))||this).state={animationIndex:0,animationLoop:null,animationRunning:!1},t}n=e,(t=l).prototype=Object.create(n.prototype),t.prototype.constructor=t,r(t,n),l.getActiveInstance=function(){return l.mountedInstances[l.mountedInstances.length-1]},l.draw=function(){if("undefined"!=typeof document){var e,t=l.getActiveInstance();if(0===o.length){var n=document.getElementsByTagName("head")[0],r=document.createElement("link");r.type="image/x-icon",r.rel="icon";var a=document.createElement("link");a.rel="apple-touch-icon",o.push(r,a);for(var c=n.getElementsByTagName("link"),s=c.length;--s>=0;)/\bicon\b/i.test(c[s].getAttribute("rel"))&&!t.props.keepIconLink(c[s])&&n.removeChild(c[s]);o.forEach((function(e){return n.appendChild(e)}))}e=t.props.url instanceof Array?t.props.url[t.state.animationIndex]:t.props.url,t.props.alertCount||t.props.renderOverlay?i({alertCount:t.props.alertCount,alertFillColor:t.props.alertFillColor,alertTextColor:t.props.alertTextColor,callback:function(e){o.forEach((function(t){return t.href=e}))},renderOverlay:t.props.renderOverlay,url:e,canvasSize:t.props.iconSize}):o.forEach((function(t){return t.href=e}))}},l.update=function(){if("undefined"!=typeof document){var e=l.getActiveInstance(),t=e.props.url instanceof Array&&e.props.animated,n=null;if(clearInterval(e.state.animationLoop),t){var r=function(){var t=(e.state.animationIndex+1)%e.props.url.length;l.draw(),e.setState({animationIndex:t})};n=setInterval(r,e.props.animationDelay),r()}else l.draw();e.setState({animationLoop:n})}};var a=l.prototype;return a.componentDidMount=function(){l.mountedInstances.push(this),l.update()},a.componentWillUnmount=function(){var e=l.getActiveInstance();clearInterval(e.state.animationLoop)},a.componentDidUpdate=function(e){e.url===this.props.url&&e.animated===this.props.animated&&e.alertCount===this.props.alertCount&&e.alertFillColor===this.props.alertFillColor&&e.alertTextColor===this.props.alertTextColor&&e.renderOverlay===this.props.renderOverlay&&e.keepIconLink===this.props.keepIconLink&&e.iconSize===this.props.iconSize||l.update()},a.render=function(){return null},l}(l.Component);c.displayName="Favicon",c.mountedInstances=[],c.defaultProps={iconSize:16,alertCount:null,alertFillColor:"red",alertTextColor:"white",animated:!0,animationDelay:500,keepIconLink:function(){return!1},renderOverlay:null,url:null},c.propTypes={iconSize:a.number,alertCount:a.oneOfType([a.number,a.string]),alertFillColor:a.string,alertTextColor:a.string,animated:a.bool,animationDelay:a.number,keepIconLink:a.func,renderOverlay:a.func,url:a.oneOfType([a.arrayOf(a.string),a.string]).isRequired},e.exports=c}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-a8d6d1e4957bf87715dc.js.map