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

/***/ "./pages/Writing.js":
/*!**************************!*\
  !*** ./pages/Writing.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/components/Controlbar */ \"./public/components/Controlbar.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/Editing */ \"./store/actions/Editing.js\");\n\n\n\n\n\nclass Writing extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article\",\n                    contentEditable: \"true\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blog-content\",\n                        id: \"1\",\n                        contentEditable: \"true\",\n                        children: \"Dispatch on next.js redux vesion 2.2.02.vs\"\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                        lineNumber: 211,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 209,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 222,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            ContentElement: null,\n            active: this.props.Font,\n            ID_index: 1,\n            selected: null\n        };\n        // }\n        this.componentDidUpdate = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let check = document.getElementsByClassName(\"blog-content\");\n            console.log(this.props.Font);\n            console.log(this.props.Insert);\n        };\n        this.componentDidMount = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let content = document.getElementsByClassName(\"blog-content\");\n            // ----------------------------------------\n            // To stop HTML from breaking if user pastes some text other than writing it\n            var ce = article;\n            ce.addEventListener(\"paste\", function(e) {\n                e.preventDefault();\n                var text = e.clipboardData.getData(\"text/plain\");\n                document.execCommand(\"insertText\", false, text);\n            });\n            // ------------------------------------\n            // ----------------------------------------------\n            // Event listeners on article \n            for(let k = 0; k < content.length; k++){\n                content[k].addEventListener(\"click\", (e)=>{\n                    console.log(content[k].id);\n                });\n            }\n            article.addEventListener(\"input\", (e)=>{\n                if ((e.inputType == \"insertParagraph\" || e.data == null) && this.props.Font == \"blog-content\") {\n                    for(let j = 0; j < article.childElementCount; j++){\n                        if (j !== 0) {\n                            if (article.children[j].id == article.children[j - 1].id) {\n                                if (article.children[j].innerText.trim() !== \"\") {\n                                    article.children[j].id = \"F\".concat(article.children[j].id);\n                                    if (article.children[j - 1].id[article.children[j - 1].id.length - 1].toString() != \"E\") {\n                                        article.children[j - 1].id = \"B\".concat(article.children[j - 1].id, \"E\");\n                                    } else {\n                                        article.children[j - 1].id = \"B\".concat(article.children[j - 1].id);\n                                    }\n                                } else {\n                                    var idInd = this.state.ID_index + 1;\n                                    this.setState({\n                                        ID_index: idInd\n                                    });\n                                    article.children[j].id = idInd;\n                                }\n                                for(let k = 0; k < content.length; k++){\n                                    console.log(content[k].id[content[k].id.length - 1] != \"E\");\n                                    if (content[k].id[content[k].id.length - 1].toString() != \"E\") {\n                                        content[k].id = \"\".concat(content[k].id, \"E\");\n                                        content[k].addEventListener(\"click\", (e)=>{\n                                            console.log(content[k].id);\n                                        });\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n                if (article.firstChild.innerText.trim().length == 0) {\n                    article.firstChild.innerText = \"~\";\n                }\n            });\n        };\n        // this.heading = this.heading.bind(this);\n        // this.componentDidMount=this.componentDidMount.bind(this)\n        this.selectedDivRedux = (div)=>{\n            this.props.Set(div);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        Font: state.Edit.Font,\n        Insert: state.Edit.Insert\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Set: (div)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__.SelectSuccess(div))\n    };\n};\n// export default Writing;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Writing));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0o7QUFHQSxNQUFNNEIscUJBQXFCLENBQUNDO0lBQ3hCLE9BQU87UUFDSEosS0FBSyxDQUFDNUMsTUFBUWdELFNBQVNuRCxpRUFBcUJvRCxDQUFDakQ7SUFJakQ7QUFDSjtBQUVBLDBCQUEwQjtBQUMxQiwrREFBZ0JKLG9EQUFPQSxDQUFDaUQsaUJBQWdCRSxvQkFBb0JqRCxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1dyaXRpbmcuanM/ZjFhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDb250cm9sYmFyIGZyb20gJy4uL3B1YmxpYy9jb21wb25lbnRzL0NvbnRyb2xiYXInO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9FZGl0aW5nJ1xuY2xhc3MgV3JpdGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIC8vIHRoaXMuaGVhZGluZyA9IHRoaXMuaGVhZGluZy5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLmNvbXBvbmVudERpZE1vdW50PXRoaXMuY29tcG9uZW50RGlkTW91bnQuYmluZCh0aGlzKVxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREaXZSZWR1eD0oZGl2KT0+e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5TZXQoZGl2KVxuICAgICAgICB9XG5cblxuXG5cbiAgICB9XG5cblxuICAgIHN0YXRlID0ge1xuICAgICAgICBDb250ZW50RWxlbWVudDpudWxsLFxuICAgICAgICBhY3RpdmU6dGhpcy5wcm9wcy5Gb250LFxuICAgICAgICBJRF9pbmRleDoxLFxuICAgICAgICBzZWxlY3RlZDpudWxsXG5cbiAgICAgIH1cblxuXG5cbiAgICAvLyB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGU9KCk9PntcbiAgICAgICAgbGV0IGFydGljbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFydGljbGVcIilbMF1cbiAgICAgICAgbGV0IGNoZWNrPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9nLWNvbnRlbnRcIilcblxuICAgICAgICBcblxuXG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5Gb250KVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLkluc2VydClcblxuICAgICAgICBcblxuICAgICAgIFxuXG5cblxuICAgICAgICBcblxuIFxuICAgXG4gICAgfVxuICAgIFxuICAgIGNvbXBvbmVudERpZE1vdW50PSgpPT57XG4gICAgICAgIGxldCBhcnRpY2xlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdXG4gICAgICAgIGxldCBjb250ZW50PWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9nLWNvbnRlbnRcIilcblxuICBcblxuICAgICAgIFxuXG5cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vIFRvIHN0b3AgSFRNTCBmcm9tIGJyZWFraW5nIGlmIHVzZXIgcGFzdGVzIHNvbWUgdGV4dCBvdGhlciB0aGFuIHdyaXRpbmcgaXRcblxuICAgICAgICB2YXIgY2UgPSBhcnRpY2xlXG4gICAgICAgIGNlLmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB2YXIgdGV4dCA9IGUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJylcbiAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0VGV4dCcsIGZhbHNlLCB0ZXh0KVxuICAgICAgICB9KVxuXG5cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXJzIG9uIGFydGljbGUgXG5cbiAgICAgICAgZm9yKGxldCBrPTA7azxjb250ZW50Lmxlbmd0aDtrKyspe1xuICAgICAgICAgICAgY29udGVudFtrXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29udGVudFtrXS5pZClcbiAgICAgICAgICAgIH0pXG5cblxuXG5cbiAgICAgICAgfVxuICAgICAgICAgICAgYXJ0aWNsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsKGUpPT57XG4gICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGlmKChlLmlucHV0VHlwZT09XCJpbnNlcnRQYXJhZ3JhcGhcIiB8fCBlLmRhdGEgPT0gbnVsbCkgJiYgdGhpcy5wcm9wcy5Gb250PT1cImJsb2ctY29udGVudFwiKXtcblxuXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8YXJ0aWNsZS5jaGlsZEVsZW1lbnRDb3VudDtqKyspe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGohPT0wKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihhcnRpY2xlLmNoaWxkcmVuW2pdLmlkPT1hcnRpY2xlLmNoaWxkcmVuW2otMV0uaWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihhcnRpY2xlLmNoaWxkcmVuW2pdLmlubmVyVGV4dC50cmltKCkgIT09XCJcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmNoaWxkcmVuW2pdLmlkPWBGJHthcnRpY2xlLmNoaWxkcmVuW2pdLmlkfWBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXJ0aWNsZS5jaGlsZHJlbltqLTFdLmlkW2FydGljbGUuY2hpbGRyZW5bai0xXS5pZC5sZW5ndGgtMV0udG9TdHJpbmcoKSE9J0UnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmNoaWxkcmVuW2otMV0uaWQ9YEIke2FydGljbGUuY2hpbGRyZW5bai0xXS5pZH1FYFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuY2hpbGRyZW5bai0xXS5pZD1gQiR7YXJ0aWNsZS5jaGlsZHJlbltqLTFdLmlkfWBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWRJbmQ9dGhpcy5zdGF0ZS5JRF9pbmRleCsxXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJRF9pbmRleDogaWRJbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5jaGlsZHJlbltqXS5pZD0gaWRJbmRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGs9MDtrPGNvbnRlbnQubGVuZ3RoO2srKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50W2tdLmlkW2NvbnRlbnRba10uaWQubGVuZ3RoLTFdIT0nRScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjb250ZW50W2tdLmlkW2NvbnRlbnRba10uaWQubGVuZ3RoLTFdLnRvU3RyaW5nKCkhPSdFJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFtrXS5pZD1gJHtjb250ZW50W2tdLmlkfUVgXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRba10uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50W2tdLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cblxuICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICBcbiAgICBcbiAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgaWYoYXJ0aWNsZS5maXJzdENoaWxkLmlubmVyVGV4dC50cmltKCkubGVuZ3RoPT0wKXtcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5maXJzdENoaWxkLmlubmVyVGV4dD1cIn5cIlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgIFxuICAgIFxuICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICBcbiAgIFxuXG4gICAgICAgXG5cbiBcbiAgICBcblxuICAgICAgXG4gICAgfVxuXG4gICAgXG5cbiAgICByZW5kZXIoKSB7IFxuICAgICAgXG4gICAgICAgIHJldHVybiAoICBcbiAgICAgICAgICAgIDw+XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVcIiAgIGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIiAgPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2ctY29udGVudCcgaWQ9XCIxXCIgIGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICBEaXNwYXRjaCBvbiBuZXh0LmpzIHJlZHV4IHZlc2lvbiAyLjIuMDIudnNcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgXG4gICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8Q29udHJvbGJhci8+XG5cbiAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn1cbiBcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICBcbiAgICAgICAgRm9udDpzdGF0ZS5FZGl0LkZvbnQsXG4gICAgICAgIEluc2VydDpzdGF0ZS5FZGl0Lkluc2VydFxuXG5cbiAgICB9XG59XG5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgU2V0OiAoZGl2KSA9PiBkaXNwYXRjaChhY3Rpb25zLlNlbGVjdFN1Y2Nlc3MoZGl2KSksXG4gICAgICAgIFxuICBcblxuICAgIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgV3JpdGluZztcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFdyaXRpbmcpKVxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUlNUE9SVFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuLy8gaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4Jztcbi8vIGltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9hdXRoJztcblxuXG5cblxuXG4vLyBheGlvcy5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSA9IFwiWC1DU1JGVE9LRU5cIjtcbi8vIGF4aW9zLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gXCJjc3JmdG9rZW5cIjtcblxuXG5cblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLV9fUkVEVVgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIEpXVDogc3RhdGUuand0LFxuICAgIFxuXG4vLyAgICAgfVxuLy8gfVxuXG4vLyBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBkZWNvZGU6IChKV1QpID0+IGRpc3BhdGNoKGFjdGlvbnMuYXV0aEpXVChKV1QpKSxcbi8vICAgICAgICAgQ2hlY2tVc2VyOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmF1dGhDaGVja1N0YXRlKCkpLFxuXG4vLyAgICAgfVxuLy8gfVxuXG4vLyAvLyBleHBvcnQgZGVmYXVsdCBXcml0aW5nXG4vLyBleHBvcnQgZGVmYXVsdCAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShXcml0aW5nKSlcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbnRyb2xiYXIiLCJjb25uZWN0IiwiYWN0aW9ucyIsIldyaXRpbmciLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250ZW50RWRpdGFibGUiLCJpZCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsIkNvbnRlbnRFbGVtZW50IiwiYWN0aXZlIiwiRm9udCIsIklEX2luZGV4Iiwic2VsZWN0ZWQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJhcnRpY2xlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2hlY2siLCJjb25zb2xlIiwibG9nIiwiSW5zZXJ0IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb250ZW50IiwiY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGV4dCIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwiZXhlY0NvbW1hbmQiLCJrIiwibGVuZ3RoIiwiaW5wdXRUeXBlIiwiZGF0YSIsImoiLCJjaGlsZEVsZW1lbnRDb3VudCIsImNoaWxkcmVuIiwiaW5uZXJUZXh0IiwidHJpbSIsInRvU3RyaW5nIiwiaWRJbmQiLCJzZXRTdGF0ZSIsImZpcnN0Q2hpbGQiLCJzZWxlY3RlZERpdlJlZHV4IiwiU2V0IiwibWFwU3RhdGVUb1Byb3BzIiwiRWRpdCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiU2VsZWN0U3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Writing.js\n"));

/***/ })

});