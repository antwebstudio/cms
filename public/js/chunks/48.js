(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"cv/T":function(e,a,t){"use strict";t.r(a);var i=t("dhqo"),s=t.n(i),r=t("nUVr"),o={name:"taxonomy-fieldtype",data:function(){return{taxonomy:{},form:!1}},computed:{term:function(){return this.taxonomy.name?this.taxonomy.name.toLowerCase():"terms"},singular:function(){return s.a.singular(this.term)},values:{get:function(){return this.value||[]},set:function(e){this.$emit("input",e)}}},props:{field:{type:Object,required:!0},value:{required:!1,default:function(){return[]}}},methods:{submit:function(){var e=this;this.form.post("/api/taxonomies/".concat(this.taxonomy.id,"/terms")).then((function(a){toast("Term saved successfully","success"),e.fetchTaxonomy(),e.resetForm()})).catch((function(e){toast(e.message,"failed")}))},resetForm:function(){this.form=new r.a({name:"",slug:"",status:1})},fetchTaxonomy:function(){var e=this;axios.get("/api/taxonomies/".concat(this.field.settings.taxonomy)).then((function(a){e.taxonomy=a.data.data}))}},mounted:function(){this.fetchTaxonomy(),this.resetForm(),this.values=_.map(this.value,"id")||[]}},n=t("KHd+"),u=Object(n.a)(o,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e.taxonomy.terms&&e.taxonomy.terms.length>0?t("ui-checkbox-group",{attrs:{label:e.field.name,help:e.field.help}},e._l(e.taxonomy.terms,(function(a){return t("ui-checkbox",{key:a.id,attrs:{name:e.field.handle,id:a.id,"native-value":a.id},model:{value:e.values,callback:function(a){e.values=a},expression:"values"}},[[e._v("\n                "+e._s(a.name)+"\n            ")]],2)})),1):t("p",{staticClass:"text-sm leading-none"},[e._v("Add a "+e._s(e.singular)+" below.")]),e._v(" "),e.form?t("div",{staticClass:"border-t pt-6"},[t("ui-input-group",{staticClass:"mb-2",attrs:{name:e.term+"_name",placeholder:"New "+e.singular+" name...",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.submit(a)}},model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}}),e._v(" "),t("ui-button",{on:{click:function(a){return a.preventDefault(),e.submit(a)}}},[e._v("Add "+e._s(e.singular))])],1):e._e()],1)}),[],!1,null,null,null);a.default=u.exports},dhqo:function(e,a,t){e.exports=function(){var e=[],a=[],t={},i={},s={};function r(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function o(e,a){return e===a?a:e===e.toLowerCase()?a.toLowerCase():e===e.toUpperCase()?a.toUpperCase():e[0]===e[0].toUpperCase()?a.charAt(0).toUpperCase()+a.substr(1).toLowerCase():a.toLowerCase()}function n(e,a){return e.replace(/\$(\d{1,2})/g,(function(e,t){return a[t]||""}))}function u(e,a){return e.replace(a[0],(function(t,i){var s=n(a[1],arguments);return o(""===t?e[i-1]:t,s)}))}function l(e,a,i){if(!e.length||t.hasOwnProperty(e))return a;for(var s=i.length;s--;){var r=i[s];if(r[0].test(a))return u(a,r)}return a}function c(e,a,t){return function(i){var s=i.toLowerCase();return a.hasOwnProperty(s)?o(i,s):e.hasOwnProperty(s)?o(i,e[s]):l(s,i,t)}}function m(e,a,t,i){return function(i){var s=i.toLowerCase();return!!a.hasOwnProperty(s)||!e.hasOwnProperty(s)&&l(s,s,t)===s}}function h(e,a,t){return(t?a+" ":"")+(1===a?h.singular(e):h.plural(e))}return h.plural=c(s,i,e),h.isPlural=m(s,i,e),h.singular=c(i,s,a),h.isSingular=m(i,s,a),h.addPluralRule=function(a,t){e.push([r(a),t])},h.addSingularRule=function(e,t){a.push([r(e),t])},h.addUncountableRule=function(e){"string"!=typeof e?(h.addPluralRule(e,"$0"),h.addSingularRule(e,"$0")):t[e.toLowerCase()]=!0},h.addIrregularRule=function(e,a){a=a.toLowerCase(),e=e.toLowerCase(),s[e]=a,i[a]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return h.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return h.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return h.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(h.addUncountableRule),h}()}}]);