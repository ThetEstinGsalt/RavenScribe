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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/components/Controlbar */ \"./public/components/Controlbar.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/Editing */ \"./store/actions/Editing.js\");\n\n\n\n\n\nclass Writing extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article\",\n                    contentEditable: \"true\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blog-content\",\n                        id: \"1\",\n                        contentEditable: \"true\",\n                        children: \"Dispatch on next.js redux vesion 2.2.02.vs\"\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                        lineNumber: 203,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 201,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_Controlbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/rafid/RavenScribe/Frontend/pages/Writing.js\",\n                    lineNumber: 214,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            ContentElement: null,\n            active: this.props.Font,\n            ID_index: 1,\n            selected: null\n        };\n        // }\n        this.componentDidUpdate = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let check = document.getElementsByClassName(\"blog-content\");\n            console.log(this.props.Font);\n            console.log(this.props.Insert);\n        };\n        this.componentDidMount = ()=>{\n            let article = document.getElementsByClassName(\"article\")[0];\n            let content = document.getElementsByClassName(\"blog-content\");\n            // ----------------------------------------\n            // To stop HTML from breaking if user pastes some text other than writing it\n            var ce = article;\n            ce.addEventListener(\"paste\", function(e) {\n                e.preventDefault();\n                var text = e.clipboardData.getData(\"text/plain\");\n                document.execCommand(\"insertText\", false, text);\n            });\n            // ------------------------------------\n            // ----------------------------------------------\n            // Event listeners on article \n            for(let k = 0; k < content.length; k++){\n                content[k].addEventListener(\"click\", (e)=>{\n                    console.log(content[k].id);\n                });\n            }\n            article.addEventListener(\"input\", (e)=>{\n                if ((e.inputType == \"insertParagraph\" || e.data == null) && this.props.Font == \"blog-content\") {\n                    for(let j = 0; j < article.childElementCount; j++){\n                        if (j !== 0) {\n                            if (article.children[j].id == article.children[j - 1].id) {\n                                if (article.children[j].innerText.trim() !== \"\") {\n                                    article.children[j].id = \"F\".concat(article.children[j].id);\n                                    article.children[j - 1].id = \"B\".concat(article.children[j - 1].id, \"E\");\n                                } else {\n                                    var idInd = this.state.ID_index + 1;\n                                    this.setState({\n                                        ID_index: idInd\n                                    });\n                                    article.children[j].id = idInd;\n                                }\n                                for(let k = 0; k < content.length; k++){\n                                    console.log(content[k].id[content[k].id.length - 1]);\n                                    if (content[k].id[content[k].id.length - 1] !== \"E\") {\n                                        content[k].addEventListener(\"click\", (e)=>{\n                                            content[k].id = \"\".concat(content[k].id, \"E\");\n                                            console.log(content[k].id);\n                                        });\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n                if (article.firstChild.innerText.trim().length == 0) {\n                    article.firstChild.innerText = \"~\";\n                }\n            });\n        };\n        // this.heading = this.heading.bind(this);\n        // this.componentDidMount=this.componentDidMount.bind(this)\n        this.selectedDivRedux = (div)=>{\n            this.props.Set(div);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        Font: state.Edit.Font,\n        Insert: state.Edit.Insert\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Set: (div)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_4__.SelectSuccess(div))\n    };\n};\n// export default Writing;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Writing));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Xcml0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUl3QztBQUNpQjtBQUNuQjtBQUNhO0FBQ25ELE1BQU1LLGdCQUFnQkosNENBQVNBO0lBMkwzQkssU0FBUztRQUVMLHFCQUNJOzs4QkFFQSw4REFBQ0M7b0JBQUlDLFdBQVU7b0JBQVlDLGlCQUFnQjs4QkFFdkMsNEVBQUNGO3dCQUFJQyxXQUFVO3dCQUFlRSxJQUFHO3dCQUFLRCxpQkFBZ0I7a0NBQU87Ozs7Ozs7Ozs7OzhCQVdqRSw4REFBQ1AscUVBQVVBOzs7Ozs7O0lBTW5CO0lBbE5BUyxZQUFZQyxLQUFLLENBQUU7UUFDZixLQUFLLENBQUNBO2FBZVZDLFFBQVE7WUFDSkMsZ0JBQWU7WUFDZkMsUUFBTyxJQUFJLENBQUNILE1BQU1JO1lBQ2xCQyxVQUFTO1lBQ1RDLFVBQVM7UUFFWDtRQUlGLElBQUk7YUFFSkMscUJBQW1CO1lBQ2YsSUFBSUMsVUFBUUMsU0FBU0MsdUJBQXVCLFVBQVUsQ0FBQyxFQUFFO1lBQ3pELElBQUlDLFFBQU1GLFNBQVNDLHVCQUF1QjtZQU0xQ0UsUUFBUUMsSUFBSSxJQUFJLENBQUNiLE1BQU1JO1lBQ3ZCUSxRQUFRQyxJQUFJLElBQUksQ0FBQ2IsTUFBTWM7UUFZM0I7YUFFQUMsb0JBQWtCO1lBQ2QsSUFBSVAsVUFBUUMsU0FBU0MsdUJBQXVCLFVBQVUsQ0FBQyxFQUFFO1lBQ3pELElBQUlNLFVBQVFQLFNBQVNDLHVCQUF1QjtZQVE1QywyQ0FBMkM7WUFDM0MsNEVBQTRFO1lBRTVFLElBQUlPLEtBQUtUO1lBQ1RTLEdBQUdDLGlCQUFpQixTQUFTLFNBQVVDLENBQUM7Z0JBQ3RDQSxFQUFFQztnQkFDRixJQUFJQyxPQUFPRixFQUFFRyxjQUFjQyxRQUFRO2dCQUNuQ2QsU0FBU2UsWUFBWSxjQUFjLE9BQU9IO1lBQzVDO1lBSUEsdUNBQXVDO1lBTXZDLGlEQUFpRDtZQUNqRCw4QkFBOEI7WUFFOUIsSUFBSSxJQUFJSSxJQUFFLEdBQUVBLElBQUVULFFBQVFVLFFBQU9ELElBQUk7Z0JBQzdCVCxPQUFPLENBQUNTLEVBQUUsQ0FBQ1AsaUJBQWlCLFNBQVEsQ0FBQ0M7b0JBQ2pDUCxRQUFRQyxJQUFJRyxPQUFPLENBQUNTLEVBQUUsQ0FBQzNCO2dCQUMzQjtZQUtKO1lBQ0lVLFFBQVFVLGlCQUFpQixTQUFRLENBQUNDO2dCQUc5QixJQUFHLENBQUNBLEVBQUVRLGFBQVcscUJBQXFCUixFQUFFUyxRQUFRLElBQUcsS0FBTSxJQUFJLENBQUM1QixNQUFNSSxRQUFNLGdCQUFlO29CQUlyRixJQUFJLElBQUl5QixJQUFFLEdBQUVBLElBQUVyQixRQUFRc0IsbUJBQWtCRCxJQUFJO3dCQUl4QyxJQUFHQSxNQUFJLEdBQUU7NEJBQ0wsSUFBR3JCLFFBQVF1QixRQUFRLENBQUNGLEVBQUUsQ0FBQy9CLE1BQUlVLFFBQVF1QixRQUFRLENBQUNGLElBQUUsRUFBRSxDQUFDL0IsSUFBRztnQ0FDaEQsSUFBR1UsUUFBUXVCLFFBQVEsQ0FBQ0YsRUFBRSxDQUFDRyxVQUFVQyxXQUFVLElBQUc7b0NBQzFDekIsUUFBUXVCLFFBQVEsQ0FBQ0YsRUFBRSxDQUFDL0IsS0FBRyxJQUEyQixPQUF2QlUsUUFBUXVCLFFBQVEsQ0FBQ0YsRUFBRSxDQUFDL0I7b0NBRS9DVSxRQUFRdUIsUUFBUSxDQUFDRixJQUFFLEVBQUUsQ0FBQy9CLEtBQUcsSUFBNkIsT0FBekJVLFFBQVF1QixRQUFRLENBQUNGLElBQUUsRUFBRSxDQUFDL0IsSUFBRztnQ0FJMUQsT0FDSTtvQ0FDQSxJQUFJb0MsUUFBTSxJQUFJLENBQUNqQyxNQUFNSSxXQUFTO29DQUU5QixJQUFJLENBQUM4QixTQUFTO3dDQUNWOUIsVUFBVTZCO29DQUNkO29DQUlBMUIsUUFBUXVCLFFBQVEsQ0FBQ0YsRUFBRSxDQUFDL0IsS0FBSW9DO2dDQUk1QjtnQ0FFQSxJQUFJLElBQUlULElBQUUsR0FBRUEsSUFBRVQsUUFBUVUsUUFBT0QsSUFBSTtvQ0FDN0JiLFFBQVFDLElBQUlHLE9BQU8sQ0FBQ1MsRUFBRSxDQUFDM0IsRUFBRSxDQUFDa0IsT0FBTyxDQUFDUyxFQUFFLENBQUMzQixHQUFHNEIsU0FBTyxFQUFFO29DQUNqRCxJQUFHVixPQUFPLENBQUNTLEVBQUUsQ0FBQzNCLEVBQUUsQ0FBQ2tCLE9BQU8sQ0FBQ1MsRUFBRSxDQUFDM0IsR0FBRzRCLFNBQU8sRUFBRSxLQUFHLEtBQUk7d0NBRTNDVixPQUFPLENBQUNTLEVBQUUsQ0FBQ1AsaUJBQWlCLFNBQVEsQ0FBQ0M7NENBQ2pDSCxPQUFPLENBQUNTLEVBQUUsQ0FBQzNCLEtBQUcsR0FBaUIsT0FBZGtCLE9BQU8sQ0FBQ1MsRUFBRSxDQUFDM0IsSUFBRzs0Q0FDL0JjLFFBQVFDLElBQUlHLE9BQU8sQ0FBQ1MsRUFBRSxDQUFDM0I7d0NBQzNCO29DQUdKO2dDQUtKOzRCQU1KO3dCQUVKO29CQUFDO2dCQUdUO2dCQVFBLElBQUdVLFFBQVE0QixXQUFXSixVQUFVQyxPQUFPUCxVQUFRLEdBQUU7b0JBQzdDbEIsUUFBUTRCLFdBQVdKLFlBQVU7Z0JBR2pDO1lBTUo7UUFXUjtRQW5MSSwwQ0FBMEM7UUFDMUMsMkRBQTJEO1FBRTNELElBQUksQ0FBQ0ssbUJBQWlCLENBQUMxQztZQUNuQixJQUFJLENBQUNLLE1BQU1zQyxJQUFJM0M7UUFDbkI7SUFLSjtBQXNNSjtBQUlBLE1BQU00QyxrQkFBa0IsQ0FBQ3RDO0lBQ3JCLE9BQU87UUFFSEcsTUFBS0gsTUFBTXVDLEtBQUtwQztRQUNoQlUsUUFBT2IsTUFBTXVDLEtBQUsxQjtJQUd0QjtBQUNKO0FBR0EsTUFBTTJCLHFCQUFxQixDQUFDQztJQUN4QixPQUFPO1FBQ0hKLEtBQUssQ0FBQzNDLE1BQVErQyxTQUFTbEQsaUVBQXFCbUQsQ0FBQ2hEO0lBSWpEO0FBQ0o7QUFFQSwwQkFBMEI7QUFDMUIsK0RBQWdCSixvREFBT0EsQ0FBQ2dELGlCQUFnQkUsb0JBQW9CaEQsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Xcml0aW5nLmpzP2YxYWQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29udHJvbGJhciBmcm9tICcuLi9wdWJsaWMvY29tcG9uZW50cy9Db250cm9sYmFyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvRWRpdGluZydcbmNsYXNzIFdyaXRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvLyB0aGlzLmhlYWRpbmcgPSB0aGlzLmhlYWRpbmcuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5jb21wb25lbnREaWRNb3VudD10aGlzLmNvbXBvbmVudERpZE1vdW50LmJpbmQodGhpcylcblxuICAgICAgICB0aGlzLnNlbGVjdGVkRGl2UmVkdXg9KGRpdik9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuU2V0KGRpdilcbiAgICAgICAgfVxuXG5cblxuXG4gICAgfVxuXG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgQ29udGVudEVsZW1lbnQ6bnVsbCxcbiAgICAgICAgYWN0aXZlOnRoaXMucHJvcHMuRm9udCxcbiAgICAgICAgSURfaW5kZXg6MSxcbiAgICAgICAgc2VsZWN0ZWQ6bnVsbFxuXG4gICAgICB9XG5cblxuXG4gICAgLy8gfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlPSgpPT57XG4gICAgICAgIGxldCBhcnRpY2xlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdXG4gICAgICAgIGxldCBjaGVjaz1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxvZy1jb250ZW50XCIpXG5cbiAgICAgICAgXG5cblxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuRm9udClcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5JbnNlcnQpXG5cbiAgICAgICAgXG5cbiAgICAgICBcblxuXG5cbiAgICAgICAgXG5cbiBcbiAgIFxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnREaWRNb3VudD0oKT0+e1xuICAgICAgICBsZXQgYXJ0aWNsZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXJ0aWNsZVwiKVswXVxuICAgICAgICBsZXQgY29udGVudD1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxvZy1jb250ZW50XCIpXG5cbiAgXG5cbiAgICAgICBcblxuXG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyBUbyBzdG9wIEhUTUwgZnJvbSBicmVha2luZyBpZiB1c2VyIHBhc3RlcyBzb21lIHRleHQgb3RoZXIgdGhhbiB3cml0aW5nIGl0XG5cbiAgICAgICAgdmFyIGNlID0gYXJ0aWNsZVxuICAgICAgICBjZS5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdmFyIHRleHQgPSBlLmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpXG4gICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydFRleHQnLCBmYWxzZSwgdGV4dClcbiAgICAgICAgfSlcblxuXG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVycyBvbiBhcnRpY2xlIFxuXG4gICAgICAgIGZvcihsZXQgaz0wO2s8Y29udGVudC5sZW5ndGg7aysrKXtcbiAgICAgICAgICAgIGNvbnRlbnRba10uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnRba10uaWQpXG4gICAgICAgICAgICB9KVxuXG5cblxuXG4gICAgICAgIH1cbiAgICAgICAgICAgIGFydGljbGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLChlKT0+e1xuICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBpZigoZS5pbnB1dFR5cGU9PVwiaW5zZXJ0UGFyYWdyYXBoXCIgfHwgZS5kYXRhID09IG51bGwpICYmIHRoaXMucHJvcHMuRm9udD09XCJibG9nLWNvbnRlbnRcIil7XG5cblxuICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDtqPGFydGljbGUuY2hpbGRFbGVtZW50Q291bnQ7aisrKXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihqIT09MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXJ0aWNsZS5jaGlsZHJlbltqXS5pZD09YXJ0aWNsZS5jaGlsZHJlbltqLTFdLmlkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXJ0aWNsZS5jaGlsZHJlbltqXS5pbm5lclRleHQudHJpbSgpICE9PVwiXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5jaGlsZHJlbltqXS5pZD1gRiR7YXJ0aWNsZS5jaGlsZHJlbltqXS5pZH1gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuY2hpbGRyZW5bai0xXS5pZD1gQiR7YXJ0aWNsZS5jaGlsZHJlbltqLTFdLmlkfUVgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZEluZD10aGlzLnN0YXRlLklEX2luZGV4KzFcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElEX2luZGV4OiBpZEluZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmNoaWxkcmVuW2pdLmlkPSBpZEluZFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaz0wO2s8Y29udGVudC5sZW5ndGg7aysrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnRba10uaWRbY29udGVudFtrXS5pZC5sZW5ndGgtMV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjb250ZW50W2tdLmlkW2NvbnRlbnRba10uaWQubGVuZ3RoLTFdIT09J0UnKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRba10uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50W2tdLmlkPWAke2NvbnRlbnRba10uaWR9RWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29udGVudFtrXS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG5cbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgXG4gICAgXG4gICAgICAgXG5cblxuICAgICAgICAgICAgICAgIGlmKGFydGljbGUuZmlyc3RDaGlsZC5pbm5lclRleHQudHJpbSgpLmxlbmd0aD09MCl7XG4gICAgICAgICAgICAgICAgICAgIGFydGljbGUuZmlyc3RDaGlsZC5pbm5lclRleHQ9XCJ+XCJcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICBcbiAgICBcbiAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgXG4gICBcblxuICAgICAgIFxuXG4gXG4gICAgXG5cbiAgICAgIFxuICAgIH1cblxuICAgIFxuXG4gICAgcmVuZGVyKCkgeyBcbiAgICAgIFxuICAgICAgICByZXR1cm4gKCAgXG4gICAgICAgICAgICA8PlxuICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlXCIgICBjb250ZW50RWRpdGFibGU9XCJ0cnVlXCIgID5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNvbnRlbnQnIGlkPVwiMVwiICBjb250ZW50RWRpdGFibGU9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgRGlzcGF0Y2ggb24gbmV4dC5qcyByZWR1eCB2ZXNpb24gMi4yLjAyLnZzXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgIFxuICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPENvbnRyb2xiYXIvPlxuXG4gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9XG59XG4gXG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgXG4gICAgICAgIEZvbnQ6c3RhdGUuRWRpdC5Gb250LFxuICAgICAgICBJbnNlcnQ6c3RhdGUuRWRpdC5JbnNlcnRcblxuXG4gICAgfVxufVxuXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIFNldDogKGRpdikgPT4gZGlzcGF0Y2goYWN0aW9ucy5TZWxlY3RTdWNjZXNzKGRpdikpLFxuICAgICAgICBcbiAgXG5cbiAgICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFdyaXRpbmc7XG5leHBvcnQgZGVmYXVsdCAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShXcml0aW5nKSlcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1JTVBPUlRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbi8vIGltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG4vLyBpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvYXV0aCc7XG5cblxuXG5cblxuLy8gYXhpb3MuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSBcIlgtQ1NSRlRPS0VOXCI7XG4vLyBheGlvcy5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9IFwiY3NyZnRva2VuXCI7XG5cblxuXG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1fX1JFRFVYLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBKV1Q6IHN0YXRlLmp3dCxcbiAgICBcblxuLy8gICAgIH1cbi8vIH1cblxuLy8gY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgZGVjb2RlOiAoSldUKSA9PiBkaXNwYXRjaChhY3Rpb25zLmF1dGhKV1QoSldUKSksXG4vLyAgICAgICAgIENoZWNrVXNlcjogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5hdXRoQ2hlY2tTdGF0ZSgpKSxcblxuLy8gICAgIH1cbi8vIH1cblxuLy8gLy8gZXhwb3J0IGRlZmF1bHQgV3JpdGluZ1xuLy8gZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoV3JpdGluZykpXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDb250cm9sYmFyIiwiY29ubmVjdCIsImFjdGlvbnMiLCJXcml0aW5nIiwicmVuZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGVudEVkaXRhYmxlIiwiaWQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJDb250ZW50RWxlbWVudCIsImFjdGl2ZSIsIkZvbnQiLCJJRF9pbmRleCIsInNlbGVjdGVkIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiYXJ0aWNsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNoZWNrIiwiY29uc29sZSIsImxvZyIsIkluc2VydCIsImNvbXBvbmVudERpZE1vdW50IiwiY29udGVudCIsImNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImV4ZWNDb21tYW5kIiwiayIsImxlbmd0aCIsImlucHV0VHlwZSIsImRhdGEiLCJqIiwiY2hpbGRFbGVtZW50Q291bnQiLCJjaGlsZHJlbiIsImlubmVyVGV4dCIsInRyaW0iLCJpZEluZCIsInNldFN0YXRlIiwiZmlyc3RDaGlsZCIsInNlbGVjdGVkRGl2UmVkdXgiLCJTZXQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJFZGl0IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJTZWxlY3RTdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Writing.js\n"));

/***/ })

});