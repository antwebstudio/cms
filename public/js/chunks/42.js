(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{D7pu:function(e,t,r){"use strict";r.r(t);var s={name:"redactor-fieldtype-settings",mixins:[r("EACl").a]},n=r("KHd+"),l=Object(n.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p-input",{attrs:{name:"settings.placeholder",label:"Placeholder",help:"Text that will appear inside the WYSIWYG element's content area when empty.",autocomplete:"off","has-error":e.errors.has("settings.placeholder"),"error-message":e.errors.get("settings.placeholder")},model:{value:e.settings.placeholder,callback:function(t){e.$set(e.settings,"placeholder",t)},expression:"settings.placeholder"}})],1)}),[],!1,null,null,null);t.default=l.exports},EACl:function(e,t,r){"use strict";t.a={props:{value:{type:Object,required:!0}},computed:{settings:function(){return this.value.settings||{}},errors:function(){return this.value.errors||{}}}}}}]);