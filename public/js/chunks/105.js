(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{"7j+f":function(t,e,a){"use strict";a.r(e),a.d(e,"getSingle",(function(){return c}));var s=a("nUVr"),n={props:{single:{required:!0},matrix:{required:!0},form:{type:Object,required:!0}},computed:{sections:function(){var t=[],e=[];return this.matrix.fieldset&&(t=_.filter(this.matrix.fieldset.sections,(function(t){return"body"==t.placement})),e=_.filter(this.matrix.fieldset.sections,(function(t){return"sidebar"==t.placement}))),{body:t,sidebar:e}}}},r=a("KHd+"),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form-container",{scopedSlots:t._u([{key:"sidebar",fn:function(){return[a("div",{staticClass:"card"},[a("div",{staticClass:"card__body"},[a("p-slug",{attrs:{name:"slug",label:"Slug",monospaced:"",autocomplete:"off",required:"",watch:t.form.name,"has-error":t.form.errors.has("slug"),"error-message":t.form.errors.get("slug")},model:{value:t.form.slug,callback:function(e){t.$set(t.form,"slug",e)},expression:"form.slug"}}),t._v(" "),a("p-toggle",{attrs:{name:"status",label:"Status","true-value":1,"false-value":0},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)]),t._v(" "),t._l(t.sections.sidebar,(function(e){return a("div",{key:e.handle,staticClass:"card"},[a("div",{staticClass:"card__header"},[a("h3",{staticClass:"card__title"},[t._v(t._s(e.name))]),t._v(" "),e.description?a("p",{staticClass:"card__subtitle"},[t._v(t._s(e.description))]):t._e()]),t._v(" "),a("div",{staticClass:"card__body"},t._l(e.fields,(function(e){return a(e.type.id+"-fieldtype",{key:e.handle,tag:"component",staticClass:"form__group",attrs:{field:e,errors:t.form.errors},model:{value:t.form[e.handle],callback:function(a){t.$set(t.form,e.handle,a)},expression:"form[field.handle]"}})})),1)])})),t._v(" "),t.single?a("p-definition-list",[a("p-definition",{attrs:{name:"Status"}},[a("fa-icon",{staticClass:"fa-fw text-xs",class:{"text-success-500":t.single.status,"text-danger-500":!t.single.status},attrs:{icon:["fas","circle"]}}),t._v(" "+t._s(t.single.status?"Enabled":"Disabled")+"\n            ")],1),t._v(" "),a("p-definition",{attrs:{name:"Created At"}},[t._v("\n                "+t._s(t.$moment(t.single.created_at).format("Y-MM-DD, hh:mm a"))+"\n            ")]),t._v(" "),a("p-definition",{attrs:{name:"Updated At"}},[t._v("\n                "+t._s(t.$moment(t.single.updated_at).format("Y-MM-DD, hh:mm a"))+"\n            ")])],1):t._e()]},proxy:!0}])},[a("portal",{attrs:{to:"actions"}},[a("div",{staticClass:"buttons"},[a("router-link",{staticClass:"button button--secondary",attrs:{to:{name:"dashboard"}}},[t._v("Go Back")]),t._v(" "),a("button",{staticClass:"button button--primary",class:{"button--disabled":!t.form.hasChanges},attrs:{type:"submit",disabled:!t.form.hasChanges},on:{click:function(e){return e.preventDefault(),t.$parent.submit(e)}}},[t._v("Save")])],1)]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card__body"},[t.matrix.show_name_field?a("p-title",{attrs:{name:"name",label:t.matrix.name_label||"Name",autocomplete:"off",autofocus:"",required:"",placeholder:t.matrix.name_label||"Name","has-error":t.form.errors.has("name"),"error-message":t.form.errors.get("name")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}):t._e(),t._v(" "),t.sections.body.length>0?a("p-tabs",t._l(t.sections.body,(function(e){return a("p-tab",{key:e.handle,attrs:{name:e.name}},t._l(e.fields,(function(e){return a(e.type.id+"-fieldtype",{key:e.handle,tag:"component",staticClass:"form__group",attrs:{field:e,errors:t.form.errors},model:{value:t.form[e.handle],callback:function(a){t.$set(t.form,e.handle,a)},expression:"form[field.handle]"}})})),1)})),1):a("div",{staticClass:"text-center"},[a("p",[t._v("Things are looking a little empty here!")])])],1)])],1)}),[],!1,null,null,null).exports,o=a("LvDl"),l=a.n(o);function c(t,e){axios.get("/api/singles/"+t).then((function(t){var a={},s={};l.a.has(t,"data.data.single")?(s=t.data.data.matrix,a=t.data.data.single):(s=t.data.data,a={name:s.name,slug:s.slug,status:1});var n={name:a.name,slug:a.slug,status:a.status};s.fieldset&&l.a.forEach(s.fieldset.sections,(function(t){l.a.forEach(t.fields,(function(t){n[t.handle]=a[t.handle]}))})),e(null,a,s,n)}))}var d={name:"edit-single",head:{title:function(){return{inner:l.a.has(this.form,"name")?this.form.name:"Loading..."}}},data:function(){return{matrix:{},single:{},form:null}},components:{"shared-form":i},computed:{sections:function(){var t=[],e=[];return this.matrix.fieldset&&(t=l.a.filter(this.matrix.fieldset.sections,(function(t){return"body"==t.placement})),e=l.a.filter(this.matrix.fieldset.sections,(function(t){return"sidebar"==t.placement}))),{body:t,sidebar:e}}},methods:{submit:function(){var t=this;this.form.patch("/api/singles/"+this.matrix.id).then((function(e){toast("Single saved successfully","success"),t.$router.go()})).catch((function(t){toast(t.message,"failed")}))}},beforeRouteEnter:function(t,e,a){c(t.params.single,(function(t,e,n,r){a((function(t){t.matrix=n,t.single=e,t.form=new s.a(r,!0),t.$emit("updateHead")}))}))},beforeRouteUpdate:function(t,e,a){var n=this;c(t.params.single,(function(t,e,a,r){n.matrix=a,n.single=e,n.form=new s.a(r,!0),n.$emit("updateHead")})),a()}},u=Object(r.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("portal",{attrs:{to:"title"}},[a("page-title",{attrs:{icon:t.matrix.icon||"pencil-alt"}},[t._v("Edit "+t._s(t.matrix.reference_singular))])],1),t._v(" "),a("portal",{attrs:{to:"subtitle"}},[t._v(t._s(t.matrix.description))]),t._v(" "),t.form?a("shared-form",{attrs:{form:t.form,single:t.single,matrix:t.matrix}}):t._e()],1)}),[],!1,null,null,null);e.default=u.exports}}]);