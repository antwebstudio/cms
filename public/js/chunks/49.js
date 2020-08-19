(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{dmau:function(e,t,r){"use strict";r.r(t);r("LvDl");var n={head:{title:function(){return{inner:"Roles"}}},mixins:[r("udk0").default],data:function(){return{endpoint:"/datatable/roles"}},methods:{destroy:function(e){axios.delete("/api/roles/"+e).then((function(e){toast("Role successfully deleted.","success"),bus().$emit("refresh-datatable-roles")}))}}},o=r("KHd+"),a=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("portal",{attrs:{to:"title"}},[r("app-title",{attrs:{icon:"user-shield"}},[e._v("Roles")])],1),e._v(" "),r("portal",{attrs:{to:"actions"}},[r("router-link",{staticClass:"button",attrs:{to:{name:"roles.create"}}},[e._v("Create Role")])],1),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"content-container"},[r("p-table",{key:"roles_table",attrs:{endpoint:e.endpoint,id:"roles","sort-by":"label"},scopedSlots:e._u([{key:"label",fn:function(t){return[r("router-link",{attrs:{to:{name:"roles.edit",params:{role:t.record.id}}}},[e._v(e._s(t.record.label))])]}},{key:"description",fn:function(t){return[r("span",{staticClass:"text-gray-800 text-sm"},[e._v(e._s(t.record.description))])]}},{key:"actions",fn:function(t){return[r("p-actions",{key:"role_"+t.record.id+"_actions",attrs:{id:"role_"+t.record.id+"_actions"}},[r("p-dropdown-link",{attrs:{to:{name:"roles.edit",params:{role:t.record.id}}},on:{click:function(e){e.preventDefault()}}},[e._v("\n                            Edit\n                        ")]),e._v(" "),e.isRemovable(t.record.name)?r("p-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-role",value:t.record,expression:"table.record",arg:"delete-role"}],attrs:{classes:"link--danger"},on:{click:function(e){e.preventDefault()}}},[e._v("\n                            Delete\n                        ")]):e._e()],1)]}}])})],1)]),e._v(" "),r("portal",{attrs:{to:"modals"}},[r("p-modal",{attrs:{name:"delete-role",title:"Delete Role"},scopedSlots:e._u([{key:"footer",fn:function(t){return[r("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-role",arg:"delete-role"}],staticClass:"ml-3",attrs:{theme:"danger"},on:{click:function(r){return e.destroy(t.data.id)}}},[e._v("Delete")]),e._v(" "),r("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-role",arg:"delete-role"}]},[e._v("Cancel")])]}}])},[r("p",[e._v("Are you sure you want to permenantly delete this role?")])])],1)],1)}),[],!1,null,null,null);t.default=a.exports},udk0:function(e,t,r){"use strict";r.r(t),t.default={methods:{isAssignable:function(e){return!_.includes(["guest"],e)},isRemovable:function(e){return!_.includes(["owner","admin","user","guest"],e)},hasPermissions:function(e){return!_.includes(["owner"],e)}}}}}]);