/**
  * SiteWhere IDE Components v2.1.5
  * (c) 2019 SiteWhere LLC
  * @license CPAL-1.0
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('sitewhere-ide-common'), require('vue'), require('vue-color'), require('moment')) :
  typeof define === 'function' && define.amd ? define(['exports', 'sitewhere-ide-common', 'vue', 'vue-color', 'moment'], factory) :
  (global = global || self, factory(global.SiteWhereIdeComponents = {}, global.sitewhereIdeCommon, global.Vue, global.vueColor, global.moment));
}(this, function (exports, sitewhereIdeCommon, Vue, vueColor, moment) { 'use strict';

  Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;
  moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script = {
    data: () => ({
      showFieldCopied: false
    }),

    props: ["field", "message"],

    methods: {
      // Called after id is copied.
      onFieldCopied: function(e) {
        this.$data.showFieldCopied = true;
      },

      // Called if unable to copy id.
      onFieldCopyFailed: function(e) {}
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
    return function (id, style) {
      return addStyle(id, style);
    };
  }
  var HEAD;
  var styles = {};

  function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) style.element.setAttribute('media', css.media);

        if (HEAD === undefined) {
          HEAD = document.head || document.getElementsByTagName('head')[0];
        }

        HEAD.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  }

  var browser = createInjector;

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "span",
      [
        _vm._v("\n  " + _vm._s(_vm.field) + "\n  "),
        _c("v-tooltip", { attrs: { right: "" } }, [
          _c(
            "span",
            {
              directives: [
                {
                  name: "clipboard",
                  rawName: "v-clipboard",
                  value: _vm.field,
                  expression: "field"
                }
              ],
              key: _vm.field,
              attrs: { slot: "activator" },
              on: { success: _vm.onFieldCopied, error: _vm.onFieldCopyFailed },
              slot: "activator"
            },
            [
              _c("font-awesome-icon", {
                staticClass: "grey--text text--lighten-1 mt-1",
                staticStyle: { "vertical-align": "top" },
                attrs: { icon: "copy", size: "sm" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("span", [_vm._v("Copy to Clipboard")])
        ]),
        _vm._v(" "),
        _c(
          "v-snackbar",
          {
            attrs: { timeout: 2000, success: "" },
            model: {
              value: _vm.showFieldCopied,
              callback: function($$v) {
                _vm.showFieldCopied = $$v;
              },
              expression: "showFieldCopied"
            }
          },
          [
            _vm._v("\n    " + _vm._s(_vm.message) + "\n    "),
            _c(
              "v-btn",
              {
                attrs: { dark: "", flat: "" },
                on: {
                  click: function($event) {
                    _vm.showFieldCopied = false;
                  }
                }
              },
              [_vm._v("Close")]
            )
          ],
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-ffb377cc_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"ClipboardCopyField.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = "data-v-ffb377cc";
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject SSR */
    

    
    var ClipboardCopyField = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      browser,
      undefined
    );

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  function __decorate(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  }

  var ColorInputField = /** @class */ (function (_super) {
      __extends(ColorInputField, _super);
      function ColorInputField() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.menu = null;
          _this.updatedColor = null;
          return _this;
      }
      ColorInputField.prototype.onValueChanged = function (val, oldVal) {
          this.updatedColor = val;
      };
      Object.defineProperty(ColorInputField.prototype, "valueOrDefault", {
          get: function () {
              return this.updatedColor || "#fff";
          },
          enumerable: true,
          configurable: true
      });
      /** Called when color is chosen */
      ColorInputField.prototype.onColorChosen = function (val) {
          this.updatedColor = val.hex;
          this.$emit("input", val.hex);
          this.$emit("opacityChanged", val.a);
      };
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], ColorInputField.prototype, "value", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], ColorInputField.prototype, "text", void 0);
      __decorate([
          sitewhereIdeCommon.Watch("value"),
          __metadata("design:type", Function),
          __metadata("design:paramtypes", [String, String]),
          __metadata("design:returntype", void 0)
      ], ColorInputField.prototype, "onValueChanged", null);
      ColorInputField = __decorate([
          sitewhereIdeCommon.Component({
              components: {
                  Chrome: vueColor.Chrome
              }
          })
      ], ColorInputField);
      return ColorInputField;
  }(Vue));

  /* script */
  const __vue_script__$1 = ColorInputField;

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-container",
      { staticClass: "pa-0 mb-3", attrs: { fluid: "" } },
      [
        _c(
          "v-layout",
          { attrs: { row: "", wrap: "" } },
          [
            _c(
              "v-flex",
              { attrs: { xs6: "" } },
              [
                _c("v-text-field", {
                  attrs: {
                    label: _vm.text,
                    placeholder: " ",
                    "prepend-icon": "color_lens"
                  },
                  model: {
                    value: _vm.updatedColor,
                    callback: function($$v) {
                      _vm.updatedColor = $$v;
                    },
                    expression: "updatedColor"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-flex",
              { attrs: { xs6: "" } },
              [
                _c(
                  "v-menu",
                  {
                    attrs: {
                      "offset-y": "",
                      top: "",
                      "close-on-content-click": false
                    },
                    model: {
                      value: _vm.menu,
                      callback: function($$v) {
                        _vm.menu = $$v;
                      },
                      expression: "menu"
                    }
                  },
                  [
                    _c("v-btn", {
                      style: { "background-color": _vm.valueOrDefault },
                      attrs: { slot: "activator" },
                      slot: "activator"
                    }),
                    _vm._v(" "),
                    _c("chrome", {
                      attrs: { value: _vm.valueOrDefault },
                      on: { input: _vm.onColorChosen }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$1 = function (inject) {
      if (!inject) return
      inject("data-v-4407cd49_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"ColorInputField.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$1 = "data-v-4407cd49";
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* style inject SSR */
    

    
    var ColorInputField$1 = normalizeComponent_1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      browser,
      undefined
    );

  var ColorPicker = /** @class */ (function (_super) {
      __extends(ColorPicker, _super);
      function ColorPicker() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.menu = false;
          _this.currentColor = null;
          _this.currentOpacity = null;
          return _this;
      }
      ColorPicker.prototype.onValueChanged = function (val) {
          this.currentColor = val;
      };
      ColorPicker.prototype.onOpacityChanged = function (val) {
          this.currentOpacity = val;
      };
      Object.defineProperty(ColorPicker.prototype, "pickerColor", {
          /** Convert color into picker format */
          get: function () {
              return {
                  hex: this.currentColor,
                  a: this.opacity
              };
          },
          enumerable: true,
          configurable: true
      });
      /** Called when a color is chosen */
      ColorPicker.prototype.onColorChosen = function (val) {
          this.currentColor = val.hex;
          this.$emit("input", val.hex);
          this.currentOpacity = val.a;
          this.$emit("opacityChanged", val.a);
      };
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], ColorPicker.prototype, "value", void 0);
      __decorate([
          sitewhereIdeCommon.Prop({ default: 1 }),
          __metadata("design:type", String)
      ], ColorPicker.prototype, "opacity", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], ColorPicker.prototype, "text", void 0);
      __decorate([
          sitewhereIdeCommon.Watch("value"),
          __metadata("design:type", Function),
          __metadata("design:paramtypes", [String]),
          __metadata("design:returntype", void 0)
      ], ColorPicker.prototype, "onValueChanged", null);
      __decorate([
          sitewhereIdeCommon.Watch("opacity"),
          __metadata("design:type", Function),
          __metadata("design:paramtypes", [Number]),
          __metadata("design:returntype", void 0)
      ], ColorPicker.prototype, "onOpacityChanged", null);
      ColorPicker = __decorate([
          sitewhereIdeCommon.Component({
              components: {
                  Picker: vueColor.Sketch
              }
          })
      ], ColorPicker);
      return ColorPicker;
  }(Vue));

  /* script */
  const __vue_script__$2 = ColorPicker;

  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-menu",
      {
        attrs: { "offset-y": "", top: "", "close-on-content-click": false },
        model: {
          value: _vm.menu,
          callback: function($$v) {
            _vm.menu = $$v;
          },
          expression: "menu"
        }
      },
      [
        _c(
          "v-btn",
          {
            style: { "background-color": _vm.currentColor, color: "#fff" },
            attrs: { slot: "activator" },
            slot: "activator"
          },
          [_vm._v(_vm._s(_vm.text))]
        ),
        _vm._v(" "),
        _c("picker", {
          attrs: { value: _vm.pickerColor },
          on: { input: _vm.onColorChosen }
        })
      ],
      1
    )
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = undefined;
    /* scoped */
    const __vue_scope_id__$2 = undefined;
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var ColorPicker$1 = normalizeComponent_1(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      undefined,
      undefined
    );

  var CondensedToolbar = /** @class */ (function (_super) {
      __extends(CondensedToolbar, _super);
      function CondensedToolbar() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], CondensedToolbar.prototype, "title", void 0);
      CondensedToolbar = __decorate([
          sitewhereIdeCommon.Component({})
      ], CondensedToolbar);
      return CondensedToolbar;
  }(Vue));

  /* script */
  const __vue_script__$3 = CondensedToolbar;

  /* template */
  var __vue_render__$3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-toolbar",
      {
        staticClass: "tb",
        attrs: {
          flat: "",
          dark: "",
          dense: "",
          card: "",
          color: "primary",
          height: "38"
        }
      },
      [
        _vm._t("icon"),
        _vm._v(" "),
        _c("v-toolbar-title", { staticClass: "white--text body-2 ml-2" }, [
          _vm._v(_vm._s(_vm.title))
        ]),
        _vm._v(" "),
        _vm._t("left"),
        _vm._v(" "),
        _c("v-spacer"),
        _vm._v(" "),
        _vm._t("default")
      ],
      2
    )
  };
  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;

    /* style */
    const __vue_inject_styles__$3 = function (inject) {
      if (!inject) return
      inject("data-v-da90097a_0", { source: "\n.tb[data-v-da90097a] .v-toolbar__content {\n  padding: 0 10px;\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/common/CondensedToolbar.vue"],"names":[],"mappings":";AAqBA;EACA,eAAA;AACA","file":"CondensedToolbar.vue","sourcesContent":["<template>\n  <v-toolbar flat dark dense card color=\"primary\" class=\"tb\" height=\"38\">\n    <slot name=\"icon\" />\n    <v-toolbar-title class=\"white--text body-2 ml-2\">{{ title }}</v-toolbar-title>\n    <slot name=\"left\" />\n    <v-spacer></v-spacer>\n    <slot />\n  </v-toolbar>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport { Component, Prop } from \"sitewhere-ide-common\";\n\n@Component({})\nexport default class CondensedToolbar extends Vue {\n  @Prop() readonly title!: string;\n}\n</script>\n\n<style scoped>\n.tb >>> .v-toolbar__content {\n  padding: 0 10px;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$3 = "data-v-da90097a";
    /* module identifier */
    const __vue_module_identifier__$3 = undefined;
    /* functional template */
    const __vue_is_functional_template__$3 = false;
    /* style inject SSR */
    

    
    var CondensedToolbar$1 = normalizeComponent_1(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      browser,
      undefined
    );

  var DateTimePicker = /** @class */ (function (_super) {
      __extends(DateTimePicker, _super);
      function DateTimePicker() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.date = null;
          _this.time = "12:00";
          _this.datemenu = false;
          _this.timemenu = false;
          return _this;
      }
      DateTimePicker.prototype.onValueUpdated = function (updated) {
          if (updated) {
              var datetime = this.parseIso8601(updated);
              if (datetime) {
                  this.time =
                      datetime
                          .getHours()
                          .toString()
                          .padStart(2, "0") +
                          ":" +
                          datetime
                              .getMinutes()
                              .toString()
                              .padStart(2, "0");
                  this.date = moment(updated).format("YYYY-MM-DD");
              }
          }
          else {
              this.date = null;
              this.time = "12:00";
          }
      };
      DateTimePicker.prototype.onDateUpdated = function (updated) {
          if (updated) {
              var value = moment(updated).toDate();
              var parts = this.time.split(":");
              var hour = parseInt(parts[0]);
              var minute = parseInt(parts[1]);
              value.setHours(hour, minute);
              this.$emit("input", value);
          }
      };
      DateTimePicker.prototype.onTimeUpdated = function (updated) {
          if (this.date) {
              this.onDateUpdated(this.date);
          }
      };
      /** Parse date in ISO8601 format */
      DateTimePicker.prototype.parseIso8601 = function (value) {
          if (!value) {
              return null;
          }
          return moment(value).toDate();
      };
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Date)
      ], DateTimePicker.prototype, "value", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], DateTimePicker.prototype, "label", void 0);
      __decorate([
          sitewhereIdeCommon.Watch("value"),
          __metadata("design:type", Function),
          __metadata("design:paramtypes", [String]),
          __metadata("design:returntype", void 0)
      ], DateTimePicker.prototype, "onValueUpdated", null);
      __decorate([
          sitewhereIdeCommon.Watch("date"),
          __metadata("design:type", Function),
          __metadata("design:paramtypes", [String]),
          __metadata("design:returntype", void 0)
      ], DateTimePicker.prototype, "onDateUpdated", null);
      __decorate([
          sitewhereIdeCommon.Watch("time"),
          __metadata("design:type", Function),
          __metadata("design:paramtypes", [String]),
          __metadata("design:returntype", void 0)
      ], DateTimePicker.prototype, "onTimeUpdated", null);
      DateTimePicker = __decorate([
          sitewhereIdeCommon.Component({})
      ], DateTimePicker);
      return DateTimePicker;
  }(Vue));

  /* script */
  const __vue_script__$4 = DateTimePicker;

  /* template */
  var __vue_render__$4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-layout",
      { attrs: { row: "", wrap: "" } },
      [
        _c(
          "v-flex",
          { attrs: { xs8: "" } },
          [
            _c(
              "v-menu",
              {
                attrs: {
                  "close-on-content-click": false,
                  transition: "scale-transition",
                  "offset-y": "",
                  "full-width": ""
                },
                scopedSlots: _vm._u([
                  {
                    key: "activator",
                    fn: function(ref) {
                      var on = ref.on;
                      return [
                        _c(
                          "v-text-field",
                          _vm._g(
                            {
                              attrs: {
                                label: _vm.label,
                                placeholder: " ",
                                "prepend-icon": "event",
                                readonly: ""
                              },
                              model: {
                                value: _vm.date,
                                callback: function($$v) {
                                  _vm.date = $$v;
                                },
                                expression: "date"
                              }
                            },
                            on
                          )
                        )
                      ]
                    }
                  }
                ]),
                model: {
                  value: _vm.datemenu,
                  callback: function($$v) {
                    _vm.datemenu = $$v;
                  },
                  expression: "datemenu"
                }
              },
              [
                _vm._v(" "),
                _c("v-date-picker", {
                  on: {
                    input: function($event) {
                      _vm.datemenu = false;
                    }
                  },
                  model: {
                    value: _vm.date,
                    callback: function($$v) {
                      _vm.date = $$v;
                    },
                    expression: "date"
                  }
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _vm.date
          ? _c(
              "v-flex",
              { attrs: { xs4: "" } },
              [
                _c(
                  "v-menu",
                  {
                    ref: "menu",
                    attrs: {
                      "close-on-content-click": false,
                      "return-value": _vm.time,
                      transition: "scale-transition",
                      "offset-y": "",
                      "full-width": ""
                    },
                    on: {
                      "update:returnValue": function($event) {
                        _vm.time = $event;
                      },
                      "update:return-value": function($event) {
                        _vm.time = $event;
                      }
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on;
                            return [
                              _c(
                                "v-text-field",
                                _vm._g(
                                  {
                                    attrs: {
                                      label: " ",
                                      placeholder: " ",
                                      "prepend-icon": "access_time",
                                      readonly: ""
                                    },
                                    model: {
                                      value: _vm.time,
                                      callback: function($$v) {
                                        _vm.time = $$v;
                                      },
                                      expression: "time"
                                    }
                                  },
                                  on
                                )
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      false,
                      4181482063
                    ),
                    model: {
                      value: _vm.timemenu,
                      callback: function($$v) {
                        _vm.timemenu = $$v;
                      },
                      expression: "timemenu"
                    }
                  },
                  [
                    _vm._v(" "),
                    _vm.timemenu
                      ? _c("v-time-picker", {
                          attrs: { "full-width": "" },
                          on: {
                            "click:minute": function($event) {
                              return _vm.$refs.menu.save(_vm.time)
                            }
                          },
                          model: {
                            value: _vm.time,
                            callback: function($$v) {
                              _vm.time = $$v;
                            },
                            expression: "time"
                          }
                        })
                      : _vm._e()
                  ],
                  1
                )
              ],
              1
            )
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;

    /* style */
    const __vue_inject_styles__$4 = undefined;
    /* scoped */
    const __vue_scope_id__$4 = undefined;
    /* module identifier */
    const __vue_module_identifier__$4 = undefined;
    /* functional template */
    const __vue_is_functional_template__$4 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var DateTimePicker$1 = normalizeComponent_1(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //

  var script$1 = {
    data: () => ({
      errorDisplayed: false
    }),

    props: ["error"],

    watch: {
      error: function(value) {
        if (value) {
          if (this.error.response && this.error.response.status == 503) {
            this.$data.errorDisplayed = false;
          } else if (this.error.response || this.error.message) {
            this.$data.errorDisplayed = true;
          }
        }
      }
    },

    computed: {
      errorMessage: function() {
        if (!this.error) {
          return "";
        } else if (this.error.response && this.error.response.headers) {
          if (this.error.response.headers["x-sitewhere-error"]) {
            return this.error.response.headers["x-sitewhere-error"];
          } else if (this.error.response.status === 403) {
            return "Server Authentication Failed";
          }
        }
        return this.error.message;
      }
    },

    methods: {}
  };

  /* script */
  const __vue_script__$5 = script$1;

  /* template */
  var __vue_render__$5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.error
      ? _c(
          "v-snackbar",
          {
            staticClass: "error-banner",
            attrs: { timeout: 5000, error: "" },
            model: {
              value: _vm.errorDisplayed,
              callback: function($$v) {
                _vm.errorDisplayed = $$v;
              },
              expression: "errorDisplayed"
            }
          },
          [
            _vm._v("\n  " + _vm._s(_vm.errorMessage) + "\n  "),
            _c(
              "v-btn",
              {
                attrs: { dark: "", flat: "" },
                nativeOn: {
                  click: function($event) {
                    _vm.errorDisplayed = false;
                  }
                }
              },
              [_vm._v("Close")]
            )
          ],
          1
        )
      : _vm._e()
  };
  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;

    /* style */
    const __vue_inject_styles__$5 = function (inject) {
      if (!inject) return
      inject("data-v-3f3fcd20_0", { source: "\n.error-banner[data-v-3f3fcd20] {\n  z-index: 2000;\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/common/ErrorBanner.vue"],"names":[],"mappings":";AA+CA;EACA,aAAA;AACA","file":"ErrorBanner.vue","sourcesContent":["<template>\n  <v-snackbar class=\"error-banner\" v-if=\"error\" :timeout=\"5000\" error v-model=\"errorDisplayed\">\n    {{ errorMessage }}\n    <v-btn dark flat @click.native=\"errorDisplayed = false\">Close</v-btn>\n  </v-snackbar>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    errorDisplayed: false\n  }),\n\n  props: [\"error\"],\n\n  watch: {\n    error: function(value) {\n      if (value) {\n        if (this.error.response && this.error.response.status == 503) {\n          this.$data.errorDisplayed = false;\n        } else if (this.error.response || this.error.message) {\n          this.$data.errorDisplayed = true;\n        }\n      }\n    }\n  },\n\n  computed: {\n    errorMessage: function() {\n      if (!this.error) {\n        return \"\";\n      } else if (this.error.response && this.error.response.headers) {\n        if (this.error.response.headers[\"x-sitewhere-error\"]) {\n          return this.error.response.headers[\"x-sitewhere-error\"];\n        } else if (this.error.response.status === 403) {\n          return \"Server Authentication Failed\";\n        }\n      }\n      return this.error.message;\n    }\n  },\n\n  methods: {}\n};\n</script>\n\n<style scoped>\n.error-banner {\n  z-index: 2000;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$5 = "data-v-3f3fcd20";
    /* module identifier */
    const __vue_module_identifier__$5 = undefined;
    /* functional template */
    const __vue_is_functional_template__$5 = false;
    /* style inject SSR */
    

    
    var ErrorBanner = normalizeComponent_1(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$5,
      __vue_script__$5,
      __vue_scope_id__$5,
      __vue_is_functional_template__$5,
      __vue_module_identifier__$5,
      browser,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$2 = {
    data: () => ({}),

    props: ["label", "icon"],

    methods: {
      // Called when button is clicked.
      onButtonClicked: function() {
        this.$emit("action");
      }
    }
  };

  /* script */
  const __vue_script__$6 = script$2;

  /* template */
  var __vue_render__$6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-tooltip",
      { attrs: { left: "" } },
      [
        _c(
          "v-btn",
          {
            staticClass: "elevation-5",
            attrs: {
              slot: "activator",
              fab: "",
              fixed: "",
              bottom: "",
              right: "",
              dark: "",
              color: "red darken-2"
            },
            on: {
              click: function($event) {
                $event.stopPropagation();
                return _vm.onButtonClicked($event)
              }
            },
            slot: "activator"
          },
          [_c("font-awesome-icon", { attrs: { icon: _vm.icon, size: "lg" } })],
          1
        ),
        _vm._v(" "),
        _c("span", [_vm._v(_vm._s(_vm.label))])
      ],
      1
    )
  };
  var __vue_staticRenderFns__$6 = [];
  __vue_render__$6._withStripped = true;

    /* style */
    const __vue_inject_styles__$6 = function (inject) {
      if (!inject) return
      inject("data-v-1fb552e2_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"FloatingActionButton.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$6 = "data-v-1fb552e2";
    /* module identifier */
    const __vue_module_identifier__$6 = undefined;
    /* functional template */
    const __vue_is_functional_template__$6 = false;
    /* style inject SSR */
    

    
    var FloatingActionButton = normalizeComponent_1(
      { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
      __vue_inject_styles__$6,
      __vue_script__$6,
      __vue_scope_id__$6,
      __vue_is_functional_template__$6,
      __vue_module_identifier__$6,
      browser,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$3 = {
    data: () => ({}),

    props: ["label"],

    methods: {}
  };

  /* script */
  const __vue_script__$7 = script$3;

  /* template */
  var __vue_render__$7 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-layout",
      { staticClass: "mb-1", attrs: { row: "", wrap: "" } },
      [
        _c(
          "v-flex",
          { staticClass: "text-xs-right subheading pr-4", attrs: { xs4: "" } },
          [_c("strong", [_vm._v(_vm._s(_vm.label))]), _vm._v(":\n  ")]
        ),
        _vm._v(" "),
        _c(
          "v-flex",
          { staticClass: "field", attrs: { xs8: "" } },
          [_vm._t("default")],
          2
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$7 = [];
  __vue_render__$7._withStripped = true;

    /* style */
    const __vue_inject_styles__$7 = function (inject) {
      if (!inject) return
      inject("data-v-4748a8e2_0", { source: "\n.field[data-v-4748a8e2] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/common/HeaderField.vue"],"names":[],"mappings":";AAsBA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;AACA","file":"HeaderField.vue","sourcesContent":["<template>\n  <v-layout row wrap class=\"mb-1\">\n    <v-flex xs4 class=\"text-xs-right subheading pr-4\">\n      <strong>{{ label }}</strong>:\n    </v-flex>\n    <v-flex class=\"field\" xs8>\n      <slot></slot>\n    </v-flex>\n  </v-layout>\n</template>\n\n<script>\nexport default {\n  data: () => ({}),\n\n  props: [\"label\"],\n\n  methods: {}\n};\n</script>\n\n<style scoped>\n.field {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$7 = "data-v-4748a8e2";
    /* module identifier */
    const __vue_module_identifier__$7 = undefined;
    /* functional template */
    const __vue_is_functional_template__$7 = false;
    /* style inject SSR */
    

    
    var HeaderField = normalizeComponent_1(
      { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
      __vue_inject_styles__$7,
      __vue_script__$7,
      __vue_scope_id__$7,
      __vue_is_functional_template__$7,
      __vue_module_identifier__$7,
      browser,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$4 = {
    computed: {
      // Compute style of logo.
      ddStyle: function() {
        return {
          width: "500px",
          "max-height": "400px",
          "overflow-y": "scroll"
        };
      },
      icon: function() {
        return this.value;
      }
    },

    props: ["value"],

    methods: {
      // Called when icon is selected.
      onIconSelected: function(e) {
        this.$data.selectedIcon = e;
        this.$emit("input", e);
      }
    },

    data: () => ({
      active: null,
      selectedIcon: null,
      iconsSolid: [
        "address-book",
        "address-card",
        "adjust",
        "air-freshener",
        "align-center",
        "align-justify",
        "align-left",
        "align-right",
        "allergies",
        "ambulance",
        "american-sign-language-interpreting",
        "anchor",
        "angle-double-down",
        "angle-double-left",
        "angle-double-right",
        "angle-double-up",
        "angle-down",
        "angle-left",
        "angle-right",
        "angle-up",
        "angry",
        "apple-alt",
        "archive",
        "archway",
        "arrow-alt-circle-down",
        "arrow-alt-circle-left",
        "arrow-alt-circle-right",
        "arrow-alt-circle-up",
        "arrow-circle-down",
        "arrow-circle-left",
        "arrow-circle-right",
        "arrow-circle-up",
        "arrow-down",
        "arrow-left",
        "arrow-right",
        "arrow-up",
        "arrows-alt",
        "arrows-alt-h",
        "arrows-alt-v",
        "assistive-listening-systems",
        "asterisk",
        "at",
        "atlas",
        "atom",
        "audio-description",
        "award",
        "backspace",
        "backward",
        "balance-scale",
        "ban",
        "band-aid",
        "barcode",
        "bars",
        "baseball-ball",
        "basketball-ball",
        "bath",
        "battery-empty",
        "battery-full",
        "battery-half",
        "battery-quarter",
        "battery-three-quarters",
        "bed",
        "beer",
        "bell",
        "bell-slash",
        "bezier-curve",
        "bicycle",
        "binoculars",
        "birthday-cake",
        "blender",
        "blind",
        "bold",
        "bolt",
        "bomb",
        "bone",
        "bong",
        "book",
        "book-open",
        "book-reader",
        "bookmark",
        "bowling-ball",
        "box",
        "box-open",
        "boxes",
        "braille",
        "brain",
        "briefcase",
        "briefcase-medical",
        "broadcast-tower",
        "broom",
        "brush",
        "bug",
        "building",
        "bullhorn",
        "bullseye",
        "burn",
        "bus",
        "bus-alt",
        "calculator",
        "calendar",
        "calendar-alt",
        "calendar-check",
        "calendar-minus",
        "calendar-plus",
        "calendar-times",
        "camera",
        "camera-retro",
        "cannabis",
        "capsules",
        "car",
        "car-alt",
        "car-battery",
        "car-crash",
        "car-side",
        "caret-down",
        "caret-left",
        "caret-right",
        "caret-square-down",
        "caret-square-left",
        "caret-square-right",
        "caret-square-up",
        "caret-up",
        "cart-arrow-down",
        "cart-plus",
        "certificate",
        "chalkboard",
        "chalkboard-teacher",
        "charging-station",
        "chart-area",
        "chart-bar",
        "chart-line",
        "chart-pie",
        "check",
        "check-circle",
        "check-double",
        "check-square",
        "chess",
        "chess-bishop",
        "chess-board",
        "chess-king",
        "chess-knight",
        "chess-pawn",
        "chess-queen",
        "chess-rook",
        "chevron-circle-down",
        "chevron-circle-left",
        "chevron-circle-right",
        "chevron-circle-up",
        "chevron-down",
        "chevron-left",
        "chevron-right",
        "chevron-up",
        "child",
        "church",
        "circle",
        "circle-notch",
        "clipboard",
        "clipboard-check",
        "clipboard-list",
        "clock",
        "clone",
        "closed-captioning",
        "cloud",
        "cloud-download-alt",
        "cloud-upload-alt",
        "cocktail",
        "code",
        "code-branch",
        "coffee",
        "cog",
        "cogs",
        "coins",
        "columns",
        "comment",
        "comment-alt",
        "comment-dots",
        "comment-slash",
        "comments",
        "compact-disc",
        "compass",
        "compress",
        "concierge-bell",
        "cookie",
        "cookie-bite",
        "copy",
        "copyright",
        "couch",
        "credit-card",
        "crop",
        "crop-alt",
        "crosshairs",
        "crow",
        "crown",
        "cube",
        "cubes",
        "cut",
        "database",
        "deaf",
        "desktop",
        "diagnoses",
        "dice",
        "dice-five",
        "dice-four",
        "dice-one",
        "dice-six",
        "dice-three",
        "dice-two",
        "digital-tachograph",
        "directions",
        "divide",
        "dizzy",
        "dna",
        "dollar-sign",
        "dolly",
        "dolly-flatbed",
        "donate",
        "door-closed",
        "door-open",
        "dot-circle",
        "dove",
        "download",
        "drafting-compass",
        "draw-polygon",
        "drum",
        "drum-steelpan",
        "dumbbell",
        "edit",
        "eject",
        "ellipsis-h",
        "ellipsis-v",
        "envelope",
        "envelope-open",
        "envelope-square",
        "equals",
        "eraser",
        "euro-sign",
        "exchange-alt",
        "exclamation",
        "exclamation-circle",
        "exclamation-triangle",
        "expand",
        "expand-arrows-alt",
        "external-link-alt",
        "external-link-square-alt",
        "eye",
        "eye-dropper",
        "eye-slash",
        "fast-backward",
        "fast-forward",
        "fax",
        "feather",
        "feather-alt",
        "female",
        "fighter-jet",
        "file",
        "file-alt",
        "file-archive",
        "file-audio",
        "file-code",
        "file-contract",
        "file-download",
        "file-excel",
        "file-export",
        "file-image",
        "file-import",
        "file-invoice",
        "file-invoice-dollar",
        "file-medical",
        "file-medical-alt",
        "file-pdf",
        "file-powerpoint",
        "file-prescription",
        "file-signature",
        "file-upload",
        "file-video",
        "file-word",
        "fill",
        "fill-drip",
        "film",
        "filter",
        "fingerprint",
        "fire",
        "fire-extinguisher",
        "first-aid",
        "fish",
        "flag",
        "flag-checkered",
        "flask",
        "flushed",
        "folder",
        "folder-open",
        "font",
        "football-ball",
        "forward",
        "frog",
        "frown",
        "frown-open",
        "futbol",
        "gamepad",
        "gas-pump",
        "gavel",
        "gem",
        "genderless",
        "gift",
        "glass-martini",
        "glass-martini-alt",
        "glasses",
        "globe",
        "globe-africa",
        "globe-americas",
        "globe-asia",
        "golf-ball",
        "graduation-cap",
        "greater-than",
        "greater-than-equal",
        "grimace",
        "grin",
        "grin-alt",
        "grin-beam",
        "grin-beam-sweat",
        "grin-hearts",
        "grin-squint",
        "grin-squint-tears",
        "grin-stars",
        "grin-tears",
        "grin-tongue",
        "grin-tongue-squint",
        "grin-tongue-wink",
        "grin-wink",
        "grip-horizontal",
        "grip-vertical",
        "h-square",
        "hand-holding",
        "hand-holding-heart",
        "hand-holding-usd",
        "hand-lizard",
        "hand-paper",
        "hand-peace",
        "hand-point-down",
        "hand-point-left",
        "hand-point-right",
        "hand-point-up",
        "hand-pointer",
        "hand-rock",
        "hand-scissors",
        "hand-spock",
        "hands",
        "hands-helping",
        "handshake",
        "hashtag",
        "hdd",
        "heading",
        "headphones",
        "headphones-alt",
        "helicopter",
        "highlighter",
        "history",
        "hockey-puck",
        "home",
        "hospital",
        "hospital-alt",
        "hospital-symbol",
        "hot-tub",
        "hotel",
        "hourglass",
        "hourglass-end",
        "hourglass-half",
        "hourglass-start",
        "i-cursor",
        "id-badge",
        "id-card",
        "id-card-alt",
        "image",
        "images",
        "inbox",
        "indent",
        "industry",
        "infinity",
        "info",
        "info-circle",
        "italic",
        "joint",
        "key",
        "keyboard",
        "kiss",
        "kiss-beam",
        "kiss-wink-heart",
        "kiwi-bird",
        "language",
        "laptop",
        "laptop-code",
        "laugh",
        "laugh-beam",
        "laugh-squint",
        "laugh-wink",
        "layer-group",
        "leaf",
        "lemon",
        "less-than",
        "less-than-equal",
        "level-down-alt",
        "level-up-alt",
        "life-ring",
        "lightbulb",
        "link",
        "lira-sign",
        "list",
        "list-alt",
        "list-ol",
        "list-ul",
        "location-arrow",
        "lock",
        "lock-open",
        "long-arrow-alt-down",
        "long-arrow-alt-left",
        "long-arrow-alt-right",
        "long-arrow-alt-up",
        "low-vision",
        "luggage-cart",
        "magic",
        "magnet",
        "male",
        "map",
        "map-marked",
        "map-marked-alt",
        "map-marker",
        "map-marker-alt",
        "map-pin",
        "map-signs",
        "marker",
        "mars",
        "mars-double",
        "mars-stroke",
        "mars-stroke-h",
        "mars-stroke-v",
        "medal",
        "medkit",
        "meh",
        "meh-blank",
        "meh-rolling-eyes",
        "memory",
        "mercury",
        "microchip",
        "microphone",
        "microphone-alt",
        "microphone-alt-slash",
        "microphone-slash",
        "microscope",
        "minus",
        "minus-circle",
        "minus-square",
        "mobile",
        "mobile-alt",
        "money-bill",
        "money-bill-alt",
        "money-bill-wave",
        "money-bill-wave-alt",
        "money-check",
        "money-check-alt",
        "monument",
        "moon",
        "mortar-pestle",
        "motorcycle",
        "mouse-pointer",
        "music",
        "neuter",
        "newspaper",
        "not-equal",
        "notes-medical",
        "object-group",
        "object-ungroup",
        "oil-can",
        "outdent",
        "paint-brush",
        "paint-roller",
        "palette",
        "pallet",
        "paper-plane",
        "paperclip",
        "parachute-box",
        "paragraph",
        "parking",
        "passport",
        "paste",
        "pause",
        "pause-circle",
        "paw",
        "pen",
        "pen-alt",
        "pen-fancy",
        "pen-nib",
        "pen-square",
        "pencil-alt",
        "pencil-ruler",
        "people-carry",
        "percent",
        "percentage",
        "phone",
        "phone-slash",
        "phone-square",
        "phone-volume",
        "piggy-bank",
        "pills",
        "plane",
        "plane-arrival",
        "plane-departure",
        "play",
        "play-circle",
        "plug",
        "plus",
        "plus-circle",
        "plus-square",
        "podcast",
        "poo",
        "portrait",
        "pound-sign",
        "power-off",
        "prescription",
        "prescription-bottle",
        "prescription-bottle-alt",
        "print",
        "procedures",
        "project-diagram",
        "puzzle-piece",
        "qrcode",
        "question",
        "question-circle",
        "quidditch",
        "quote-left",
        "quote-right",
        "random",
        "receipt",
        "recycle",
        "redo",
        "redo-alt",
        "registered",
        "reply",
        "reply-all",
        "retweet",
        "ribbon",
        "road",
        "robot",
        "rocket",
        "route",
        "rss",
        "rss-square",
        "ruble-sign",
        "ruler",
        "ruler-combined",
        "ruler-horizontal",
        "ruler-vertical",
        "rupee-sign",
        "sad-cry",
        "sad-tear",
        "save",
        "school",
        "screwdriver",
        "search",
        "search-minus",
        "search-plus",
        "seedling",
        "server",
        "shapes",
        "share",
        "share-alt",
        "share-alt-square",
        "share-square",
        "shekel-sign",
        "shield-alt",
        "ship",
        "shipping-fast",
        "shoe-prints",
        "shopping-bag",
        "shopping-basket",
        "shopping-cart",
        "shower",
        "shuttle-van",
        "sign",
        "sign-in-alt",
        "sign-language",
        "sign-out-alt",
        "signal",
        "signature",
        "sitemap",
        "skull",
        "sliders-h",
        "smile",
        "smile-beam",
        "smile-wink",
        "smoking",
        "smoking-ban",
        "snowflake",
        "solar-panel",
        "sort",
        "sort-alpha-down",
        "sort-alpha-up",
        "sort-amount-down",
        "sort-amount-up",
        "sort-down",
        "sort-numeric-down",
        "sort-numeric-up",
        "sort-up",
        "spa",
        "space-shuttle",
        "spinner",
        "splotch",
        "spray-can",
        "square",
        "square-full",
        "stamp",
        "star",
        "star-half",
        "star-half-alt",
        "star-of-life",
        "step-backward",
        "step-forward",
        "stethoscope",
        "sticky-note",
        "stop",
        "stop-circle",
        "stopwatch",
        "store",
        "store-alt",
        "stream",
        "street-view",
        "strikethrough",
        "stroopwafel",
        "subscript",
        "subway",
        "suitcase",
        "suitcase-rolling",
        "sun",
        "superscript",
        "surprise",
        "swatchbook",
        "swimmer",
        "swimming-pool",
        "sync",
        "sync-alt",
        "syringe",
        "table",
        "table-tennis",
        "tablet",
        "tablet-alt",
        "tablets",
        "tachometer-alt",
        "tag",
        "tags",
        "tape",
        "tasks",
        "taxi",
        "teeth",
        "teeth-open",
        "terminal",
        "text-height",
        "text-width",
        "th",
        "th-large",
        "th-list",
        "theater-masks",
        "thermometer",
        "thermometer-empty",
        "thermometer-full",
        "thermometer-half",
        "thermometer-quarter",
        "thermometer-three-quarters",
        "thumbs-down",
        "thumbs-up",
        "thumbtack",
        "ticket-alt",
        "times",
        "times-circle",
        "tint",
        "tint-slash",
        "tired",
        "toggle-off",
        "toggle-on",
        "toolbox",
        "tooth",
        "trademark",
        "traffic-light",
        "train",
        "transgender",
        "transgender-alt",
        "trash",
        "trash-alt",
        "tree",
        "trophy",
        "truck",
        "truck-loading",
        "truck-monster",
        "truck-moving",
        "truck-pickup",
        "tshirt",
        "tty",
        "tv",
        "umbrella",
        "umbrella-beach",
        "underline",
        "undo",
        "undo-alt",
        "universal-access",
        "university",
        "unlink",
        "unlock",
        "unlock-alt",
        "upload",
        "user",
        "user-alt",
        "user-alt-slash",
        "user-astronaut",
        "user-check",
        "user-circle",
        "user-clock",
        "user-cog",
        "user-edit",
        "user-friends",
        "user-graduate",
        "user-lock",
        "user-md",
        "user-minus",
        "user-ninja",
        "user-plus",
        "user-secret",
        "user-shield",
        "user-slash",
        "user-tag",
        "user-tie",
        "user-times",
        "users",
        "users-cog",
        "utensil-spoon",
        "utensils",
        "vector-square",
        "venus",
        "venus-double",
        "venus-mars",
        "vial",
        "vials",
        "video",
        "video-slash",
        "volleyball-ball",
        "volume-down",
        "volume-off",
        "volume-up",
        "walking",
        "wallet",
        "warehouse",
        "weight",
        "weight-hanging",
        "wheelchair",
        "wifi",
        "window-close",
        "window-maximize",
        "window-minimize",
        "window-restore",
        "wine-glass",
        "wine-glass-alt",
        "won-sign",
        "wrench",
        "x-ray",
        "yen-sign"
      ],
      iconsBrand: [
        "500px",
        "accessible-icon",
        "accusoft",
        "adn",
        "adversal",
        "affiliatetheme",
        "algolia",
        "amazon",
        "amazon-pay",
        "amilia",
        "android",
        "angellist",
        "angrycreative",
        "angular",
        "app-store",
        "app-store-ios",
        "apper",
        "apple",
        "apple-pay",
        "asymmetrik",
        "audible",
        "autoprefixer",
        "avianex",
        "aviato",
        "aws",
        "bandcamp",
        "behance",
        "behance-square",
        "bimobject",
        "bitbucket",
        "bitcoin",
        "bity",
        "black-tie",
        "blackberry",
        "blogger",
        "blogger-b",
        "bluetooth",
        "bluetooth-b",
        "btc",
        "buromobelexperte",
        "buysellads",
        "cc-amazon-pay",
        "cc-amex",
        "cc-apple-pay",
        "cc-diners-club",
        "cc-discover",
        "cc-jcb",
        "cc-mastercard",
        "cc-paypal",
        "cc-stripe",
        "cc-visa",
        "centercode",
        "chrome",
        "cloudscale",
        "cloudsmith",
        "cloudversify",
        "vcodepen",
        "codiepie",
        "connectdevelop",
        "contao",
        "cpanel",
        "creative-commons",
        "creative-commons-by",
        "creative-commons-nc",
        "creative-commons-nc-eu",
        "creative-commons-nc-jp",
        "creative-commons-nd",
        "creative-commons-pd",
        "creative-commons-pd-alt",
        "creative-commons-remix",
        "creative-commons-sa",
        "creative-commons-sampling",
        "creative-commons-sampling-plus",
        "creative-commons-share",
        "css3",
        "css3-alt",
        "cuttlefish",
        "d-and-d",
        "dashcube",
        "delicious",
        "deploydog",
        "deskpro",
        "deviantart",
        "digg",
        "digital-ocean",
        "discord",
        "discourse",
        "dochub",
        "docker",
        "draft2digital",
        "dribbble",
        "dribbble-square",
        "dropbox",
        "drupal",
        "dyalog",
        "earlybirds",
        "ebay",
        "edge",
        "elementor",
        "ello",
        "ember",
        "empire",
        "envira",
        "erlang",
        "ethereum",
        "etsy",
        "expeditedssl",
        "facebook",
        "facebook-f",
        "facebook-messenger",
        "facebook-square",
        "firefox",
        "first-order",
        "first-order-alt",
        "firstdraft",
        "flickr",
        "flipboard",
        "fly",
        "font-awesome",
        "font-awesome-alt",
        "font-awesome-flag",
        "fonticons",
        "fonticons-fi",
        "fort-awesome",
        "fort-awesome-alt",
        "forumbee",
        "foursquare",
        "free-code-camp",
        "freebsd",
        "fulcrum",
        "galactic-republic",
        "galactic-senate",
        "get-pocket",
        "gg",
        "gg-circle",
        "git",
        "git-square",
        "github",
        "github-alt",
        "github-square",
        "gitkraken",
        "gitlab",
        "gitter",
        "glide",
        "glide-g",
        "gofore",
        "goodreads",
        "goodreads-g",
        "google",
        "google-drive",
        "google-play",
        "google-plus",
        "google-plus-g",
        "google-plus-square",
        "google-wallet",
        "gratipay",
        "grav",
        "gripfire",
        "grunt",
        "gulp",
        "hacker-news",
        "hacker-news-square",
        "hackerrank",
        "hips",
        "hire-a-helper",
        "hooli",
        "hornbill",
        "hotjar",
        "houzz",
        "html5",
        "hubspot",
        "imdb",
        "instagram",
        "internet-explorer",
        "ioxhost",
        "itunes",
        "itunes-note",
        "java",
        "jedi-order",
        "jenkins",
        "joget",
        "joomla",
        "js",
        "js-square",
        "jsfiddle",
        "kaggle",
        "keybase",
        "keycdn",
        "kickstarter",
        "kickstarter-k",
        "korvue",
        "laravel",
        "lastfm",
        "lastfm-square",
        "leanpub",
        "less",
        "line",
        "linkedin",
        "linkedin-in",
        "linode",
        "linux",
        "lyft",
        "magento",
        "mailchimp",
        "mandalorian",
        "markdown",
        "mastodon",
        "maxcdn",
        "medapps",
        "medium",
        "medium-m",
        "medrt",
        "meetup",
        "megaport",
        "microsoft",
        "mix",
        "mixcloud",
        "mizuni",
        "modx",
        "monero",
        "napster",
        "neos",
        "nimblr",
        "nintendo-switch",
        "node",
        "node-js",
        "npm",
        "ns8",
        "nutritionix",
        "odnoklassniki",
        "odnoklassniki-square",
        "old-republic",
        "opencart",
        "openid",
        "opera",
        "optin-monster",
        "osi",
        "page4",
        "pagelines",
        "palfed",
        "patreon",
        "paypal",
        "periscope",
        "phabricator",
        "phoenix-framework",
        "phoenix-squadron",
        "php",
        "pied-piper",
        "pied-piper-alt",
        "pied-piper-hat",
        "pied-piper-pp",
        "pinterest",
        "pinterest-p",
        "pinterest-square",
        "playstation",
        "product-hunt",
        "pushed",
        "python",
        "qq",
        "quinscape",
        "quora",
        "r-project",
        "ravelry",
        "react",
        "readme",
        "rebel",
        "red-river",
        "reddit",
        "reddit-alien",
        "reddit-square",
        "rendact",
        "renren",
        "replyd",
        "researchgate",
        "resolving",
        "rev",
        "rocketchat",
        "rockrms",
        "safari",
        "sass",
        "schlix",
        "scribd",
        "searchengin",
        "sellcast",
        "sellsy",
        "servicestack",
        "shirtsinbulk",
        "shopware",
        "simplybuilt",
        "sistrix",
        "sith",
        "skyatlas",
        "skype",
        "slack",
        "slack-hash",
        "slideshare",
        "snapchat",
        "snapchat-ghost",
        "snapchat-square",
        "soundcloud",
        "speakap",
        "spotify",
        "squarespace",
        "stack-exchange",
        "stack-overflow",
        "staylinked",
        "steam",
        "steam-square",
        "steam-symbol",
        "sticker-mule",
        "strava",
        "stripe",
        "stripe-s",
        "studiovinari",
        "stumbleupon",
        "stumbleupon-circle",
        "superpowers",
        "supple",
        "telegram",
        "telegram-plane",
        "tencent-weibo",
        "themeco",
        "themeisle",
        "trade-federation",
        "trello",
        "tripadvisor",
        "tumblr",
        "tumblr-square",
        "twitch",
        "twitter",
        "twitter-square",
        "typo3",
        "uber",
        "uikit",
        "uniregistry",
        "untappd",
        "usb",
        "ussunnah",
        "vaadin",
        "viacoin",
        "viadeo",
        "viadeo-square",
        "viber",
        "vimeo",
        "vimeo-square",
        "vimeo-v",
        "vine",
        "vk",
        "vnv",
        "vuejs",
        "weebly",
        "weibo",
        "weixin",
        "whatsapp",
        "whatsapp-square",
        "whmcs",
        "wikipedia-w",
        "windows",
        "wix",
        "wolf-pack-battalion",
        "wordpress",
        "wordpress-simple",
        "wpbeginner",
        "wpexplorer",
        "wpforms",
        "xbox",
        "xing",
        "xing-square",
        "y-combinator",
        "yahoo",
        "yandex",
        "yandex-international",
        "yelp",
        "yoast",
        "youtube",
        "youtube-square",
        "zhihu"
      ]
    })
  };

  /* script */
  const __vue_script__$8 = script$4;

  /* template */
  var __vue_render__$8 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-menu",
      { attrs: { "offset-y": "", lazy: "" } },
      [
        _c(
          "span",
          { attrs: { slot: "activator" }, slot: "activator" },
          [
            _c(
              "v-container",
              { staticClass: "pa-0", attrs: { fluid: "" } },
              [
                _c(
                  "v-layout",
                  { attrs: { row: "", wrap: "" } },
                  [
                    _c(
                      "v-flex",
                      { attrs: { xs12: "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            label: "Icon",
                            placeholder: " ",
                            "prepend-icon": "image"
                          },
                          model: {
                            value: _vm.icon,
                            callback: function($$v) {
                              _vm.icon = $$v;
                            },
                            expression: "icon"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-card",
          [
            _c(
              "v-container",
              { style: _vm.ddStyle, attrs: { fluid: "", "grid-list-sm": "" } },
              [
                _c(
                  "v-layout",
                  { attrs: { row: "", wrap: "" } },
                  _vm._l(_vm.iconsSolid, function(icon) {
                    return _c(
                      "v-flex",
                      { key: icon, staticClass: "faicon", attrs: { xs1: "" } },
                      [
                        _c(
                          "v-tooltip",
                          { attrs: { left: "" } },
                          [
                            _c("font-awesome-icon", {
                              staticClass: "faicon text--grey",
                              attrs: {
                                slot: "activator",
                                icon: icon,
                                size: "lg"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.onIconSelected(icon)
                                }
                              },
                              slot: "activator"
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v(_vm._s(icon))])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  }),
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$8 = [];
  __vue_render__$8._withStripped = true;

    /* style */
    const __vue_inject_styles__$8 = function (inject) {
      if (!inject) return
      inject("data-v-3b0cbe8f_0", { source: "\n.faicon[data-v-3b0cbe8f] {\n  min-height: 30px;\n  text-align: center;\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/common/IconSelector.vue"],"names":[],"mappings":";AAyrCA;EACA,gBAAA;EACA,kBAAA;AACA","file":"IconSelector.vue","sourcesContent":["<template>\n  <v-menu offset-y lazy>\n    <span slot=\"activator\">\n      <v-container fluid class=\"pa-0\">\n        <v-layout row wrap>\n          <v-flex xs12>\n            <v-text-field label=\"Icon\" placeholder=\" \" v-model=\"icon\" prepend-icon=\"image\"/>\n          </v-flex>\n        </v-layout>\n      </v-container>\n    </span>\n    <v-card>\n      <v-container :style=\"ddStyle\" fluid grid-list-sm>\n        <v-layout row wrap>\n          <v-flex class=\"faicon\" xs1 v-for=\"(icon) in iconsSolid\" :key=\"icon\">\n            <v-tooltip left>\n              <font-awesome-icon\n                class=\"faicon text--grey\"\n                :icon=\"icon\"\n                size=\"lg\"\n                @click=\"onIconSelected(icon)\"\n                slot=\"activator\"\n              />\n              <span>{{ icon }}</span>\n            </v-tooltip>\n          </v-flex>\n        </v-layout>\n      </v-container>\n    </v-card>\n  </v-menu>\n</template>\n\n<script>\nexport default {\n  computed: {\n    // Compute style of logo.\n    ddStyle: function() {\n      return {\n        width: \"500px\",\n        \"max-height\": \"400px\",\n        \"overflow-y\": \"scroll\"\n      };\n    },\n    icon: function() {\n      return this.value;\n    }\n  },\n\n  props: [\"value\"],\n\n  methods: {\n    // Called when icon is selected.\n    onIconSelected: function(e) {\n      this.$data.selectedIcon = e;\n      this.$emit(\"input\", e);\n    }\n  },\n\n  data: () => ({\n    active: null,\n    selectedIcon: null,\n    iconsSolid: [\n      \"address-book\",\n      \"address-card\",\n      \"adjust\",\n      \"air-freshener\",\n      \"align-center\",\n      \"align-justify\",\n      \"align-left\",\n      \"align-right\",\n      \"allergies\",\n      \"ambulance\",\n      \"american-sign-language-interpreting\",\n      \"anchor\",\n      \"angle-double-down\",\n      \"angle-double-left\",\n      \"angle-double-right\",\n      \"angle-double-up\",\n      \"angle-down\",\n      \"angle-left\",\n      \"angle-right\",\n      \"angle-up\",\n      \"angry\",\n      \"apple-alt\",\n      \"archive\",\n      \"archway\",\n      \"arrow-alt-circle-down\",\n      \"arrow-alt-circle-left\",\n      \"arrow-alt-circle-right\",\n      \"arrow-alt-circle-up\",\n      \"arrow-circle-down\",\n      \"arrow-circle-left\",\n      \"arrow-circle-right\",\n      \"arrow-circle-up\",\n      \"arrow-down\",\n      \"arrow-left\",\n      \"arrow-right\",\n      \"arrow-up\",\n      \"arrows-alt\",\n      \"arrows-alt-h\",\n      \"arrows-alt-v\",\n      \"assistive-listening-systems\",\n      \"asterisk\",\n      \"at\",\n      \"atlas\",\n      \"atom\",\n      \"audio-description\",\n      \"award\",\n      \"backspace\",\n      \"backward\",\n      \"balance-scale\",\n      \"ban\",\n      \"band-aid\",\n      \"barcode\",\n      \"bars\",\n      \"baseball-ball\",\n      \"basketball-ball\",\n      \"bath\",\n      \"battery-empty\",\n      \"battery-full\",\n      \"battery-half\",\n      \"battery-quarter\",\n      \"battery-three-quarters\",\n      \"bed\",\n      \"beer\",\n      \"bell\",\n      \"bell-slash\",\n      \"bezier-curve\",\n      \"bicycle\",\n      \"binoculars\",\n      \"birthday-cake\",\n      \"blender\",\n      \"blind\",\n      \"bold\",\n      \"bolt\",\n      \"bomb\",\n      \"bone\",\n      \"bong\",\n      \"book\",\n      \"book-open\",\n      \"book-reader\",\n      \"bookmark\",\n      \"bowling-ball\",\n      \"box\",\n      \"box-open\",\n      \"boxes\",\n      \"braille\",\n      \"brain\",\n      \"briefcase\",\n      \"briefcase-medical\",\n      \"broadcast-tower\",\n      \"broom\",\n      \"brush\",\n      \"bug\",\n      \"building\",\n      \"bullhorn\",\n      \"bullseye\",\n      \"burn\",\n      \"bus\",\n      \"bus-alt\",\n      \"calculator\",\n      \"calendar\",\n      \"calendar-alt\",\n      \"calendar-check\",\n      \"calendar-minus\",\n      \"calendar-plus\",\n      \"calendar-times\",\n      \"camera\",\n      \"camera-retro\",\n      \"cannabis\",\n      \"capsules\",\n      \"car\",\n      \"car-alt\",\n      \"car-battery\",\n      \"car-crash\",\n      \"car-side\",\n      \"caret-down\",\n      \"caret-left\",\n      \"caret-right\",\n      \"caret-square-down\",\n      \"caret-square-left\",\n      \"caret-square-right\",\n      \"caret-square-up\",\n      \"caret-up\",\n      \"cart-arrow-down\",\n      \"cart-plus\",\n      \"certificate\",\n      \"chalkboard\",\n      \"chalkboard-teacher\",\n      \"charging-station\",\n      \"chart-area\",\n      \"chart-bar\",\n      \"chart-line\",\n      \"chart-pie\",\n      \"check\",\n      \"check-circle\",\n      \"check-double\",\n      \"check-square\",\n      \"chess\",\n      \"chess-bishop\",\n      \"chess-board\",\n      \"chess-king\",\n      \"chess-knight\",\n      \"chess-pawn\",\n      \"chess-queen\",\n      \"chess-rook\",\n      \"chevron-circle-down\",\n      \"chevron-circle-left\",\n      \"chevron-circle-right\",\n      \"chevron-circle-up\",\n      \"chevron-down\",\n      \"chevron-left\",\n      \"chevron-right\",\n      \"chevron-up\",\n      \"child\",\n      \"church\",\n      \"circle\",\n      \"circle-notch\",\n      \"clipboard\",\n      \"clipboard-check\",\n      \"clipboard-list\",\n      \"clock\",\n      \"clone\",\n      \"closed-captioning\",\n      \"cloud\",\n      \"cloud-download-alt\",\n      \"cloud-upload-alt\",\n      \"cocktail\",\n      \"code\",\n      \"code-branch\",\n      \"coffee\",\n      \"cog\",\n      \"cogs\",\n      \"coins\",\n      \"columns\",\n      \"comment\",\n      \"comment-alt\",\n      \"comment-dots\",\n      \"comment-slash\",\n      \"comments\",\n      \"compact-disc\",\n      \"compass\",\n      \"compress\",\n      \"concierge-bell\",\n      \"cookie\",\n      \"cookie-bite\",\n      \"copy\",\n      \"copyright\",\n      \"couch\",\n      \"credit-card\",\n      \"crop\",\n      \"crop-alt\",\n      \"crosshairs\",\n      \"crow\",\n      \"crown\",\n      \"cube\",\n      \"cubes\",\n      \"cut\",\n      \"database\",\n      \"deaf\",\n      \"desktop\",\n      \"diagnoses\",\n      \"dice\",\n      \"dice-five\",\n      \"dice-four\",\n      \"dice-one\",\n      \"dice-six\",\n      \"dice-three\",\n      \"dice-two\",\n      \"digital-tachograph\",\n      \"directions\",\n      \"divide\",\n      \"dizzy\",\n      \"dna\",\n      \"dollar-sign\",\n      \"dolly\",\n      \"dolly-flatbed\",\n      \"donate\",\n      \"door-closed\",\n      \"door-open\",\n      \"dot-circle\",\n      \"dove\",\n      \"download\",\n      \"drafting-compass\",\n      \"draw-polygon\",\n      \"drum\",\n      \"drum-steelpan\",\n      \"dumbbell\",\n      \"edit\",\n      \"eject\",\n      \"ellipsis-h\",\n      \"ellipsis-v\",\n      \"envelope\",\n      \"envelope-open\",\n      \"envelope-square\",\n      \"equals\",\n      \"eraser\",\n      \"euro-sign\",\n      \"exchange-alt\",\n      \"exclamation\",\n      \"exclamation-circle\",\n      \"exclamation-triangle\",\n      \"expand\",\n      \"expand-arrows-alt\",\n      \"external-link-alt\",\n      \"external-link-square-alt\",\n      \"eye\",\n      \"eye-dropper\",\n      \"eye-slash\",\n      \"fast-backward\",\n      \"fast-forward\",\n      \"fax\",\n      \"feather\",\n      \"feather-alt\",\n      \"female\",\n      \"fighter-jet\",\n      \"file\",\n      \"file-alt\",\n      \"file-archive\",\n      \"file-audio\",\n      \"file-code\",\n      \"file-contract\",\n      \"file-download\",\n      \"file-excel\",\n      \"file-export\",\n      \"file-image\",\n      \"file-import\",\n      \"file-invoice\",\n      \"file-invoice-dollar\",\n      \"file-medical\",\n      \"file-medical-alt\",\n      \"file-pdf\",\n      \"file-powerpoint\",\n      \"file-prescription\",\n      \"file-signature\",\n      \"file-upload\",\n      \"file-video\",\n      \"file-word\",\n      \"fill\",\n      \"fill-drip\",\n      \"film\",\n      \"filter\",\n      \"fingerprint\",\n      \"fire\",\n      \"fire-extinguisher\",\n      \"first-aid\",\n      \"fish\",\n      \"flag\",\n      \"flag-checkered\",\n      \"flask\",\n      \"flushed\",\n      \"folder\",\n      \"folder-open\",\n      \"font\",\n      \"football-ball\",\n      \"forward\",\n      \"frog\",\n      \"frown\",\n      \"frown-open\",\n      \"futbol\",\n      \"gamepad\",\n      \"gas-pump\",\n      \"gavel\",\n      \"gem\",\n      \"genderless\",\n      \"gift\",\n      \"glass-martini\",\n      \"glass-martini-alt\",\n      \"glasses\",\n      \"globe\",\n      \"globe-africa\",\n      \"globe-americas\",\n      \"globe-asia\",\n      \"golf-ball\",\n      \"graduation-cap\",\n      \"greater-than\",\n      \"greater-than-equal\",\n      \"grimace\",\n      \"grin\",\n      \"grin-alt\",\n      \"grin-beam\",\n      \"grin-beam-sweat\",\n      \"grin-hearts\",\n      \"grin-squint\",\n      \"grin-squint-tears\",\n      \"grin-stars\",\n      \"grin-tears\",\n      \"grin-tongue\",\n      \"grin-tongue-squint\",\n      \"grin-tongue-wink\",\n      \"grin-wink\",\n      \"grip-horizontal\",\n      \"grip-vertical\",\n      \"h-square\",\n      \"hand-holding\",\n      \"hand-holding-heart\",\n      \"hand-holding-usd\",\n      \"hand-lizard\",\n      \"hand-paper\",\n      \"hand-peace\",\n      \"hand-point-down\",\n      \"hand-point-left\",\n      \"hand-point-right\",\n      \"hand-point-up\",\n      \"hand-pointer\",\n      \"hand-rock\",\n      \"hand-scissors\",\n      \"hand-spock\",\n      \"hands\",\n      \"hands-helping\",\n      \"handshake\",\n      \"hashtag\",\n      \"hdd\",\n      \"heading\",\n      \"headphones\",\n      \"headphones-alt\",\n      \"helicopter\",\n      \"highlighter\",\n      \"history\",\n      \"hockey-puck\",\n      \"home\",\n      \"hospital\",\n      \"hospital-alt\",\n      \"hospital-symbol\",\n      \"hot-tub\",\n      \"hotel\",\n      \"hourglass\",\n      \"hourglass-end\",\n      \"hourglass-half\",\n      \"hourglass-start\",\n      \"i-cursor\",\n      \"id-badge\",\n      \"id-card\",\n      \"id-card-alt\",\n      \"image\",\n      \"images\",\n      \"inbox\",\n      \"indent\",\n      \"industry\",\n      \"infinity\",\n      \"info\",\n      \"info-circle\",\n      \"italic\",\n      \"joint\",\n      \"key\",\n      \"keyboard\",\n      \"kiss\",\n      \"kiss-beam\",\n      \"kiss-wink-heart\",\n      \"kiwi-bird\",\n      \"language\",\n      \"laptop\",\n      \"laptop-code\",\n      \"laugh\",\n      \"laugh-beam\",\n      \"laugh-squint\",\n      \"laugh-wink\",\n      \"layer-group\",\n      \"leaf\",\n      \"lemon\",\n      \"less-than\",\n      \"less-than-equal\",\n      \"level-down-alt\",\n      \"level-up-alt\",\n      \"life-ring\",\n      \"lightbulb\",\n      \"link\",\n      \"lira-sign\",\n      \"list\",\n      \"list-alt\",\n      \"list-ol\",\n      \"list-ul\",\n      \"location-arrow\",\n      \"lock\",\n      \"lock-open\",\n      \"long-arrow-alt-down\",\n      \"long-arrow-alt-left\",\n      \"long-arrow-alt-right\",\n      \"long-arrow-alt-up\",\n      \"low-vision\",\n      \"luggage-cart\",\n      \"magic\",\n      \"magnet\",\n      \"male\",\n      \"map\",\n      \"map-marked\",\n      \"map-marked-alt\",\n      \"map-marker\",\n      \"map-marker-alt\",\n      \"map-pin\",\n      \"map-signs\",\n      \"marker\",\n      \"mars\",\n      \"mars-double\",\n      \"mars-stroke\",\n      \"mars-stroke-h\",\n      \"mars-stroke-v\",\n      \"medal\",\n      \"medkit\",\n      \"meh\",\n      \"meh-blank\",\n      \"meh-rolling-eyes\",\n      \"memory\",\n      \"mercury\",\n      \"microchip\",\n      \"microphone\",\n      \"microphone-alt\",\n      \"microphone-alt-slash\",\n      \"microphone-slash\",\n      \"microscope\",\n      \"minus\",\n      \"minus-circle\",\n      \"minus-square\",\n      \"mobile\",\n      \"mobile-alt\",\n      \"money-bill\",\n      \"money-bill-alt\",\n      \"money-bill-wave\",\n      \"money-bill-wave-alt\",\n      \"money-check\",\n      \"money-check-alt\",\n      \"monument\",\n      \"moon\",\n      \"mortar-pestle\",\n      \"motorcycle\",\n      \"mouse-pointer\",\n      \"music\",\n      \"neuter\",\n      \"newspaper\",\n      \"not-equal\",\n      \"notes-medical\",\n      \"object-group\",\n      \"object-ungroup\",\n      \"oil-can\",\n      \"outdent\",\n      \"paint-brush\",\n      \"paint-roller\",\n      \"palette\",\n      \"pallet\",\n      \"paper-plane\",\n      \"paperclip\",\n      \"parachute-box\",\n      \"paragraph\",\n      \"parking\",\n      \"passport\",\n      \"paste\",\n      \"pause\",\n      \"pause-circle\",\n      \"paw\",\n      \"pen\",\n      \"pen-alt\",\n      \"pen-fancy\",\n      \"pen-nib\",\n      \"pen-square\",\n      \"pencil-alt\",\n      \"pencil-ruler\",\n      \"people-carry\",\n      \"percent\",\n      \"percentage\",\n      \"phone\",\n      \"phone-slash\",\n      \"phone-square\",\n      \"phone-volume\",\n      \"piggy-bank\",\n      \"pills\",\n      \"plane\",\n      \"plane-arrival\",\n      \"plane-departure\",\n      \"play\",\n      \"play-circle\",\n      \"plug\",\n      \"plus\",\n      \"plus-circle\",\n      \"plus-square\",\n      \"podcast\",\n      \"poo\",\n      \"portrait\",\n      \"pound-sign\",\n      \"power-off\",\n      \"prescription\",\n      \"prescription-bottle\",\n      \"prescription-bottle-alt\",\n      \"print\",\n      \"procedures\",\n      \"project-diagram\",\n      \"puzzle-piece\",\n      \"qrcode\",\n      \"question\",\n      \"question-circle\",\n      \"quidditch\",\n      \"quote-left\",\n      \"quote-right\",\n      \"random\",\n      \"receipt\",\n      \"recycle\",\n      \"redo\",\n      \"redo-alt\",\n      \"registered\",\n      \"reply\",\n      \"reply-all\",\n      \"retweet\",\n      \"ribbon\",\n      \"road\",\n      \"robot\",\n      \"rocket\",\n      \"route\",\n      \"rss\",\n      \"rss-square\",\n      \"ruble-sign\",\n      \"ruler\",\n      \"ruler-combined\",\n      \"ruler-horizontal\",\n      \"ruler-vertical\",\n      \"rupee-sign\",\n      \"sad-cry\",\n      \"sad-tear\",\n      \"save\",\n      \"school\",\n      \"screwdriver\",\n      \"search\",\n      \"search-minus\",\n      \"search-plus\",\n      \"seedling\",\n      \"server\",\n      \"shapes\",\n      \"share\",\n      \"share-alt\",\n      \"share-alt-square\",\n      \"share-square\",\n      \"shekel-sign\",\n      \"shield-alt\",\n      \"ship\",\n      \"shipping-fast\",\n      \"shoe-prints\",\n      \"shopping-bag\",\n      \"shopping-basket\",\n      \"shopping-cart\",\n      \"shower\",\n      \"shuttle-van\",\n      \"sign\",\n      \"sign-in-alt\",\n      \"sign-language\",\n      \"sign-out-alt\",\n      \"signal\",\n      \"signature\",\n      \"sitemap\",\n      \"skull\",\n      \"sliders-h\",\n      \"smile\",\n      \"smile-beam\",\n      \"smile-wink\",\n      \"smoking\",\n      \"smoking-ban\",\n      \"snowflake\",\n      \"solar-panel\",\n      \"sort\",\n      \"sort-alpha-down\",\n      \"sort-alpha-up\",\n      \"sort-amount-down\",\n      \"sort-amount-up\",\n      \"sort-down\",\n      \"sort-numeric-down\",\n      \"sort-numeric-up\",\n      \"sort-up\",\n      \"spa\",\n      \"space-shuttle\",\n      \"spinner\",\n      \"splotch\",\n      \"spray-can\",\n      \"square\",\n      \"square-full\",\n      \"stamp\",\n      \"star\",\n      \"star-half\",\n      \"star-half-alt\",\n      \"star-of-life\",\n      \"step-backward\",\n      \"step-forward\",\n      \"stethoscope\",\n      \"sticky-note\",\n      \"stop\",\n      \"stop-circle\",\n      \"stopwatch\",\n      \"store\",\n      \"store-alt\",\n      \"stream\",\n      \"street-view\",\n      \"strikethrough\",\n      \"stroopwafel\",\n      \"subscript\",\n      \"subway\",\n      \"suitcase\",\n      \"suitcase-rolling\",\n      \"sun\",\n      \"superscript\",\n      \"surprise\",\n      \"swatchbook\",\n      \"swimmer\",\n      \"swimming-pool\",\n      \"sync\",\n      \"sync-alt\",\n      \"syringe\",\n      \"table\",\n      \"table-tennis\",\n      \"tablet\",\n      \"tablet-alt\",\n      \"tablets\",\n      \"tachometer-alt\",\n      \"tag\",\n      \"tags\",\n      \"tape\",\n      \"tasks\",\n      \"taxi\",\n      \"teeth\",\n      \"teeth-open\",\n      \"terminal\",\n      \"text-height\",\n      \"text-width\",\n      \"th\",\n      \"th-large\",\n      \"th-list\",\n      \"theater-masks\",\n      \"thermometer\",\n      \"thermometer-empty\",\n      \"thermometer-full\",\n      \"thermometer-half\",\n      \"thermometer-quarter\",\n      \"thermometer-three-quarters\",\n      \"thumbs-down\",\n      \"thumbs-up\",\n      \"thumbtack\",\n      \"ticket-alt\",\n      \"times\",\n      \"times-circle\",\n      \"tint\",\n      \"tint-slash\",\n      \"tired\",\n      \"toggle-off\",\n      \"toggle-on\",\n      \"toolbox\",\n      \"tooth\",\n      \"trademark\",\n      \"traffic-light\",\n      \"train\",\n      \"transgender\",\n      \"transgender-alt\",\n      \"trash\",\n      \"trash-alt\",\n      \"tree\",\n      \"trophy\",\n      \"truck\",\n      \"truck-loading\",\n      \"truck-monster\",\n      \"truck-moving\",\n      \"truck-pickup\",\n      \"tshirt\",\n      \"tty\",\n      \"tv\",\n      \"umbrella\",\n      \"umbrella-beach\",\n      \"underline\",\n      \"undo\",\n      \"undo-alt\",\n      \"universal-access\",\n      \"university\",\n      \"unlink\",\n      \"unlock\",\n      \"unlock-alt\",\n      \"upload\",\n      \"user\",\n      \"user-alt\",\n      \"user-alt-slash\",\n      \"user-astronaut\",\n      \"user-check\",\n      \"user-circle\",\n      \"user-clock\",\n      \"user-cog\",\n      \"user-edit\",\n      \"user-friends\",\n      \"user-graduate\",\n      \"user-lock\",\n      \"user-md\",\n      \"user-minus\",\n      \"user-ninja\",\n      \"user-plus\",\n      \"user-secret\",\n      \"user-shield\",\n      \"user-slash\",\n      \"user-tag\",\n      \"user-tie\",\n      \"user-times\",\n      \"users\",\n      \"users-cog\",\n      \"utensil-spoon\",\n      \"utensils\",\n      \"vector-square\",\n      \"venus\",\n      \"venus-double\",\n      \"venus-mars\",\n      \"vial\",\n      \"vials\",\n      \"video\",\n      \"video-slash\",\n      \"volleyball-ball\",\n      \"volume-down\",\n      \"volume-off\",\n      \"volume-up\",\n      \"walking\",\n      \"wallet\",\n      \"warehouse\",\n      \"weight\",\n      \"weight-hanging\",\n      \"wheelchair\",\n      \"wifi\",\n      \"window-close\",\n      \"window-maximize\",\n      \"window-minimize\",\n      \"window-restore\",\n      \"wine-glass\",\n      \"wine-glass-alt\",\n      \"won-sign\",\n      \"wrench\",\n      \"x-ray\",\n      \"yen-sign\"\n    ],\n    iconsBrand: [\n      \"500px\",\n      \"accessible-icon\",\n      \"accusoft\",\n      \"adn\",\n      \"adversal\",\n      \"affiliatetheme\",\n      \"algolia\",\n      \"amazon\",\n      \"amazon-pay\",\n      \"amilia\",\n      \"android\",\n      \"angellist\",\n      \"angrycreative\",\n      \"angular\",\n      \"app-store\",\n      \"app-store-ios\",\n      \"apper\",\n      \"apple\",\n      \"apple-pay\",\n      \"asymmetrik\",\n      \"audible\",\n      \"autoprefixer\",\n      \"avianex\",\n      \"aviato\",\n      \"aws\",\n      \"bandcamp\",\n      \"behance\",\n      \"behance-square\",\n      \"bimobject\",\n      \"bitbucket\",\n      \"bitcoin\",\n      \"bity\",\n      \"black-tie\",\n      \"blackberry\",\n      \"blogger\",\n      \"blogger-b\",\n      \"bluetooth\",\n      \"bluetooth-b\",\n      \"btc\",\n      \"buromobelexperte\",\n      \"buysellads\",\n      \"cc-amazon-pay\",\n      \"cc-amex\",\n      \"cc-apple-pay\",\n      \"cc-diners-club\",\n      \"cc-discover\",\n      \"cc-jcb\",\n      \"cc-mastercard\",\n      \"cc-paypal\",\n      \"cc-stripe\",\n      \"cc-visa\",\n      \"centercode\",\n      \"chrome\",\n      \"cloudscale\",\n      \"cloudsmith\",\n      \"cloudversify\",\n      \"vcodepen\",\n      \"codiepie\",\n      \"connectdevelop\",\n      \"contao\",\n      \"cpanel\",\n      \"creative-commons\",\n      \"creative-commons-by\",\n      \"creative-commons-nc\",\n      \"creative-commons-nc-eu\",\n      \"creative-commons-nc-jp\",\n      \"creative-commons-nd\",\n      \"creative-commons-pd\",\n      \"creative-commons-pd-alt\",\n      \"creative-commons-remix\",\n      \"creative-commons-sa\",\n      \"creative-commons-sampling\",\n      \"creative-commons-sampling-plus\",\n      \"creative-commons-share\",\n      \"css3\",\n      \"css3-alt\",\n      \"cuttlefish\",\n      \"d-and-d\",\n      \"dashcube\",\n      \"delicious\",\n      \"deploydog\",\n      \"deskpro\",\n      \"deviantart\",\n      \"digg\",\n      \"digital-ocean\",\n      \"discord\",\n      \"discourse\",\n      \"dochub\",\n      \"docker\",\n      \"draft2digital\",\n      \"dribbble\",\n      \"dribbble-square\",\n      \"dropbox\",\n      \"drupal\",\n      \"dyalog\",\n      \"earlybirds\",\n      \"ebay\",\n      \"edge\",\n      \"elementor\",\n      \"ello\",\n      \"ember\",\n      \"empire\",\n      \"envira\",\n      \"erlang\",\n      \"ethereum\",\n      \"etsy\",\n      \"expeditedssl\",\n      \"facebook\",\n      \"facebook-f\",\n      \"facebook-messenger\",\n      \"facebook-square\",\n      \"firefox\",\n      \"first-order\",\n      \"first-order-alt\",\n      \"firstdraft\",\n      \"flickr\",\n      \"flipboard\",\n      \"fly\",\n      \"font-awesome\",\n      \"font-awesome-alt\",\n      \"font-awesome-flag\",\n      \"fonticons\",\n      \"fonticons-fi\",\n      \"fort-awesome\",\n      \"fort-awesome-alt\",\n      \"forumbee\",\n      \"foursquare\",\n      \"free-code-camp\",\n      \"freebsd\",\n      \"fulcrum\",\n      \"galactic-republic\",\n      \"galactic-senate\",\n      \"get-pocket\",\n      \"gg\",\n      \"gg-circle\",\n      \"git\",\n      \"git-square\",\n      \"github\",\n      \"github-alt\",\n      \"github-square\",\n      \"gitkraken\",\n      \"gitlab\",\n      \"gitter\",\n      \"glide\",\n      \"glide-g\",\n      \"gofore\",\n      \"goodreads\",\n      \"goodreads-g\",\n      \"google\",\n      \"google-drive\",\n      \"google-play\",\n      \"google-plus\",\n      \"google-plus-g\",\n      \"google-plus-square\",\n      \"google-wallet\",\n      \"gratipay\",\n      \"grav\",\n      \"gripfire\",\n      \"grunt\",\n      \"gulp\",\n      \"hacker-news\",\n      \"hacker-news-square\",\n      \"hackerrank\",\n      \"hips\",\n      \"hire-a-helper\",\n      \"hooli\",\n      \"hornbill\",\n      \"hotjar\",\n      \"houzz\",\n      \"html5\",\n      \"hubspot\",\n      \"imdb\",\n      \"instagram\",\n      \"internet-explorer\",\n      \"ioxhost\",\n      \"itunes\",\n      \"itunes-note\",\n      \"java\",\n      \"jedi-order\",\n      \"jenkins\",\n      \"joget\",\n      \"joomla\",\n      \"js\",\n      \"js-square\",\n      \"jsfiddle\",\n      \"kaggle\",\n      \"keybase\",\n      \"keycdn\",\n      \"kickstarter\",\n      \"kickstarter-k\",\n      \"korvue\",\n      \"laravel\",\n      \"lastfm\",\n      \"lastfm-square\",\n      \"leanpub\",\n      \"less\",\n      \"line\",\n      \"linkedin\",\n      \"linkedin-in\",\n      \"linode\",\n      \"linux\",\n      \"lyft\",\n      \"magento\",\n      \"mailchimp\",\n      \"mandalorian\",\n      \"markdown\",\n      \"mastodon\",\n      \"maxcdn\",\n      \"medapps\",\n      \"medium\",\n      \"medium-m\",\n      \"medrt\",\n      \"meetup\",\n      \"megaport\",\n      \"microsoft\",\n      \"mix\",\n      \"mixcloud\",\n      \"mizuni\",\n      \"modx\",\n      \"monero\",\n      \"napster\",\n      \"neos\",\n      \"nimblr\",\n      \"nintendo-switch\",\n      \"node\",\n      \"node-js\",\n      \"npm\",\n      \"ns8\",\n      \"nutritionix\",\n      \"odnoklassniki\",\n      \"odnoklassniki-square\",\n      \"old-republic\",\n      \"opencart\",\n      \"openid\",\n      \"opera\",\n      \"optin-monster\",\n      \"osi\",\n      \"page4\",\n      \"pagelines\",\n      \"palfed\",\n      \"patreon\",\n      \"paypal\",\n      \"periscope\",\n      \"phabricator\",\n      \"phoenix-framework\",\n      \"phoenix-squadron\",\n      \"php\",\n      \"pied-piper\",\n      \"pied-piper-alt\",\n      \"pied-piper-hat\",\n      \"pied-piper-pp\",\n      \"pinterest\",\n      \"pinterest-p\",\n      \"pinterest-square\",\n      \"playstation\",\n      \"product-hunt\",\n      \"pushed\",\n      \"python\",\n      \"qq\",\n      \"quinscape\",\n      \"quora\",\n      \"r-project\",\n      \"ravelry\",\n      \"react\",\n      \"readme\",\n      \"rebel\",\n      \"red-river\",\n      \"reddit\",\n      \"reddit-alien\",\n      \"reddit-square\",\n      \"rendact\",\n      \"renren\",\n      \"replyd\",\n      \"researchgate\",\n      \"resolving\",\n      \"rev\",\n      \"rocketchat\",\n      \"rockrms\",\n      \"safari\",\n      \"sass\",\n      \"schlix\",\n      \"scribd\",\n      \"searchengin\",\n      \"sellcast\",\n      \"sellsy\",\n      \"servicestack\",\n      \"shirtsinbulk\",\n      \"shopware\",\n      \"simplybuilt\",\n      \"sistrix\",\n      \"sith\",\n      \"skyatlas\",\n      \"skype\",\n      \"slack\",\n      \"slack-hash\",\n      \"slideshare\",\n      \"snapchat\",\n      \"snapchat-ghost\",\n      \"snapchat-square\",\n      \"soundcloud\",\n      \"speakap\",\n      \"spotify\",\n      \"squarespace\",\n      \"stack-exchange\",\n      \"stack-overflow\",\n      \"staylinked\",\n      \"steam\",\n      \"steam-square\",\n      \"steam-symbol\",\n      \"sticker-mule\",\n      \"strava\",\n      \"stripe\",\n      \"stripe-s\",\n      \"studiovinari\",\n      \"stumbleupon\",\n      \"stumbleupon-circle\",\n      \"superpowers\",\n      \"supple\",\n      \"telegram\",\n      \"telegram-plane\",\n      \"tencent-weibo\",\n      \"themeco\",\n      \"themeisle\",\n      \"trade-federation\",\n      \"trello\",\n      \"tripadvisor\",\n      \"tumblr\",\n      \"tumblr-square\",\n      \"twitch\",\n      \"twitter\",\n      \"twitter-square\",\n      \"typo3\",\n      \"uber\",\n      \"uikit\",\n      \"uniregistry\",\n      \"untappd\",\n      \"usb\",\n      \"ussunnah\",\n      \"vaadin\",\n      \"viacoin\",\n      \"viadeo\",\n      \"viadeo-square\",\n      \"viber\",\n      \"vimeo\",\n      \"vimeo-square\",\n      \"vimeo-v\",\n      \"vine\",\n      \"vk\",\n      \"vnv\",\n      \"vuejs\",\n      \"weebly\",\n      \"weibo\",\n      \"weixin\",\n      \"whatsapp\",\n      \"whatsapp-square\",\n      \"whmcs\",\n      \"wikipedia-w\",\n      \"windows\",\n      \"wix\",\n      \"wolf-pack-battalion\",\n      \"wordpress\",\n      \"wordpress-simple\",\n      \"wpbeginner\",\n      \"wpexplorer\",\n      \"wpforms\",\n      \"xbox\",\n      \"xing\",\n      \"xing-square\",\n      \"y-combinator\",\n      \"yahoo\",\n      \"yandex\",\n      \"yandex-international\",\n      \"yelp\",\n      \"yoast\",\n      \"youtube\",\n      \"youtube-square\",\n      \"zhihu\"\n    ]\n  })\n};\n</script>\n\n<style scoped>\n.faicon {\n  min-height: 30px;\n  text-align: center;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$8 = "data-v-3b0cbe8f";
    /* module identifier */
    const __vue_module_identifier__$8 = undefined;
    /* functional template */
    const __vue_is_functional_template__$8 = false;
    /* style inject SSR */
    

    
    var IconSelector = normalizeComponent_1(
      { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
      __vue_inject_styles__$8,
      __vue_script__$8,
      __vue_scope_id__$8,
      __vue_is_functional_template__$8,
      __vue_module_identifier__$8,
      browser,
      undefined
    );

  var ImageZoomOnHover = /** @class */ (function (_super) {
      __extends(ImageZoomOnHover, _super);
      function ImageZoomOnHover() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(ImageZoomOnHover.prototype, "imageStyle", {
          // Compute style of image.
          get: function () {
              return {
                  "background-color": "#fff",
                  "background-image": "url(" + this.imageUrl + ")",
                  "background-size": "contain",
                  "background-position": "center",
                  transition: "all 0.5s ease",
                  height: "100%",
                  width: "100%"
              };
          },
          enumerable: true,
          configurable: true
      });
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], ImageZoomOnHover.prototype, "imageUrl", void 0);
      ImageZoomOnHover = __decorate([
          sitewhereIdeCommon.Component({})
      ], ImageZoomOnHover);
      return ImageZoomOnHover;
  }(Vue));

  /* script */
  const __vue_script__$9 = ImageZoomOnHover;

  /* template */
  var __vue_render__$9 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "zoomer" }, [
      _c("div", { staticClass: "zoomed", style: _vm.imageStyle })
    ])
  };
  var __vue_staticRenderFns__$9 = [];
  __vue_render__$9._withStripped = true;

    /* style */
    const __vue_inject_styles__$9 = function (inject) {
      if (!inject) return
      inject("data-v-54a63a44_0", { source: "\n.zoomer[data-v-54a63a44] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n  margin: 10px;\n}\n.zoomed[data-v-54a63a44] {\n  transition: all 0.5s ease;\n}\n.zoomed[data-v-54a63a44]:hover {\n  transform: scale(1.05);\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/common/ImageZoomOnHover.vue"],"names":[],"mappings":";AA8BA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,sBAAA;AACA","file":"ImageZoomOnHover.vue","sourcesContent":["<template>\n  <div class=\"zoomer\">\n    <div class=\"zoomed\" :style=\"imageStyle\" />\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport { Component, Prop } from \"sitewhere-ide-common\";\n\n@Component({})\nexport default class ImageZoomOnHover extends Vue {\n  @Prop() readonly imageUrl!: string;\n\n  // Compute style of image.\n  get imageStyle() {\n    return {\n      \"background-color\": \"#fff\",\n      \"background-image\": \"url(\" + this.imageUrl + \")\",\n      \"background-size\": \"contain\",\n      \"background-position\": \"center\",\n      transition: \"all 0.5s ease\",\n      height: \"100%\",\n      width: \"100%\"\n    };\n  }\n}\n</script>\n\n<style scoped>\n.zoomer {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n  margin: 10px;\n}\n.zoomed {\n  transition: all 0.5s ease;\n}\n.zoomed:hover {\n  transform: scale(1.05);\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$9 = "data-v-54a63a44";
    /* module identifier */
    const __vue_module_identifier__$9 = undefined;
    /* functional template */
    const __vue_is_functional_template__$9 = false;
    /* style inject SSR */
    

    
    var ImageZoomOnHover$1 = normalizeComponent_1(
      { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
      __vue_inject_styles__$9,
      __vue_script__$9,
      __vue_scope_id__$9,
      __vue_is_functional_template__$9,
      __vue_module_identifier__$9,
      browser,
      undefined
    );

  /**
   * Converts metadata object into array.
   * @param meta
   */
  function metadataToArray(meta) {
      var flat = [];
      if (meta) {
          for (var key in meta) {
              if (meta.hasOwnProperty(key)) {
                  flat.push({ name: key, value: meta[key] });
              }
          }
      }
      return flat;
  }
  /**
   * Converts array to metadata object.
   * @param arrayMeta
   */
  function arrayToMetadata(arrayMeta) {
      var metadata = {};
      if (arrayMeta) {
          for (var i = 0; i < arrayMeta.length; i++) {
              metadata[arrayMeta[i].name] = arrayMeta[i].value;
          }
      }
      return metadata;
  }
  /**
   * Routes to a applicaton-relative URL.
   * @param component
   * @param url
   */
  function routeTo(component, url) {
      var tenant = component.$store.getters.selectedTenant;
      if (tenant) {
          component.$router.push("/tenants/" + tenant.token + url);
      }
  }
  /** Generate a unique id */
  function generateUniqueId() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
          var r = crypto.getRandomValues(new Uint8Array(1))[0] % 16 | 0;
          var v = c === "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
      });
  }
  /**
   * Move an element in an array from one index to another.
   * @param arr
   * @param old_index
   * @param new_index
   */
  function arrayMove(arr, old_index, new_index) {
      while (old_index < 0) {
          old_index += arr.length;
      }
      while (new_index < 0) {
          new_index += arr.length;
      }
      if (new_index >= arr.length) {
          var k = new_index - arr.length;
          while (k-- + 1) {
              arr.push(undefined);
          }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
      return arr;
  }

  //

  var script$5 = {
    data: () => ({}),

    props: ["label", "url", "text"],

    components: {
      HeaderField
    },

    methods: {
      // Handle link clicked.
      onLinkClicked: function() {
        routeTo(this, this.url);
      }
    }
  };

  /* script */
  const __vue_script__$a = script$5;

  /* template */
  var __vue_render__$a = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("header-field", { attrs: { label: _vm.label } }, [
      _c(
        "a",
        {
          staticStyle: { color: "#33c", "font-weight": "700" },
          on: { click: _vm.onLinkClicked }
        },
        [_vm._v(_vm._s(_vm.text))]
      )
    ])
  };
  var __vue_staticRenderFns__$a = [];
  __vue_render__$a._withStripped = true;

    /* style */
    const __vue_inject_styles__$a = function (inject) {
      if (!inject) return
      inject("data-v-3ed9dece_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"LinkedHeaderField.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$a = "data-v-3ed9dece";
    /* module identifier */
    const __vue_module_identifier__$a = undefined;
    /* functional template */
    const __vue_is_functional_template__$a = false;
    /* style inject SSR */
    

    
    var LinkedHeaderField = normalizeComponent_1(
      { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
      __vue_inject_styles__$a,
      __vue_script__$a,
      __vue_scope_id__$a,
      __vue_is_functional_template__$a,
      __vue_module_identifier__$a,
      browser,
      undefined
    );

  var LoadingOverlay = /** @class */ (function (_super) {
      __extends(LoadingOverlay, _super);
      function LoadingOverlay() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], LoadingOverlay.prototype, "loadingMessage", void 0);
      LoadingOverlay = __decorate([
          sitewhereIdeCommon.Component({})
      ], LoadingOverlay);
      return LoadingOverlay;
  }(Vue));

  /* script */
  const __vue_script__$b = LoadingOverlay;

  /* template */
  var __vue_render__$b = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "overlay" },
      [
        _c(
          "v-container",
          { attrs: { "fill-height": "" } },
          [
            _c(
              "v-layout",
              {
                attrs: {
                  "align-center": "",
                  "justify-center": "",
                  column: "",
                  "fill-height": ""
                }
              },
              [
                _c("v-flex", { attrs: { xs5: "" } }),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs1: "" } },
                  [
                    _c("v-progress-circular", {
                      staticClass: "mb-4",
                      attrs: { size: "65", color: "#666", indeterminate: true }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-flex", { attrs: { xs1: "" } }, [
                  _c(
                    "div",
                    { staticClass: "subheading", staticStyle: { color: "#666" } },
                    [_vm._v(_vm._s(_vm.loadingMessage || "Loading ..."))]
                  )
                ]),
                _vm._v(" "),
                _c("v-flex", { attrs: { xs5: "" } })
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$b = [];
  __vue_render__$b._withStripped = true;

    /* style */
    const __vue_inject_styles__$b = function (inject) {
      if (!inject) return
      inject("data-v-1a54df46_0", { source: "\n.overlay[data-v-1a54df46] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/common/LoadingOverlay.vue"],"names":[],"mappings":";AA6BA;EACA,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;AACA","file":"LoadingOverlay.vue","sourcesContent":["<template>\n  <div class=\"overlay\">\n    <v-container fill-height>\n      <v-layout align-center justify-center column fill-height>\n        <v-flex xs5/>\n        <v-flex xs1>\n          <v-progress-circular size=\"65\" color=\"#666\" class=\"mb-4\" :indeterminate=\"true\"/>\n        </v-flex>\n        <v-flex xs1>\n          <div class=\"subheading\" style=\"color: #666;\">{{ loadingMessage || 'Loading ...' }}</div>\n        </v-flex>\n        <v-flex xs5/>\n      </v-layout>\n    </v-container>\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport { Component, Prop } from \"sitewhere-ide-common\";\n\nimport Vue from \"vue\";\n\n@Component({})\nexport default class LoadingOverlay extends Vue {\n  @Prop() readonly loadingMessage!: string;\n}\n</script>\n\n<style scoped>\n.overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$b = "data-v-1a54df46";
    /* module identifier */
    const __vue_module_identifier__$b = undefined;
    /* functional template */
    const __vue_is_functional_template__$b = false;
    /* style inject SSR */
    

    
    var LoadingOverlay$1 = normalizeComponent_1(
      { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
      __vue_inject_styles__$b,
      __vue_script__$b,
      __vue_scope_id__$b,
      __vue_is_functional_template__$b,
      __vue_module_identifier__$b,
      browser,
      undefined
    );

  var DialogForm = /** @class */ (function (_super) {
      __extends(DialogForm, _super);
      function DialogForm() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      DialogForm = __decorate([
          sitewhereIdeCommon.Component({})
      ], DialogForm);
      return DialogForm;
  }(Vue));

  /* script */
  const __vue_script__$c = DialogForm;

  /* template */
  var __vue_render__$c = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-container",
      { staticClass: "pa-3", attrs: { fluid: "" } },
      [
        _c(
          "v-layout",
          { staticClass: "pl-2 pr-2 pt-0 pb-0", attrs: { row: "", wrap: "" } },
          [_vm._t("default")],
          2
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$c = [];
  __vue_render__$c._withStripped = true;

    /* style */
    const __vue_inject_styles__$c = undefined;
    /* scoped */
    const __vue_scope_id__$c = undefined;
    /* module identifier */
    const __vue_module_identifier__$c = undefined;
    /* functional template */
    const __vue_is_functional_template__$c = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var DialogForm$1 = normalizeComponent_1(
      { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
      __vue_inject_styles__$c,
      __vue_script__$c,
      __vue_scope_id__$c,
      __vue_is_functional_template__$c,
      __vue_module_identifier__$c,
      undefined,
      undefined
    );

  var FormDateTimePicker = /** @class */ (function (_super) {
      __extends(FormDateTimePicker, _super);
      function FormDateTimePicker() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(FormDateTimePicker.prototype, "wrapped", {
          get: function () {
              return this.value;
          },
          set: function (updated) {
              this.$emit("input", updated);
          },
          enumerable: true,
          configurable: true
      });
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormDateTimePicker.prototype, "title", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormDateTimePicker.prototype, "label", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormDateTimePicker.prototype, "icon", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Boolean)
      ], FormDateTimePicker.prototype, "required", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormDateTimePicker.prototype, "value", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormDateTimePicker.prototype, "type", void 0);
      FormDateTimePicker = __decorate([
          sitewhereIdeCommon.Component({})
      ], FormDateTimePicker);
      return FormDateTimePicker;
  }(Vue));

  /* script */
  const __vue_script__$d = FormDateTimePicker;

  /* template */
  var __vue_render__$d = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "mb-3" },
      [
        _c("date-time-picker", {
          attrs: { title: _vm.title, label: _vm.label },
          model: {
            value: _vm.wrapped,
            callback: function($$v) {
              _vm.wrapped = $$v;
            },
            expression: "wrapped"
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "verror" }, [_vm._t("default")], 2)
      ],
      1
    )
  };
  var __vue_staticRenderFns__$d = [];
  __vue_render__$d._withStripped = true;

    /* style */
    const __vue_inject_styles__$d = undefined;
    /* scoped */
    const __vue_scope_id__$d = undefined;
    /* module identifier */
    const __vue_module_identifier__$d = undefined;
    /* functional template */
    const __vue_is_functional_template__$d = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var FormDateTimePicker$1 = normalizeComponent_1(
      { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
      __vue_inject_styles__$d,
      __vue_script__$d,
      __vue_scope_id__$d,
      __vue_is_functional_template__$d,
      __vue_module_identifier__$d,
      undefined,
      undefined
    );

  var FormSelect = /** @class */ (function (_super) {
      __extends(FormSelect, _super);
      function FormSelect() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(FormSelect.prototype, "wrapped", {
          get: function () {
              return this.value;
          },
          set: function (updated) {
              this.$emit("input", updated);
          },
          enumerable: true,
          configurable: true
      });
      FormSelect.prototype.onSelectionChanged = function (selection) {
          this.$emit("change", selection);
      };
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormSelect.prototype, "title", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormSelect.prototype, "label", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormSelect.prototype, "icon", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Array)
      ], FormSelect.prototype, "items", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Boolean)
      ], FormSelect.prototype, "required", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormSelect.prototype, "value", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormSelect.prototype, "itemText", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormSelect.prototype, "itemValue", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Boolean)
      ], FormSelect.prototype, "multiple", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Boolean)
      ], FormSelect.prototype, "chips", void 0);
      FormSelect = __decorate([
          sitewhereIdeCommon.Component({})
      ], FormSelect);
      return FormSelect;
  }(Vue));

  /* script */
  const __vue_script__$e = FormSelect;

  /* template */
  var __vue_render__$e = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "mb-3" },
      [
        _c("v-select", {
          attrs: {
            required: _vm.required,
            title: _vm.title,
            label: _vm.label,
            items: _vm.items,
            multiple: _vm.multiple,
            "item-text": _vm.itemText,
            "item-value": _vm.itemValue,
            chips: _vm.chips,
            "prepend-icon": _vm.icon,
            placeholder: " "
          },
          on: { change: _vm.onSelectionChanged },
          model: {
            value: _vm.wrapped,
            callback: function($$v) {
              _vm.wrapped = $$v;
            },
            expression: "wrapped"
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "verror" }, [_vm._t("default")], 2)
      ],
      1
    )
  };
  var __vue_staticRenderFns__$e = [];
  __vue_render__$e._withStripped = true;

    /* style */
    const __vue_inject_styles__$e = function (inject) {
      if (!inject) return
      inject("data-v-2d95df1f_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"FormSelect.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$e = "data-v-2d95df1f";
    /* module identifier */
    const __vue_module_identifier__$e = undefined;
    /* functional template */
    const __vue_is_functional_template__$e = false;
    /* style inject SSR */
    

    
    var FormSelect$1 = normalizeComponent_1(
      { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
      __vue_inject_styles__$e,
      __vue_script__$e,
      __vue_scope_id__$e,
      __vue_is_functional_template__$e,
      __vue_module_identifier__$e,
      browser,
      undefined
    );

  var FormSelect$2 = /** @class */ (function (_super) {
      __extends(FormSelect, _super);
      function FormSelect() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(FormSelect.prototype, "wrapped", {
          get: function () {
              return this.value;
          },
          set: function (updated) {
              this.$emit("input", updated);
          },
          enumerable: true,
          configurable: true
      });
      FormSelect.prototype.onSelectionChanged = function (selection) {
          this.$emit("change", selection);
      };
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormSelect.prototype, "title", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormSelect.prototype, "label", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormSelect.prototype, "icon", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Array)
      ], FormSelect.prototype, "items", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Boolean)
      ], FormSelect.prototype, "required", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormSelect.prototype, "value", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormSelect.prototype, "itemText", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormSelect.prototype, "itemValue", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Boolean)
      ], FormSelect.prototype, "multiple", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Boolean)
      ], FormSelect.prototype, "chips", void 0);
      FormSelect = __decorate([
          sitewhereIdeCommon.Component({})
      ], FormSelect);
      return FormSelect;
  }(Vue));

  /* script */
  const __vue_script__$f = FormSelect$2;

  /* template */
  var __vue_render__$f = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "ma-0 pa-0" },
      [
        _c("v-select", {
          attrs: {
            "hide-details": "",
            required: _vm.required,
            title: _vm.title,
            items: _vm.items,
            multiple: _vm.multiple,
            "item-text": _vm.itemText,
            "item-value": _vm.itemValue,
            chips: _vm.chips,
            placeholder: " "
          },
          on: { change: _vm.onSelectionChanged },
          model: {
            value: _vm.wrapped,
            callback: function($$v) {
              _vm.wrapped = $$v;
            },
            expression: "wrapped"
          }
        })
      ],
      1
    )
  };
  var __vue_staticRenderFns__$f = [];
  __vue_render__$f._withStripped = true;

    /* style */
    const __vue_inject_styles__$f = function (inject) {
      if (!inject) return
      inject("data-v-97d4ccd2_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"FormSelectCondensed.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$f = "data-v-97d4ccd2";
    /* module identifier */
    const __vue_module_identifier__$f = undefined;
    /* functional template */
    const __vue_is_functional_template__$f = false;
    /* style inject SSR */
    

    
    var FormSelectCondensed = normalizeComponent_1(
      { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
      __vue_inject_styles__$f,
      __vue_script__$f,
      __vue_scope_id__$f,
      __vue_is_functional_template__$f,
      __vue_module_identifier__$f,
      browser,
      undefined
    );

  var FormText = /** @class */ (function (_super) {
      __extends(FormText, _super);
      function FormText() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(FormText.prototype, "wrapped", {
          get: function () {
              return this.value;
          },
          set: function (updated) {
              this.$emit("input", updated);
          },
          enumerable: true,
          configurable: true
      });
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormText.prototype, "title", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormText.prototype, "label", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormText.prototype, "icon", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Boolean)
      ], FormText.prototype, "required", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormText.prototype, "value", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormText.prototype, "type", void 0);
      FormText = __decorate([
          sitewhereIdeCommon.Component({})
      ], FormText);
      return FormText;
  }(Vue));

  /* script */
  const __vue_script__$g = FormText;

  /* template */
  var __vue_render__$g = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "mb-3" },
      [
        _c("v-text-field", {
          attrs: {
            required: _vm.required,
            title: _vm.title,
            label: _vm.label,
            type: _vm.type,
            placeholder: " ",
            "hide-details": "",
            "prepend-icon": _vm.icon
          },
          model: {
            value: _vm.wrapped,
            callback: function($$v) {
              _vm.wrapped = $$v;
            },
            expression: "wrapped"
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "verror" }, [_vm._t("default")], 2)
      ],
      1
    )
  };
  var __vue_staticRenderFns__$g = [];
  __vue_render__$g._withStripped = true;

    /* style */
    const __vue_inject_styles__$g = function (inject) {
      if (!inject) return
      inject("data-v-563a41d9_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"FormText.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$g = "data-v-563a41d9";
    /* module identifier */
    const __vue_module_identifier__$g = undefined;
    /* functional template */
    const __vue_is_functional_template__$g = false;
    /* style inject SSR */
    

    
    var FormText$1 = normalizeComponent_1(
      { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
      __vue_inject_styles__$g,
      __vue_script__$g,
      __vue_scope_id__$g,
      __vue_is_functional_template__$g,
      __vue_module_identifier__$g,
      browser,
      undefined
    );

  var FormText$2 = /** @class */ (function (_super) {
      __extends(FormText, _super);
      function FormText() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(FormText.prototype, "wrapped", {
          get: function () {
              return this.value;
          },
          set: function (updated) {
              this.$emit("input", updated);
          },
          enumerable: true,
          configurable: true
      });
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormText.prototype, "title", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormText.prototype, "label", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormText.prototype, "icon", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Boolean)
      ], FormText.prototype, "required", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], FormText.prototype, "value", void 0);
      FormText = __decorate([
          sitewhereIdeCommon.Component({})
      ], FormText);
      return FormText;
  }(Vue));

  /* script */
  const __vue_script__$h = FormText$2;

  /* template */
  var __vue_render__$h = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "mb-3" },
      [
        _c("v-textarea", {
          attrs: {
            required: _vm.required,
            title: _vm.title,
            label: _vm.label,
            placeholder: " ",
            "hide-details": "",
            "prepend-icon": _vm.icon
          },
          model: {
            value: _vm.wrapped,
            callback: function($$v) {
              _vm.wrapped = $$v;
            },
            expression: "wrapped"
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "verror" }, [_vm._t("default")], 2)
      ],
      1
    )
  };
  var __vue_staticRenderFns__$h = [];
  __vue_render__$h._withStripped = true;

    /* style */
    const __vue_inject_styles__$h = function (inject) {
      if (!inject) return
      inject("data-v-2f3e26de_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"FormTextArea.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$h = "data-v-2f3e26de";
    /* module identifier */
    const __vue_module_identifier__$h = undefined;
    /* functional template */
    const __vue_is_functional_template__$h = false;
    /* style inject SSR */
    

    
    var FormTextArea = normalizeComponent_1(
      { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
      __vue_inject_styles__$h,
      __vue_script__$h,
      __vue_scope_id__$h,
      __vue_is_functional_template__$h,
      __vue_module_identifier__$h,
      browser,
      undefined
    );

  var BaseDialog = /** @class */ (function (_super) {
      __extends(BaseDialog, _super);
      function BaseDialog() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.active = null;
          return _this;
      }
      BaseDialog.prototype.onTabSelected = function (updated) {
          this.$emit("tabSelected", updated);
      };
      /** Set the active tab */
      BaseDialog.prototype.setActiveTab = function (tab) {
          var _this = this;
          this.$nextTick(function () {
              _this.active = tab;
          });
      };
      /** Handle cancel clicked */
      BaseDialog.prototype.onCancelClicked = function (e) {
          this.$emit("cancelClicked", e);
      };
      /** Handle create clicked */
      BaseDialog.prototype.onCreateClicked = function (e) {
          this.$emit("createClicked", e);
      };
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], BaseDialog.prototype, "title", void 0);
      __decorate([
          sitewhereIdeCommon.Prop({ default: 600 }),
          __metadata("design:type", Number)
      ], BaseDialog.prototype, "width", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], BaseDialog.prototype, "icon", void 0);
      __decorate([
          sitewhereIdeCommon.Prop({ default: true }),
          __metadata("design:type", Boolean)
      ], BaseDialog.prototype, "visible", void 0);
      __decorate([
          sitewhereIdeCommon.Prop({ default: true }),
          __metadata("design:type", Boolean)
      ], BaseDialog.prototype, "tabbed", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], BaseDialog.prototype, "createLabel", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], BaseDialog.prototype, "cancelLabel", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], BaseDialog.prototype, "error", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Boolean)
      ], BaseDialog.prototype, "hideButtons", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Boolean)
      ], BaseDialog.prototype, "hideCreate", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Boolean)
      ], BaseDialog.prototype, "invalid", void 0);
      __decorate([
          sitewhereIdeCommon.Prop({ default: false }),
          __metadata("design:type", Boolean)
      ], BaseDialog.prototype, "lazy", void 0);
      __decorate([
          sitewhereIdeCommon.Prop({ default: true }),
          __metadata("design:type", Boolean)
      ], BaseDialog.prototype, "loaded", void 0);
      __decorate([
          sitewhereIdeCommon.Prop({ default: "Loading..." }),
          __metadata("design:type", String)
      ], BaseDialog.prototype, "loadingMessage", void 0);
      __decorate([
          sitewhereIdeCommon.Watch("active", { immediate: true }),
          __metadata("design:type", Function),
          __metadata("design:paramtypes", [String]),
          __metadata("design:returntype", void 0)
      ], BaseDialog.prototype, "onTabSelected", null);
      BaseDialog = __decorate([
          sitewhereIdeCommon.Component({
              components: {
                  ErrorBanner: ErrorBanner,
                  LoadingOverlay: LoadingOverlay$1
              }
          })
      ], BaseDialog);
      return BaseDialog;
  }(Vue));

  /* script */
  const __vue_script__$i = BaseDialog;

  /* template */
  var __vue_render__$i = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-dialog",
      {
        attrs: { lazy: _vm.lazy, persistent: "", width: _vm.width },
        model: {
          value: _vm.visible,
          callback: function($$v) {
            _vm.visible = $$v;
          },
          expression: "visible"
        }
      },
      [
        _c(
          "v-card",
          [
            _c(
              "v-toolbar",
              {
                staticClass: "mb-0",
                attrs: {
                  dense: "",
                  flat: "",
                  card: "",
                  dark: "",
                  color: "primary"
                }
              },
              [
                _c(
                  "v-toolbar-title",
                  [
                    _c("v-icon", { staticClass: "mr-1" }, [
                      _vm._v(_vm._s(_vm.icon))
                    ]),
                    _vm._v("\n        " + _vm._s(_vm.title) + "\n      ")
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("error-banner", { attrs: { error: _vm.error } }),
            _vm._v(" "),
            _c("v-card-text", { staticClass: "pa-0" }, [
              _c(
                "div",
                { staticStyle: { position: "relative" } },
                [
                  _vm._t("default"),
                  _vm._v(" "),
                  _vm.tabbed
                    ? _c(
                        "v-tabs",
                        {
                          model: {
                            value: _vm.active,
                            callback: function($$v) {
                              _vm.active = $$v;
                            },
                            expression: "active"
                          }
                        },
                        [_vm._t("tabs"), _vm._v(" "), _vm._t("tab-items")],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.loaded
                    ? _c("loading-overlay", {
                        attrs: { loadingMessage: _vm.loadingMessage }
                      })
                    : _vm._e()
                ],
                2
              )
            ]),
            _vm._v(" "),
            !_vm.hideButtons
              ? _c("v-divider", { staticClass: "mt-2 mb-2" })
              : _vm._e(),
            _vm._v(" "),
            !_vm.hideButtons
              ? _c(
                  "v-card-actions",
                  [
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: { outline: "", color: "primary" },
                        on: { click: _vm.onCancelClicked }
                      },
                      [_vm._v(_vm._s(_vm.cancelLabel))]
                    ),
                    _vm._v(" "),
                    !_vm.hideCreate
                      ? _c(
                          "v-btn",
                          {
                            attrs: { color: "primary", disabled: _vm.invalid },
                            on: { click: _vm.onCreateClicked }
                          },
                          [_vm._v(_vm._s(_vm.createLabel))]
                        )
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e()
          ],
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$i = [];
  __vue_render__$i._withStripped = true;

    /* style */
    const __vue_inject_styles__$i = function (inject) {
      if (!inject) return
      inject("data-v-e3c8002a_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"BaseDialog.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$i = "data-v-e3c8002a";
    /* module identifier */
    const __vue_module_identifier__$i = undefined;
    /* functional template */
    const __vue_is_functional_template__$i = false;
    /* style inject SSR */
    

    
    var BaseDialog$1 = normalizeComponent_1(
      { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
      __vue_inject_styles__$i,
      __vue_script__$i,
      __vue_scope_id__$i,
      __vue_is_functional_template__$i,
      __vue_module_identifier__$i,
      browser,
      undefined
    );

  var ConfirmDialog = /** @class */ (function (_super) {
      __extends(ConfirmDialog, _super);
      function ConfirmDialog() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.visible = false;
          _this.error = null;
          return _this;
      }
      /** Called to open the dialog */
      ConfirmDialog.prototype.open = function () {
          this.visible = true;
      };
      /** Called when action button is clicked */
      ConfirmDialog.prototype.onActionConfirmed = function () {
          this.$emit("confirmed");
          this.visible = false;
      };
      /** Called after cancel button is clicked */
      ConfirmDialog.prototype.onCancelClicked = function (e) {
          this.$emit("cancelled");
          this.visible = false;
      };
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], ConfirmDialog.prototype, "title", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Number)
      ], ConfirmDialog.prototype, "width", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], ConfirmDialog.prototype, "buttonText", void 0);
      ConfirmDialog = __decorate([
          sitewhereIdeCommon.Component({})
      ], ConfirmDialog);
      return ConfirmDialog;
  }(Vue));

  /* script */
  const __vue_script__$j = ConfirmDialog;

  /* template */
  var __vue_render__$j = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-dialog",
      {
        attrs: { persistent: "", width: _vm.width },
        model: {
          value: _vm.visible,
          callback: function($$v) {
            _vm.visible = $$v;
          },
          expression: "visible"
        }
      },
      [
        _c(
          "v-card",
          [
            _c(
              "v-toolbar",
              {
                attrs: {
                  dense: "",
                  flat: "",
                  card: "",
                  dark: "",
                  color: "primary"
                }
              },
              [_c("v-toolbar-title", [_vm._v(_vm._s(_vm.title))])],
              1
            ),
            _vm._v(" "),
            _c(
              "v-card-text",
              [
                _vm._t("default", [
                  _c("div", [_vm._v("Your content goes here!")])
                ])
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "v-card-actions",
              [
                _c("v-spacer"),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    attrs: { outline: "", color: "primary" },
                    on: { click: _vm.onCancelClicked }
                  },
                  [_vm._v("Cancel")]
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    attrs: { color: "primary" },
                    on: { click: _vm.onActionConfirmed }
                  },
                  [_vm._v(_vm._s(_vm.buttonText || "Ok"))]
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$j = [];
  __vue_render__$j._withStripped = true;

    /* style */
    const __vue_inject_styles__$j = undefined;
    /* scoped */
    const __vue_scope_id__$j = undefined;
    /* module identifier */
    const __vue_module_identifier__$j = undefined;
    /* functional template */
    const __vue_is_functional_template__$j = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var ConfirmDialog$1 = normalizeComponent_1(
      { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
      __vue_inject_styles__$j,
      __vue_script__$j,
      __vue_scope_id__$j,
      __vue_is_functional_template__$j,
      __vue_module_identifier__$j,
      undefined,
      undefined
    );

  var DeleteDialog = /** @class */ (function (_super) {
      __extends(DeleteDialog, _super);
      function DeleteDialog() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      // Called after create button is clicked.
      DeleteDialog.prototype.onDeleteClicked = function (e) {
          this.$emit("delete");
      };
      // Called after cancel button is clicked.
      DeleteDialog.prototype.onCancelClicked = function (e) {
          this.$emit("cancel");
      };
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], DeleteDialog.prototype, "title", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Number)
      ], DeleteDialog.prototype, "width", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], DeleteDialog.prototype, "error", void 0);
      __decorate([
          sitewhereIdeCommon.Prop({ default: false }),
          __metadata("design:type", Boolean)
      ], DeleteDialog.prototype, "visible", void 0);
      DeleteDialog = __decorate([
          sitewhereIdeCommon.Component({
              components: {
                  ErrorBanner: ErrorBanner
              }
          })
      ], DeleteDialog);
      return DeleteDialog;
  }(Vue));

  /* script */
  const __vue_script__$k = DeleteDialog;

  /* template */
  var __vue_render__$k = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-dialog",
      {
        attrs: { persistent: "", width: _vm.width },
        model: {
          value: _vm.visible,
          callback: function($$v) {
            _vm.visible = $$v;
          },
          expression: "visible"
        }
      },
      [
        _c(
          "v-card",
          [
            _c(
              "v-toolbar",
              {
                attrs: {
                  dense: "",
                  flat: "",
                  card: "",
                  dark: "",
                  color: "primary"
                }
              },
              [_c("v-toolbar-title", [_vm._v(_vm._s(_vm.title))])],
              1
            ),
            _vm._v(" "),
            _vm.error
              ? _c(
                  "v-alert",
                  {
                    staticClass: "ma-0",
                    staticStyle: { width: "100%" },
                    attrs: { slot: "error", error: "", value: true },
                    slot: "error"
                  },
                  [_vm._v(_vm._s(_vm.error))]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "v-card-text",
              { staticClass: "pa-0" },
              [
                _vm._t("default", [
                  _c("div", [_vm._v("Your content goes here!")])
                ])
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "v-card-actions",
              [
                _c("v-spacer"),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    attrs: { outline: "", color: "primary" },
                    on: { click: _vm.onCancelClicked }
                  },
                  [_vm._v("Cancel")]
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    attrs: { color: "primary" },
                    on: { click: _vm.onDeleteClicked }
                  },
                  [_vm._v("Delete")]
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$k = [];
  __vue_render__$k._withStripped = true;

    /* style */
    const __vue_inject_styles__$k = function (inject) {
      if (!inject) return
      inject("data-v-4f7dc690_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"DeleteDialog.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$k = "data-v-4f7dc690";
    /* module identifier */
    const __vue_module_identifier__$k = undefined;
    /* functional template */
    const __vue_is_functional_template__$k = false;
    /* style inject SSR */
    

    
    var DeleteDialog$1 = normalizeComponent_1(
      { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
      __vue_inject_styles__$k,
      __vue_script__$k,
      __vue_scope_id__$k,
      __vue_is_functional_template__$k,
      __vue_module_identifier__$k,
      browser,
      undefined
    );

  var MetadataPanel = /** @class */ (function (_super) {
      __extends(MetadataPanel, _super);
      function MetadataPanel() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.metadata = [];
          _this.newItemName = "";
          _this.newItemValue = "";
          _this.error = null;
          return _this;
      }
      /** Reset section content */
      MetadataPanel.prototype.reset = function () {
          this.metadata = [];
          this.error = null;
      };
      /** Perform validation */
      MetadataPanel.prototype.validate = function () {
          return true;
      };
      /** Load form data from an object */
      MetadataPanel.prototype.load = function (input) {
          var initial = input.metadata;
          if (initial) {
              this.metadata = metadataToArray(initial);
          }
      };
      /** Save form data to an object */
      MetadataPanel.prototype.save = function () {
          var updated = arrayToMetadata(this.metadata);
          return {
              metadata: updated
          };
      };
      /** Delete an item */
      MetadataPanel.prototype.onDeleteItem = function (deleteName) {
          var updated = [];
          this.metadata.forEach(function (item) {
              if (item.name !== deleteName) {
                  updated.push(item);
              }
          });
          this.metadata = updated;
      };
      // Let owner know an item was added.
      MetadataPanel.prototype.onAddItem = function () {
          var item = {
              name: this.newItemName,
              value: this.newItemValue
          };
          // Check for empty.
          if (item.name.length === 0) {
              this.error = "Name must not be empty.";
          }
          // Check for bad characters.
          var regex = /^[\w-]+$/;
          if (!this.error && !regex.test(item.name)) {
              this.error = "Name contains invalid characters.";
          }
          if (!this.error) {
              this.metadata.push(item);
              this.newItemName = "";
              this.newItemValue = "";
              this.error = null;
          }
      };
      Object.defineProperty(MetadataPanel.prototype, "headers", {
          get: function () {
              if (!this.readOnly) {
                  return [
                      {
                          align: "left",
                          sortable: false,
                          text: "Name",
                          value: "name"
                      },
                      {
                          align: "left",
                          sortable: false,
                          text: "Value",
                          value: "value"
                      },
                      {
                          align: "left",
                          sortable: false,
                          text: "Delete",
                          value: "value"
                      }
                  ];
              }
              else {
                  return [
                      {
                          align: "left",
                          sortable: false,
                          text: "Name",
                          value: "name"
                      },
                      {
                          align: "left",
                          sortable: false,
                          text: "Value",
                          value: "value"
                      }
                  ];
              }
          },
          enumerable: true,
          configurable: true
      });
      __decorate([
          sitewhereIdeCommon.Prop({ default: false }),
          __metadata("design:type", Boolean)
      ], MetadataPanel.prototype, "readOnly", void 0);
      __decorate([
          sitewhereIdeCommon.Prop({ default: "No metadata has been assigned" }),
          __metadata("design:type", String)
      ], MetadataPanel.prototype, "noDataMessage", void 0);
      __decorate([
          sitewhereIdeCommon.Prop({
              default: function () {
                  return [5];
              }
          }),
          __metadata("design:type", Array)
      ], MetadataPanel.prototype, "pageSizes", void 0);
      MetadataPanel = __decorate([
          sitewhereIdeCommon.Component({})
      ], MetadataPanel);
      return MetadataPanel;
  }(sitewhereIdeCommon.DialogSection));

  /* script */
  const __vue_script__$l = MetadataPanel;

  /* template */
  var __vue_render__$l = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      [
        _c(
          "v-card-text",
          [
            _c("v-data-table", {
              attrs: {
                headers: _vm.headers,
                items: _vm.metadata,
                "rows-per-page-items": _vm.pageSizes,
                "no-data-text": _vm.noDataMessage
              },
              scopedSlots: _vm._u([
                {
                  key: "items",
                  fn: function(props) {
                    return [
                      _c(
                        "td",
                        { attrs: { width: "250px", title: props.item.name } },
                        [
                          _vm._v(
                            _vm._s(
                              props.item.name.length > 25
                                ? props.item.name.substring(0, 25) + "..."
                                : props.item.name
                            )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { attrs: { width: "370px", title: props.item.value } },
                        [
                          _vm._v(
                            _vm._s(
                              props.item.value.length > 50
                                ? props.item.value.substring(0, 50) + "..."
                                : props.item.value
                            )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      !_vm.readOnly
                        ? _c(
                            "td",
                            { attrs: { width: "20px" } },
                            [
                              _c(
                                "v-tooltip",
                                { attrs: { left: "" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { slot: "activator", icon: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.onDeleteItem(props.item.name)
                                        }
                                      },
                                      slot: "activator"
                                    },
                                    [
                                      _c("font-awesome-icon", {
                                        staticClass: "grey--text",
                                        attrs: { icon: "trash", size: "lg" }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Delete Item")])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ]
                  }
                }
              ])
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm.error
          ? _c(
              "v-alert",
              {
                staticClass: "ma-0",
                staticStyle: { width: "100%" },
                attrs: { error: "", value: true }
              },
              [_vm._v(_vm._s(_vm.error))]
            )
          : _vm._e(),
        _vm._v(" "),
        !_vm.readOnly
          ? _c(
              "div",
              [
                _c(
                  "v-container",
                  { attrs: { fluid: "" } },
                  [
                    _c(
                      "v-layout",
                      { attrs: { row: "" } },
                      [
                        _c(
                          "v-flex",
                          { staticClass: "pr-3", attrs: { xs5: "" } },
                          [
                            _c("v-text-field", {
                              attrs: {
                                light: "",
                                label: "Name",
                                placeholder: " "
                              },
                              model: {
                                value: _vm.newItemName,
                                callback: function($$v) {
                                  _vm.newItemName = $$v;
                                },
                                expression: "newItemName"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-flex",
                          { attrs: { xs6: "" } },
                          [
                            _c("v-text-field", {
                              attrs: {
                                light: "",
                                label: "Value",
                                placeholder: " "
                              },
                              model: {
                                value: _vm.newItemValue,
                                callback: function($$v) {
                                  _vm.newItemValue = $$v;
                                },
                                expression: "newItemValue"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-flex",
                          { staticClass: "pt-3", attrs: { xs1: "" } },
                          [
                            _c(
                              "v-tooltip",
                              { attrs: { left: "" } },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { slot: "activator", icon: "" },
                                    on: { click: _vm.onAddItem },
                                    slot: "activator"
                                  },
                                  [
                                    _c("font-awesome-icon", {
                                      staticClass: "blue--text text--darken-2",
                                      attrs: { icon: "plus-circle", size: "2x" }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("span", [_vm._v("Add Item")])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$l = [];
  __vue_render__$l._withStripped = true;

    /* style */
    const __vue_inject_styles__$l = function (inject) {
      if (!inject) return
      inject("data-v-f15adb26_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"MetadataPanel.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$l = "data-v-f15adb26";
    /* module identifier */
    const __vue_module_identifier__$l = undefined;
    /* functional template */
    const __vue_is_functional_template__$l = false;
    /* style inject SSR */
    

    
    var MetadataPanel$1 = normalizeComponent_1(
      { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
      __vue_inject_styles__$l,
      __vue_script__$l,
      __vue_scope_id__$l,
      __vue_is_functional_template__$l,
      __vue_module_identifier__$l,
      browser,
      undefined
    );

  var ListEntry = /** @class */ (function (_super) {
      __extends(ListEntry, _super);
      function ListEntry() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      ListEntry = __decorate([
          sitewhereIdeCommon.Component
      ], ListEntry);
      return ListEntry;
  }(Vue));

  /* script */
  const __vue_script__$m = ListEntry;

  /* template */
  var __vue_render__$m = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-card",
      { staticClass: "list-entry", attrs: { flat: "", hover: "" } },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$m = [];
  __vue_render__$m._withStripped = true;

    /* style */
    const __vue_inject_styles__$m = function (inject) {
      if (!inject) return
      inject("data-v-639f6c8b_0", { source: "\n.list-entry[data-v-639f6c8b] {\n  border: 1px solid #ddd;\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/list/ListEntry.vue"],"names":[],"mappings":";AAeA;EACA,sBAAA;AACA","file":"ListEntry.vue","sourcesContent":["<template>\n  <v-card class=\"list-entry\" flat hover>\n    <slot/>\n  </v-card>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport { Component } from \"sitewhere-ide-common\";\n\n@Component\nexport default class ListEntry extends Vue {}\n</script>\n\n<style scoped>\n.list-entry {\n  border: 1px solid #ddd;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$m = "data-v-639f6c8b";
    /* module identifier */
    const __vue_module_identifier__$m = undefined;
    /* functional template */
    const __vue_is_functional_template__$m = false;
    /* style inject SSR */
    

    
    var ListEntry$1 = normalizeComponent_1(
      { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
      __vue_inject_styles__$m,
      __vue_script__$m,
      __vue_scope_id__$m,
      __vue_is_functional_template__$m,
      __vue_module_identifier__$m,
      browser,
      undefined
    );

  var ListLayout = /** @class */ (function (_super) {
      __extends(ListLayout, _super);
      function ListLayout() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      ListLayout = __decorate([
          sitewhereIdeCommon.Component({})
      ], ListLayout);
      return ListLayout;
  }(Vue));

  /* script */
  const __vue_script__$n = ListLayout;

  /* template */
  var __vue_render__$n = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-container",
      {
        staticClass: "pa-2",
        attrs: { fluid: "", "grid-list-md": "", "fill-height": "" }
      },
      [
        _c(
          "v-layout",
          { attrs: { "align-content-start": "", row: "", wrap: "" } },
          [_vm._t("default")],
          2
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$n = [];
  __vue_render__$n._withStripped = true;

    /* style */
    const __vue_inject_styles__$n = function (inject) {
      if (!inject) return
      inject("data-v-0e5dae28_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"ListLayout.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$n = "data-v-0e5dae28";
    /* module identifier */
    const __vue_module_identifier__$n = undefined;
    /* functional template */
    const __vue_is_functional_template__$n = false;
    /* style inject SSR */
    

    
    var ListLayout$1 = normalizeComponent_1(
      { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
      __vue_inject_styles__$n,
      __vue_script__$n,
      __vue_scope_id__$n,
      __vue_is_functional_template__$n,
      __vue_module_identifier__$n,
      browser,
      undefined
    );

  var NavigationPage = /** @class */ (function (_super) {
      __extends(NavigationPage, _super);
      function NavigationPage() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], NavigationPage.prototype, "icon", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], NavigationPage.prototype, "title", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], NavigationPage.prototype, "loadingMessage", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Boolean)
      ], NavigationPage.prototype, "loaded", void 0);
      NavigationPage = __decorate([
          sitewhereIdeCommon.Component({
              components: {
                  LoadingOverlay: LoadingOverlay$1
              }
          })
      ], NavigationPage);
      return NavigationPage;
  }(Vue));

  /* script */
  const __vue_script__$o = NavigationPage;

  /* template */
  var __vue_render__$o = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-card",
      { staticClass: "flex-rows", attrs: { flat: "", "fill-height": "" } },
      [
        _c(
          "v-toolbar",
          { staticClass: "elevation-1 toolbar", attrs: { dense: "" } },
          [
            _c("v-icon", [_vm._v(_vm._s(_vm.icon))]),
            _vm._v(" "),
            _c("v-toolbar-title", { staticClass: "ml-2 subheading" }, [
              _vm._v(_vm._s(_vm.title))
            ]),
            _vm._v(" "),
            _c("v-spacer"),
            _vm._v(" "),
            _vm._t("actions")
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "header" }, [_vm._t("header")], 2),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "content" },
          [_vm.loaded ? _vm._t("content") : _vm._e()],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "footer" }, [_vm._t("footer")], 2),
        _vm._v(" "),
        !_vm.loaded
          ? _c("loading-overlay", {
              attrs: { loadingMessage: _vm.loadingMessage }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm._t("dialogs")
      ],
      2
    )
  };
  var __vue_staticRenderFns__$o = [];
  __vue_render__$o._withStripped = true;

    /* style */
    const __vue_inject_styles__$o = function (inject) {
      if (!inject) return
      inject("data-v-5ce11d2a_0", { source: "\n.flex-rows[data-v-5ce11d2a] {\n  display: flex;\n  flex-direction: column;\n}\n.toolbar[data-v-5ce11d2a] {\n  flex: 0;\n  z-index: 1;\n  color: #333;\n}\n.header[data-v-5ce11d2a] {\n  flex: 0;\n  z-index: 1;\n}\n.content[data-v-5ce11d2a] {\n  flex: 1;\n  overflow-y: auto;\n  z-index: 0;\n}\n.footer[data-v-5ce11d2a] {\n  flex: 0;\n  z-index: 1;\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/navigation/NavigationPage.vue"],"names":[],"mappings":";AA0CA;EACA,aAAA;EACA,sBAAA;AACA;AACA;EACA,OAAA;EACA,UAAA;EACA,WAAA;AACA;AACA;EACA,OAAA;EACA,UAAA;AACA;AACA;EACA,OAAA;EACA,gBAAA;EACA,UAAA;AACA;AACA;EACA,OAAA;EACA,UAAA;AACA","file":"NavigationPage.vue","sourcesContent":["<template>\n  <v-card class=\"flex-rows\" flat fill-height>\n    <v-toolbar class=\"elevation-1 toolbar\" dense>\n      <v-icon>{{ icon }}</v-icon>\n      <v-toolbar-title class=\"ml-2 subheading\">{{ title }}</v-toolbar-title>\n      <v-spacer></v-spacer>\n      <slot name=\"actions\"/>\n    </v-toolbar>\n    <div class=\"header\">\n      <slot name=\"header\"/>\n    </div>\n    <div class=\"content\">\n      <slot v-if=\"loaded\" name=\"content\"/>\n    </div>\n    <div class=\"footer\">\n      <slot name=\"footer\"/>\n    </div>\n    <loading-overlay v-if=\"!loaded\" :loadingMessage=\"loadingMessage\"/>\n    <slot name=\"dialogs\"/>\n  </v-card>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport { Component, Prop } from \"sitewhere-ide-common\";\n\nimport LoadingOverlay from \"../common/LoadingOverlay.vue\";\n\n@Component({\n  components: {\n    LoadingOverlay\n  }\n})\nexport default class NavigationPage extends Vue {\n  @Prop() readonly icon!: string;\n  @Prop() readonly title!: string;\n  @Prop() readonly loadingMessage!: string;\n  @Prop() readonly loaded!: boolean;\n}\n</script>\n\n<style scoped>\n.flex-rows {\n  display: flex;\n  flex-direction: column;\n}\n.toolbar {\n  flex: 0;\n  z-index: 1;\n  color: #333;\n}\n.header {\n  flex: 0;\n  z-index: 1;\n}\n.content {\n  flex: 1;\n  overflow-y: auto;\n  z-index: 0;\n}\n.footer {\n  flex: 0;\n  z-index: 1;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$o = "data-v-5ce11d2a";
    /* module identifier */
    const __vue_module_identifier__$o = undefined;
    /* functional template */
    const __vue_is_functional_template__$o = false;
    /* style inject SSR */
    

    
    var NavigationPage$1 = normalizeComponent_1(
      { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
      __vue_inject_styles__$o,
      __vue_script__$o,
      __vue_scope_id__$o,
      __vue_is_functional_template__$o,
      __vue_module_identifier__$o,
      browser,
      undefined
    );

  var Pager = /** @class */ (function (_super) {
      __extends(Pager, _super);
      function Pager() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Pager.prototype.onButtonClicked = function (e) {
          this.$emit("click", e);
      };
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], Pager.prototype, "icon", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], Pager.prototype, "text", void 0);
      __decorate([
          sitewhereIdeCommon.Prop({ default: false }),
          __metadata("design:type", Boolean)
      ], Pager.prototype, "disabled", void 0);
      Pager = __decorate([
          sitewhereIdeCommon.Component
      ], Pager);
      return Pager;
  }(Vue));

  /* script */
  const __vue_script__$p = Pager;

  /* template */
  var __vue_render__$p = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-tooltip",
      { attrs: { top: "" } },
      [
        _c(
          "v-btn",
          {
            staticClass: "ml-0 mr-0 grey--text text--darken-2",
            attrs: {
              slot: "activator",
              disabled: _vm.disabled,
              icon: "",
              light: ""
            },
            on: { click: _vm.onButtonClicked },
            slot: "activator"
          },
          [_c("font-awesome-icon", { attrs: { icon: _vm.icon, size: "lg" } })],
          1
        ),
        _vm._v(" "),
        _c("span", [_vm._v(_vm._s(_vm.text))])
      ],
      1
    )
  };
  var __vue_staticRenderFns__$p = [];
  __vue_render__$p._withStripped = true;

    /* style */
    const __vue_inject_styles__$p = undefined;
    /* scoped */
    const __vue_scope_id__$p = undefined;
    /* module identifier */
    const __vue_module_identifier__$p = undefined;
    /* functional template */
    const __vue_is_functional_template__$p = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var PagerButton = normalizeComponent_1(
      { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
      __vue_inject_styles__$p,
      __vue_script__$p,
      __vue_scope_id__$p,
      __vue_is_functional_template__$p,
      __vue_module_identifier__$p,
      undefined,
      undefined
    );

  var Pager$1 = /** @class */ (function (_super) {
      __extends(Pager, _super);
      function Pager() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.page = 1;
          _this.pageSize = null;
          _this.defaultResults = {
              numResults: 0,
              results: []
          };
          _this.defaultPageSizes = [
              {
                  text: "10",
                  value: 10
              },
              {
                  text: "25",
                  value: 25
              },
              {
                  text: "50",
                  value: 50
              }
          ];
          return _this;
      }
      Pager.prototype.created = function () {
          if (!this.pageSize) {
              this.pageSize = this.pageSizesWithDefaults[0].value;
          }
          this.onPagingUpdated();
      };
      // Refresh results on page size updated.
      Pager.prototype.onPageSizeUpdated = function (val, oldVal) {
          this.page = 1;
          this.onPagingUpdated();
      };
      Object.defineProperty(Pager.prototype, "resultsWithDefaults", {
          // Results with defaults fallback.
          get: function () {
              return this.results || this.defaultResults;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Pager.prototype, "total", {
          // Total record count.
          get: function () {
              return this.resultsWithDefaults.numResults;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Pager.prototype, "description", {
          // Description.
          get: function () {
              var size = this.pageSize || 0;
              var total = this.total;
              var page = this.page;
              var first = size * (page - 1) + 1;
              var last = Math.min(total, first + size - 1);
              return "" + first + "-" + last + " of " + total;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Pager.prototype, "pageCount", {
          // Calculate number of pages.
          get: function () {
              var results = this.resultsWithDefaults;
              var total = results.numResults;
              var size = this.pageSize || 0;
              var mod = total % size;
              var count = (total / size) | 0;
              count += mod > 0 ? 1 : 0;
              return count;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Pager.prototype, "pageSizesWithDefaults", {
          // Get list of available page sizes with fallback defaults.
          get: function () {
              return this.pageSizes || this.defaultPageSizes;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Pager.prototype, "previousEnabled", {
          // Indicates if 'first' button should be enabled.
          get: function () {
              return this.page > 1;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Pager.prototype, "nextEnabled", {
          // Indicates if 'first' button should be enabled.
          get: function () {
              return this.page < this.pageCount;
          },
          enumerable: true,
          configurable: true
      });
      // Called to move to first page.
      Pager.prototype.onFirstPage = function () {
          if (this.page !== 1) {
              this.page = 1;
              this.onPagingUpdated();
          }
      };
      // Called to move to previous page.
      Pager.prototype.onPreviousPage = function () {
          if (this.page > 1) {
              this.page--;
              this.onPagingUpdated();
          }
      };
      // Called to refresh data.
      Pager.prototype.onRefresh = function () {
          this.onPagingUpdated();
      };
      // Called to move to next page.
      Pager.prototype.onNextPage = function () {
          if (this.page < this.pageCount) {
              this.page++;
              this.onPagingUpdated();
          }
      };
      // Called to move to last page.
      Pager.prototype.onLastPage = function () {
          if (this.page < this.pageCount) {
              this.page = this.pageCount;
              this.onPagingUpdated();
          }
      };
      // Called when paging values are updated.
      Pager.prototype.onPagingUpdated = function () {
          var paging = {
              pageNumber: this.page,
              pageSize: this.pageSize || 0
          };
          this.$emit("pagingUpdated", paging);
      };
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Object)
      ], Pager.prototype, "results", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Array)
      ], Pager.prototype, "pageSizes", void 0);
      __decorate([
          sitewhereIdeCommon.Watch("pageSize"),
          __metadata("design:type", Function),
          __metadata("design:paramtypes", [Number, Number]),
          __metadata("design:returntype", void 0)
      ], Pager.prototype, "onPageSizeUpdated", null);
      Pager = __decorate([
          sitewhereIdeCommon.Component({
              components: {
                  PagerButton: PagerButton
              }
          })
      ], Pager);
      return Pager;
  }(Vue));

  /* script */
  const __vue_script__$q = Pager$1;

  /* template */
  var __vue_render__$q = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "pager" },
      [
        _vm.results && _vm.results.numResults === 0
          ? _vm._t("noresults")
          : _vm._e(),
        _vm._v(" "),
        _c(
          "v-container",
          { staticClass: "ma-0 pa-0" },
          [
            _c(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                _c(
                  "v-flex",
                  { attrs: { xs2: "" } },
                  [
                    _c("v-subheader", { staticClass: "ma-0 pt-0 pr-0" }, [
                      _vm._v("Rows per page")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs3: "" } },
                  [
                    _c(
                      "v-btn-toggle",
                      {
                        staticClass: "mt-1",
                        model: {
                          value: _vm.pageSize,
                          callback: function($$v) {
                            _vm.pageSize = $$v;
                          },
                          expression: "pageSize"
                        }
                      },
                      _vm._l(_vm.pageSizesWithDefaults, function(entry) {
                        return _c(
                          "v-btn",
                          {
                            key: entry.value,
                            attrs: { flat: "", value: entry.value }
                          },
                          [_vm._v(_vm._s(entry.text))]
                        )
                      }),
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs4: "" } },
                  [
                    _c("pager-button", {
                      attrs: {
                        disabled: !_vm.previousEnabled,
                        icon: "fast-backward",
                        text: "First Page"
                      },
                      on: { click: _vm.onFirstPage }
                    }),
                    _vm._v(" "),
                    _c("pager-button", {
                      attrs: {
                        disabled: !_vm.previousEnabled,
                        icon: "backward",
                        text: "Previous Page"
                      },
                      on: { click: _vm.onPreviousPage }
                    }),
                    _vm._v(" "),
                    _c("pager-button", {
                      attrs: { icon: "sync", text: "Refresh" },
                      on: { click: _vm.onRefresh }
                    }),
                    _vm._v(" "),
                    _c("pager-button", {
                      attrs: {
                        disabled: !_vm.nextEnabled,
                        icon: "forward",
                        text: "Next Page"
                      },
                      on: { click: _vm.onNextPage }
                    }),
                    _vm._v(" "),
                    _c("pager-button", {
                      attrs: {
                        disabled: !_vm.nextEnabled,
                        icon: "fast-forward",
                        text: "Last Page"
                      },
                      on: { click: _vm.onLastPage }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs3: "" } },
                  [
                    _c("v-subheader", { staticClass: "ma-0 pt-0 right" }, [
                      _vm._v(_vm._s(_vm.description))
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      2
    )
  };
  var __vue_staticRenderFns__$q = [];
  __vue_render__$q._withStripped = true;

    /* style */
    const __vue_inject_styles__$q = function (inject) {
      if (!inject) return
      inject("data-v-9300b6ac_0", { source: "\n.pager[data-v-9300b6ac] {\n  color: #333;\n  background-color: #eee;\n  border-top: 1px solid #ccc;\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/list/Pager.vue"],"names":[],"mappings":";AA4MA;EACA,WAAA;EACA,sBAAA;EACA,0BAAA;AACA","file":"Pager.vue","sourcesContent":["<template>\n  <div class=\"pager\">\n    <slot v-if=\"results && results.numResults === 0\" name=\"noresults\"></slot>\n    <v-container class=\"ma-0 pa-0\">\n      <v-layout row wrap>\n        <v-flex xs2>\n          <v-subheader class=\"ma-0 pt-0 pr-0\">Rows per page</v-subheader>\n        </v-flex>\n        <v-flex xs3>\n          <v-btn-toggle v-model=\"pageSize\" class=\"mt-1\">\n            <v-btn\n              flat\n              :value=\"entry.value\"\n              v-for=\"entry in pageSizesWithDefaults\"\n              :key=\"entry.value\"\n            >{{ entry.text }}</v-btn>\n          </v-btn-toggle>\n        </v-flex>\n        <v-flex xs4>\n          <pager-button\n            :disabled=\"!previousEnabled\"\n            @click=\"onFirstPage\"\n            icon=\"fast-backward\"\n            text=\"First Page\"\n          />\n          <pager-button\n            :disabled=\"!previousEnabled\"\n            @click=\"onPreviousPage\"\n            icon=\"backward\"\n            text=\"Previous Page\"\n          />\n          <pager-button @click=\"onRefresh\" icon=\"sync\" text=\"Refresh\" />\n          <pager-button\n            :disabled=\"!nextEnabled\"\n            @click=\"onNextPage\"\n            icon=\"forward\"\n            text=\"Next Page\"\n          />\n          <pager-button\n            :disabled=\"!nextEnabled\"\n            @click=\"onLastPage\"\n            icon=\"fast-forward\"\n            text=\"Last Page\"\n          />\n        </v-flex>\n        <v-flex xs3>\n          <v-subheader class=\"ma-0 pt-0 right\">{{ description }}</v-subheader>\n        </v-flex>\n      </v-layout>\n    </v-container>\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\n\nimport PagerButton from \"./PagerButton.vue\";\n\nimport {\n  Component,\n  Prop,\n  Watch,\n  IPaging,\n  IPageSizes\n} from \"sitewhere-ide-common\";\n\n@Component({\n  components: {\n    PagerButton\n  }\n})\nexport default class Pager extends Vue {\n  @Prop() readonly results!: { numResults: number; results: {}[] };\n  @Prop() readonly pageSizes!: IPageSizes;\n\n  page: number = 1;\n  pageSize: number | null = null;\n  defaultResults: { numResults: number; results: {}[] } = {\n    numResults: 0,\n    results: []\n  };\n  defaultPageSizes: IPageSizes = [\n    {\n      text: \"10\",\n      value: 10\n    },\n    {\n      text: \"25\",\n      value: 25\n    },\n    {\n      text: \"50\",\n      value: 50\n    }\n  ];\n\n  created() {\n    if (!this.pageSize) {\n      this.pageSize = this.pageSizesWithDefaults[0].value;\n    }\n    this.onPagingUpdated();\n  }\n\n  // Refresh results on page size updated.\n  @Watch(\"pageSize\") onPageSizeUpdated(val: number, oldVal: number) {\n    this.page = 1;\n    this.onPagingUpdated();\n  }\n\n  // Results with defaults fallback.\n  get resultsWithDefaults(): { numResults: number; results: {}[] } {\n    return this.results || this.defaultResults;\n  }\n\n  // Total record count.\n  get total(): number {\n    return this.resultsWithDefaults.numResults;\n  }\n\n  // Description.\n  get description(): string {\n    let size = this.pageSize || 0;\n    let total = this.total;\n    let page = this.page;\n    var first = size * (page - 1) + 1;\n    var last = Math.min(total, first + size - 1);\n    return \"\" + first + \"-\" + last + \" of \" + total;\n  }\n\n  // Calculate number of pages.\n  get pageCount() {\n    var results = this.resultsWithDefaults;\n    var total = results.numResults;\n    var size = this.pageSize || 0;\n    var mod = total % size;\n    var count = (total / size) | 0;\n    count += mod > 0 ? 1 : 0;\n    return count;\n  }\n\n  // Get list of available page sizes with fallback defaults.\n  get pageSizesWithDefaults(): { text: string; value: number }[] {\n    return this.pageSizes || this.defaultPageSizes;\n  }\n\n  // Indicates if 'first' button should be enabled.\n  get previousEnabled(): boolean {\n    return this.page > 1;\n  }\n\n  // Indicates if 'first' button should be enabled.\n  get nextEnabled(): boolean {\n    return this.page < this.pageCount;\n  }\n\n  // Called to move to first page.\n  onFirstPage() {\n    if (this.page !== 1) {\n      this.page = 1;\n      this.onPagingUpdated();\n    }\n  }\n\n  // Called to move to previous page.\n  onPreviousPage() {\n    if (this.page > 1) {\n      this.page--;\n      this.onPagingUpdated();\n    }\n  }\n\n  // Called to refresh data.\n  onRefresh() {\n    this.onPagingUpdated();\n  }\n\n  // Called to move to next page.\n  onNextPage() {\n    if (this.page < this.pageCount) {\n      this.page++;\n      this.onPagingUpdated();\n    }\n  }\n\n  // Called to move to last page.\n  onLastPage() {\n    if (this.page < this.pageCount) {\n      this.page = this.pageCount;\n      this.onPagingUpdated();\n    }\n  }\n\n  // Called when paging values are updated.\n  onPagingUpdated() {\n    var paging: IPaging = {\n      pageNumber: this.page,\n      pageSize: this.pageSize || 0\n    };\n    this.$emit(\"pagingUpdated\", paging);\n  }\n}\n</script>\n\n<style scoped>\n.pager {\n  color: #333;\n  background-color: #eee;\n  border-top: 1px solid #ccc;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$q = "data-v-9300b6ac";
    /* module identifier */
    const __vue_module_identifier__$q = undefined;
    /* functional template */
    const __vue_is_functional_template__$q = false;
    /* style inject SSR */
    

    
    var Pager$2 = normalizeComponent_1(
      { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
      __vue_inject_styles__$q,
      __vue_script__$q,
      __vue_scope_id__$q,
      __vue_is_functional_template__$q,
      __vue_module_identifier__$q,
      browser,
      undefined
    );

  var ListPage = /** @class */ (function (_super) {
      __extends(ListPage, _super);
      function ListPage() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(ListPage.prototype, "hasResults", {
          /** Detect whether loaded with results */
          get: function () {
              return this.loaded && this.results && this.results.numResults > 0;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ListPage.prototype, "noResults", {
          /** Detect whether loaded with no results */
          get: function () {
              return this.loaded && this.results && this.results.numResults === 0;
          },
          enumerable: true,
          configurable: true
      });
      /** Update paging values and run query */
      ListPage.prototype.onPagingUpdated = function (paging) {
          this.$emit("pagingUpdated", paging);
      };
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], ListPage.prototype, "icon", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], ListPage.prototype, "title", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], ListPage.prototype, "loadingMessage", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Array)
      ], ListPage.prototype, "pageSizes", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Boolean)
      ], ListPage.prototype, "loaded", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Object)
      ], ListPage.prototype, "results", void 0);
      ListPage = __decorate([
          sitewhereIdeCommon.Component({
              components: {
                  NavigationPage: NavigationPage$1,
                  Pager: Pager$2
              }
          })
      ], ListPage);
      return ListPage;
  }(Vue));

  /* script */
  const __vue_script__$r = ListPage;

  /* template */
  var __vue_render__$r = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "navigation-page",
      {
        attrs: {
          icon: _vm.icon,
          title: _vm.title,
          loadingMessage: _vm.loadingMessage,
          loaded: _vm.loaded
        }
      },
      [
        _c("template", { slot: "content" }, [
          _c("div", { staticClass: "flex-rows" }, [
            _c("div", { staticClass: "list-filters" }, [_vm._t("filters")], 2),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "list-content" },
              [
                _vm.hasResults
                  ? _vm._t("default")
                  : _vm.noResults
                  ? _vm._t("noresults")
                  : _vm._e()
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "template",
          { slot: "footer" },
          [
            _c("pager", {
              attrs: { results: _vm.results, pageSizes: _vm.pageSizes },
              on: { pagingUpdated: _vm.onPagingUpdated }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("template", { slot: "actions" }, [_vm._t("actions")], 2),
        _vm._v(" "),
        _c("template", { slot: "dialogs" }, [_vm._t("dialogs")], 2)
      ],
      2
    )
  };
  var __vue_staticRenderFns__$r = [];
  __vue_render__$r._withStripped = true;

    /* style */
    const __vue_inject_styles__$r = function (inject) {
      if (!inject) return
      inject("data-v-2c072f56_0", { source: "\n.flex-rows[data-v-2c072f56] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.list-filters[data-v-2c072f56] {\n  flex: 0;\n}\n.list-content[data-v-2c072f56] {\n  flex: 1;\n  background-color: #eee;\n  overflow-y: auto;\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/list/ListPage.vue"],"names":[],"mappings":";AAiEA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;AACA;AACA;EACA,OAAA;AACA;AACA;EACA,OAAA;EACA,sBAAA;EACA,gBAAA;AACA","file":"ListPage.vue","sourcesContent":["<template>\n  <navigation-page :icon=\"icon\" :title=\"title\" :loadingMessage=\"loadingMessage\" :loaded=\"loaded\">\n    <template slot=\"content\">\n      <div class=\"flex-rows\">\n        <div class=\"list-filters\">\n          <slot name=\"filters\" />\n        </div>\n        <div class=\"list-content\">\n          <slot v-if=\"hasResults\" />\n          <slot name=\"noresults\" v-else-if=\"noResults\" />\n        </div>\n      </div>\n    </template>\n    <template slot=\"footer\">\n      <pager :results=\"results\" @pagingUpdated=\"onPagingUpdated\" :pageSizes=\"pageSizes\" />\n    </template>\n    <template slot=\"actions\">\n      <slot name=\"actions\" />\n    </template>\n    <template slot=\"dialogs\">\n      <slot name=\"dialogs\" />\n    </template>\n  </navigation-page>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\n\nimport NavigationPage from \"../navigation/NavigationPage.vue\";\nimport Pager from \"../list/Pager.vue\";\n\nimport { Component, Prop, IPaging, IPageSizes } from \"sitewhere-ide-common\";\n\n@Component({\n  components: {\n    NavigationPage,\n    Pager\n  }\n})\nexport default class ListPage extends Vue {\n  @Prop() readonly icon!: string;\n  @Prop() readonly title!: string;\n  @Prop() readonly loadingMessage!: string;\n  @Prop() readonly pageSizes!: IPageSizes;\n  @Prop() readonly loaded!: boolean;\n  @Prop() readonly results!: { numResults: number; results: {}[] };\n\n  /** Detect whether loaded with results */\n  get hasResults() {\n    return this.loaded && this.results && this.results.numResults > 0;\n  }\n\n  /** Detect whether loaded with no results */\n  get noResults() {\n    return this.loaded && this.results && this.results.numResults === 0;\n  }\n\n  /** Update paging values and run query */\n  onPagingUpdated(paging: IPaging) {\n    this.$emit(\"pagingUpdated\", paging);\n  }\n}\n</script>\n\n<style scoped>\n.flex-rows {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.list-filters {\n  flex: 0;\n}\n.list-content {\n  flex: 1;\n  background-color: #eee;\n  overflow-y: auto;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$r = "data-v-2c072f56";
    /* module identifier */
    const __vue_module_identifier__$r = undefined;
    /* functional template */
    const __vue_is_functional_template__$r = false;
    /* style inject SSR */
    

    
    var ListPage$1 = normalizeComponent_1(
      { render: __vue_render__$r, staticRenderFns: __vue_staticRenderFns__$r },
      __vue_inject_styles__$r,
      __vue_script__$r,
      __vue_scope_id__$r,
      __vue_is_functional_template__$r,
      __vue_module_identifier__$r,
      browser,
      undefined
    );

  var ListTab = /** @class */ (function (_super) {
      __extends(ListTab, _super);
      function ListTab() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(ListTab.prototype, "hasResults", {
          /** Detect whether loaded with results */
          get: function () {
              return this.loaded && this.results && this.results.numResults > 0;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ListTab.prototype, "noResults", {
          /** Detect whether loaded with no results */
          get: function () {
              return this.loaded && this.results && this.results.numResults === 0;
          },
          enumerable: true,
          configurable: true
      });
      /** Update paging values and run query */
      ListTab.prototype.onPagingUpdated = function (paging) {
          this.$emit("pagingUpdated", paging);
      };
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], ListTab.prototype, "tabkey", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Array)
      ], ListTab.prototype, "pageSizes", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], ListTab.prototype, "loadingMessage", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Boolean)
      ], ListTab.prototype, "loaded", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Object)
      ], ListTab.prototype, "results", void 0);
      ListTab = __decorate([
          sitewhereIdeCommon.Component({
              components: {
                  Pager: Pager$2,
                  LoadingOverlay: LoadingOverlay$1
              }
          })
      ], ListTab);
      return ListTab;
  }(Vue));

  /* script */
  const __vue_script__$s = ListTab;

  /* template */
  var __vue_render__$s = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-tab-item",
      { key: _vm.tabkey },
      [
        _c("div", { staticClass: "flex-rows" }, [
          _c("div", { staticClass: "list-filters" }, [_vm._t("filters")], 2),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "list-content" },
            [
              _vm.hasResults
                ? _vm._t("default")
                : _vm.noResults
                ? _vm._t("noresults")
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "list-footer" },
            [
              _c("pager", {
                attrs: { results: _vm.results, pageSizes: _vm.pageSizes },
                on: { pagingUpdated: _vm.onPagingUpdated }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        !_vm.loaded
          ? _c("loading-overlay", {
              attrs: { loadingMessage: _vm.loadingMessage }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm._t("dialogs")
      ],
      2
    )
  };
  var __vue_staticRenderFns__$s = [];
  __vue_render__$s._withStripped = true;

    /* style */
    const __vue_inject_styles__$s = function (inject) {
      if (!inject) return
      inject("data-v-0100de67_0", { source: "\n.flex-rows[data-v-0100de67] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.list-filters[data-v-0100de67] {\n  flex: 0;\n}\n.list-content[data-v-0100de67] {\n  flex: 1;\n  background-color: #eee;\n  overflow-y: auto;\n}\n.list-footer[data-v-0100de67] {\n  flex: 0;\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/list/ListTab.vue"],"names":[],"mappings":";AA0DA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;AACA;AACA;EACA,OAAA;AACA;AACA;EACA,OAAA;EACA,sBAAA;EACA,gBAAA;AACA;AACA;EACA,OAAA;AACA","file":"ListTab.vue","sourcesContent":["<template>\n  <v-tab-item :key=\"tabkey\">\n    <div class=\"flex-rows\">\n      <div class=\"list-filters\">\n        <slot name=\"filters\" />\n      </div>\n      <div class=\"list-content\">\n        <slot v-if=\"hasResults\" />\n        <slot name=\"noresults\" v-else-if=\"noResults\" />\n      </div>\n      <div class=\"list-footer\">\n        <pager :results=\"results\" @pagingUpdated=\"onPagingUpdated\" :pageSizes=\"pageSizes\" />\n      </div>\n    </div>\n    <loading-overlay v-if=\"!loaded\" :loadingMessage=\"loadingMessage\" />\n    <slot name=\"dialogs\" />\n  </v-tab-item>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\n\nimport Pager from \"./Pager.vue\";\nimport LoadingOverlay from \"../common/LoadingOverlay.vue\";\n\nimport { Component, Prop, IPaging, IPageSizes } from \"sitewhere-ide-common\";\n\n@Component({\n  components: {\n    Pager,\n    LoadingOverlay\n  }\n})\nexport default class ListTab extends Vue {\n  @Prop() readonly tabkey!: string;\n  @Prop() readonly pageSizes!: IPageSizes;\n  @Prop() readonly loadingMessage!: string;\n  @Prop() readonly loaded!: boolean;\n  @Prop() readonly results!: { numResults: number; results: {}[] };\n\n  /** Detect whether loaded with results */\n  get hasResults() {\n    return this.loaded && this.results && this.results.numResults > 0;\n  }\n\n  /** Detect whether loaded with no results */\n  get noResults() {\n    return this.loaded && this.results && this.results.numResults === 0;\n  }\n\n  /** Update paging values and run query */\n  onPagingUpdated(paging: IPaging) {\n    this.$emit(\"pagingUpdated\", paging);\n  }\n}\n</script>\n\n<style scoped>\n.flex-rows {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.list-filters {\n  flex: 0;\n}\n.list-content {\n  flex: 1;\n  background-color: #eee;\n  overflow-y: auto;\n}\n.list-footer {\n  flex: 0;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$s = "data-v-0100de67";
    /* module identifier */
    const __vue_module_identifier__$s = undefined;
    /* functional template */
    const __vue_is_functional_template__$s = false;
    /* style inject SSR */
    

    
    var ListTab$1 = normalizeComponent_1(
      { render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s },
      __vue_inject_styles__$s,
      __vue_script__$s,
      __vue_scope_id__$s,
      __vue_is_functional_template__$s,
      __vue_module_identifier__$s,
      browser,
      undefined
    );

  /**
   * Enumeration of navigation icons.
   */
  var NavigationIcon;
  (function (NavigationIcon) {
      NavigationIcon["Remotes"] = "router";
  })(NavigationIcon || (NavigationIcon = {}));

  var RemoteConnectionsList = /** @class */ (function (_super) {
      __extends(RemoteConnectionsList, _super);
      function RemoteConnectionsList() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.selected = [];
          _this.selection = null;
          return _this;
      }
      /** Single select item */
      RemoteConnectionsList.prototype.onSelect = function (selected) {
          var _this = this;
          this.selected = [];
          this.connections.forEach(function (connection) {
              if (connection.id == selected.id) {
                  _this.selected.push(connection);
                  _this.selection = connection;
                  _this.$emit("selected", connection);
              }
          });
      };
      RemoteConnectionsList.prototype.textStyle = function (conn) {
          return {
              "font-weight": conn.id === this.remotes.default ? "bold" : "normal"
          };
      };
      Object.defineProperty(RemoteConnectionsList.prototype, "isUpDisabled", {
          get: function () {
              if (this.selection) {
                  if (this.getConnectionIndex(this.selection) === 0) {
                      return true;
                  }
                  return false;
              }
              return true;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(RemoteConnectionsList.prototype, "isDownDisabled", {
          get: function () {
              if (this.selection) {
                  if (this.getConnectionIndex(this.selection) >=
                      this.remotes.connections.length - 1) {
                      return true;
                  }
                  return false;
              }
              return true;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(RemoteConnectionsList.prototype, "isDefaultDisabled", {
          get: function () {
              if (this.selection) {
                  if (this.selection.id === this.remotes.default) {
                      return true;
                  }
                  return false;
              }
              return true;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(RemoteConnectionsList.prototype, "isDeleteDisabled", {
          get: function () {
              if (this.selection) {
                  if (this.selection.id === this.remotes.default) {
                      return true;
                  }
                  return false;
              }
              return true;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(RemoteConnectionsList.prototype, "connections", {
          get: function () {
              return this.remotes ? this.remotes.connections : [];
          },
          enumerable: true,
          configurable: true
      });
      RemoteConnectionsList.prototype.getNameAndUrl = function (connection) {
          return connection.name + " (" + connection.protocol + "://" + connection.host + ":" + connection.port + ")";
      };
      /** Handle click on connection in list */
      RemoteConnectionsList.prototype.onConnectionClicked = function (connection) {
          this.selected = [connection];
      };
      /** Get index for a connection */
      RemoteConnectionsList.prototype.getConnectionIndex = function (connection) {
          return this.remotes.connections.indexOf(connection);
      };
      /** Move connection up in the list */
      RemoteConnectionsList.prototype.onConnectionMoveUp = function () {
          if (this.selection) {
              var old = this.getConnectionIndex(this.selection);
              arrayMove(this.remotes.connections, old, old - 1);
          }
      };
      /** Move connection down in the list */
      RemoteConnectionsList.prototype.onConnectionMoveDown = function () {
          if (this.selection) {
              var old = this.getConnectionIndex(this.selection);
              arrayMove(this.remotes.connections, old, old + 1);
          }
      };
      /** Delete a connection */
      RemoteConnectionsList.prototype.onConnectionDelete = function () {
          if (this.selection) {
              this.remotes.connections.splice(this.getConnectionIndex(this.selection), 1);
          }
      };
      /** Set current selection as the default */
      RemoteConnectionsList.prototype.onConnectionDefault = function () {
          if (this.selection) {
              this.remotes.default = this.selection.id;
          }
      };
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Object)
      ], RemoteConnectionsList.prototype, "remotes", void 0);
      RemoteConnectionsList = __decorate([
          sitewhereIdeCommon.Component({})
      ], RemoteConnectionsList);
      return RemoteConnectionsList;
  }(Vue));

  /* script */
  const __vue_script__$t = RemoteConnectionsList;

  /* template */
  var __vue_render__$t = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      [
        _c(
          "div",
          {
            staticStyle: {
              height: "300px",
              "overflow-y": "auto",
              border: "1px solid #ddd"
            }
          },
          [
            _c("v-data-table", {
              attrs: {
                items: _vm.connections,
                "item-key": "id",
                "hide-headers": "",
                "hide-actions": ""
              },
              scopedSlots: _vm._u([
                {
                  key: "items",
                  fn: function(props) {
                    return [
                      _c(
                        "tr",
                        {
                          staticStyle: { cursor: "pointer" },
                          attrs: { active: props.selected },
                          on: {
                            click: function($event) {
                              return _vm.onSelect(props.item)
                            }
                          }
                        },
                        [
                          _c(
                            "td",
                            { staticClass: "pa-2", attrs: { width: "5%" } },
                            [
                              _c("v-icon", [
                                _vm._v(
                                  _vm._s(
                                    props.item.protocol === "https"
                                      ? "lock"
                                      : "lock_open"
                                  )
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "subheading pa-2",
                              style: _vm.textStyle(props.item),
                              attrs: { width: "90%" }
                            },
                            [_vm._v(_vm._s(_vm.getNameAndUrl(props.item)))]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "pa-2", attrs: { width: "5%" } },
                            [
                              props.item.id === _vm.remotes.default
                                ? _c("v-icon", [_vm._v("star")])
                                : _vm._e()
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.selected,
                callback: function($$v) {
                  _vm.selected = $$v;
                },
                expression: "selected"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-layout",
          { attrs: { row: "", wrap: "" } },
          [
            _c(
              "v-flex",
              { staticClass: "pa-1", attrs: { xs3: "" } },
              [
                _c(
                  "v-btn",
                  {
                    attrs: { small: "", block: "", disabled: _vm.isUpDisabled },
                    on: { click: _vm.onConnectionMoveUp }
                  },
                  [
                    _c("v-icon", { attrs: { left: "" } }, [
                      _vm._v("arrow_upward")
                    ]),
                    _vm._v("Up\n      ")
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-flex",
              { staticClass: "pa-1", attrs: { xs3: "" } },
              [
                _c(
                  "v-btn",
                  {
                    attrs: { small: "", block: "", disabled: _vm.isDownDisabled },
                    on: { click: _vm.onConnectionMoveDown }
                  },
                  [
                    _c("v-icon", { attrs: { left: "" } }, [
                      _vm._v("arrow_downward")
                    ]),
                    _vm._v("Down\n      ")
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-flex",
              { staticClass: "pa-1", attrs: { xs3: "" } },
              [
                _c(
                  "v-btn",
                  {
                    attrs: {
                      small: "",
                      block: "",
                      disabled: _vm.isDefaultDisabled
                    },
                    on: { click: _vm.onConnectionDefault }
                  },
                  [
                    _c("v-icon", { attrs: { left: "" } }, [_vm._v("star")]),
                    _vm._v("Default\n      ")
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-flex",
              { staticClass: "pa-1", attrs: { xs3: "" } },
              [
                _c(
                  "v-btn",
                  {
                    attrs: {
                      small: "",
                      block: "",
                      disabled: _vm.isDeleteDisabled
                    },
                    on: { click: _vm.onConnectionDelete }
                  },
                  [
                    _c("v-icon", { attrs: { left: "" } }, [_vm._v("delete")]),
                    _vm._v("Delete\n      ")
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$t = [];
  __vue_render__$t._withStripped = true;

    /* style */
    const __vue_inject_styles__$t = undefined;
    /* scoped */
    const __vue_scope_id__$t = undefined;
    /* module identifier */
    const __vue_module_identifier__$t = undefined;
    /* functional template */
    const __vue_is_functional_template__$t = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var RemoteConnectionsList$1 = normalizeComponent_1(
      { render: __vue_render__$t, staticRenderFns: __vue_staticRenderFns__$t },
      __vue_inject_styles__$t,
      __vue_script__$t,
      __vue_scope_id__$t,
      __vue_is_functional_template__$t,
      __vue_module_identifier__$t,
      undefined,
      undefined
    );

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var withParamsBrowser = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.withParams = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  var root = typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : {};

  var fakeWithParams = function fakeWithParams(paramsOrClosure, maybeValidator) {
    if (_typeof(paramsOrClosure) === 'object' && maybeValidator !== undefined) {
      return maybeValidator;
    }

    return paramsOrClosure(function () {});
  };

  var withParams = root.vuelidate ? root.vuelidate.withParams : fakeWithParams;
  exports.withParams = withParams;
  });

  unwrapExports(withParamsBrowser);
  var withParamsBrowser_1 = withParamsBrowser.withParams;

  var params = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.pushParams = pushParams;
  exports.popParams = popParams;
  exports.withParams = withParams;
  exports._setTarget = exports.target = void 0;

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  var stack = [];
  var target = null;
  exports.target = target;

  var _setTarget = function _setTarget(x) {
    exports.target = target = x;
  };

  exports._setTarget = _setTarget;

  function pushParams() {
    if (target !== null) {
      stack.push(target);
    }

    exports.target = target = {};
  }

  function popParams() {
    var lastTarget = target;
    var newTarget = exports.target = target = stack.pop() || null;

    if (newTarget) {
      if (!Array.isArray(newTarget.$sub)) {
        newTarget.$sub = [];
      }

      newTarget.$sub.push(lastTarget);
    }

    return lastTarget;
  }

  function addParams(params) {
    if (_typeof(params) === 'object' && !Array.isArray(params)) {
      exports.target = target = _objectSpread({}, target, params);
    } else {
      throw new Error('params must be an object');
    }
  }

  function withParamsDirect(params, validator) {
    return withParamsClosure(function (add) {
      return function () {
        add(params);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return validator.apply(this, args);
      };
    });
  }

  function withParamsClosure(closure) {
    var validator = closure(addParams);
    return function () {
      pushParams();

      try {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return validator.apply(this, args);
      } finally {
        popParams();
      }
    };
  }

  function withParams(paramsOrClosure, maybeValidator) {
    if (_typeof(paramsOrClosure) === 'object' && maybeValidator !== undefined) {
      return withParamsDirect(paramsOrClosure, maybeValidator);
    }

    return withParamsClosure(paramsOrClosure);
  }
  });

  unwrapExports(params);
  var params_1 = params.pushParams;
  var params_2 = params.popParams;
  var params_3 = params.withParams;
  var params_4 = params._setTarget;
  var params_5 = params.target;

  var withParams_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var withParams = process.env.BUILD === 'web' ? withParamsBrowser.withParams : params.withParams;
  var _default = withParams;
  exports.default = _default;
  });

  unwrapExports(withParams_1);

  var common = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "withParams", {
    enumerable: true,
    get: function get() {
      return _withParams.default;
    }
  });
  exports.regex = exports.ref = exports.len = exports.req = void 0;

  var _withParams = _interopRequireDefault(withParams_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  var req = function req(value) {
    if (Array.isArray(value)) return !!value.length;

    if (value === undefined || value === null) {
      return false;
    }

    if (value === false) {
      return true;
    }

    if (value instanceof Date) {
      return !isNaN(value.getTime());
    }

    if (_typeof(value) === 'object') {
      for (var _ in value) {
        return true;
      }

      return false;
    }

    return !!String(value).length;
  };

  exports.req = req;

  var len = function len(value) {
    if (Array.isArray(value)) return value.length;

    if (_typeof(value) === 'object') {
      return Object.keys(value).length;
    }

    return String(value).length;
  };

  exports.len = len;

  var ref = function ref(reference, vm, parentVm) {
    return typeof reference === 'function' ? reference.call(vm, parentVm) : parentVm[reference];
  };

  exports.ref = ref;

  var regex = function regex(type, expr) {
    return (0, _withParams.default)({
      type: type
    }, function (value) {
      return !req(value) || expr.test(value);
    });
  };

  exports.regex = regex;
  });

  unwrapExports(common);
  var common_1 = common.regex;
  var common_2 = common.ref;
  var common_3 = common.len;
  var common_4 = common.req;

  var alpha = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var _default = (0, common.regex)('alpha', /^[a-zA-Z]*$/);

  exports.default = _default;
  });

  unwrapExports(alpha);

  var alphaNum = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var _default = (0, common.regex)('alphaNum', /^[a-zA-Z0-9]*$/);

  exports.default = _default;
  });

  unwrapExports(alphaNum);

  var numeric = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var _default = (0, common.regex)('numeric', /^[0-9]*$/);

  exports.default = _default;
  });

  unwrapExports(numeric);

  var between = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var _default = function _default(min, max) {
    return (0, common.withParams)({
      type: 'between',
      min: min,
      max: max
    }, function (value) {
      return !(0, common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +min <= +value && +max >= +value;
    });
  };

  exports.default = _default;
  });

  unwrapExports(between);

  var email = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;

  var _default = (0, common.regex)('email', emailRegex);

  exports.default = _default;
  });

  unwrapExports(email);

  var ipAddress = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var _default = (0, common.withParams)({
    type: 'ipAddress'
  }, function (value) {
    if (!(0, common.req)(value)) {
      return true;
    }

    if (typeof value !== 'string') {
      return false;
    }

    var nibbles = value.split('.');
    return nibbles.length === 4 && nibbles.every(nibbleValid);
  });

  exports.default = _default;

  var nibbleValid = function nibbleValid(nibble) {
    if (nibble.length > 3 || nibble.length === 0) {
      return false;
    }

    if (nibble[0] === '0' && nibble !== '0') {
      return false;
    }

    if (!nibble.match(/^\d+$/)) {
      return false;
    }

    var numeric = +nibble | 0;
    return numeric >= 0 && numeric <= 255;
  };
  });

  unwrapExports(ipAddress);

  var macAddress = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var _default = function _default() {
    var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':';
    return (0, common.withParams)({
      type: 'macAddress'
    }, function (value) {
      if (!(0, common.req)(value)) {
        return true;
      }

      if (typeof value !== 'string') {
        return false;
      }

      var parts = typeof separator === 'string' && separator !== '' ? value.split(separator) : value.length === 12 || value.length === 16 ? value.match(/.{2}/g) : null;
      return parts !== null && (parts.length === 6 || parts.length === 8) && parts.every(hexValid);
    });
  };

  exports.default = _default;

  var hexValid = function hexValid(hex) {
    return hex.toLowerCase().match(/^[0-9a-f]{2}$/);
  };
  });

  unwrapExports(macAddress);

  var maxLength = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var _default = function _default(length) {
    return (0, common.withParams)({
      type: 'maxLength',
      max: length
    }, function (value) {
      return !(0, common.req)(value) || (0, common.len)(value) <= length;
    });
  };

  exports.default = _default;
  });

  unwrapExports(maxLength);

  var minLength = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var _default = function _default(length) {
    return (0, common.withParams)({
      type: 'minLength',
      min: length
    }, function (value) {
      return !(0, common.req)(value) || (0, common.len)(value) >= length;
    });
  };

  exports.default = _default;
  });

  unwrapExports(minLength);

  var required = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var _default = (0, common.withParams)({
    type: 'required'
  }, common.req);

  exports.default = _default;
  });

  unwrapExports(required);

  var requiredIf = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var _default = function _default(prop) {
    return (0, common.withParams)({
      type: 'requiredIf',
      prop: prop
    }, function (value, parentVm) {
      return (0, common.ref)(prop, this, parentVm) ? (0, common.req)(value) : true;
    });
  };

  exports.default = _default;
  });

  unwrapExports(requiredIf);

  var requiredUnless = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var _default = function _default(prop) {
    return (0, common.withParams)({
      type: 'requiredUnless',
      prop: prop
    }, function (value, parentVm) {
      return !(0, common.ref)(prop, this, parentVm) ? (0, common.req)(value) : true;
    });
  };

  exports.default = _default;
  });

  unwrapExports(requiredUnless);

  var sameAs = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var _default = function _default(equalTo) {
    return (0, common.withParams)({
      type: 'sameAs',
      eq: equalTo
    }, function (value, parentVm) {
      return value === (0, common.ref)(equalTo, this, parentVm);
    });
  };

  exports.default = _default;
  });

  unwrapExports(sameAs);

  var url = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var urlRegex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

  var _default = (0, common.regex)('url', urlRegex);

  exports.default = _default;
  });

  unwrapExports(url);

  var or = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var _default = function _default() {
    for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
      validators[_key] = arguments[_key];
    }

    return (0, common.withParams)({
      type: 'or'
    }, function () {
      var _this = this;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return validators.length > 0 && validators.reduce(function (valid, fn) {
        return valid || fn.apply(_this, args);
      }, false);
    });
  };

  exports.default = _default;
  });

  unwrapExports(or);

  var and = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var _default = function _default() {
    for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
      validators[_key] = arguments[_key];
    }

    return (0, common.withParams)({
      type: 'and'
    }, function () {
      var _this = this;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return validators.length > 0 && validators.reduce(function (valid, fn) {
        return valid && fn.apply(_this, args);
      }, true);
    });
  };

  exports.default = _default;
  });

  unwrapExports(and);

  var not = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var _default = function _default(validator) {
    return (0, common.withParams)({
      type: 'not'
    }, function (value, vm) {
      return !(0, common.req)(value) || !validator.call(this, value, vm);
    });
  };

  exports.default = _default;
  });

  unwrapExports(not);

  var minValue = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var _default = function _default(min) {
    return (0, common.withParams)({
      type: 'minValue',
      min: min
    }, function (value) {
      return !(0, common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value >= +min;
    });
  };

  exports.default = _default;
  });

  unwrapExports(minValue);

  var maxValue = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var _default = function _default(max) {
    return (0, common.withParams)({
      type: 'maxValue',
      max: max
    }, function (value) {
      return !(0, common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value <= +max;
    });
  };

  exports.default = _default;
  });

  unwrapExports(maxValue);

  var integer = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var _default = (0, common.regex)('integer', /^-?[0-9]*$/);

  exports.default = _default;
  });

  unwrapExports(integer);

  var decimal = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;



  var _default = (0, common.regex)('decimal', /^[-]?\d*(\.\d+)?$/);

  exports.default = _default;
  });

  unwrapExports(decimal);

  var validators = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "alpha", {
    enumerable: true,
    get: function get() {
      return _alpha.default;
    }
  });
  Object.defineProperty(exports, "alphaNum", {
    enumerable: true,
    get: function get() {
      return _alphaNum.default;
    }
  });
  Object.defineProperty(exports, "numeric", {
    enumerable: true,
    get: function get() {
      return _numeric.default;
    }
  });
  Object.defineProperty(exports, "between", {
    enumerable: true,
    get: function get() {
      return _between.default;
    }
  });
  Object.defineProperty(exports, "email", {
    enumerable: true,
    get: function get() {
      return _email.default;
    }
  });
  Object.defineProperty(exports, "ipAddress", {
    enumerable: true,
    get: function get() {
      return _ipAddress.default;
    }
  });
  Object.defineProperty(exports, "macAddress", {
    enumerable: true,
    get: function get() {
      return _macAddress.default;
    }
  });
  Object.defineProperty(exports, "maxLength", {
    enumerable: true,
    get: function get() {
      return _maxLength.default;
    }
  });
  Object.defineProperty(exports, "minLength", {
    enumerable: true,
    get: function get() {
      return _minLength.default;
    }
  });
  Object.defineProperty(exports, "required", {
    enumerable: true,
    get: function get() {
      return _required.default;
    }
  });
  Object.defineProperty(exports, "requiredIf", {
    enumerable: true,
    get: function get() {
      return _requiredIf.default;
    }
  });
  Object.defineProperty(exports, "requiredUnless", {
    enumerable: true,
    get: function get() {
      return _requiredUnless.default;
    }
  });
  Object.defineProperty(exports, "sameAs", {
    enumerable: true,
    get: function get() {
      return _sameAs.default;
    }
  });
  Object.defineProperty(exports, "url", {
    enumerable: true,
    get: function get() {
      return _url.default;
    }
  });
  Object.defineProperty(exports, "or", {
    enumerable: true,
    get: function get() {
      return _or.default;
    }
  });
  Object.defineProperty(exports, "and", {
    enumerable: true,
    get: function get() {
      return _and.default;
    }
  });
  Object.defineProperty(exports, "not", {
    enumerable: true,
    get: function get() {
      return _not.default;
    }
  });
  Object.defineProperty(exports, "minValue", {
    enumerable: true,
    get: function get() {
      return _minValue.default;
    }
  });
  Object.defineProperty(exports, "maxValue", {
    enumerable: true,
    get: function get() {
      return _maxValue.default;
    }
  });
  Object.defineProperty(exports, "integer", {
    enumerable: true,
    get: function get() {
      return _integer.default;
    }
  });
  Object.defineProperty(exports, "decimal", {
    enumerable: true,
    get: function get() {
      return _decimal.default;
    }
  });
  exports.helpers = void 0;

  var _alpha = _interopRequireDefault(alpha);

  var _alphaNum = _interopRequireDefault(alphaNum);

  var _numeric = _interopRequireDefault(numeric);

  var _between = _interopRequireDefault(between);

  var _email = _interopRequireDefault(email);

  var _ipAddress = _interopRequireDefault(ipAddress);

  var _macAddress = _interopRequireDefault(macAddress);

  var _maxLength = _interopRequireDefault(maxLength);

  var _minLength = _interopRequireDefault(minLength);

  var _required = _interopRequireDefault(required);

  var _requiredIf = _interopRequireDefault(requiredIf);

  var _requiredUnless = _interopRequireDefault(requiredUnless);

  var _sameAs = _interopRequireDefault(sameAs);

  var _url = _interopRequireDefault(url);

  var _or = _interopRequireDefault(or);

  var _and = _interopRequireDefault(and);

  var _not = _interopRequireDefault(not);

  var _minValue = _interopRequireDefault(minValue);

  var _maxValue = _interopRequireDefault(maxValue);

  var _integer = _interopRequireDefault(integer);

  var _decimal = _interopRequireDefault(decimal);

  var helpers = _interopRequireWildcard(common);

  exports.helpers = helpers;

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  });

  unwrapExports(validators);
  var validators_1 = validators.required;
  var validators_2 = validators.helpers;

  var RemoteConnectionDetails = /** @class */ (function (_super) {
      __extends(RemoteConnectionDetails, _super);
      function RemoteConnectionDetails() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.name = null;
          _this.protocol = null;
          _this.host = null;
          _this.port = null;
          _this.protocols = [
              {
                  text: "http",
                  value: "http"
              },
              {
                  text: "https",
                  value: "https"
              }
          ];
          return _this;
      }
      /** Reset section content */
      RemoteConnectionDetails.prototype.reset = function () {
          this.name = null;
          this.protocol = null;
          this.host = null;
          this.port = null;
          this.$v.$reset();
      };
      /** Perform validation */
      RemoteConnectionDetails.prototype.validate = function () {
          this.$v.$touch();
          return !this.$v.$invalid;
      };
      /** Load form data from an object */
      RemoteConnectionDetails.prototype.load = function (input) {
          this.name = input.name;
          this.protocol = input.protocol;
          this.host = input.areaType.host;
          this.port = input.port;
      };
      /** Save form data to an object */
      RemoteConnectionDetails.prototype.save = function () {
          return {
              id: generateUniqueId(),
              name: this.name,
              protocol: this.protocol,
              host: this.host,
              port: this.port
          };
      };
      /** Called when create button is clicked */
      RemoteConnectionDetails.prototype.onCreateClicked = function () {
          var added = this.save();
          this.$emit("added", added);
          this.reset();
      };
      RemoteConnectionDetails = __decorate([
          sitewhereIdeCommon.Component({
              components: {
                  DialogForm: DialogForm$1,
                  FormText: FormText$1,
                  FormSelect: FormSelect$1
              },
              validations: {
                  name: {
                      required: validators_1
                  },
                  protocol: {
                      required: validators_1
                  },
                  host: {
                      required: validators_1
                  },
                  port: {
                      required: validators_1
                  }
              }
          })
      ], RemoteConnectionDetails);
      return RemoteConnectionDetails;
  }(sitewhereIdeCommon.DialogSection));

  /* script */
  const __vue_script__$u = RemoteConnectionDetails;

  /* template */
  var __vue_render__$u = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "dialog-form",
      [
        _c(
          "v-flex",
          { attrs: { xs12: "" } },
          [
            _c(
              "form-text",
              {
                attrs: {
                  required: "",
                  label: "Name",
                  title: "Name displayed for remote.",
                  icon: "info"
                },
                model: {
                  value: _vm.name,
                  callback: function($$v) {
                    _vm.name = $$v;
                  },
                  expression: "name"
                }
              },
              [
                !_vm.$v.name.required && _vm.$v.$dirty
                  ? _c("span", [_vm._v("Name is required.")])
                  : _vm._e()
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-flex",
          { attrs: { xs2: "" } },
          [
            _c("form-select", {
              attrs: {
                items: _vm.protocols,
                title: "Choose connection protocol",
                label: "Protocol",
                "item-text": "text",
                "item-value": "value",
                icon: "router"
              },
              model: {
                value: _vm.protocol,
                callback: function($$v) {
                  _vm.protocol = $$v;
                },
                expression: "protocol"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-flex",
          { attrs: { xs6: "" } },
          [
            _c(
              "form-text",
              {
                staticClass: "ml-3",
                attrs: {
                  required: "",
                  label: "Hostname",
                  title: "Hostname for remote."
                },
                model: {
                  value: _vm.host,
                  callback: function($$v) {
                    _vm.host = $$v;
                  },
                  expression: "host"
                }
              },
              [
                !_vm.$v.host.required && _vm.$v.$dirty
                  ? _c("span", [_vm._v("Hostname is required.")])
                  : _vm._e()
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-flex",
          { attrs: { xs3: "" } },
          [
            _c(
              "form-text",
              {
                staticClass: "ml-3",
                attrs: {
                  required: "",
                  type: "number",
                  label: "Port",
                  title: "Port for remote."
                },
                model: {
                  value: _vm.port,
                  callback: function($$v) {
                    _vm.port = $$v;
                  },
                  expression: "port"
                }
              },
              [
                !_vm.$v.port.required && _vm.$v.$dirty
                  ? _c("span", [_vm._v("Port is required.")])
                  : _vm._e()
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-flex",
          { attrs: { xs1: "" } },
          [
            _c(
              "v-btn",
              {
                staticClass: "mb-0",
                attrs: { color: "primary", icon: "" },
                on: { click: _vm.onCreateClicked }
              },
              [_c("v-icon", [_vm._v("add")])],
              1
            )
          ],
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$u = [];
  __vue_render__$u._withStripped = true;

    /* style */
    const __vue_inject_styles__$u = undefined;
    /* scoped */
    const __vue_scope_id__$u = undefined;
    /* module identifier */
    const __vue_module_identifier__$u = undefined;
    /* functional template */
    const __vue_is_functional_template__$u = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var RemoteConnectionDetails$1 = normalizeComponent_1(
      { render: __vue_render__$u, staticRenderFns: __vue_staticRenderFns__$u },
      __vue_inject_styles__$u,
      __vue_script__$u,
      __vue_scope_id__$u,
      __vue_is_functional_template__$u,
      __vue_module_identifier__$u,
      undefined,
      undefined
    );

  var RemotesDialog = /** @class */ (function (_super) {
      __extends(RemotesDialog, _super);
      function RemotesDialog() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.remotes = null;
          return _this;
      }
      Object.defineProperty(RemotesDialog.prototype, "icon", {
          /** Get icon for dialog */
          get: function () {
              return NavigationIcon.Remotes;
          },
          enumerable: true,
          configurable: true
      });
      // Reset dialog contents.
      RemotesDialog.prototype.reset = function () {
          if (this.$refs.details) {
              this.$refs.connections.reset();
          }
      };
      // Load dialog from a given payload.
      RemotesDialog.prototype.load = function (payload) {
          this.remotes = JSON.parse(JSON.stringify(payload));
          this.reset();
          if (this.$refs.connections) {
              this.$refs.connections.load(payload);
          }
      };
      // Called when a new connection is added.
      RemotesDialog.prototype.onConnectionAdded = function (added) {
          if (this.remotes) {
              this.remotes.connections.push(added);
          }
      };
      // Called after create button is clicked.
      RemotesDialog.prototype.onCreateClicked = function (e) {
          this.$emit("save", this.remotes);
      };
      RemotesDialog = __decorate([
          sitewhereIdeCommon.Component({
              components: {
                  RemoteConnectionsList: RemoteConnectionsList$1,
                  RemoteConnectionDetails: RemoteConnectionDetails$1
              }
          })
      ], RemotesDialog);
      return RemotesDialog;
  }(sitewhereIdeCommon.DialogComponent));

  /* script */
  const __vue_script__$v = RemotesDialog;

  /* template */
  var __vue_render__$v = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "sw-base-dialog",
      {
        ref: "dialog",
        attrs: {
          icon: _vm.icon,
          title: "Edit Remote Connection Settings",
          loaded: _vm.loaded,
          visible: _vm.dialogVisible,
          createLabel: "Ok",
          cancelLabel: "Cancel"
        },
        on: {
          createClicked: _vm.onCreateClicked,
          cancelClicked: _vm.onCancelClicked
        }
      },
      [
        _c(
          "v-card",
          { staticClass: "ma-2", attrs: { flat: "" } },
          [_c("remote-connections-list", { attrs: { remotes: _vm.remotes } })],
          1
        ),
        _vm._v(" "),
        _c("v-divider"),
        _vm._v(" "),
        _c(
          "v-card",
          { staticClass: "ml-2 mr-2 mb-0 mt-4", attrs: { flat: "" } },
          [
            _c("remote-connection-details", {
              staticClass: "pa-1",
              on: { added: _vm.onConnectionAdded }
            })
          ],
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$v = [];
  __vue_render__$v._withStripped = true;

    /* style */
    const __vue_inject_styles__$v = undefined;
    /* scoped */
    const __vue_scope_id__$v = undefined;
    /* module identifier */
    const __vue_module_identifier__$v = undefined;
    /* functional template */
    const __vue_is_functional_template__$v = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var RemotesDialog$1 = normalizeComponent_1(
      { render: __vue_render__$v, staticRenderFns: __vue_staticRenderFns__$v },
      __vue_inject_styles__$v,
      __vue_script__$v,
      __vue_scope_id__$v,
      __vue_is_functional_template__$v,
      __vue_module_identifier__$v,
      undefined,
      undefined
    );

  var RemotesDropdown = /** @class */ (function (_super) {
      __extends(RemotesDropdown, _super);
      function RemotesDropdown() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.selected = null;
          return _this;
      }
      Object.defineProperty(RemotesDropdown.prototype, "connections", {
          get: function () {
              return this.remotes ? this.remotes.connections : [];
          },
          enumerable: true,
          configurable: true
      });
      RemotesDropdown.prototype.onConnectionsUpdated = function (updated) {
          var _this = this;
          updated.forEach(function (connection) {
              if (_this.remotes && _this.remotes.default) {
                  if (_this.remotes.default === connection.id) {
                      _this.selected = connection;
                  }
              }
          });
      };
      RemotesDropdown.prototype.onSelectionChanged = function (updated) {
          this.$emit("selected", updated);
      };
      RemotesDropdown.prototype.getNameAndUrl = function (connection) {
          return connection.name + " (" + connection.protocol + "://" + connection.host + ":" + connection.port + ")";
      };
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Object)
      ], RemotesDropdown.prototype, "remotes", void 0);
      __decorate([
          sitewhereIdeCommon.Watch("connections", { immediate: true }),
          __metadata("design:type", Function),
          __metadata("design:paramtypes", [Array]),
          __metadata("design:returntype", void 0)
      ], RemotesDropdown.prototype, "onConnectionsUpdated", null);
      __decorate([
          sitewhereIdeCommon.Watch("selected", { immediate: true }),
          __metadata("design:type", Function),
          __metadata("design:paramtypes", [Object]),
          __metadata("design:returntype", void 0)
      ], RemotesDropdown.prototype, "onSelectionChanged", null);
      RemotesDropdown = __decorate([
          sitewhereIdeCommon.Component
      ], RemotesDropdown);
      return RemotesDropdown;
  }(Vue));

  /* script */
  const __vue_script__$w = RemotesDropdown;

  /* template */
  var __vue_render__$w = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-select", {
      attrs: { items: _vm.connections, solo: "" },
      scopedSlots: _vm._u([
        {
          key: "selection",
          fn: function(data) {
            return [
              _c("v-icon", { staticClass: "pr-2", attrs: { small: "" } }, [
                _vm._v("router")
              ]),
              _vm._v("\n    " + _vm._s(_vm.getNameAndUrl(data.item)) + "\n  ")
            ]
          }
        },
        {
          key: "item",
          fn: function(data) {
            return [
              _c("v-icon", { staticClass: "pr-2", attrs: { small: "" } }, [
                _vm._v("router")
              ]),
              _vm._v("\n    " + _vm._s(_vm.getNameAndUrl(data.item)) + "\n  ")
            ]
          }
        }
      ]),
      model: {
        value: _vm.selected,
        callback: function($$v) {
          _vm.selected = $$v;
        },
        expression: "selected"
      }
    })
  };
  var __vue_staticRenderFns__$w = [];
  __vue_render__$w._withStripped = true;

    /* style */
    const __vue_inject_styles__$w = undefined;
    /* scoped */
    const __vue_scope_id__$w = undefined;
    /* module identifier */
    const __vue_module_identifier__$w = undefined;
    /* functional template */
    const __vue_is_functional_template__$w = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var RemotesDropdown$1 = normalizeComponent_1(
      { render: __vue_render__$w, staticRenderFns: __vue_staticRenderFns__$w },
      __vue_inject_styles__$w,
      __vue_script__$w,
      __vue_scope_id__$w,
      __vue_is_functional_template__$w,
      __vue_module_identifier__$w,
      undefined,
      undefined
    );

  var ContentTab = /** @class */ (function (_super) {
      __extends(ContentTab, _super);
      function ContentTab() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], ContentTab.prototype, "tabkey", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], ContentTab.prototype, "loadingMessage", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Boolean)
      ], ContentTab.prototype, "loaded", void 0);
      ContentTab = __decorate([
          sitewhereIdeCommon.Component({
              components: {
                  LoadingOverlay: LoadingOverlay$1
              }
          })
      ], ContentTab);
      return ContentTab;
  }(Vue));

  /* script */
  const __vue_script__$x = ContentTab;

  /* template */
  var __vue_render__$x = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-tab-item",
      { key: _vm.tabkey },
      [
        _c("div", { staticClass: "flex-rows" }, [
          _c("div", { staticClass: "tab-header" }, [_vm._t("header")], 2),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "tab-content" },
            [
              _vm.loaded
                ? _vm._t("default")
                : _c(
                    "v-card",
                    { staticStyle: { height: "100%" } },
                    [
                      !_vm.loaded
                        ? _c("loading-overlay", {
                            attrs: { loadingMessage: _vm.loadingMessage }
                          })
                        : _vm._e()
                    ],
                    1
                  )
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "tab-footer" }, [_vm._t("footer")], 2)
        ]),
        _vm._v(" "),
        _vm._t("dialogs")
      ],
      2
    )
  };
  var __vue_staticRenderFns__$x = [];
  __vue_render__$x._withStripped = true;

    /* style */
    const __vue_inject_styles__$x = function (inject) {
      if (!inject) return
      inject("data-v-0c0dfb28_0", { source: "\n.flex-rows[data-v-0c0dfb28] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.tab-header[data-v-0c0dfb28] {\n  flex: 0;\n}\n.tab-content[data-v-0c0dfb28] {\n  flex: 1;\n  background-color: #eee;\n  overflow-y: auto;\n}\n.tab-footer[data-v-0c0dfb28] {\n  flex: 0;\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/navigation/ContentTab.vue"],"names":[],"mappings":";AAuCA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;AACA;AACA;EACA,OAAA;AACA;AACA;EACA,OAAA;EACA,sBAAA;EACA,gBAAA;AACA;AACA;EACA,OAAA;AACA","file":"ContentTab.vue","sourcesContent":["<template>\n  <v-tab-item :key=\"tabkey\">\n    <div class=\"flex-rows\">\n      <div class=\"tab-header\">\n        <slot name=\"header\" />\n      </div>\n      <div class=\"tab-content\">\n        <slot v-if=\"loaded\" />\n        <v-card style=\"height: 100%\" v-else>\n          <loading-overlay v-if=\"!loaded\" :loadingMessage=\"loadingMessage\" />\n        </v-card>\n      </div>\n      <div class=\"tab-footer\">\n        <slot name=\"footer\" />\n      </div>\n    </div>\n    <slot name=\"dialogs\"></slot>\n  </v-tab-item>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport { Component, Prop } from \"sitewhere-ide-common\";\n\nimport LoadingOverlay from \"../common/LoadingOverlay.vue\";\n\n@Component({\n  components: {\n    LoadingOverlay\n  }\n})\nexport default class ContentTab extends Vue {\n  @Prop() readonly tabkey!: string;\n  @Prop() readonly loadingMessage!: string;\n  @Prop() readonly loaded!: boolean;\n}\n</script>\n\n<style scoped>\n.flex-rows {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.tab-header {\n  flex: 0;\n}\n.tab-content {\n  flex: 1;\n  background-color: #eee;\n  overflow-y: auto;\n}\n.tab-footer {\n  flex: 0;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$x = "data-v-0c0dfb28";
    /* module identifier */
    const __vue_module_identifier__$x = undefined;
    /* functional template */
    const __vue_is_functional_template__$x = false;
    /* style inject SSR */
    

    
    var ContentTab$1 = normalizeComponent_1(
      { render: __vue_render__$x, staticRenderFns: __vue_staticRenderFns__$x },
      __vue_inject_styles__$x,
      __vue_script__$x,
      __vue_scope_id__$x,
      __vue_is_functional_template__$x,
      __vue_module_identifier__$x,
      browser,
      undefined
    );

  /**
    * vue-class-component v7.1.0
    * (c) 2015-present Evan You
    * @license MIT
    */

  // The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
  // which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
  // Without this check consumers will encounter hard to track down runtime errors.
  var reflectionIsSupported = typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
  function copyReflectionMetadata(to, from) {
      forwardMetadata(to, from);
      Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
          forwardMetadata(to.prototype, from.prototype, key);
      });
      Object.getOwnPropertyNames(from).forEach(function (key) {
          forwardMetadata(to, from, key);
      });
  }
  function forwardMetadata(to, from, propertyKey) {
      var metaKeys = propertyKey
          ? Reflect.getOwnMetadataKeys(from, propertyKey)
          : Reflect.getOwnMetadataKeys(from);
      metaKeys.forEach(function (metaKey) {
          var metadata = propertyKey
              ? Reflect.getOwnMetadata(metaKey, from, propertyKey)
              : Reflect.getOwnMetadata(metaKey, from);
          if (propertyKey) {
              Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
          }
          else {
              Reflect.defineMetadata(metaKey, metadata, to);
          }
      });
  }

  var fakeArray = { __proto__: [] };
  var hasProto = fakeArray instanceof Array;
  function isPrimitive(value) {
      var type = typeof value;
      return value == null || (type !== 'object' && type !== 'function');
  }
  function warn(message) {
      if (typeof console !== 'undefined') {
          console.warn('[vue-class-component] ' + message);
      }
  }

  function collectDataFromConstructor(vm, Component) {
      // override _init to prevent to init as Vue instance
      var originalInit = Component.prototype._init;
      Component.prototype._init = function () {
          var _this = this;
          // proxy to actual vm
          var keys = Object.getOwnPropertyNames(vm);
          // 2.2.0 compat (props are no longer exposed as self properties)
          if (vm.$options.props) {
              for (var key in vm.$options.props) {
                  if (!vm.hasOwnProperty(key)) {
                      keys.push(key);
                  }
              }
          }
          keys.forEach(function (key) {
              if (key.charAt(0) !== '_') {
                  Object.defineProperty(_this, key, {
                      get: function () { return vm[key]; },
                      set: function (value) { vm[key] = value; },
                      configurable: true
                  });
              }
          });
      };
      // should be acquired class property values
      var data = new Component();
      // restore original _init to avoid memory leak (#209)
      Component.prototype._init = originalInit;
      // create plain data object
      var plainData = {};
      Object.keys(data).forEach(function (key) {
          if (data[key] !== undefined) {
              plainData[key] = data[key];
          }
      });
      {
          if (!(Component.prototype instanceof Vue) && Object.keys(plainData).length > 0) {
              warn('Component class must inherit Vue or its descendant class ' +
                  'when class property is used.');
          }
      }
      return plainData;
  }

  var $internalHooks = [
      'data',
      'beforeCreate',
      'created',
      'beforeMount',
      'mounted',
      'beforeDestroy',
      'destroyed',
      'beforeUpdate',
      'updated',
      'activated',
      'deactivated',
      'render',
      'errorCaptured',
      'serverPrefetch' // 2.6
  ];
  function componentFactory(Component, options) {
      if (options === void 0) { options = {}; }
      options.name = options.name || Component._componentTag || Component.name;
      // prototype props.
      var proto = Component.prototype;
      Object.getOwnPropertyNames(proto).forEach(function (key) {
          if (key === 'constructor') {
              return;
          }
          // hooks
          if ($internalHooks.indexOf(key) > -1) {
              options[key] = proto[key];
              return;
          }
          var descriptor = Object.getOwnPropertyDescriptor(proto, key);
          if (descriptor.value !== void 0) {
              // methods
              if (typeof descriptor.value === 'function') {
                  (options.methods || (options.methods = {}))[key] = descriptor.value;
              }
              else {
                  // typescript decorated data
                  (options.mixins || (options.mixins = [])).push({
                      data: function () {
                          var _a;
                          return _a = {}, _a[key] = descriptor.value, _a;
                      }
                  });
              }
          }
          else if (descriptor.get || descriptor.set) {
              // computed properties
              (options.computed || (options.computed = {}))[key] = {
                  get: descriptor.get,
                  set: descriptor.set
              };
          }
      });
      (options.mixins || (options.mixins = [])).push({
          data: function () {
              return collectDataFromConstructor(this, Component);
          }
      });
      // decorate options
      var decorators = Component.__decorators__;
      if (decorators) {
          decorators.forEach(function (fn) { return fn(options); });
          delete Component.__decorators__;
      }
      // find super
      var superProto = Object.getPrototypeOf(Component.prototype);
      var Super = superProto instanceof Vue
          ? superProto.constructor
          : Vue;
      var Extended = Super.extend(options);
      forwardStaticMembers(Extended, Component, Super);
      if (reflectionIsSupported) {
          copyReflectionMetadata(Extended, Component);
      }
      return Extended;
  }
  var reservedPropertyNames = [
      // Unique id
      'cid',
      // Super Vue constructor
      'super',
      // Component options that will be used by the component
      'options',
      'superOptions',
      'extendOptions',
      'sealedOptions',
      // Private assets
      'component',
      'directive',
      'filter'
  ];
  var shouldIgnore = {
      prototype: true,
      arguments: true,
      callee: true,
      caller: true
  };
  function forwardStaticMembers(Extended, Original, Super) {
      // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
      Object.getOwnPropertyNames(Original).forEach(function (key) {
          // Skip the properties that should not be overwritten
          if (shouldIgnore[key]) {
              return;
          }
          // Some browsers does not allow reconfigure built-in properties
          var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
          if (extendedDescriptor && !extendedDescriptor.configurable) {
              return;
          }
          var descriptor = Object.getOwnPropertyDescriptor(Original, key);
          // If the user agent does not support `__proto__` or its family (IE <= 10),
          // the sub class properties may be inherited properties from the super class in TypeScript.
          // We need to exclude such properties to prevent to overwrite
          // the component options object which stored on the extended constructor (See #192).
          // If the value is a referenced value (object or function),
          // we can check equality of them and exclude it if they have the same reference.
          // If it is a primitive value, it will be forwarded for safety.
          if (!hasProto) {
              // Only `cid` is explicitly exluded from property forwarding
              // because we cannot detect whether it is a inherited property or not
              // on the no `__proto__` environment even though the property is reserved.
              if (key === 'cid') {
                  return;
              }
              var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
              if (!isPrimitive(descriptor.value) &&
                  superDescriptor &&
                  superDescriptor.value === descriptor.value) {
                  return;
              }
          }
          // Warn if the users manually declare reserved properties
          if (reservedPropertyNames.indexOf(key) >= 0) {
              warn("Static property name '" + key + "' declared on class '" + Original.name + "' " +
                  'conflicts with reserved property name of Vue internal. ' +
                  'It may cause unexpected behavior of the component. Consider renaming the property.');
          }
          Object.defineProperty(Extended, key, descriptor);
      });
  }

  function Component(options) {
      if (typeof options === 'function') {
          return componentFactory(options);
      }
      return function (Component) {
          return componentFactory(Component, options);
      };
  }
  Component.registerHooks = function registerHooks(keys) {
      $internalHooks.push.apply($internalHooks, keys);
  };

  /** vue-property-decorator verson 8.2.2 MIT LICENSE copyright 2019 kaorun343 */

  var DataEntryPanel = /** @class */ (function (_super) {
      __extends(DataEntryPanel, _super);
      function DataEntryPanel() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      DataEntryPanel = __decorate([
          Component({
              components: {}
          })
      ], DataEntryPanel);
      return DataEntryPanel;
  }(Vue));

  /* script */
  const __vue_script__$y = DataEntryPanel;

  /* template */
  var __vue_render__$y = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-container",
      { attrs: { fluid: "" } },
      [_c("v-layout", { attrs: { row: "", wrap: "" } }, [_vm._t("default")], 2)],
      1
    )
  };
  var __vue_staticRenderFns__$y = [];
  __vue_render__$y._withStripped = true;

    /* style */
    const __vue_inject_styles__$y = function (inject) {
      if (!inject) return
      inject("data-v-57af47ea_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"DataEntryPanel.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$y = "data-v-57af47ea";
    /* module identifier */
    const __vue_module_identifier__$y = undefined;
    /* functional template */
    const __vue_is_functional_template__$y = false;
    /* style inject SSR */
    

    
    var DataEntryPanel$1 = normalizeComponent_1(
      { render: __vue_render__$y, staticRenderFns: __vue_staticRenderFns__$y },
      __vue_inject_styles__$y,
      __vue_script__$y,
      __vue_scope_id__$y,
      __vue_is_functional_template__$y,
      __vue_module_identifier__$y,
      browser,
      undefined
    );

  var DataTableTab = /** @class */ (function (_super) {
      __extends(DataTableTab, _super);
      function DataTableTab() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(DataTableTab.prototype, "matches", {
          /** Get current matches */
          get: function () {
              return this.results ? this.results.results : [];
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(DataTableTab.prototype, "tableStyle", {
          /** Dims results when loading */
          get: function () {
              return { opacity: this.loaded ? 1.0 : 0.3 };
          },
          enumerable: true,
          configurable: true
      });
      /** Update paging values and run query */
      DataTableTab.prototype.onPagingUpdated = function (paging) {
          this.$emit("pagingUpdated", paging);
      };
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], DataTableTab.prototype, "tabkey", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Array)
      ], DataTableTab.prototype, "headers", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Array)
      ], DataTableTab.prototype, "pageSizes", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], DataTableTab.prototype, "noDataText", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], DataTableTab.prototype, "loadingMessage", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Boolean)
      ], DataTableTab.prototype, "loaded", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Object)
      ], DataTableTab.prototype, "results", void 0);
      DataTableTab = __decorate([
          sitewhereIdeCommon.Component({
              components: {
                  Pager: Pager$2,
                  LoadingOverlay: LoadingOverlay$1
              }
          })
      ], DataTableTab);
      return DataTableTab;
  }(Vue));

  /* script */
  const __vue_script__$z = DataTableTab;

  /* template */
  var __vue_render__$z = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-tab-item",
      { key: _vm.tabkey },
      [
        _c("div", { staticClass: "flex-rows" }, [
          _c("div", { staticClass: "tab-header" }, [_vm._t("header")], 2),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "tab-content" },
            [
              _c(
                "v-layout",
                { attrs: { row: "", wrap: "" } },
                [
                  _c(
                    "v-flex",
                    { attrs: { xs12: "" } },
                    [
                      _c("v-data-table", {
                        style: _vm.tableStyle,
                        attrs: {
                          headers: _vm.headers,
                          items: _vm.matches,
                          "hide-actions": true,
                          "no-data-text": _vm.noDataText
                        },
                        scopedSlots: _vm._u(
                          [
                            _vm._l(_vm.$scopedSlots, function(_, slot) {
                              return {
                                key: slot,
                                fn: function(scope) {
                                  return [_vm._t(slot, null, null, scope)]
                                }
                              }
                            })
                          ],
                          null,
                          true
                        )
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "tab-footer" },
            [
              _c("pager", {
                attrs: { results: _vm.results, pageSizes: _vm.pageSizes },
                on: { pagingUpdated: _vm.onPagingUpdated }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        !_vm.loaded
          ? _c("loading-overlay", {
              attrs: { loadingMessage: _vm.loadingMessage }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm._t("dialogs")
      ],
      2
    )
  };
  var __vue_staticRenderFns__$z = [];
  __vue_render__$z._withStripped = true;

    /* style */
    const __vue_inject_styles__$z = function (inject) {
      if (!inject) return
      inject("data-v-560600a7_0", { source: "\n.flex-rows[data-v-560600a7] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.tab-header[data-v-560600a7] {\n  flex: 0;\n}\n.tab-content[data-v-560600a7] {\n  flex: 1;\n  background-color: #eee;\n  overflow-y: auto;\n}\n.tab-footer[data-v-560600a7] {\n  flex: 0;\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/navigation/DataTableTab.vue"],"names":[],"mappings":";AA0EA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;AACA;AACA;EACA,OAAA;AACA;AACA;EACA,OAAA;EACA,sBAAA;EACA,gBAAA;AACA;AACA;EACA,OAAA;AACA","file":"DataTableTab.vue","sourcesContent":["<template>\n  <v-tab-item :key=\"tabkey\">\n    <div class=\"flex-rows\">\n      <div class=\"tab-header\">\n        <slot name=\"header\"/>\n      </div>\n      <div class=\"tab-content\">\n        <v-layout row wrap>\n          <v-flex xs12>\n            <v-data-table\n              :headers=\"headers\"\n              :items=\"matches\"\n              :hide-actions=\"true\"\n              :no-data-text=\"noDataText\"\n              :style=\"tableStyle\"\n            >\n              <template v-for=\"(_, slot) of $scopedSlots\" v-slot:[slot]=\"scope\">\n                <slot :name=\"slot\" v-bind=\"scope\"/>\n              </template>\n            </v-data-table>\n          </v-flex>\n        </v-layout>\n      </div>\n      <div class=\"tab-footer\">\n        <pager :results=\"results\" @pagingUpdated=\"onPagingUpdated\" :pageSizes=\"pageSizes\"/>\n      </div>\n    </div>\n    <loading-overlay v-if=\"!loaded\" :loadingMessage=\"loadingMessage\"/>\n    <slot name=\"dialogs\"></slot>\n  </v-tab-item>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport { Component, Prop } from \"sitewhere-ide-common\";\n\nimport Pager from \"../list/Pager.vue\";\nimport LoadingOverlay from \"../common/LoadingOverlay.vue\";\n\nimport { IPaging, IPageSizes, ITableHeaders } from \"sitewhere-ide-common\";\n\n@Component({\n  components: {\n    Pager,\n    LoadingOverlay\n  }\n})\nexport default class DataTableTab extends Vue {\n  @Prop() readonly tabkey!: string;\n  @Prop() readonly headers!: ITableHeaders;\n  @Prop() readonly pageSizes!: IPageSizes;\n  @Prop() readonly noDataText!: string;\n  @Prop() readonly loadingMessage!: string;\n  @Prop() readonly loaded!: boolean;\n  @Prop() readonly results!: { numResults: number; results: {}[] };\n\n  /** Get current matches */\n  get matches(): {}[] {\n    return this.results ? this.results.results : [];\n  }\n\n  /** Dims results when loading */\n  get tableStyle(): {} {\n    return { opacity: this.loaded ? 1.0 : 0.3 };\n  }\n\n  /** Update paging values and run query */\n  onPagingUpdated(paging: IPaging) {\n    this.$emit(\"pagingUpdated\", paging);\n  }\n}\n</script>\n\n<style scoped>\n.flex-rows {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.tab-header {\n  flex: 0;\n}\n.tab-content {\n  flex: 1;\n  background-color: #eee;\n  overflow-y: auto;\n}\n.tab-footer {\n  flex: 0;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$z = "data-v-560600a7";
    /* module identifier */
    const __vue_module_identifier__$z = undefined;
    /* functional template */
    const __vue_is_functional_template__$z = false;
    /* style inject SSR */
    

    
    var DataTableTab$1 = normalizeComponent_1(
      { render: __vue_render__$z, staticRenderFns: __vue_staticRenderFns__$z },
      __vue_inject_styles__$z,
      __vue_script__$z,
      __vue_scope_id__$z,
      __vue_is_functional_template__$z,
      __vue_module_identifier__$z,
      browser,
      undefined
    );

  var DetailPage = /** @class */ (function (_super) {
      __extends(DetailPage, _super);
      function DetailPage() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.active = null;
          return _this;
      }
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], DetailPage.prototype, "icon", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], DetailPage.prototype, "title", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], DetailPage.prototype, "loadingMessage", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Boolean)
      ], DetailPage.prototype, "loaded", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Object)
      ], DetailPage.prototype, "record", void 0);
      DetailPage = __decorate([
          sitewhereIdeCommon.Component({
              components: {
                  NavigationPage: NavigationPage$1
              }
          })
      ], DetailPage);
      return DetailPage;
  }(Vue));

  /* script */
  const __vue_script__$A = DetailPage;

  /* template */
  var __vue_render__$A = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "navigation-page",
      {
        attrs: {
          icon: _vm.icon,
          title: _vm.title,
          loadingMessage: _vm.loadingMessage,
          loaded: _vm.loaded
        }
      },
      [
        _c("template", { slot: "header" }, [_vm._t("header")], 2),
        _vm._v(" "),
        _vm.record
          ? _c("template", { slot: "content" }, [
              _c(
                "div",
                { staticClass: "flex-rows" },
                [
                  _c(
                    "v-tabs",
                    {
                      staticClass: "tabs-row",
                      model: {
                        value: _vm.active,
                        callback: function($$v) {
                          _vm.active = $$v;
                        },
                        expression: "active"
                      }
                    },
                    [_vm._t("tabs")],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tabs-items",
                    {
                      staticClass: "tab-items-row",
                      model: {
                        value: _vm.active,
                        callback: function($$v) {
                          _vm.active = $$v;
                        },
                        expression: "active"
                      }
                    },
                    [_vm._t("tab-items")],
                    2
                  )
                ],
                1
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("template", { slot: "actions" }, [_vm._t("actions")], 2),
        _vm._v(" "),
        _c("template", { slot: "dialogs" }, [_vm._t("dialogs")], 2)
      ],
      2
    )
  };
  var __vue_staticRenderFns__$A = [];
  __vue_render__$A._withStripped = true;

    /* style */
    const __vue_inject_styles__$A = function (inject) {
      if (!inject) return
      inject("data-v-e85a779e_0", { source: "\n.flex-rows[data-v-e85a779e] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.tabs-row[data-v-e85a779e] {\n  flex: 0;\n}\n.tab-items-row[data-v-e85a779e] {\n  flex: 1;\n  overflow-y: auto;\n}\n.tab-items-row[data-v-e85a779e] .v-window__container,\n.tab-items-row[data-v-e85a779e] .v-window-item {\n  height: 100%;\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/navigation/DetailPage.vue"],"names":[],"mappings":";AA+CA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;AACA;AACA;EACA,OAAA;AACA;AACA;EACA,OAAA;EACA,gBAAA;AACA;AACA;;EAEA,YAAA;AACA","file":"DetailPage.vue","sourcesContent":["<template>\n  <navigation-page :icon=\"icon\" :title=\"title\" :loadingMessage=\"loadingMessage\" :loaded=\"loaded\">\n    <template slot=\"header\">\n      <slot name=\"header\"/>\n    </template>\n    <template v-if=\"record\" slot=\"content\">\n      <div class=\"flex-rows\">\n        <v-tabs class=\"tabs-row\" v-model=\"active\">\n          <slot name=\"tabs\"/>\n        </v-tabs>\n        <v-tabs-items class=\"tab-items-row\" v-model=\"active\">\n          <slot name=\"tab-items\"/>\n        </v-tabs-items>\n      </div>\n    </template>\n    <template slot=\"actions\">\n      <slot name=\"actions\"/>\n    </template>\n    <template slot=\"dialogs\">\n      <slot name=\"dialogs\"/>\n    </template>\n  </navigation-page>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport { Component, Prop } from \"sitewhere-ide-common\";\n\nimport NavigationPage from \"../navigation/NavigationPage.vue\";\n\n@Component({\n  components: {\n    NavigationPage\n  }\n})\nexport default class DetailPage extends Vue {\n  @Prop() readonly icon!: string;\n  @Prop() readonly title!: string;\n  @Prop() readonly loadingMessage!: string;\n  @Prop() readonly loaded!: boolean;\n  @Prop() readonly record!: {};\n\n  active: string | null = null;\n}\n</script>\n\n<style scoped>\n.flex-rows {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.tabs-row {\n  flex: 0;\n}\n.tab-items-row {\n  flex: 1;\n  overflow-y: auto;\n}\n.tab-items-row >>> .v-window__container,\n.tab-items-row >>> .v-window-item {\n  height: 100%;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$A = "data-v-e85a779e";
    /* module identifier */
    const __vue_module_identifier__$A = undefined;
    /* functional template */
    const __vue_is_functional_template__$A = false;
    /* style inject SSR */
    

    
    var DetailPage$1 = normalizeComponent_1(
      { render: __vue_render__$A, staticRenderFns: __vue_staticRenderFns__$A },
      __vue_inject_styles__$A,
      __vue_script__$A,
      __vue_scope_id__$A,
      __vue_is_functional_template__$A,
      __vue_module_identifier__$A,
      browser,
      undefined
    );

  var NavigationHeaderLeft = /** @class */ (function (_super) {
      __extends(NavigationHeaderLeft, _super);
      function NavigationHeaderLeft() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      NavigationHeaderLeft = __decorate([
          sitewhereIdeCommon.Component({})
      ], NavigationHeaderLeft);
      return NavigationHeaderLeft;
  }(Vue));

  /* script */
  const __vue_script__$B = NavigationHeaderLeft;

  /* template */
  var __vue_render__$B = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-card",
      {
        staticStyle: { position: "relative", height: "100%" },
        attrs: { flat: "" }
      },
      [
        _vm._t("default"),
        _vm._v(" "),
        _c("div", { staticClass: "right-overlay" }, [_vm._t("right-overlay")], 2)
      ],
      2
    )
  };
  var __vue_staticRenderFns__$B = [];
  __vue_render__$B._withStripped = true;

    /* style */
    const __vue_inject_styles__$B = function (inject) {
      if (!inject) return
      inject("data-v-78a4ac21_0", { source: "\n.right-overlay[data-v-78a4ac21] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/navigation/NavigationHeaderLeft.vue"],"names":[],"mappings":";AAkBA;EACA,kBAAA;EACA,QAAA;EACA,MAAA;AACA","file":"NavigationHeaderLeft.vue","sourcesContent":["<template>\n  <v-card flat style=\"position: relative; height: 100%\">\n    <slot />\n    <div class=\"right-overlay\">\n      <slot name=\"right-overlay\" />\n    </div>\n  </v-card>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport { Component, Prop } from \"sitewhere-ide-common\";\n\n@Component({})\nexport default class NavigationHeaderLeft extends Vue {}\n</script>\n\n<style scoped>\n.right-overlay {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$B = "data-v-78a4ac21";
    /* module identifier */
    const __vue_module_identifier__$B = undefined;
    /* functional template */
    const __vue_is_functional_template__$B = false;
    /* style inject SSR */
    

    
    var NavigationHeaderLeft$1 = normalizeComponent_1(
      { render: __vue_render__$B, staticRenderFns: __vue_staticRenderFns__$B },
      __vue_inject_styles__$B,
      __vue_script__$B,
      __vue_scope_id__$B,
      __vue_is_functional_template__$B,
      __vue_module_identifier__$B,
      browser,
      undefined
    );

  var HeaderBrandingPanel = /** @class */ (function (_super) {
      __extends(HeaderBrandingPanel, _super);
      function HeaderBrandingPanel() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(HeaderBrandingPanel.prototype, "imageUrl", {
          /** Accessor for image URL */
          get: function () {
              return this.entity ? this.entity.imageUrl : null;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(HeaderBrandingPanel.prototype, "icon", {
          /** Accessor for icon */
          get: function () {
              return this.entity ? this.entity.icon : null;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(HeaderBrandingPanel.prototype, "imageStyle", {
          // Compute style of image.
          get: function () {
              return {
                  "background-color": "#fff",
                  "background-image": "url(" + this.entity.imageUrl + ")",
                  "background-size": "contain",
                  "background-repeat": "no-repeat",
                  "background-position": "50% 50%"
              };
          },
          enumerable: true,
          configurable: true
      });
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Object)
      ], HeaderBrandingPanel.prototype, "entity", void 0);
      HeaderBrandingPanel = __decorate([
          sitewhereIdeCommon.Component({
              components: {
                  NavigationHeaderLeft: NavigationHeaderLeft$1,
                  ImageZoomOnHover: ImageZoomOnHover$1
              }
          })
      ], HeaderBrandingPanel);
      return HeaderBrandingPanel;
  }(Vue));

  /* script */
  const __vue_script__$C = HeaderBrandingPanel;

  /* template */
  var __vue_render__$C = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "navigation-header-left",
      [
        _vm.imageUrl
          ? _c("image-zoom-on-hover", { attrs: { imageUrl: _vm.imageUrl } })
          : _vm.icon
          ? _c(
              "span",
              { staticClass: "header-icon" },
              [
                _c("font-awesome-icon", {
                  staticClass: "grey--text",
                  attrs: { icon: _vm.icon, size: "7x" }
                })
              ],
              1
            )
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$C = [];
  __vue_render__$C._withStripped = true;

    /* style */
    const __vue_inject_styles__$C = function (inject) {
      if (!inject) return
      inject("data-v-2e97c10a_0", { source: "\n.header-image[data-v-2e97c10a] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n}\n.header-icon[data-v-2e97c10a] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n  padding: 50px;\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/navigation/HeaderBrandingPanel.vue"],"names":[],"mappings":";AAmDA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,UAAA;AACA;AAEA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,UAAA;EACA,aAAA;AACA","file":"HeaderBrandingPanel.vue","sourcesContent":["<template>\n  <navigation-header-left>\n    <image-zoom-on-hover v-if=\"imageUrl\" :imageUrl=\"imageUrl\" />\n    <span v-else-if=\"icon\" class=\"header-icon\">\n      <font-awesome-icon class=\"grey--text\" :icon=\"icon\" size=\"7x\" />\n    </span>\n  </navigation-header-left>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport { Component, Prop } from \"sitewhere-ide-common\";\n\nimport NavigationHeaderLeft from \"./NavigationHeaderLeft.vue\";\nimport ImageZoomOnHover from \"../common/ImageZoomOnHover.vue\";\n\nimport { IBrandedEntity } from \"sitewhere-rest-api\";\n\n@Component({\n  components: {\n    NavigationHeaderLeft,\n    ImageZoomOnHover\n  }\n})\nexport default class HeaderBrandingPanel extends Vue {\n  @Prop() readonly entity!: IBrandedEntity;\n\n  /** Accessor for image URL */\n  get imageUrl() {\n    return this.entity ? this.entity.imageUrl : null;\n  }\n\n  /** Accessor for icon */\n  get icon() {\n    return this.entity ? this.entity.icon : null;\n  }\n\n  // Compute style of image.\n  get imageStyle() {\n    return {\n      \"background-color\": \"#fff\",\n      \"background-image\": \"url(\" + this.entity.imageUrl + \")\",\n      \"background-size\": \"contain\",\n      \"background-repeat\": \"no-repeat\",\n      \"background-position\": \"50% 50%\"\n    };\n  }\n}\n</script>\n\n<style scoped>\n.header-image {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n}\n\n.header-icon {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n  padding: 50px;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$C = "data-v-2e97c10a";
    /* module identifier */
    const __vue_module_identifier__$C = undefined;
    /* functional template */
    const __vue_is_functional_template__$C = false;
    /* style inject SSR */
    

    
    var HeaderBrandingPanel$1 = normalizeComponent_1(
      { render: __vue_render__$C, staticRenderFns: __vue_staticRenderFns__$C },
      __vue_inject_styles__$C,
      __vue_script__$C,
      __vue_scope_id__$C,
      __vue_is_functional_template__$C,
      __vue_module_identifier__$C,
      browser,
      undefined
    );

  var InAppFooter = /** @class */ (function (_super) {
      __extends(InAppFooter, _super);
      function InAppFooter() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      InAppFooter = __decorate([
          sitewhereIdeCommon.Component({})
      ], InAppFooter);
      return InAppFooter;
  }(Vue));

  /* script */
  const __vue_script__$D = InAppFooter;

  /* template */
  var __vue_render__$D = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-footer", { attrs: { app: "" } }, [
      _c("div", { staticClass: "footer-content" }, [_vm._t("default")], 2)
    ])
  };
  var __vue_staticRenderFns__$D = [];
  __vue_render__$D._withStripped = true;

    /* style */
    const __vue_inject_styles__$D = function (inject) {
      if (!inject) return
      inject("data-v-fdf636e0_0", { source: "\n.footer-content[data-v-fdf636e0] {\n  border-top: 1px solid #ddd;\n  width: 100%;\n  height: 100%;\n  color: #666;\n  padding: 7px;\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/navigation/InAppFooter.vue"],"names":[],"mappings":";AAiBA;EACA,0BAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AACA","file":"InAppFooter.vue","sourcesContent":["<template>\n  <v-footer app>\n    <div class=\"footer-content\">\n      <slot/>\n    </div>\n  </v-footer>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport { Component } from \"sitewhere-ide-common\";\n\n@Component({})\nexport default class InAppFooter extends Vue {}\n</script>\n\n<style scoped>\n.footer-content {\n  border-top: 1px solid #ddd;\n  width: 100%;\n  height: 100%;\n  color: #666;\n  padding: 7px;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$D = "data-v-fdf636e0";
    /* module identifier */
    const __vue_module_identifier__$D = undefined;
    /* functional template */
    const __vue_is_functional_template__$D = false;
    /* style inject SSR */
    

    
    var InAppFooter$1 = normalizeComponent_1(
      { render: __vue_render__$D, staticRenderFns: __vue_staticRenderFns__$D },
      __vue_inject_styles__$D,
      __vue_script__$D,
      __vue_scope_id__$D,
      __vue_is_functional_template__$D,
      __vue_module_identifier__$D,
      browser,
      undefined
    );

  var InAppSystemBar = /** @class */ (function (_super) {
      __extends(InAppSystemBar, _super);
      function InAppSystemBar() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.title = "Putang ina mo";
          return _this;
      }
      InAppSystemBar.prototype.openWebTools = function () {
          // Electron.remote.getCurrentWebContents().openDevTools();    
      };
      InAppSystemBar.prototype.minWindow = function () {
          // Electron.remote.getCurrentWindow().minimize();
      };
      InAppSystemBar.prototype.maxWindow = function () {
          // Electron.remote.getCurrentWindow().maximize();
      };
      InAppSystemBar.prototype.closeWindow = function () {
          // Electron.remote.getCurrentWindow().close();
          // Electron.app.quit();
      };
      InAppSystemBar = __decorate([
          sitewhereIdeCommon.Component({})
      ], InAppSystemBar);
      return InAppSystemBar;
  }(Vue));

  /* script */
  const __vue_script__$E = InAppSystemBar;

  /* template */
  var __vue_render__$E = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div")
  };
  var __vue_staticRenderFns__$E = [];
  __vue_render__$E._withStripped = true;

    /* style */
    const __vue_inject_styles__$E = function (inject) {
      if (!inject) return
      inject("data-v-182508dd_0", { source: "\n.title-bar-button[data-v-182508dd] {\n  -webkit-app-region: no-drag;\n}\n.system-bar-title[data-v-182508dd] {\n  color: #eee;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/navigation/InAppSystemBar.vue"],"names":[],"mappings":";AA+BA;EACA,2BAAA;AACA;AACA;EACA,WAAA;EACA,iBAAA;EACA,kBAAA;AACA","file":"InAppSystemBar.vue","sourcesContent":["<template>  \n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport { Component } from \"sitewhere-ide-common\";\n\n@Component({})\nexport default class InAppSystemBar extends Vue {\n  title: string = \"Putang ina mo\"\n\n  openWebTools() {\n    // Electron.remote.getCurrentWebContents().openDevTools();    \n  }\n\n  minWindow() {\n    // Electron.remote.getCurrentWindow().minimize();\n  }\n\n  maxWindow() {\n    // Electron.remote.getCurrentWindow().maximize();\n  }\n\n  closeWindow() {\n    // Electron.remote.getCurrentWindow().close();\n    // Electron.app.quit();\n  }\n}\n</script>\n\n<style scoped>\n.title-bar-button {\n  -webkit-app-region: no-drag;\n}\n.system-bar-title {\n  color: #eee;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$E = "data-v-182508dd";
    /* module identifier */
    const __vue_module_identifier__$E = undefined;
    /* functional template */
    const __vue_is_functional_template__$E = false;
    /* style inject SSR */
    

    
    var InAppSystemBar$1 = normalizeComponent_1(
      { render: __vue_render__$E, staticRenderFns: __vue_staticRenderFns__$E },
      __vue_inject_styles__$E,
      __vue_script__$E,
      __vue_scope_id__$E,
      __vue_is_functional_template__$E,
      __vue_module_identifier__$E,
      browser,
      undefined
    );

  var Navigation = /** @class */ (function (_super) {
      __extends(Navigation, _super);
      function Navigation() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      /** Called when a section is clicked */
      Navigation.prototype.onSectionClicked = function (section) {
          this.$emit("sectionSelected", section);
      };
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", Array)
      ], Navigation.prototype, "sections", void 0);
      Navigation = __decorate([
          sitewhereIdeCommon.Component({})
      ], Navigation);
      return Navigation;
  }(Vue));

  /* script */
  const __vue_script__$F = Navigation;

  /* template */
  var __vue_render__$F = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.sections
      ? _c(
          "v-list",
          { attrs: { dense: "" } },
          _vm._l(_vm.sections, function(section) {
            return _c(
              "v-list-group",
              {
                key: section.id,
                attrs: {
                  "prepend-icon": section.icon,
                  "append-icon": section.subsections
                    ? "$vuetify.icons.expand"
                    : "",
                  "no-action": ""
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "activator",
                      fn: function() {
                        return [
                          _c(
                            "v-list-tile",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.onSectionClicked(section)
                                }
                              }
                            },
                            [
                              _c(
                                "v-list-tile-content",
                                [
                                  _c("v-list-tile-title", [
                                    _vm._v(_vm._s(section.title))
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      },
                      proxy: true
                    }
                  ],
                  null,
                  true
                ),
                model: {
                  value: section.active,
                  callback: function($$v) {
                    _vm.$set(section, "active", $$v);
                  },
                  expression: "section.active"
                }
              },
              [
                _vm._v(" "),
                _vm._l(section.subsections, function(subsection) {
                  return _c(
                    "v-list-tile",
                    {
                      key: subsection.id,
                      on: {
                        click: function($event) {
                          return _vm.onSectionClicked(subsection)
                        }
                      }
                    },
                    [
                      _c(
                        "v-list-tile-content",
                        [
                          _c("v-list-tile-title", [
                            _vm._v(_vm._s(subsection.title))
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v(_vm._s(subsection.icon))])],
                        1
                      )
                    ],
                    1
                  )
                })
              ],
              2
            )
          }),
          1
        )
      : _vm._e()
  };
  var __vue_staticRenderFns__$F = [];
  __vue_render__$F._withStripped = true;

    /* style */
    const __vue_inject_styles__$F = function (inject) {
      if (!inject) return
      inject("data-v-68af000a_0", { source: "\n.list__tile__action[data-v-68af000a] {\n  min-width: 30px;\n}\n.list__tile__title[data-v-68af000a] {\n  font-size: 16px;\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/navigation/Navigation.vue"],"names":[],"mappings":";AAkDA;EACA,eAAA;AACA;AACA;EACA,eAAA;AACA","file":"Navigation.vue","sourcesContent":["<template>\n  <v-list v-if=\"sections\" dense>\n    <v-list-group\n      v-for=\"section in sections\"\n      :key=\"section.id\"\n      v-model=\"section.active\"\n      :prepend-icon=\"section.icon\"\n      :append-icon=\"section.subsections ? '$vuetify.icons.expand' : ''\"\n      no-action\n    >\n      <template v-slot:activator>\n        <v-list-tile @click=\"onSectionClicked(section)\">\n          <v-list-tile-content>\n            <v-list-tile-title>{{ section.title }}</v-list-tile-title>\n          </v-list-tile-content>\n        </v-list-tile>\n      </template>\n\n      <v-list-tile\n        @click=\"onSectionClicked(subsection)\"\n        v-for=\"subsection in section.subsections\"\n        :key=\"subsection.id\"\n      >\n        <v-list-tile-content>\n          <v-list-tile-title>{{ subsection.title }}</v-list-tile-title>\n        </v-list-tile-content>\n        <v-list-tile-action>\n          <v-icon>{{ subsection.icon }}</v-icon>\n        </v-list-tile-action>\n      </v-list-tile>\n    </v-list-group>\n  </v-list>\n</template>\n\n<script lang=\"ts\">\nimport { Component, Prop, INavigationSection } from \"sitewhere-ide-common\";\nimport Vue from \"vue\";\n\n@Component({})\nexport default class Navigation extends Vue {\n  @Prop() readonly sections!: INavigationSection[];\n\n  /** Called when a section is clicked */\n  onSectionClicked(section: INavigationSection) {\n    this.$emit(\"sectionSelected\", section);\n  }\n}\n</script>\n\n<style scoped>\n.list__tile__action {\n  min-width: 30px;\n}\n.list__tile__title {\n  font-size: 16px;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$F = "data-v-68af000a";
    /* module identifier */
    const __vue_module_identifier__$F = undefined;
    /* functional template */
    const __vue_is_functional_template__$F = false;
    /* style inject SSR */
    

    
    var Navigation$1 = normalizeComponent_1(
      { render: __vue_render__$F, staticRenderFns: __vue_staticRenderFns__$F },
      __vue_inject_styles__$F,
      __vue_script__$F,
      __vue_scope_id__$F,
      __vue_is_functional_template__$F,
      __vue_module_identifier__$F,
      browser,
      undefined
    );

  var NavigationActionButton = /** @class */ (function (_super) {
      __extends(NavigationActionButton, _super);
      function NavigationActionButton() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      NavigationActionButton.prototype.onAction = function () {
          this.$emit("action");
      };
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], NavigationActionButton.prototype, "icon", void 0);
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], NavigationActionButton.prototype, "tooltip", void 0);
      __decorate([
          sitewhereIdeCommon.Prop({ default: false }),
          __metadata("design:type", Boolean)
      ], NavigationActionButton.prototype, "material", void 0);
      NavigationActionButton = __decorate([
          sitewhereIdeCommon.Component({})
      ], NavigationActionButton);
      return NavigationActionButton;
  }(Vue));

  /* script */
  const __vue_script__$G = NavigationActionButton;

  /* template */
  var __vue_render__$G = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-tooltip",
      { attrs: { left: "" } },
      [
        _vm.material
          ? _c(
              "v-icon",
              {
                staticClass: "ma-0 ml-1 navbutton",
                attrs: { slot: "activator" },
                on: { click: _vm.onAction },
                slot: "activator"
              },
              [_vm._v(_vm._s(_vm.icon))]
            )
          : _c("font-awesome-icon", {
              staticClass: "ma-1 navbutton",
              attrs: { slot: "activator", icon: _vm.icon },
              on: { click: _vm.onAction },
              slot: "activator"
            }),
        _vm._v(" "),
        _c("span", [_vm._v(_vm._s(_vm.tooltip))])
      ],
      1
    )
  };
  var __vue_staticRenderFns__$G = [];
  __vue_render__$G._withStripped = true;

    /* style */
    const __vue_inject_styles__$G = function (inject) {
      if (!inject) return
      inject("data-v-0c500069_0", { source: "\n.navbutton[data-v-0c500069] {\n  font-size: 22px;\n  padding-left: 6px;\n  color: #666;\n  vertical-align: middle;\n}\n.navbutton[data-v-0c500069]:hover {\n  color: #999;\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/navigation/NavigationActionButton.vue"],"names":[],"mappings":";AAoCA;EACA,eAAA;EACA,iBAAA;EACA,WAAA;EACA,sBAAA;AACA;AACA;EACA,WAAA;AACA","file":"NavigationActionButton.vue","sourcesContent":["<template>\n  <v-tooltip left>\n    <v-icon\n      v-if=\"material\"\n      class=\"ma-0 ml-1 navbutton\"\n      @click=\"onAction\"\n      slot=\"activator\"\n    >{{ icon }}</v-icon>\n    <font-awesome-icon\n      v-else\n      class=\"ma-1 navbutton\"\n      :icon=\"icon\"\n      @click=\"onAction\"\n      slot=\"activator\"\n    />\n    <span>{{ tooltip }}</span>\n  </v-tooltip>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport { Component, Prop } from \"sitewhere-ide-common\";\n\n@Component({})\nexport default class NavigationActionButton extends Vue {\n  @Prop() readonly icon!: string;\n  @Prop() readonly tooltip!: string;\n  @Prop({ default: false }) readonly material!: boolean;\n\n  onAction() {\n    this.$emit(\"action\");\n  }\n}\n</script>\n\n<style scoped>\n.navbutton {\n  font-size: 22px;\n  padding-left: 6px;\n  color: #666;\n  vertical-align: middle;\n}\n.navbutton:hover {\n  color: #999;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$G = "data-v-0c500069";
    /* module identifier */
    const __vue_module_identifier__$G = undefined;
    /* functional template */
    const __vue_is_functional_template__$G = false;
    /* style inject SSR */
    

    
    var NavigationActionButton$1 = normalizeComponent_1(
      { render: __vue_render__$G, staticRenderFns: __vue_staticRenderFns__$G },
      __vue_inject_styles__$G,
      __vue_script__$G,
      __vue_scope_id__$G,
      __vue_is_functional_template__$G,
      __vue_module_identifier__$G,
      browser,
      undefined
    );

  var NavigationHeaderFields = /** @class */ (function (_super) {
      __extends(NavigationHeaderFields, _super);
      function NavigationHeaderFields() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      NavigationHeaderFields = __decorate([
          sitewhereIdeCommon.Component({})
      ], NavigationHeaderFields);
      return NavigationHeaderFields;
  }(Vue));

  /* script */
  const __vue_script__$H = NavigationHeaderFields;

  /* template */
  var __vue_render__$H = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-card",
      { staticClass: "mt-2", attrs: { flat: "" } },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$H = [];
  __vue_render__$H._withStripped = true;

    /* style */
    const __vue_inject_styles__$H = undefined;
    /* scoped */
    const __vue_scope_id__$H = undefined;
    /* module identifier */
    const __vue_module_identifier__$H = undefined;
    /* functional template */
    const __vue_is_functional_template__$H = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var NavigationHeaderFields$1 = normalizeComponent_1(
      { render: __vue_render__$H, staticRenderFns: __vue_staticRenderFns__$H },
      __vue_inject_styles__$H,
      __vue_script__$H,
      __vue_scope_id__$H,
      __vue_is_functional_template__$H,
      __vue_module_identifier__$H,
      undefined,
      undefined
    );

  var NavigationHeaderPanel = /** @class */ (function (_super) {
      __extends(NavigationHeaderPanel, _super);
      function NavigationHeaderPanel() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(NavigationHeaderPanel.prototype, "panelStyle", {
          // Style for top-level panel.
          get: function () {
              return {
                  "min-height": this.height
              };
          },
          enumerable: true,
          configurable: true
      });
      __decorate([
          sitewhereIdeCommon.Prop(),
          __metadata("design:type", String)
      ], NavigationHeaderPanel.prototype, "height", void 0);
      NavigationHeaderPanel = __decorate([
          sitewhereIdeCommon.Component({})
      ], NavigationHeaderPanel);
      return NavigationHeaderPanel;
  }(Vue));

  /* script */
  const __vue_script__$I = NavigationHeaderPanel;

  /* template */
  var __vue_render__$I = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-card",
      {
        staticClass: "white mt-2 mb-3 pr-3 pl-3 header-panel",
        style: _vm.panelStyle,
        attrs: { flat: "" }
      },
      [
        _c("v-card-text", [
          _c("span", { staticClass: "header-left" }, [_vm._t("left")], 2),
          _vm._v(" "),
          _c("span", { staticClass: "header-content" }, [_vm._t("content")], 2),
          _vm._v(" "),
          _c("span", { staticClass: "header-right" }, [_vm._t("right")], 2),
          _vm._v(" "),
          _c("span", { staticClass: "options-menu" }, [_vm._t("options")], 2)
        ])
      ],
      1
    )
  };
  var __vue_staticRenderFns__$I = [];
  __vue_render__$I._withStripped = true;

    /* style */
    const __vue_inject_styles__$I = function (inject) {
      if (!inject) return
      inject("data-v-2c5400af_0", { source: "\n.header-panel[data-v-2c5400af] {\n  min-width: 920px;\n  overflow-y: hidden;\n}\n.header-left[data-v-2c5400af] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  bottom: 10px;\n  width: 230px;\n  height: 100%;\n}\n.header-right[data-v-2c5400af] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  bottom: 10px;\n  width: 230px;\n  height: 100%;\n}\n.header-content[data-v-2c5400af] {\n  position: absolute;\n  top: 10px;\n  left: 250px;\n  right: 250px;\n  height: 100%;\n}\n.options-menu[data-v-2c5400af] {\n  position: absolute;\n  top: 10px;\n  right: 190px;\n}\n", map: {"version":3,"sources":["/workspace/sitewhere-ide-components/src/components/navigation/NavigationHeaderPanel.vue"],"names":[],"mappings":";AAqCA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;AACA;AAEA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;AACA;AAEA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;AACA;AAEA;EACA,kBAAA;EACA,SAAA;EACA,YAAA;AACA","file":"NavigationHeaderPanel.vue","sourcesContent":["<template>\n  <v-card flat :style=\"panelStyle\" class=\"white mt-2 mb-3 pr-3 pl-3 header-panel\">\n    <v-card-text>\n      <span class=\"header-left\">\n        <slot name=\"left\" />\n      </span>\n      <span class=\"header-content\">\n        <slot name=\"content\" />\n      </span>\n      <span class=\"header-right\">\n        <slot name=\"right\" />\n      </span>\n      <span class=\"options-menu\">\n        <slot name=\"options\" />\n      </span>\n    </v-card-text>\n  </v-card>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport { Component, Prop } from \"sitewhere-ide-common\";\n\n@Component({})\nexport default class NavigationHeaderPanel extends Vue {\n  @Prop() readonly height!: string;\n\n  // Style for top-level panel.\n  get panelStyle() {\n    return {\n      \"min-height\": this.height\n    };\n  }\n}\n</script>\n\n<style scoped>\n.header-panel {\n  min-width: 920px;\n  overflow-y: hidden;\n}\n\n.header-left {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  bottom: 10px;\n  width: 230px;\n  height: 100%;\n}\n\n.header-right {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  bottom: 10px;\n  width: 230px;\n  height: 100%;\n}\n\n.header-content {\n  position: absolute;\n  top: 10px;\n  left: 250px;\n  right: 250px;\n  height: 100%;\n}\n\n.options-menu {\n  position: absolute;\n  top: 10px;\n  right: 190px;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$I = "data-v-2c5400af";
    /* module identifier */
    const __vue_module_identifier__$I = undefined;
    /* functional template */
    const __vue_is_functional_template__$I = false;
    /* style inject SSR */
    

    
    var NavigationHeaderPanel$1 = normalizeComponent_1(
      { render: __vue_render__$I, staticRenderFns: __vue_staticRenderFns__$I },
      __vue_inject_styles__$I,
      __vue_script__$I,
      __vue_scope_id__$I,
      __vue_is_functional_template__$I,
      __vue_module_identifier__$I,
      browser,
      undefined
    );

  // Common components.

  // Process as Vue plugin.
  function SiteWhere(Vue) {
    // Register common components.
    Vue.component("sw-clipboard-copy-field", ClipboardCopyField);
    Vue.component("sw-color-input-field", ColorInputField$1);
    Vue.component("sw-color-picker", ColorPicker$1);
    Vue.component("sw-condensed-toolbar", CondensedToolbar$1);
    Vue.component("sw-date-time-picker", DateTimePicker$1);
    Vue.component("sw-error-banner", ErrorBanner);
    Vue.component("sw-fab", FloatingActionButton);
    Vue.component("sw-header-field", HeaderField);
    Vue.component("sw-icon-selector", IconSelector);
    Vue.component("sw-image-zoom-on-hover", ImageZoomOnHover$1);
    Vue.component("sw-linked-header-field", LinkedHeaderField);
    Vue.component("sw-loading-overlay", LoadingOverlay$1);

    // Register common form components.
    Vue.component("sw-dialog-form", DialogForm$1);
    Vue.component("sw-form-date-time-picker", FormDateTimePicker$1);
    Vue.component("sw-form-select", FormSelect$1);
    Vue.component("sw-form-select-condensed", FormSelectCondensed);
    Vue.component("sw-form-text", FormText$1);
    Vue.component("sw-form-text-area", FormTextArea);

    // Register dialog components.
    Vue.component("sw-base-dialog", BaseDialog$1);
    Vue.component("sw-confirm-dialog", ConfirmDialog$1);
    Vue.component("sw-delete-dialog", DeleteDialog$1);
    Vue.component("sw-metadata-panel", MetadataPanel$1);

    // Register list components.
    Vue.component("sw-list-entry", ListEntry$1);
    Vue.component("sw-list-layout", ListLayout$1);
    Vue.component("sw-list-page", ListPage$1);
    Vue.component("sw-list-tab", ListTab$1);
    Vue.component("sw-pager", Pager$2);

    // Register login components.
    Vue.component("sw-remotes-dialog", RemotesDialog$1);
    Vue.component("sw-remotes-dropdown", RemotesDropdown$1);

    // Register navigation components.
    Vue.component("sw-content-tab", ContentTab$1);
    Vue.component("sw-data-entry-panel", DataEntryPanel$1);
    Vue.component("sw-data-table-tab", DataTableTab$1);
    Vue.component("sw-detail-page", DetailPage$1);
    Vue.component("sw-header-branding-panel", HeaderBrandingPanel$1);
    Vue.component("sw-in-app-footer", InAppFooter$1);
    Vue.component("sw-in-app-system-bar", InAppSystemBar$1);
    Vue.component("sw-navigation", Navigation$1);
    Vue.component("sw-navigation-action-button", NavigationActionButton$1);
    Vue.component("sw-navigation-header-fields", NavigationHeaderFields$1);
    Vue.component("sw-navigation-header-left", NavigationHeaderLeft$1);
    Vue.component("sw-navigation-header-panel", NavigationHeaderPanel$1);
    Vue.component("sw-navigation-page", NavigationPage$1);
  }

  exports.BaseDialog = BaseDialog$1;
  exports.ClipboardCopyField = ClipboardCopyField;
  exports.ColorInputField = ColorInputField$1;
  exports.ColorPicker = ColorPicker$1;
  exports.CondensedToolbar = CondensedToolbar$1;
  exports.ConfirmDialog = ConfirmDialog$1;
  exports.ContentTab = ContentTab$1;
  exports.DataEntryPanel = DataEntryPanel$1;
  exports.DataTableTab = DataTableTab$1;
  exports.DateTimePicker = DateTimePicker$1;
  exports.DeleteDialog = DeleteDialog$1;
  exports.DetailPage = DetailPage$1;
  exports.DialogForm = DialogForm$1;
  exports.ErrorBanner = ErrorBanner;
  exports.FloatingActionButton = FloatingActionButton;
  exports.FormDateTimePicker = FormDateTimePicker$1;
  exports.FormSelect = FormSelect$1;
  exports.FormSelectCondensed = FormSelectCondensed;
  exports.FormText = FormText$1;
  exports.FormTextArea = FormTextArea;
  exports.HeaderBrandingPanel = HeaderBrandingPanel$1;
  exports.HeaderField = HeaderField;
  exports.IconSelector = IconSelector;
  exports.ImageZoomOnHover = ImageZoomOnHover$1;
  exports.InAppFooter = InAppFooter$1;
  exports.InAppSystemBar = InAppSystemBar$1;
  exports.LinkedHeaderField = LinkedHeaderField;
  exports.ListEntry = ListEntry$1;
  exports.ListLayout = ListLayout$1;
  exports.ListPage = ListPage$1;
  exports.ListTab = ListTab$1;
  exports.LoadingOverlay = LoadingOverlay$1;
  exports.MetadataPanel = MetadataPanel$1;
  exports.Navigation = Navigation$1;
  exports.NavigationActionButton = NavigationActionButton$1;
  exports.NavigationHeaderFields = NavigationHeaderFields$1;
  exports.NavigationHeaderLeft = NavigationHeaderLeft$1;
  exports.NavigationHeaderPanel = NavigationHeaderPanel$1;
  exports.NavigationPage = NavigationPage$1;
  exports.Pager = Pager$2;
  exports.RemotesDialog = RemotesDialog$1;
  exports.RemotesDropdown = RemotesDropdown$1;
  exports.default = SiteWhere;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
