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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/writing.module.css */ \"./styles/writing.module.css\");\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions/Editing */ \"./store/actions/Editing.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\nclass Textediting extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    componentDidMount() {\n        let a = document.getElementsByClassName(\"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TexTstyleOption)));\n        console.log(a.length);\n        console.log(a.item);\n        for(let i = 0; i < a.length; i++){\n            a[i].addEventListener(\"click\", ()=>{\n                // console.log(a[i].children[0].id)\n                this.SetFont(a[i].children[0].id);\n            });\n        }\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TextEditing),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TexTstyleOption),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().CasualTextSelect),\n                            id: \"blog-content\",\n                            children: \"Text\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                            lineNumber: 37,\n                            columnNumber: 66\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                        lineNumber: 37,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TexTstyleOption),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Text\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                            lineNumber: 39,\n                            columnNumber: 65\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                        lineNumber: 39,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TexTstyleOption),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"quotes\" + \" \" + (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TextQuoteSelect),\n                            id: \"quotes\",\n                            children: '\"Text\"'\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                            lineNumber: 41,\n                            columnNumber: 66\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                        lineNumber: 41,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TexTstyleOption),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().HeadingSelect) + \" \" + \"article-heading\",\n                            id: \"article-heading\",\n                            children: \"Text\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                            lineNumber: 44,\n                            columnNumber: 66\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                        lineNumber: 44,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TexTstyleOption),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().subHeadingSelect) + \" \" + \"subHeading\",\n                            id: \"subHeading\",\n                            children: \"Text\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                            lineNumber: 47,\n                            columnNumber: 66\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                        lineNumber: 47,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                lineNumber: 34,\n                columnNumber: 22\n            }, this)\n        }, void 0, false);\n    }\n    constructor(props){\n        super(props);\n        this.SetFont = (font)=>{\n            this.props.Fontset(font);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        loading: state.auth.loading,\n        error: state.auth.error,\n        // isAuthenticated: state.token,\n        isAuthenticated: state.token !== null,\n        Font: state.Edit.Font\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Fontset: (Font)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_2__.FontSuccess(Font))\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Textediting));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvY29tcG9uZW50cy9jb250cm9sYmFyY29tcHMvVGV4dGVkaXRpbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBeUM7QUFDYztBQUNHO0FBRXBCO0FBR3RDLE1BQU1LLG9CQUFvQkosNENBQVNBO0lBTy9CSyxvQkFBbUI7UUFDZixJQUFJQyxJQUFHQyxTQUFTQyxzQkFBc0IsQ0FBQyxHQUEyQixPQUF4QlAsbUZBQXNCO1FBRWhFUyxRQUFRQyxHQUFHLENBQUNMLEVBQUVNLE1BQU07UUFDcEJGLFFBQVFDLEdBQUcsQ0FBQ0wsRUFBRU8sSUFBSTtRQUNsQixJQUFJLElBQUlDLElBQUUsR0FBRUEsSUFBRVIsRUFBRU0sTUFBTSxFQUFDRSxJQUFJO1lBQ3ZCUixDQUFDLENBQUNRLEVBQUUsQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUSxJQUFJO2dCQUM5QixtQ0FBbUM7Z0JBQ25DLElBQUksQ0FBQ0MsT0FBTyxDQUFDVixDQUFDLENBQUNRLEVBQUUsQ0FBQ0csUUFBUSxDQUFDLEVBQUUsQ0FBQ0MsRUFBRTtZQUlwQztRQUNKO0lBQ0o7SUFDQUMsU0FBUztRQUVMLHFCQUNJO3NCQUNTLDRFQUFDQztnQkFBSUMsV0FBV3BCLCtFQUFrQjs7a0NBRy9CLDhEQUFDbUI7d0JBQUlDLFdBQVdwQixtRkFBc0I7a0NBQUcsNEVBQUNtQjs0QkFBSUMsV0FBV3BCLG9GQUF1Qjs0QkFBRWlCLElBQUc7c0NBQWU7Ozs7Ozs7Ozs7O2tDQUVwRyw4REFBQ0U7d0JBQUlDLFdBQVdwQixtRkFBc0I7a0NBQUUsNEVBQUN1QjtzQ0FBRzs7Ozs7Ozs7Ozs7a0NBRTVDLDhEQUFDSjt3QkFBSUMsV0FBV3BCLG1GQUFzQjtrQ0FBRyw0RUFBQ21COzRCQUFJQyxXQUFZLFdBQVMsTUFBTXBCLG1GQUFzQjs0QkFBRWlCLElBQUc7c0NBQVM7Ozs7Ozs7Ozs7O2tDQUc3Ryw4REFBQ0U7d0JBQUlDLFdBQVdwQixtRkFBc0I7a0NBQUcsNEVBQUNtQjs0QkFBSUMsV0FBV3BCLGlGQUFvQixHQUFFLE1BQUs7NEJBQW1CaUIsSUFBRztzQ0FBa0I7Ozs7Ozs7Ozs7O2tDQUc1SCw4REFBQ0U7d0JBQUlDLFdBQVdwQixtRkFBc0I7a0NBQUcsNEVBQUNtQjs0QkFBSUMsV0FBV3BCLG9GQUF1QixHQUFFLE1BQUs7NEJBQWNpQixJQUFHO3NDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRekk7SUE5Q0FVLFlBQVlDLEtBQUssQ0FBQztRQUNkLEtBQUssQ0FBQ0E7UUFDTixJQUFJLENBQUNiLE9BQU8sR0FBQyxDQUFDYyxPQUFPO1lBQ2pCLElBQUksQ0FBQ0QsS0FBSyxDQUFDRSxPQUFPLENBQUNEO1FBQ3ZCO0lBQ0o7QUEwQ0o7QUFLQSxNQUFNRSxrQkFBa0IsQ0FBQ0MsUUFBVTtJQUMvQixPQUFPO1FBR0hDLFNBQVNELE1BQU1FLElBQUksQ0FBQ0QsT0FBTztRQUMzQkUsT0FBT0gsTUFBTUUsSUFBSSxDQUFDQyxLQUFLO1FBRXZCLGdDQUFnQztRQUNoQ0MsaUJBQWlCSixNQUFNSyxLQUFLLEtBQUssSUFBSTtRQUNyQ0MsTUFBS04sTUFBTU8sSUFBSSxDQUFDRCxJQUFJO0lBR3hCO0FBQ0o7QUFFQSxNQUFNRSxxQkFBcUIsQ0FBQ0MsV0FBYTtJQUNyQyxPQUFPO1FBQ0hYLFNBQVMsQ0FBQ1EsT0FBU0csU0FBU3hDLCtEQUFtQixDQUFDcUM7SUFFcEQ7QUFDSjtBQUlBLCtEQUFpQnBDLG9EQUFPQSxDQUFDNkIsaUJBQWlCUyxvQkFBb0JyQyxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9jb21wb25lbnRzL2NvbnRyb2xiYXJjb21wcy9UZXh0ZWRpdGluZy5qcz9lYjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy93cml0aW5nLm1vZHVsZS5jc3MnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvRWRpdGluZyc7XG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cblxuY2xhc3MgVGV4dGVkaXRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLlNldEZvbnQ9KGZvbnQpPT57XG4gICAgICAgICAgICB0aGlzLnByb3BzLkZvbnRzZXQoZm9udClcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBsZXQgYSA9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzdHlsZXMuVGV4VHN0eWxlT3B0aW9uIH1gKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGEubGVuZ3RoKVxuICAgICAgICBjb25zb2xlLmxvZyhhLml0ZW0pXG4gICAgICAgIGZvcihsZXQgaT0wO2k8YS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGFbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhW2ldLmNoaWxkcmVuWzBdLmlkKVxuICAgICAgICAgICAgICAgIHRoaXMuU2V0Rm9udChhW2ldLmNoaWxkcmVuWzBdLmlkKVxuICAgICBcbiBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRleHRFZGl0aW5nfT5cblxuICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXhUc3R5bGVPcHRpb24gfT48ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNhc3VhbFRleHRTZWxlY3R9IGlkPVwiYmxvZy1jb250ZW50XCI+VGV4dDwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXhUc3R5bGVPcHRpb259PjxsaT5UZXh0PC9saT48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXhUc3R5bGVPcHRpb24gfT48ZGl2IGNsYXNzTmFtZT17IFwicXVvdGVzXCIrXCIgXCIgKyBzdHlsZXMuVGV4dFF1b3RlU2VsZWN0fSBpZD1cInF1b3Rlc1wiPlwiVGV4dFwiPC9kaXY+PC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXhUc3R5bGVPcHRpb24gfT48ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRpbmdTZWxlY3QgK1wiIFwiKyBcImFydGljbGUtaGVhZGluZ1wifSBpZD1cImFydGljbGUtaGVhZGluZ1wiPlRleHQ8L2Rpdj48L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRleFRzdHlsZU9wdGlvbiB9PjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3ViSGVhZGluZ1NlbGVjdCArXCIgXCIrIFwic3ViSGVhZGluZ1wifSBpZD1cInN1YkhlYWRpbmdcIj5UZXh0PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG5cbiAgICAgICAgXG4gICAgICAgIGxvYWRpbmc6IHN0YXRlLmF1dGgubG9hZGluZyxcbiAgICAgICAgZXJyb3I6IHN0YXRlLmF1dGguZXJyb3IsXG5cbiAgICAgICAgLy8gaXNBdXRoZW50aWNhdGVkOiBzdGF0ZS50b2tlbixcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBzdGF0ZS50b2tlbiAhPT0gbnVsbCxcbiAgICAgICAgRm9udDpzdGF0ZS5FZGl0LkZvbnRcblxuXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBGb250c2V0OiAoRm9udCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5Gb250U3VjY2VzcyhGb250KSlcblxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0ICAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGV4dGVkaXRpbmcpKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInN0eWxlcyIsImFjdGlvbnMiLCJjb25uZWN0IiwiVGV4dGVkaXRpbmciLCJjb21wb25lbnREaWRNb3VudCIsImEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJUZXhUc3R5bGVPcHRpb24iLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiaXRlbSIsImkiLCJhZGRFdmVudExpc3RlbmVyIiwiU2V0Rm9udCIsImNoaWxkcmVuIiwiaWQiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJUZXh0RWRpdGluZyIsIkNhc3VhbFRleHRTZWxlY3QiLCJsaSIsIlRleHRRdW90ZVNlbGVjdCIsIkhlYWRpbmdTZWxlY3QiLCJzdWJIZWFkaW5nU2VsZWN0IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImZvbnQiLCJGb250c2V0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJsb2FkaW5nIiwiYXV0aCIsImVycm9yIiwiaXNBdXRoZW50aWNhdGVkIiwidG9rZW4iLCJGb250IiwiRWRpdCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiRm9udFN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/components/controlbarcomps/Textediting.js\n"));

/***/ })

});