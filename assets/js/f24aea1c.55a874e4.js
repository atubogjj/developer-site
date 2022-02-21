"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[2405],{71766:function(e,t,n){var i=n(97218),r=n(67294),o=(n(31877),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u9ed8\u8ba4\u503c",dataIndex:"dafault",width:"10%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return r.createElement(i.Z,{dataSource:e.dataSource,columns:o,pagination:!1})}},72181:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(75068),r=n(67294),o=n(45697),a=n.n(o),l=n(41481),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new l.Z,n.recevier.on("updateHeight",(function(e,t,i){n.iframe&&i===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){var t=e.url,n=e.disableHeightSync;e.style;t.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height||"800px"),n!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,i=t.id,o=t.style,a=t.url;return a?r.createElement("div",{className:"bg-iframe "+n,id:i,style:Object.assign({height:800,width:"100%"},o),ref:function(t){e.container=t}},r.createElement("iframe",{src:a,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):r.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(r.PureComponent);c.displayName="bg-iframe",c.propTypes={className:a().string,disableHeightSync:a().bool,id:a().string,onUpdateHeight:a().func,style:a().object,url:a().string.isRequired},c.defaultProps={className:"",disableHeightSync:!1,id:"",onUpdateHeight:function(){},style:{},syncParam:!0,url:""}},92349:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=n(72181),l=n(71766),c=["components"],s={title:"\u5e03\u5c40\u5bb9\u5668",order:2},d="\u5e03\u5c40\u5bb9\u5668",u={unversionedId:"components/layout/regionalContainer",id:"components/layout/regionalContainer",title:"\u5e03\u5c40\u5bb9\u5668",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/layout/regionalContainer.mdx",sourceDirName:"components/layout",slug:"/components/layout/regionalContainer",permalink:"/docs/components/layout/regionalContainer",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/layout/regionalContainer.mdx",tags:[],version:"current",frontMatter:{title:"\u5e03\u5c40\u5bb9\u5668",order:2},sidebar:"components",previous:{title:"\u9009\u9879\u5361",permalink:"/docs/components/layout/tabsLayout"},next:{title:"\u56fe\u6807",permalink:"/docs/components/basic/icon"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],m={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5e03\u5c40\u5bb9\u5668"},"\u5e03\u5c40\u5bb9\u5668"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("p",null,"\u5e03\u5c40\u5bb9\u5668\u53ef\u4ee5\u7528\u6765\u5b9e\u73b0\u5206\u680f\u5e03\u5c40\u3002 \u7ec4\u4ef6\u9ed8\u8ba4\u5206\u4e3a 12 \u680f\uff0c\u5e76\u9884\u7f6e\u4e86\u591a\u79cd\u5e03\u5c40\u65b9\u5f0f\uff0c\u540c\u65f6\u4e5f\u652f\u6301\u81ea\u5b9a\u4e49\u5e03\u5c40\u3002 \u79fb\u52a8\u7aef\u4e00\u884c\u53ea\u652f\u6301 4 \u680f\uff0c\u8d85\u8fc7 4 \u680f\u7684\u4f1a\u6362\u884c\u5904\u7406\uff0c\u5982\u679c\u6362\u884c\u540e\u5355\u884c\u4f1a\u6a2a\u5411\u94fa\u6ee1\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8fd9\u662f\u7ec4\u4ef6\u7684\u57fa\u672c\u7528\u6cd5\uff0c\u5355\u884c\u5206\u4e3a\u7b49\u4efd\u7684\u4e09\u680f\uff0c\u5206\u680f\u7684\u95f4\u9694\u662f 15px \u65f6\u7684\u6548\u679c\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5728\u8bbe\u8ba1\u6001\u4e2d\u4fee\u6539\u3002\u7528\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u884c\u5217\u7528\u6cd5\uff0c\u5728\u53f3\u4fa7\u914d\u7f6e\u4e2d\u7684 \u5e03\u5c40-\u81ea\u5b9a\u4e49\u884c\u5217 \u4e2d\u8f93\u5165\u5404\u680f\u7684\u6bd4\u4f8b\u503c\u5373\u53ef\uff0c\u683c\u5f0f\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"2:2:2:2:4")," "),(0,o.kt)("li",{parentName:"ul"},"\u591a\u884c\u7528\u6cd5\uff0c\u5728\u53f3\u4fa7\u914d\u7f6e\u4e2d\u7684 \u5e03\u5c40-\u81ea\u5b9a\u4e49\u884c\u5217 \u4e2d\u8f93\u5165\u5404\u680f\u7684\u6bd4\u4f8b\u503c\u5373\u53ef\uff0c\u683c\u5f0f\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"2:2:2:2:4:6:6")," \uff0c\n\u4e00\u65e6\u6bd4\u4f8b\u4e4b\u548c\u5927\u4e8e 12 \u65f6\u5c31\u4f1a\u53e6\u6362\u4e00\u884c\u6e32\u67d3\uff0c\u5efa\u8bae\u603b\u6570\u59cb\u7ec8\u4fdd\u6301 12 \u7684\u500d\u6570\u3002\u591a\u884c\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u9700\u8981\n\u8bbe\u7f6e\u884c\u95f4\u8ddd\uff08\u4e0a\u4e0b\u95f4\u8ddd\uff09\u3002")),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(a.Z,{url:"https://www.aliwork.com/developer/columns-layout-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,o.kt)(l.Z,{dataSource:[{attr:"\u5206\u680f\u914d\u7f6e",code:"layout",type:"string",demo:"6:6",desc:"\u6bcf\u884c\u5206\u4e3a\u51e0\u680f\uff0c\u6bcf\u4e00\u680f\u5206\u522b\u5360\u51e0\u683c"},{attr:"\u5bbd\u5ea6",code:"layout2",type:"String",demo:"3:3:6",desc:"\u81ea\u5b9a\u4e49\u5206\u680f"},{attr:"\u5217\u95f4\u8ddd",code:"columnGap",type:"number/string",demo:"0 ",desc:"\u5217\u95f4\u8ddd "},{attr:"\u884c\u95f4\u8ddd",code:"rowGap",type:"number/string ",demo:"0",desc:"\u884c\u95f4\u8ddd"}],mdxType:"AttrTable"}))}h.isMDXComponent=!0}}]);