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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/components/Controlbar */ \"./public/components/Controlbar.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/Editing */ \"./store/actions/Editing.js\");\n\n\n\n\n\nclass Writing extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article\",\n                    contentEditable: \"true\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blog-content\",\n                        id: \"1\",\n                        contentEditable: \"true\",\n                        children: \"This is part 1 This is part 2 This is part 3\"\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                        lineNumber: 246,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 244,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 256,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            ContentElement: null,\n            active: this.props.Font,\n            ID_index: 1,\n            selected: null\n        };\n        // }\n        this.componentDidUpdate = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let check = document.getElementsByClassName(\"blog-content\");\n        };\n        this.componentDidMount = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let content = document.getElementsByClassName(\"blog-content\");\n            // ----------------------------------------\n            // To stop HTML from breaking if user pastes some text other than writing it\n            var ce = article;\n            ce.addEventListener(\"paste\", function(e) {\n                e.preventDefault();\n                var text = e.clipboardData.getData(\"text/plain\");\n                document.execCommand(\"insertText\", false, text);\n            });\n            // ------------------------------------\n            // ----------------------------------------------\n            // Event listeners on article \n            this.setState({\n                ContentElement: article.cloneNode(true)\n            });\n            article.addEventListener(\"input\", (e)=>{\n                if ((e.inputType == \"insertParagraph\" || e.data == null) && this.props.Font == \"blog-content\") {\n                    for(let j = 0; j < article.childElementCount; j++){\n                        if (j !== 0) {\n                            if (article.children[j].id == article.children[j - 1].id) {\n                                if (article.children[j].innerText.trim() !== \"\") {\n                                    article.children[j].id = \"F\".concat(article.children[j].id);\n                                    article.children[j - 1].id = \"B\".concat(article.children[j - 1].id);\n                                    this.setState({\n                                        ContentElement: document.getElementsByClassName(\"article\")[0].cloneNode(true)\n                                    });\n                                } else {\n                                    var idInd = this.state.ID_index + 1;\n                                    this.setState({\n                                        ID_index: idInd\n                                    });\n                                    article.children[j].id = idInd;\n                                    this.setState({\n                                        ContentElement: document.getElementsByClassName(\"article\")[0].cloneNode(true)\n                                    });\n                                }\n                            }\n                        }\n                    }\n                } else {\n                    for(let k = 0; k < article.children.length; k++){\n                        console.log(k);\n                        if (article.children[k].innerText !== this.state.ContentElement.children[k].innerText && this.props.Font !== \"blog-content\") {\n                            console.log(article.children[k].id);\n                            for(let i = 0; i < article.children[k].innerText.length; i++){\n                                if (article.children[k].innerText[i] !== this.state.ContentElement.children[k].innerText[i]) {\n                                    // console.log(article.children[k].innerText[i]\n                                    let NewTextElem = document.createElement(\"div\");\n                                    let FirstSplitElem = document.createElement(\"div\");\n                                    let SecondSplitElem = document.createElement(\"div\");\n                                    NewTextElem.className = this.props.Font;\n                                    NewTextElem.innerText = article.children[k].innerText[i];\n                                    let ElemInnerText = article.children[k].innerText;\n                                    let FirstSplitText = ElemInnerText.substring(0, i);\n                                    let SecondSplitText = ElemInnerText.substring(i + 1);\n                                    if (FirstSplitText.length !== 0) {\n                                        FirstSplitElem.className = article.children[k].className;\n                                        FirstSplitElem.id = \"B\".concat(article.children[k].id);\n                                        FirstSplitElem.innerText = FirstSplitText;\n                                        article.insertBefore(FirstSplitElem, article.children[k]);\n                                    }\n                                    if (SecondSplitElem.length !== 0) {\n                                        SecondSplitElem.className = article.children[k].className;\n                                        SecondSplitElem.id = \"F\".concat(article.children[k].id);\n                                        SecondSplitElem.innerText = SecondSplitText;\n                                        article.insertBefore(SecondSplitElem, article.children[k].nextSibling);\n                                    }\n                                    article.insertBefore(NewTextElem, SecondSplitElem);\n                                    break;\n                                }\n                            }\n                            this.setState({\n                                ContentElement: document.getElementsByClassName(\"article\")[0].cloneNode(true)\n                            });\n                            break;\n                        }\n                    }\n                }\n                if (article.firstChild.innerText.trim().length == 0) {\n                    article.firstChild.innerText = \"~\";\n                }\n            });\n        };\n        // this.heading = this.heading.bind(this);\n        // this.componentDidMount=this.componentDidMount.bind(this)\n        this.selectedDivRedux = (div)=>{\n            this.props.Set(div);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        Font: state.Edit.Font\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Set: (div)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__.SelectSuccess(div))\n    };\n};\n// export default Writing;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Writing));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV3JpdGluZy5qcz9mMWFkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbnRyb2xiYXIgZnJvbSAnLi4vcHVibGljL2NvbXBvbmVudHMvQ29udHJvbGJhcic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL0VkaXRpbmcnXG5jbGFzcyBXcml0aW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgLy8gdGhpcy5oZWFkaW5nID0gdGhpcy5oZWFkaW5nLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuY29tcG9uZW50RGlkTW91bnQ9dGhpcy5jb21wb25lbnREaWRNb3VudC5iaW5kKHRoaXMpXG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZERpdlJlZHV4PShkaXYpPT57XG4gICAgICAgICAgICB0aGlzLnByb3BzLlNldChkaXYpXG4gICAgICAgIH1cblxuXG5cblxuICAgIH1cblxuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIENvbnRlbnRFbGVtZW50Om51bGwsXG4gICAgICAgIGFjdGl2ZTp0aGlzLnByb3BzLkZvbnQsXG4gICAgICAgIElEX2luZGV4OjEsXG4gICAgICAgIHNlbGVjdGVkOm51bGxcblxuICAgICAgfVxuXG5cblxuICAgIC8vIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZT0oKT0+e1xuICAgICAgICBsZXQgYXJ0aWNsZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXJ0aWNsZVwiKVswXVxuICAgICAgICBsZXQgY2hlY2s9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJsb2ctY29udGVudFwiKVxuICAgICAgICBcblxuICAgICAgIFxuXG5cblxuICAgICAgICBcblxuIFxuICAgXG4gICAgfVxuICAgIFxuICAgIGNvbXBvbmVudERpZE1vdW50PSgpPT57XG4gICAgICAgIGxldCBhcnRpY2xlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdXG4gICAgICAgIGxldCBjb250ZW50PWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9nLWNvbnRlbnRcIilcblxuICBcblxuICAgICAgIFxuXG5cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vIFRvIHN0b3AgSFRNTCBmcm9tIGJyZWFraW5nIGlmIHVzZXIgcGFzdGVzIHNvbWUgdGV4dCBvdGhlciB0aGFuIHdyaXRpbmcgaXRcblxuICAgICAgICB2YXIgY2UgPSBhcnRpY2xlXG4gICAgICAgIGNlLmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB2YXIgdGV4dCA9IGUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJylcbiAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0VGV4dCcsIGZhbHNlLCB0ZXh0KVxuICAgICAgICB9KVxuXG5cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXJzIG9uIGFydGljbGUgXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgQ29udGVudEVsZW1lbnQ6IGFydGljbGUuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIH0pXG4gICAgICAgICAgICBhcnRpY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywoZSk9PntcbiAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgaWYoKGUuaW5wdXRUeXBlPT1cImluc2VydFBhcmFncmFwaFwiIHx8IGUuZGF0YSA9PSBudWxsKSAmJiB0aGlzLnByb3BzLkZvbnQ9PVwiYmxvZy1jb250ZW50XCIpe1xuXG5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7ajxhcnRpY2xlLmNoaWxkRWxlbWVudENvdW50O2orKyl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaiE9PTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFydGljbGUuY2hpbGRyZW5bal0uaWQ9PWFydGljbGUuY2hpbGRyZW5bai0xXS5pZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFydGljbGUuY2hpbGRyZW5bal0uaW5uZXJUZXh0LnRyaW0oKSAhPT1cIlwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuY2hpbGRyZW5bal0uaWQ9YEYke2FydGljbGUuY2hpbGRyZW5bal0uaWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5jaGlsZHJlbltqLTFdLmlkPWBCJHthcnRpY2xlLmNoaWxkcmVuW2otMV0uaWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGVudEVsZW1lbnQ6ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFydGljbGVcIilbMF0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkSW5kPXRoaXMuc3RhdGUuSURfaW5kZXgrMVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSURfaW5kZXg6IGlkSW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuY2hpbGRyZW5bal0uaWQ9IGlkSW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250ZW50RWxlbWVudDpkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXJ0aWNsZVwiKVswXS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBrPTA7azxhcnRpY2xlLmNoaWxkcmVuLmxlbmd0aDtrKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaylcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZigoYXJ0aWNsZS5jaGlsZHJlbltrXS5pbm5lclRleHQhPT10aGlzLnN0YXRlLkNvbnRlbnRFbGVtZW50LmNoaWxkcmVuW2tdLmlubmVyVGV4dCkgJiYgdGhpcy5wcm9wcy5Gb250IT09J2Jsb2ctY29udGVudCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJ0aWNsZS5jaGlsZHJlbltrXS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8YXJ0aWNsZS5jaGlsZHJlbltrXS5pbm5lclRleHQubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihhcnRpY2xlLmNoaWxkcmVuW2tdLmlubmVyVGV4dFtpXSE9PSB0aGlzLnN0YXRlLkNvbnRlbnRFbGVtZW50LmNoaWxkcmVuW2tdLmlubmVyVGV4dFtpXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhcnRpY2xlLmNoaWxkcmVuW2tdLmlubmVyVGV4dFtpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBOZXdUZXh0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgRmlyc3RTcGxpdEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IFNlY29uZFNwbGl0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ld1RleHRFbGVtLmNsYXNzTmFtZT10aGlzLnByb3BzLkZvbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXdUZXh0RWxlbS5pbm5lclRleHQ9YXJ0aWNsZS5jaGlsZHJlbltrXS5pbm5lclRleHRbaV1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBFbGVtSW5uZXJUZXh0ID0gYXJ0aWNsZS5jaGlsZHJlbltrXS5pbm5lclRleHRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBGaXJzdFNwbGl0VGV4dCA9IEVsZW1Jbm5lclRleHQuc3Vic3RyaW5nKDAsaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgU2Vjb25kU3BsaXRUZXh0ID0gRWxlbUlubmVyVGV4dC5zdWJzdHJpbmcoaSsxKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoRmlyc3RTcGxpdFRleHQubGVuZ3RoIT09MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpcnN0U3BsaXRFbGVtLmNsYXNzTmFtZSA9IGFydGljbGUuY2hpbGRyZW5ba10uY2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpcnN0U3BsaXRFbGVtLmlkID0gYEIke2FydGljbGUuY2hpbGRyZW5ba10uaWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaXJzdFNwbGl0RWxlbS5pbm5lclRleHQ9IEZpcnN0U3BsaXRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuaW5zZXJ0QmVmb3JlKEZpcnN0U3BsaXRFbGVtLGFydGljbGUuY2hpbGRyZW5ba10pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoU2Vjb25kU3BsaXRFbGVtLmxlbmd0aCE9PTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWNvbmRTcGxpdEVsZW0uY2xhc3NOYW1lID0gYXJ0aWNsZS5jaGlsZHJlbltrXS5jbGFzc05hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2Vjb25kU3BsaXRFbGVtLmlkPSBgRiR7YXJ0aWNsZS5jaGlsZHJlbltrXS5pZH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlY29uZFNwbGl0RWxlbS5pbm5lclRleHQ9IFNlY29uZFNwbGl0VGV4dFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuaW5zZXJ0QmVmb3JlKFNlY29uZFNwbGl0RWxlbSwgYXJ0aWNsZS5jaGlsZHJlbltrXS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuaW5zZXJ0QmVmb3JlKE5ld1RleHRFbGVtLFNlY29uZFNwbGl0RWxlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250ZW50RWxlbWVudDpkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXJ0aWNsZVwiKVswXS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBcbiAgICBcbiAgICBcbiAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgaWYoYXJ0aWNsZS5maXJzdENoaWxkLmlubmVyVGV4dC50cmltKCkubGVuZ3RoPT0wKXtcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5maXJzdENoaWxkLmlubmVyVGV4dD1cIn5cIlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgIFxuICAgIFxuICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICBcbiAgIFxuXG4gICAgICAgXG5cbiBcbiAgICBcblxuICAgICAgXG4gICAgfVxuXG4gICAgXG5cbiAgICByZW5kZXIoKSB7IFxuICAgICAgXG4gICAgICAgIHJldHVybiAoICBcbiAgICAgICAgICAgIDw+XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVcIiAgIGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIiAgPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2ctY29udGVudCcgaWQ9XCIxXCIgIGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICBUaGlzIGlzIHBhcnQgMSBUaGlzIGlzIHBhcnQgMiBUaGlzIGlzIHBhcnQgM1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8Q29udHJvbGJhci8+XG5cbiAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn1cbiBcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICBcbiAgICAgICAgRm9udDpzdGF0ZS5FZGl0LkZvbnRcblxuXG4gICAgfVxufVxuXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIFNldDogKGRpdikgPT4gZGlzcGF0Y2goYWN0aW9ucy5TZWxlY3RTdWNjZXNzKGRpdikpLFxuICAgICAgICBcbiAgXG5cbiAgICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFdyaXRpbmc7XG5leHBvcnQgZGVmYXVsdCAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShXcml0aW5nKSlcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1JTVBPUlRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbi8vIGltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG4vLyBpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvYXV0aCc7XG5cblxuXG5cblxuLy8gYXhpb3MuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSBcIlgtQ1NSRlRPS0VOXCI7XG4vLyBheGlvcy5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9IFwiY3NyZnRva2VuXCI7XG5cblxuXG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1fX1JFRFVYLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBKV1Q6IHN0YXRlLmp3dCxcbiAgICBcblxuLy8gICAgIH1cbi8vIH1cblxuLy8gY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgZGVjb2RlOiAoSldUKSA9PiBkaXNwYXRjaChhY3Rpb25zLmF1dGhKV1QoSldUKSksXG4vLyAgICAgICAgIENoZWNrVXNlcjogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5hdXRoQ2hlY2tTdGF0ZSgpKSxcblxuLy8gICAgIH1cbi8vIH1cblxuLy8gLy8gZXhwb3J0IGRlZmF1bHQgV3JpdGluZ1xuLy8gZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoV3JpdGluZykpXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDb250cm9sYmFyIiwiY29ubmVjdCIsImFjdGlvbnMiLCJXcml0aW5nIiwicmVuZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGVudEVkaXRhYmxlIiwiaWQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJDb250ZW50RWxlbWVudCIsImFjdGl2ZSIsIkZvbnQiLCJJRF9pbmRleCIsInNlbGVjdGVkIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiYXJ0aWNsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNoZWNrIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb250ZW50IiwiY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGV4dCIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwiZXhlY0NvbW1hbmQiLCJzZXRTdGF0ZSIsImNsb25lTm9kZSIsImlucHV0VHlwZSIsImRhdGEiLCJqIiwiY2hpbGRFbGVtZW50Q291bnQiLCJjaGlsZHJlbiIsImlubmVyVGV4dCIsInRyaW0iLCJpZEluZCIsImsiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiaSIsIk5ld1RleHRFbGVtIiwiY3JlYXRlRWxlbWVudCIsIkZpcnN0U3BsaXRFbGVtIiwiU2Vjb25kU3BsaXRFbGVtIiwiRWxlbUlubmVyVGV4dCIsIkZpcnN0U3BsaXRUZXh0Iiwic3Vic3RyaW5nIiwiU2Vjb25kU3BsaXRUZXh0IiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJmaXJzdENoaWxkIiwic2VsZWN0ZWREaXZSZWR1eCIsIlNldCIsIm1hcFN0YXRlVG9Qcm9wcyIsIkVkaXQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIlNlbGVjdFN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Writing.js\n"));

/***/ })

});