(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{268:function(e,t,a){},297:function(e,t,a){"use strict";a.r(t);var n=a(24),r=a(25),c=a(33),s=a(31),o=a(32),l=a(1),d=a.n(l),i=a(181),b=a(94),p=(a(268),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return d.a.createElement("div",{className:"NavalFlagsTable"},d.a.createElement("div",{className:"NavalFlagsTable-content"},d.a.createElement(b.a,{striped:!0,responsive:!0},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"Letter"),d.a.createElement("th",null,"Flag"))),d.a.createElement("tbody",null,this.renderRows(i.NavalFlags.instance.entries)))))}},{key:"renderRows",value:function(e){return e.map(function(e){var t="data:image/svg+xml,".concat(encodeURIComponent(e.image.render()));return d.a.createElement("tr",{key:e.character},d.a.createElement("td",{className:"flagCharacter"},e.character),d.a.createElement("td",null,d.a.createElement("img",{className:"flagImage",src:t})))})}}]),t}(l.Component));t.default=p},94:function(e,t,a){"use strict";var n=a(3),r=a(4),c=a(6),s=a(5),o=a.n(s),l=a(1),d=a.n(l),i=a(0),b=a.n(i),p=a(2),u={striped:b.a.bool,bordered:b.a.bool,condensed:b.a.bool,hover:b.a.bool,responsive:b.a.bool},m=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){var e,t=this.props,a=t.striped,c=t.bordered,s=t.condensed,l=t.hover,i=t.responsive,b=t.className,u=Object(r.a)(t,["striped","bordered","condensed","hover","responsive","className"]),m=Object(p.f)(u),v=m[0],h=m[1],j=Object(n.a)({},Object(p.d)(v),((e={})[Object(p.e)(v,"striped")]=a,e[Object(p.e)(v,"bordered")]=c,e[Object(p.e)(v,"condensed")]=s,e[Object(p.e)(v,"hover")]=l,e)),O=d.a.createElement("table",Object(n.a)({},h,{className:o()(b,j)}));return i?d.a.createElement("div",{className:Object(p.e)(v,"responsive")},O):O},t}(d.a.Component);m.propTypes=u,m.defaultProps={bordered:!1,condensed:!1,hover:!1,responsive:!1,striped:!1},t.a=Object(p.a)("table",m)}}]);
//# sourceMappingURL=11.a53d3f2d.chunk.js.map