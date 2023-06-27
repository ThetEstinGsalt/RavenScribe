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

/***/ "./public/components/controlbarcomps/GifFetching.js":
/*!**********************************************************!*\
  !*** ./public/components/controlbarcomps/GifFetching.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/Editing */ \"./store/actions/Editing.js\");\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/writing.module.css */ \"./styles/writing.module.css\");\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nclass GifFetching extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    componentDidUpdate() {\n        if (this.props.Type == \"G\") {\n            let imageDiv = document.getElementById(\"Gif_div\");\n            imageDiv.innerHTML = \"\";\n            for(let i = 0; i < 4; i++){\n                // let image=document.createElement(\"img\")\n                let image = document.createElement(\"img\");\n                image.setAttribute(\"src\", this.props.Fetched.data[\"\".concat(i)].images.preview_gif.url);\n                image.setAttribute(\"class\", \"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().FetchedGif)));\n                image.setAttribute(\"id\", i);\n                imageDiv.appendChild(image);\n                image.addEventListener(\"click\", ()=>{\n                    let copy = document.createElement(\"img\");\n                    copy.setAttribute(\"src\", this.props.Fetched.data[image.id].images.original.url);\n                    copy.removeAttribute(\"class\");\n                    copy.setAttribute(\"class\", \"articleImage\");\n                    this.props.Select(copy);\n                });\n            }\n            let article = document.getElementsByClassName(\"article\")[0];\n            let selecDiv = this.props.Selected;\n            let selecDivInit = document.getElementsByClassName(\"blog-content\")[0];\n            let images = document.querySelectorAll(\".\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().FetchedGif)));\n            // for(let j=0;j<images.length;j++){\n            //     images[j].addEventListener('click',()=>{\n            //         let copy=images[j].cloneNode(true)\n            //         copy.removeAttribute(\"class\")\n            //         copy.setAttribute(\"class\",\"articleImage\")\n            //         this.props.Select(copy)\n            //     })\n            // }\n            const thisprops = this.props.Fetched;\n            console.log(thisprops);\n            const thisporps0 = this.props;\n            let index = 1;\n            imageDiv.onscroll = function() {\n                if (imageDiv.offsetHeight + imageDiv.scrollTop >= imageDiv.scrollHeight) {\n                    let SecondVar = thisprops;\n                    let index = imageDiv.childElementCount;\n                    let limit = imageDiv.childElementCount + 4;\n                    let thisprops1 = thisporps0;\n                    if (limit < 50) {\n                        for(let i = index; i < limit; i++){\n                            let thisporps2 = thisprops1;\n                            let ThirdVar = SecondVar;\n                            // console.log(ThirdVar.data[i].images.original.url)\n                            let image = document.createElement(\"img\");\n                            image.setAttribute(\"src\", ThirdVar.data[\"\".concat(i)].images.preview_gif.url);\n                            image.setAttribute(\"class\", \"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().FetchedGif)));\n                            image.setAttribute(\"id\", i);\n                            let fourthvar = ThirdVar;\n                            let thisprops3 = thisporps2;\n                            image.addEventListener(\"click\", ()=>{\n                                let copy = document.createElement(\"img\");\n                                copy.setAttribute(\"src\", fourthvar.data[image.id].images.original.url);\n                                copy.removeAttribute(\"class\");\n                                copy.setAttribute(\"class\", \"articleImage\");\n                                thisprops3.Select(copy);\n                            });\n                            imageDiv.appendChild(image);\n                        }\n                    }\n                // if(index==1){\n                //     const secondVar=thisprops\n                //     for(let i=imageDiv.childElementCount;i<i+4;i++){\n                //         console.log(1)\n                //         // let image=document.createElement(\"img\")\n                //         // let image=document.createElement(\"img\")\n                //         let ThirdVar=secondVar\n                //         console.log(ThirdVar.data[5].images.original.url)\n                //         // image.setAttribute(\"src\",thisprops.data[`${i}`].images.original.url)\n                //         // image.setAttribute(\"class\",`${styles.FetchedGif}`)\n                //         // imageDiv.appendChild(image)\n                //     }\n                //     index++\n                // }\n                }\n            };\n        }\n    }\n    componentDidMount() {\n        let search_inp = document.getElementsByClassName(\"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Gif_search)))[0];\n        search_inp.addEventListener(\"keydown\", (e)=>{\n            if (e.key == \"Enter\") {\n                this.handleGif(search_inp.value);\n            }\n        });\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"HolderGif\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Search),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Gif_search)\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                            lineNumber: 187,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                        lineNumber: 185,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Gif_display),\n                        id: \"Gif_div\"\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                        lineNumber: 192,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                lineNumber: 184,\n                columnNumber: 13\n            }, this)\n        }, void 0, false);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            Fetched: null\n        };\n        this.Select = (div)=>{\n            this.props.Select(div);\n        };\n        this.handleGif = (key)=>{\n            this.props.Gif(key);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        Fetched: state.Edit.FetchList,\n        Selected: state.Edit.Selected,\n        Type: state.Edit.CatFetch\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Gif: (key)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__.fetchGif(key)),\n        Select: (div)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__.SelectSuccess(div))\n    };\n};\n// export default Writing\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(GifFetching));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvY29tcG9uZW50cy9jb250cm9sYmFyY29tcHMvR2lmRmV0Y2hpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDSDtBQUNtQjtBQUNGO0FBQ3hCO0FBQ0g7QUFDRjtBQUUxQixNQUFNUSxvQkFBb0JQLDRDQUFTQTtJQWlCL0JRLHFCQUFvQjtRQUVoQixJQUFHLElBQUksQ0FBQ0MsTUFBTUMsUUFBTSxLQUFLO1lBQ3JCLElBQUlDLFdBQVNDLFNBQVNDLGVBQWU7WUFHckNGLFNBQVNHLFlBQVU7WUFHbkIsSUFBSSxJQUFJQyxJQUFFLEdBQUVBLElBQUUsR0FBRUEsSUFBSTtnQkFDaEIsMENBQTBDO2dCQUMxQyxJQUFJQyxRQUFNSixTQUFTSyxjQUFjO2dCQUNqQ0QsTUFBTUUsYUFBYSxPQUFNLElBQUksQ0FBQ1QsTUFBTVUsUUFBUUMsSUFBSSxDQUFDLEdBQUssT0FBRkwsR0FBSSxDQUFDTSxPQUFPQyxZQUFZQztnQkFDNUVQLE1BQU1FLGFBQWEsU0FBUSxHQUFxQixPQUFsQmYsOEVBQWlCcUI7Z0JBQy9DUixNQUFNRSxhQUFhLE1BQUtIO2dCQUN4QkosU0FBU2MsWUFBWVQ7Z0JBQ3JCQSxNQUFNVSxpQkFBaUIsU0FBUTtvQkFDM0IsSUFBSUMsT0FBS2YsU0FBU0ssY0FBYztvQkFDaENVLEtBQUtULGFBQWEsT0FBTSxJQUFJLENBQUNULE1BQU1VLFFBQVFDLElBQUksQ0FBQ0osTUFBTVksR0FBRyxDQUFDUCxPQUFPUSxTQUFTTjtvQkFFMUVJLEtBQUtHLGdCQUFnQjtvQkFDckJILEtBQUtULGFBQWEsU0FBUTtvQkFDMUIsSUFBSSxDQUFDVCxNQUFNc0IsT0FBT0o7Z0JBSXRCO1lBQ0o7WUFHQSxJQUFJSyxVQUFRcEIsU0FBU3FCLHVCQUF1QixVQUFVLENBQUMsRUFBRTtZQUN6RCxJQUFJQyxXQUFTLElBQUksQ0FBQ3pCLE1BQU0wQjtZQUN4QixJQUFJQyxlQUFheEIsU0FBU3FCLHVCQUF1QixlQUFlLENBQUMsRUFBRTtZQUduRSxJQUFJWixTQUFPVCxTQUFTeUIsaUJBQWlCLElBQXNCLE9BQWxCbEMsOEVBQWlCcUI7WUFDMUQsb0NBQW9DO1lBQ3BDLCtDQUErQztZQUMvQyw2Q0FBNkM7WUFDN0Msd0NBQXdDO1lBQ3hDLG9EQUFvRDtZQUNwRCxrQ0FBa0M7WUFJbEMsU0FBUztZQUNULElBQUk7WUFJSixNQUFNYyxZQUFVLElBQUksQ0FBQzdCLE1BQU1VO1lBQzNCb0IsUUFBUUMsSUFBSUY7WUFDWixNQUFNRyxhQUFXLElBQUksQ0FBQ2hDO1lBQ3RCLElBQUlpQyxRQUFNO1lBRVYvQixTQUFTZ0MsV0FBUztnQkFDZCxJQUFJLFNBQVVDLGVBQWVqQyxTQUFTa0MsYUFBY2xDLFNBQVNtQyxjQUFjO29CQUN2RSxJQUFJQyxZQUFVVDtvQkFDZCxJQUFJSSxRQUFNL0IsU0FBU3FDO29CQUNuQixJQUFJQyxRQUFNdEMsU0FBU3FDLG9CQUFrQjtvQkFDckMsSUFBSUUsYUFBV1Q7b0JBQ2YsSUFBR1EsUUFBTSxJQUFHO3dCQUNSLElBQUksSUFBSWxDLElBQUUyQixPQUFNM0IsSUFBRWtDLE9BQU1sQyxJQUFJOzRCQUN4QixJQUFJb0MsYUFBV0Q7NEJBRWYsSUFBSUUsV0FBU0w7NEJBQ2Isb0RBQW9EOzRCQUNwRCxJQUFJL0IsUUFBTUosU0FBU0ssY0FBYzs0QkFDakNELE1BQU1FLGFBQWEsT0FBTWtDLFNBQVNoQyxJQUFJLENBQUMsR0FBSyxPQUFGTCxHQUFJLENBQUNNLE9BQU9DLFlBQVlDOzRCQUNsRVAsTUFBTUUsYUFBYSxTQUFRLEdBQXFCLE9BQWxCZiw4RUFBaUJxQjs0QkFDL0NSLE1BQU1FLGFBQWEsTUFBS0g7NEJBRXhCLElBQUlzQyxZQUFVRDs0QkFDZCxJQUFJRSxhQUFXSDs0QkFDZm5DLE1BQU1VLGlCQUFpQixTQUFRO2dDQUMzQixJQUFJQyxPQUFLZixTQUFTSyxjQUFjO2dDQUNoQ1UsS0FBS1QsYUFBYSxPQUFNbUMsVUFBVWpDLElBQUksQ0FBQ0osTUFBTVksR0FBRyxDQUFDUCxPQUFPUSxTQUFTTjtnQ0FFakVJLEtBQUtHLGdCQUFnQjtnQ0FDckJILEtBQUtULGFBQWEsU0FBUTtnQ0FDMUJvQyxXQUFXdkIsT0FBT0o7NEJBSXRCOzRCQUNBaEIsU0FBU2MsWUFBWVQ7d0JBRTdCO29CQUVBO2dCQUNBLGdCQUFnQjtnQkFDaEIsZ0NBQWdDO2dCQUdoQyx1REFBdUQ7Z0JBQ3ZELHlCQUF5QjtnQkFDekIscURBQXFEO2dCQUNyRCxxREFBcUQ7Z0JBQ3JELGlDQUFpQztnQkFFakMsNERBQTREO2dCQUM1RCxrRkFBa0Y7Z0JBQ2xGLGdFQUFnRTtnQkFDaEUseUNBQXlDO2dCQUN6QyxRQUFRO2dCQUNSLGNBQWM7Z0JBSWQsSUFBSTtnQkFLSjtZQUlSO1FBS0o7SUFPSjtJQUNBdUMsb0JBQW1CO1FBT2YsSUFBSUMsYUFBVzVDLFNBQVNxQix1QkFBdUIsR0FBcUIsT0FBbEI5Qiw4RUFBaUJzRCxFQUFHLENBQUMsRUFBRTtRQUN6RUQsV0FBVzlCLGlCQUFpQixXQUFVLENBQUNnQztZQUNuQyxJQUFHQSxFQUFFQyxPQUFLLFNBQVE7Z0JBR2QsSUFBSSxDQUFDQyxVQUFVSixXQUFXSztZQUc5QjtRQUNKO0lBR0o7SUFFQUMsU0FBUztRQUNMLHFCQUNJO3NCQUlBLDRFQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFXN0QsMEVBQWE4RDtrQ0FFekIsNEVBQUNDOzRCQUFNRixXQUFXN0QsOEVBQWlCc0Q7Ozs7Ozs7Ozs7O2tDQUt2Qyw4REFBQ007d0JBQUlDLFdBQVc3RCwrRUFBa0JnRTt3QkFBRXZDLElBQUc7Ozs7Ozs7Ozs7Ozs7SUFlL0M7SUFyTUF3QyxZQUFZM0QsS0FBSyxDQUFDO1FBQ2QsS0FBSyxDQUFDQTthQVVWNEQsUUFBTTtZQUNGbEQsU0FBUTtRQUVaO1FBWkksSUFBSSxDQUFDWSxTQUFPLENBQUNnQztZQUNULElBQUksQ0FBQ3RELE1BQU1zQixPQUFPZ0M7UUFHdEI7UUFDQSxJQUFJLENBQUNILFlBQVUsQ0FBQ0Q7WUFDWixJQUFJLENBQUNsRCxNQUFNNkQsSUFBSVg7UUFDbkI7SUFDSjtBQTRMSjtBQUtBLE1BQU1ZLGtCQUFrQixDQUFDRjtJQUNyQixPQUFPO1FBQ0hsRCxTQUFTa0QsTUFBTUcsS0FBS0M7UUFDcEJ0QyxVQUFTa0MsTUFBTUcsS0FBS3JDO1FBQ3BCekIsTUFBSzJELE1BQU1HLEtBQUtFO0lBS3BCO0FBQ0o7QUFFQSxNQUFNQyxxQkFBcUIsQ0FBQ0M7SUFDeEIsT0FBTztRQUNITixLQUFLLENBQUNYLE1BQVFpQixTQUFTMUUsNERBQWdCMkUsQ0FBRWxCO1FBQ3pDNUIsUUFBTyxDQUFDZ0MsTUFBTWEsU0FBUzFFLGlFQUFxQjRFLENBQUNmO0lBR2pEO0FBQ0o7QUFFQSx5QkFBeUI7QUFDekIsK0RBQWdCOUQsb0RBQU9BLENBQUNzRSxpQkFBZ0JJLG9CQUFvQnBFLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2NvbXBvbmVudHMvY29udHJvbGJhcmNvbXBzL0dpZkZldGNoaW5nLmpzPzg5ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvRWRpdGluZydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3dyaXRpbmcubW9kdWxlLmNzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIEdpZkZldGNoaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5TZWxlY3Q9KGRpdik9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuU2VsZWN0KGRpdilcbiAgICAgICAgXG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUdpZj0oa2V5KT0+e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5HaWYoa2V5KVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRlPXtcbiAgICAgICAgRmV0Y2hlZDpudWxsLFxuIFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xuXG4gICAgICAgIGlmKHRoaXMucHJvcHMuVHlwZT09XCJHXCIgKXtcbiAgICAgICAgICAgIGxldCBpbWFnZURpdj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdpZl9kaXZcIilcblxuXG4gICAgICAgICAgICBpbWFnZURpdi5pbm5lckhUTUw9XCJcIlxuXG5cbiAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8NDtpKyspe1xuICAgICAgICAgICAgICAgIC8vIGxldCBpbWFnZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIix0aGlzLnByb3BzLkZldGNoZWQuZGF0YVtgJHtpfWBdLmltYWdlcy5wcmV2aWV3X2dpZi51cmwpXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixgJHtzdHlsZXMuRmV0Y2hlZEdpZn1gKVxuICAgICAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsaSlcbiAgICAgICAgICAgICAgICBpbWFnZURpdi5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICAgICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvcHk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICAgICAgICAgICAgICBjb3B5LnNldEF0dHJpYnV0ZShcInNyY1wiLHRoaXMucHJvcHMuRmV0Y2hlZC5kYXRhW2ltYWdlLmlkXS5pbWFnZXMub3JpZ2luYWwudXJsKVxuXG4gICAgICAgICAgICAgICAgICAgIGNvcHkucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICAgICAgICAgICAgICAgICAgY29weS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiYXJ0aWNsZUltYWdlXCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuU2VsZWN0KGNvcHkpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgIFxuICAgICAgICAgICAgbGV0IGFydGljbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFydGljbGVcIilbMF1cbiAgICAgICAgICAgIGxldCBzZWxlY0Rpdj10aGlzLnByb3BzLlNlbGVjdGVkXG4gICAgICAgICAgICBsZXQgc2VsZWNEaXZJbml0PWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9nLWNvbnRlbnRcIilbMF1cbiAgICBcbiAgICBcbiAgICAgICAgICAgIGxldCBpbWFnZXM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7c3R5bGVzLkZldGNoZWRHaWZ9YClcbiAgICAgICAgICAgIC8vIGZvcihsZXQgaj0wO2o8aW1hZ2VzLmxlbmd0aDtqKyspe1xuICAgICAgICAgICAgLy8gICAgIGltYWdlc1tqXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV0IGNvcHk9aW1hZ2VzW2pdLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgLy8gICAgICAgICBjb3B5LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvcHkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImFydGljbGVJbWFnZVwiKVxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnByb3BzLlNlbGVjdChjb3B5KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICAvLyB9XG5cblxuXG4gICAgICAgICAgICBjb25zdCB0aGlzcHJvcHM9dGhpcy5wcm9wcy5GZXRjaGVkXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzcHJvcHMpXG4gICAgICAgICAgICBjb25zdCB0aGlzcG9ycHMwPXRoaXMucHJvcHNcbiAgICAgICAgICAgIGxldCBpbmRleD0xXG5cbiAgICAgICAgICAgIGltYWdlRGl2Lm9uc2Nyb2xsPWZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYgKChpbWFnZURpdi5vZmZzZXRIZWlnaHQgKyBpbWFnZURpdi5zY3JvbGxUb3ApID49IGltYWdlRGl2LnNjcm9sbEhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgU2Vjb25kVmFyPXRoaXNwcm9wc1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXg9aW1hZ2VEaXYuY2hpbGRFbGVtZW50Q291bnRcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpbWl0PWltYWdlRGl2LmNoaWxkRWxlbWVudENvdW50KzRcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRoaXNwcm9wczE9dGhpc3BvcnBzMFxuICAgICAgICAgICAgICAgICAgICBpZihsaW1pdDw1MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9aW5kZXg7aTxsaW1pdDtpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aGlzcG9ycHMyPXRoaXNwcm9wczFcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgVGhpcmRWYXI9U2Vjb25kVmFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coVGhpcmRWYXIuZGF0YVtpXS5pbWFnZXMub3JpZ2luYWwudXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsVGhpcmRWYXIuZGF0YVtgJHtpfWBdLmltYWdlcy5wcmV2aWV3X2dpZi51cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixgJHtzdHlsZXMuRmV0Y2hlZEdpZn1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsaSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvdXJ0aHZhcj1UaGlyZFZhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aGlzcHJvcHMzPXRoaXNwb3JwczJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvcHk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3B5LnNldEF0dHJpYnV0ZShcInNyY1wiLGZvdXJ0aHZhci5kYXRhW2ltYWdlLmlkXS5pbWFnZXMub3JpZ2luYWwudXJsKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHkucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiYXJ0aWNsZUltYWdlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNwcm9wczMuU2VsZWN0KGNvcHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURpdi5hcHBlbmRDaGlsZChpbWFnZSlcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKGluZGV4PT0xKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHNlY29uZFZhcj10aGlzcHJvcHNcbiAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZvcihsZXQgaT1pbWFnZURpdi5jaGlsZEVsZW1lbnRDb3VudDtpPGkrNDtpKyspe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKDEpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gbGV0IGltYWdlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBsZXQgaW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxldCBUaGlyZFZhcj1zZWNvbmRWYXJcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhUaGlyZFZhci5kYXRhWzVdLmltYWdlcy5vcmlnaW5hbC51cmwpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsdGhpc3Byb3BzLmRhdGFbYCR7aX1gXS5pbWFnZXMub3JpZ2luYWwudXJsKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIGltYWdlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYCR7c3R5bGVzLkZldGNoZWRHaWZ9YClcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBpbWFnZURpdi5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGluZGV4KytcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIFxuICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICBcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgfVxuICAgICBcblxuXG5cbiAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXsgICAgXG4gXG4gICAgIFxuXG5cblxuXG4gICAgICAgIGxldCBzZWFyY2hfaW5wPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c3R5bGVzLkdpZl9zZWFyY2h9YClbMF1cbiAgICAgICAgc2VhcmNoX2lucC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLChlKT0+e1xuICAgICAgICAgICAgaWYoZS5rZXk9PVwiRW50ZXJcIil7XG4gICAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUdpZihzZWFyY2hfaW5wLnZhbHVlKVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0hvbGRlckdpZic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNlYXJjaH0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLkdpZl9zZWFyY2h9PjwvaW5wdXQ+XG4gICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuR2lmX2Rpc3BsYXl9IGlkPVwiR2lmX2RpdlwiPlxuICAgXG4gICAgICAgICAgICAgICAgXG4gICAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICBcbiAgICAgICAgIFxuXG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIFxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgRmV0Y2hlZDogc3RhdGUuRWRpdC5GZXRjaExpc3QsXG4gICAgICAgIFNlbGVjdGVkOnN0YXRlLkVkaXQuU2VsZWN0ZWQsXG4gICAgICAgIFR5cGU6c3RhdGUuRWRpdC5DYXRGZXRjaCxcblxuICAgICAgICAvLyBpbWFnZXM6IHN0YXRlLnJlZHVjZXJFZGl0LmVycm9yLFxuICAgIFxuXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBHaWY6IChrZXkpID0+IGRpc3BhdGNoKGFjdGlvbnMuZmV0Y2hHaWYoIGtleSkpLFxuICAgICAgICBTZWxlY3Q6KGRpdik9PmRpc3BhdGNoKGFjdGlvbnMuU2VsZWN0U3VjY2VzcyhkaXYpKVxuICBcblxuICAgIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgV3JpdGluZ1xuZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoR2lmRmV0Y2hpbmcpKVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsImFjdGlvbnMiLCJzdHlsZXMiLCJJbWFnZSIsIkhlYWQiLCJheGlvcyIsIkdpZkZldGNoaW5nIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJvcHMiLCJUeXBlIiwiaW1hZ2VEaXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiaSIsImltYWdlIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIkZldGNoZWQiLCJkYXRhIiwiaW1hZ2VzIiwicHJldmlld19naWYiLCJ1cmwiLCJGZXRjaGVkR2lmIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29weSIsImlkIiwib3JpZ2luYWwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJTZWxlY3QiLCJhcnRpY2xlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNlbGVjRGl2IiwiU2VsZWN0ZWQiLCJzZWxlY0RpdkluaXQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGhpc3Byb3BzIiwiY29uc29sZSIsImxvZyIsInRoaXNwb3JwczAiLCJpbmRleCIsIm9uc2Nyb2xsIiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiU2Vjb25kVmFyIiwiY2hpbGRFbGVtZW50Q291bnQiLCJsaW1pdCIsInRoaXNwcm9wczEiLCJ0aGlzcG9ycHMyIiwiVGhpcmRWYXIiLCJmb3VydGh2YXIiLCJ0aGlzcHJvcHMzIiwiY29tcG9uZW50RGlkTW91bnQiLCJzZWFyY2hfaW5wIiwiR2lmX3NlYXJjaCIsImUiLCJrZXkiLCJoYW5kbGVHaWYiLCJ2YWx1ZSIsInJlbmRlciIsImRpdiIsImNsYXNzTmFtZSIsIlNlYXJjaCIsImlucHV0IiwiR2lmX2Rpc3BsYXkiLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwiR2lmIiwibWFwU3RhdGVUb1Byb3BzIiwiRWRpdCIsIkZldGNoTGlzdCIsIkNhdEZldGNoIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJmZXRjaEdpZiIsIlNlbGVjdFN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/components/controlbarcomps/GifFetching.js\n"));

/***/ })

});