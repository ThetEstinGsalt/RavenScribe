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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/Editing */ \"./store/actions/Editing.js\");\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/writing.module.css */ \"./styles/writing.module.css\");\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nclass ImagesFet extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    // state={\n    //     index:0,\n    //     j:0,\n    // }\n    componentDidUpdate() {\n        // && this.state.index==this.state.j\n        if (this.props.Type == \"G\") {\n            let imageDiv = document.getElementById(\"Gif_div\");\n            imageDiv.innerHTML = \"\";\n            for(let i = 0; i < 4; i++){\n                // let image=document.createElement(\"img\")\n                let image = document.createElement(\"img\");\n                image.setAttribute(\"src\", this.props.Fetched.data[\"\".concat(i)].images.original.url);\n                image.setAttribute(\"class\", \"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().FetchedGif)));\n                imageDiv.appendChild(image);\n            }\n            let article = document.getElementsByClassName(\"article\")[0];\n            let selecDiv = this.props.Selected;\n            let selecDivInit = document.getElementsByClassName(\"blog-content\")[0];\n            let images = document.querySelectorAll(\".\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().FetchedGif)));\n            for(let j = 0; j < images.length; j++){\n                images[j].addEventListener(\"click\", ()=>{\n                    let copy = images[j].cloneNode(true);\n                    copy.removeAttribute(\"class\");\n                    copy.setAttribute(\"class\", \"articleImage\");\n                    this.props.Select(copy);\n                });\n            }\n            imageDiv.onscroll = function(e) {\n                jeff = this.props;\n                if (imageDiv.offsetHeight + imageDiv.scrollTop >= imageDiv.scrollHeight) {\n                    for(let i = imageDiv.childElementCount; i < i + 4; i++){\n                        // let image=document.createElement(\"img\")\n                        let image = document.createElement(\"img\");\n                        image.setAttribute(\"src\", jeff.Fetched.data[\"\".concat(i)].images.original.url);\n                        image.setAttribute(\"class\", \"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().FetchedGif)));\n                        imageDiv.appendChild(image);\n                    }\n                }\n            };\n        // let incj=this.state.j+1\n        // this.setState({\n        //     j:incj\n        // })\n        }\n    }\n    componentDidMount() {\n        // let imageDiv=document.getElementById(\"Gif_div\")\n        // // let fetched = this.props.Fetched\n        // imageDiv.onscroll=function(e){\n        //     if ((imageDiv.offsetHeight + imageDiv.scrollTop) >= imageDiv.scrollHeight) {\n        //         for(let i=imageDiv.childElementCount;i<i+4;i++){\n        //             // let image=document.createElement(\"img\")\n        //             let image=document.createElement(\"img\")\n        //             image.setAttribute(\"src\",this.props.Fetched.data[`${i}`].images.original.url)\n        //             image.setAttribute(\"class\",`${styles.FetchedGif}`)\n        //             imageDiv.appendChild(image)\n        //         }\n        //     }\n        // }\n        let search_inp = document.getElementsByClassName(\"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Gif_search)))[0];\n        search_inp.addEventListener(\"keydown\", (e)=>{\n            if (e.key == \"Enter\") {\n                this.handleGif(search_inp.value);\n            }\n        });\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"HolderGif\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Search),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Gif_search)\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                            lineNumber: 133,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                        lineNumber: 131,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Gif_display),\n                        id: \"Gif_div\"\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                        lineNumber: 138,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                lineNumber: 130,\n                columnNumber: 13\n            }, this)\n        }, void 0, false);\n    }\n    constructor(props){\n        super(props);\n        this.Select = (div)=>{\n            this.props.Select(div);\n        };\n        this.handleGif = (key)=>{\n            this.props.Gif(key);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        Fetched: state.Edit.FetchList,\n        Selected: state.Edit.Selected,\n        Type: state.Edit.CatFetch\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Gif: (key)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__.fetchGif(key)),\n        Select: (div)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__.SelectSuccess(div))\n    };\n};\n// export default Writing\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(ImagesFet));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvY29tcG9uZW50cy9jb250cm9sYmFyY29tcHMvR2lmRmV0Y2hpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDSDtBQUNtQjtBQUNGO0FBQ3hCO0FBQ0g7QUFDRjtBQUUxQixNQUFNUSxrQkFBa0JQLDRDQUFTQTtJQVk3QixVQUFVO0lBQ1YsZUFBZTtJQUNmLFdBQVc7SUFDWCxJQUFJO0lBRUpRLHFCQUFvQjtRQUVoQixvQ0FBb0M7UUFDcEMsSUFBRyxJQUFJLENBQUNDLE1BQU1DLFFBQU0sS0FBSztZQUVyQixJQUFJQyxXQUFTQyxTQUFTQyxlQUFlO1lBQ3JDRixTQUFTRyxZQUFVO1lBRW5CLElBQUksSUFBSUMsSUFBRSxHQUFFQSxJQUFFLEdBQUVBLElBQUk7Z0JBQ2hCLDBDQUEwQztnQkFDMUMsSUFBSUMsUUFBTUosU0FBU0ssY0FBYztnQkFDakNELE1BQU1FLGFBQWEsT0FBTSxJQUFJLENBQUNULE1BQU1VLFFBQVFDLElBQUksQ0FBQyxHQUFLLE9BQUZMLEdBQUksQ0FBQ00sT0FBT0MsU0FBU0M7Z0JBQ3pFUCxNQUFNRSxhQUFhLFNBQVEsR0FBcUIsT0FBbEJmLDhFQUFpQnFCO2dCQUMvQ2IsU0FBU2MsWUFBWVQ7WUFDekI7WUFFQSxJQUFJVSxVQUFRZCxTQUFTZSx1QkFBdUIsVUFBVSxDQUFDLEVBQUU7WUFDekQsSUFBSUMsV0FBUyxJQUFJLENBQUNuQixNQUFNb0I7WUFDeEIsSUFBSUMsZUFBYWxCLFNBQVNlLHVCQUF1QixlQUFlLENBQUMsRUFBRTtZQUduRSxJQUFJTixTQUFPVCxTQUFTbUIsaUJBQWlCLElBQXNCLE9BQWxCNUIsOEVBQWlCcUI7WUFDMUQsSUFBSSxJQUFJUSxJQUFFLEdBQUVBLElBQUVYLE9BQU9ZLFFBQU9ELElBQUk7Z0JBQzVCWCxNQUFNLENBQUNXLEVBQUUsQ0FBQ0UsaUJBQWlCLFNBQVE7b0JBQy9CLElBQUlDLE9BQUtkLE1BQU0sQ0FBQ1csRUFBRSxDQUFDSSxVQUFVO29CQUM3QkQsS0FBS0UsZ0JBQWdCO29CQUNyQkYsS0FBS2pCLGFBQWEsU0FBUTtvQkFDMUIsSUFBSSxDQUFDVCxNQUFNNkIsT0FBT0g7Z0JBSXRCO1lBQ0o7WUFDQXhCLFNBQVM0QixXQUFTLFNBQVNDLENBQUM7Z0JBQ3hCQyxPQUFLLElBQUksQ0FBQ2hDO2dCQUNWLElBQUksU0FBVWlDLGVBQWUvQixTQUFTZ0MsYUFBY2hDLFNBQVNpQyxjQUFjO29CQUN2RSxJQUFJLElBQUk3QixJQUFFSixTQUFTa0MsbUJBQWtCOUIsSUFBRUEsSUFBRSxHQUFFQSxJQUFJO3dCQUMzQywwQ0FBMEM7d0JBQzFDLElBQUlDLFFBQU1KLFNBQVNLLGNBQWM7d0JBQ2pDRCxNQUFNRSxhQUFhLE9BQU11QixLQUFLdEIsUUFBUUMsSUFBSSxDQUFDLEdBQUssT0FBRkwsR0FBSSxDQUFDTSxPQUFPQyxTQUFTQzt3QkFDbkVQLE1BQU1FLGFBQWEsU0FBUSxHQUFxQixPQUFsQmYsOEVBQWlCcUI7d0JBQy9DYixTQUFTYyxZQUFZVDtvQkFDekI7Z0JBRUo7WUFDSjtRQUlBLDBCQUEwQjtRQUMxQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLEtBQUs7UUFJVDtJQU9KO0lBQ0E4QixvQkFBbUI7UUFFZixrREFBa0Q7UUFDbEQsc0NBQXNDO1FBQ3RDLGlDQUFpQztRQUVqQyxtRkFBbUY7UUFDbkYsMkRBQTJEO1FBQzNELHlEQUF5RDtRQUN6RCxzREFBc0Q7UUFDdEQsNEZBQTRGO1FBQzVGLGlFQUFpRTtRQUNqRSwwQ0FBMEM7UUFDMUMsWUFBWTtRQUVaLFFBQVE7UUFDUixJQUFJO1FBSUosSUFBSUMsYUFBV25DLFNBQVNlLHVCQUF1QixHQUFxQixPQUFsQnhCLDhFQUFpQjZDLEVBQUcsQ0FBQyxFQUFFO1FBQ3pFRCxXQUFXYixpQkFBaUIsV0FBVSxDQUFDTTtZQUNuQyxJQUFHQSxFQUFFUyxPQUFLLFNBQVE7Z0JBR2QsSUFBSSxDQUFDQyxVQUFVSCxXQUFXSTtZQUc5QjtRQUNKO0lBR0o7SUFFQUMsU0FBUztRQUNMLHFCQUNJO3NCQUlBLDRFQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFXbkQsMEVBQWFvRDtrQ0FFekIsNEVBQUNDOzRCQUFNRixXQUFXbkQsOEVBQWlCNkM7Ozs7Ozs7Ozs7O2tDQUt2Qyw4REFBQ0s7d0JBQUlDLFdBQVduRCwrRUFBa0JzRDt3QkFBRUMsSUFBRzs7Ozs7Ozs7Ozs7OztJQWUvQztJQS9JQUMsWUFBWWxELEtBQUssQ0FBQztRQUNkLEtBQUssQ0FBQ0E7UUFDTixJQUFJLENBQUM2QixTQUFPLENBQUNlO1lBQ1QsSUFBSSxDQUFDNUMsTUFBTTZCLE9BQU9lO1FBR3RCO1FBQ0EsSUFBSSxDQUFDSCxZQUFVLENBQUNEO1lBQ1osSUFBSSxDQUFDeEMsTUFBTW1ELElBQUlYO1FBQ25CO0lBQ0o7QUFzSUo7QUFLQSxNQUFNWSxrQkFBa0IsQ0FBQ0M7SUFDckIsT0FBTztRQUNIM0MsU0FBUzJDLE1BQU1DLEtBQUtDO1FBQ3BCbkMsVUFBU2lDLE1BQU1DLEtBQUtsQztRQUNwQm5CLE1BQUtvRCxNQUFNQyxLQUFLRTtJQUtwQjtBQUNKO0FBRUEsTUFBTUMscUJBQXFCLENBQUNDO0lBQ3hCLE9BQU87UUFDSFAsS0FBSyxDQUFDWCxNQUFRa0IsU0FBU2pFLDREQUFnQmtFLENBQUVuQjtRQUN6Q1gsUUFBTyxDQUFDZSxNQUFNYyxTQUFTakUsaUVBQXFCbUUsQ0FBQ2hCO0lBR2pEO0FBQ0o7QUFFQSx5QkFBeUI7QUFDekIsK0RBQWdCcEQsb0RBQU9BLENBQUM0RCxpQkFBZ0JLLG9CQUFvQjNELFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2NvbXBvbmVudHMvY29udHJvbGJhcmNvbXBzL0dpZkZldGNoaW5nLmpzPzg5ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvRWRpdGluZydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3dyaXRpbmcubW9kdWxlLmNzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIEltYWdlc0ZldCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuU2VsZWN0PShkaXYpPT57XG4gICAgICAgICAgICB0aGlzLnByb3BzLlNlbGVjdChkaXYpXG4gICAgICAgIFxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVHaWY9KGtleSk9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuR2lmKGtleSlcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzdGF0ZT17XG4gICAgLy8gICAgIGluZGV4OjAsXG4gICAgLy8gICAgIGo6MCxcbiAgICAvLyB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcblxuICAgICAgICAvLyAmJiB0aGlzLnN0YXRlLmluZGV4PT10aGlzLnN0YXRlLmpcbiAgICAgICAgaWYodGhpcy5wcm9wcy5UeXBlPT1cIkdcIiApe1xuXG4gICAgICAgICAgICBsZXQgaW1hZ2VEaXY9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHaWZfZGl2XCIpXG4gICAgICAgICAgICBpbWFnZURpdi5pbm5lckhUTUw9XCJcIlxuXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPDQ7aSsrKXtcbiAgICAgICAgICAgICAgICAvLyBsZXQgaW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICAgICAgICAgIGxldCBpbWFnZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsdGhpcy5wcm9wcy5GZXRjaGVkLmRhdGFbYCR7aX1gXS5pbWFnZXMub3JpZ2luYWwudXJsKVxuICAgICAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYCR7c3R5bGVzLkZldGNoZWRHaWZ9YClcbiAgICAgICAgICAgICAgICBpbWFnZURpdi5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGxldCBhcnRpY2xlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdXG4gICAgICAgICAgICBsZXQgc2VsZWNEaXY9dGhpcy5wcm9wcy5TZWxlY3RlZFxuICAgICAgICAgICAgbGV0IHNlbGVjRGl2SW5pdD1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxvZy1jb250ZW50XCIpWzBdXG4gICAgXG4gICAgXG4gICAgICAgICAgICBsZXQgaW1hZ2VzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3N0eWxlcy5GZXRjaGVkR2lmfWApXG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPGltYWdlcy5sZW5ndGg7aisrKXtcbiAgICAgICAgICAgICAgICBpbWFnZXNbal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3B5PWltYWdlc1tqXS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgY29weS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgICAgICAgICAgICAgICAgICBjb3B5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJhcnRpY2xlSW1hZ2VcIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5TZWxlY3QoY29weSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1hZ2VEaXYub25zY3JvbGw9ZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgamVmZj10aGlzLnByb3BzXG4gICAgICAgICAgICAgICAgaWYgKChpbWFnZURpdi5vZmZzZXRIZWlnaHQgKyBpbWFnZURpdi5zY3JvbGxUb3ApID49IGltYWdlRGl2LnNjcm9sbEhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9aW1hZ2VEaXYuY2hpbGRFbGVtZW50Q291bnQ7aTxpKzQ7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBpbWFnZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsamVmZi5GZXRjaGVkLmRhdGFbYCR7aX1gXS5pbWFnZXMub3JpZ2luYWwudXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixgJHtzdHlsZXMuRmV0Y2hlZEdpZn1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIFxuXG4gICAgICAgICAgICAvLyBsZXQgaW5jaj10aGlzLnN0YXRlLmorMVxuICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAvLyAgICAgajppbmNqXG4gICAgICAgICAgICAvLyB9KVxuXG4gICAgICAgICAgICBcblxuICAgICAgICB9XG4gICAgIFxuXG5cblxuICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuXG4gICAgICAgIC8vIGxldCBpbWFnZURpdj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdpZl9kaXZcIilcbiAgICAgICAgLy8gLy8gbGV0IGZldGNoZWQgPSB0aGlzLnByb3BzLkZldGNoZWRcbiAgICAgICAgLy8gaW1hZ2VEaXYub25zY3JvbGw9ZnVuY3Rpb24oZSl7XG4gICAgIFxuICAgICAgICAvLyAgICAgaWYgKChpbWFnZURpdi5vZmZzZXRIZWlnaHQgKyBpbWFnZURpdi5zY3JvbGxUb3ApID49IGltYWdlRGl2LnNjcm9sbEhlaWdodCkge1xuICAgICAgICAvLyAgICAgICAgIGZvcihsZXQgaT1pbWFnZURpdi5jaGlsZEVsZW1lbnRDb3VudDtpPGkrNDtpKyspe1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgaW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgaW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICAvLyAgICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIix0aGlzLnByb3BzLkZldGNoZWQuZGF0YVtgJHtpfWBdLmltYWdlcy5vcmlnaW5hbC51cmwpXG4gICAgICAgIC8vICAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYCR7c3R5bGVzLkZldGNoZWRHaWZ9YClcbiAgICAgICAgLy8gICAgICAgICAgICAgaW1hZ2VEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgIFxuXG4gICAgICAgIGxldCBzZWFyY2hfaW5wPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c3R5bGVzLkdpZl9zZWFyY2h9YClbMF1cbiAgICAgICAgc2VhcmNoX2lucC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLChlKT0+e1xuICAgICAgICAgICAgaWYoZS5rZXk9PVwiRW50ZXJcIil7XG4gICAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUdpZihzZWFyY2hfaW5wLnZhbHVlKVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0hvbGRlckdpZic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNlYXJjaH0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLkdpZl9zZWFyY2h9PjwvaW5wdXQ+XG4gICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuR2lmX2Rpc3BsYXl9IGlkPVwiR2lmX2RpdlwiPlxuICAgXG4gICAgICAgICAgICAgICAgXG4gICAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICBcbiAgICAgICAgIFxuXG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIFxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgRmV0Y2hlZDogc3RhdGUuRWRpdC5GZXRjaExpc3QsXG4gICAgICAgIFNlbGVjdGVkOnN0YXRlLkVkaXQuU2VsZWN0ZWQsXG4gICAgICAgIFR5cGU6c3RhdGUuRWRpdC5DYXRGZXRjaCxcblxuICAgICAgICAvLyBpbWFnZXM6IHN0YXRlLnJlZHVjZXJFZGl0LmVycm9yLFxuICAgIFxuXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBHaWY6IChrZXkpID0+IGRpc3BhdGNoKGFjdGlvbnMuZmV0Y2hHaWYoIGtleSkpLFxuICAgICAgICBTZWxlY3Q6KGRpdik9PmRpc3BhdGNoKGFjdGlvbnMuU2VsZWN0U3VjY2VzcyhkaXYpKVxuICBcblxuICAgIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgV3JpdGluZ1xuZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoSW1hZ2VzRmV0KSlcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJhY3Rpb25zIiwic3R5bGVzIiwiSW1hZ2UiLCJIZWFkIiwiYXhpb3MiLCJJbWFnZXNGZXQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcm9wcyIsIlR5cGUiLCJpbWFnZURpdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJpIiwiaW1hZ2UiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiRmV0Y2hlZCIsImRhdGEiLCJpbWFnZXMiLCJvcmlnaW5hbCIsInVybCIsIkZldGNoZWRHaWYiLCJhcHBlbmRDaGlsZCIsImFydGljbGUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2VsZWNEaXYiLCJTZWxlY3RlZCIsInNlbGVjRGl2SW5pdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJqIiwibGVuZ3RoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvcHkiLCJjbG9uZU5vZGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJTZWxlY3QiLCJvbnNjcm9sbCIsImUiLCJqZWZmIiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2hpbGRFbGVtZW50Q291bnQiLCJjb21wb25lbnREaWRNb3VudCIsInNlYXJjaF9pbnAiLCJHaWZfc2VhcmNoIiwia2V5IiwiaGFuZGxlR2lmIiwidmFsdWUiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJTZWFyY2giLCJpbnB1dCIsIkdpZl9kaXNwbGF5IiwiaWQiLCJjb25zdHJ1Y3RvciIsIkdpZiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiRWRpdCIsIkZldGNoTGlzdCIsIkNhdEZldGNoIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJmZXRjaEdpZiIsIlNlbGVjdFN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/components/controlbarcomps/GifFetching.js\n"));

/***/ })

});