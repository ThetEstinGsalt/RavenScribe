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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/components/Controlbar */ \"./public/components/Controlbar.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/Editing */ \"./store/actions/Editing.js\");\n\n\n\n\n\nclass Writing extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article\",\n                    contentEditable: \"true\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blog-content\",\n                        id: \"1\",\n                        contentEditable: \"true\",\n                        children: \"This is part 1 This is part 2 This is part 3\"\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                        lineNumber: 249,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 247,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 259,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            ContentElement: null,\n            active: this.props.Font,\n            ID_index: 1,\n            selected: null\n        };\n        // }\n        this.componentDidUpdate = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let check = document.getElementsByClassName(\"blog-content\");\n        };\n        this.componentDidMount = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let content = document.getElementsByClassName(\"blog-content\");\n            // ----------------------------------------\n            // To stop HTML from breaking if user pastes some text other than writing it\n            var ce = article;\n            ce.addEventListener(\"paste\", function(e) {\n                e.preventDefault();\n                var text = e.clipboardData.getData(\"text/plain\");\n                document.execCommand(\"insertText\", false, text);\n            });\n            // ------------------------------------\n            // ----------------------------------------------\n            // Event listeners on article \n            this.setState({\n                ContentElement: article.cloneNode(true)\n            });\n            article.addEventListener(\"input\", (e)=>{\n                if (e.inputType == \"insertParagraph\") {\n                    for(let j = 0; j < article.childElementCount; j++){\n                        if (j !== 0) {\n                            if (article.children[j].id == article.children[j - 1].id) {\n                                if (article.children[j].innerText.trim() !== \"\") {\n                                    article.children[j].id = \"F\".concat(article.children[j].id);\n                                    article.children[j - 1].id = \"B\".concat(article.children[j - 1].id);\n                                    this.setState({\n                                        ContentElement: document.getElementsByClassName(\"article\")[0].cloneNode(true)\n                                    }, ()=>{\n                                        console.log(\"state done\");\n                                    });\n                                } else {\n                                    var idInd = this.state.ID_index + 1;\n                                    this.setState({\n                                        ID_index: idInd\n                                    });\n                                    article.children[j].id = idInd;\n                                    this.setState({\n                                        ContentElement: document.getElementsByClassName(\"article\")[0].cloneNode(true)\n                                    }, ()=>{\n                                        console.log(\"state done\");\n                                    });\n                                }\n                            }\n                        }\n                    }\n                } else {\n                    console.log(e.inputType);\n                    console.log(e);\n                // let jeff=document\n                // if(e.inputType==\"insertText\"){\n                //     console.log(\"this next js baaler programme is completely drunk and it is broke motherfucker\")\n                // }\n                // console.log(e)\n                // console.log(this.state.ContentElement)\n                //     for(let k=0;k<article.children.length;k++){\n                //         console.log(article.children[k])\n                //         console.log(this.state.ContentElement.childElementCount)\n                //         console.log(this.state.ContentElement.children[k])\n                //         // try{\n                //         if(article.children[k].innerText!==this.state.ContentElement.children[k].innerText){\n                //             console.log(article.children[k].id)\n                //             this.setState({\n                //                 ContentElement:jeff.getElementsByClassName(\"article\")[0].cloneNode(true)\n                //             },()=>{\n                //                 console.log(\"state done\")\n                //             })\n                //         }\n                //     }\n                // }\n                }\n                // if(e.inputType!==\"insertParagraph\"){\n                //         // this.setState({\n                //         //     ContentElement:jeff.getElementsByClassName(\"article\")[0].cloneNode(true)\n                //         // },()=>{\n                //         //     console.log(\"Chacha done\")\n                //         // })\n                // }\n                // else{\n                //     this.setState({\n                //         ContentElement:document.getElementsByClassName(\"article\")[0].cloneNode(true)\n                //     },()=>{\n                //         console.log(\"Chacha done\")\n                //     })\n                // }\n                if (article.firstChild.innerText.trim().length == 0) {\n                    article.firstChild.innerText = \"~\";\n                }\n            // Breaking paragraph and organising ID \n            // --------------------cursor_function---------------\n            });\n        // -----------------------------------------------\n        // for(i=0;i<content.length;i++){\n        //     content[i].addEventListener()\n        // }\n        };\n        // this.heading = this.heading.bind(this);\n        // this.componentDidMount=this.componentDidMount.bind(this)\n        this.selectedDivRedux = (div)=>{\n            this.props.Set(div);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        Font: state.Edit.Font\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Set: (div)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__.SelectSuccess(div))\n    };\n};\n// export default Writing;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Writing));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0RBQU9BLENBQUM4QyxpQkFBZ0JFLG9CQUFvQjlDLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV3JpdGluZy5qcz9mMWFkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbnRyb2xiYXIgZnJvbSAnLi4vcHVibGljL2NvbXBvbmVudHMvQ29udHJvbGJhcic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL0VkaXRpbmcnXG5jbGFzcyBXcml0aW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgLy8gdGhpcy5oZWFkaW5nID0gdGhpcy5oZWFkaW5nLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuY29tcG9uZW50RGlkTW91bnQ9dGhpcy5jb21wb25lbnREaWRNb3VudC5iaW5kKHRoaXMpXG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZERpdlJlZHV4PShkaXYpPT57XG4gICAgICAgICAgICB0aGlzLnByb3BzLlNldChkaXYpXG4gICAgICAgIH1cblxuXG5cblxuICAgIH1cblxuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIENvbnRlbnRFbGVtZW50Om51bGwsXG4gICAgICAgIGFjdGl2ZTp0aGlzLnByb3BzLkZvbnQsXG4gICAgICAgIElEX2luZGV4OjEsXG4gICAgICAgIHNlbGVjdGVkOm51bGxcblxuICAgICAgfVxuXG5cblxuICAgIC8vIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZT0oKT0+e1xuICAgICAgICBsZXQgYXJ0aWNsZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXJ0aWNsZVwiKVswXVxuICAgICAgICBsZXQgY2hlY2s9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJsb2ctY29udGVudFwiKVxuICAgICAgICBcblxuICAgICAgIFxuXG5cblxuICAgICAgICBcblxuIFxuICAgXG4gICAgfVxuICAgIFxuICAgIGNvbXBvbmVudERpZE1vdW50PSgpPT57XG4gICAgICAgIGxldCBhcnRpY2xlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdXG4gICAgICAgIGxldCBjb250ZW50PWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9nLWNvbnRlbnRcIilcblxuICBcblxuICAgICAgIFxuXG5cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vIFRvIHN0b3AgSFRNTCBmcm9tIGJyZWFraW5nIGlmIHVzZXIgcGFzdGVzIHNvbWUgdGV4dCBvdGhlciB0aGFuIHdyaXRpbmcgaXRcblxuICAgICAgICB2YXIgY2UgPSBhcnRpY2xlXG4gICAgICAgIGNlLmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB2YXIgdGV4dCA9IGUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJylcbiAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0VGV4dCcsIGZhbHNlLCB0ZXh0KVxuICAgICAgICB9KVxuXG5cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXJzIG9uIGFydGljbGUgXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgQ29udGVudEVsZW1lbnQ6IGFydGljbGUuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIH0pXG4gICAgICAgICAgICBhcnRpY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywoZSk9PntcbiAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgaWYoZS5pbnB1dFR5cGU9PVwiaW5zZXJ0UGFyYWdyYXBoXCIpe1xuXG5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7ajxhcnRpY2xlLmNoaWxkRWxlbWVudENvdW50O2orKyl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaiE9PTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFydGljbGUuY2hpbGRyZW5bal0uaWQ9PWFydGljbGUuY2hpbGRyZW5bai0xXS5pZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFydGljbGUuY2hpbGRyZW5bal0uaW5uZXJUZXh0LnRyaW0oKSAhPT1cIlwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuY2hpbGRyZW5bal0uaWQ9YEYke2FydGljbGUuY2hpbGRyZW5bal0uaWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5jaGlsZHJlbltqLTFdLmlkPWBCJHthcnRpY2xlLmNoaWxkcmVuW2otMV0uaWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGVudEVsZW1lbnQ6ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFydGljbGVcIilbMF0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0ZSBkb25lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkSW5kPXRoaXMuc3RhdGUuSURfaW5kZXgrMVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSURfaW5kZXg6IGlkSW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuY2hpbGRyZW5bal0uaWQ9IGlkSW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250ZW50RWxlbWVudDpkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXJ0aWNsZVwiKVswXS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXRlIGRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuaW5wdXRUeXBlKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgamVmZj1kb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAvLyBpZihlLmlucHV0VHlwZT09XCJpbnNlcnRUZXh0XCIpe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJ0aGlzIG5leHQganMgYmFhbGVyIHByb2dyYW1tZSBpcyBjb21wbGV0ZWx5IGRydW5rIGFuZCBpdCBpcyBicm9rZSBtb3RoZXJmdWNrZXJcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5Db250ZW50RWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBmb3IobGV0IGs9MDtrPGFydGljbGUuY2hpbGRyZW4ubGVuZ3RoO2srKyl7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coYXJ0aWNsZS5jaGlsZHJlbltrXSlcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLkNvbnRlbnRFbGVtZW50LmNoaWxkRWxlbWVudENvdW50KVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuQ29udGVudEVsZW1lbnQuY2hpbGRyZW5ba10pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gdHJ5e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmKGFydGljbGUuY2hpbGRyZW5ba10uaW5uZXJUZXh0IT09dGhpcy5zdGF0ZS5Db250ZW50RWxlbWVudC5jaGlsZHJlbltrXS5pbm5lclRleHQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coYXJ0aWNsZS5jaGlsZHJlbltrXS5pZClcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIENvbnRlbnRFbGVtZW50OmplZmYuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFydGljbGVcIilbMF0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0sKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGUgZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgXG4gICAgICAgXG5cbiAgICAgICAgICAgICAgICAvLyBpZihlLmlucHV0VHlwZSE9PVwiaW5zZXJ0UGFyYWdyYXBoXCIpe1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyAgICAgQ29udGVudEVsZW1lbnQ6amVmZi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXJ0aWNsZVwiKVswXS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIH0sKCk9PntcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkNoYWNoYSBkb25lXCIpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyBlbHNle1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIENvbnRlbnRFbGVtZW50OmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgICAgIC8vICAgICB9LCgpPT57XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkNoYWNoYSBkb25lXCIpXG4gICAgICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIFxuXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICBcbiAgICAgICBcbiAgICAgICAgICAgICAgICBpZihhcnRpY2xlLmZpcnN0Q2hpbGQuaW5uZXJUZXh0LnRyaW0oKS5sZW5ndGg9PTApe1xuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmZpcnN0Q2hpbGQuaW5uZXJUZXh0PVwiflwiXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQnJlYWtpbmcgcGFyYWdyYXBoIGFuZCBvcmdhbmlzaW5nIElEIFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1jdXJzb3JfZnVuY3Rpb24tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICBcbiAgIFxuXG4gICAgICAgXG5cbiBcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICAvLyBmb3IoaT0wO2k8Y29udGVudC5sZW5ndGg7aSsrKXtcbiAgICAgICAgLy8gICAgIGNvbnRlbnRbaV0uYWRkRXZlbnRMaXN0ZW5lcigpXG4gICAgICAgIC8vIH1cblxuICAgICAgIFxuXG5cbiAgICAgIFxuICAgIH1cblxuICAgIFxuXG4gICAgcmVuZGVyKCkgeyBcbiAgICAgIFxuICAgICAgICByZXR1cm4gKCAgXG4gICAgICAgICAgICA8PlxuICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlXCIgICBjb250ZW50RWRpdGFibGU9XCJ0cnVlXCIgID5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNvbnRlbnQnIGlkPVwiMVwiICBjb250ZW50RWRpdGFibGU9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgVGhpcyBpcyBwYXJ0IDEgVGhpcyBpcyBwYXJ0IDIgVGhpcyBpcyBwYXJ0IDNcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPENvbnRyb2xiYXIvPlxuXG4gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9XG59XG4gXG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgXG4gICAgICAgIEZvbnQ6c3RhdGUuRWRpdC5Gb250XG5cblxuICAgIH1cbn1cblxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBTZXQ6IChkaXYpID0+IGRpc3BhdGNoKGFjdGlvbnMuU2VsZWN0U3VjY2VzcyhkaXYpKSxcbiAgICAgICAgXG4gIFxuXG4gICAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBXcml0aW5nO1xuZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoV3JpdGluZykpXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSU1QT1JUUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG4vLyBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuLy8gaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2F1dGgnO1xuXG5cblxuXG5cbi8vIGF4aW9zLmRlZmF1bHRzLnhzcmZIZWFkZXJOYW1lID0gXCJYLUNTUkZUT0tFTlwiO1xuLy8gYXhpb3MuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUgPSBcImNzcmZ0b2tlblwiO1xuXG5cblxuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tX19SRURVWC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgSldUOiBzdGF0ZS5qd3QsXG4gICAgXG5cbi8vICAgICB9XG4vLyB9XG5cbi8vIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIGRlY29kZTogKEpXVCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5hdXRoSldUKEpXVCkpLFxuLy8gICAgICAgICBDaGVja1VzZXI6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMuYXV0aENoZWNrU3RhdGUoKSksXG5cbi8vICAgICB9XG4vLyB9XG5cbi8vIC8vIGV4cG9ydCBkZWZhdWx0IFdyaXRpbmdcbi8vIGV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFdyaXRpbmcpKVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29udHJvbGJhciIsImNvbm5lY3QiLCJhY3Rpb25zIiwiV3JpdGluZyIsInJlbmRlciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRlbnRFZGl0YWJsZSIsImlkIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiQ29udGVudEVsZW1lbnQiLCJhY3RpdmUiLCJGb250IiwiSURfaW5kZXgiLCJzZWxlY3RlZCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImFydGljbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjaGVjayIsImNvbXBvbmVudERpZE1vdW50IiwiY29udGVudCIsImNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImV4ZWNDb21tYW5kIiwic2V0U3RhdGUiLCJjbG9uZU5vZGUiLCJpbnB1dFR5cGUiLCJqIiwiY2hpbGRFbGVtZW50Q291bnQiLCJjaGlsZHJlbiIsImlubmVyVGV4dCIsInRyaW0iLCJjb25zb2xlIiwibG9nIiwiaWRJbmQiLCJmaXJzdENoaWxkIiwibGVuZ3RoIiwic2VsZWN0ZWREaXZSZWR1eCIsIlNldCIsIm1hcFN0YXRlVG9Qcm9wcyIsIkVkaXQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIlNlbGVjdFN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Writing.js\n"));

/***/ })

});