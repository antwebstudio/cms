(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{"qt+H":function(e,t,r){"use strict";r.r(t);var a=r("VrN/"),n=r.n(a),i=r("DlQD"),o=r.n(i);r("RKCW"),r("mki7"),r("19Vz");var l={name:"markdown-fieldtype",data:function(){return{codemirror:null}},props:{field:{type:Object,required:!0},value:{required:!1,default:""}},computed:{preview:function(){var e=o.a.lexer(this.value||"");return o.a.parser(e)}},mounted:function(){var e=this;this.codemirror=n.a.fromTextArea(document.getElementById(this.field.handle),{theme:"fusion",mode:{name:"gfm",highlightFormatting:!0,fencedCodeBlockHighlighting:!0},lineWrapping:!0,viewportMargin:1/0,keyMap:"sublime"}),setTimeout((function(){e.codemirror.refresh()}),1),this.codemirror.on("change",(function(t){e.$emit("input",t.getValue())}))}},s=r("KHd+"),d=Object(s.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form__group"},[r("label",{staticClass:"form__label",attrs:{for:e.field.handle},domProps:{innerHTML:e._s(e.field.name)}}),e._v(" "),r("p-tabs",[r("p-tab",{attrs:{name:"Markdown"}},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{name:e.field.handle,id:e.field.handle,cols:"30",rows:"12",autofocus:""},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}})]),e._v(" "),r("p-tab",{attrs:{name:"Preview"}},[r("div",{staticClass:"markdown-body",domProps:{innerHTML:e._s(e.preview)}})])],1)],1)}),[],!1,null,null,null);t.default=d.exports}}]);