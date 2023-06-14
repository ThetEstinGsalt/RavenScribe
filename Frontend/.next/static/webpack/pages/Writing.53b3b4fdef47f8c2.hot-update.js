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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/components/Controlbar */ \"./public/components/Controlbar.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/Editing */ \"./store/actions/Editing.js\");\n\n\n\n\n\nclass Writing extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article\",\n                    contentEditable: \"true\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blog-content\",\n                        id: \"1\",\n                        contentEditable: \"true\",\n                        children: \"Dispatch on next.js redux vesion 2.2.02.vs\"\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                        lineNumber: 255,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 253,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 266,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            ContentElement: null,\n            active: this.props.Font,\n            ID_index: 1,\n            selected: null\n        };\n        // }\n        this.componentDidUpdate = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let check = document.getElementsByClassName(\"blog-content\");\n            let selected = document.getElementById(this.state.selected);\n            for(let j = 0; j < check.length; j++){\n                check[j].classList.remove(\"SelectedDiv\");\n            }\n            if (this.state.selected !== null) {\n                let selected = document.getElementById(this.state.selected);\n                selected.classList.add(\"SelectedDiv\");\n            } else {\n                for(let j = 0; j < check.length; j++){\n                    check[j].classList.remove(\"SelectedDiv\");\n                }\n            }\n            console.log(\"changed prop\");\n        // if(this.props.Font!==this.state.clicked){\n        //     let NewElem=document.createElement(\"div\")\n        //     NewElem.className=this.props.Font\n        //     NewElem.innerText=\"Your Heading\"\n        //     article.insertBefore(NewElem,selected)\n        //     this.setState({\n        //         clicked:this.props.Font\n        //     })\n        // }\n        // let Font=this.props.Font\n        };\n        this.componentDidMount = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let content = document.getElementsByClassName(\"blog-content\");\n            // ----------------------------------------\n            // To stop HTML from breaking if user pastes some text other than writing it\n            var ce = article;\n            ce.addEventListener(\"paste\", function(e) {\n                e.preventDefault();\n                var text = e.clipboardData.getData(\"text/plain\");\n                document.execCommand(\"insertText\", false, text);\n            });\n            // ------------------------------------\n            // ----------------------------------------------\n            // Event listeners on article \n            for(let k = 0; k < content.length; k++){\n                content[k].onclick = ()=>{\n                    this.setState({\n                        selected: content[k].id\n                    });\n                };\n            }\n            article.addEventListener(\"input\", (e)=>{\n                if ((e.inputType == \"insertParagraph\" || e.data == null) && this.props.Font == \"blog-content\") {\n                    for(let j = 0; j < article.childElementCount; j++){\n                        if (j !== 0) {\n                            if (article.children[j].id == article.children[j - 1].id) {\n                                if (article.children[j].innerText.trim() !== \"\") {\n                                    article.children[j].id = \"F\".concat(article.children[j].id);\n                                    article.children[j - 1].id = \"B\".concat(article.children[j - 1].id);\n                                } else {\n                                    var idInd = this.state.ID_index + 1;\n                                    this.setState({\n                                        ID_index: idInd\n                                    });\n                                    article.children[j].id = idInd;\n                                }\n                                this.setState({\n                                    selected: null\n                                });\n                                for(let k = 0; k < content.length; k++){\n                                    content[k].onclick = ()=>{\n                                        this.setState({\n                                            selected: content[k].id\n                                        });\n                                    };\n                                }\n                            }\n                        }\n                    }\n                } else {}\n                if (article.firstChild.innerText.trim().length == 0) {\n                    article.firstChild.innerText = \"~\";\n                }\n            });\n        };\n        // this.heading = this.heading.bind(this);\n        // this.componentDidMount=this.componentDidMount.bind(this)\n        this.selectedDivRedux = (div)=>{\n            this.props.Set(div);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        Font: state.Edit.Font,\n        Insert: state.Edit.Insert\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Set: (div)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__.SelectSuccess(div))\n    };\n};\n// export default Writing;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Writing));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0M7SUFDeEIsT0FBTztRQUNITCxLQUFLLENBQUMvQyxNQUFRb0QsU0FBU3ZELGlFQUFxQndELENBQUNyRDtJQUlqRDtBQUNKO0FBRUEsMEJBQTBCO0FBQzFCLCtEQUFnQkosb0RBQU9BLENBQUNvRCxpQkFBZ0JHLG9CQUFvQnJELFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV3JpdGluZy5qcz9mMWFkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbnRyb2xiYXIgZnJvbSAnLi4vcHVibGljL2NvbXBvbmVudHMvQ29udHJvbGJhcic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL0VkaXRpbmcnXG5jbGFzcyBXcml0aW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgLy8gdGhpcy5oZWFkaW5nID0gdGhpcy5oZWFkaW5nLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuY29tcG9uZW50RGlkTW91bnQ9dGhpcy5jb21wb25lbnREaWRNb3VudC5iaW5kKHRoaXMpXG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZERpdlJlZHV4PShkaXYpPT57XG4gICAgICAgICAgICB0aGlzLnByb3BzLlNldChkaXYpXG4gICAgICAgIH1cblxuXG5cblxuICAgIH1cblxuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIENvbnRlbnRFbGVtZW50Om51bGwsXG4gICAgICAgIGFjdGl2ZTp0aGlzLnByb3BzLkZvbnQsXG4gICAgICAgIElEX2luZGV4OjEsXG4gICAgICAgIHNlbGVjdGVkOm51bGwsXG5cblxuICAgICAgfVxuXG5cblxuICAgIC8vIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZT0oKT0+e1xuICAgICAgICBsZXQgYXJ0aWNsZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXJ0aWNsZVwiKVswXVxuICAgICAgICBsZXQgY2hlY2s9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJsb2ctY29udGVudFwiKVxuICAgICAgICBsZXQgc2VsZWN0ZWQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zdGF0ZS5zZWxlY3RlZClcbiAgICAgICAgZm9yKGxldCBqPTA7ajxjaGVjay5sZW5ndGg7aisrKXtcbiAgICAgICAgICAgIGNoZWNrW2pdLmNsYXNzTGlzdC5yZW1vdmUoXCJTZWxlY3RlZERpdlwiKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZCE9PW51bGwpe1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc3RhdGUuc2VsZWN0ZWQpXG4gICAgICAgICAgICBzZWxlY3RlZC5jbGFzc0xpc3QuYWRkKFwiU2VsZWN0ZWREaXZcIilcblxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8Y2hlY2subGVuZ3RoO2orKyl7XG4gICAgICAgICAgICAgICAgY2hlY2tbal0uY2xhc3NMaXN0LnJlbW92ZShcIlNlbGVjdGVkRGl2XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlZCBwcm9wXCIpXG5cbiAgICAgICAgXG4gICAgICAgIC8vIGlmKHRoaXMucHJvcHMuRm9udCE9PXRoaXMuc3RhdGUuY2xpY2tlZCl7XG4gICAgICAgIC8vICAgICBsZXQgTmV3RWxlbT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIC8vICAgICBOZXdFbGVtLmNsYXNzTmFtZT10aGlzLnByb3BzLkZvbnRcbiAgICAgICAgLy8gICAgIE5ld0VsZW0uaW5uZXJUZXh0PVwiWW91ciBIZWFkaW5nXCJcbiAgICAgICAgLy8gICAgIGFydGljbGUuaW5zZXJ0QmVmb3JlKE5ld0VsZW0sc2VsZWN0ZWQpXG5cbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAvLyAgICAgICAgIGNsaWNrZWQ6dGhpcy5wcm9wcy5Gb250XG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyB9XG5cblxuICAgXG4gICAgIFxuICAgICBcblxuICAgICAgICAvLyBsZXQgRm9udD10aGlzLnByb3BzLkZvbnRcblxuXG5cbiAgICAgICAgXG5cblxuXG4gICAgIFxuICAgICAgICBcblxuICAgICAgIFxuXG5cblxuICAgICAgICBcblxuIFxuICAgXG4gICAgfVxuICAgIFxuICAgIGNvbXBvbmVudERpZE1vdW50PSgpPT57XG4gICAgICAgIGxldCBhcnRpY2xlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdXG4gICAgICAgIGxldCBjb250ZW50PWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9nLWNvbnRlbnRcIilcblxuICBcblxuICAgICAgIFxuXG5cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vIFRvIHN0b3AgSFRNTCBmcm9tIGJyZWFraW5nIGlmIHVzZXIgcGFzdGVzIHNvbWUgdGV4dCBvdGhlciB0aGFuIHdyaXRpbmcgaXRcblxuICAgICAgICB2YXIgY2UgPSBhcnRpY2xlXG4gICAgICAgIGNlLmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB2YXIgdGV4dCA9IGUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJylcbiAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0VGV4dCcsIGZhbHNlLCB0ZXh0KVxuICAgICAgICB9KVxuXG5cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXJzIG9uIGFydGljbGUgXG5cbiAgICAgICAgZm9yKGxldCBrPTA7azxjb250ZW50Lmxlbmd0aDtrKyspe1xuXG4gICAgICAgICAgICBjb250ZW50W2tdLm9uY2xpY2s9KCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6Y29udGVudFtrXS5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgIFxuXG5cblxuXG4gICAgICAgIH1cbiAgICAgXG4gICAgICAgICAgICBhcnRpY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywoZSk9PntcbiAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgaWYoKGUuaW5wdXRUeXBlPT1cImluc2VydFBhcmFncmFwaFwiIHx8IGUuZGF0YSA9PSBudWxsKSAmJiB0aGlzLnByb3BzLkZvbnQ9PVwiYmxvZy1jb250ZW50XCIpe1xuXG5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7ajxhcnRpY2xlLmNoaWxkRWxlbWVudENvdW50O2orKyl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaiE9PTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFydGljbGUuY2hpbGRyZW5bal0uaWQ9PWFydGljbGUuY2hpbGRyZW5bai0xXS5pZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFydGljbGUuY2hpbGRyZW5bal0uaW5uZXJUZXh0LnRyaW0oKSAhPT1cIlwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuY2hpbGRyZW5bal0uaWQ9YEYke2FydGljbGUuY2hpbGRyZW5bal0uaWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5jaGlsZHJlbltqLTFdLmlkPWBCJHthcnRpY2xlLmNoaWxkcmVuW2otMV0uaWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZEluZD10aGlzLnN0YXRlLklEX2luZGV4KzFcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElEX2luZGV4OiBpZEluZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmNoaWxkcmVuW2pdLmlkPSBpZEluZFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOm51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBrPTA7azxjb250ZW50Lmxlbmd0aDtrKyspe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50W2tdLm9uY2xpY2s9KCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6Y29udGVudFtrXS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cblxuICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXG4gICAgXG4gICAgXG4gICAgICAgXG5cblxuICAgICAgICAgICAgICAgIGlmKGFydGljbGUuZmlyc3RDaGlsZC5pbm5lclRleHQudHJpbSgpLmxlbmd0aD09MCl7XG4gICAgICAgICAgICAgICAgICAgIGFydGljbGUuZmlyc3RDaGlsZC5pbm5lclRleHQ9XCJ+XCJcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICBcbiAgICBcbiAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgXG4gICBcblxuICAgICAgIFxuXG4gXG4gICAgXG5cbiAgICAgIFxuICAgIH1cblxuICAgIFxuXG4gICAgcmVuZGVyKCkgeyBcbiAgICAgIFxuICAgICAgICByZXR1cm4gKCAgXG4gICAgICAgICAgICA8PlxuICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlXCIgICBjb250ZW50RWRpdGFibGU9XCJ0cnVlXCIgID5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNvbnRlbnQnIGlkPVwiMVwiICBjb250ZW50RWRpdGFibGU9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgRGlzcGF0Y2ggb24gbmV4dC5qcyByZWR1eCB2ZXNpb24gMi4yLjAyLnZzXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgIFxuICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPENvbnRyb2xiYXIvPlxuXG4gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9XG59XG4gXG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgXG4gICAgICAgIEZvbnQ6c3RhdGUuRWRpdC5Gb250LFxuICAgICAgICBJbnNlcnQ6c3RhdGUuRWRpdC5JbnNlcnQsXG5cblxuXG4gICAgfVxufVxuXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIFNldDogKGRpdikgPT4gZGlzcGF0Y2goYWN0aW9ucy5TZWxlY3RTdWNjZXNzKGRpdikpLFxuICAgICAgICBcbiAgXG5cbiAgICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFdyaXRpbmc7XG5leHBvcnQgZGVmYXVsdCAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShXcml0aW5nKSlcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1JTVBPUlRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbi8vIGltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG4vLyBpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvYXV0aCc7XG5cblxuXG5cblxuLy8gYXhpb3MuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSBcIlgtQ1NSRlRPS0VOXCI7XG4vLyBheGlvcy5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9IFwiY3NyZnRva2VuXCI7XG5cblxuXG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1fX1JFRFVYLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBKV1Q6IHN0YXRlLmp3dCxcbiAgICBcblxuLy8gICAgIH1cbi8vIH1cblxuLy8gY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgZGVjb2RlOiAoSldUKSA9PiBkaXNwYXRjaChhY3Rpb25zLmF1dGhKV1QoSldUKSksXG4vLyAgICAgICAgIENoZWNrVXNlcjogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5hdXRoQ2hlY2tTdGF0ZSgpKSxcblxuLy8gICAgIH1cbi8vIH1cblxuLy8gLy8gZXhwb3J0IGRlZmF1bHQgV3JpdGluZ1xuLy8gZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoV3JpdGluZykpXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDb250cm9sYmFyIiwiY29ubmVjdCIsImFjdGlvbnMiLCJXcml0aW5nIiwicmVuZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGVudEVkaXRhYmxlIiwiaWQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJDb250ZW50RWxlbWVudCIsImFjdGl2ZSIsIkZvbnQiLCJJRF9pbmRleCIsInNlbGVjdGVkIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiYXJ0aWNsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNoZWNrIiwiZ2V0RWxlbWVudEJ5SWQiLCJqIiwibGVuZ3RoIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudERpZE1vdW50IiwiY29udGVudCIsImNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImV4ZWNDb21tYW5kIiwiayIsIm9uY2xpY2siLCJzZXRTdGF0ZSIsImlucHV0VHlwZSIsImRhdGEiLCJjaGlsZEVsZW1lbnRDb3VudCIsImNoaWxkcmVuIiwiaW5uZXJUZXh0IiwidHJpbSIsImlkSW5kIiwiZmlyc3RDaGlsZCIsInNlbGVjdGVkRGl2UmVkdXgiLCJTZXQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJFZGl0IiwiSW5zZXJ0IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJTZWxlY3RTdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Writing.js\n"));

/***/ })

});