(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{CJg9:function(e,t,s){"use strict";s.r(t);var r={name:"color-picker-fieldtype-settings",mixins:[s("EACl").a]},n=s("KHd+"),a=Object(n.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ui-select-group",{attrs:{name:"settings.transparency",label:"Transparency",help:"Should this field allow transparency?",autocomplete:"off",options:[{label:"Yes",value:1},{label:"No",value:0}],"has-error":e.errors.has("settings.transparency"),"error-message":e.errors.get("settings.transparency")},model:{value:e.settings.transparency,callback:function(t){e.$set(e.settings,"transparency",t)},expression:"settings.transparency"}}),e._v(" "),s("ui-input-group",{attrs:{name:"settings.default",label:"Default",help:"Default color value for this field.","has-error":e.errors.has("settings.default"),"error-message":e.errors.get("settings.default")},model:{value:e.settings.default,callback:function(t){e.$set(e.settings,"default",t)},expression:"settings.default"}})],1)}),[],!1,null,null,null);t.default=a.exports},EACl:function(e,t,s){"use strict";t.a={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(e){this.$set(this.value.settings,e)}},errors:function(){return this.value.errors||{}}}}}}]);