(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{179:function(e,t,n){"use strict";var a=n(24),r=n(25),o=n(33),c=n(31),i=n(32),s=n(1),u=n(180),l=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.restoreState(),this.updateState()}},{key:"updateState",value:function(){this.onUpdateState(),this.saveState()}},{key:"saveState",value:function(){u.a.setObject(this.getLocalStorageKey(),this.onSaveState())}},{key:"restoreState",value:function(){this.onRestoreState(u.a.getObject(this.getLocalStorageKey()))}}]),t}(s.Component);t.a=l},180:function(e,t,n){"use strict";var a=n(24),r=n(25),o=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"isSupported",value:function(){if(void 0===this._isSupported){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),this._isSupported=!0}catch(n){this._isSupported=n instanceof DOMException&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&0!==e.length}}return this._isSupported}},{key:"getItem",value:function(e){return this.isSupported()?window.localStorage.getItem(this.getKey(e)):null}},{key:"getObject",value:function(e){if(this.isSupported()){var t=window.localStorage.getItem(this.getKey(e));if(null!==t)return JSON.parse(t)}return null}},{key:"setItem",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),t)}},{key:"setObject",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),JSON.stringify(t))}},{key:"clear",value:function(){this.isSupported()&&window.localStorage.clear()}},{key:"getKey",value:function(e){return"".concat(this._prefix,"_").concat(e)}}]),e}();o._isSupported=void 0,o._prefix="puzztool",t.a=o},182:function(e,t,n){"use strict";var a=n(31);function r(e,t,n){return(r="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(a.a)(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}n.d(t,"a",function(){return r})},192:function(e,t,n){},197:function(e,t,n){"use strict";var a=n(24),r=n(25),o=n(33),c=n(31),i=n(182),s=n(32),u=n(1),l=n.n(u),p=n(50),h=n(26),d=n(3),f=n(4),y=n(6),m=n(0),v=n.n(m),b=n(9),O=n.n(b),g=n(34),j=n.n(g),k=n(7),C=n(14),S=n(49),_=n(44),E={type:v.a.oneOf(["checkbox","radio"]),name:v.a.string,checked:v.a.bool,disabled:v.a.bool,onChange:v.a.func,value:v.a.any.isRequired},N=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.name,a=e.checked,r=e.type,o=e.onChange,c=e.value,i=Object(f.a)(e,["children","name","checked","type","onChange","value"]),s=i.disabled;return l.a.createElement(_.a,Object(d.a)({},i,{active:!!a,componentClass:"label"}),l.a.createElement("input",{name:n,type:r,autoComplete:"off",value:c,checked:!!a,disabled:!!s,onChange:o}),t)},t}(l.a.Component);N.propTypes=E;var x=N,w={name:v.a.string,value:v.a.any,onChange:v.a.func,type:v.a.oneOf(["checkbox","radio"]).isRequired},K=function(e){function t(){return e.apply(this,arguments)||this}Object(y.a)(t,e);var n=t.prototype;return n.getValues=function(){var e=this.props.value;return null==e?[]:[].concat(e)},n.handleToggle=function(e){var t=this.props,n=t.type,a=t.onChange,r=this.getValues(),o=-1!==r.indexOf(e);"radio"!==n?a(o?r.filter(function(t){return t!==e}):r.concat([e])):o||a(e)},n.render=function(){var e=this,t=this.props,n=t.children,a=t.type,r=t.name,o=Object(f.a)(t,["children","type","name"]),c=this.getValues();return"radio"!==a||r||O()(!1),delete o.onChange,delete o.value,l.a.createElement(S.a,Object(d.a)({},o,{"data-toggle":"buttons"}),C.a.map(n,function(t){var n=t.props,o=n.value,i=n.onChange;return l.a.cloneElement(t,{type:a,name:t.name||r,checked:-1!==c.indexOf(o),onChange:Object(k.a)(i,function(){return e.handleToggle(o)})})}))},t}(l.a.Component);K.propTypes=w,K.defaultProps={type:"radio"};var R=j()(K,{value:"onChange"});R.Button=x;var T=R,A=n(179),D=(n(192),function(e){function t(e,n){var r;return Object(a.a)(this,t),(r=Object(o.a)(this,Object(c.a)(t).call(this,e)))._cipher=void 0,r._conversion=2,r._input=void 0,r._cipher=n,r.state={conversion:0,key:"",output:"",text:""},r}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){Object(i.a)(Object(c.a)(t.prototype),"componentDidMount",this).call(this),this._input&&this._input.focus()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"KeyedCipherStreamBase"},l.a.createElement(p.a,{className:"KeyedCipherStreamBase-input",inputRef:function(t){e._input=t},onChange:function(t){return e.onTextChanged(t)},placeholder:"Text",value:this.state.text}),l.a.createElement(p.a,{className:"KeyedCipherStreamBase-input",onChange:function(t){return e.onKeyChanged(t)},placeholder:"Key",value:this.state.key}),l.a.createElement(h.a,{className:"KeyedCipherStreamBase-commands"},l.a.createElement(T,{name:"KeyedCipherStreamBase-conversion",onChange:function(t){return e.onConversionChanged(t)},type:"radio",value:this.state.conversion},l.a.createElement(x,{value:1},"Encrypt"),l.a.createElement(x,{value:2},"Decrypt")),l.a.createElement(S.a,null,l.a.createElement(_.a,{onClick:function(t){return e.onClearClick(t)}},"Clear"))),l.a.createElement("pre",{className:"KeyedCipherStreamBase-output"},this.state.output))}},{key:"onSaveState",value:function(){return{conversion:this._conversion,key:this._cipher.key,text:this._cipher.text}}},{key:"onRestoreState",value:function(e){null!==e&&(this._cipher.text=e.text,this._cipher.key=e.key,this._conversion=e.conversion)}},{key:"onUpdateState",value:function(){this.setState({conversion:this._conversion,key:this._cipher.key,output:1===this._conversion?this._cipher.encrypt():this._cipher.decrypt(),text:this._cipher.text})}},{key:"onTextChanged",value:function(e){var t=e.target;this._cipher.text=t.value,this.updateState()}},{key:"onKeyChanged",value:function(e){var t=e.target;this._cipher.key=t.value,this.updateState()}},{key:"onConversionChanged",value:function(e){this._conversion=e,this.updateState()}},{key:"onClearClick",value:function(e){this._cipher.key="",this._cipher.text="",this._conversion=2,this.updateState()}}]),t}(A.a));t.a=D},236:function(e,t,n){},26:function(e,t,n){"use strict";var a=n(3),r=n(4),o=n(6),c=n(5),i=n.n(c),s=n(1),u=n.n(s),l=n(2),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=Object(r.a)(e,["className"]),o=Object(l.f)(n),c=o[0],s=o[1],p=Object(l.d)(c);return u.a.createElement("div",Object(a.a)({},s,{role:"toolbar",className:i()(t,p)}))},t}(u.a.Component);t.a=Object(l.a)("btn-toolbar",p)},311:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n(25),o=n(33),c=n(31),i=n(32),s=n(1),u=n.n(s),l=n(197),p=n(181),h=function(e){function t(e){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).call(this,e,new p.AutoKeyString))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"getLocalStorageKey",value:function(){return"AutokeyStream"}}]),t}(l.a),d=(n(236),function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"Autokey"},u.a.createElement("div",{className:"Autokey-content"},u.a.createElement("div",{className:"Autokey-info"},u.a.createElement("h2",null,"Autokey Cipher"),u.a.createElement("p",null,"An autokey cipher is similar to a Vigenere cipher, where the plaintext is used after the key runs out. This addresses the key length repetition issues with the Vigenere cipher."),u.a.createElement("p",null,"Enter the text and key, and select encrypt or decrypt.")),u.a.createElement(h,null)))}}]),t}(s.Component));t.default=d},50:function(e,t,n){"use strict";var a=n(3),r=n(4),o=n(6),c=n(5),i=n.n(c),s=n(1),u=n.n(s),l=n(0),p=n.n(l),h=n(18),d=n.n(h),f=(n(10),n(2)),y={glyph:p.a.string.isRequired},m=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e,t=this.props,n=t.glyph,o=t.className,c=Object(r.a)(t,["glyph","className"]),s=Object(f.f)(c),l=s[0],p=s[1],h=Object(a.a)({},Object(f.d)(l),((e={})[Object(f.e)(l,n)]=!0,e));return u.a.createElement("span",Object(a.a)({},p,{className:i()(o,h)}))},t}(u.a.Component);m.propTypes=y;var v=Object(f.a)("glyphicon",m),b={$bs_formGroup:p.a.object},O=function(e){function t(){return e.apply(this,arguments)||this}Object(o.a)(t,e);var n=t.prototype;return n.getGlyph=function(e){switch(e){case"success":return"ok";case"warning":return"warning-sign";case"error":return"remove";default:return null}},n.renderDefaultFeedback=function(e,t,n,r){var o=this.getGlyph(e&&e.validationState);return o?u.a.createElement(v,Object(a.a)({},r,{glyph:o,className:i()(t,n)})):null},n.render=function(){var e=this.props,t=e.className,n=e.children,o=Object(r.a)(e,["className","children"]),c=Object(f.f)(o),s=c[0],l=c[1],p=Object(f.d)(s);if(!n)return this.renderDefaultFeedback(this.context.$bs_formGroup,t,p,l);var h=u.a.Children.only(n);return u.a.cloneElement(h,Object(a.a)({},l,{className:i()(h.props.className,t,p)}))},t}(u.a.Component);O.defaultProps={bsRole:"feedback"},O.contextTypes=b;var g=Object(f.a)("form-control-feedback",O),j={componentClass:d.a},k=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,n=e.className,o=Object(r.a)(e,["componentClass","className"]),c=Object(f.f)(o),s=c[0],l=c[1],p=Object(f.d)(s);return u.a.createElement(t,Object(a.a)({},l,{className:i()(n,p)}))},t}(u.a.Component);k.propTypes=j,k.defaultProps={componentClass:"p"};var C=Object(f.a)("form-control-static",k),S=n(11),_={componentClass:d.a,type:p.a.string,id:p.a.string,inputRef:p.a.func},E={$bs_formGroup:p.a.object},N=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e,t=this.context.$bs_formGroup,n=t&&t.controlId,o=this.props,c=o.componentClass,s=o.type,l=o.id,p=void 0===l?n:l,h=o.inputRef,d=o.className,y=o.bsSize,m=Object(r.a)(o,["componentClass","type","id","inputRef","className","bsSize"]),v=Object(f.f)(m),b=v[0],O=v[1];if("file"!==s&&(e=Object(f.d)(b)),y){var g=S.a[y]||y;e[Object(f.e)({bsClass:"input"},g)]=!0}return u.a.createElement(c,Object(a.a)({},O,{type:s,id:p,ref:h,className:i()(d,e)}))},t}(u.a.Component);N.propTypes=_,N.defaultProps={componentClass:"input"},N.contextTypes=E,N.Feedback=g,N.Static=C;t.a=Object(f.a)("form-control",Object(f.b)([S.b.SMALL,S.b.LARGE],N))}}]);
//# sourceMappingURL=4.278bcd0a.chunk.js.map