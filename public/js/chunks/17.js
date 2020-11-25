(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{LgbP:function(e,t,a){"use strict";a.r(t),a.d(t,"getTaxonomy",(function(){return n}));var s=a("dhqo"),o=a.n(s),r=a("nUVr");function n(e,t){axios.get("/api/taxonomies/".concat(e)).then((function(e){var a=e.data.data,s={name:"",slug:"",status:1};a.fieldset&&_.forEach(a.fieldset.sections,(function(e){_.forEach(e.fields,(function(e){s[e.handle]=e.default}))})),t(null,a,s)})).catch((function(e){t(new Error("The requested taxonomy could not be found"))}))}var i={head:{title:function(){return{inner:"Create a "+_.startCase(this.singular)||!1}}},data:function(){return{taxonomy:{},form:new r.a({})}},components:{"shared-form":a("quZI").a},computed:{sections:function(){var e=[],t=[];return this.taxonomy.fieldset&&(e=_.filter(this.taxonomy.fieldset.sections,(function(e){return"body"==e.placement})),t=_.filter(this.taxonomy.fieldset.sections,(function(e){return"sidebar"==e.placement}))),{body:e,sidebar:t}},singular:function(){return this.taxonomy.name?o.a.singular(this.taxonomy.name):""}},methods:{submit:function(){var e=this;this.form.post("/api/taxonomies/".concat(this.taxonomy.id,"/terms")).then((function(t){toast("Term saved successfully","success"),e.$router.push("/taxonomies/".concat(e.taxonomy.id))})).catch((function(e){toast(e.response.data.message,"failed")}))}},beforeRouteEnter:function(e,t,a){n(e.params.taxonomy,(function(e,t,s){a(e?function(t){t.$router.push("/taxonomies/"+t.$router.currentRoute.params.taxonomy),toast(e.toString(),"danger")}:function(e){e.taxonomy=t,e.form=new r.a(s,!0),e.$emit("updateHead")})}))}},u=a("KHd+"),l=Object(u.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("portal",{attrs:{to:"title"}},[a("page-title",{attrs:{icon:e.taxonomy.icon}},[e._v("Create "+e._s(e.singular))])],1),e._v(" "),a("portal",{attrs:{to:"subtitle"}},[e._v(e._s(e.taxonomy.description))]),e._v(" "),a("shared-form",{attrs:{taxonomy:e.taxonomy,form:e.form,submit:e.submit}})],1)}),[],!1,null,null,null);t.default=l.exports},dhqo:function(e,t,a){e.exports=function(){var e=[],t=[],a={},s={},o={};function r(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function n(e,t){return e===t?t:e===e.toLowerCase()?t.toLowerCase():e===e.toUpperCase()?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.substr(1).toLowerCase():t.toLowerCase()}function i(e,t){return e.replace(/\$(\d{1,2})/g,(function(e,a){return t[a]||""}))}function u(e,t){return e.replace(t[0],(function(a,s){var o=i(t[1],arguments);return n(""===a?e[s-1]:a,o)}))}function l(e,t,s){if(!e.length||a.hasOwnProperty(e))return t;for(var o=s.length;o--;){var r=s[o];if(r[0].test(t))return u(t,r)}return t}function c(e,t,a){return function(s){var o=s.toLowerCase();return t.hasOwnProperty(o)?n(s,o):e.hasOwnProperty(o)?n(s,e[o]):l(o,s,a)}}function m(e,t,a,s){return function(s){var o=s.toLowerCase();return!!t.hasOwnProperty(o)||!e.hasOwnProperty(o)&&l(o,o,a)===o}}function d(e,t,a){return(a?t+" ":"")+(1===t?d.singular(e):d.plural(e))}return d.plural=c(o,s,e),d.isPlural=m(o,s,e),d.singular=c(s,o,t),d.isSingular=m(s,o,t),d.addPluralRule=function(t,a){e.push([r(t),a])},d.addSingularRule=function(e,a){t.push([r(e),a])},d.addUncountableRule=function(e){"string"!=typeof e?(d.addPluralRule(e,"$0"),d.addSingularRule(e,"$0")):a[e.toLowerCase()]=!0},d.addIrregularRule=function(e,t){t=t.toLowerCase(),e=e.toLowerCase(),o[e]=t,s[t]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return d.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return d.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return d.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(d.addUncountableRule),d}()},quZI:function(e,t,a){"use strict";var s={props:{taxonomy:{type:Object,required:!0},term:{required:!1},form:{type:Object,required:!0},submit:{required:!0}},computed:{sections:function(){var e=[],t=[];return this.taxonomy.fieldset&&(e=_.filter(this.taxonomy.fieldset.sections,(function(e){return"body"==e.placement})),t=_.filter(this.taxonomy.fieldset.sections,(function(e){return"sidebar"==e.placement}))),{body:e,sidebar:t}}}},o=a("KHd+"),r=Object(o.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form-container",{scopedSlots:e._u([{key:"sidebar",fn:function(){return[a("div",{staticClass:"card"},[a("div",{staticClass:"card__body"},[a("p-slug",{attrs:{name:"slug",label:"Slug",monospaced:"",autocomplete:"off",required:"",watch:e.form.name,"has-error":e.form.errors.has("slug"),"error-message":e.form.errors.get("slug")},model:{value:e.form.slug,callback:function(t){e.$set(e.form,"slug",t)},expression:"form.slug"}}),e._v(" "),a("p-toggle",{attrs:{name:"status",label:"Status","true-value":1,"false-value":0},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)]),e._v(" "),e._l(e.sections.sidebar,(function(t){return a("div",{key:t.handle,staticClass:"card"},[a("div",{staticClass:"card__header"},[a("h3",{staticClass:"card__title"},[e._v(e._s(t.name))]),e._v(" "),t.description?a("p",{staticClass:"card__subtitle"},[e._v(e._s(t.description))]):e._e()]),e._v(" "),a("div",{staticClass:"card__body"},e._l(t.fields,(function(t){return a(t.type.id+"-fieldtype",{key:t.handle,tag:"component",staticClass:"form__group",attrs:{field:t,errors:e.form.errors},model:{value:e.form[t.handle],callback:function(a){e.$set(e.form,t.handle,a)},expression:"form[field.handle]"}})})),1)])})),e._v(" "),e.term?a("p-definition-list",[a("p-definition",{attrs:{name:"Status"}},[a("fa-icon",{staticClass:"fa-fw text-xs",class:{"text-success-500":e.term.status,"text-danger-500":!e.term.status},attrs:{icon:["fas","circle"]}}),e._v(" "+e._s(e.term.status?"Enabled":"Disabled")+"\n                ")],1),e._v(" "),a("p-definition",{attrs:{name:"Created At"}},[e._v("\n                    "+e._s(e.$moment(e.term.created_at).format("Y-MM-DD, hh:mm a"))+"\n                ")]),e._v(" "),a("p-definition",{attrs:{name:"Updated At"}},[e._v("\n                    "+e._s(e.$moment(e.term.updated_at).format("Y-MM-DD, hh:mm a"))+"\n                ")])],1):e._e()]},proxy:!0}])},[a("portal",{attrs:{to:"actions"}},[a("div",{staticClass:"buttons"},[e.taxonomy.id?a("router-link",{staticClass:"button",attrs:{to:{name:"terms.index",params:{taxonomy:e.taxonomy.id}}}},[e._v("Go Back")]):e._e(),e._v(" "),a("button",{staticClass:"button button--primary",class:{"button--disabled":!e.form.hasChanges},attrs:{type:"submit",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save")])],1)]),e._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card__body"},[a("p-title",{attrs:{name:"name",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),e.sections.body.length>0?a("p-tabs",e._l(e.sections.body,(function(t){return a("p-tab",{key:t.handle,attrs:{name:t.name}},e._l(t.fields,(function(t){return a(t.type.id+"-fieldtype",{key:t.handle,tag:"component",staticClass:"form__group",attrs:{field:t,errors:e.form.errors},model:{value:e.form[t.handle],callback:function(a){e.$set(e.form,t.handle,a)},expression:"form[field.handle]"}})})),1)})),1):e._e(),e._v(" "),0==e.sections.body.length&&e.taxonomy.id?a("div",{staticClass:"text-center"},[a("p",[e._v("Things are looking a little empty here!")]),e._v(" "),a("router-link",{staticClass:"button",attrs:{to:{name:"taxonomies.edit",params:{taxonomy:e.taxonomy.id}}}},[e._v("Configure your taxonomy")])],1):e._e()],1)])],1)}),[],!1,null,null,null);t.a=r.exports}}]);