(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{EACl:function(e,t,s){"use strict";t.a={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(e){this.$set(this.value.settings,e)}},errors:function(){return this.value.errors||{}}}}},y8AT:function(e,t,s){"use strict";s.r(t);var r={name:"textarea-fieldtype-settings",mixins:[s("EACl").a]},n=s("KHd+"),l=Object(n.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("p-input",{attrs:{name:"settings.placeholder",label:"Placeholder",help:"Text that will appear inside the textarea element's content area when empty.",autocomplete:"off","has-error":e.errors.has("settings.placeholder"),"error-message":e.errors.get("settings.placeholder")},model:{value:e.settings.placeholder,callback:function(t){e.$set(e.settings,"placeholder",t)},expression:"settings.placeholder"}})],1)}),[],!1,null,null,null);t.default=l.exports}}]);