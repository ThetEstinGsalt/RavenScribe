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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/components/Controlbar */ \"./public/components/Controlbar.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/Editing */ \"./store/actions/Editing.js\");\n\n\n\n\n\nclass Writing extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article\",\n                    contentEditable: \"true\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blog-content\",\n                        id: \"1\",\n                        contentEditable: \"true\",\n                        children: \"This is part 1 This is part 2 This is part 3\"\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                        lineNumber: 239,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 237,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 249,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            ContentElement: null,\n            active: this.props.Font,\n            ID_index: 1,\n            selected: null\n        };\n        // }\n        this.componentDidUpdate = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let check = document.getElementsByClassName(\"blog-content\");\n        };\n        this.componentDidMount = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let content = document.getElementsByClassName(\"blog-content\");\n            // ----------------------------------------\n            // To stop HTML from breaking if user pastes some text other than writing it\n            var ce = article;\n            ce.addEventListener(\"paste\", function(e) {\n                e.preventDefault();\n                var text = e.clipboardData.getData(\"text/plain\");\n                document.execCommand(\"insertText\", false, text);\n            });\n            // ------------------------------------\n            // ----------------------------------------------\n            // Event listeners on article \n            this.setState({\n                ContentElement: article.cloneNode(true)\n            });\n            article.addEventListener(\"input\", (e)=>{\n                if ((e.inputType == \"insertParagraph\" || e.data == null) && this.props.Font == \"blog-content\") {\n                    for(let j = 0; j < article.childElementCount; j++){\n                        if (j !== 0) {\n                            if (article.children[j].id == article.children[j - 1].id) {\n                                if (article.children[j].innerText.trim() !== \"\") {\n                                    article.children[j].id = \"F\".concat(article.children[j].id);\n                                    article.children[j - 1].id = \"B\".concat(article.children[j - 1].id);\n                                    this.setState({\n                                        ContentElement: document.getElementsByClassName(\"article\")[0].cloneNode(true)\n                                    });\n                                } else {\n                                    var idInd = this.state.ID_index + 1;\n                                    this.setState({\n                                        ID_index: idInd\n                                    });\n                                    article.children[j].id = idInd;\n                                    this.setState({\n                                        ContentElement: document.getElementsByClassName(\"article\")[0].cloneNode(true)\n                                    });\n                                }\n                            }\n                        }\n                    }\n                } else {\n                    for(let k = 0; k < article.children.length; k++){\n                        if (article.children[k].innerText !== this.state.ContentElement.children[k].innerText && this.props.Font !== \"blog-content\") {\n                            console.log(article.children[k].id);\n                            for(let i = 0; i < article.children[k].innerText.length; i++){\n                                if (article.children[k].innerText[i] !== this.state.ContentElement.children[k].innerText[i]) {\n                                    // console.log(article.children[k].innerText[i]\n                                    let NewTextElem = document.createElement(\"div\");\n                                    let FirstSplitElem = document.createElement(\"div\");\n                                    let SecondSplitElem = document.createElement(\"div\");\n                                    NewTextElem.className = this.props.Font;\n                                    NewTextElem.innerText = article.children[k].innerText[i];\n                                    let ElemInnerText = article.children[k].innerText;\n                                    let FirstSplitText = ElemInnerText.substring(0, i);\n                                    let SecondSplitText = ElemInnerText.substring(i + 1);\n                                    if (FirstSplitText.length !== 0) {\n                                        FirstSplitElem.className = article.children[k].className;\n                                        FirstSplitElem.id = \"B\".concat(article.children[k].id);\n                                        FirstSplitElem.innerText = FirstSplitText;\n                                        article.insertBefore(FirstSplitElem, article.children[k]);\n                                    }\n                                    if (SecondSplitElem.length !== 0) {\n                                        SecondSplitElem.className = article.children[k].className;\n                                        SecondSplitElem.id = \"F\".concat(article.children[k].id);\n                                        SecondSplitElem.innerText = SecondSplitText;\n                                        article.insertBefore(SecondSplitElem, article.children[k].nextSibling);\n                                    }\n                                    article.replaceChild(NewTextElem, article.children[k]);\n                                }\n                            }\n                            this.setState({\n                                ContentElement: document.getElementsByClassName(\"article\")[0].cloneNode(true)\n                            });\n                        }\n                    }\n                }\n                if (article.firstChild.innerText.trim().length == 0) {\n                    article.firstChild.innerText = \"~\";\n                }\n            });\n        };\n        // this.heading = this.heading.bind(this);\n        // this.componentDidMount=this.componentDidMount.bind(this)\n        this.selectedDivRedux = (div)=>{\n            this.props.Set(div);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        Font: state.Edit.Font\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Set: (div)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__.SelectSuccess(div))\n    };\n};\n// export default Writing;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Writing));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Xcml0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUl3QztBQUNpQjtBQUNuQjtBQUNhO0FBQ25ELE1BQU1LLGdCQUFnQkosNENBQVNBO0lBK04zQkssU0FBUztRQUVMLHFCQUNJOzs4QkFFQSw4REFBQ0M7b0JBQUlDLFdBQVU7b0JBQVlDLGlCQUFnQjs4QkFFdkMsNEVBQUNGO3dCQUFJQyxXQUFVO3dCQUFlRSxJQUFHO3dCQUFLRCxpQkFBZ0I7a0NBQU87Ozs7Ozs7Ozs7OzhCQVVqRSw4REFBQ1AscUVBQVVBOzs7Ozs7O0lBTW5CO0lBclBBUyxZQUFZQyxLQUFLLENBQUU7UUFDZixLQUFLLENBQUNBO2FBZVZDLFFBQVE7WUFDSkMsZ0JBQWU7WUFDZkMsUUFBTyxJQUFJLENBQUNILE1BQU1JO1lBQ2xCQyxVQUFTO1lBQ1RDLFVBQVM7UUFFWDtRQUlGLElBQUk7YUFFSkMscUJBQW1CO1lBQ2YsSUFBSUMsVUFBUUMsU0FBU0MsdUJBQXVCLFVBQVUsQ0FBQyxFQUFFO1lBQ3pELElBQUlDLFFBQU1GLFNBQVNDLHVCQUF1QjtRQVc5QzthQUVBRSxvQkFBa0I7WUFDZCxJQUFJSixVQUFRQyxTQUFTQyx1QkFBdUIsVUFBVSxDQUFDLEVBQUU7WUFDekQsSUFBSUcsVUFBUUosU0FBU0MsdUJBQXVCO1lBUTVDLDJDQUEyQztZQUMzQyw0RUFBNEU7WUFFNUUsSUFBSUksS0FBS047WUFDVE0sR0FBR0MsaUJBQWlCLFNBQVMsU0FBVUMsQ0FBQztnQkFDdENBLEVBQUVDO2dCQUNGLElBQUlDLE9BQU9GLEVBQUVHLGNBQWNDLFFBQVE7Z0JBQ25DWCxTQUFTWSxZQUFZLGNBQWMsT0FBT0g7WUFDNUM7WUFJQSx1Q0FBdUM7WUFNdkMsaURBQWlEO1lBQ2pELDhCQUE4QjtZQUM5QixJQUFJLENBQUNJLFNBQVM7Z0JBQ1ZwQixnQkFBZ0JNLFFBQVFlLFVBQVU7WUFDdEM7WUFDSWYsUUFBUU8saUJBQWlCLFNBQVEsQ0FBQ0M7Z0JBRzlCLElBQUcsQ0FBQ0EsRUFBRVEsYUFBVyxxQkFBcUJSLEVBQUVTLFFBQVEsSUFBRyxLQUFNLElBQUksQ0FBQ3pCLE1BQU1JLFFBQU0sZ0JBQWU7b0JBSXJGLElBQUksSUFBSXNCLElBQUUsR0FBRUEsSUFBRWxCLFFBQVFtQixtQkFBa0JELElBQUk7d0JBSXhDLElBQUdBLE1BQUksR0FBRTs0QkFDTCxJQUFHbEIsUUFBUW9CLFFBQVEsQ0FBQ0YsRUFBRSxDQUFDNUIsTUFBSVUsUUFBUW9CLFFBQVEsQ0FBQ0YsSUFBRSxFQUFFLENBQUM1QixJQUFHO2dDQUNoRCxJQUFHVSxRQUFRb0IsUUFBUSxDQUFDRixFQUFFLENBQUNHLFVBQVVDLFdBQVUsSUFBRztvQ0FDMUN0QixRQUFRb0IsUUFBUSxDQUFDRixFQUFFLENBQUM1QixLQUFHLElBQTJCLE9BQXZCVSxRQUFRb0IsUUFBUSxDQUFDRixFQUFFLENBQUM1QjtvQ0FDL0NVLFFBQVFvQixRQUFRLENBQUNGLElBQUUsRUFBRSxDQUFDNUIsS0FBRyxJQUE2QixPQUF6QlUsUUFBUW9CLFFBQVEsQ0FBQ0YsSUFBRSxFQUFFLENBQUM1QjtvQ0FDbkQsSUFBSSxDQUFDd0IsU0FBUzt3Q0FDVnBCLGdCQUFlTyxTQUFTQyx1QkFBdUIsVUFBVSxDQUFDLEVBQUUsQ0FBQ2EsVUFBVTtvQ0FDM0U7Z0NBSUosT0FDSTtvQ0FDQSxJQUFJUSxRQUFNLElBQUksQ0FBQzlCLE1BQU1JLFdBQVM7b0NBRTlCLElBQUksQ0FBQ2lCLFNBQVM7d0NBQ1ZqQixVQUFVMEI7b0NBQ2Q7b0NBSUF2QixRQUFRb0IsUUFBUSxDQUFDRixFQUFFLENBQUM1QixLQUFJaUM7b0NBQ3hCLElBQUksQ0FBQ1QsU0FBUzt3Q0FDVnBCLGdCQUFlTyxTQUFTQyx1QkFBdUIsVUFBVSxDQUFDLEVBQUUsQ0FBQ2EsVUFBVTtvQ0FDM0U7Z0NBSUo7NEJBTUo7d0JBQ0o7b0JBQUM7Z0JBRVQsT0FDSTtvQkFNSSxJQUFJLElBQUlTLElBQUUsR0FBRUEsSUFBRXhCLFFBQVFvQixTQUFTSyxRQUFPRCxJQUFJO3dCQUt0QyxJQUFHLFFBQVNKLFFBQVEsQ0FBQ0ksRUFBRSxDQUFDSCxjQUFZLElBQUksQ0FBQzVCLE1BQU1DLGVBQWUwQixRQUFRLENBQUNJLEVBQUUsQ0FBQ0gsYUFBYyxJQUFJLENBQUM3QixNQUFNSSxTQUFPLGdCQUFlOzRCQUVySDhCLFFBQVFDLElBQUkzQixRQUFRb0IsUUFBUSxDQUFDSSxFQUFFLENBQUNsQzs0QkFFaEMsSUFBSSxJQUFJc0MsSUFBRSxHQUFFQSxJQUFFNUIsUUFBUW9CLFFBQVEsQ0FBQ0ksRUFBRSxDQUFDSCxVQUFVSSxRQUFPRyxJQUFJO2dDQUNuRCxJQUFHNUIsUUFBUW9CLFFBQVEsQ0FBQ0ksRUFBRSxDQUFDSCxTQUFTLENBQUNPLEVBQUUsS0FBSSxJQUFJLENBQUNuQyxNQUFNQyxlQUFlMEIsUUFBUSxDQUFDSSxFQUFFLENBQUNILFNBQVMsQ0FBQ08sRUFBRSxFQUFDO29DQUN0RiwrQ0FBK0M7b0NBQy9DLElBQUlDLGNBQWM1QixTQUFTNkIsY0FBYztvQ0FDekMsSUFBSUMsaUJBQWlCOUIsU0FBUzZCLGNBQWM7b0NBQzVDLElBQUlFLGtCQUFrQi9CLFNBQVM2QixjQUFjO29DQUU3Q0QsWUFBWXpDLFlBQVUsSUFBSSxDQUFDSSxNQUFNSTtvQ0FDakNpQyxZQUFZUixZQUFVckIsUUFBUW9CLFFBQVEsQ0FBQ0ksRUFBRSxDQUFDSCxTQUFTLENBQUNPLEVBQUU7b0NBRXRELElBQUlLLGdCQUFnQmpDLFFBQVFvQixRQUFRLENBQUNJLEVBQUUsQ0FBQ0g7b0NBRXhDLElBQUlhLGlCQUFpQkQsY0FBY0UsVUFBVSxHQUFFUDtvQ0FDL0MsSUFBSVEsa0JBQWtCSCxjQUFjRSxVQUFVUCxJQUFFO29DQUVoRCxJQUFHTSxlQUFlVCxXQUFTLEdBQUU7d0NBQ3pCTSxlQUFlM0MsWUFBWVksUUFBUW9CLFFBQVEsQ0FBQ0ksRUFBRSxDQUFDcEM7d0NBQy9DMkMsZUFBZXpDLEtBQUssSUFBMkIsT0FBdkJVLFFBQVFvQixRQUFRLENBQUNJLEVBQUUsQ0FBQ2xDO3dDQUM1Q3lDLGVBQWVWLFlBQVdhO3dDQUMxQmxDLFFBQVFxQyxhQUFhTixnQkFBZS9CLFFBQVFvQixRQUFRLENBQUNJLEVBQUU7b0NBRTNEO29DQUdBLElBQUdRLGdCQUFnQlAsV0FBUyxHQUFFO3dDQUMxQk8sZ0JBQWdCNUMsWUFBWVksUUFBUW9CLFFBQVEsQ0FBQ0ksRUFBRSxDQUFDcEM7d0NBQ2hENEMsZ0JBQWdCMUMsS0FBSSxJQUEyQixPQUF2QlUsUUFBUW9CLFFBQVEsQ0FBQ0ksRUFBRSxDQUFDbEM7d0NBQzVDMEMsZ0JBQWdCWCxZQUFXZTt3Q0FFM0JwQyxRQUFRcUMsYUFBYUwsaUJBQWlCaEMsUUFBUW9CLFFBQVEsQ0FBQ0ksRUFBRSxDQUFDYztvQ0FLOUQ7b0NBQ0F0QyxRQUFRdUMsYUFBYVYsYUFBWTdCLFFBQVFvQixRQUFRLENBQUNJLEVBQUU7Z0NBRXhEOzRCQUNKOzRCQUdBLElBQUksQ0FBQ1YsU0FBUztnQ0FDVnBCLGdCQUFlTyxTQUFTQyx1QkFBdUIsVUFBVSxDQUFDLEVBQUUsQ0FBQ2EsVUFBVTs0QkFDM0U7d0JBRUo7b0JBQ0o7Z0JBR0M7Z0JBUVQsSUFBR2YsUUFBUXdDLFdBQVduQixVQUFVQyxPQUFPRyxVQUFRLEdBQUU7b0JBQzdDekIsUUFBUXdDLFdBQVduQixZQUFVO2dCQUdqQztZQU1KO1FBV1I7UUF2TkksMENBQTBDO1FBQzFDLDJEQUEyRDtRQUUzRCxJQUFJLENBQUNvQixtQkFBaUIsQ0FBQ3REO1lBQ25CLElBQUksQ0FBQ0ssTUFBTWtELElBQUl2RDtRQUNuQjtJQUtKO0FBeU9KO0FBSUEsTUFBTXdELGtCQUFrQixDQUFDbEQ7SUFDckIsT0FBTztRQUVIRyxNQUFLSCxNQUFNbUQsS0FBS2hEO0lBR3BCO0FBQ0o7QUFHQSxNQUFNaUQscUJBQXFCLENBQUNDO0lBQ3hCLE9BQU87UUFDSEosS0FBSyxDQUFDdkQsTUFBUTJELFNBQVM5RCxpRUFBcUIrRCxDQUFDNUQ7SUFJakQ7QUFDSjtBQUVBLDBCQUEwQjtBQUMxQiwrREFBZ0JKLG9EQUFPQSxDQUFDNEQsaUJBQWdCRSxvQkFBb0I1RCxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1dyaXRpbmcuanM/ZjFhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDb250cm9sYmFyIGZyb20gJy4uL3B1YmxpYy9jb21wb25lbnRzL0NvbnRyb2xiYXInO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9FZGl0aW5nJ1xuY2xhc3MgV3JpdGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIC8vIHRoaXMuaGVhZGluZyA9IHRoaXMuaGVhZGluZy5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLmNvbXBvbmVudERpZE1vdW50PXRoaXMuY29tcG9uZW50RGlkTW91bnQuYmluZCh0aGlzKVxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREaXZSZWR1eD0oZGl2KT0+e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5TZXQoZGl2KVxuICAgICAgICB9XG5cblxuXG5cbiAgICB9XG5cblxuICAgIHN0YXRlID0ge1xuICAgICAgICBDb250ZW50RWxlbWVudDpudWxsLFxuICAgICAgICBhY3RpdmU6dGhpcy5wcm9wcy5Gb250LFxuICAgICAgICBJRF9pbmRleDoxLFxuICAgICAgICBzZWxlY3RlZDpudWxsXG5cbiAgICAgIH1cblxuXG5cbiAgICAvLyB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGU9KCk9PntcbiAgICAgICAgbGV0IGFydGljbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFydGljbGVcIilbMF1cbiAgICAgICAgbGV0IGNoZWNrPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9nLWNvbnRlbnRcIilcbiAgICAgICAgXG5cbiAgICAgICBcblxuXG5cbiAgICAgICAgXG5cbiBcbiAgIFxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnREaWRNb3VudD0oKT0+e1xuICAgICAgICBsZXQgYXJ0aWNsZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXJ0aWNsZVwiKVswXVxuICAgICAgICBsZXQgY29udGVudD1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxvZy1jb250ZW50XCIpXG5cbiAgXG5cbiAgICAgICBcblxuXG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyBUbyBzdG9wIEhUTUwgZnJvbSBicmVha2luZyBpZiB1c2VyIHBhc3RlcyBzb21lIHRleHQgb3RoZXIgdGhhbiB3cml0aW5nIGl0XG5cbiAgICAgICAgdmFyIGNlID0gYXJ0aWNsZVxuICAgICAgICBjZS5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdmFyIHRleHQgPSBlLmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpXG4gICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydFRleHQnLCBmYWxzZSwgdGV4dClcbiAgICAgICAgfSlcblxuXG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVycyBvbiBhcnRpY2xlIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIENvbnRlbnRFbGVtZW50OiBhcnRpY2xlLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICB9KVxuICAgICAgICAgICAgYXJ0aWNsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsKGUpPT57XG4gICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGlmKChlLmlucHV0VHlwZT09XCJpbnNlcnRQYXJhZ3JhcGhcIiB8fCBlLmRhdGEgPT0gbnVsbCkgJiYgdGhpcy5wcm9wcy5Gb250PT1cImJsb2ctY29udGVudFwiKXtcblxuXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8YXJ0aWNsZS5jaGlsZEVsZW1lbnRDb3VudDtqKyspe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGohPT0wKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihhcnRpY2xlLmNoaWxkcmVuW2pdLmlkPT1hcnRpY2xlLmNoaWxkcmVuW2otMV0uaWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihhcnRpY2xlLmNoaWxkcmVuW2pdLmlubmVyVGV4dC50cmltKCkgIT09XCJcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmNoaWxkcmVuW2pdLmlkPWBGJHthcnRpY2xlLmNoaWxkcmVuW2pdLmlkfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuY2hpbGRyZW5bai0xXS5pZD1gQiR7YXJ0aWNsZS5jaGlsZHJlbltqLTFdLmlkfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRlbnRFbGVtZW50OmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZEluZD10aGlzLnN0YXRlLklEX2luZGV4KzFcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElEX2luZGV4OiBpZEluZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmNoaWxkcmVuW2pdLmlkPSBpZEluZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGVudEVsZW1lbnQ6ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFydGljbGVcIilbMF0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaz0wO2s8YXJ0aWNsZS5jaGlsZHJlbi5sZW5ndGg7aysrKXtcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZigoYXJ0aWNsZS5jaGlsZHJlbltrXS5pbm5lclRleHQhPT10aGlzLnN0YXRlLkNvbnRlbnRFbGVtZW50LmNoaWxkcmVuW2tdLmlubmVyVGV4dCkgJiYgdGhpcy5wcm9wcy5Gb250IT09J2Jsb2ctY29udGVudCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJ0aWNsZS5jaGlsZHJlbltrXS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8YXJ0aWNsZS5jaGlsZHJlbltrXS5pbm5lclRleHQubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihhcnRpY2xlLmNoaWxkcmVuW2tdLmlubmVyVGV4dFtpXSE9PSB0aGlzLnN0YXRlLkNvbnRlbnRFbGVtZW50LmNoaWxkcmVuW2tdLmlubmVyVGV4dFtpXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXJ0aWNsZS5jaGlsZHJlbltrXS5pbm5lclRleHRbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgTmV3VGV4dEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IEZpcnN0U3BsaXRFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBTZWNvbmRTcGxpdEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXdUZXh0RWxlbS5jbGFzc05hbWU9dGhpcy5wcm9wcy5Gb250XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3VGV4dEVsZW0uaW5uZXJUZXh0PWFydGljbGUuY2hpbGRyZW5ba10uaW5uZXJUZXh0W2ldXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgRWxlbUlubmVyVGV4dCA9IGFydGljbGUuY2hpbGRyZW5ba10uaW5uZXJUZXh0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgRmlyc3RTcGxpdFRleHQgPSBFbGVtSW5uZXJUZXh0LnN1YnN0cmluZygwLGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IFNlY29uZFNwbGl0VGV4dCA9IEVsZW1Jbm5lclRleHQuc3Vic3RyaW5nKGkrMSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKEZpcnN0U3BsaXRUZXh0Lmxlbmd0aCE9PTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaXJzdFNwbGl0RWxlbS5jbGFzc05hbWUgPSBhcnRpY2xlLmNoaWxkcmVuW2tdLmNsYXNzTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaXJzdFNwbGl0RWxlbS5pZCA9IGBCJHthcnRpY2xlLmNoaWxkcmVuW2tdLmlkfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlyc3RTcGxpdEVsZW0uaW5uZXJUZXh0PSBGaXJzdFNwbGl0VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmluc2VydEJlZm9yZShGaXJzdFNwbGl0RWxlbSxhcnRpY2xlLmNoaWxkcmVuW2tdKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihTZWNvbmRTcGxpdEVsZW0ubGVuZ3RoIT09MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlY29uZFNwbGl0RWxlbS5jbGFzc05hbWUgPSBhcnRpY2xlLmNoaWxkcmVuW2tdLmNsYXNzTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWNvbmRTcGxpdEVsZW0uaWQ9IGBGJHthcnRpY2xlLmNoaWxkcmVuW2tdLmlkfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2Vjb25kU3BsaXRFbGVtLmlubmVyVGV4dD0gU2Vjb25kU3BsaXRUZXh0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5pbnNlcnRCZWZvcmUoU2Vjb25kU3BsaXRFbGVtLCBhcnRpY2xlLmNoaWxkcmVuW2tdLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5yZXBsYWNlQ2hpbGQoTmV3VGV4dEVsZW0sYXJ0aWNsZS5jaGlsZHJlbltrXSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGVudEVsZW1lbnQ6ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFydGljbGVcIilbMF0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIFxuICAgIFxuICAgIFxuICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICBpZihhcnRpY2xlLmZpcnN0Q2hpbGQuaW5uZXJUZXh0LnRyaW0oKS5sZW5ndGg9PTApe1xuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmZpcnN0Q2hpbGQuaW5uZXJUZXh0PVwiflwiXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgXG4gICAgXG4gICAgICAgIFxuICAgIFxuICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgIFxuICAgXG5cbiAgICAgICBcblxuIFxuICAgIFxuXG4gICAgICBcbiAgICB9XG5cbiAgICBcblxuICAgIHJlbmRlcigpIHsgXG4gICAgICBcbiAgICAgICAgcmV0dXJuICggIFxuICAgICAgICAgICAgPD5cbiAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiICAgY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiICA+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvZy1jb250ZW50JyBpZD1cIjFcIiAgY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIFRoaXMgaXMgcGFydCAxIFRoaXMgaXMgcGFydCAyIFRoaXMgaXMgcGFydCAzXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxDb250cm9sYmFyLz5cblxuICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuIFxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgIFxuICAgICAgICBGb250OnN0YXRlLkVkaXQuRm9udFxuXG5cbiAgICB9XG59XG5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgU2V0OiAoZGl2KSA9PiBkaXNwYXRjaChhY3Rpb25zLlNlbGVjdFN1Y2Nlc3MoZGl2KSksXG4gICAgICAgIFxuICBcblxuICAgIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgV3JpdGluZztcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFdyaXRpbmcpKVxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUlNUE9SVFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuLy8gaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4Jztcbi8vIGltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9hdXRoJztcblxuXG5cblxuXG4vLyBheGlvcy5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSA9IFwiWC1DU1JGVE9LRU5cIjtcbi8vIGF4aW9zLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gXCJjc3JmdG9rZW5cIjtcblxuXG5cblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLV9fUkVEVVgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIEpXVDogc3RhdGUuand0LFxuICAgIFxuXG4vLyAgICAgfVxuLy8gfVxuXG4vLyBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBkZWNvZGU6IChKV1QpID0+IGRpc3BhdGNoKGFjdGlvbnMuYXV0aEpXVChKV1QpKSxcbi8vICAgICAgICAgQ2hlY2tVc2VyOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmF1dGhDaGVja1N0YXRlKCkpLFxuXG4vLyAgICAgfVxuLy8gfVxuXG4vLyAvLyBleHBvcnQgZGVmYXVsdCBXcml0aW5nXG4vLyBleHBvcnQgZGVmYXVsdCAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShXcml0aW5nKSlcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbnRyb2xiYXIiLCJjb25uZWN0IiwiYWN0aW9ucyIsIldyaXRpbmciLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250ZW50RWRpdGFibGUiLCJpZCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsIkNvbnRlbnRFbGVtZW50IiwiYWN0aXZlIiwiRm9udCIsIklEX2luZGV4Iiwic2VsZWN0ZWQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJhcnRpY2xlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2hlY2siLCJjb21wb25lbnREaWRNb3VudCIsImNvbnRlbnQiLCJjZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0IiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJleGVjQ29tbWFuZCIsInNldFN0YXRlIiwiY2xvbmVOb2RlIiwiaW5wdXRUeXBlIiwiZGF0YSIsImoiLCJjaGlsZEVsZW1lbnRDb3VudCIsImNoaWxkcmVuIiwiaW5uZXJUZXh0IiwidHJpbSIsImlkSW5kIiwiayIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJpIiwiTmV3VGV4dEVsZW0iLCJjcmVhdGVFbGVtZW50IiwiRmlyc3RTcGxpdEVsZW0iLCJTZWNvbmRTcGxpdEVsZW0iLCJFbGVtSW5uZXJUZXh0IiwiRmlyc3RTcGxpdFRleHQiLCJzdWJzdHJpbmciLCJTZWNvbmRTcGxpdFRleHQiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsInJlcGxhY2VDaGlsZCIsImZpcnN0Q2hpbGQiLCJzZWxlY3RlZERpdlJlZHV4IiwiU2V0IiwibWFwU3RhdGVUb1Byb3BzIiwiRWRpdCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiU2VsZWN0U3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Writing.js\n"));

/***/ })

});