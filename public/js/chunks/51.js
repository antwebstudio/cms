(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{eUqz:function(e,t){var n;(n=Redactor).add("plugin","table",{translations:{en:{table:"Table","insert-table":"Insert table","insert-row-above":"Insert row above","insert-row-below":"Insert row below","insert-column-left":"Insert column left","insert-column-right":"Insert column right","add-head":"Add head","delete-head":"Delete head","delete-column":"Delete column","delete-row":"Delete row","delete-table":"Delete table"}},init:function(e){this.app=e,this.lang=e.lang,this.opts=e.opts,this.caret=e.caret,this.editor=e.editor,this.toolbar=e.toolbar,this.component=e.component,this.inspector=e.inspector,this.insertion=e.insertion,this.selection=e.selection},ondropdown:{table:{observe:function(e){this._observeDropdown(e)}}},onbottomclick:function(){this.insertion.insertToEnd(this.editor.getLastNode(),"table")},start:function(){var e={observe:"table","insert-table":{title:this.lang.get("insert-table"),api:"plugin.table.insert"},"insert-row-above":{title:this.lang.get("insert-row-above"),classname:"redactor-table-item-observable",api:"plugin.table.addRowAbove"},"insert-row-below":{title:this.lang.get("insert-row-below"),classname:"redactor-table-item-observable",api:"plugin.table.addRowBelow"},"insert-column-left":{title:this.lang.get("insert-column-left"),classname:"redactor-table-item-observable",api:"plugin.table.addColumnLeft"},"insert-column-right":{title:this.lang.get("insert-column-right"),classname:"redactor-table-item-observable",api:"plugin.table.addColumnRight"},"add-head":{title:this.lang.get("add-head"),classname:"redactor-table-item-observable",api:"plugin.table.addHead"},"delete-head":{title:this.lang.get("delete-head"),classname:"redactor-table-item-observable",api:"plugin.table.deleteHead"},"delete-column":{title:this.lang.get("delete-column"),classname:"redactor-table-item-observable",api:"plugin.table.deleteColumn"},"delete-row":{title:this.lang.get("delete-row"),classname:"redactor-table-item-observable",api:"plugin.table.deleteRow"},"delete-table":{title:this.lang.get("delete-table"),classname:"redactor-table-item-observable",api:"plugin.table.deleteTable"}},t={title:this.lang.get("table")},n=this.toolbar.addButtonBefore("link","table",t);n.setIcon('<i class="re-icon-table"></i>'),n.setDropdown(e)},insert:function(){for(var e=this.component.create("table"),t=0;t<2;t++)e.addRow(3);e=this.insertion.insertHtml(e),this.caret.setStart(e)},addRowAbove:function(){var e=this._getComponent();if(e){var t=this.selection.getCurrent(),n=e.addRowTo(t,"before");this.caret.setStart(n)}},addRowBelow:function(){var e=this._getComponent();if(e){var t=this.selection.getCurrent(),n=e.addRowTo(t,"after");this.caret.setStart(n)}},addColumnLeft:function(){var e=this._getComponent();if(e){var t=this.selection.getCurrent();this.selection.save(),e.addColumnTo(t,"left"),this.selection.restore()}},addColumnRight:function(){var e=this._getComponent();if(e){var t=this.selection.getCurrent();this.selection.save(),e.addColumnTo(t,"right"),this.selection.restore()}},addHead:function(){var e=this._getComponent();e&&(this.selection.save(),e.addHead(),this.selection.restore())},deleteHead:function(){var e=this._getComponent();if(e){var t=this.selection.getCurrent();0!==n.dom(t).closest("thead").length?(e.removeHead(),this.caret.setStart(e)):(this.selection.save(),e.removeHead(),this.selection.restore())}},deleteColumn:function(){var e=this._getComponent();if(e){var t=this.selection.getCurrent(),i=n.dom(t).closest("td, th"),a=i.nextElement().get(),o=i.prevElement().get();e.removeColumn(t),a?this.caret.setStart(a):o?this.caret.setEnd(o):this.deleteTable()}},deleteRow:function(){var e=this._getComponent();if(e){var t=this.selection.getCurrent(),i=n.dom(t).closest("tr"),a=i.nextElement().get(),o=i.prevElement().get();e.removeRow(t),a?this.caret.setStart(a):o?this.caret.setEnd(o):this.deleteTable()}},deleteTable:function(){var e=this._getTable();e&&this.component.remove(e)},_getTable:function(){var e=this.selection.getCurrent(),t=this.inspector.parse(e);if(t.isTable())return t.getTable()},_getComponent:function(){var e=this.selection.getCurrent(),t=this.inspector.parse(e);if(t.isTable()){var n=t.getTable();return this.component.create("table",n)}},_observeDropdown:function(e){var t=this._getTable(),n=e.getItemsByClass("redactor-table-item-observable"),i=e.getItem("insert-table");t?(this._observeItems(n,"enable"),i.disable()):(this._observeItems(n,"disable"),i.enable())},_observeItems:function(e,t){for(var n=0;n<e.length;n++)e[n][t]()}}),function(e){e.add("class","table.component",{mixins:["dom","component"],init:function(e,t){return this.app=e,t&&void 0!==t.cmnt?t:this._init(t)},addHead:function(){this.removeHead();var t=this.$element.find("tr").first().children("td, th").length,n=e.dom("<thead>"),i=this._buildRow(t,"<th>");n.append(i),this.$element.prepend(n)},addRow:function(e){var t=this._buildRow(e);return this.$element.append(t),t},addRowTo:function(e,t){return this._addRowTo(e,t)},addColumnTo:function(t,n){var i=e.dom(t),a=i.closest("tr"),o=i.closest("td, th"),r=0;a.find("td, th").each((function(e,t){e===o.get()&&(r=t)})),this.$element.find("tr").each((function(t){var i=e.dom(t).find("td, th").get(r),a=e.dom(i),o=a.clone();o.html('<div data-redactor-tag="tbr"></div>'),"right"===n?a.after(o):a.before(o)}))},removeHead:function(){var e=this.$element.find("thead");0!==e.length&&e.remove()},removeRow:function(t){e.dom(t).closest("tr").remove()},removeColumn:function(t){var n=e.dom(t),i=n.closest("tr"),a=n.closest("td, th"),o=0;i.find("td, th").each((function(e,t){e===a.get()&&(o=t)})),this.$element.find("tr").each((function(t){var n=e.dom(t).find("td, th").get(o);e.dom(n).remove()}))},_init:function(t){var n,i;if(void 0!==t){var a=e.dom(t),o=a.get(),r=a.closest("figure");0!==r.length?(n=r,i=r.find("table").get()):"TABLE"===o.tagName&&(i=o)}this._buildWrapper(n),this._buildElement(i),this._initWrapper()},_addRowTo:function(t,n){var i=e.dom(t).closest("tr");if(0!==i.length){var a=i.children("td, th").length,o=this._buildRow(a);return i[n](o),o}},_buildRow:function(t,n){n=n||"<td>";for(var i=e.dom("<tr>"),a=0;a<t;a++){var o=e.dom(n);o.attr("contenteditable",!0),o.html('<div data-redactor-tag="tbr"></div>'),i.append(o)}return i},_buildElement:function(t){t?this.$element=e.dom(t):(this.$element=e.dom("<table>"),this.append(this.$element))},_buildWrapper:function(e){e=e||"<figure>",this.parse(e)},_initWrapper:function(){this.addClass("redactor-component"),this.attr({"data-redactor-type":"table",tabindex:"-1",contenteditable:!1}),this.app.detector.isIe()&&this.removeAttr("contenteditable")}})}(Redactor)},tag1:function(e,t,n){"use strict";n.r(t);n("eUqz");var i={name:"redactor-fieldtype",props:{field:{type:Object,required:!0},value:{required:!1,default:""}}},a=n("KHd+"),o=Object(a.a)(i,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("redactor",{attrs:{name:e.field.handle,label:e.field.name,help:e.field.help,placeholder:e.field.settings.placeholder,value:e.value,config:{plugins:["table"]}},on:{input:function(t){return e.$emit("input",t)}}})}),[],!1,null,null,null);t.default=o.exports}}]);