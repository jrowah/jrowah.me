(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[337],{3723:function(e,t,n){"use strict";n.d(t,{G:function(){return N},L:function(){return g},M:function(){return E},P:function(){return C},S:function(){return q},_:function(){return l},a:function(){return i},b:function(){return u},c:function(){return c},g:function(){return d},h:function(){return s}});var r=n(7294),a=(n(2369),n(5697)),o=n.n(a);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,n,r,a){return void 0===a&&(a={}),i({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},a,{opacity:t?1:0})})}function d(e,t,n,r,a,o,l,s){const c={};o&&(c.backgroundColor=o,"fixed"===n?(c.width=r,c.height=a,c.backgroundColor=o,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],m=function(e){let{layout:t,width:n,height:a}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,n=l(e,p);return r.createElement(r.Fragment,null,r.createElement(m,i({},n)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:n,loading:a,alt:o="",shouldLoad:s}=e,c=l(e,f);return r.createElement("img",i({},c,{decoding:"async",loading:a,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,alt:o}))},v=function(e){let{fallback:t,sources:n=[],shouldLoad:a=!0}=e,o=l(e,h);const s=o.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,i({},o,t,{sizes:s,shouldLoad:a}));return n.length?r.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:o}=e;return r.createElement("source",{key:t+"-"+o+"-"+n,type:o,media:t,srcSet:a?n:void 0,"data-srcset":a?void 0:n,sizes:s})})),c):c};var b;y.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},v.displayName="Picture",v.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const w=["fallback"],C=function(e){let{fallback:t}=e,n=l(e,w);return t?r.createElement(v,i({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},n))};C.displayName="Placeholder",C.propTypes={fallback:a.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(v,i({},e)),r.createElement("noscript",null,r.createElement(v,i({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;const x=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),i=3;i<r;i++)a[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,n].concat(a)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:o().object.isRequired,alt:x},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],T=new Set;let S,O;const A=function(e){let{as:t="div",image:a,style:o,backgroundColor:c,className:u,class:d,onStartLoad:p,onLoad:m,onError:g}=e,f=l(e,k);const{width:h,height:y,layout:v}=a,b=function(e,t,n){const r={};let a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}(h,y,v),{style:w,className:C}=b,E=l(b,I),x=(0,r.useRef)(),L=(0,r.useMemo)((()=>JSON.stringify(a.images)),[a.images]);d&&(u=d);const A=function(e,t,n){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,h,y);return(0,r.useEffect)((()=>{S||(S=Promise.all([n.e(774),n.e(223)]).then(n.bind(n,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(L);if(O&&T.has(L))return;let t,r;return S.then((e=>{let{renderImageToString:n,swapPlaceholderImage:l}=e;x.current&&(x.current.innerHTML=n(i({isLoading:!0,isLoaded:T.has(L),image:a},f)),T.has(L)||(t=requestAnimationFrame((()=>{x.current&&(r=l(x.current,L,T,o,p,m,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[a]),(0,r.useLayoutEffect)((()=>{T.has(L)&&O&&(x.current.innerHTML=O(i({isLoading:T.has(L),isLoaded:T.has(L),image:a},f)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[a]),(0,r.createElement)(t,i({},E,{style:i({},w,o,{backgroundColor:c}),className:C+(u?" "+u:""),ref:x,dangerouslySetInnerHTML:{__html:A},suppressHydrationWarning:!0}))},N=(0,r.memo)((function(e){return e.image?(0,r.createElement)(A,e):null}));N.propTypes=L,N.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],P=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},_=new Set(["fixed","fullWidth","constrained"]),R={src:o().string.isRequired,alt:x,width:P,height:P,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!_.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(F=N,function(e){let{src:t,__imageData:n,__error:a}=e,o=l(e,z);return a&&console.warn(a),n?r.createElement(F,i({image:n},o)):(console.warn("Image not loaded",t),null)});var F;q.displayName="StaticImage",q.propTypes=R},2369:function(e){"use strict";const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,n=!1,r=!1;for(let a=0;a<e.length;a++){const o=e[a];t&&/[a-zA-Z]/.test(o)&&o.toUpperCase()===o?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,r=n,n=!0,a++):n&&r&&/[a-zA-Z]/.test(o)&&o.toLowerCase()===o?(e=e.slice(0,a-1)+"-"+e.slice(a-1),r=n,n=!1,t=!0):(t=o.toLowerCase()===o&&o.toUpperCase()!==o,r=n,n=o.toUpperCase()===o&&o.toLowerCase()!==o)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n;var n};e.exports=t,e.exports.default=t},8678:function(e,t,n){"use strict";var r=n(7294),a=n(1883),o=n(3710),i=n(1186),l=n.n(i);t.Z=e=>{let{pageTitle:t,children:n}=e;return r.createElement("div",{className:o.nC},r.createElement(l(),{url:"https://ibb.co/n7pTQqc"}),r.createElement("nav",null,r.createElement("ul",{className:o.FV},r.createElement("li",{className:o.up},r.createElement(a.Link,{to:"/",className:o.cP,class:"text-2xl text-blue-500"},"About")),r.createElement("li",{className:o.up},r.createElement(a.Link,{to:"/journey",className:o.cP,class:"text-2xl text-blue-500"},"Journey")),r.createElement("li",{className:o.up},r.createElement(a.Link,{to:"/blog",className:o.cP,class:"text-2xl text-blue-500"},"Blog")))),r.createElement("main",null,r.createElement("h1",{className:o.nP},t),n))}},9357:function(e,t,n){"use strict";var r=n(7294),a=n(1883);t.Z=e=>{let{title:t}=e;const n=(0,a.useStaticQuery)("3159585216");return r.createElement("title",null,n.site.siteMetadata.title," | ",t)}},3710:function(e,t,n){"use strict";n.d(t,{FV:function(){return l},Ru:function(){return c},cP:function(){return i},iV:function(){return s},nC:function(){return r},nP:function(){return a},up:function(){return o}});var r="layout-module--container--78b04",a="layout-module--heading--f158c",o="layout-module--nav-link-item--a5f0a",i="layout-module--nav-link-text--69cda",l="layout-module--nav-links--1113b",s="layout-module--project--cb1db",c="layout-module--socialcontainer--31023"},1186:function(e,t,n){function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}var a=n(7294),o=n(5697),i=[];function l(e){var t=e.alertCount,n=e.alertFillColor,r=e.alertTextColor,a=e.callback,o=e.renderOverlay,i=e.url,l=e.canvasSize,s=document.createElement("img");s.crossOrigin="Anonymous",s.onload=function(){var e=document.createElement("canvas");e.width=l,e.height=l;var i=e.getContext("2d");i.clearRect(0,0,s.width,s.height),i.drawImage(s,0,0,e.width,e.height),t&&function(e,t){var n=t.fillColor,r=t.text,a=t.textColor,o=t.canvasSize,i=o/5;e.font="bold "+(o-2*i)+"px arial";var l=Math.min(e.measureText(r).width,o-i)+i,s=o-l,c=o/2-i,u=i+o/2,d=Math.min(l/2,u/2);e.beginPath(),e.moveTo(s+d,c),e.arcTo(s+l,c,s+l,c+u,d),e.arcTo(s+l,c+u,s,c+u,d),e.arcTo(s,c+u,s,c,d),e.arcTo(s,c,s+l,c,d),e.closePath(),e.fillStyle=n,e.fill(),e.fillStyle=a,e.textBaseline="bottom",e.textAlign="right",e.fillText(r,o-i/2,o,o-i)}(i,{fillColor:n,textColor:r,text:t,canvasSize:l}),o&&o(e,i),a(i.canvas.toDataURL())},s.src=i}var s=function(e){var t,n;function a(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={animationIndex:0,animationLoop:null,animationRunning:!1},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,r(t,n),a.getActiveInstance=function(){return a.mountedInstances[a.mountedInstances.length-1]},a.draw=function(){if("undefined"!=typeof document){var e,t=a.getActiveInstance();if(0===i.length){var n=document.getElementsByTagName("head")[0],r=document.createElement("link");r.type="image/x-icon",r.rel="icon";var o=document.createElement("link");o.rel="apple-touch-icon",i.push(r,o);for(var s=n.getElementsByTagName("link"),c=s.length;--c>=0;)/\bicon\b/i.test(s[c].getAttribute("rel"))&&!t.props.keepIconLink(s[c])&&n.removeChild(s[c]);i.forEach((function(e){return n.appendChild(e)}))}e=t.props.url instanceof Array?t.props.url[t.state.animationIndex]:t.props.url,t.props.alertCount||t.props.renderOverlay?l({alertCount:t.props.alertCount,alertFillColor:t.props.alertFillColor,alertTextColor:t.props.alertTextColor,callback:function(e){i.forEach((function(t){return t.href=e}))},renderOverlay:t.props.renderOverlay,url:e,canvasSize:t.props.iconSize}):i.forEach((function(t){return t.href=e}))}},a.update=function(){if("undefined"!=typeof document){var e=a.getActiveInstance(),t=e.props.url instanceof Array&&e.props.animated,n=null;if(clearInterval(e.state.animationLoop),t){var r=function(){var t=(e.state.animationIndex+1)%e.props.url.length;a.draw(),e.setState({animationIndex:t})};n=setInterval(r,e.props.animationDelay),r()}else a.draw();e.setState({animationLoop:n})}};var o=a.prototype;return o.componentDidMount=function(){a.mountedInstances.push(this),a.update()},o.componentWillUnmount=function(){var e=a.getActiveInstance();clearInterval(e.state.animationLoop)},o.componentDidUpdate=function(e){e.url===this.props.url&&e.animated===this.props.animated&&e.alertCount===this.props.alertCount&&e.alertFillColor===this.props.alertFillColor&&e.alertTextColor===this.props.alertTextColor&&e.renderOverlay===this.props.renderOverlay&&e.keepIconLink===this.props.keepIconLink&&e.iconSize===this.props.iconSize||a.update()},o.render=function(){return null},a}(a.Component);s.displayName="Favicon",s.mountedInstances=[],s.defaultProps={iconSize:16,alertCount:null,alertFillColor:"red",alertTextColor:"white",animated:!0,animationDelay:500,keepIconLink:function(){return!1},renderOverlay:null,url:null},s.propTypes={iconSize:o.number,alertCount:o.oneOfType([o.number,o.string]),alertFillColor:o.string,alertTextColor:o.string,animated:o.bool,animationDelay:o.number,keepIconLink:o.func,renderOverlay:o.func,url:o.oneOfType([o.arrayOf(o.string),o.string]).isRequired},e.exports=s}}]);
//# sourceMappingURL=661e576b0b9ee8afa7249124849001559a6402ba-76a103b44d5de3b227fc.js.map