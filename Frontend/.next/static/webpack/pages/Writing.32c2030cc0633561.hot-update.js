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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/components/Controlbar */ \"./public/components/Controlbar.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/Editing */ \"./store/actions/Editing.js\");\n\n\n\n\n\nclass Writing extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article\",\n                    contentEditable: \"true\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blog-content\",\n                        id: \"1\",\n                        contentEditable: \"true\",\n                        children: \"Dispatch on next.js redux vesion 2.2.02.vs\"\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                        lineNumber: 283,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 281,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 294,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            ContentElement: null,\n            active: this.props.Font,\n            ID_index: 1,\n            selected: null,\n            clicked: \"blog-content\"\n        };\n        // }\n        this.componentDidUpdate = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let check = document.getElementsByClassName(\"article\")[0].children;\n            let selected = document.getElementById(this.state.selected);\n            for(let j = 0; j < check.length; j++){\n                check[j].classList.remove(\"SelectedDiv\");\n            }\n            if (this.state.selected !== null) {\n                let selected = document.getElementById(this.state.selected);\n                selected.classList.add(\"SelectedDiv\");\n            } else {\n                for(let j = 0; j < check.length; j++){\n                    check[j].classList.remove(\"SelectedDiv\");\n                }\n            }\n            if (this.props.Font !== this.state.clicked) {\n                let NewElem = document.createElement(\"div\");\n                if (this.props.Font.includes(\"-\")) {\n                    NewElem.className = this.props.Font.toString().split(\"-\")[0];\n                } else {\n                    NewElem.className = this.props.Font;\n                }\n                NewElem.innerText = \"Your Heading\";\n                article.insertBefore(NewElem, selected);\n                console.log(this.state.selected);\n                this.setState({\n                    clicked: this.props.Font\n                });\n            }\n        // for(let k=0;k<check.length;k++){\n        //     check[k].onclick=()=>{\n        //         this.setState({\n        //             selected:check[k].id\n        //         })\n        //     }\n        // }\n        // let Font=this.props.Font\n        };\n        this.componentDidMount = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let content = document.getElementsByClassName(\"blog-content\");\n            // let content=document.getElementsByClassName(\"article\")[0].children\n            // ----------------------------------------\n            // To stop HTML from breaking if user pastes some text other than writing it\n            var ce = article;\n            ce.addEventListener(\"paste\", function(e) {\n                e.preventDefault();\n                var text = e.clipboardData.getData(\"text/plain\");\n                document.execCommand(\"insertText\", false, text);\n            });\n            // ------------------------------------\n            // ----------------------------------------------\n            // Event listeners on article \n            for(let k = 0; k < content.length; k++){\n                content[k].onclick = ()=>{\n                    this.setState({\n                        selected: content[k].id\n                    });\n                };\n            }\n            article.addEventListener(\"input\", (e)=>{\n                if ((e.inputType == \"insertParagraph\" || e.data == null) && this.props.Font == \"blog-content\") {\n                    for(let j = 0; j < article.childElementCount; j++){\n                        if (j !== 0) {\n                            if (article.children[j].id == article.children[j - 1].id) {\n                                if (article.children[j].innerText.trim() !== \"\") {\n                                    article.children[j].id = \"F\".concat(article.children[j].id);\n                                    article.children[j - 1].id = \"B\".concat(article.children[j - 1].id);\n                                } else {\n                                    var idInd = this.state.ID_index + 1;\n                                    this.setState({\n                                        ID_index: idInd\n                                    });\n                                    article.children[j].id = idInd;\n                                }\n                                this.setState({\n                                    selected: null\n                                });\n                                for(let k = 0; k < content.length; k++){\n                                    content[k].onclick = ()=>{\n                                        this.setState({\n                                            selected: content[k].id\n                                        });\n                                    };\n                                }\n                            }\n                        }\n                    }\n                } else {}\n                if (article.firstChild.innerText.trim().length == 0) {\n                    article.firstChild.innerText = \"~\";\n                }\n            });\n        };\n        // this.heading = this.heading.bind(this);\n        // this.componentDidMount=this.componentDidMount.bind(this)\n        this.selectedDivRedux = (div)=>{\n            this.props.Set(div);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        Font: state.Edit.Font,\n        Insert: state.Edit.Insert\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Set: (div)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__.SelectSuccess(div))\n    };\n};\n// export default Writing;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Writing));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7NENBQ1Z2QixVQUFTeUIsT0FBTyxDQUFDUyxFQUFFLENBQUMxQzt3Q0FDeEI7b0NBQ0o7Z0NBTUo7NEJBTUo7d0JBRUo7b0JBQUM7Z0JBR1QsT0FDSSxDQVFLO2dCQVFULElBQUdXLFFBQVFzQyxXQUFXdEIsVUFBVW9CLE9BQU83QixVQUFRLEdBQUU7b0JBQzdDUCxRQUFRc0MsV0FBV3RCLFlBQVU7Z0JBR2pDO1lBTUo7UUFXUjtRQW5RSSwwQ0FBMEM7UUFDMUMsMkRBQTJEO1FBRTNELElBQUksQ0FBQ3VCLG1CQUFpQixDQUFDckQ7WUFDbkIsSUFBSSxDQUFDSyxNQUFNaUQsSUFBSXREO1FBQ25CO0lBS0o7QUFzUko7QUFJQSxNQUFNdUQsa0JBQWtCLENBQUNqRDtJQUNyQixPQUFPO1FBRUhHLE1BQUtILE1BQU1rRCxLQUFLL0M7UUFDaEJnRCxRQUFPbkQsTUFBTWtELEtBQUtDO0lBSXRCO0FBQ0o7QUFHQSxNQUFNQyxxQkFBcUIsQ0FBQ0M7SUFDeEIsT0FBTztRQUNITCxLQUFLLENBQUN0RCxNQUFRMkQsU0FBUzlELGlFQUFxQitELENBQUM1RDtJQUlqRDtBQUNKO0FBRUEsMEJBQTBCO0FBQzFCLCtEQUFnQkosb0RBQU9BLENBQUMyRCxpQkFBZ0JHLG9CQUFvQjVELFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV3JpdGluZy5qcz9mMWFkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbnRyb2xiYXIgZnJvbSAnLi4vcHVibGljL2NvbXBvbmVudHMvQ29udHJvbGJhcic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL0VkaXRpbmcnXG5jbGFzcyBXcml0aW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgLy8gdGhpcy5oZWFkaW5nID0gdGhpcy5oZWFkaW5nLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuY29tcG9uZW50RGlkTW91bnQ9dGhpcy5jb21wb25lbnREaWRNb3VudC5iaW5kKHRoaXMpXG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZERpdlJlZHV4PShkaXYpPT57XG4gICAgICAgICAgICB0aGlzLnByb3BzLlNldChkaXYpXG4gICAgICAgIH1cblxuXG5cblxuICAgIH1cblxuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIENvbnRlbnRFbGVtZW50Om51bGwsXG4gICAgICAgIGFjdGl2ZTp0aGlzLnByb3BzLkZvbnQsXG4gICAgICAgIElEX2luZGV4OjEsXG4gICAgICAgIHNlbGVjdGVkOm51bGwsXG4gICAgICAgIGNsaWNrZWQ6J2Jsb2ctY29udGVudCdcblxuXG4gICAgICB9XG5cblxuXG4gICAgLy8gfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlPSgpPT57XG4gICAgICAgIGxldCBhcnRpY2xlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdXG4gICAgICAgIGxldCBjaGVjaz1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXJ0aWNsZVwiKVswXS5jaGlsZHJlblxuICAgICAgICBsZXQgc2VsZWN0ZWQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zdGF0ZS5zZWxlY3RlZClcblxuICAgICAgICBmb3IobGV0IGo9MDtqPGNoZWNrLmxlbmd0aDtqKyspe1xuICAgICAgICAgICAgY2hlY2tbal0uY2xhc3NMaXN0LnJlbW92ZShcIlNlbGVjdGVkRGl2XCIpXG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnN0YXRlLnNlbGVjdGVkIT09bnVsbCl7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zdGF0ZS5zZWxlY3RlZClcbiAgIFxuICAgICAgICAgICAgc2VsZWN0ZWQuY2xhc3NMaXN0LmFkZChcIlNlbGVjdGVkRGl2XCIpXG5cblxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPGNoZWNrLmxlbmd0aDtqKyspe1xuICAgICAgICAgICAgICAgIGNoZWNrW2pdLmNsYXNzTGlzdC5yZW1vdmUoXCJTZWxlY3RlZERpdlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBcblxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5wcm9wcy5Gb250IT09dGhpcy5zdGF0ZS5jbGlja2VkKXtcbiAgICAgICAgICAgIGxldCBOZXdFbGVtPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5Gb250LmluY2x1ZGVzKFwiLVwiKSl7XG4gICAgICAgICAgICAgICAgTmV3RWxlbS5jbGFzc05hbWU9KHRoaXMucHJvcHMuRm9udCkudG9TdHJpbmcoKS5zcGxpdChcIi1cIilbMF1cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIE5ld0VsZW0uY2xhc3NOYW1lPXRoaXMucHJvcHMuRm9udFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBOZXdFbGVtLmlubmVyVGV4dD1cIllvdXIgSGVhZGluZ1wiXG4gICAgICAgICAgICBhcnRpY2xlLmluc2VydEJlZm9yZShOZXdFbGVtLHNlbGVjdGVkKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zZWxlY3RlZClcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY2xpY2tlZDp0aGlzLnByb3BzLkZvbnRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3IobGV0IGs9MDtrPGNoZWNrLmxlbmd0aDtrKyspe1xuXG4gICAgICAgIC8vICAgICBjaGVja1trXS5vbmNsaWNrPSgpPT57XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIC8vICAgICAgICAgICAgIHNlbGVjdGVkOmNoZWNrW2tdLmlkXG4gICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgLy8gICAgIH1cbiAgICAgXG5cblxuXG5cbiAgICAgICAgLy8gfVxuXG5cbiAgIFxuICAgICBcbiAgICAgXG5cbiAgICAgICAgLy8gbGV0IEZvbnQ9dGhpcy5wcm9wcy5Gb250XG5cblxuXG4gICAgICAgIFxuXG5cblxuICAgICBcbiAgICAgICAgXG5cbiAgICAgICBcblxuXG5cbiAgICAgICAgXG5cbiBcbiAgIFxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnREaWRNb3VudD0oKT0+e1xuICAgICAgICBsZXQgYXJ0aWNsZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXJ0aWNsZVwiKVswXVxuICAgICAgICBsZXQgY29udGVudD1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxvZy1jb250ZW50XCIpXG4gICAgICAgIC8vIGxldCBjb250ZW50PWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdLmNoaWxkcmVuXG5cbiAgXG5cbiAgICAgICBcblxuXG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyBUbyBzdG9wIEhUTUwgZnJvbSBicmVha2luZyBpZiB1c2VyIHBhc3RlcyBzb21lIHRleHQgb3RoZXIgdGhhbiB3cml0aW5nIGl0XG5cbiAgICAgICAgdmFyIGNlID0gYXJ0aWNsZVxuICAgICAgICBjZS5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdmFyIHRleHQgPSBlLmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpXG4gICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydFRleHQnLCBmYWxzZSwgdGV4dClcbiAgICAgICAgfSlcblxuXG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVycyBvbiBhcnRpY2xlIFxuXG4gICAgICAgIGZvcihsZXQgaz0wO2s8Y29udGVudC5sZW5ndGg7aysrKXtcblxuICAgICAgICAgICAgY29udGVudFtrXS5vbmNsaWNrPSgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOmNvbnRlbnRba10uaWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICBcblxuXG5cblxuICAgICAgICB9XG4gICAgIFxuICAgICAgICAgICAgYXJ0aWNsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsKGUpPT57XG4gICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGlmKChlLmlucHV0VHlwZT09XCJpbnNlcnRQYXJhZ3JhcGhcIiB8fCBlLmRhdGEgPT0gbnVsbCkgJiYgdGhpcy5wcm9wcy5Gb250PT1cImJsb2ctY29udGVudFwiKXtcblxuXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8YXJ0aWNsZS5jaGlsZEVsZW1lbnRDb3VudDtqKyspe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGohPT0wKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihhcnRpY2xlLmNoaWxkcmVuW2pdLmlkPT1hcnRpY2xlLmNoaWxkcmVuW2otMV0uaWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihhcnRpY2xlLmNoaWxkcmVuW2pdLmlubmVyVGV4dC50cmltKCkgIT09XCJcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmNoaWxkcmVuW2pdLmlkPWBGJHthcnRpY2xlLmNoaWxkcmVuW2pdLmlkfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuY2hpbGRyZW5bai0xXS5pZD1gQiR7YXJ0aWNsZS5jaGlsZHJlbltqLTFdLmlkfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWRJbmQ9dGhpcy5zdGF0ZS5JRF9pbmRleCsxXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJRF9pbmRleDogaWRJbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5jaGlsZHJlbltqXS5pZD0gaWRJbmRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDpudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaz0wO2s8Y29udGVudC5sZW5ndGg7aysrKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFtrXS5vbmNsaWNrPSgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOmNvbnRlbnRba10uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG5cbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIFxuICAgIFxuICAgIFxuICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICBpZihhcnRpY2xlLmZpcnN0Q2hpbGQuaW5uZXJUZXh0LnRyaW0oKS5sZW5ndGg9PTApe1xuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmZpcnN0Q2hpbGQuaW5uZXJUZXh0PVwiflwiXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgXG4gICAgXG4gICAgICAgIFxuICAgIFxuICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgIFxuICAgXG5cbiAgICAgICBcblxuIFxuICAgIFxuXG4gICAgICBcbiAgICB9XG5cbiAgICBcblxuICAgIHJlbmRlcigpIHsgXG4gICAgICBcbiAgICAgICAgcmV0dXJuICggIFxuICAgICAgICAgICAgPD5cbiAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiICAgY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiICA+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvZy1jb250ZW50JyBpZD1cIjFcIiAgY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIERpc3BhdGNoIG9uIG5leHQuanMgcmVkdXggdmVzaW9uIDIuMi4wMi52c1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxDb250cm9sYmFyLz5cblxuICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuIFxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgIFxuICAgICAgICBGb250OnN0YXRlLkVkaXQuRm9udCxcbiAgICAgICAgSW5zZXJ0OnN0YXRlLkVkaXQuSW5zZXJ0LFxuXG5cblxuICAgIH1cbn1cblxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBTZXQ6IChkaXYpID0+IGRpc3BhdGNoKGFjdGlvbnMuU2VsZWN0U3VjY2VzcyhkaXYpKSxcbiAgICAgICAgXG4gIFxuXG4gICAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBXcml0aW5nO1xuZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoV3JpdGluZykpXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSU1QT1JUUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG4vLyBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuLy8gaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2F1dGgnO1xuXG5cblxuXG5cbi8vIGF4aW9zLmRlZmF1bHRzLnhzcmZIZWFkZXJOYW1lID0gXCJYLUNTUkZUT0tFTlwiO1xuLy8gYXhpb3MuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUgPSBcImNzcmZ0b2tlblwiO1xuXG5cblxuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tX19SRURVWC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgSldUOiBzdGF0ZS5qd3QsXG4gICAgXG5cbi8vICAgICB9XG4vLyB9XG5cbi8vIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIGRlY29kZTogKEpXVCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5hdXRoSldUKEpXVCkpLFxuLy8gICAgICAgICBDaGVja1VzZXI6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMuYXV0aENoZWNrU3RhdGUoKSksXG5cbi8vICAgICB9XG4vLyB9XG5cbi8vIC8vIGV4cG9ydCBkZWZhdWx0IFdyaXRpbmdcbi8vIGV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFdyaXRpbmcpKVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29udHJvbGJhciIsImNvbm5lY3QiLCJhY3Rpb25zIiwiV3JpdGluZyIsInJlbmRlciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRlbnRFZGl0YWJsZSIsImlkIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiQ29udGVudEVsZW1lbnQiLCJhY3RpdmUiLCJGb250IiwiSURfaW5kZXgiLCJzZWxlY3RlZCIsImNsaWNrZWQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJhcnRpY2xlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2hlY2siLCJjaGlsZHJlbiIsImdldEVsZW1lbnRCeUlkIiwiaiIsImxlbmd0aCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIk5ld0VsZW0iLCJjcmVhdGVFbGVtZW50IiwiaW5jbHVkZXMiLCJ0b1N0cmluZyIsInNwbGl0IiwiaW5uZXJUZXh0IiwiaW5zZXJ0QmVmb3JlIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb250ZW50IiwiY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGV4dCIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwiZXhlY0NvbW1hbmQiLCJrIiwib25jbGljayIsImlucHV0VHlwZSIsImRhdGEiLCJjaGlsZEVsZW1lbnRDb3VudCIsInRyaW0iLCJpZEluZCIsImZpcnN0Q2hpbGQiLCJzZWxlY3RlZERpdlJlZHV4IiwiU2V0IiwibWFwU3RhdGVUb1Byb3BzIiwiRWRpdCIsIkluc2VydCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiU2VsZWN0U3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Writing.js\n"));

/***/ })

});