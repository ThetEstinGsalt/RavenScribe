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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/writing.module.css */ \"./styles/writing.module.css\");\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions/Editing */ \"./store/actions/Editing.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\nclass Textediting extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    componentDidMount() {\n        let a = document.getElementsByClassName(\"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TexTstyleOption)));\n        console.log(a.length);\n        console.log(a.item);\n        for(let i = 0; i < a.length; i++){\n            a[i].addEventListener(\"click\", ()=>{\n                // console.log(a[i].children[0].id)\n                this.SetFont(a[i].children[0].id);\n                console.log(\"clicked\");\n                console.log(this.props.Font);\n            });\n        }\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TextEditing),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TexTstyleOption),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().HeadingSelect) + \" \" + \"blog-content\",\n                            id: \"blog-content\",\n                            children: \"Text\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                            lineNumber: 38,\n                            columnNumber: 66\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                        lineNumber: 38,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TexTstyleOption),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Text\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                            lineNumber: 40,\n                            columnNumber: 65\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                        lineNumber: 40,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TexTstyleOption),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().HeadingSelect) + \" \" + \"quotes\" + \" \" + (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TextQuoteSelect),\n                            id: \"quotes\",\n                            children: '\"Text\"'\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                            lineNumber: 42,\n                            columnNumber: 66\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                        lineNumber: 42,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TexTstyleOption),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().HeadingSelect) + \" \" + \"article-heading\",\n                            id: \"article-heading\",\n                            children: \"Text\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                            lineNumber: 45,\n                            columnNumber: 66\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                        lineNumber: 45,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().TexTstyleOption),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_4___default().HeadingSelect) + \" \" + \"subHeading\",\n                            id: \"subHeading\",\n                            children: \"Text\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                            lineNumber: 48,\n                            columnNumber: 66\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                        lineNumber: 48,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/Textediting.js\",\n                lineNumber: 35,\n                columnNumber: 22\n            }, this)\n        }, void 0, false);\n    }\n    constructor(props){\n        super(props);\n        this.SetFont = (font)=>{\n            this.props.Fontset(font);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        loading: state.auth.loading,\n        error: state.auth.error,\n        // isAuthenticated: state.token,\n        isAuthenticated: state.token !== null,\n        Font: state.Edit.Font\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Fontset: (Font)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_2__.FontSuccess(Font))\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Textediting));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvY29tcG9uZW50cy9jb250cm9sYmFyY29tcHMvVGV4dGVkaXRpbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBeUM7QUFDYztBQUNHO0FBRXBCO0FBR3RDLE1BQU1LLG9CQUFvQkosNENBQVNBO0lBTy9CSyxvQkFBbUI7UUFDZixJQUFJQyxJQUFHQyxTQUFTQyxzQkFBc0IsQ0FBQyxHQUEyQixPQUF4QlAsbUZBQXNCO1FBRWhFUyxRQUFRQyxHQUFHLENBQUNMLEVBQUVNLE1BQU07UUFDcEJGLFFBQVFDLEdBQUcsQ0FBQ0wsRUFBRU8sSUFBSTtRQUNsQixJQUFJLElBQUlDLElBQUUsR0FBRUEsSUFBRVIsRUFBRU0sTUFBTSxFQUFDRSxJQUFJO1lBQ3ZCUixDQUFDLENBQUNRLEVBQUUsQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUSxJQUFJO2dCQUM5QixtQ0FBbUM7Z0JBQ25DLElBQUksQ0FBQ0MsT0FBTyxDQUFDVixDQUFDLENBQUNRLEVBQUUsQ0FBQ0csUUFBUSxDQUFDLEVBQUUsQ0FBQ0MsRUFBRTtnQkFDaENSLFFBQVFDLEdBQUcsQ0FBQztnQkFDWkQsUUFBUUMsR0FBRyxDQUFDLElBQUksQ0FBQ1EsS0FBSyxDQUFDQyxJQUFJO1lBRy9CO1FBQ0o7SUFDSjtJQUNBQyxTQUFTO1FBRUwscUJBQ0k7c0JBQ1MsNEVBQUNDO2dCQUFJQyxXQUFXdEIsK0VBQWtCOztrQ0FHL0IsOERBQUNxQjt3QkFBSUMsV0FBV3RCLG1GQUFzQjtrQ0FBRyw0RUFBQ3FCOzRCQUFJQyxXQUFXdEIsaUZBQW9CLEdBQUUsTUFBSzs0QkFBZ0JpQixJQUFHO3NDQUFlOzs7Ozs7Ozs7OztrQ0FFdEgsOERBQUNJO3dCQUFJQyxXQUFXdEIsbUZBQXNCO2tDQUFFLDRFQUFDeUI7c0NBQUc7Ozs7Ozs7Ozs7O2tDQUU1Qyw4REFBQ0o7d0JBQUlDLFdBQVd0QixtRkFBc0I7a0NBQUcsNEVBQUNxQjs0QkFBSUMsV0FBV3RCLGlGQUFvQixHQUFFLE1BQUssV0FBUyxNQUFNQSxtRkFBc0I7NEJBQUVpQixJQUFHO3NDQUFTOzs7Ozs7Ozs7OztrQ0FHdkksOERBQUNJO3dCQUFJQyxXQUFXdEIsbUZBQXNCO2tDQUFHLDRFQUFDcUI7NEJBQUlDLFdBQVd0QixpRkFBb0IsR0FBRSxNQUFLOzRCQUFtQmlCLElBQUc7c0NBQWtCOzs7Ozs7Ozs7OztrQ0FHNUgsOERBQUNJO3dCQUFJQyxXQUFXdEIsbUZBQXNCO2tDQUFHLDRFQUFDcUI7NEJBQUlDLFdBQVd0QixpRkFBb0IsR0FBRSxNQUFLOzRCQUFjaUIsSUFBRztzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUXRJO0lBL0NBVSxZQUFZVCxLQUFLLENBQUM7UUFDZCxLQUFLLENBQUNBO1FBQ04sSUFBSSxDQUFDSCxPQUFPLEdBQUMsQ0FBQ2EsT0FBTztZQUNqQixJQUFJLENBQUNWLEtBQUssQ0FBQ1csT0FBTyxDQUFDRDtRQUN2QjtJQUNKO0FBMkNKO0FBS0EsTUFBTUUsa0JBQWtCLENBQUNDLFFBQVU7SUFDL0IsT0FBTztRQUdIQyxTQUFTRCxNQUFNRSxJQUFJLENBQUNELE9BQU87UUFDM0JFLE9BQU9ILE1BQU1FLElBQUksQ0FBQ0MsS0FBSztRQUV2QixnQ0FBZ0M7UUFDaENDLGlCQUFpQkosTUFBTUssS0FBSyxLQUFLLElBQUk7UUFDckNqQixNQUFLWSxNQUFNTSxJQUFJLENBQUNsQixJQUFJO0lBR3hCO0FBQ0o7QUFFQSxNQUFNbUIscUJBQXFCLENBQUNDLFdBQWE7SUFDckMsT0FBTztRQUNIVixTQUFTLENBQUNWLE9BQVNvQixTQUFTdEMsK0RBQW1CLENBQUNrQjtJQUVwRDtBQUNKO0FBSUEsK0RBQWlCakIsb0RBQU9BLENBQUM0QixpQkFBaUJRLG9CQUFvQm5DLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2NvbXBvbmVudHMvY29udHJvbGJhcmNvbXBzL1RleHRlZGl0aW5nLmpzP2ViNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3dyaXRpbmcubW9kdWxlLmNzcydcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9FZGl0aW5nJztcblxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuXG5jbGFzcyBUZXh0ZWRpdGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuU2V0Rm9udD0oZm9udCk9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuRm9udHNldChmb250KVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIGxldCBhID1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3N0eWxlcy5UZXhUc3R5bGVPcHRpb24gfWApXG5cbiAgICAgICAgY29uc29sZS5sb2coYS5sZW5ndGgpXG4gICAgICAgIGNvbnNvbGUubG9nKGEuaXRlbSlcbiAgICAgICAgZm9yKGxldCBpPTA7aTxhLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgYVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFbaV0uY2hpbGRyZW5bMF0uaWQpXG4gICAgICAgICAgICAgICAgdGhpcy5TZXRGb250KGFbaV0uY2hpbGRyZW5bMF0uaWQpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkXCIpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5Gb250KVxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXh0RWRpdGluZ30+XG5cbiAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGV4VHN0eWxlT3B0aW9uIH0+PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkaW5nU2VsZWN0ICtcIiBcIisgXCJibG9nLWNvbnRlbnRcIn0gaWQ9XCJibG9nLWNvbnRlbnRcIj5UZXh0PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRleFRzdHlsZU9wdGlvbn0+PGxpPlRleHQ8L2xpPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRleFRzdHlsZU9wdGlvbiB9PjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGluZ1NlbGVjdCArXCIgXCIrIFwicXVvdGVzXCIrXCIgXCIgKyBzdHlsZXMuVGV4dFF1b3RlU2VsZWN0fSBpZD1cInF1b3Rlc1wiPlwiVGV4dFwiPC9kaXY+PC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZXhUc3R5bGVPcHRpb24gfT48ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRpbmdTZWxlY3QgK1wiIFwiKyBcImFydGljbGUtaGVhZGluZ1wifSBpZD1cImFydGljbGUtaGVhZGluZ1wiPlRleHQ8L2Rpdj48L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRleFRzdHlsZU9wdGlvbiB9PjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGluZ1NlbGVjdCArXCIgXCIrIFwic3ViSGVhZGluZ1wifSBpZD1cInN1YkhlYWRpbmdcIj5UZXh0PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG5cbiAgICAgICAgXG4gICAgICAgIGxvYWRpbmc6IHN0YXRlLmF1dGgubG9hZGluZyxcbiAgICAgICAgZXJyb3I6IHN0YXRlLmF1dGguZXJyb3IsXG5cbiAgICAgICAgLy8gaXNBdXRoZW50aWNhdGVkOiBzdGF0ZS50b2tlbixcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBzdGF0ZS50b2tlbiAhPT0gbnVsbCxcbiAgICAgICAgRm9udDpzdGF0ZS5FZGl0LkZvbnRcblxuXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBGb250c2V0OiAoRm9udCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5Gb250U3VjY2VzcyhGb250KSlcblxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0ICAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGV4dGVkaXRpbmcpKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInN0eWxlcyIsImFjdGlvbnMiLCJjb25uZWN0IiwiVGV4dGVkaXRpbmciLCJjb21wb25lbnREaWRNb3VudCIsImEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJUZXhUc3R5bGVPcHRpb24iLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiaXRlbSIsImkiLCJhZGRFdmVudExpc3RlbmVyIiwiU2V0Rm9udCIsImNoaWxkcmVuIiwiaWQiLCJwcm9wcyIsIkZvbnQiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJUZXh0RWRpdGluZyIsIkhlYWRpbmdTZWxlY3QiLCJsaSIsIlRleHRRdW90ZVNlbGVjdCIsImNvbnN0cnVjdG9yIiwiZm9udCIsIkZvbnRzZXQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImxvYWRpbmciLCJhdXRoIiwiZXJyb3IiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ0b2tlbiIsIkVkaXQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIkZvbnRTdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/components/controlbarcomps/Textediting.js\n"));

/***/ })

});