(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{260:function(e,t,n){},296:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n(25),c=n(33),l=n(31),i=n(32),u=n(1),o=n.n(u),m=(n(260),n(73)),s=n(46),p=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Home"},o.a.createElement("div",{className:"Home-content"},this.generateHelpText()))}},{key:"renderCategoryChildren",value:function(e){return e.children.map(function(t){return o.a.createElement("li",{key:t.name},o.a.createElement(s.a,{to:e.rootUrl+t.url},t.name)," - ",t.description)})}},{key:"generateHelpText",value:function(){var e=this;return m.a.getCategories().map(function(t){return o.a.createElement("div",{key:t.name},o.a.createElement("h2",null,t.name),o.a.createElement("p",null,t.description),o.a.createElement("ul",null,e.renderCategoryChildren(t)))})}}]),t}(u.Component);t.default=p}}]);
//# sourceMappingURL=8.1ea27f90.chunk.js.map