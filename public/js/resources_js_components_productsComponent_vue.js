"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_productsComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/productsComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/productsComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      search: '',
      products: {},
      addproductform: {},
      EditProductform: {},
      ShowProductform: {},
      dialogetable: true,
      dialogeditProductVisible: false,
      addproductTopharmacyform: {},
      dialogaddproductVisible: false,
      dialogaddproductTopharmacyVisible: false,
      errors: {},
      showTable: true,
      pharmacies: {},
      allproducts: {}
    };
  },
  methods: {
    getproducts: function getproducts() {
      var _this = this;

      this.dialogetable = false;
      axios.get('/api/apiproducts').then(function (res) {
        _this.products = res.data;
      })["catch"](function (err) {
        _this.errors = err.response.data.errors;
      });
    },
    addproducts: function addproducts() {
      var _this2 = this;

      var addproductform = this.addproductform;
      axios.post('/api/apiproducts', {
        addproductform: addproductform
      }).then(function (res) {
        _this2.dialogaddproductVisible = false;

        _this2.getproducts();

        _this2.$notify({
          title: 'Success',
          message: 'Added Done',
          type: 'success'
        });

        _this2.addproductform = {};
      })["catch"](function (err) {
        _this2.errors = err.response.data.errors;
      });
    },
    addproductTopharmacyFun: function addproductTopharmacyFun() {
      var _this3 = this;

      var addproductTopharmacyform = this.addproductTopharmacyform;
      axios.post('/api/addproductTopharmacy', {
        addproductTopharmacyform: addproductTopharmacyform
      }).then(function (res) {
        _this3.dialogaddproductTopharmacyVisible = false;

        _this3.getproducts();

        _this3.$notify({
          title: 'Success',
          message: 'Added Done',
          type: 'success'
        });

        _this3.addproductTopharmacyform = {};
      })["catch"](function (err) {
        _this3.errors = err.response.data.errors;
      });
    },
    editProduct: function editProduct(EditProductform) {
      var _this4 = this;

      axios.put("/api/apiproducts/".concat(EditProductform.id), {
        EditProductform: EditProductform
      }).then(function (res) {
        _this4.dialogeditProductVisible = false;

        _this4.getproducts();

        _this4.$notify({
          title: 'Success',
          message: 'Updated Done',
          type: 'success'
        });

        _this4.EditProductform = {};
      })["catch"](function (err) {
        _this4.errors = err.response.data.errors;
      });
    },
    // deleteProduct(id){
    //         this.dialogetable = false
    //     axios.delete(`/api/apiproducts/${id}`).then(res => { 
    //             this.getproducts();
    //          this.$notify({
    //                       title: 'Success',
    //                       message: 'Deleted Done',
    //                       type: 'success'
    //                       });
    //     }).catch(err =>{this.errors = err.response.data.errors; });
    // },
    deleteProduct: function deleteProduct(row) {
      var _this5 = this;

      console.log(row.id);
      this.$confirm('Are you Sure you want Deleted this product', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: ''
      }).then(function () {
        axios["delete"]("/api/apiproducts/".concat(row.id)).then(function (res) {
          _this5.getproducts();

          _this5.$notify({
            title: 'Success',
            message: 'Deleted Done',
            type: 'success'
          });
        })["catch"](function (err) {
          _this5.errors = err.response.data.errors;
        });
      })["catch"](function () {
        _this5.$message({
          type: 'info',
          message: 'Delete canceled'
        });
      });
    },
    HandeleditProduct: function HandeleditProduct(index, row) {
      this.dialogeditProductVisible = true;
      this.EditProductform = row;
    },
    getResults: function getResults() {
      var _this6 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('/api/apiproducts?page=' + page).then(function (response) {
        _this6.products = response.data; //  console.log('dd',response.data);
      });
    },
    handleShowproduct: function handleShowproduct(row) {
      this.showTable = false; // console.log(index, row);

      this.ShowProductform = row; //  this.addLeactureform  = row;

      console.log(this.Showleactureform);
    },
    handleClose: function handleClose(done) {
      this.$confirm('Are you sure to close this dialog?').then(function (_) {
        done();
      })["catch"](function (_) {});
    },
    getpharmacies: function getpharmacies() {
      var _this7 = this;

      axios.get('/api/getpharmacies').then(function (response) {
        _this7.pharmacies = response.data;
        console.log('dd', _this7.pharmacies);
      });
    },
    getallproducts: function getallproducts() {
      var _this8 = this;

      axios.get('/api/getallproducts').then(function (response) {
        _this8.allproducts = response.data;
        console.log('dd', _this8.allproducts);
      });
    }
  },
  created: function created() {
    this.getproducts();
    this.getallproducts();
    this.getpharmacies();
  }
});

/***/ }),

/***/ "./resources/js/components/productsComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/productsComponent.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _productsComponent_vue_vue_type_template_id_1c28d684___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productsComponent.vue?vue&type=template&id=1c28d684& */ "./resources/js/components/productsComponent.vue?vue&type=template&id=1c28d684&");
/* harmony import */ var _productsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/productsComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _productsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _productsComponent_vue_vue_type_template_id_1c28d684___WEBPACK_IMPORTED_MODULE_0__.render,
  _productsComponent_vue_vue_type_template_id_1c28d684___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/productsComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/productsComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/productsComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./productsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/productsComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/productsComponent.vue?vue&type=template&id=1c28d684&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/productsComponent.vue?vue&type=template&id=1c28d684& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productsComponent_vue_vue_type_template_id_1c28d684___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productsComponent_vue_vue_type_template_id_1c28d684___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productsComponent_vue_vue_type_template_id_1c28d684___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./productsComponent.vue?vue&type=template&id=1c28d684& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/productsComponent.vue?vue&type=template&id=1c28d684&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/productsComponent.vue?vue&type=template&id=1c28d684&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/productsComponent.vue?vue&type=template&id=1c28d684& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card card-purple" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("div", { staticClass: "row" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-1" },
                    [
                      _c("el-button", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.showTable == false,
                            expression: "showTable == false",
                          },
                        ],
                        staticClass: "text-sm ",
                        attrs: {
                          type: "primary",
                          size: "small",
                          title: "Back",
                          icon: "el-icon-back",
                          plain: "",
                        },
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            _vm.showTable = true
                          },
                        },
                      }),
                    ],
                    1
                  ),
                ]),
              ]),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.showTable,
                      expression: "showTable",
                    },
                  ],
                  staticClass: "card-body",
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-10 mb-4" },
                      [
                        _c(
                          "el-button",
                          {
                            staticClass: "mt-2 ",
                            attrs: {
                              type: "primary",
                              round: "",
                              icon: "el-icon-plus",
                            },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                _vm.dialogaddproductVisible = true
                              },
                            },
                          },
                          [_vm._v(" Add Product")]
                        ),
                        _vm._v(" "),
                        _c(
                          "el-button",
                          {
                            staticClass: "mt-2 ",
                            attrs: {
                              type: "primary",
                              round: "",
                              icon: "el-icon-plus",
                            },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                _vm.dialogaddproductTopharmacyVisible = true
                              },
                            },
                          },
                          [_vm._v(" Add product to pharmacy")]
                        ),
                        _vm._v(" "),
                        _c(
                          "el-dialog",
                          {
                            attrs: {
                              visible: _vm.dialogaddproductVisible,
                              width: "40%",
                              "before-close": _vm.handleClose,
                            },
                            on: {
                              "update:visible": function ($event) {
                                _vm.dialogaddproductVisible = $event
                              },
                            },
                          },
                          [
                            _c("h4", [_vm._v(" Add New Product")]),
                            _vm._v(" "),
                            _c(
                              "el-form",
                              [
                                _c(
                                  "el-form-item",
                                  { staticClass: "mb-4" },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "demonstration block " },
                                      [_vm._v("title")]
                                    ),
                                    _vm._v(" "),
                                    _c("el-input", {
                                      attrs: {
                                        placeholder: "title",
                                        clearable: "",
                                        required: "",
                                      },
                                      model: {
                                        value: _vm.addproductform.title,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.addproductform,
                                            "title",
                                            $$v
                                          )
                                        },
                                        expression: "addproductform.title",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _vm.errors["addproductform.title"]
                                      ? _c(
                                          "span",
                                          { staticClass: "text-danger" },
                                          [
                                            _vm._v(
                                              "\n                                                " +
                                                _vm._s(
                                                  _vm.errors[
                                                    "addproductform.title"
                                                  ][0]
                                                ) +
                                                "\n                                            "
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("hr"),
                                _vm._v(" "),
                                _c(
                                  "el-form-item",
                                  { staticClass: "mb-4" },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "demonstration block " },
                                      [_vm._v("Description")]
                                    ),
                                    _vm._v(" "),
                                    _c("el-input", {
                                      attrs: {
                                        type: "textarea",
                                        placeholder: "Description",
                                        clearable: "",
                                        required: "",
                                      },
                                      model: {
                                        value: _vm.addproductform.description,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.addproductform,
                                            "description",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "addproductform.description",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _vm.errors["addproductform.description"]
                                      ? _c(
                                          "span",
                                          { staticClass: "text-danger" },
                                          [
                                            _vm._v(
                                              "\n                                                " +
                                                _vm._s(
                                                  _vm.errors[
                                                    "addproductform.description"
                                                  ][0]
                                                ) +
                                                "\n                                            "
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-primary   col-md-12  d-flex justify-content-center",
                                on: {
                                  click: function ($event) {
                                    $event.preventDefault()
                                    return _vm.addproducts()
                                  },
                                },
                              },
                              [_vm._v(" Submit")]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "el-dialog",
                          {
                            attrs: {
                              visible: _vm.dialogaddproductTopharmacyVisible,
                              width: "40%",
                              "before-close": _vm.handleClose,
                            },
                            on: {
                              "update:visible": function ($event) {
                                _vm.dialogaddproductTopharmacyVisible = $event
                              },
                            },
                          },
                          [
                            _c("h4", [_vm._v(" Add New Product")]),
                            _vm._v(" "),
                            _c(
                              "el-form",
                              [
                                _c("el-form-item", { staticClass: "mb-4" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-md-12 " },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "demonstration  block" },
                                        [_vm._v("products")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "el-select",
                                        {
                                          staticClass: "d-flex",
                                          attrs: { placeholder: "pharmacies" },
                                          model: {
                                            value:
                                              _vm.addproductTopharmacyform
                                                .products_id,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.addproductTopharmacyform,
                                                "products_id",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "addproductTopharmacyform.products_id",
                                          },
                                        },
                                        _vm._l(
                                          _vm.allproducts,
                                          function (product) {
                                            return _c("el-option", {
                                              key: product.id,
                                              attrs: {
                                                label: product.title,
                                                value: product.id,
                                                clearable: "",
                                              },
                                            })
                                          }
                                        ),
                                        1
                                      ),
                                      _vm._v(" "),
                                      _vm.errors[
                                        "addproductTopharmacyform.products_id"
                                      ]
                                        ? _c(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [
                                              _c(
                                                "span",
                                                { staticClass: "block" },
                                                [
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(
                                                        _vm.errors[
                                                          "addproductTopharmacyform.products_id"
                                                        ][0]
                                                      )
                                                  ),
                                                ]
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("el-form-item", { staticClass: "mb-4" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-md-12 " },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "demonstration  block" },
                                        [_vm._v("pharmacies")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "el-select",
                                        {
                                          staticClass: "d-flex",
                                          attrs: { placeholder: "pharmacies" },
                                          model: {
                                            value:
                                              _vm.addproductTopharmacyform
                                                .pharmacie_id,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.addproductTopharmacyform,
                                                "pharmacie_id",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "addproductTopharmacyform.pharmacie_id",
                                          },
                                        },
                                        _vm._l(
                                          _vm.pharmacies,
                                          function (pharmacy) {
                                            return _c("el-option", {
                                              key: pharmacy.id,
                                              attrs: {
                                                label: pharmacy.name,
                                                value: pharmacy.id,
                                                clearable: "",
                                              },
                                            })
                                          }
                                        ),
                                        1
                                      ),
                                      _vm._v(" "),
                                      _vm.errors[
                                        "addproductTopharmacyform.pharmacie_id"
                                      ]
                                        ? _c(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [
                                              _c(
                                                "span",
                                                { staticClass: "block" },
                                                [
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(
                                                        _vm.errors[
                                                          "addproductTopharmacyform.pharmacie_id"
                                                        ][0]
                                                      )
                                                  ),
                                                ]
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "el-form-item",
                                  { staticClass: "mb-4" },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "demonstration block " },
                                      [_vm._v("price")]
                                    ),
                                    _vm._v(" "),
                                    _c("el-input", {
                                      attrs: {
                                        type: "number",
                                        placeholder: "price",
                                        clearable: "",
                                      },
                                      model: {
                                        value:
                                          _vm.addproductTopharmacyform.price,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.addproductTopharmacyform,
                                            "price",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "addproductTopharmacyform.price",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _vm.errors["addproductTopharmacyform.price"]
                                      ? _c(
                                          "span",
                                          { staticClass: "text-danger" },
                                          [
                                            _vm._v(
                                              "\n                                                " +
                                                _vm._s(
                                                  _vm.errors[
                                                    "addproductTopharmacyform.price"
                                                  ][0]
                                                ) +
                                                "\n                                            "
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-primary   col-md-12  d-flex justify-content-center",
                                on: {
                                  click: function ($event) {
                                    $event.preventDefault()
                                    return _vm.addproductTopharmacyFun()
                                  },
                                },
                              },
                              [_vm._v(" Submit")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "el-table",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: _vm.dialogetable,
                          expression: "dialogetable",
                        },
                      ],
                      staticStyle: { width: "100%" },
                      attrs: {
                        data: _vm.products.data.filter(function (data) {
                          return (
                            !_vm.search ||
                            data.title
                              .toLowerCase()
                              .includes(_vm.search.toLowerCase())
                          )
                        }),
                      },
                    },
                    [
                      _c("el-table-column", {
                        attrs: {
                          prop: "id",
                          align: "center",
                          label: "ID",
                          width: "80",
                        },
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          prop: "title",
                          align: "center",
                          label: "Title",
                        },
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          prop: "description",
                          align: "center",
                          label: "Description",
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (scope) {
                              return [
                                _c("span", [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        scope.row.description.substring(0, 25) +
                                          ".."
                                      )
                                  ),
                                ]),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: { label: "Created at", align: "center" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (scope) {
                              return [
                                _c("span", [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm._f("timeFormat")(
                                          scope.row.created_at
                                        )
                                      ) +
                                      " "
                                  ),
                                ]),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: { align: "center" },
                        scopedSlots: _vm._u([
                          {
                            key: "header",
                            fn: function (scope) {
                              return [
                                _c("el-input", {
                                  attrs: {
                                    title: scope.$index,
                                    size: "mini",
                                    placeholder: "Title Search",
                                  },
                                  model: {
                                    value: _vm.search,
                                    callback: function ($$v) {
                                      _vm.search = $$v
                                    },
                                    expression: "search",
                                  },
                                }),
                              ]
                            },
                          },
                          {
                            key: "default",
                            fn: function (scope) {
                              return [
                                _c(
                                  "div",
                                  { staticClass: "block" },
                                  [
                                    _c(
                                      "el-button",
                                      {
                                        staticClass: "p-0 m-1",
                                        staticStyle: { border: "none" },
                                        attrs: { size: "small", type: "light" },
                                        on: {
                                          click: function ($event) {
                                            $event.preventDefault()
                                            return _vm.handleShowproduct(
                                              scope.row
                                            )
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fas fa-eye text-lg",
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "el-button",
                                      {
                                        staticClass: "p-0 m-1",
                                        staticStyle: { border: "none" },
                                        attrs: { size: "small", type: "light" },
                                        on: {
                                          click: function ($event) {
                                            $event.preventDefault()
                                            return _vm.HandeleditProduct(
                                              scope.$index,
                                              scope.row
                                            )
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "el-icon-edit text-lg",
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "el-button",
                                      {
                                        staticClass: "p-0 m-1",
                                        staticStyle: { border: "none" },
                                        attrs: { size: "small", type: "light" },
                                        on: {
                                          click: function ($event) {
                                            return _vm.deleteProduct(scope.row)
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "el-icon-delete text-lg",
                                          staticStyle: { color: "red" },
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "el-dialog",
                                      {
                                        attrs: {
                                          visible: _vm.dialogeditProductVisible,
                                          width: "40%",
                                        },
                                        on: {
                                          "update:visible": function ($event) {
                                            _vm.dialogeditProductVisible =
                                              $event
                                          },
                                        },
                                      },
                                      [
                                        _c("h4", [_vm._v(" Edite Product")]),
                                        _vm._v(" "),
                                        _c(
                                          "el-form",
                                          [
                                            _c(
                                              "el-form-item",
                                              { staticClass: "mb-4" },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "demonstration block ",
                                                  },
                                                  [_vm._v("title")]
                                                ),
                                                _vm._v(" "),
                                                _c("el-input", {
                                                  attrs: {
                                                    placeholder: "title",
                                                    clearable: "",
                                                    required: "",
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.EditProductform.title,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.EditProductform,
                                                        "title",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "EditProductform.title",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _vm.errors[
                                                  "EditProductform.title"
                                                ]
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "text-danger",
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                " +
                                                            _vm._s(
                                                              _vm.errors[
                                                                "EditProductform.title"
                                                              ][0]
                                                            ) +
                                                            "\n                                            "
                                                        ),
                                                      ]
                                                    )
                                                  : _vm._e(),
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("hr"),
                                            _vm._v(" "),
                                            _c(
                                              "el-form-item",
                                              { staticClass: "mb-4" },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "demonstration block ",
                                                  },
                                                  [_vm._v("Description")]
                                                ),
                                                _vm._v(" "),
                                                _c("el-input", {
                                                  attrs: {
                                                    type: "textarea",
                                                    placeholder: "Description",
                                                    clearable: "",
                                                    required: "",
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.EditProductform
                                                        .description,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.EditProductform,
                                                        "description",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "EditProductform.description",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _vm.errors[
                                                  "EditProductform.description"
                                                ]
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "text-danger",
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                " +
                                                            _vm._s(
                                                              _vm.errors[
                                                                "EditProductform.description"
                                                              ][0]
                                                            ) +
                                                            "\n                                            "
                                                        ),
                                                      ]
                                                    )
                                                  : _vm._e(),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-primary  mt-4 col-md-12  d-flex justify-content-center",
                                            on: {
                                              click: function ($event) {
                                                $event.preventDefault()
                                                return _vm.editProduct(
                                                  _vm.EditProductform
                                                )
                                              },
                                            },
                                          },
                                          [_vm._v(" Submit")]
                                        ),
                                        _vm._v(" "),
                                        _c("span", {
                                          staticClass: "dialog-footer",
                                          attrs: { slot: "footer" },
                                          slot: "footer",
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "mb-4 mt-4 text-xs" },
                    [
                      _c(
                        "pagination",
                        {
                          attrs: {
                            data: _vm.products,
                            limit: 1,
                            "show-disabled": true,
                          },
                          on: { "pagination-change-page": _vm.getResults },
                        },
                        [
                          _c(
                            "span",
                            { attrs: { slot: "prev-nav" }, slot: "prev-nav" },
                            [_vm._v("< Previous ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            { attrs: { slot: "next-nav" }, slot: "next-nav" },
                            [_vm._v(" Next  >")]
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.showTable == false,
                      expression: "showTable == false",
                    },
                  ],
                  staticClass: "card-body",
                },
                [
                  _c("div", { staticClass: "row mt-4" }, [
                    _c("div", { staticClass: "col-md-2 ml-2" }, [
                      _vm._v(
                        "\n                                    ID\n                                "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9 ml-4" }, [
                      _c("span", [
                        _vm._v(
                          "\n                                            " +
                            _vm._s(_vm.ShowProductform.id) +
                            "\n                                    "
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row mt-4" }, [
                    _c("div", { staticClass: "col-md-2 ml-2" }, [
                      _vm._v(
                        "\n                                   Title\n                                "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9 ml-4" }, [
                      _c("span", [
                        _vm._v(
                          "\n                                            " +
                            _vm._s(_vm.ShowProductform.title) +
                            "\n                                    "
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row mt-4" }, [
                    _c("div", { staticClass: "col-md-2 ml-2" }, [
                      _vm._v(
                        "\n                                    Description\n                                "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 ml-4" }, [
                      _c("span", [
                        _vm._v(
                          "\n                                            " +
                            _vm._s(_vm.ShowProductform.description) +
                            "\n                                    "
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row mt-4" }, [
                    _c("div", { staticClass: "col-md-2 ml-2" }, [
                      _vm._v(
                        "\n                                    pharmacies\n                                "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9 ml-4" }, [
                      _c(
                        "span",
                        [
                          _c(
                            "el-table",
                            {
                              directives: [
                                {
                                  name: "loading",
                                  rawName: "v-loading",
                                  value: _vm.dialogetable,
                                  expression: "dialogetable",
                                },
                              ],
                              staticStyle: { width: "100%" },
                              attrs: {
                                data: _vm.ShowProductform.pharmacie,
                                border: "",
                              },
                            },
                            [
                              _c("el-table-column", {
                                attrs: {
                                  prop: "id",
                                  align: "center",
                                  label: "ID",
                                },
                              }),
                              _vm._v(" "),
                              _c("el-table-column", {
                                attrs: {
                                  prop: "name",
                                  align: "center",
                                  label: "Name",
                                },
                              }),
                              _vm._v(" "),
                              _c("el-table-column", {
                                attrs: {
                                  prop: "location",
                                  align: "center",
                                  label: "location",
                                },
                              }),
                              _vm._v(" "),
                              _c("el-table-column", {
                                attrs: {
                                  prop: "location",
                                  align: "center",
                                  label: "price",
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function (scope) {
                                      return [
                                        _vm._v(
                                          "\n                                                        " +
                                            _vm._s(scope.row.pivot.price) +
                                            " $\n                                                    "
                                        ),
                                      ]
                                    },
                                  },
                                ]),
                              }),
                              _vm._v(" "),
                              _c("el-table-column", {
                                attrs: { label: "Created at", align: "center" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function (scope) {
                                      return [
                                        _c("span", [
                                          _vm._v(
                                            " " +
                                              _vm._s(
                                                _vm._f("timeFormat")(
                                                  scope.row.created_at
                                                )
                                              ) +
                                              " "
                                          ),
                                        ]),
                                      ]
                                    },
                                  },
                                ]),
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row mt-4" }, [
                    _c("div", { staticClass: "col-md-2 ml-2" }, [
                      _vm._v(
                        "\n                                    Created at\n                                "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9 ml-4" }, [
                      _c("span", [
                        _vm._v(
                          "\n                                            " +
                            _vm._s(
                              _vm._f("timeFormat")(
                                _vm.ShowProductform.created_at
                              )
                            ) +
                            "\n                                    "
                        ),
                      ]),
                    ]),
                  ]),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-10" }, [
      _c("h3", { staticClass: "card-title-rtl" }, [_vm._v("Product")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-default mt-4  ml-4  not-print",
            attrs: { onclick: "{window.print()}" },
          },
          [
            _c("i", {
              staticClass: "fa fa-print",
              attrs: { "aria-hidden": "true" },
            }),
            _vm._v(" Print "),
          ]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
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


/***/ })

}]);