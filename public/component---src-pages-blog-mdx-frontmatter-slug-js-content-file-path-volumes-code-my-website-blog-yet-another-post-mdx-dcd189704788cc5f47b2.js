(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[643],{9478:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return s},default:function(){return p}});var r=n(1151),a=n(7294);function o(e){const t=Object.assign({p:"p"},(0,r.ah)(),e.components);return a.createElement(t.p,null,"I just started learning this new language and I want to document key steps probably through a project.")}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)},i=n(8678),c=n(9357);const u=e=>{let{data:t,children:n}=e;return a.createElement(i.Z,{pageTitle:t.mdx.frontmatter.title},a.createElement("p",null,t.mdx.frontmatter.date),n)},s=e=>{let{data:t}=e;return a.createElement(c.Z,{title:t.mdx.frontmatter.title})};function p(e){return a.createElement(u,e,a.createElement(l,e))}},8678:function(e,t,n){"use strict";var r=n(7294),a=n(1883),o=n(3710),l=n(1186),i=n.n(l);t.Z=e=>{let{pageTitle:t,children:n}=e;return r.createElement("div",{className:o.nC},r.createElement(i(),{url:"https://ibb.co/n7pTQqc"}),r.createElement("nav",null,r.createElement("ul",{className:o.FV},r.createElement("li",{className:o.up},r.createElement(a.rU,{to:"/",className:o.cP},"About")),r.createElement("li",{className:o.up},r.createElement(a.rU,{to:"/journey",className:o.cP},"Journey")),r.createElement("li",{className:o.up},r.createElement(a.rU,{to:"/blog",className:o.cP},"Blog")))),r.createElement("main",null,r.createElement("h1",{className:o.nP},t),n))}},9357:function(e,t,n){"use strict";var r=n(7294),a=n(1883);t.Z=e=>{let{title:t}=e;const n=(0,a.K2)("3159585216");return r.createElement("title",null,n.site.siteMetadata.title," | ",t)}},3710:function(e,t,n){"use strict";n.d(t,{FV:function(){return i},Ru:function(){return u},cP:function(){return l},iV:function(){return c},nC:function(){return r},nP:function(){return a},up:function(){return o}});var r="layout-module--container--78b04",a="layout-module--heading--f158c",o="layout-module--nav-link-item--a5f0a",l="layout-module--nav-link-text--69cda",i="layout-module--nav-links--1113b",c="layout-module--project--cb1db",u="layout-module--socialcontainer--31023"},1186:function(e,t,n){function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}var a=n(7294),o=n(5697),l=[];function i(e){var t=e.alertCount,n=e.alertFillColor,r=e.alertTextColor,a=e.callback,o=e.renderOverlay,l=e.url,i=e.canvasSize,c=document.createElement("img");c.crossOrigin="Anonymous",c.onload=function(){var e=document.createElement("canvas");e.width=i,e.height=i;var l=e.getContext("2d");l.clearRect(0,0,c.width,c.height),l.drawImage(c,0,0,e.width,e.height),t&&function(e,t){var n=t.fillColor,r=t.text,a=t.textColor,o=t.canvasSize,l=o/5;e.font="bold "+(o-2*l)+"px arial";var i=Math.min(e.measureText(r).width,o-l)+l,c=o-i,u=o/2-l,s=l+o/2,p=Math.min(i/2,s/2);e.beginPath(),e.moveTo(c+p,u),e.arcTo(c+i,u,c+i,u+s,p),e.arcTo(c+i,u+s,c,u+s,p),e.arcTo(c,u+s,c,u,p),e.arcTo(c,u,c+i,u,p),e.closePath(),e.fillStyle=n,e.fill(),e.fillStyle=a,e.textBaseline="bottom",e.textAlign="right",e.fillText(r,o-l/2,o,o-l)}(l,{fillColor:n,textColor:r,text:t,canvasSize:i}),o&&o(e,l),a(l.canvas.toDataURL())},c.src=l}var c=function(e){var t,n;function a(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={animationIndex:0,animationLoop:null,animationRunning:!1},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,r(t,n),a.getActiveInstance=function(){return a.mountedInstances[a.mountedInstances.length-1]},a.draw=function(){if("undefined"!=typeof document){var e,t=a.getActiveInstance();if(0===l.length){var n=document.getElementsByTagName("head")[0],r=document.createElement("link");r.type="image/x-icon",r.rel="icon";var o=document.createElement("link");o.rel="apple-touch-icon",l.push(r,o);for(var c=n.getElementsByTagName("link"),u=c.length;--u>=0;)/\bicon\b/i.test(c[u].getAttribute("rel"))&&!t.props.keepIconLink(c[u])&&n.removeChild(c[u]);l.forEach((function(e){return n.appendChild(e)}))}e=t.props.url instanceof Array?t.props.url[t.state.animationIndex]:t.props.url,t.props.alertCount||t.props.renderOverlay?i({alertCount:t.props.alertCount,alertFillColor:t.props.alertFillColor,alertTextColor:t.props.alertTextColor,callback:function(e){l.forEach((function(t){return t.href=e}))},renderOverlay:t.props.renderOverlay,url:e,canvasSize:t.props.iconSize}):l.forEach((function(t){return t.href=e}))}},a.update=function(){if("undefined"!=typeof document){var e=a.getActiveInstance(),t=e.props.url instanceof Array&&e.props.animated,n=null;if(clearInterval(e.state.animationLoop),t){var r=function(){var t=(e.state.animationIndex+1)%e.props.url.length;a.draw(),e.setState({animationIndex:t})};n=setInterval(r,e.props.animationDelay),r()}else a.draw();e.setState({animationLoop:n})}};var o=a.prototype;return o.componentDidMount=function(){a.mountedInstances.push(this),a.update()},o.componentWillUnmount=function(){var e=a.getActiveInstance();clearInterval(e.state.animationLoop)},o.componentDidUpdate=function(e){e.url===this.props.url&&e.animated===this.props.animated&&e.alertCount===this.props.alertCount&&e.alertFillColor===this.props.alertFillColor&&e.alertTextColor===this.props.alertTextColor&&e.renderOverlay===this.props.renderOverlay&&e.keepIconLink===this.props.keepIconLink&&e.iconSize===this.props.iconSize||a.update()},o.render=function(){return null},a}(a.Component);c.displayName="Favicon",c.mountedInstances=[],c.defaultProps={iconSize:16,alertCount:null,alertFillColor:"red",alertTextColor:"white",animated:!0,animationDelay:500,keepIconLink:function(){return!1},renderOverlay:null,url:null},c.propTypes={iconSize:o.number,alertCount:o.oneOfType([o.number,o.string]),alertFillColor:o.string,alertTextColor:o.string,animated:o.bool,animationDelay:o.number,keepIconLink:o.func,renderOverlay:o.func,url:o.oneOfType([o.arrayOf(o.string),o.string]).isRequired},e.exports=c},1151:function(e,t,n){"use strict";n.d(t,{ah:function(){return o}});var r=n(7294);const a=r.createContext({});function o(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-volumes-code-my-website-blog-yet-another-post-mdx-dcd189704788cc5f47b2.js.map