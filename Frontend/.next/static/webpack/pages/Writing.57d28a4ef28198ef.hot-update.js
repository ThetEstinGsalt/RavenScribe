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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/writing.module.css */ \"./styles/writing.module.css\");\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions/Editing */ \"./store/actions/Editing.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\nclass Textediting extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    componentDidMount() {\n        let a = document.getElementsByClassName(\"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TexTstyleOption)));\n        console.log(a.length);\n        console.log(a);\n        for(let i = 0; i < a.childElementCount; i++){\n            a.children[i].addEventListener(\"click\", ()=>{\n                console.log(a[i]);\n                this.SetFont(a[i].id);\n                console.log(\"clicked\");\n                console.log(this.props.Font);\n            });\n        }\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TextEditing),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TexTstyleOption),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().HeadingSelect) + \" \" + \"blog-content\",\n                            id: \"blog-content\",\n                            children: \"Text\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                            lineNumber: 38,\n                            columnNumber: 66\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                        lineNumber: 38,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TexTstyleOption),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Text\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                            lineNumber: 40,\n                            columnNumber: 65\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                        lineNumber: 40,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TexTstyleOption),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().HeadingSelect) + \" \" + \"quotes\" + \" \" + (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TextQuoteSelect),\n                            id: \"quotes\",\n                            children: '\"Text\"'\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                            lineNumber: 42,\n                            columnNumber: 66\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                        lineNumber: 42,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TexTstyleOption),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().HeadingSelect) + \" \" + \"article-heading\",\n                            id: \"article-heading\",\n                            children: \"Text\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                            lineNumber: 45,\n                            columnNumber: 66\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                        lineNumber: 45,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TexTstyleOption),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().HeadingSelect) + \" \" + \"subHeading\",\n                            id: \"subHeading\",\n                            children: \"Text\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                            lineNumber: 48,\n                            columnNumber: 66\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                        lineNumber: 48,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                lineNumber: 35,\n                columnNumber: 22\n            }, this)\n        }, void 0, false);\n    }\n    constructor(props){\n        super(props);\n        this.SetFont = (font)=>{\n            this.props.Fontset(font);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        loading: state.auth.loading,\n        error: state.auth.error,\n        // isAuthenticated: state.token,\n        isAuthenticated: state.token !== null,\n        Font: state.Edit.Font\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Fontset: (Font)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_2__.FontSuccess(Font))\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Textediting));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvY29tcG9uZW50cy9jb250cm9sYmFyY29tcHMvVGV4dGVkaXRpbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBeUM7QUFDYztBQUNHO0FBRXBCO0FBR3RDLE1BQU1LLG9CQUFvQkosNENBQVNBO0lBTy9CSyxvQkFBbUI7UUFDZixJQUFJQyxJQUFHQyxTQUFTQyxzQkFBc0IsQ0FBQyxHQUEyQixPQUF4QlAsbUZBQXNCO1FBRWhFUyxRQUFRQyxHQUFHLENBQUNMLEVBQUVNLE1BQU07UUFDcEJGLFFBQVFDLEdBQUcsQ0FBQ0w7UUFDWixJQUFJLElBQUlPLElBQUUsR0FBRUEsSUFBRVAsRUFBRVEsaUJBQWlCLEVBQUNELElBQUk7WUFDbENQLEVBQUVTLFFBQVEsQ0FBQ0YsRUFBRSxDQUFDRyxnQkFBZ0IsQ0FBQyxTQUFRLElBQUk7Z0JBQ3ZDTixRQUFRQyxHQUFHLENBQUNMLENBQUMsQ0FBQ08sRUFBRTtnQkFDaEIsSUFBSSxDQUFDSSxPQUFPLENBQUNYLENBQUMsQ0FBQ08sRUFBRSxDQUFDSyxFQUFFO2dCQUNwQlIsUUFBUUMsR0FBRyxDQUFDO2dCQUNaRCxRQUFRQyxHQUFHLENBQUMsSUFBSSxDQUFDUSxLQUFLLENBQUNDLElBQUk7WUFHL0I7UUFDSjtJQUNKO0lBQ0FDLFNBQVM7UUFFTCxxQkFDSTtzQkFDUyw0RUFBQ0M7Z0JBQUlDLFdBQVd0QiwrRUFBa0I7O2tDQUcvQiw4REFBQ3FCO3dCQUFJQyxXQUFXdEIsbUZBQXNCO2tDQUFHLDRFQUFDcUI7NEJBQUlDLFdBQVd0QixpRkFBb0IsR0FBRSxNQUFLOzRCQUFnQmlCLElBQUc7c0NBQWU7Ozs7Ozs7Ozs7O2tDQUV0SCw4REFBQ0k7d0JBQUlDLFdBQVd0QixtRkFBc0I7a0NBQUUsNEVBQUN5QjtzQ0FBRzs7Ozs7Ozs7Ozs7a0NBRTVDLDhEQUFDSjt3QkFBSUMsV0FBV3RCLG1GQUFzQjtrQ0FBRyw0RUFBQ3FCOzRCQUFJQyxXQUFXdEIsaUZBQW9CLEdBQUUsTUFBSyxXQUFTLE1BQU1BLG1GQUFzQjs0QkFBRWlCLElBQUc7c0NBQVM7Ozs7Ozs7Ozs7O2tDQUd2SSw4REFBQ0k7d0JBQUlDLFdBQVd0QixtRkFBc0I7a0NBQUcsNEVBQUNxQjs0QkFBSUMsV0FBV3RCLGlGQUFvQixHQUFFLE1BQUs7NEJBQW1CaUIsSUFBRztzQ0FBa0I7Ozs7Ozs7Ozs7O2tDQUc1SCw4REFBQ0k7d0JBQUlDLFdBQVd0QixtRkFBc0I7a0NBQUcsNEVBQUNxQjs0QkFBSUMsV0FBV3RCLGlGQUFvQixHQUFFLE1BQUs7NEJBQWNpQixJQUFHO3NDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRdEk7SUEvQ0FVLFlBQVlULEtBQUssQ0FBQztRQUNkLEtBQUssQ0FBQ0E7UUFDTixJQUFJLENBQUNGLE9BQU8sR0FBQyxDQUFDWSxPQUFPO1lBQ2pCLElBQUksQ0FBQ1YsS0FBSyxDQUFDVyxPQUFPLENBQUNEO1FBQ3ZCO0lBQ0o7QUEyQ0o7QUFLQSxNQUFNRSxrQkFBa0IsQ0FBQ0MsUUFBVTtJQUMvQixPQUFPO1FBR0hDLFNBQVNELE1BQU1FLElBQUksQ0FBQ0QsT0FBTztRQUMzQkUsT0FBT0gsTUFBTUUsSUFBSSxDQUFDQyxLQUFLO1FBRXZCLGdDQUFnQztRQUNoQ0MsaUJBQWlCSixNQUFNSyxLQUFLLEtBQUssSUFBSTtRQUNyQ2pCLE1BQUtZLE1BQU1NLElBQUksQ0FBQ2xCLElBQUk7SUFHeEI7QUFDSjtBQUVBLE1BQU1tQixxQkFBcUIsQ0FBQ0MsV0FBYTtJQUNyQyxPQUFPO1FBQ0hWLFNBQVMsQ0FBQ1YsT0FBU29CLFNBQVN0QywrREFBbUIsQ0FBQ2tCO0lBRXBEO0FBQ0o7QUFJQSwrREFBaUJqQixvREFBT0EsQ0FBQzRCLGlCQUFpQlEsb0JBQW9CbkMsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wdWJsaWMvY29tcG9uZW50cy9jb250cm9sYmFyY29tcHMvVGV4dGVkaXRpbmcuanM/ZWI2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvd3JpdGluZy5tb2R1bGUuY3NzJ1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL0VkaXRpbmcnO1xuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5cbmNsYXNzIFRleHRlZGl0aW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5TZXRGb250PShmb250KT0+e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5Gb250c2V0KGZvbnQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgbGV0IGEgPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c3R5bGVzLlRleFRzdHlsZU9wdGlvbiB9YClcblxuICAgICAgICBjb25zb2xlLmxvZyhhLmxlbmd0aClcbiAgICAgICAgY29uc29sZS5sb2coYSlcbiAgICAgICAgZm9yKGxldCBpPTA7aTxhLmNoaWxkRWxlbWVudENvdW50O2krKyl7XG4gICAgICAgICAgICBhLmNoaWxkcmVuW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYVtpXSlcbiAgICAgICAgICAgICAgICB0aGlzLlNldEZvbnQoYVtpXS5pZClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIilcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLkZvbnQpXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRleHRFZGl0aW5nfT5cblxuICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXhUc3R5bGVPcHRpb24gfT48ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRpbmdTZWxlY3QgK1wiIFwiKyBcImJsb2ctY29udGVudFwifSBpZD1cImJsb2ctY29udGVudFwiPlRleHQ8L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGV4VHN0eWxlT3B0aW9ufT48bGk+VGV4dDwvbGk+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGV4VHN0eWxlT3B0aW9uIH0+PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkaW5nU2VsZWN0ICtcIiBcIisgXCJxdW90ZXNcIitcIiBcIiArIHN0eWxlcy5UZXh0UXVvdGVTZWxlY3R9IGlkPVwicXVvdGVzXCI+XCJUZXh0XCI8L2Rpdj48L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRleFRzdHlsZU9wdGlvbiB9PjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGluZ1NlbGVjdCArXCIgXCIrIFwiYXJ0aWNsZS1oZWFkaW5nXCJ9IGlkPVwiYXJ0aWNsZS1oZWFkaW5nXCI+VGV4dDwvZGl2PjwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGV4VHN0eWxlT3B0aW9uIH0+PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkaW5nU2VsZWN0ICtcIiBcIisgXCJzdWJIZWFkaW5nXCJ9IGlkPVwic3ViSGVhZGluZ1wiPlRleHQ8L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcblxuICAgICAgICBcbiAgICAgICAgbG9hZGluZzogc3RhdGUuYXV0aC5sb2FkaW5nLFxuICAgICAgICBlcnJvcjogc3RhdGUuYXV0aC5lcnJvcixcblxuICAgICAgICAvLyBpc0F1dGhlbnRpY2F0ZWQ6IHN0YXRlLnRva2VuLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHN0YXRlLnRva2VuICE9PSBudWxsLFxuICAgICAgICBGb250OnN0YXRlLkVkaXQuRm9udFxuXG5cbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIEZvbnRzZXQ6IChGb250KSA9PiBkaXNwYXRjaChhY3Rpb25zLkZvbnRTdWNjZXNzKEZvbnQpKVxuXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgIChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUZXh0ZWRpdGluZykpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVzIiwiYWN0aW9ucyIsImNvbm5lY3QiLCJUZXh0ZWRpdGluZyIsImNvbXBvbmVudERpZE1vdW50IiwiYSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIlRleFRzdHlsZU9wdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJpIiwiY2hpbGRFbGVtZW50Q291bnQiLCJjaGlsZHJlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJTZXRGb250IiwiaWQiLCJwcm9wcyIsIkZvbnQiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJUZXh0RWRpdGluZyIsIkhlYWRpbmdTZWxlY3QiLCJsaSIsIlRleHRRdW90ZVNlbGVjdCIsImNvbnN0cnVjdG9yIiwiZm9udCIsIkZvbnRzZXQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImxvYWRpbmciLCJhdXRoIiwiZXJyb3IiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ0b2tlbiIsIkVkaXQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIkZvbnRTdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/components/controlbarcomps/Textediting.js\n"));

/***/ })

});