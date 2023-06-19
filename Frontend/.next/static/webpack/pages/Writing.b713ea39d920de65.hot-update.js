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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/Editing */ \"./store/actions/Editing.js\");\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/writing.module.css */ \"./styles/writing.module.css\");\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nclass ImagesFet extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    componentDidUpdate() {\n        this.setState({\n            Fetched: this.props.Fetched\n        });\n        // && this.state.index==this.state.j\n        if (this.props.Type == \"G\") {\n            let imageDiv = document.getElementById(\"Gif_div\");\n            imageDiv.innerHTML = \"\";\n            for(let i = 0; i < 4; i++){\n                // let image=document.createElement(\"img\")\n                let image = document.createElement(\"img\");\n                image.setAttribute(\"src\", this.props.Fetched.data[\"\".concat(i)].images.original.url);\n                image.setAttribute(\"class\", \"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().FetchedGif)));\n                imageDiv.appendChild(image);\n            }\n            let article = document.getElementsByClassName(\"article\")[0];\n            let selecDiv = this.props.Selected;\n            let selecDivInit = document.getElementsByClassName(\"blog-content\")[0];\n            let images = document.querySelectorAll(\".\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().FetchedGif)));\n            for(let j = 0; j < images.length; j++){\n                images[j].addEventListener(\"click\", ()=>{\n                    let copy = images[j].cloneNode(true);\n                    copy.removeAttribute(\"class\");\n                    copy.setAttribute(\"class\", \"articleImage\");\n                    this.props.Select(copy);\n                });\n            }\n        // let incj=this.state.j+1\n        // this.setState({\n        //     j:incj\n        // })\n        }\n    }\n    componentDidMount() {\n        let imageDiv = document.getElementById(\"Gif_div\");\n        console.log(this.props.Fetched);\n        imageDiv.onscroll = function() {\n            if (imageDiv.offsetHeight + imageDiv.scrollTop >= imageDiv.scrollHeight) {\n                for(let i = imageDiv.childElementCount; i < i + 4; i++){\n                    // let image=document.createElement(\"img\")\n                    let image = document.createElement(\"img\");\n                    image.setAttribute(\"src\", this.state.Fetched.data[\"\".concat(i)].images.original.url);\n                    image.setAttribute(\"class\", \"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().FetchedGif)));\n                    imageDiv.appendChild(image);\n                }\n            }\n        };\n        let search_inp = document.getElementsByClassName(\"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Gif_search)))[0];\n        search_inp.addEventListener(\"keydown\", (e)=>{\n            if (e.key == \"Enter\") {\n                this.handleGif(search_inp.value);\n            }\n        });\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"HolderGif\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Search),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Gif_search)\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                            lineNumber: 136,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                        lineNumber: 134,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Gif_display),\n                        id: \"Gif_div\"\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                        lineNumber: 141,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                lineNumber: 133,\n                columnNumber: 13\n            }, this)\n        }, void 0, false);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            Fetched: null\n        };\n        this.Select = (div)=>{\n            this.props.Select(div);\n        };\n        this.handleGif = (key)=>{\n            this.props.Gif(key);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        Fetched: state.Edit.FetchList,\n        Selected: state.Edit.Selected,\n        Type: state.Edit.CatFetch\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Gif: (key)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__.fetchGif(key)),\n        Select: (div)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__.SelectSuccess(div))\n    };\n};\n// export default Writing\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(ImagesFet));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvY29tcG9uZW50cy9jb250cm9sYmFyY29tcHMvR2lmRmV0Y2hpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDSDtBQUNtQjtBQUNGO0FBQ3hCO0FBQ0g7QUFDRjtBQUUxQixNQUFNUSxrQkFBa0JQLDRDQUFTQTtJQWlCN0JRLHFCQUFvQjtRQUVoQixJQUFJLENBQUNDLFNBQVM7WUFDVkMsU0FBUSxJQUFJLENBQUNDLE1BQU1EO1FBQ3ZCO1FBQ0Esb0NBQW9DO1FBQ3BDLElBQUcsSUFBSSxDQUFDQyxNQUFNQyxRQUFNLEtBQUs7WUFFckIsSUFBSUMsV0FBU0MsU0FBU0MsZUFBZTtZQUNyQ0YsU0FBU0csWUFBVTtZQUduQixJQUFJLElBQUlDLElBQUUsR0FBRUEsSUFBRSxHQUFFQSxJQUFJO2dCQUNoQiwwQ0FBMEM7Z0JBQzFDLElBQUlDLFFBQU1KLFNBQVNLLGNBQWM7Z0JBQ2pDRCxNQUFNRSxhQUFhLE9BQU0sSUFBSSxDQUFDVCxNQUFNRCxRQUFRVyxJQUFJLENBQUMsR0FBSyxPQUFGSixHQUFJLENBQUNLLE9BQU9DLFNBQVNDO2dCQUN6RU4sTUFBTUUsYUFBYSxTQUFRLEdBQXFCLE9BQWxCakIsOEVBQWlCc0I7Z0JBQy9DWixTQUFTYSxZQUFZUjtZQUN6QjtZQUdBLElBQUlTLFVBQVFiLFNBQVNjLHVCQUF1QixVQUFVLENBQUMsRUFBRTtZQUN6RCxJQUFJQyxXQUFTLElBQUksQ0FBQ2xCLE1BQU1tQjtZQUN4QixJQUFJQyxlQUFhakIsU0FBU2MsdUJBQXVCLGVBQWUsQ0FBQyxFQUFFO1lBR25FLElBQUlOLFNBQU9SLFNBQVNrQixpQkFBaUIsSUFBc0IsT0FBbEI3Qiw4RUFBaUJzQjtZQUMxRCxJQUFJLElBQUlRLElBQUUsR0FBRUEsSUFBRVgsT0FBT1ksUUFBT0QsSUFBSTtnQkFDNUJYLE1BQU0sQ0FBQ1csRUFBRSxDQUFDRSxpQkFBaUIsU0FBUTtvQkFDL0IsSUFBSUMsT0FBS2QsTUFBTSxDQUFDVyxFQUFFLENBQUNJLFVBQVU7b0JBQzdCRCxLQUFLRSxnQkFBZ0I7b0JBQ3JCRixLQUFLaEIsYUFBYSxTQUFRO29CQUMxQixJQUFJLENBQUNULE1BQU00QixPQUFPSDtnQkFJdEI7WUFDSjtRQU9BLDBCQUEwQjtRQUMxQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLEtBQUs7UUFJVDtJQU9KO0lBQ0FJLG9CQUFtQjtRQUVmLElBQUkzQixXQUFTQyxTQUFTQyxlQUFlO1FBQ3JDMEIsUUFBUUMsSUFBSSxJQUFJLENBQUMvQixNQUFNRDtRQUV2QkcsU0FBUzhCLFdBQVM7WUFFZCxJQUFJLFNBQVVDLGVBQWUvQixTQUFTZ0MsYUFBY2hDLFNBQVNpQyxjQUFjO2dCQUczRSxJQUFJLElBQUk3QixJQUFFSixTQUFTa0MsbUJBQWtCOUIsSUFBRUEsSUFBRSxHQUFFQSxJQUFJO29CQUMzQywwQ0FBMEM7b0JBQzFDLElBQUlDLFFBQU1KLFNBQVNLLGNBQWM7b0JBQ2pDRCxNQUFNRSxhQUFhLE9BQU0sSUFBSSxDQUFDNEIsTUFBTXRDLFFBQVFXLElBQUksQ0FBQyxHQUFLLE9BQUZKLEdBQUksQ0FBQ0ssT0FBT0MsU0FBU0M7b0JBQ3pFTixNQUFNRSxhQUFhLFNBQVEsR0FBcUIsT0FBbEJqQiw4RUFBaUJzQjtvQkFDL0NaLFNBQVNhLFlBQVlSO2dCQUN6QjtZQUtBO1FBQ0o7UUFNQSxJQUFJK0IsYUFBV25DLFNBQVNjLHVCQUF1QixHQUFxQixPQUFsQnpCLDhFQUFpQitDLEVBQUcsQ0FBQyxFQUFFO1FBQ3pFRCxXQUFXZCxpQkFBaUIsV0FBVSxDQUFDZ0I7WUFDbkMsSUFBR0EsRUFBRUMsT0FBSyxTQUFRO2dCQUdkLElBQUksQ0FBQ0MsVUFBVUosV0FBV0s7WUFHOUI7UUFDSjtJQUdKO0lBRUFDLFNBQVM7UUFDTCxxQkFDSTtzQkFJQSw0RUFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBV3RELDBFQUFhdUQ7a0NBRXpCLDRFQUFDQzs0QkFBTUYsV0FBV3RELDhFQUFpQitDOzs7Ozs7Ozs7OztrQ0FLdkMsOERBQUNNO3dCQUFJQyxXQUFXdEQsK0VBQWtCeUQ7d0JBQUVDLElBQUc7Ozs7Ozs7Ozs7Ozs7SUFlL0M7SUFsSkFDLFlBQVluRCxLQUFLLENBQUM7UUFDZCxLQUFLLENBQUNBO2FBVVZxQyxRQUFNO1lBQ0Z0QyxTQUFRO1FBRVo7UUFaSSxJQUFJLENBQUM2QixTQUFPLENBQUNpQjtZQUNULElBQUksQ0FBQzdDLE1BQU00QixPQUFPaUI7UUFHdEI7UUFDQSxJQUFJLENBQUNILFlBQVUsQ0FBQ0Q7WUFDWixJQUFJLENBQUN6QyxNQUFNb0QsSUFBSVg7UUFDbkI7SUFDSjtBQXlJSjtBQUtBLE1BQU1ZLGtCQUFrQixDQUFDaEI7SUFDckIsT0FBTztRQUNIdEMsU0FBU3NDLE1BQU1pQixLQUFLQztRQUNwQnBDLFVBQVNrQixNQUFNaUIsS0FBS25DO1FBQ3BCbEIsTUFBS29DLE1BQU1pQixLQUFLRTtJQUtwQjtBQUNKO0FBRUEsTUFBTUMscUJBQXFCLENBQUNDO0lBQ3hCLE9BQU87UUFDSE4sS0FBSyxDQUFDWCxNQUFRaUIsU0FBU25FLDREQUFnQm9FLENBQUVsQjtRQUN6Q2IsUUFBTyxDQUFDaUIsTUFBTWEsU0FBU25FLGlFQUFxQnFFLENBQUNmO0lBR2pEO0FBQ0o7QUFFQSx5QkFBeUI7QUFDekIsK0RBQWdCdkQsb0RBQU9BLENBQUMrRCxpQkFBZ0JJLG9CQUFvQjdELFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2NvbXBvbmVudHMvY29udHJvbGJhcmNvbXBzL0dpZkZldGNoaW5nLmpzPzg5ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvRWRpdGluZydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3dyaXRpbmcubW9kdWxlLmNzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIEltYWdlc0ZldCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuU2VsZWN0PShkaXYpPT57XG4gICAgICAgICAgICB0aGlzLnByb3BzLlNlbGVjdChkaXYpXG4gICAgICAgIFxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVHaWY9KGtleSk9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuR2lmKGtleSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZT17XG4gICAgICAgIEZldGNoZWQ6bnVsbCxcbiBcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIEZldGNoZWQ6dGhpcy5wcm9wcy5GZXRjaGVkXG4gICAgICAgIH0pXG4gICAgICAgIC8vICYmIHRoaXMuc3RhdGUuaW5kZXg9PXRoaXMuc3RhdGUualxuICAgICAgICBpZih0aGlzLnByb3BzLlR5cGU9PVwiR1wiICl7XG5cbiAgICAgICAgICAgIGxldCBpbWFnZURpdj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdpZl9kaXZcIilcbiAgICAgICAgICAgIGltYWdlRGl2LmlubmVySFRNTD1cIlwiXG5cblxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTw0O2krKyl7XG4gICAgICAgICAgICAgICAgLy8gbGV0IGltYWdlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLHRoaXMucHJvcHMuRmV0Y2hlZC5kYXRhW2Ake2l9YF0uaW1hZ2VzLm9yaWdpbmFsLnVybClcbiAgICAgICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGAke3N0eWxlcy5GZXRjaGVkR2lmfWApXG4gICAgICAgICAgICAgICAgaW1hZ2VEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgICAgICAgICB9XG5cbiAgICBcbiAgICAgICAgICAgIGxldCBhcnRpY2xlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdXG4gICAgICAgICAgICBsZXQgc2VsZWNEaXY9dGhpcy5wcm9wcy5TZWxlY3RlZFxuICAgICAgICAgICAgbGV0IHNlbGVjRGl2SW5pdD1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxvZy1jb250ZW50XCIpWzBdXG4gICAgXG4gICAgXG4gICAgICAgICAgICBsZXQgaW1hZ2VzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3N0eWxlcy5GZXRjaGVkR2lmfWApXG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPGltYWdlcy5sZW5ndGg7aisrKXtcbiAgICAgICAgICAgICAgICBpbWFnZXNbal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3B5PWltYWdlc1tqXS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgY29weS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgICAgICAgICAgICAgICAgICBjb3B5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJhcnRpY2xlSW1hZ2VcIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5TZWxlY3QoY29weSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgXG4gIFxuICAgIFxuICAgICAgICAgIFxuXG4gICAgICAgICAgICAvLyBsZXQgaW5jaj10aGlzLnN0YXRlLmorMVxuICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAvLyAgICAgajppbmNqXG4gICAgICAgICAgICAvLyB9KVxuXG4gICAgICAgICAgICBcblxuICAgICAgICB9XG4gICAgIFxuXG5cblxuICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpeyAgICBcblxuICAgICAgICBsZXQgaW1hZ2VEaXY9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHaWZfZGl2XCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuRmV0Y2hlZClcblxuICAgICAgICBpbWFnZURpdi5vbnNjcm9sbD1mdW5jdGlvbigpe1xuXG4gICAgICAgICAgICBpZiAoKGltYWdlRGl2Lm9mZnNldEhlaWdodCArIGltYWdlRGl2LnNjcm9sbFRvcCkgPj0gaW1hZ2VEaXYuc2Nyb2xsSGVpZ2h0KSB7XG5cblxuICAgICAgICAgICAgZm9yKGxldCBpPWltYWdlRGl2LmNoaWxkRWxlbWVudENvdW50O2k8aSs0O2krKyl7XG4gICAgICAgICAgICAgICAgLy8gbGV0IGltYWdlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLHRoaXMuc3RhdGUuRmV0Y2hlZC5kYXRhW2Ake2l9YF0uaW1hZ2VzLm9yaWdpbmFsLnVybClcbiAgICAgICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGAke3N0eWxlcy5GZXRjaGVkR2lmfWApXG4gICAgICAgICAgICAgICAgaW1hZ2VEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG5cblxuXG4gICAgICAgIGxldCBzZWFyY2hfaW5wPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c3R5bGVzLkdpZl9zZWFyY2h9YClbMF1cbiAgICAgICAgc2VhcmNoX2lucC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLChlKT0+e1xuICAgICAgICAgICAgaWYoZS5rZXk9PVwiRW50ZXJcIil7XG4gICAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUdpZihzZWFyY2hfaW5wLnZhbHVlKVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0hvbGRlckdpZic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNlYXJjaH0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLkdpZl9zZWFyY2h9PjwvaW5wdXQ+XG4gICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuR2lmX2Rpc3BsYXl9IGlkPVwiR2lmX2RpdlwiPlxuICAgXG4gICAgICAgICAgICAgICAgXG4gICAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICBcbiAgICAgICAgIFxuXG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIFxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgRmV0Y2hlZDogc3RhdGUuRWRpdC5GZXRjaExpc3QsXG4gICAgICAgIFNlbGVjdGVkOnN0YXRlLkVkaXQuU2VsZWN0ZWQsXG4gICAgICAgIFR5cGU6c3RhdGUuRWRpdC5DYXRGZXRjaCxcblxuICAgICAgICAvLyBpbWFnZXM6IHN0YXRlLnJlZHVjZXJFZGl0LmVycm9yLFxuICAgIFxuXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBHaWY6IChrZXkpID0+IGRpc3BhdGNoKGFjdGlvbnMuZmV0Y2hHaWYoIGtleSkpLFxuICAgICAgICBTZWxlY3Q6KGRpdik9PmRpc3BhdGNoKGFjdGlvbnMuU2VsZWN0U3VjY2VzcyhkaXYpKVxuICBcblxuICAgIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgV3JpdGluZ1xuZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoSW1hZ2VzRmV0KSlcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJhY3Rpb25zIiwic3R5bGVzIiwiSW1hZ2UiLCJIZWFkIiwiYXhpb3MiLCJJbWFnZXNGZXQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJzZXRTdGF0ZSIsIkZldGNoZWQiLCJwcm9wcyIsIlR5cGUiLCJpbWFnZURpdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJpIiwiaW1hZ2UiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZGF0YSIsImltYWdlcyIsIm9yaWdpbmFsIiwidXJsIiwiRmV0Y2hlZEdpZiIsImFwcGVuZENoaWxkIiwiYXJ0aWNsZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzZWxlY0RpdiIsIlNlbGVjdGVkIiwic2VsZWNEaXZJbml0IiwicXVlcnlTZWxlY3RvckFsbCIsImoiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwiY29weSIsImNsb25lTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsIlNlbGVjdCIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsIm9uc2Nyb2xsIiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2hpbGRFbGVtZW50Q291bnQiLCJzdGF0ZSIsInNlYXJjaF9pbnAiLCJHaWZfc2VhcmNoIiwiZSIsImtleSIsImhhbmRsZUdpZiIsInZhbHVlIiwicmVuZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiU2VhcmNoIiwiaW5wdXQiLCJHaWZfZGlzcGxheSIsImlkIiwiY29uc3RydWN0b3IiLCJHaWYiLCJtYXBTdGF0ZVRvUHJvcHMiLCJFZGl0IiwiRmV0Y2hMaXN0IiwiQ2F0RmV0Y2giLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImZldGNoR2lmIiwiU2VsZWN0U3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/components/controlbarcomps/GifFetching.js\n"));

/***/ })

});