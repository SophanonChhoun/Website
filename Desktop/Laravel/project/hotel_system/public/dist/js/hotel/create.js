/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SingleImageUploader.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SingleImageUploader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SingleImageUploader",
  data: function data() {
    return {};
  },
  props: {
    image: {},
    value: {},
    size: {},
    pw: {},
    ph: {},
    defaultImage: {},
    isDisable: {
      type: Boolean,
      "default": false
    }
  },
  methods: {
    uploadImage: function uploadImage(event) {
      var defaultSize = $(event.target).data('size');
      var that = this;
      var input = event.target;
      var width = $(input).data('width');
      var height = $(input).data('height');

      if (input.files && input.files[0]) {
        var size = input.files[0].size / 1024 / 1024;

        if (size < defaultSize) {
          var img = new Image();

          img.onload = function (e) {
            if (this.width != width || this.height != height) {
              $.dialog({
                title: 'Image Size',
                content: 'Image size must be ' + width + 'x' + height
              });
            } else {
              var reader = new FileReader();

              reader.onload = function (e) {
                that.$emit('input', e.target.result);
              };

              reader.readAsDataURL(input.files[0]);
            }
          };

          img.src = URL.createObjectURL(input.files[0]);
        } else {
          $.dialog({
            title: this.label + ' Size',
            content: "".concat(this.label, " size must be less than  ").concat(defaultSize, "  MB")
          });
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SingleImageUploader.vue?vue&type=template&id=cbb09234&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SingleImageUploader.vue?vue&type=template&id=cbb09234&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("img", {
      attrs: {
        id: "thumb-image",
        width: _vm.pw,
        height: _vm.ph,
        src: _vm.value ? _vm.value : _vm.image ? _vm.image : _vm.defaultImage,
        alt: ""
      }
    }),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("label", { staticClass: "mediasize" }, [
      _vm._v(
        "\n        " +
          _vm._s(_vm.$t("general.maximum_size", { size: _vm.size })) +
          "\n        "
      ),
      _c("br"),
      _vm._v(
        "\n        " +
          _vm._s(
            _vm.$t("general.dimensions_size", { width: _vm.pw, height: _vm.ph })
          ) +
          "\n    "
      )
    ]),
    _vm._v(" "),
    !_vm.isDisable ? _c("br") : _vm._e(),
    _vm._v(" "),
    !_vm.isDisable
      ? _c("div", { staticClass: "btn default btn-file" }, [
          _c("span", [
            _vm._v(" " + _vm._s(_vm.$t("general.click_to_choose")) + " ")
          ]),
          _vm._v(" "),
          _c("input", {
            attrs: {
              type: "file",
              name: "image",
              "data-size": _vm.size,
              "data-width": _vm.pw,
              "data-height": _vm.ph,
              accept: ".jpg,.png"
            },
            on: { change: _vm.uploadImage }
          })
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/SingleImageUploader.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/SingleImageUploader.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleImageUploader_vue_vue_type_template_id_cbb09234_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleImageUploader.vue?vue&type=template&id=cbb09234&scoped=true& */ "./resources/js/components/SingleImageUploader.vue?vue&type=template&id=cbb09234&scoped=true&");
/* harmony import */ var _SingleImageUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleImageUploader.vue?vue&type=script&lang=js& */ "./resources/js/components/SingleImageUploader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SingleImageUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleImageUploader_vue_vue_type_template_id_cbb09234_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleImageUploader_vue_vue_type_template_id_cbb09234_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cbb09234",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SingleImageUploader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SingleImageUploader.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/SingleImageUploader.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleImageUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SingleImageUploader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SingleImageUploader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleImageUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SingleImageUploader.vue?vue&type=template&id=cbb09234&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/SingleImageUploader.vue?vue&type=template&id=cbb09234&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleImageUploader_vue_vue_type_template_id_cbb09234_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SingleImageUploader.vue?vue&type=template&id=cbb09234&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SingleImageUploader.vue?vue&type=template&id=cbb09234&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleImageUploader_vue_vue_type_template_id_cbb09234_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleImageUploader_vue_vue_type_template_id_cbb09234_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/hotel/create.js":
/*!**************************************!*\
  !*** ./resources/js/hotel/create.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SingleImageUploader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/SingleImageUploader */ "./resources/js/components/SingleImageUploader.vue");

new Vue({
  el: '#createHotel',
  components: {
    SingleImageUploader: _components_SingleImageUploader__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: {
    data: {
      name: '',
      street_address: '',
      country: '',
      city: '',
      zip: '',
      is_enable: '',
      image: ''
    },
    is_submit: false,
    error: '',
    error_image: '',
    image: ''
  },
  mounted: function mounted() {},
  methods: {
    submit: function submit() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        _this.is_submit = true;
        var save = true;

        if (!_this.data.image) {
          _this.error_image = "The Image field is required";
          save = false;
        }

        if (result && save) {
          axios.post('/admin/hotel/create', _this.data).then(function (response) {
            if (response.data.success) {
              window.location.href = '/admin/hotel/list';
            } else {
              console.log(response.data.message);
              _this.error = response.data.message;
            }
          });
        } else {
          //set Window location to top
          window.scrollTo(0, 0);
        }
      });
    },
    uploadImage: function uploadImage(event) {
      var input = event.target;

      if (input.files && input.files[0]) {
        var img = new Image();

        img.onload = function () {
          var _this2 = this;

          var reader = new FileReader();

          reader.onload = function (e) {
            _this2.image = e.target.result;
          };

          reader.readAsDataURL(input.files[0]);
        };
      }
    },
    uploadAddingImage: function uploadAddingImage(event) {
      var _this3 = this;

      var image = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(image);

      reader.onload = function (event) {
        Vue.set(_this3.data, 'image', event.target.result);
      };
    }
  }
});

/***/ }),

/***/ 2:
/*!********************************************!*\
  !*** multi ./resources/js/hotel/create.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\NIPTICT\Term 4\Web Application\hotel_management\Desktop\Laravel\project\hotel_system\resources\js\hotel\create.js */"./resources/js/hotel/create.js");


/***/ })

/******/ });