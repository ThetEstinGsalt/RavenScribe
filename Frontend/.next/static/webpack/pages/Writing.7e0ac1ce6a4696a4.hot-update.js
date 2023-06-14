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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/components/Controlbar */ \"./public/components/Controlbar.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/Editing */ \"./store/actions/Editing.js\");\n\n\n\n\n\nclass Writing extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article\",\n                    contentEditable: \"true\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blog-content\",\n                        id: \"1\",\n                        contentEditable: \"true\",\n                        children: \"Dispatch on next.js redux vesion 2.2.02.vs\"\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                        lineNumber: 244,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 242,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 255,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            ContentElement: null,\n            active: this.props.Font,\n            ID_index: 1,\n            selected: null\n        };\n        // }\n        this.componentDidUpdate = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let check = document.getElementsByClassName(\"blog-content\");\n            let selected = document.getElementById(this.state.selected);\n            for(let j = 0; j < check.length; j++){\n                check[j].classList.remove(\"SelectedDiv\");\n            }\n            if (this.state.selected !== null) {\n                let selected = document.getElementById(this.state.selected);\n                selected.classList.add(\"SelectedDiv\");\n            } else {\n                for(let j = 0; j < check.length; j++){\n                    check[j].classList.remove(\"SelectedDiv\");\n                }\n            }\n            if (this.props.Font !== \"blog-content\" && this.props.Font !== Font) {\n                let NewElem = document.createElement(\"div\");\n                NewElem.className = this.props.Font;\n                NewElem.innerText = \"Your Heading\";\n                article.insertBefore(NewElem, selected);\n            }\n            let Font = this.props.Font;\n        };\n        this.componentDidMount = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let content = document.getElementsByClassName(\"blog-content\");\n            // ----------------------------------------\n            // To stop HTML from breaking if user pastes some text other than writing it\n            var ce = article;\n            ce.addEventListener(\"paste\", function(e) {\n                e.preventDefault();\n                var text = e.clipboardData.getData(\"text/plain\");\n                document.execCommand(\"insertText\", false, text);\n            });\n            // ------------------------------------\n            // ----------------------------------------------\n            // Event listeners on article \n            for(let k = 0; k < content.length; k++){\n                content[k].onclick = ()=>{\n                    this.setState({\n                        selected: content[k].id\n                    });\n                };\n            }\n            article.addEventListener(\"input\", (e)=>{\n                if ((e.inputType == \"insertParagraph\" || e.data == null) && this.props.Font == \"blog-content\") {\n                    for(let j = 0; j < article.childElementCount; j++){\n                        if (j !== 0) {\n                            if (article.children[j].id == article.children[j - 1].id) {\n                                if (article.children[j].innerText.trim() !== \"\") {\n                                    article.children[j].id = \"F\".concat(article.children[j].id);\n                                    article.children[j - 1].id = \"B\".concat(article.children[j - 1].id);\n                                } else {\n                                    var idInd = this.state.ID_index + 1;\n                                    this.setState({\n                                        ID_index: idInd\n                                    });\n                                    article.children[j].id = idInd;\n                                }\n                                this.setState({\n                                    selected: null\n                                });\n                                for(let k = 0; k < content.length; k++){\n                                    content[k].onclick = ()=>{\n                                        this.setState({\n                                            selected: content[k].id\n                                        });\n                                    };\n                                }\n                            }\n                        }\n                    }\n                } else {}\n                if (article.firstChild.innerText.trim().length == 0) {\n                    article.firstChild.innerText = \"~\";\n                }\n            });\n        };\n        // this.heading = this.heading.bind(this);\n        // this.componentDidMount=this.componentDidMount.bind(this)\n        this.selectedDivRedux = (div)=>{\n            this.props.Set(div);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        Font: state.Edit.Font,\n        Insert: state.Edit.Insert\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Set: (div)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__.SelectSuccess(div))\n    };\n};\n// export default Writing;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Writing));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Xcml0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUl3QztBQUNpQjtBQUNuQjtBQUNhO0FBQ25ELE1BQU1LLGdCQUFnQkosNENBQVNBO0lBb08zQkssU0FBUztRQUVMLHFCQUNJOzs4QkFFQSw4REFBQ0M7b0JBQUlDLFdBQVU7b0JBQVlDLGlCQUFnQjs4QkFFdkMsNEVBQUNGO3dCQUFJQyxXQUFVO3dCQUFlRSxJQUFHO3dCQUFLRCxpQkFBZ0I7a0NBQU87Ozs7Ozs7Ozs7OzhCQVdqRSw4REFBQ1AscUVBQVVBOzs7Ozs7O0lBTW5CO0lBM1BBUyxZQUFZQyxLQUFLLENBQUU7UUFDZixLQUFLLENBQUNBO2FBZVZDLFFBQVE7WUFDSkMsZ0JBQWU7WUFDZkMsUUFBTyxJQUFJLENBQUNILE1BQU1JO1lBQ2xCQyxVQUFTO1lBQ1RDLFVBQVM7UUFFWDtRQUlGLElBQUk7YUFFSkMscUJBQW1CO1lBQ2YsSUFBSUMsVUFBUUMsU0FBU0MsdUJBQXVCLFVBQVUsQ0FBQyxFQUFFO1lBQ3pELElBQUlDLFFBQU1GLFNBQVNDLHVCQUF1QjtZQUMxQyxJQUFJSixXQUFTRyxTQUFTRyxlQUFlLElBQUksQ0FBQ1gsTUFBTUs7WUFDaEQsSUFBSSxJQUFJTyxJQUFFLEdBQUVBLElBQUVGLE1BQU1HLFFBQU9ELElBQUk7Z0JBQzNCRixLQUFLLENBQUNFLEVBQUUsQ0FBQ0UsVUFBVUMsT0FBTztZQUM5QjtZQUVBLElBQUcsSUFBSSxDQUFDZixNQUFNSyxhQUFXLE1BQUs7Z0JBQzFCLElBQUlBLFdBQVNHLFNBQVNHLGVBQWUsSUFBSSxDQUFDWCxNQUFNSztnQkFFaERBLFNBQVNTLFVBQVVFLElBQUk7WUFHM0IsT0FDSTtnQkFDQSxJQUFJLElBQUlKLElBQUUsR0FBRUEsSUFBRUYsTUFBTUcsUUFBT0QsSUFBSTtvQkFDM0JGLEtBQUssQ0FBQ0UsRUFBRSxDQUFDRSxVQUFVQyxPQUFPO2dCQUM5QjtZQUNKO1lBR0EsSUFBRyxJQUFJLENBQUNoQixNQUFNSSxTQUFPLGtCQUFrQixJQUFJLENBQUNKLE1BQU1JLFNBQU9BLE1BQUs7Z0JBQzFELElBQUljLFVBQVFULFNBQVNVLGNBQWM7Z0JBQ25DRCxRQUFRdEIsWUFBVSxJQUFJLENBQUNJLE1BQU1JO2dCQUM3QmMsUUFBUUUsWUFBVTtnQkFDbEJaLFFBQVFhLGFBQWFILFNBQVFaO1lBQ2pDO1lBR0EsSUFBSUYsT0FBSyxJQUFJLENBQUNKLE1BQU1JO1FBbUJ4QjthQUVBa0Isb0JBQWtCO1lBQ2QsSUFBSWQsVUFBUUMsU0FBU0MsdUJBQXVCLFVBQVUsQ0FBQyxFQUFFO1lBQ3pELElBQUlhLFVBQVFkLFNBQVNDLHVCQUF1QjtZQVE1QywyQ0FBMkM7WUFDM0MsNEVBQTRFO1lBRTVFLElBQUljLEtBQUtoQjtZQUNUZ0IsR0FBR0MsaUJBQWlCLFNBQVMsU0FBVUMsQ0FBQztnQkFDdENBLEVBQUVDO2dCQUNGLElBQUlDLE9BQU9GLEVBQUVHLGNBQWNDLFFBQVE7Z0JBQ25DckIsU0FBU3NCLFlBQVksY0FBYyxPQUFPSDtZQUM1QztZQUlBLHVDQUF1QztZQU12QyxpREFBaUQ7WUFDakQsOEJBQThCO1lBRTlCLElBQUksSUFBSUksSUFBRSxHQUFFQSxJQUFFVCxRQUFRVCxRQUFPa0IsSUFBSTtnQkFFN0JULE9BQU8sQ0FBQ1MsRUFBRSxDQUFDQyxVQUFRO29CQUNmLElBQUksQ0FBQ0MsU0FBUzt3QkFDVjVCLFVBQVNpQixPQUFPLENBQUNTLEVBQUUsQ0FBQ2xDO29CQUN4QjtnQkFDSjtZQU1KO1lBRUlVLFFBQVFpQixpQkFBaUIsU0FBUSxDQUFDQztnQkFHOUIsSUFBRyxDQUFDQSxFQUFFUyxhQUFXLHFCQUFxQlQsRUFBRVUsUUFBUSxJQUFHLEtBQU0sSUFBSSxDQUFDcEMsTUFBTUksUUFBTSxnQkFBZTtvQkFJckYsSUFBSSxJQUFJUyxJQUFFLEdBQUVBLElBQUVMLFFBQVE2QixtQkFBa0J4QixJQUFJO3dCQUl4QyxJQUFHQSxNQUFJLEdBQUU7NEJBQ0wsSUFBR0wsUUFBUThCLFFBQVEsQ0FBQ3pCLEVBQUUsQ0FBQ2YsTUFBSVUsUUFBUThCLFFBQVEsQ0FBQ3pCLElBQUUsRUFBRSxDQUFDZixJQUFHO2dDQUNoRCxJQUFHVSxRQUFROEIsUUFBUSxDQUFDekIsRUFBRSxDQUFDTyxVQUFVbUIsV0FBVSxJQUFHO29DQUMxQy9CLFFBQVE4QixRQUFRLENBQUN6QixFQUFFLENBQUNmLEtBQUcsSUFBMkIsT0FBdkJVLFFBQVE4QixRQUFRLENBQUN6QixFQUFFLENBQUNmO29DQUcvQ1UsUUFBUThCLFFBQVEsQ0FBQ3pCLElBQUUsRUFBRSxDQUFDZixLQUFHLElBQTZCLE9BQXpCVSxRQUFROEIsUUFBUSxDQUFDekIsSUFBRSxFQUFFLENBQUNmO2dDQUd2RCxPQUNJO29DQUNBLElBQUkwQyxRQUFNLElBQUksQ0FBQ3ZDLE1BQU1JLFdBQVM7b0NBRTlCLElBQUksQ0FBQzZCLFNBQVM7d0NBQ1Y3QixVQUFVbUM7b0NBQ2Q7b0NBSUFoQyxRQUFROEIsUUFBUSxDQUFDekIsRUFBRSxDQUFDZixLQUFJMEM7Z0NBSTVCO2dDQUNBLElBQUksQ0FBQ04sU0FBUztvQ0FDVjVCLFVBQVM7Z0NBQ2I7Z0NBQ0EsSUFBSSxJQUFJMEIsSUFBRSxHQUFFQSxJQUFFVCxRQUFRVCxRQUFPa0IsSUFBSTtvQ0FFN0JULE9BQU8sQ0FBQ1MsRUFBRSxDQUFDQyxVQUFRO3dDQUNmLElBQUksQ0FBQ0MsU0FBUzs0Q0FDVjVCLFVBQVNpQixPQUFPLENBQUNTLEVBQUUsQ0FBQ2xDO3dDQUN4QjtvQ0FDSjtnQ0FNSjs0QkFNSjt3QkFFSjtvQkFBQztnQkFHVCxPQUNJLENBUUs7Z0JBUVQsSUFBR1UsUUFBUWlDLFdBQVdyQixVQUFVbUIsT0FBT3pCLFVBQVEsR0FBRTtvQkFDN0NOLFFBQVFpQyxXQUFXckIsWUFBVTtnQkFHakM7WUFNSjtRQVdSO1FBNU5JLDBDQUEwQztRQUMxQywyREFBMkQ7UUFFM0QsSUFBSSxDQUFDc0IsbUJBQWlCLENBQUMvQztZQUNuQixJQUFJLENBQUNLLE1BQU0yQyxJQUFJaEQ7UUFDbkI7SUFLSjtBQStPSjtBQUlBLE1BQU1pRCxrQkFBa0IsQ0FBQzNDO0lBQ3JCLE9BQU87UUFFSEcsTUFBS0gsTUFBTTRDLEtBQUt6QztRQUNoQjBDLFFBQU83QyxNQUFNNEMsS0FBS0M7SUFHdEI7QUFDSjtBQUdBLE1BQU1DLHFCQUFxQixDQUFDQztJQUN4QixPQUFPO1FBQ0hMLEtBQUssQ0FBQ2hELE1BQVFxRCxTQUFTeEQsaUVBQXFCeUQsQ0FBQ3REO0lBSWpEO0FBQ0o7QUFFQSwwQkFBMEI7QUFDMUIsK0RBQWdCSixvREFBT0EsQ0FBQ3FELGlCQUFnQkcsb0JBQW9CdEQsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Xcml0aW5nLmpzP2YxYWQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29udHJvbGJhciBmcm9tICcuLi9wdWJsaWMvY29tcG9uZW50cy9Db250cm9sYmFyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvRWRpdGluZydcbmNsYXNzIFdyaXRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvLyB0aGlzLmhlYWRpbmcgPSB0aGlzLmhlYWRpbmcuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5jb21wb25lbnREaWRNb3VudD10aGlzLmNvbXBvbmVudERpZE1vdW50LmJpbmQodGhpcylcblxuICAgICAgICB0aGlzLnNlbGVjdGVkRGl2UmVkdXg9KGRpdik9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuU2V0KGRpdilcbiAgICAgICAgfVxuXG5cblxuXG4gICAgfVxuXG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgQ29udGVudEVsZW1lbnQ6bnVsbCxcbiAgICAgICAgYWN0aXZlOnRoaXMucHJvcHMuRm9udCxcbiAgICAgICAgSURfaW5kZXg6MSxcbiAgICAgICAgc2VsZWN0ZWQ6bnVsbFxuXG4gICAgICB9XG5cblxuXG4gICAgLy8gfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlPSgpPT57XG4gICAgICAgIGxldCBhcnRpY2xlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdXG4gICAgICAgIGxldCBjaGVjaz1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxvZy1jb250ZW50XCIpXG4gICAgICAgIGxldCBzZWxlY3RlZD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnN0YXRlLnNlbGVjdGVkKVxuICAgICAgICBmb3IobGV0IGo9MDtqPGNoZWNrLmxlbmd0aDtqKyspe1xuICAgICAgICAgICAgY2hlY2tbal0uY2xhc3NMaXN0LnJlbW92ZShcIlNlbGVjdGVkRGl2XCIpXG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnN0YXRlLnNlbGVjdGVkIT09bnVsbCl7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zdGF0ZS5zZWxlY3RlZClcblxuICAgICAgICAgICAgc2VsZWN0ZWQuY2xhc3NMaXN0LmFkZChcIlNlbGVjdGVkRGl2XCIpXG5cblxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPGNoZWNrLmxlbmd0aDtqKyspe1xuICAgICAgICAgICAgICAgIGNoZWNrW2pdLmNsYXNzTGlzdC5yZW1vdmUoXCJTZWxlY3RlZERpdlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICBcbiAgICAgICAgaWYodGhpcy5wcm9wcy5Gb250IT09J2Jsb2ctY29udGVudCcgJiYgdGhpcy5wcm9wcy5Gb250IT09Rm9udCl7XG4gICAgICAgICAgICBsZXQgTmV3RWxlbT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICBOZXdFbGVtLmNsYXNzTmFtZT10aGlzLnByb3BzLkZvbnRcbiAgICAgICAgICAgIE5ld0VsZW0uaW5uZXJUZXh0PVwiWW91ciBIZWFkaW5nXCJcbiAgICAgICAgICAgIGFydGljbGUuaW5zZXJ0QmVmb3JlKE5ld0VsZW0sc2VsZWN0ZWQpXG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBGb250PXRoaXMucHJvcHMuRm9udFxuXG5cblxuICAgICAgICBcblxuXG5cbiAgICAgXG4gICAgICAgIFxuXG4gICAgICAgXG5cblxuXG4gICAgICAgIFxuXG4gXG4gICBcbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50RGlkTW91bnQ9KCk9PntcbiAgICAgICAgbGV0IGFydGljbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFydGljbGVcIilbMF1cbiAgICAgICAgbGV0IGNvbnRlbnQ9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJsb2ctY29udGVudFwiKVxuXG4gIFxuXG4gICAgICAgXG5cblxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gVG8gc3RvcCBIVE1MIGZyb20gYnJlYWtpbmcgaWYgdXNlciBwYXN0ZXMgc29tZSB0ZXh0IG90aGVyIHRoYW4gd3JpdGluZyBpdFxuXG4gICAgICAgIHZhciBjZSA9IGFydGljbGVcbiAgICAgICAgY2UuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHZhciB0ZXh0ID0gZS5jbGlwYm9hcmREYXRhLmdldERhdGEoJ3RleHQvcGxhaW4nKVxuICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRUZXh0JywgZmFsc2UsIHRleHQpXG4gICAgICAgIH0pXG5cblxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lcnMgb24gYXJ0aWNsZSBcblxuICAgICAgICBmb3IobGV0IGs9MDtrPGNvbnRlbnQubGVuZ3RoO2srKyl7XG5cbiAgICAgICAgICAgIGNvbnRlbnRba10ub25jbGljaz0oKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDpjb250ZW50W2tdLmlkXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgXG5cblxuXG5cbiAgICAgICAgfVxuICAgICBcbiAgICAgICAgICAgIGFydGljbGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLChlKT0+e1xuICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBpZigoZS5pbnB1dFR5cGU9PVwiaW5zZXJ0UGFyYWdyYXBoXCIgfHwgZS5kYXRhID09IG51bGwpICYmIHRoaXMucHJvcHMuRm9udD09XCJibG9nLWNvbnRlbnRcIil7XG5cblxuICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDtqPGFydGljbGUuY2hpbGRFbGVtZW50Q291bnQ7aisrKXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihqIT09MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXJ0aWNsZS5jaGlsZHJlbltqXS5pZD09YXJ0aWNsZS5jaGlsZHJlbltqLTFdLmlkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXJ0aWNsZS5jaGlsZHJlbltqXS5pbm5lclRleHQudHJpbSgpICE9PVwiXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5jaGlsZHJlbltqXS5pZD1gRiR7YXJ0aWNsZS5jaGlsZHJlbltqXS5pZH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmNoaWxkcmVuW2otMV0uaWQ9YEIke2FydGljbGUuY2hpbGRyZW5bai0xXS5pZH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkSW5kPXRoaXMuc3RhdGUuSURfaW5kZXgrMVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSURfaW5kZXg6IGlkSW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuY2hpbGRyZW5bal0uaWQ9IGlkSW5kXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6bnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGs9MDtrPGNvbnRlbnQubGVuZ3RoO2srKyl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRba10ub25jbGljaz0oKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDpjb250ZW50W2tdLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuXG4gICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBcbiAgICBcbiAgICBcbiAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgaWYoYXJ0aWNsZS5maXJzdENoaWxkLmlubmVyVGV4dC50cmltKCkubGVuZ3RoPT0wKXtcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5maXJzdENoaWxkLmlubmVyVGV4dD1cIn5cIlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgIFxuICAgIFxuICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICBcbiAgIFxuXG4gICAgICAgXG5cbiBcbiAgICBcblxuICAgICAgXG4gICAgfVxuXG4gICAgXG5cbiAgICByZW5kZXIoKSB7IFxuICAgICAgXG4gICAgICAgIHJldHVybiAoICBcbiAgICAgICAgICAgIDw+XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVcIiAgIGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIiAgPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2ctY29udGVudCcgaWQ9XCIxXCIgIGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICBEaXNwYXRjaCBvbiBuZXh0LmpzIHJlZHV4IHZlc2lvbiAyLjIuMDIudnNcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgXG4gICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8Q29udHJvbGJhci8+XG5cbiAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn1cbiBcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICBcbiAgICAgICAgRm9udDpzdGF0ZS5FZGl0LkZvbnQsXG4gICAgICAgIEluc2VydDpzdGF0ZS5FZGl0Lkluc2VydFxuXG5cbiAgICB9XG59XG5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgU2V0OiAoZGl2KSA9PiBkaXNwYXRjaChhY3Rpb25zLlNlbGVjdFN1Y2Nlc3MoZGl2KSksXG4gICAgICAgIFxuICBcblxuICAgIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgV3JpdGluZztcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFdyaXRpbmcpKVxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUlNUE9SVFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuLy8gaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4Jztcbi8vIGltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9hdXRoJztcblxuXG5cblxuXG4vLyBheGlvcy5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSA9IFwiWC1DU1JGVE9LRU5cIjtcbi8vIGF4aW9zLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gXCJjc3JmdG9rZW5cIjtcblxuXG5cblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLV9fUkVEVVgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIEpXVDogc3RhdGUuand0LFxuICAgIFxuXG4vLyAgICAgfVxuLy8gfVxuXG4vLyBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBkZWNvZGU6IChKV1QpID0+IGRpc3BhdGNoKGFjdGlvbnMuYXV0aEpXVChKV1QpKSxcbi8vICAgICAgICAgQ2hlY2tVc2VyOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmF1dGhDaGVja1N0YXRlKCkpLFxuXG4vLyAgICAgfVxuLy8gfVxuXG4vLyAvLyBleHBvcnQgZGVmYXVsdCBXcml0aW5nXG4vLyBleHBvcnQgZGVmYXVsdCAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShXcml0aW5nKSlcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbnRyb2xiYXIiLCJjb25uZWN0IiwiYWN0aW9ucyIsIldyaXRpbmciLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250ZW50RWRpdGFibGUiLCJpZCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsIkNvbnRlbnRFbGVtZW50IiwiYWN0aXZlIiwiRm9udCIsIklEX2luZGV4Iiwic2VsZWN0ZWQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJhcnRpY2xlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2hlY2siLCJnZXRFbGVtZW50QnlJZCIsImoiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJOZXdFbGVtIiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImluc2VydEJlZm9yZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29udGVudCIsImNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImV4ZWNDb21tYW5kIiwiayIsIm9uY2xpY2siLCJzZXRTdGF0ZSIsImlucHV0VHlwZSIsImRhdGEiLCJjaGlsZEVsZW1lbnRDb3VudCIsImNoaWxkcmVuIiwidHJpbSIsImlkSW5kIiwiZmlyc3RDaGlsZCIsInNlbGVjdGVkRGl2UmVkdXgiLCJTZXQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJFZGl0IiwiSW5zZXJ0IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJTZWxlY3RTdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Writing.js\n"));

/***/ })

});