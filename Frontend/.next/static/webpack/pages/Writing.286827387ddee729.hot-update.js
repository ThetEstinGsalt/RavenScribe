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

/***/ "./public/components/Controlbar.js":
/*!*****************************************!*\
  !*** ./public/components/Controlbar.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Controlbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_grabber_arrow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/grabber_arrow.png */ \"./public/icons/grabber_arrow.png?15b0\");\n/* harmony import */ var _icons_wiki_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/wiki.png */ \"./public/icons/wiki.png\");\n/* harmony import */ var _icons_Gif_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/Gif.png */ \"./public/icons/Gif.png\");\n/* harmony import */ var _icons_image_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/image.png */ \"./public/icons/image.png\");\n/* harmony import */ var _icons_Text_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/Text.png */ \"./public/icons/Text.png\");\n/* harmony import */ var _icons_link_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/link.png */ \"./public/icons/link.png\");\n/* harmony import */ var _controlbarcomps_Wiki__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controlbarcomps/Wiki */ \"./public/components/controlbarcomps/Wiki.js\");\n/* harmony import */ var _controlbarcomps_GifFetching__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controlbarcomps/GifFetching */ \"./public/components/controlbarcomps/GifFetching.js\");\n/* harmony import */ var _controlbarcomps_ImagesFet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controlbarcomps/ImagesFet */ \"./public/components/controlbarcomps/ImagesFet.js\");\n/* harmony import */ var _controlbarcomps_Textediting__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./controlbarcomps/Textediting */ \"./public/components/controlbarcomps/Textediting.js\");\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../styles/writing.module.css */ \"./styles/writing.module.css\");\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass Controlbar extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    // state={\n    //     'Wiki':false,\n    //     'Image':false,\n    //     'Gif':false,\n    // }\n    componentDidMount() {\n        let Gif = document.getElementById(\"Gif\");\n        let Image = document.getElementById(\"Image\");\n        let Wiki = document.getElementById(\"Wiki\");\n        Gif.addEventListener(\"click\", ()=>{\n            this.setState({\n                Wiki: false,\n                Image: false,\n                Gif: true\n            });\n        });\n        Image.addEventListener(\"click\", ()=>{\n            this.setState({\n                Wiki: false,\n                Image: true,\n                Gif: false\n            });\n        });\n        Wiki.addEventListener(\"click\", ()=>{\n            this.setState({\n                Wiki: true,\n                Image: false,\n                Gif: false\n            });\n        });\n    // let looplist=[Gif,Image,Wiki]\n    // let looplistind=['Gif','Image','Wiki']\n    // for(let i=0;i<looplist.length;i++){\n    //     looplist[i].addEventListener('click',()=>{\n    //         for(let j=0;j<looplist.length;j++){\n    //             this.state.looplistind[j]=false\n    //         }\n    //         this.state.looplistind[i]=true\n    //     })\n    // }\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_13___default().controldbar),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grabber\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"img_box\",\n                            onClick: this.downbar_activation,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                src: _icons_grabber_arrow_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                alt: \"\",\n                                width: 30,\n                                height: 500\n                            }, void 0, false, {\n                                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                                lineNumber: 90,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                            lineNumber: 88,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                        lineNumber: 87,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_13___default().ResponsiveHolder),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_13___default().holderControl),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_13___default().Writing_Options_PC)) + \" \" + \"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_13___default().Writing_Options_PC_firstChild)),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                            src: _icons_Text_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                            alt: \"\",\n                                            width: 30,\n                                            height: 500,\n                                            className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_13___default().optionImg)\n                                        }, void 0, false, {\n                                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_13___default().Writing_Options),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                                src: _icons_image_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                                alt: \"\",\n                                                width: 30,\n                                                height: 500,\n                                                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_13___default().optionImg)\n                                            }, void 0, false, {\n                                                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                                                lineNumber: 110,\n                                                columnNumber: 25\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                                src: _icons_Text_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                                alt: \"\",\n                                                width: 30,\n                                                height: 500,\n                                                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_13___default().optionImg)\n                                            }, void 0, false, {\n                                                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                                                lineNumber: 111,\n                                                columnNumber: 25\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                                src: _icons_wiki_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                                alt: \"\",\n                                                width: 30,\n                                                height: 500,\n                                                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_13___default().optionImg)\n                                            }, void 0, false, {\n                                                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                                                lineNumber: 112,\n                                                columnNumber: 25\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                                src: _icons_wiki_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                                alt: \"\",\n                                                width: 30,\n                                                height: 500,\n                                                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_13___default().optionImg)\n                                            }, void 0, false, {\n                                                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                                                lineNumber: 113,\n                                                columnNumber: 25\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                                src: _icons_link_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                                alt: \"\",\n                                                width: 30,\n                                                height: 500,\n                                                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_13___default().optionImg)\n                                            }, void 0, false, {\n                                                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                                                lineNumber: 115,\n                                                columnNumber: 25\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                                        lineNumber: 108,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_controlbarcomps_Textediting__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                                        lineNumber: 121,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                                lineNumber: 99,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_13___default().Attachments),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_13___default().Writing_Options_PC),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                                src: _icons_image_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                                alt: \"\",\n                                                id: \"Image\",\n                                                width: 30,\n                                                height: 500,\n                                                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_13___default().optionImg)\n                                            }, void 0, false, {\n                                                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                                                lineNumber: 133,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                                src: _icons_wiki_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                                alt: \"\",\n                                                id: \"Wiki\",\n                                                width: 30,\n                                                height: 500,\n                                                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_13___default().optionImg)\n                                            }, void 0, false, {\n                                                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                                                lineNumber: 134,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                                src: _icons_Gif_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                                alt: \"\",\n                                                id: \"Gif\",\n                                                width: 30,\n                                                height: 500,\n                                                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_13___default().optionImg)\n                                            }, void 0, false, {\n                                                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                                                lineNumber: 135,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                                        lineNumber: 132,\n                                        columnNumber: 25\n                                    }, this),\n                                    this.state.Image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_controlbarcomps_ImagesFet__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                                        lineNumber: 142,\n                                        columnNumber: 46\n                                    }, this),\n                                    this.state.Wiki && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_controlbarcomps_Wiki__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                                        lineNumber: 143,\n                                        columnNumber: 45\n                                    }, this),\n                                    this.state.Gif && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_controlbarcomps_GifFetching__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                                        lineNumber: 144,\n                                        columnNumber: 44\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                                lineNumber: 131,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                        lineNumber: 95,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/Controlbar.js\",\n                lineNumber: 86,\n                columnNumber: 17\n            }, this)\n        }, void 0, false);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            Wiki: false,\n            Image: false,\n            Gif: false\n        };\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQnNCOzs7Ozs7Ozs7Ozs7a0RBTWhGLDhEQUFDdkIscUVBQVdBOzs7Ozs7Ozs7OzswQ0FVaEIsOERBQUNVO2dDQUFJQyxXQUFXVixnRkFBa0J3Qjs7a0RBQzlCLDhEQUFDZjt3Q0FBSUMsV0FBV1YsdUZBQXlCb0I7OzBEQUNyQyw4REFBQ25CLG9EQUFLQTtnREFBQ2EsS0FBS3JCLHdEQUFLQTtnREFBRXNCLEtBQUk7Z0RBQUdVLElBQUc7Z0RBQVFULE9BQU87Z0RBQUlDLFFBQVE7Z0RBQUtQLFdBQVdWLDhFQUFnQnNCOzs7Ozs7MERBQ3hGLDhEQUFDckIsb0RBQUtBO2dEQUFDYSxLQUFLdkIsdURBQUlBO2dEQUFFd0IsS0FBSTtnREFBR1UsSUFBRztnREFBT1QsT0FBTztnREFBSUMsUUFBUTtnREFBS1AsV0FBV1YsOEVBQWdCc0I7Ozs7OzswREFDdEYsOERBQUNyQixvREFBS0E7Z0RBQUNhLEtBQUt0QixzREFBR0E7Z0RBQUV1QixLQUFJO2dEQUFJVSxJQUFHO2dEQUFLVCxPQUFPO2dEQUFJQyxRQUFRO2dEQUFLUCxXQUFXViw4RUFBZ0JzQjs7Ozs7Ozs7Ozs7O29DQU92RixJQUFJLENBQUNJLE1BQU16Qix1QkFBUyw4REFBQ0gsbUVBQVNBOzs7OztvQ0FDOUIsSUFBSSxDQUFDNEIsTUFBTTlCLHNCQUFRLDhEQUFDQSw2REFBSUE7Ozs7O29DQUN4QixJQUFJLENBQUM4QixNQUFNbEMscUJBQU8sOERBQUNLLG9FQUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMEI1QztJQXhKQThCLFlBQVlDLEtBQUssQ0FBQztRQUNkLEtBQUssQ0FBQ0E7UUFDTixJQUFJLENBQUNGLFFBQU07WUFDUDlCLE1BQUs7WUFDTEssT0FBTTtZQUNOVCxLQUFJO1FBQ1I7SUFDSjtBQWtKSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9jb21wb25lbnRzL0NvbnRyb2xiYXIuanM/OTQ1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZ3JhYmltZyBmcm9tICcuLi9pY29ucy9ncmFiYmVyX2Fycm93LnBuZydcbmltcG9ydCB3aWtpIGZyb20gJy4uL2ljb25zL3dpa2kucG5nJ1xuaW1wb3J0IEdpZiBmcm9tICcuLi9pY29ucy9HaWYucG5nJ1xuaW1wb3J0IGltYWdlIGZyb20gJy4uL2ljb25zL2ltYWdlLnBuZydcbmltcG9ydCBUZXh0IGZyb20gJy4uL2ljb25zL1RleHQucG5nJ1xuaW1wb3J0IExpbmtJY29uIGZyb20gJy4uL2ljb25zL2xpbmsucG5nJ1xuXG5pbXBvcnQgV2lraSBmcm9tICcuL2NvbnRyb2xiYXJjb21wcy9XaWtpJ1xuaW1wb3J0IEdpZnMgZnJvbSAnLi9jb250cm9sYmFyY29tcHMvR2lmRmV0Y2hpbmcnXG5pbXBvcnQgSW1hZ2VzRmV0IGZyb20gJy4vY29udHJvbGJhcmNvbXBzL0ltYWdlc0ZldCdcbmltcG9ydCBUZXh0ZWRpdGluZyBmcm9tICcuL2NvbnRyb2xiYXJjb21wcy9UZXh0ZWRpdGluZydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvd3JpdGluZy5tb2R1bGUuY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICAgIFdpa2k6ZmFsc2UsXG4gICAgICAgICAgICBJbWFnZTpmYWxzZSxcbiAgICAgICAgICAgIEdpZjpmYWxzZSxcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzdGF0ZT17XG4gICAgLy8gICAgICdXaWtpJzpmYWxzZSxcbiAgICAvLyAgICAgJ0ltYWdlJzpmYWxzZSxcbiAgICAvLyAgICAgJ0dpZic6ZmFsc2UsXG5cbiAgICAvLyB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBHaWY9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHaWZcIilcbiAgICAgICAgbGV0IEltYWdlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiSW1hZ2VcIilcbiAgICAgICAgbGV0IFdpa2k9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJXaWtpXCIpXG5cbiAgICAgICAgR2lmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgV2lraTpmYWxzZSxcbiAgICAgICAgICAgICAgICBJbWFnZTpmYWxzZSxcbiAgICAgICAgICAgICAgICBHaWY6dHJ1ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgV2lraTpmYWxzZSxcbiAgICAgICAgICAgICAgICBJbWFnZTp0cnVlLFxuICAgICAgICAgICAgICAgIEdpZjpmYWxzZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIFdpa2kuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBXaWtpOnRydWUsXG4gICAgICAgICAgICAgICAgSW1hZ2U6ZmFsc2UsXG4gICAgICAgICAgICAgICAgR2lmOmZhbHNlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBsZXQgbG9vcGxpc3Q9W0dpZixJbWFnZSxXaWtpXVxuICAgICAgICAvLyBsZXQgbG9vcGxpc3RpbmQ9WydHaWYnLCdJbWFnZScsJ1dpa2knXVxuXG4gICAgICAgIC8vIGZvcihsZXQgaT0wO2k8bG9vcGxpc3QubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gICAgIGxvb3BsaXN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAvLyAgICAgICAgIGZvcihsZXQgaj0wO2o8bG9vcGxpc3QubGVuZ3RoO2orKyl7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc3RhdGUubG9vcGxpc3RpbmRbal09ZmFsc2VcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zdGF0ZS5sb29wbGlzdGluZFtpXT10cnVlXG5cbiAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gfVxuICAgIFxuXG5cblxuXG5cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cblxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRyb2xkYmFyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmFiYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ19ib3hcIiBvbkNsaWNrPXt0aGlzLmRvd25iYXJfYWN0aXZhdGlvbn0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2dyYWJpbWd9IGFsdD1cIlwiIHdpZHRoPXszMH0gaGVpZ2h0PXs1MDB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUmVzcG9uc2l2ZUhvbGRlcn0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9sZGVyQ29udHJvbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLldyaXRpbmdfT3B0aW9uc19QQ31gKycgJytgJHtzdHlsZXMuV3JpdGluZ19PcHRpb25zX1BDX2ZpcnN0Q2hpbGR9YH0+XG5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtUZXh0fSBhbHQ9XCJcIiB3aWR0aD17MzB9IGhlaWdodD17NTAwfSBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb25JbWd9Lz5cbiAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuV3JpdGluZ19PcHRpb25zfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD1cIlwiIHdpZHRoPXszMH0gaGVpZ2h0PXs1MDB9IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbkltZ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e1RleHR9IGFsdD1cIlwiIHdpZHRoPXszMH0gaGVpZ2h0PXs1MDB9IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbkltZ30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17d2lraX0gYWx0PVwiXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezUwMH0gY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9uSW1nfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17d2lraX0gYWx0PVwiXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezUwMH0gY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9uSW1nfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtMaW5rSWNvbn0gYWx0PVwiXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezUwMH0gY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9uSW1nfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGVkaXRpbmcvPlxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXR0YWNobWVudHN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Xcml0aW5nX09wdGlvbnNfUEN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9XCJcIiBpZD1cIkltYWdlXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezUwMH0gY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9uSW1nfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3dpa2l9IGFsdD1cIlwiIGlkPVwiV2lraVwiIHdpZHRoPXszMH0gaGVpZ2h0PXs1MDB9IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbkltZ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtHaWZ9IGFsdD1cIlwiICBpZD1cIkdpZlwid2lkdGg9ezMwfSBoZWlnaHQ9ezUwMH0gY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9uSW1nfSAvPlxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8V2lraS8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuSW1hZ2UgJiYgPEltYWdlc0ZldC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuV2lraSAmJiA8V2lraS8+fVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuR2lmICYmIDxHaWZzLz59XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG5cbiAgICAgICAgICAgICBcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG5cblxuXG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG5cblxuXG5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZ3JhYmltZyIsIndpa2kiLCJHaWYiLCJpbWFnZSIsIlRleHQiLCJMaW5rSWNvbiIsIldpa2kiLCJHaWZzIiwiSW1hZ2VzRmV0IiwiVGV4dGVkaXRpbmciLCJzdHlsZXMiLCJJbWFnZSIsIkNvbnRyb2xiYXIiLCJjb21wb25lbnREaWRNb3VudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250cm9sZGJhciIsIm9uQ2xpY2siLCJkb3duYmFyX2FjdGl2YXRpb24iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIlJlc3BvbnNpdmVIb2xkZXIiLCJob2xkZXJDb250cm9sIiwiV3JpdGluZ19PcHRpb25zX1BDIiwiV3JpdGluZ19PcHRpb25zX1BDX2ZpcnN0Q2hpbGQiLCJvcHRpb25JbWciLCJXcml0aW5nX09wdGlvbnMiLCJBdHRhY2htZW50cyIsImlkIiwic3RhdGUiLCJjb25zdHJ1Y3RvciIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/components/Controlbar.js\n"));

/***/ })

});