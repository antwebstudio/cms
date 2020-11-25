(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{cUzs:function(t,s,a){"use strict";a.r(s);a("f0Wu");var i={head:{title:function(){return{inner:"Insight"}}},data:function(){return{isValid:null,popular:[],browsers:[]}},methods:{determineBrowserIcon:function(t){return{"Android Webview":"android",Chrome:"chrome",Edge:"edge",Firefox:"firefox","Internet Explorer":"internet-explorer",Opera:"opera",Safari:"safari"}[t]||"default"}},mounted:function(){var t=this;axios.get("/api/insights/check").then((function(s){t.isValid="OK"===s.data.status,t.isValid&&axios.all([axios.get("/api/insights/popular"),axios.get("/api/insights/browsers")]).then(axios.spread(function(t,s){this.popular=t.data.data,this.browsers=_.map(s.data.data,function(t){return{browser:t.browser,sessions:t.sessions,icon:this.determineBrowserIcon(t.browser)}}.bind(this))}.bind(t))).catch((function(t){toast(t.data.message,"failed")}))}))}},e=a("KHd+"),r=Object(e.a)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("portal",{attrs:{to:"title"}},[a("page-title",{attrs:{icon:"chart-bar"}},[t._v("Insight")])],1),t._v(" "),null===t.isValid?a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full"},[a("div",{staticClass:"card"},[null===t.isValid?a("div",{staticClass:"card__body text-center"},[a("fa-icon",{staticClass:"fa-spin mr-3",attrs:{icon:["fas","circle-notch"]}}),t._v(" Loading overview...\n                ")],1):t._e()])])]):t._e(),t._v(" "),!1===t.isValid?a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full"},[a("div",{staticClass:"card"},[!1===t.isValid?a("div",{staticClass:"card__body text-center"},[a("p",[t._v("Configure your Google Analytic settings to gain insight about your website "),a("fa-icon",{staticClass:"text-emoji",attrs:{icon:["fas","hand-peace"]}})],1),t._v(" "),a("router-link",{staticClass:"button items-center",attrs:{to:"/settings/google_analytics#insights"}},[a("fa-icon",{staticClass:"mr-2 text-sm",attrs:{icon:["fas","cog"]}}),t._v(" Go to settings")],1)],1):t._e()])])]):t._e(),t._v(" "),t.isValid?a("analytics-overview"):t._e(),t._v(" "),t.isValid?a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full md:w-1/2 mb-6"},[a("div",{staticClass:"table__wrapper"},[t._m(0),t._v(" "),a("table",{staticClass:"table"},[t._m(1),t._v(" "),a("tbody",t._l(t.popular,(function(s){return a("tr",{key:s.url},[a("td",[a("span",{staticClass:"column__label"},[t._v("Page")]),t._v(" "),a("span",[t._v("\n                                    "+t._s(s.url)+"\n                                ")])]),t._v(" "),a("td",{staticClass:"column__stat actions"},[a("a",{staticClass:"text-gray-800 hover:text-gray-900 mr-4",attrs:{href:s.url,target:"_blank"}},[a("fa-icon",{attrs:{icon:["fas","arrow-alt-circle-right"]}})],1)]),t._v(" "),a("td",{staticClass:"column__stat"},[a("span",{staticClass:"column__label"},[t._v("Views")]),t._v(" "),a("span",[t._v(t._s(s.pageViews))])])])})),0)])])]),t._v(" "),a("div",{staticClass:"col w-full md:w-1/2 mb-6"},[a("div",{staticClass:"table__wrapper"},[t._m(2),t._v(" "),a("table",{staticClass:"table"},[t._m(3),t._v(" "),a("tbody",t._l(t.browsers,(function(s){return a("tr",{key:s.browser},[a("td",[a("span",{staticClass:"column__label"},[t._v("Browser")]),t._v(" "),a("span",[a("span",{staticClass:"text-gray-800 hover:text-gray-900 mr-2"},["default"==s.icon?a("fa-icon",{staticClass:"fa-fw",attrs:{icon:["fas","globe"]}}):a("fa-icon",{staticClass:"fa-fw",attrs:{icon:["fab",s.icon]}})],1),t._v("\n\n                                    "+t._s(s.browser)+"\n                                ")])]),t._v(" "),a("td",{staticClass:"column__stat"},[a("span",{staticClass:"column__label"},[t._v("Sessions")]),t._v(" "),a("span",[t._v(t._s(s.sessions))])])])})),0)])])])]):t._e()],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card__header"},[s("h3",{staticClass:"card__title"},[this._v("Popular Pages")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",[this._v("Page")]),this._v(" "),s("th",{staticClass:"w-10"}),this._v(" "),s("th",{staticClass:"column__stat"},[this._v("Views")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card__header"},[s("h3",{staticClass:"card__title"},[this._v("Browsers")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",[this._v("Browser")]),this._v(" "),s("th",{staticClass:"column__stat"},[this._v("Sessions")])])])}],!1,null,null,null);s.default=r.exports}}]);