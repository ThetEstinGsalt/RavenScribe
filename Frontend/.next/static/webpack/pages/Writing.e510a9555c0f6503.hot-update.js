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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/components/Controlbar */ \"./public/components/Controlbar.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/Editing */ \"./store/actions/Editing.js\");\n\n\n\n\n\nclass Writing extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article\",\n                    contentEditable: \"true\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blog-content\",\n                        id: \"1\",\n                        contentEditable: \"true\",\n                        children: \"Dispatch on next.js redux vesion 2.2.02.vs\"\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                        lineNumber: 267,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 265,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 278,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            ContentElement: null,\n            active: this.props.Font,\n            ID_index: 1,\n            selected: null,\n            clicked: \"blog-content\"\n        };\n        // }\n        this.componentDidUpdate = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let check = document.getElementsByClassName(\"article\")[0].children;\n            let selected = document.getElementById(this.state.selected);\n            console.log(selected);\n            for(let j = 0; j < check.length; j++){\n                check[j].classList.remove(\"SelectedDiv\");\n            }\n            if (this.state.selected !== null) {\n                let selected = document.getElementById(this.state.selected);\n                console.log(this.state.selected);\n                selected.classList.add(\"SelectedDiv\");\n            } else {\n                for(let j = 0; j < check.length; j++){\n                    check[j].classList.remove(\"SelectedDiv\");\n                }\n            }\n            console.log(\"changed prop\");\n            if (this.props.Font !== this.state.clicked) {\n                let NewElem = document.createElement(\"div\");\n                console.log(this.props.Font);\n                if (this.props.Font.includes(\"-\")) {\n                    NewElem.className = this.props.Font.toString().split(\"-\")[0];\n                } else {\n                    NewElem.className = this.props.Font;\n                }\n                NewElem.innerText = \"Your Heading\";\n                article.insertBefore(NewElem, selected);\n                this.setState({\n                    clicked: this.props.Font\n                });\n            }\n        // let Font=this.props.Font\n        };\n        this.componentDidMount = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let content = document.getElementsByClassName(\"article\")[0].children;\n            // ----------------------------------------\n            // To stop HTML from breaking if user pastes some text other than writing it\n            var ce = article;\n            ce.addEventListener(\"paste\", function(e) {\n                e.preventDefault();\n                var text = e.clipboardData.getData(\"text/plain\");\n                document.execCommand(\"insertText\", false, text);\n            });\n            // ------------------------------------\n            // ----------------------------------------------\n            // Event listeners on article \n            for(let k = 0; k < content.length; k++){\n                content[k].onclick = ()=>{\n                    this.setState({\n                        selected: content[k].id\n                    });\n                };\n            }\n            article.addEventListener(\"input\", (e)=>{\n                if ((e.inputType == \"insertParagraph\" || e.data == null) && this.props.Font == \"blog-content\") {\n                    for(let j = 0; j < article.childElementCount; j++){\n                        if (j !== 0) {\n                            if (article.children[j].id == article.children[j - 1].id) {\n                                if (article.children[j].innerText.trim() !== \"\") {\n                                    article.children[j].id = \"F\".concat(article.children[j].id);\n                                    article.children[j - 1].id = \"B\".concat(article.children[j - 1].id);\n                                } else {\n                                    var idInd = this.state.ID_index + 1;\n                                    this.setState({\n                                        ID_index: idInd\n                                    });\n                                    article.children[j].id = idInd;\n                                }\n                                this.setState({\n                                    selected: null\n                                });\n                                for(let k = 0; k < content.length; k++){\n                                    content[k].onclick = ()=>{\n                                        this.setState({\n                                            selected: content[k].id\n                                        });\n                                    };\n                                }\n                            }\n                        }\n                    }\n                } else {}\n                if (article.firstChild.innerText.trim().length == 0) {\n                    article.firstChild.innerText = \"~\";\n                }\n            });\n        };\n        // this.heading = this.heading.bind(this);\n        // this.componentDidMount=this.componentDidMount.bind(this)\n        this.selectedDivRedux = (div)=>{\n            this.props.Set(div);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        Font: state.Edit.Font,\n        Insert: state.Edit.Insert\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Set: (div)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__.SelectSuccess(div))\n    };\n};\n// export default Writing;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Writing));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDVnZCLFVBQVN5QixPQUFPLENBQUNTLEVBQUUsQ0FBQzFDO3dDQUN4QjtvQ0FDSjtnQ0FNSjs0QkFNSjt3QkFFSjtvQkFBQztnQkFHVCxPQUNJLENBUUs7Z0JBUVQsSUFBR1csUUFBUXNDLFdBQVdwQixVQUFVa0IsT0FBTzNCLFVBQVEsR0FBRTtvQkFDN0NULFFBQVFzQyxXQUFXcEIsWUFBVTtnQkFHakM7WUFNSjtRQVdSO1FBblBJLDBDQUEwQztRQUMxQywyREFBMkQ7UUFFM0QsSUFBSSxDQUFDcUIsbUJBQWlCLENBQUNyRDtZQUNuQixJQUFJLENBQUNLLE1BQU1pRCxJQUFJdEQ7UUFDbkI7SUFLSjtBQXNRSjtBQUlBLE1BQU11RCxrQkFBa0IsQ0FBQ2pEO0lBQ3JCLE9BQU87UUFFSEcsTUFBS0gsTUFBTWtELEtBQUsvQztRQUNoQmdELFFBQU9uRCxNQUFNa0QsS0FBS0M7SUFJdEI7QUFDSjtBQUdBLE1BQU1DLHFCQUFxQixDQUFDQztJQUN4QixPQUFPO1FBQ0hMLEtBQUssQ0FBQ3RELE1BQVEyRCxTQUFTOUQsaUVBQXFCK0QsQ0FBQzVEO0lBSWpEO0FBQ0o7QUFFQSwwQkFBMEI7QUFDMUIsK0RBQWdCSixvREFBT0EsQ0FBQzJELGlCQUFnQkcsb0JBQW9CNUQsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Xcml0aW5nLmpzP2YxYWQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29udHJvbGJhciBmcm9tICcuLi9wdWJsaWMvY29tcG9uZW50cy9Db250cm9sYmFyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvRWRpdGluZydcbmNsYXNzIFdyaXRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvLyB0aGlzLmhlYWRpbmcgPSB0aGlzLmhlYWRpbmcuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5jb21wb25lbnREaWRNb3VudD10aGlzLmNvbXBvbmVudERpZE1vdW50LmJpbmQodGhpcylcblxuICAgICAgICB0aGlzLnNlbGVjdGVkRGl2UmVkdXg9KGRpdik9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuU2V0KGRpdilcbiAgICAgICAgfVxuXG5cblxuXG4gICAgfVxuXG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgQ29udGVudEVsZW1lbnQ6bnVsbCxcbiAgICAgICAgYWN0aXZlOnRoaXMucHJvcHMuRm9udCxcbiAgICAgICAgSURfaW5kZXg6MSxcbiAgICAgICAgc2VsZWN0ZWQ6bnVsbCxcbiAgICAgICAgY2xpY2tlZDonYmxvZy1jb250ZW50J1xuXG5cbiAgICAgIH1cblxuXG5cbiAgICAvLyB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGU9KCk9PntcbiAgICAgICAgbGV0IGFydGljbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFydGljbGVcIilbMF1cbiAgICAgICAgbGV0IGNoZWNrPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdLmNoaWxkcmVuXG4gICAgICAgIGxldCBzZWxlY3RlZD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnN0YXRlLnNlbGVjdGVkKVxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZClcbiAgICAgICAgZm9yKGxldCBqPTA7ajxjaGVjay5sZW5ndGg7aisrKXtcbiAgICAgICAgICAgIGNoZWNrW2pdLmNsYXNzTGlzdC5yZW1vdmUoXCJTZWxlY3RlZERpdlwiKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZCE9PW51bGwpe1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc3RhdGUuc2VsZWN0ZWQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNlbGVjdGVkKVxuICAgICAgICAgICAgc2VsZWN0ZWQuY2xhc3NMaXN0LmFkZChcIlNlbGVjdGVkRGl2XCIpXG5cblxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPGNoZWNrLmxlbmd0aDtqKyspe1xuICAgICAgICAgICAgICAgIGNoZWNrW2pdLmNsYXNzTGlzdC5yZW1vdmUoXCJTZWxlY3RlZERpdlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZWQgcHJvcFwiKVxuXG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLnByb3BzLkZvbnQhPT10aGlzLnN0YXRlLmNsaWNrZWQpe1xuICAgICAgICAgICAgbGV0IE5ld0VsZW09ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5Gb250KVxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5Gb250LmluY2x1ZGVzKFwiLVwiKSl7XG4gICAgICAgICAgICAgICAgTmV3RWxlbS5jbGFzc05hbWU9KHRoaXMucHJvcHMuRm9udCkudG9TdHJpbmcoKS5zcGxpdChcIi1cIilbMF1cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIE5ld0VsZW0uY2xhc3NOYW1lPXRoaXMucHJvcHMuRm9udFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBOZXdFbGVtLmlubmVyVGV4dD1cIllvdXIgSGVhZGluZ1wiXG4gICAgICAgICAgICBhcnRpY2xlLmluc2VydEJlZm9yZShOZXdFbGVtLHNlbGVjdGVkKVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjbGlja2VkOnRoaXMucHJvcHMuRm9udFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG5cbiAgIFxuICAgICBcbiAgICAgXG5cbiAgICAgICAgLy8gbGV0IEZvbnQ9dGhpcy5wcm9wcy5Gb250XG5cblxuXG4gICAgICAgIFxuXG5cblxuICAgICBcbiAgICAgICAgXG5cbiAgICAgICBcblxuXG5cbiAgICAgICAgXG5cbiBcbiAgIFxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnREaWRNb3VudD0oKT0+e1xuICAgICAgICBsZXQgYXJ0aWNsZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXJ0aWNsZVwiKVswXVxuICAgICAgICBsZXQgY29udGVudD1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXJ0aWNsZVwiKVswXS5jaGlsZHJlblxuXG4gIFxuXG4gICAgICAgXG5cblxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gVG8gc3RvcCBIVE1MIGZyb20gYnJlYWtpbmcgaWYgdXNlciBwYXN0ZXMgc29tZSB0ZXh0IG90aGVyIHRoYW4gd3JpdGluZyBpdFxuXG4gICAgICAgIHZhciBjZSA9IGFydGljbGVcbiAgICAgICAgY2UuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHZhciB0ZXh0ID0gZS5jbGlwYm9hcmREYXRhLmdldERhdGEoJ3RleHQvcGxhaW4nKVxuICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRUZXh0JywgZmFsc2UsIHRleHQpXG4gICAgICAgIH0pXG5cblxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lcnMgb24gYXJ0aWNsZSBcblxuICAgICAgICBmb3IobGV0IGs9MDtrPGNvbnRlbnQubGVuZ3RoO2srKyl7XG5cbiAgICAgICAgICAgIGNvbnRlbnRba10ub25jbGljaz0oKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDpjb250ZW50W2tdLmlkXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgXG5cblxuXG5cbiAgICAgICAgfVxuICAgICBcbiAgICAgICAgICAgIGFydGljbGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLChlKT0+e1xuICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBpZigoZS5pbnB1dFR5cGU9PVwiaW5zZXJ0UGFyYWdyYXBoXCIgfHwgZS5kYXRhID09IG51bGwpICYmIHRoaXMucHJvcHMuRm9udD09XCJibG9nLWNvbnRlbnRcIil7XG5cblxuICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDtqPGFydGljbGUuY2hpbGRFbGVtZW50Q291bnQ7aisrKXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihqIT09MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXJ0aWNsZS5jaGlsZHJlbltqXS5pZD09YXJ0aWNsZS5jaGlsZHJlbltqLTFdLmlkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXJ0aWNsZS5jaGlsZHJlbltqXS5pbm5lclRleHQudHJpbSgpICE9PVwiXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5jaGlsZHJlbltqXS5pZD1gRiR7YXJ0aWNsZS5jaGlsZHJlbltqXS5pZH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmNoaWxkcmVuW2otMV0uaWQ9YEIke2FydGljbGUuY2hpbGRyZW5bai0xXS5pZH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkSW5kPXRoaXMuc3RhdGUuSURfaW5kZXgrMVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSURfaW5kZXg6IGlkSW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuY2hpbGRyZW5bal0uaWQ9IGlkSW5kXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6bnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGs9MDtrPGNvbnRlbnQubGVuZ3RoO2srKyl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRba10ub25jbGljaz0oKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDpjb250ZW50W2tdLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuXG4gICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBcbiAgICBcbiAgICBcbiAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgaWYoYXJ0aWNsZS5maXJzdENoaWxkLmlubmVyVGV4dC50cmltKCkubGVuZ3RoPT0wKXtcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5maXJzdENoaWxkLmlubmVyVGV4dD1cIn5cIlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgIFxuICAgIFxuICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICBcbiAgIFxuXG4gICAgICAgXG5cbiBcbiAgICBcblxuICAgICAgXG4gICAgfVxuXG4gICAgXG5cbiAgICByZW5kZXIoKSB7IFxuICAgICAgXG4gICAgICAgIHJldHVybiAoICBcbiAgICAgICAgICAgIDw+XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVcIiAgIGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIiAgPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2ctY29udGVudCcgaWQ9XCIxXCIgIGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICBEaXNwYXRjaCBvbiBuZXh0LmpzIHJlZHV4IHZlc2lvbiAyLjIuMDIudnNcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgXG4gICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8Q29udHJvbGJhci8+XG5cbiAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn1cbiBcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICBcbiAgICAgICAgRm9udDpzdGF0ZS5FZGl0LkZvbnQsXG4gICAgICAgIEluc2VydDpzdGF0ZS5FZGl0Lkluc2VydCxcblxuXG5cbiAgICB9XG59XG5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgU2V0OiAoZGl2KSA9PiBkaXNwYXRjaChhY3Rpb25zLlNlbGVjdFN1Y2Nlc3MoZGl2KSksXG4gICAgICAgIFxuICBcblxuICAgIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgV3JpdGluZztcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFdyaXRpbmcpKVxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUlNUE9SVFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuLy8gaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4Jztcbi8vIGltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9hdXRoJztcblxuXG5cblxuXG4vLyBheGlvcy5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSA9IFwiWC1DU1JGVE9LRU5cIjtcbi8vIGF4aW9zLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gXCJjc3JmdG9rZW5cIjtcblxuXG5cblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLV9fUkVEVVgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIEpXVDogc3RhdGUuand0LFxuICAgIFxuXG4vLyAgICAgfVxuLy8gfVxuXG4vLyBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBkZWNvZGU6IChKV1QpID0+IGRpc3BhdGNoKGFjdGlvbnMuYXV0aEpXVChKV1QpKSxcbi8vICAgICAgICAgQ2hlY2tVc2VyOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmF1dGhDaGVja1N0YXRlKCkpLFxuXG4vLyAgICAgfVxuLy8gfVxuXG4vLyAvLyBleHBvcnQgZGVmYXVsdCBXcml0aW5nXG4vLyBleHBvcnQgZGVmYXVsdCAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShXcml0aW5nKSlcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbnRyb2xiYXIiLCJjb25uZWN0IiwiYWN0aW9ucyIsIldyaXRpbmciLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250ZW50RWRpdGFibGUiLCJpZCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsIkNvbnRlbnRFbGVtZW50IiwiYWN0aXZlIiwiRm9udCIsIklEX2luZGV4Iiwic2VsZWN0ZWQiLCJjbGlja2VkIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiYXJ0aWNsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNoZWNrIiwiY2hpbGRyZW4iLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJqIiwibGVuZ3RoIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiTmV3RWxlbSIsImNyZWF0ZUVsZW1lbnQiLCJpbmNsdWRlcyIsInRvU3RyaW5nIiwic3BsaXQiLCJpbm5lclRleHQiLCJpbnNlcnRCZWZvcmUiLCJzZXRTdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29udGVudCIsImNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImV4ZWNDb21tYW5kIiwiayIsIm9uY2xpY2siLCJpbnB1dFR5cGUiLCJkYXRhIiwiY2hpbGRFbGVtZW50Q291bnQiLCJ0cmltIiwiaWRJbmQiLCJmaXJzdENoaWxkIiwic2VsZWN0ZWREaXZSZWR1eCIsIlNldCIsIm1hcFN0YXRlVG9Qcm9wcyIsIkVkaXQiLCJJbnNlcnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIlNlbGVjdFN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Writing.js\n"));

/***/ })

});