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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/components/Controlbar */ \"./public/components/Controlbar.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/Editing */ \"./store/actions/Editing.js\");\n\n\n\n\n\nclass Writing extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article\",\n                    contentEditable: \"true\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blog-content\",\n                        id: \"1\",\n                        contentEditable: \"true\",\n                        children: \"This is part 1 This is part 2 This is part 3\"\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                        lineNumber: 251,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 249,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 261,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            ContentElement: null,\n            active: this.props.Font,\n            ID_index: 1,\n            selected: null\n        };\n        // }\n        this.componentDidUpdate = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let check = document.getElementsByClassName(\"blog-content\");\n        };\n        this.componentDidMount = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let content = document.getElementsByClassName(\"blog-content\");\n            // ----------------------------------------\n            // To stop HTML from breaking if user pastes some text other than writing it\n            var ce = article;\n            ce.addEventListener(\"paste\", function(e) {\n                e.preventDefault();\n                var text = e.clipboardData.getData(\"text/plain\");\n                document.execCommand(\"insertText\", false, text);\n            });\n            // ------------------------------------\n            // ----------------------------------------------\n            // Event listeners on article \n            this.setState({\n                ContentElement: article.cloneNode(true)\n            });\n            article.addEventListener(\"input\", (e)=>{\n                if (e.inputType == \"insertParagraph\") {\n                    this.setState({\n                        ContentElement: document.getElementsByClassName(\"article\")[0].cloneNode(true)\n                    });\n                    for(let j = 0; j < article.childElementCount; j++){\n                        if (j !== 0) {\n                            if (article.children[j].id == article.children[j - 1].id) {\n                                if (article.children[j].innerText.trim() !== \"\") {\n                                    article.children[j].id = \"F\".concat(article.children[j].id);\n                                    article.children[j - 1].id = \"B\".concat(article.children[j - 1].id);\n                                    this.setState({\n                                        ContentElement: document.getElementsByClassName(\"article\")[0].cloneNode(true)\n                                    }, ()=>{\n                                        console.log(\"state done\");\n                                    });\n                                } else {\n                                    var idInd = this.state.ID_index + 1;\n                                    this.setState({\n                                        ID_index: idInd\n                                    });\n                                    article.children[j].id = idInd;\n                                    this.setState({\n                                        ContentElement: document.getElementsByClassName(\"article\")[0].cloneNode(true)\n                                    }, ()=>{\n                                        console.log(\"state done\");\n                                    });\n                                }\n                            }\n                        }\n                    }\n                }\n                if (e.inputType == \"insertText\") {\n                    console.log(e.inputType);\n                    let jeff = document;\n                    if (e.inputType == \"insertText\") {\n                        console.log(\"this next js baaler programme is completely drunk and it is broke motherfucker\");\n                    }\n                    console.log(e);\n                    console.log(this.state.ContentElement);\n                    for(let k = 0; k < article.children.length; k++){\n                        console.log(article.children[k]);\n                        console.log(this.state.ContentElement.childElementCount);\n                        console.log(this.state.ContentElement.children[k]);\n                        // try{\n                        if (article.children[k].innerText !== this.state.ContentElement.children[k].innerText) {\n                            console.log(article.children[k].id);\n                            this.setState({\n                                ContentElement: jeff.getElementsByClassName(\"article\")[0].cloneNode(true)\n                            }, ()=>{\n                                console.log(\"state done\");\n                            });\n                        }\n                    }\n                // }\n                }\n                // if(e.inputType!==\"insertParagraph\"){\n                //         // this.setState({\n                //         //     ContentElement:jeff.getElementsByClassName(\"article\")[0].cloneNode(true)\n                //         // },()=>{\n                //         //     console.log(\"Chacha done\")\n                //         // })\n                // }\n                // else{\n                //     this.setState({\n                //         ContentElement:document.getElementsByClassName(\"article\")[0].cloneNode(true)\n                //     },()=>{\n                //         console.log(\"Chacha done\")\n                //     })\n                // }\n                if (article.firstChild.innerText.trim().length == 0) {\n                    article.firstChild.innerText = \"~\";\n                }\n            // Breaking paragraph and organising ID \n            // --------------------cursor_function---------------\n            });\n        // -----------------------------------------------\n        // for(i=0;i<content.length;i++){\n        //     content[i].addEventListener()\n        // }\n        };\n        // this.heading = this.heading.bind(this);\n        // this.componentDidMount=this.componentDidMount.bind(this)\n        this.selectedDivRedux = (div)=>{\n            this.props.Set(div);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        Font: state.Edit.Font\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Set: (div)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__.SelectSuccess(div))\n    };\n};\n// export default Writing;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Writing));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXUixVQUFVQyxPQUFPTSxVQUFRLEdBQUU7b0JBQzdDM0IsUUFBUTRCLFdBQVdSLFlBQVU7Z0JBR2pDO1lBRUEsd0NBQXdDO1lBRWhDLHFEQUFxRDtZQVFqRTtRQVFKLGtEQUFrRDtRQUVsRCxpQ0FBaUM7UUFDakMsb0NBQW9DO1FBQ3BDLElBQUk7UUFNUjtRQW5PSSwwQ0FBMEM7UUFDMUMsMkRBQTJEO1FBRTNELElBQUksQ0FBQ1MsbUJBQWlCLENBQUMxQztZQUNuQixJQUFJLENBQUNLLE1BQU1zQyxJQUFJM0M7UUFDbkI7SUFLSjtBQXFQSjtBQUlBLE1BQU00QyxrQkFBa0IsQ0FBQ3RDO0lBQ3JCLE9BQU87UUFFSEcsTUFBS0gsTUFBTXVDLEtBQUtwQztJQUdwQjtBQUNKO0FBR0EsTUFBTXFDLHFCQUFxQixDQUFDQztJQUN4QixPQUFPO1FBQ0hKLEtBQUssQ0FBQzNDLE1BQVErQyxTQUFTbEQsaUVBQXFCbUQsQ0FBQ2hEO0lBSWpEO0FBQ0o7QUFFQSwwQkFBMEI7QUFDMUIsK0RBQWdCSixvREFBT0EsQ0FBQ2dELGlCQUFnQkUsb0JBQW9CaEQsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Xcml0aW5nLmpzP2YxYWQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29udHJvbGJhciBmcm9tICcuLi9wdWJsaWMvY29tcG9uZW50cy9Db250cm9sYmFyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvRWRpdGluZydcbmNsYXNzIFdyaXRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvLyB0aGlzLmhlYWRpbmcgPSB0aGlzLmhlYWRpbmcuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5jb21wb25lbnREaWRNb3VudD10aGlzLmNvbXBvbmVudERpZE1vdW50LmJpbmQodGhpcylcblxuICAgICAgICB0aGlzLnNlbGVjdGVkRGl2UmVkdXg9KGRpdik9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuU2V0KGRpdilcbiAgICAgICAgfVxuXG5cblxuXG4gICAgfVxuXG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgQ29udGVudEVsZW1lbnQ6bnVsbCxcbiAgICAgICAgYWN0aXZlOnRoaXMucHJvcHMuRm9udCxcbiAgICAgICAgSURfaW5kZXg6MSxcbiAgICAgICAgc2VsZWN0ZWQ6bnVsbFxuXG4gICAgICB9XG5cblxuXG4gICAgLy8gfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlPSgpPT57XG4gICAgICAgIGxldCBhcnRpY2xlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdXG4gICAgICAgIGxldCBjaGVjaz1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxvZy1jb250ZW50XCIpXG4gICAgICAgIFxuXG4gICAgICAgXG5cblxuXG4gICAgICAgIFxuXG4gXG4gICBcbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50RGlkTW91bnQ9KCk9PntcbiAgICAgICAgbGV0IGFydGljbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFydGljbGVcIilbMF1cbiAgICAgICAgbGV0IGNvbnRlbnQ9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJsb2ctY29udGVudFwiKVxuXG4gIFxuXG4gICAgICAgXG5cblxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gVG8gc3RvcCBIVE1MIGZyb20gYnJlYWtpbmcgaWYgdXNlciBwYXN0ZXMgc29tZSB0ZXh0IG90aGVyIHRoYW4gd3JpdGluZyBpdFxuXG4gICAgICAgIHZhciBjZSA9IGFydGljbGVcbiAgICAgICAgY2UuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHZhciB0ZXh0ID0gZS5jbGlwYm9hcmREYXRhLmdldERhdGEoJ3RleHQvcGxhaW4nKVxuICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRUZXh0JywgZmFsc2UsIHRleHQpXG4gICAgICAgIH0pXG5cblxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lcnMgb24gYXJ0aWNsZSBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBDb250ZW50RWxlbWVudDogYXJ0aWNsZS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIGFydGljbGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLChlKT0+e1xuICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBpZihlLmlucHV0VHlwZT09XCJpbnNlcnRQYXJhZ3JhcGhcIil7XG5cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnRlbnRFbGVtZW50OmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDtqPGFydGljbGUuY2hpbGRFbGVtZW50Q291bnQ7aisrKXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihqIT09MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXJ0aWNsZS5jaGlsZHJlbltqXS5pZD09YXJ0aWNsZS5jaGlsZHJlbltqLTFdLmlkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXJ0aWNsZS5jaGlsZHJlbltqXS5pbm5lclRleHQudHJpbSgpICE9PVwiXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5jaGlsZHJlbltqXS5pZD1gRiR7YXJ0aWNsZS5jaGlsZHJlbltqXS5pZH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmNoaWxkcmVuW2otMV0uaWQ9YEIke2FydGljbGUuY2hpbGRyZW5bai0xXS5pZH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250ZW50RWxlbWVudDpkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXJ0aWNsZVwiKVswXS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXRlIGRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWRJbmQ9dGhpcy5zdGF0ZS5JRF9pbmRleCsxXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJRF9pbmRleDogaWRJbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5jaGlsZHJlbltqXS5pZD0gaWRJbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRlbnRFbGVtZW50OmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGUgZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoZS5pbnB1dFR5cGU9PVwiaW5zZXJ0VGV4dFwiKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5pbnB1dFR5cGUpXG4gICAgICAgICAgICAgICAgICAgIGxldCBqZWZmPWRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIGlmKGUuaW5wdXRUeXBlPT1cImluc2VydFRleHRcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgbmV4dCBqcyBiYWFsZXIgcHJvZ3JhbW1lIGlzIGNvbXBsZXRlbHkgZHJ1bmsgYW5kIGl0IGlzIGJyb2tlIG1vdGhlcmZ1Y2tlclwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLkNvbnRlbnRFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaz0wO2s8YXJ0aWNsZS5jaGlsZHJlbi5sZW5ndGg7aysrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnRpY2xlLmNoaWxkcmVuW2tdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuQ29udGVudEVsZW1lbnQuY2hpbGRFbGVtZW50Q291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5Db250ZW50RWxlbWVudC5jaGlsZHJlbltrXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0cnl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXJ0aWNsZS5jaGlsZHJlbltrXS5pbm5lclRleHQhPT10aGlzLnN0YXRlLkNvbnRlbnRFbGVtZW50LmNoaWxkcmVuW2tdLmlubmVyVGV4dCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnRpY2xlLmNoaWxkcmVuW2tdLmlkKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGVudEVsZW1lbnQ6amVmZi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXJ0aWNsZVwiKVswXS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0ZSBkb25lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICBcbiAgICAgICBcblxuICAgICAgICAgICAgICAgIC8vIGlmKGUuaW5wdXRUeXBlIT09XCJpbnNlcnRQYXJhZ3JhcGhcIil7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vICAgICBDb250ZW50RWxlbWVudDpqZWZmLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gfSwoKT0+e1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiQ2hhY2hhIGRvbmVcIilcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIGVsc2V7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgQ29udGVudEVsZW1lbnQ6ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFydGljbGVcIilbMF0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgICAgLy8gICAgIH0sKCk9PntcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhY2hhIGRvbmVcIilcbiAgICAgICAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgIFxuICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGFydGljbGUuZmlyc3RDaGlsZC5pbm5lclRleHQudHJpbSgpLmxlbmd0aD09MCl7XG4gICAgICAgICAgICAgICAgICAgIGFydGljbGUuZmlyc3RDaGlsZC5pbm5lclRleHQ9XCJ+XCJcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBCcmVha2luZyBwYXJhZ3JhcGggYW5kIG9yZ2FuaXNpbmcgSUQgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLWN1cnNvcl9mdW5jdGlvbi0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgICAgIFxuICAgIFxuICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgIFxuICAgXG5cbiAgICAgICBcblxuIFxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgIC8vIGZvcihpPTA7aTxjb250ZW50Lmxlbmd0aDtpKyspe1xuICAgICAgICAvLyAgICAgY29udGVudFtpXS5hZGRFdmVudExpc3RlbmVyKClcbiAgICAgICAgLy8gfVxuXG4gICAgICAgXG5cblxuICAgICAgXG4gICAgfVxuXG4gICAgXG5cbiAgICByZW5kZXIoKSB7IFxuICAgICAgXG4gICAgICAgIHJldHVybiAoICBcbiAgICAgICAgICAgIDw+XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVcIiAgIGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIiAgPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2ctY29udGVudCcgaWQ9XCIxXCIgIGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICBUaGlzIGlzIHBhcnQgMSBUaGlzIGlzIHBhcnQgMiBUaGlzIGlzIHBhcnQgM1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8Q29udHJvbGJhci8+XG5cbiAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn1cbiBcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICBcbiAgICAgICAgRm9udDpzdGF0ZS5FZGl0LkZvbnRcblxuXG4gICAgfVxufVxuXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIFNldDogKGRpdikgPT4gZGlzcGF0Y2goYWN0aW9ucy5TZWxlY3RTdWNjZXNzKGRpdikpLFxuICAgICAgICBcbiAgXG5cbiAgICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFdyaXRpbmc7XG5leHBvcnQgZGVmYXVsdCAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShXcml0aW5nKSlcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1JTVBPUlRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbi8vIGltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG4vLyBpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvYXV0aCc7XG5cblxuXG5cblxuLy8gYXhpb3MuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSBcIlgtQ1NSRlRPS0VOXCI7XG4vLyBheGlvcy5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9IFwiY3NyZnRva2VuXCI7XG5cblxuXG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1fX1JFRFVYLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBKV1Q6IHN0YXRlLmp3dCxcbiAgICBcblxuLy8gICAgIH1cbi8vIH1cblxuLy8gY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgZGVjb2RlOiAoSldUKSA9PiBkaXNwYXRjaChhY3Rpb25zLmF1dGhKV1QoSldUKSksXG4vLyAgICAgICAgIENoZWNrVXNlcjogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5hdXRoQ2hlY2tTdGF0ZSgpKSxcblxuLy8gICAgIH1cbi8vIH1cblxuLy8gLy8gZXhwb3J0IGRlZmF1bHQgV3JpdGluZ1xuLy8gZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoV3JpdGluZykpXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDb250cm9sYmFyIiwiY29ubmVjdCIsImFjdGlvbnMiLCJXcml0aW5nIiwicmVuZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGVudEVkaXRhYmxlIiwiaWQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJDb250ZW50RWxlbWVudCIsImFjdGl2ZSIsIkZvbnQiLCJJRF9pbmRleCIsInNlbGVjdGVkIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiYXJ0aWNsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNoZWNrIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb250ZW50IiwiY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGV4dCIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwiZXhlY0NvbW1hbmQiLCJzZXRTdGF0ZSIsImNsb25lTm9kZSIsImlucHV0VHlwZSIsImoiLCJjaGlsZEVsZW1lbnRDb3VudCIsImNoaWxkcmVuIiwiaW5uZXJUZXh0IiwidHJpbSIsImNvbnNvbGUiLCJsb2ciLCJpZEluZCIsImplZmYiLCJrIiwibGVuZ3RoIiwiZmlyc3RDaGlsZCIsInNlbGVjdGVkRGl2UmVkdXgiLCJTZXQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJFZGl0IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJTZWxlY3RTdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Writing.js\n"));

/***/ })

});