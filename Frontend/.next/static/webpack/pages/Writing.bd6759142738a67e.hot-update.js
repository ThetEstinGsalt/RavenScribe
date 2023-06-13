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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/components/Controlbar */ \"./public/components/Controlbar.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/Editing */ \"./store/actions/Editing.js\");\n\n\n\n\n\nclass Writing extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article\",\n                    contentEditable: \"true\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blog-content\",\n                        id: \"1\",\n                        contentEditable: \"true\",\n                        children: \"This is part 1 This is part 2 This is part 3\"\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                        lineNumber: 267,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 265,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 278,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            ContentElement: null,\n            active: this.props.Font,\n            ID_index: 1,\n            selected: null\n        };\n        // }\n        this.componentDidUpdate = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let check = document.getElementsByClassName(\"blog-content\");\n            this.setState({\n                ContentElement: document.getElementsByClassName(\"article\")[0].cloneNode(true)\n            });\n            console.log(this.props.Font);\n        };\n        this.componentDidMount = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let content = document.getElementsByClassName(\"blog-content\");\n            // ----------------------------------------\n            // To stop HTML from breaking if user pastes some text other than writing it\n            var ce = article;\n            ce.addEventListener(\"paste\", function(e) {\n                e.preventDefault();\n                var text = e.clipboardData.getData(\"text/plain\");\n                document.execCommand(\"insertText\", false, text);\n            });\n            // ------------------------------------\n            // ----------------------------------------------\n            // Event listeners on article \n            this.setState({\n                ContentElement: article.cloneNode(true)\n            });\n            article.addEventListener(\"input\", (e)=>{\n                if ((e.inputType == \"insertParagraph\" || e.data == null) && this.props.Font == \"blog-content\") {\n                    for(let j = 0; j < article.childElementCount; j++){\n                        if (j !== 0) {\n                            if (article.children[j].id == article.children[j - 1].id) {\n                                if (article.children[j].innerText.trim() !== \"\") {\n                                    article.children[j].id = \"F\".concat(article.children[j].id);\n                                    article.children[j - 1].id = \"B\".concat(article.children[j - 1].id);\n                                    this.setState({\n                                        ContentElement: document.getElementsByClassName(\"article\")[0].cloneNode(true)\n                                    });\n                                } else {\n                                    var idInd = this.state.ID_index + 1;\n                                    this.setState({\n                                        ID_index: idInd\n                                    });\n                                    article.children[j].id = idInd;\n                                    this.setState({\n                                        ContentElement: document.getElementsByClassName(\"article\")[0].cloneNode(true)\n                                    });\n                                }\n                            }\n                        }\n                    }\n                } else {\n                    for(let k = 0; k < article.children.length; k++){\n                        if (article.children[k].innerText !== this.state.ContentElement.children[k].innerText && this.props.Font !== \"blog-content\" && article.children[k].className == \"blog-content\") {\n                            console.log(article.children[k].id);\n                            for(let i = 0; i < article.children[k].innerText.length; i++){\n                                if (article.children[k].innerText[i] !== this.state.ContentElement.children[k].innerText[i]) {\n                                    let original_clone = article.children[k].cloneNode(true);\n                                    let original = article.children[k];\n                                    // console.log(article.children[k].innerText[i]\n                                    let NewTextElem = document.createElement(\"div\");\n                                    let FirstSplitElem = document.createElement(\"div\");\n                                    let SecondSplitElem = document.createElement(\"div\");\n                                    NewTextElem.className = this.props.Font;\n                                    NewTextElem.innerText = article.children[k].innerText[i];\n                                    let ElemInnerText = article.children[k].innerText;\n                                    let FirstSplitText = ElemInnerText.substring(0, i);\n                                    let SecondSplitText = ElemInnerText.substring(i + 1);\n                                    if (FirstSplitText.trim().length !== 0) {\n                                        FirstSplitElem.className = original.className;\n                                        FirstSplitElem.id = \"B\".concat(original.id);\n                                        FirstSplitElem.innerText = FirstSplitText;\n                                        article.insertBefore(FirstSplitElem, original);\n                                    }\n                                    article.insertBefore(NewTextElem, original);\n                                    if (SecondSplitText.trim().length !== 0) {\n                                        SecondSplitElem.className = original.className;\n                                        SecondSplitElem.id = \"F\".concat(original.id);\n                                        SecondSplitElem.innerText = SecondSplitText;\n                                        article.insertBefore(SecondSplitElem, original);\n                                    }\n                                    article.removeChild(original);\n                                    break;\n                                }\n                            }\n                            this.setState({\n                                ContentElement: document.getElementsByClassName(\"article\")[0].cloneNode(true)\n                            });\n                            break;\n                        }\n                    }\n                }\n                if (article.firstChild.innerText.trim().length == 0) {\n                    article.firstChild.innerText = \"~\";\n                }\n            });\n        };\n        // this.heading = this.heading.bind(this);\n        // this.componentDidMount=this.componentDidMount.bind(this)\n        this.selectedDivRedux = (div)=>{\n            this.props.Set(div);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        Font: state.Edit.Font\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Set: (div)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__.SelectSuccess(div))\n    };\n};\n// export default Writing;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Writing));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN4RCxNQUFRNEQsU0FBUy9ELGlFQUFxQmdFLENBQUM3RDtJQUlqRDtBQUNKO0FBRUEsMEJBQTBCO0FBQzFCLCtEQUFnQkosb0RBQU9BLENBQUM2RCxpQkFBZ0JFLG9CQUFvQjdELFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV3JpdGluZy5qcz9mMWFkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbnRyb2xiYXIgZnJvbSAnLi4vcHVibGljL2NvbXBvbmVudHMvQ29udHJvbGJhcic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL0VkaXRpbmcnXG5jbGFzcyBXcml0aW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgLy8gdGhpcy5oZWFkaW5nID0gdGhpcy5oZWFkaW5nLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuY29tcG9uZW50RGlkTW91bnQ9dGhpcy5jb21wb25lbnREaWRNb3VudC5iaW5kKHRoaXMpXG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZERpdlJlZHV4PShkaXYpPT57XG4gICAgICAgICAgICB0aGlzLnByb3BzLlNldChkaXYpXG4gICAgICAgIH1cblxuXG5cblxuICAgIH1cblxuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIENvbnRlbnRFbGVtZW50Om51bGwsXG4gICAgICAgIGFjdGl2ZTp0aGlzLnByb3BzLkZvbnQsXG4gICAgICAgIElEX2luZGV4OjEsXG4gICAgICAgIHNlbGVjdGVkOm51bGxcblxuICAgICAgfVxuXG5cblxuICAgIC8vIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZT0oKT0+e1xuICAgICAgICBsZXQgYXJ0aWNsZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXJ0aWNsZVwiKVswXVxuICAgICAgICBsZXQgY2hlY2s9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJsb2ctY29udGVudFwiKVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgQ29udGVudEVsZW1lbnQ6ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFydGljbGVcIilbMF0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIH0pXG5cblxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuRm9udClcblxuICAgICAgICBcblxuICAgICAgIFxuXG5cblxuICAgICAgICBcblxuIFxuICAgXG4gICAgfVxuICAgIFxuICAgIGNvbXBvbmVudERpZE1vdW50PSgpPT57XG4gICAgICAgIGxldCBhcnRpY2xlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdXG4gICAgICAgIGxldCBjb250ZW50PWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9nLWNvbnRlbnRcIilcblxuICBcblxuICAgICAgIFxuXG5cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vIFRvIHN0b3AgSFRNTCBmcm9tIGJyZWFraW5nIGlmIHVzZXIgcGFzdGVzIHNvbWUgdGV4dCBvdGhlciB0aGFuIHdyaXRpbmcgaXRcblxuICAgICAgICB2YXIgY2UgPSBhcnRpY2xlXG4gICAgICAgIGNlLmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB2YXIgdGV4dCA9IGUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJylcbiAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0VGV4dCcsIGZhbHNlLCB0ZXh0KVxuICAgICAgICB9KVxuXG5cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXJzIG9uIGFydGljbGUgXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgQ29udGVudEVsZW1lbnQ6IGFydGljbGUuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIH0pXG4gICAgICAgICAgICBhcnRpY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywoZSk9PntcbiAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgaWYoKGUuaW5wdXRUeXBlPT1cImluc2VydFBhcmFncmFwaFwiIHx8IGUuZGF0YSA9PSBudWxsKSAmJiB0aGlzLnByb3BzLkZvbnQ9PVwiYmxvZy1jb250ZW50XCIpe1xuXG5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7ajxhcnRpY2xlLmNoaWxkRWxlbWVudENvdW50O2orKyl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaiE9PTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFydGljbGUuY2hpbGRyZW5bal0uaWQ9PWFydGljbGUuY2hpbGRyZW5bai0xXS5pZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFydGljbGUuY2hpbGRyZW5bal0uaW5uZXJUZXh0LnRyaW0oKSAhPT1cIlwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuY2hpbGRyZW5bal0uaWQ9YEYke2FydGljbGUuY2hpbGRyZW5bal0uaWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5jaGlsZHJlbltqLTFdLmlkPWBCJHthcnRpY2xlLmNoaWxkcmVuW2otMV0uaWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGVudEVsZW1lbnQ6ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFydGljbGVcIilbMF0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkSW5kPXRoaXMuc3RhdGUuSURfaW5kZXgrMVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSURfaW5kZXg6IGlkSW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuY2hpbGRyZW5bal0uaWQ9IGlkSW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250ZW50RWxlbWVudDpkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXJ0aWNsZVwiKVswXS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBrPTA7azxhcnRpY2xlLmNoaWxkcmVuLmxlbmd0aDtrKyspe1xuICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKChhcnRpY2xlLmNoaWxkcmVuW2tdLmlubmVyVGV4dCE9PXRoaXMuc3RhdGUuQ29udGVudEVsZW1lbnQuY2hpbGRyZW5ba10uaW5uZXJUZXh0KSAmJiB0aGlzLnByb3BzLkZvbnQhPT0nYmxvZy1jb250ZW50JyAmJiBhcnRpY2xlLmNoaWxkcmVuW2tdLmNsYXNzTmFtZT09J2Jsb2ctY29udGVudCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJ0aWNsZS5jaGlsZHJlbltrXS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8YXJ0aWNsZS5jaGlsZHJlbltrXS5pbm5lclRleHQubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihhcnRpY2xlLmNoaWxkcmVuW2tdLmlubmVyVGV4dFtpXSE9PSB0aGlzLnN0YXRlLkNvbnRlbnRFbGVtZW50LmNoaWxkcmVuW2tdLmlubmVyVGV4dFtpXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3JpZ2luYWxfY2xvbmUgPWFydGljbGUuY2hpbGRyZW5ba10uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9yaWdpbmFsID1hcnRpY2xlLmNoaWxkcmVuW2tdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXJ0aWNsZS5jaGlsZHJlbltrXS5pbm5lclRleHRbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgTmV3VGV4dEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IEZpcnN0U3BsaXRFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBTZWNvbmRTcGxpdEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXdUZXh0RWxlbS5jbGFzc05hbWU9dGhpcy5wcm9wcy5Gb250XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3VGV4dEVsZW0uaW5uZXJUZXh0PWFydGljbGUuY2hpbGRyZW5ba10uaW5uZXJUZXh0W2ldXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgRWxlbUlubmVyVGV4dCA9IGFydGljbGUuY2hpbGRyZW5ba10uaW5uZXJUZXh0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgRmlyc3RTcGxpdFRleHQgPSBFbGVtSW5uZXJUZXh0LnN1YnN0cmluZygwLGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IFNlY29uZFNwbGl0VGV4dCA9IEVsZW1Jbm5lclRleHQuc3Vic3RyaW5nKGkrMSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKEZpcnN0U3BsaXRUZXh0LnRyaW0oKS5sZW5ndGghPT0wKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlyc3RTcGxpdEVsZW0uY2xhc3NOYW1lID0gb3JpZ2luYWwuY2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpcnN0U3BsaXRFbGVtLmlkID0gYEIke29yaWdpbmFsLmlkfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlyc3RTcGxpdEVsZW0uaW5uZXJUZXh0PSBGaXJzdFNwbGl0VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmluc2VydEJlZm9yZShGaXJzdFNwbGl0RWxlbSxvcmlnaW5hbClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuaW5zZXJ0QmVmb3JlKE5ld1RleHRFbGVtLG9yaWdpbmFsKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihTZWNvbmRTcGxpdFRleHQudHJpbSgpLmxlbmd0aCE9PTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWNvbmRTcGxpdEVsZW0uY2xhc3NOYW1lID0gb3JpZ2luYWwuY2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlY29uZFNwbGl0RWxlbS5pZD0gYEYke29yaWdpbmFsLmlkfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2Vjb25kU3BsaXRFbGVtLmlubmVyVGV4dD0gU2Vjb25kU3BsaXRUZXh0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5pbnNlcnRCZWZvcmUoU2Vjb25kU3BsaXRFbGVtLG9yaWdpbmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLnJlbW92ZUNoaWxkKG9yaWdpbmFsKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5Gb250PSdibG9nLWNvbnRlbnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGVudEVsZW1lbnQ6ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFydGljbGVcIilbMF0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXG4gICAgXG4gICAgXG4gICAgICAgXG5cblxuICAgICAgICAgICAgICAgIGlmKGFydGljbGUuZmlyc3RDaGlsZC5pbm5lclRleHQudHJpbSgpLmxlbmd0aD09MCl7XG4gICAgICAgICAgICAgICAgICAgIGFydGljbGUuZmlyc3RDaGlsZC5pbm5lclRleHQ9XCJ+XCJcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICBcbiAgICBcbiAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgXG4gICBcblxuICAgICAgIFxuXG4gXG4gICAgXG5cbiAgICAgIFxuICAgIH1cblxuICAgIFxuXG4gICAgcmVuZGVyKCkgeyBcbiAgICAgIFxuICAgICAgICByZXR1cm4gKCAgXG4gICAgICAgICAgICA8PlxuICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlXCIgICBjb250ZW50RWRpdGFibGU9XCJ0cnVlXCIgID5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNvbnRlbnQnIGlkPVwiMVwiICBjb250ZW50RWRpdGFibGU9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgVGhpcyBpcyBwYXJ0IDEgVGhpcyBpcyBwYXJ0IDIgVGhpcyBpcyBwYXJ0IDNcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgXG4gICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8Q29udHJvbGJhci8+XG5cbiAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn1cbiBcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICBcbiAgICAgICAgRm9udDpzdGF0ZS5FZGl0LkZvbnRcblxuXG4gICAgfVxufVxuXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIFNldDogKGRpdikgPT4gZGlzcGF0Y2goYWN0aW9ucy5TZWxlY3RTdWNjZXNzKGRpdikpLFxuICAgICAgICBcbiAgXG5cbiAgICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFdyaXRpbmc7XG5leHBvcnQgZGVmYXVsdCAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShXcml0aW5nKSlcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1JTVBPUlRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbi8vIGltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG4vLyBpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvYXV0aCc7XG5cblxuXG5cblxuLy8gYXhpb3MuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSBcIlgtQ1NSRlRPS0VOXCI7XG4vLyBheGlvcy5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9IFwiY3NyZnRva2VuXCI7XG5cblxuXG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1fX1JFRFVYLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBKV1Q6IHN0YXRlLmp3dCxcbiAgICBcblxuLy8gICAgIH1cbi8vIH1cblxuLy8gY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgZGVjb2RlOiAoSldUKSA9PiBkaXNwYXRjaChhY3Rpb25zLmF1dGhKV1QoSldUKSksXG4vLyAgICAgICAgIENoZWNrVXNlcjogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5hdXRoQ2hlY2tTdGF0ZSgpKSxcblxuLy8gICAgIH1cbi8vIH1cblxuLy8gLy8gZXhwb3J0IGRlZmF1bHQgV3JpdGluZ1xuLy8gZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoV3JpdGluZykpXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDb250cm9sYmFyIiwiY29ubmVjdCIsImFjdGlvbnMiLCJXcml0aW5nIiwicmVuZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGVudEVkaXRhYmxlIiwiaWQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJDb250ZW50RWxlbWVudCIsImFjdGl2ZSIsIkZvbnQiLCJJRF9pbmRleCIsInNlbGVjdGVkIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiYXJ0aWNsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNoZWNrIiwic2V0U3RhdGUiLCJjbG9uZU5vZGUiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb250ZW50IiwiY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGV4dCIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwiZXhlY0NvbW1hbmQiLCJpbnB1dFR5cGUiLCJkYXRhIiwiaiIsImNoaWxkRWxlbWVudENvdW50IiwiY2hpbGRyZW4iLCJpbm5lclRleHQiLCJ0cmltIiwiaWRJbmQiLCJrIiwibGVuZ3RoIiwiaSIsIm9yaWdpbmFsX2Nsb25lIiwib3JpZ2luYWwiLCJOZXdUZXh0RWxlbSIsImNyZWF0ZUVsZW1lbnQiLCJGaXJzdFNwbGl0RWxlbSIsIlNlY29uZFNwbGl0RWxlbSIsIkVsZW1Jbm5lclRleHQiLCJGaXJzdFNwbGl0VGV4dCIsInN1YnN0cmluZyIsIlNlY29uZFNwbGl0VGV4dCIsImluc2VydEJlZm9yZSIsInJlbW92ZUNoaWxkIiwiZmlyc3RDaGlsZCIsInNlbGVjdGVkRGl2UmVkdXgiLCJTZXQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJFZGl0IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJTZWxlY3RTdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Writing.js\n"));

/***/ })

});