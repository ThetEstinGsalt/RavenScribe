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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/components/Controlbar */ \"./public/components/Controlbar.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/Editing */ \"./store/actions/Editing.js\");\n\n\n\n\n\nclass Writing extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article\",\n                    contentEditable: \"true\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blog-content\",\n                        id: \"1\",\n                        contentEditable: \"true\",\n                        children: \"Dispatch on next.js redux vesion 2.2.02.vs\"\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                        lineNumber: 208,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 206,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 219,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            ContentElement: null,\n            active: this.props.Font,\n            ID_index: 1,\n            selected: null\n        };\n        // }\n        this.componentDidUpdate = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let check = document.getElementsByClassName(\"blog-content\");\n            console.log(this.props.Font);\n            console.log(this.props.Insert);\n        };\n        this.componentDidMount = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let content = document.getElementsByClassName(\"blog-content\");\n            // ----------------------------------------\n            // To stop HTML from breaking if user pastes some text other than writing it\n            var ce = article;\n            ce.addEventListener(\"paste\", function(e) {\n                e.preventDefault();\n                var text = e.clipboardData.getData(\"text/plain\");\n                document.execCommand(\"insertText\", false, text);\n            });\n            // ------------------------------------\n            // ----------------------------------------------\n            // Event listeners on article \n            for(let k = 0; k < content.length; k++){\n                content[k].addEventListener(\"click\", (e)=>{\n                    console.log(content[k].id);\n                });\n            }\n            article.addEventListener(\"input\", (e)=>{\n                if ((e.inputType == \"insertParagraph\" || e.data == null) && this.props.Font == \"blog-content\") {\n                    for(let j = 0; j < article.childElementCount; j++){\n                        if (j !== 0) {\n                            if (article.children[j].id == article.children[j - 1].id) {\n                                if (article.children[j].innerText.trim() !== \"\") {\n                                    article.children[j].id = \"F\".concat(article.children[j].id);\n                                    article.children[j].addEventListener(\"click\", ()=>{\n                                        console.log(article.children[j].id);\n                                    });\n                                    article.children[j - 1].id = \"B\".concat(article.children[j - 1].id);\n                                } else {\n                                    var idInd = this.state.ID_index + 1;\n                                    this.setState({\n                                        ID_index: idInd\n                                    });\n                                    article.children[j].id = idInd;\n                                }\n                                for(let k = 0; k < content.length; k++){\n                                    content[k].addEventListener(\"click\", (e)=>{\n                                        console.log(content[k].id);\n                                    });\n                                }\n                            }\n                        }\n                    }\n                } else {}\n                if (article.firstChild.innerText.trim().length == 0) {\n                    article.firstChild.innerText = \"~\";\n                }\n            });\n        };\n        // this.heading = this.heading.bind(this);\n        // this.componentDidMount=this.componentDidMount.bind(this)\n        this.selectedDivRedux = (div)=>{\n            this.props.Set(div);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        Font: state.Edit.Font,\n        Insert: state.Edit.Insert\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Set: (div)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__.SelectSuccess(div))\n    };\n};\n// export default Writing;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Writing));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsSUFBSSxJQUFJVCxJQUFFLEdBQUVBLElBQUVULFFBQVFVLFFBQU9ELElBQUk7b0NBQzdCVCxPQUFPLENBQUNTLEVBQUUsQ0FBQ1AsaUJBQWlCLFNBQVEsQ0FBQ0M7d0NBQ2pDUCxRQUFRQyxJQUFJRyxPQUFPLENBQUNTLEVBQUUsQ0FBQzNCO29DQUMzQjtnQ0FLSjs0QkFNSjt3QkFFSjtvQkFBQztnQkFHVCxPQUNJLENBUUs7Z0JBUVQsSUFBR1UsUUFBUTRCLFdBQVdKLFVBQVVDLE9BQU9QLFVBQVEsR0FBRTtvQkFDN0NsQixRQUFRNEIsV0FBV0osWUFBVTtnQkFHakM7WUFNSjtRQVdSO1FBeExJLDBDQUEwQztRQUMxQywyREFBMkQ7UUFFM0QsSUFBSSxDQUFDSyxtQkFBaUIsQ0FBQzFDO1lBQ25CLElBQUksQ0FBQ0ssTUFBTXNDLElBQUkzQztRQUNuQjtJQUtKO0FBMk1KO0FBSUEsTUFBTTRDLGtCQUFrQixDQUFDdEM7SUFDckIsT0FBTztRQUVIRyxNQUFLSCxNQUFNdUMsS0FBS3BDO1FBQ2hCVSxRQUFPYixNQUFNdUMsS0FBSzFCO0lBR3RCO0FBQ0o7QUFHQSxNQUFNMkIscUJBQXFCLENBQUNDO0lBQ3hCLE9BQU87UUFDSEosS0FBSyxDQUFDM0MsTUFBUStDLFNBQVNsRCxpRUFBcUJtRCxDQUFDaEQ7SUFJakQ7QUFDSjtBQUVBLDBCQUEwQjtBQUMxQiwrREFBZ0JKLG9EQUFPQSxDQUFDZ0QsaUJBQWdCRSxvQkFBb0JoRCxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1dyaXRpbmcuanM/ZjFhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDb250cm9sYmFyIGZyb20gJy4uL3B1YmxpYy9jb21wb25lbnRzL0NvbnRyb2xiYXInO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9FZGl0aW5nJ1xuY2xhc3MgV3JpdGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIC8vIHRoaXMuaGVhZGluZyA9IHRoaXMuaGVhZGluZy5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLmNvbXBvbmVudERpZE1vdW50PXRoaXMuY29tcG9uZW50RGlkTW91bnQuYmluZCh0aGlzKVxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREaXZSZWR1eD0oZGl2KT0+e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5TZXQoZGl2KVxuICAgICAgICB9XG5cblxuXG5cbiAgICB9XG5cblxuICAgIHN0YXRlID0ge1xuICAgICAgICBDb250ZW50RWxlbWVudDpudWxsLFxuICAgICAgICBhY3RpdmU6dGhpcy5wcm9wcy5Gb250LFxuICAgICAgICBJRF9pbmRleDoxLFxuICAgICAgICBzZWxlY3RlZDpudWxsXG5cbiAgICAgIH1cblxuXG5cbiAgICAvLyB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGU9KCk9PntcbiAgICAgICAgbGV0IGFydGljbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFydGljbGVcIilbMF1cbiAgICAgICAgbGV0IGNoZWNrPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9nLWNvbnRlbnRcIilcblxuICAgICAgICBcblxuXG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5Gb250KVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLkluc2VydClcblxuICAgICAgICBcblxuICAgICAgIFxuXG5cblxuICAgICAgICBcblxuIFxuICAgXG4gICAgfVxuICAgIFxuICAgIGNvbXBvbmVudERpZE1vdW50PSgpPT57XG4gICAgICAgIGxldCBhcnRpY2xlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdXG4gICAgICAgIGxldCBjb250ZW50PWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9nLWNvbnRlbnRcIilcblxuICBcblxuICAgICAgIFxuXG5cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vIFRvIHN0b3AgSFRNTCBmcm9tIGJyZWFraW5nIGlmIHVzZXIgcGFzdGVzIHNvbWUgdGV4dCBvdGhlciB0aGFuIHdyaXRpbmcgaXRcblxuICAgICAgICB2YXIgY2UgPSBhcnRpY2xlXG4gICAgICAgIGNlLmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB2YXIgdGV4dCA9IGUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJylcbiAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0VGV4dCcsIGZhbHNlLCB0ZXh0KVxuICAgICAgICB9KVxuXG5cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXJzIG9uIGFydGljbGUgXG5cbiAgICAgICAgZm9yKGxldCBrPTA7azxjb250ZW50Lmxlbmd0aDtrKyspe1xuICAgICAgICAgICAgY29udGVudFtrXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29udGVudFtrXS5pZClcbiAgICAgICAgICAgIH0pXG5cblxuXG5cbiAgICAgICAgfVxuICAgICBcbiAgICAgICAgICAgIGFydGljbGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLChlKT0+e1xuICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBpZigoZS5pbnB1dFR5cGU9PVwiaW5zZXJ0UGFyYWdyYXBoXCIgfHwgZS5kYXRhID09IG51bGwpICYmIHRoaXMucHJvcHMuRm9udD09XCJibG9nLWNvbnRlbnRcIil7XG5cblxuICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDtqPGFydGljbGUuY2hpbGRFbGVtZW50Q291bnQ7aisrKXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihqIT09MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXJ0aWNsZS5jaGlsZHJlbltqXS5pZD09YXJ0aWNsZS5jaGlsZHJlbltqLTFdLmlkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXJ0aWNsZS5jaGlsZHJlbltqXS5pbm5lclRleHQudHJpbSgpICE9PVwiXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5jaGlsZHJlbltqXS5pZD1gRiR7YXJ0aWNsZS5jaGlsZHJlbltqXS5pZH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuY2hpbGRyZW5bal0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnRpY2xlLmNoaWxkcmVuW2pdLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5jaGlsZHJlbltqLTFdLmlkPWBCJHthcnRpY2xlLmNoaWxkcmVuW2otMV0uaWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZEluZD10aGlzLnN0YXRlLklEX2luZGV4KzFcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElEX2luZGV4OiBpZEluZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmNoaWxkcmVuW2pdLmlkPSBpZEluZFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGs9MDtrPGNvbnRlbnQubGVuZ3RoO2srKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50W2tdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50W2tdLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG5cbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIFxuICAgIFxuICAgIFxuICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICBpZihhcnRpY2xlLmZpcnN0Q2hpbGQuaW5uZXJUZXh0LnRyaW0oKS5sZW5ndGg9PTApe1xuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmZpcnN0Q2hpbGQuaW5uZXJUZXh0PVwiflwiXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgXG4gICAgXG4gICAgICAgIFxuICAgIFxuICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgIFxuICAgXG5cbiAgICAgICBcblxuIFxuICAgIFxuXG4gICAgICBcbiAgICB9XG5cbiAgICBcblxuICAgIHJlbmRlcigpIHsgXG4gICAgICBcbiAgICAgICAgcmV0dXJuICggIFxuICAgICAgICAgICAgPD5cbiAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiICAgY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiICA+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvZy1jb250ZW50JyBpZD1cIjFcIiAgY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIERpc3BhdGNoIG9uIG5leHQuanMgcmVkdXggdmVzaW9uIDIuMi4wMi52c1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxDb250cm9sYmFyLz5cblxuICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuIFxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgIFxuICAgICAgICBGb250OnN0YXRlLkVkaXQuRm9udCxcbiAgICAgICAgSW5zZXJ0OnN0YXRlLkVkaXQuSW5zZXJ0XG5cblxuICAgIH1cbn1cblxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBTZXQ6IChkaXYpID0+IGRpc3BhdGNoKGFjdGlvbnMuU2VsZWN0U3VjY2VzcyhkaXYpKSxcbiAgICAgICAgXG4gIFxuXG4gICAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBXcml0aW5nO1xuZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoV3JpdGluZykpXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSU1QT1JUUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG4vLyBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuLy8gaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2F1dGgnO1xuXG5cblxuXG5cbi8vIGF4aW9zLmRlZmF1bHRzLnhzcmZIZWFkZXJOYW1lID0gXCJYLUNTUkZUT0tFTlwiO1xuLy8gYXhpb3MuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUgPSBcImNzcmZ0b2tlblwiO1xuXG5cblxuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tX19SRURVWC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgSldUOiBzdGF0ZS5qd3QsXG4gICAgXG5cbi8vICAgICB9XG4vLyB9XG5cbi8vIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIGRlY29kZTogKEpXVCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5hdXRoSldUKEpXVCkpLFxuLy8gICAgICAgICBDaGVja1VzZXI6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMuYXV0aENoZWNrU3RhdGUoKSksXG5cbi8vICAgICB9XG4vLyB9XG5cbi8vIC8vIGV4cG9ydCBkZWZhdWx0IFdyaXRpbmdcbi8vIGV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFdyaXRpbmcpKVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29udHJvbGJhciIsImNvbm5lY3QiLCJhY3Rpb25zIiwiV3JpdGluZyIsInJlbmRlciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRlbnRFZGl0YWJsZSIsImlkIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiQ29udGVudEVsZW1lbnQiLCJhY3RpdmUiLCJGb250IiwiSURfaW5kZXgiLCJzZWxlY3RlZCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImFydGljbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjaGVjayIsImNvbnNvbGUiLCJsb2ciLCJJbnNlcnQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbnRlbnQiLCJjZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0IiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJleGVjQ29tbWFuZCIsImsiLCJsZW5ndGgiLCJpbnB1dFR5cGUiLCJkYXRhIiwiaiIsImNoaWxkRWxlbWVudENvdW50IiwiY2hpbGRyZW4iLCJpbm5lclRleHQiLCJ0cmltIiwiaWRJbmQiLCJzZXRTdGF0ZSIsImZpcnN0Q2hpbGQiLCJzZWxlY3RlZERpdlJlZHV4IiwiU2V0IiwibWFwU3RhdGVUb1Byb3BzIiwiRWRpdCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiU2VsZWN0U3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Writing.js\n"));

/***/ })

});