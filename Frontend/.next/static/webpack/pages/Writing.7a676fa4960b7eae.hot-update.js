"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Writing",{

/***/ "./public/components/controlbarcomps/Textediting.js":
/*!**********************************************************!*\
  !*** ./public/components/controlbarcomps/Textediting.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../styles/writing.module.css */ \"./styles/writing.module.css\");\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions/Editing */ \"./store/actions/Editing.js\");\n/* harmony import */ var _icons_TextT_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/TextT.png */ \"./public/icons/TextT.png\");\n/* harmony import */ var _icons_Quote_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/Quote.png */ \"./public/icons/Quote.png\");\n/* harmony import */ var _icons_Heading_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/Heading.png */ \"./public/icons/Heading.png\");\n/* harmony import */ var _icons_Bold_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/Bold.png */ \"./public/icons/Bold.png\");\n/* harmony import */ var _icons_List_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons/List.png */ \"./public/icons/List.png\");\n/* harmony import */ var _icons_InsertArrow_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../icons/InsertArrow.png */ \"./public/icons/InsertArrow.png\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nclass Textediting extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    componentDidMount() {\n        let a = document.getElementsByClassName(\"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_11___default().TexTstyleOption)));\n        console.log(a.length);\n        console.log(a);\n        for(let i = 0; i < a.length; i++){\n            a[i].addEventListener(\"click\", ()=>{\n                this.SetFont(a[i].children[0].id);\n            });\n        }\n        let b = document.getElementsByClassName(\"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_11___default().InsertArrowBox)))[0];\n        for(let j = 0; j < b.children.length; j++){\n            b.children[j].addEventListener(\"click\", ()=>{\n                this.SetInsert(b.children[j].id);\n            });\n        }\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_11___default().ParentTextEditing),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_11___default().TextEditing),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_11___default().TexTstyleOption),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                    className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_11___default().IconImageTexting),\n                                    src: _icons_Quote_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    height: 500,\n                                    width: 30,\n                                    id: \"quotes\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                                lineNumber: 70,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_11___default().TexTstyleOption),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                    className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_11___default().IconImageTexting),\n                                    src: _icons_List_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                    height: 500,\n                                    width: 30,\n                                    id: \"list\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                                lineNumber: 74,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_11___default().TexTstyleOption),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                    className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_11___default().IconImageTexting),\n                                    src: _icons_Bold_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                    height: 500,\n                                    width: 30,\n                                    id: \"subHeading\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                                lineNumber: 78,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_11___default().TexTstyleOption),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                    className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_11___default().IconImageTexting),\n                                    src: _icons_Heading_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                    height: 500,\n                                    width: 30,\n                                    id: \"article-heading\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                                lineNumber: 83,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                        lineNumber: 61,\n                        columnNumber: 22\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_11___default().InsertArrowBox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                src: _icons_InsertArrow_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                height: 500,\n                                width: 30,\n                                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_11___default().InvertedInsertArrow),\n                                alt: \"\",\n                                id: \"Down\"\n                            }, void 0, false, {\n                                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                                lineNumber: 94,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                src: _icons_InsertArrow_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                height: 500,\n                                width: 30,\n                                alt: \"\",\n                                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_11___default().StraightInsertArrow),\n                                id: \"Up\"\n                            }, void 0, false, {\n                                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                                lineNumber: 97,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                        lineNumber: 93,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this)\n        }, void 0, false);\n    }\n    constructor(props){\n        super(props);\n        this.SetFont = (font)=>{\n            this.props.Fontset(font);\n        };\n        this.SetInsert = (insert)=>{\n            this.props.Insert(insert);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        loading: state.auth.loading,\n        error: state.auth.error,\n        // isAuthenticated: state.token,\n        isAuthenticated: state.token !== null,\n        Font: state.Edit.Font,\n        Insert: state.Edit.Insert\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Fontset: (Font)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_2__.FontSuccess(Font)),\n        Insert: (Insert)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_2__.INSERTSUCCESS(Insert))\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_9__.connect)(mapStateToProps, mapDispatchToProps)(Textediting));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvY29tcG9uZW50cy9jb250cm9sYmFyY29tcHMvVGV4dGVkaXRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2M7QUFDRztBQUNiO0FBQ0o7QUFDSTtBQUNOO0FBQ0E7QUFDYztBQUNmO0FBQ1I7QUFHOUIsTUFBTVksb0JBQW9CWCw0Q0FBU0E7SUFVL0JZLG9CQUFtQjtRQUNmLElBQUlDLElBQUdDLFNBQVNDLHVCQUF1QixHQUEyQixPQUF4QmQsb0ZBQXNCZTtRQUVoRUMsUUFBUUMsSUFBSUwsRUFBRU07UUFDZEYsUUFBUUMsSUFBSUw7UUFDWixJQUFJLElBQUlPLElBQUUsR0FBRUEsSUFBRVAsRUFBRU0sUUFBT0MsSUFBSTtZQUN2QlAsQ0FBQyxDQUFDTyxFQUFFLENBQUNDLGlCQUFpQixTQUFRO2dCQUd0QixJQUFJLENBQUNDLFFBQVFULENBQUMsQ0FBQ08sRUFBRSxDQUFDRyxRQUFRLENBQUMsRUFBRSxDQUFDQztZQVF0QztRQUNKO1FBRUEsSUFBSUMsSUFBR1gsU0FBU0MsdUJBQXVCLEdBQXlCLE9BQXRCZCxtRkFBcUJ5QixFQUFHLENBQUMsRUFBRTtRQUNyRSxJQUFJLElBQUlDLElBQUUsR0FBR0EsSUFBRUYsRUFBRUYsU0FBU0osUUFBT1EsSUFBSTtZQUNqQ0YsRUFBRUYsUUFBUSxDQUFDSSxFQUFFLENBQUNOLGlCQUFpQixTQUFRO2dCQUNuQyxJQUFJLENBQUNPLFVBQVVILEVBQUVGLFFBQVEsQ0FBQ0ksRUFBRSxDQUFDSDtZQUNqQztRQUVKO0lBRUo7SUFDQUssU0FBUztRQUVMLHFCQUNJO3NCQUNBLDRFQUFDQztnQkFBSUMsV0FBVzlCLHNGQUF3QitCOztrQ0FJL0IsOERBQUNGO3dCQUFJQyxXQUFXOUIsZ0ZBQWtCZ0M7OzBDQVMvQiw4REFBQ0g7Z0NBQUlDLFdBQVc5QixvRkFBc0JlOzBDQUN0Qyw0RUFBQ04sb0RBQUtBO29DQUFDcUIsV0FBVzlCLHFGQUF1QmlDO29DQUFFQyxLQUFLL0Isd0RBQUtBO29DQUFFZ0MsUUFBUTtvQ0FBS0MsT0FBTztvQ0FBSWIsSUFBRztvQ0FBU2MsS0FBSTs7Ozs7Ozs7Ozs7MENBRy9GLDhEQUFDUjtnQ0FBSUMsV0FBVzlCLG9GQUFzQmU7MENBQ3RDLDRFQUFDTixvREFBS0E7b0NBQUNxQixXQUFXOUIscUZBQXVCaUM7b0NBQUVDLEtBQUs1Qix1REFBSUE7b0NBQUU2QixRQUFRO29DQUFLQyxPQUFPO29DQUFJYixJQUFHO29DQUFPYyxLQUFJOzs7Ozs7Ozs7OzswQ0FHNUYsOERBQUNSO2dDQUFJQyxXQUFXOUIsb0ZBQXNCZTswQ0FDdEMsNEVBQUNOLG9EQUFLQTtvQ0FBQ3FCLFdBQVc5QixxRkFBdUJpQztvQ0FBRUMsS0FBSzdCLHVEQUFJQTtvQ0FBRThCLFFBQVE7b0NBQUtDLE9BQU87b0NBQUliLElBQUc7b0NBQWFjLEtBQUk7Ozs7Ozs7Ozs7OzBDQUlsRyw4REFBQ1I7Z0NBQUlDLFdBQVc5QixvRkFBc0JlOzBDQUN0Qyw0RUFBQ04sb0RBQUtBO29DQUFDcUIsV0FBVzlCLHFGQUF1QmlDO29DQUFFQyxLQUFLOUIsMERBQU9BO29DQUFFK0IsUUFBUTtvQ0FBS0MsT0FBTztvQ0FBSWIsSUFBRztvQ0FBa0JjLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQVM5Ryw4REFBQ1I7d0JBQUlDLFdBQVc5QixtRkFBcUJ5Qjs7MENBQ2pDLDhEQUFDaEIsb0RBQUtBO2dDQUFDeUIsS0FBSzNCLDhEQUFXQTtnQ0FBRTRCLFFBQVE7Z0NBQUtDLE9BQU87Z0NBQUlOLFdBQVc5Qix3RkFBMEJzQztnQ0FBRUQsS0FBSTtnQ0FBR2QsSUFBRzs7Ozs7OzBDQUdsRyw4REFBQ2Qsb0RBQUtBO2dDQUFDeUIsS0FBSzNCLDhEQUFXQTtnQ0FBRTRCLFFBQVE7Z0NBQUtDLE9BQU87Z0NBQUtDLEtBQUk7Z0NBQUdQLFdBQVc5Qix3RkFBMEJ1QztnQ0FBQ2hCLElBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3QnRIO0lBMUdBaUIsWUFBWUMsS0FBSyxDQUFDO1FBQ2QsS0FBSyxDQUFDQTtRQUNOLElBQUksQ0FBQ3BCLFVBQVEsQ0FBQ3FCO1lBQ1YsSUFBSSxDQUFDRCxNQUFNRSxRQUFRRDtRQUN2QjtRQUNBLElBQUksQ0FBQ2YsWUFBVSxDQUFDaUI7WUFDWixJQUFJLENBQUNILE1BQU1JLE9BQU9EO1FBQ3RCO0lBQ0o7QUFtR0o7QUFLQSxNQUFNRSxrQkFBa0IsQ0FBQ0M7SUFDckIsT0FBTztRQUdIQyxTQUFTRCxNQUFNRSxLQUFLRDtRQUNwQkUsT0FBT0gsTUFBTUUsS0FBS0M7UUFFbEIsZ0NBQWdDO1FBQ2hDQyxpQkFBaUJKLE1BQU1LLFVBQVU7UUFDakNDLE1BQUtOLE1BQU1PLEtBQUtEO1FBQ2hCUixRQUFPRSxNQUFNTyxLQUFLVDtJQUd0QjtBQUNKO0FBRUEsTUFBTVUscUJBQXFCLENBQUNDO0lBQ3hCLE9BQU87UUFDSGIsU0FBUyxDQUFDVSxPQUFTRyxTQUFTdkQsK0RBQW1Cd0QsQ0FBQ0o7UUFDaERSLFFBQVEsQ0FBQ0EsU0FBV1csU0FBU3ZELGlFQUFxQnlELENBQUNiO0lBRXZEO0FBQ0o7QUFJQSwrREFBaUJyQyxvREFBT0EsQ0FBQ3NDLGlCQUFpQlMsb0JBQW9CN0MsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wdWJsaWMvY29tcG9uZW50cy9jb250cm9sYmFyY29tcHMvVGV4dGVkaXRpbmcuanM/ZWI2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvd3JpdGluZy5tb2R1bGUuY3NzJ1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL0VkaXRpbmcnO1xuaW1wb3J0IFRleHRJbWFnZSBmcm9tICcuLi8uLi9pY29ucy9UZXh0VC5wbmcnXG5pbXBvcnQgUXVvdGUgZnJvbSAnLi4vLi4vaWNvbnMvUXVvdGUucG5nJ1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnLi4vLi4vaWNvbnMvSGVhZGluZy5wbmcnXG5pbXBvcnQgQm9sZCBmcm9tICcuLi8uLi9pY29ucy9Cb2xkLnBuZydcbmltcG9ydCBMaXN0IGZyb20gJy4uLy4uL2ljb25zL0xpc3QucG5nJ1xuaW1wb3J0IEluc2VydEFycm93IGZyb20gJy4uLy4uL2ljb25zL0luc2VydEFycm93LnBuZydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuXG5jbGFzcyBUZXh0ZWRpdGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuU2V0Rm9udD0oZm9udCk9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuRm9udHNldChmb250KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuU2V0SW5zZXJ0PShpbnNlcnQpPT57XG4gICAgICAgICAgICB0aGlzLnByb3BzLkluc2VydChpbnNlcnQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgbGV0IGEgPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c3R5bGVzLlRleFRzdHlsZU9wdGlvbiB9YClcblxuICAgICAgICBjb25zb2xlLmxvZyhhLmxlbmd0aClcbiAgICAgICAgY29uc29sZS5sb2coYSlcbiAgICAgICAgZm9yKGxldCBpPTA7aTxhLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgYVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXRGb250KGFbaV0uY2hpbGRyZW5bMF0uaWQpXG5cblxuICAgICAgICAgICAgICAgIFxuXG4gICAgIFxuIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBiID1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3N0eWxlcy5JbnNlcnRBcnJvd0JveH1gKVswXVxuICAgICAgICBmb3IobGV0IGo9MDsgajxiLmNoaWxkcmVuLmxlbmd0aDtqKyspe1xuICAgICAgICAgICAgYi5jaGlsZHJlbltqXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuU2V0SW5zZXJ0KGIuY2hpbGRyZW5bal0uaWQpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH1cblxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUGFyZW50VGV4dEVkaXRpbmd9PlxuXG5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGV4dEVkaXRpbmd9PlxuXG4gICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXhUc3R5bGVPcHRpb24gfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLkljb25JbWFnZVRleHRpbmd9IHNyYz17VGV4dEltYWdlfSBoZWlnaHQ9ezUwMH0gd2lkdGg9ezMwfSBpZD1cInN1YkhlYWRpbmdcIiBhbHQ9XCJcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRleFRzdHlsZU9wdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMuSWNvbkltYWdlVGV4dGluZ30gc3JjPXtRdW90ZX0gaGVpZ2h0PXs1MDB9IHdpZHRoPXszMH0gaWQ9XCJxdW90ZXNcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGV4VHN0eWxlT3B0aW9uIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMuSWNvbkltYWdlVGV4dGluZ30gc3JjPXtMaXN0fSBoZWlnaHQ9ezUwMH0gd2lkdGg9ezMwfSBpZD1cImxpc3RcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGV4VHN0eWxlT3B0aW9uIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMuSWNvbkltYWdlVGV4dGluZ30gc3JjPXtCb2xkfSBoZWlnaHQ9ezUwMH0gd2lkdGg9ezMwfSBpZD1cInN1YkhlYWRpbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXhUc3R5bGVPcHRpb24gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5JY29uSW1hZ2VUZXh0aW5nfSBzcmM9e0hlYWRpbmd9IGhlaWdodD17NTAwfSB3aWR0aD17MzB9IGlkPVwiYXJ0aWNsZS1oZWFkaW5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5zZXJ0QXJyb3dCb3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17SW5zZXJ0QXJyb3d9IGhlaWdodD17NTAwfSB3aWR0aD17MzB9IGNsYXNzTmFtZT17c3R5bGVzLkludmVydGVkSW5zZXJ0QXJyb3d9IGFsdD1cIlwiIGlkPVwiRG93blwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17SW5zZXJ0QXJyb3d9IGhlaWdodD17NTAwfSB3aWR0aD17MzB9ICBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5TdHJhaWdodEluc2VydEFycm93fWlkPSdVcCcvPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRWxhYm9yYXRlZFRleHRCYXJzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRWxhYm9yYXRlZFRleHRCYXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRWxhYm9yYXRlZFRleHRCYXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRWxhYm9yYXRlZFRleHRCYXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1b3RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG5cbiAgICAgICAgXG4gICAgICAgIGxvYWRpbmc6IHN0YXRlLmF1dGgubG9hZGluZyxcbiAgICAgICAgZXJyb3I6IHN0YXRlLmF1dGguZXJyb3IsXG5cbiAgICAgICAgLy8gaXNBdXRoZW50aWNhdGVkOiBzdGF0ZS50b2tlbixcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBzdGF0ZS50b2tlbiAhPT0gbnVsbCxcbiAgICAgICAgRm9udDpzdGF0ZS5FZGl0LkZvbnQsXG4gICAgICAgIEluc2VydDpzdGF0ZS5FZGl0Lkluc2VydFxuXG5cbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIEZvbnRzZXQ6IChGb250KSA9PiBkaXNwYXRjaChhY3Rpb25zLkZvbnRTdWNjZXNzKEZvbnQpKSxcbiAgICAgICAgSW5zZXJ0OiAoSW5zZXJ0KSA9PiBkaXNwYXRjaChhY3Rpb25zLklOU0VSVFNVQ0NFU1MoSW5zZXJ0KSlcblxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0ICAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGV4dGVkaXRpbmcpKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInN0eWxlcyIsImFjdGlvbnMiLCJUZXh0SW1hZ2UiLCJRdW90ZSIsIkhlYWRpbmciLCJCb2xkIiwiTGlzdCIsIkluc2VydEFycm93IiwiY29ubmVjdCIsIkltYWdlIiwiVGV4dGVkaXRpbmciLCJjb21wb25lbnREaWRNb3VudCIsImEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJUZXhUc3R5bGVPcHRpb24iLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJTZXRGb250IiwiY2hpbGRyZW4iLCJpZCIsImIiLCJJbnNlcnRBcnJvd0JveCIsImoiLCJTZXRJbnNlcnQiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJQYXJlbnRUZXh0RWRpdGluZyIsIlRleHRFZGl0aW5nIiwiSWNvbkltYWdlVGV4dGluZyIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiYWx0IiwiSW52ZXJ0ZWRJbnNlcnRBcnJvdyIsIlN0cmFpZ2h0SW5zZXJ0QXJyb3ciLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZm9udCIsIkZvbnRzZXQiLCJpbnNlcnQiLCJJbnNlcnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImxvYWRpbmciLCJhdXRoIiwiZXJyb3IiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ0b2tlbiIsIkZvbnQiLCJFZGl0IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJGb250U3VjY2VzcyIsIklOU0VSVFNVQ0NFU1MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/components/controlbarcomps/Textediting.js\n"));

/***/ })

});