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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/Editing */ \"./store/actions/Editing.js\");\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/writing.module.css */ \"./styles/writing.module.css\");\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nclass ImagesFet extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    // state={\n    //     index:0,\n    //     j:0,\n    // }\n    componentDidUpdate() {\n        // && this.state.index==this.state.j\n        if (this.props.Type == \"G\") {\n            let imageDiv = document.getElementById(\"Gif_div\");\n            imageDiv.innerHTML = \"\";\n            for(let i = 0; i < 4; i++){\n                // let image=document.createElement(\"img\")\n                let image = document.createElement(\"img\");\n                image.setAttribute(\"src\", this.props.Fetched.data[\"\".concat(i)].images.original.url);\n                image.setAttribute(\"class\", \"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().FetchedGif)));\n                imageDiv.appendChild(image);\n            }\n            let article = document.getElementsByClassName(\"article\")[0];\n            let selecDiv = this.props.Selected;\n            let selecDivInit = document.getElementsByClassName(\"blog-content\")[0];\n            let images = document.querySelectorAll(\".\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().FetchedGif)));\n            for(let j = 0; j < images.length; j++){\n                images[j].addEventListener(\"click\", ()=>{\n                    let copy = images[j].cloneNode(true);\n                    copy.removeAttribute(\"class\");\n                    copy.setAttribute(\"class\", \"articleImage\");\n                    this.props.Select(copy);\n                });\n            }\n        // let incj=this.state.j+1\n        // this.setState({\n        //     j:incj\n        // })\n        }\n    }\n    componentDidMount() {\n        let imageDiv = document.getElementById(\"Gif_div\");\n        console.log(this.props.Fetched);\n        let param = this.props.Fetched;\n        function LoadMore(param) {\n            console.log(param);\n        }\n        // imageDiv.onscroll=function(props){\n        //     console.log(props.Fetched)\n        //     if ((imageDiv.offsetHeight + imageDiv.scrollTop) >= imageDiv.scrollHeight) {\n        //     }\n        // }\n        imageDiv.addEventListener(\"scroll\", LoadMore(param));\n        let search_inp = document.getElementsByClassName(\"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Gif_search)))[0];\n        search_inp.addEventListener(\"keydown\", (e)=>{\n            if (e.key == \"Enter\") {\n                this.handleGif(search_inp.value);\n            }\n        });\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"HolderGif\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Search),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Gif_search)\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                            lineNumber: 127,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                        lineNumber: 125,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Gif_display),\n                        id: \"Gif_div\"\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                        lineNumber: 132,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                lineNumber: 124,\n                columnNumber: 13\n            }, this)\n        }, void 0, false);\n    }\n    constructor(props){\n        super(props);\n        this.Select = (div)=>{\n            this.props.Select(div);\n        };\n        this.handleGif = (key)=>{\n            this.props.Gif(key);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        Fetched: state.Edit.FetchList,\n        Selected: state.Edit.Selected,\n        Type: state.Edit.CatFetch\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Gif: (key)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__.fetchGif(key)),\n        Select: (div)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__.SelectSuccess(div))\n    };\n};\n// export default Writing\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(ImagesFet));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvY29tcG9uZW50cy9jb250cm9sYmFyY29tcHMvR2lmRmV0Y2hpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDSDtBQUNtQjtBQUNGO0FBQ3hCO0FBQ0g7QUFDRjtBQUUxQixNQUFNUSxrQkFBa0JQLDRDQUFTQTtJQVk3QixVQUFVO0lBQ1YsZUFBZTtJQUNmLFdBQVc7SUFDWCxJQUFJO0lBRUpRLHFCQUFvQjtRQUVoQixvQ0FBb0M7UUFDcEMsSUFBRyxJQUFJLENBQUNDLE1BQU1DLFFBQU0sS0FBSztZQUVyQixJQUFJQyxXQUFTQyxTQUFTQyxlQUFlO1lBQ3JDRixTQUFTRyxZQUFVO1lBR25CLElBQUksSUFBSUMsSUFBRSxHQUFFQSxJQUFFLEdBQUVBLElBQUk7Z0JBQ2hCLDBDQUEwQztnQkFDMUMsSUFBSUMsUUFBTUosU0FBU0ssY0FBYztnQkFDakNELE1BQU1FLGFBQWEsT0FBTSxJQUFJLENBQUNULE1BQU1VLFFBQVFDLElBQUksQ0FBQyxHQUFLLE9BQUZMLEdBQUksQ0FBQ00sT0FBT0MsU0FBU0M7Z0JBQ3pFUCxNQUFNRSxhQUFhLFNBQVEsR0FBcUIsT0FBbEJmLDhFQUFpQnFCO2dCQUMvQ2IsU0FBU2MsWUFBWVQ7WUFDekI7WUFHQSxJQUFJVSxVQUFRZCxTQUFTZSx1QkFBdUIsVUFBVSxDQUFDLEVBQUU7WUFDekQsSUFBSUMsV0FBUyxJQUFJLENBQUNuQixNQUFNb0I7WUFDeEIsSUFBSUMsZUFBYWxCLFNBQVNlLHVCQUF1QixlQUFlLENBQUMsRUFBRTtZQUduRSxJQUFJTixTQUFPVCxTQUFTbUIsaUJBQWlCLElBQXNCLE9BQWxCNUIsOEVBQWlCcUI7WUFDMUQsSUFBSSxJQUFJUSxJQUFFLEdBQUVBLElBQUVYLE9BQU9ZLFFBQU9ELElBQUk7Z0JBQzVCWCxNQUFNLENBQUNXLEVBQUUsQ0FBQ0UsaUJBQWlCLFNBQVE7b0JBQy9CLElBQUlDLE9BQUtkLE1BQU0sQ0FBQ1csRUFBRSxDQUFDSSxVQUFVO29CQUM3QkQsS0FBS0UsZ0JBQWdCO29CQUNyQkYsS0FBS2pCLGFBQWEsU0FBUTtvQkFDMUIsSUFBSSxDQUFDVCxNQUFNNkIsT0FBT0g7Z0JBSXRCO1lBQ0o7UUFPQSwwQkFBMEI7UUFDMUIsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixLQUFLO1FBSVQ7SUFPSjtJQUNBSSxvQkFBbUI7UUFFZixJQUFJNUIsV0FBU0MsU0FBU0MsZUFBZTtRQUNyQzJCLFFBQVFDLElBQUksSUFBSSxDQUFDaEMsTUFBTVU7UUFDdkIsSUFBSXVCLFFBQU0sSUFBSSxDQUFDakMsTUFBTVU7UUFDckIsU0FBU3dCLFNBQVNELEtBQUs7WUFDbkJGLFFBQVFDLElBQUlDO1FBRWhCO1FBRUEscUNBQXFDO1FBQ3JDLGlDQUFpQztRQUNqQyxtRkFBbUY7UUFHbkYsUUFBUTtRQUNSLElBQUk7UUFDSi9CLFNBQVN1QixpQkFBaUIsVUFBU1MsU0FBU0Q7UUFLNUMsSUFBSUUsYUFBV2hDLFNBQVNlLHVCQUF1QixHQUFxQixPQUFsQnhCLDhFQUFpQjBDLEVBQUcsQ0FBQyxFQUFFO1FBQ3pFRCxXQUFXVixpQkFBaUIsV0FBVSxDQUFDWTtZQUNuQyxJQUFHQSxFQUFFQyxPQUFLLFNBQVE7Z0JBR2QsSUFBSSxDQUFDQyxVQUFVSixXQUFXSztZQUc5QjtRQUNKO0lBR0o7SUFFQUMsU0FBUztRQUNMLHFCQUNJO3NCQUlBLDRFQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFXakQsMEVBQWFrRDtrQ0FFekIsNEVBQUNDOzRCQUFNRixXQUFXakQsOEVBQWlCMEM7Ozs7Ozs7Ozs7O2tDQUt2Qyw4REFBQ007d0JBQUlDLFdBQVdqRCwrRUFBa0JvRDt3QkFBRUMsSUFBRzs7Ozs7Ozs7Ozs7OztJQWUvQztJQXpJQUMsWUFBWWhELEtBQUssQ0FBQztRQUNkLEtBQUssQ0FBQ0E7UUFDTixJQUFJLENBQUM2QixTQUFPLENBQUNhO1lBQ1QsSUFBSSxDQUFDMUMsTUFBTTZCLE9BQU9hO1FBR3RCO1FBQ0EsSUFBSSxDQUFDSCxZQUFVLENBQUNEO1lBQ1osSUFBSSxDQUFDdEMsTUFBTWlELElBQUlYO1FBQ25CO0lBQ0o7QUFnSUo7QUFLQSxNQUFNWSxrQkFBa0IsQ0FBQ0M7SUFDckIsT0FBTztRQUNIekMsU0FBU3lDLE1BQU1DLEtBQUtDO1FBQ3BCakMsVUFBUytCLE1BQU1DLEtBQUtoQztRQUNwQm5CLE1BQUtrRCxNQUFNQyxLQUFLRTtJQUtwQjtBQUNKO0FBRUEsTUFBTUMscUJBQXFCLENBQUNDO0lBQ3hCLE9BQU87UUFDSFAsS0FBSyxDQUFDWCxNQUFRa0IsU0FBUy9ELDREQUFnQmdFLENBQUVuQjtRQUN6Q1QsUUFBTyxDQUFDYSxNQUFNYyxTQUFTL0QsaUVBQXFCaUUsQ0FBQ2hCO0lBR2pEO0FBQ0o7QUFFQSx5QkFBeUI7QUFDekIsK0RBQWdCbEQsb0RBQU9BLENBQUMwRCxpQkFBZ0JLLG9CQUFvQnpELFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2NvbXBvbmVudHMvY29udHJvbGJhcmNvbXBzL0dpZkZldGNoaW5nLmpzPzg5ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvRWRpdGluZydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3dyaXRpbmcubW9kdWxlLmNzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIEltYWdlc0ZldCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuU2VsZWN0PShkaXYpPT57XG4gICAgICAgICAgICB0aGlzLnByb3BzLlNlbGVjdChkaXYpXG4gICAgICAgIFxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVHaWY9KGtleSk9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuR2lmKGtleSlcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzdGF0ZT17XG4gICAgLy8gICAgIGluZGV4OjAsXG4gICAgLy8gICAgIGo6MCxcbiAgICAvLyB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcblxuICAgICAgICAvLyAmJiB0aGlzLnN0YXRlLmluZGV4PT10aGlzLnN0YXRlLmpcbiAgICAgICAgaWYodGhpcy5wcm9wcy5UeXBlPT1cIkdcIiApe1xuXG4gICAgICAgICAgICBsZXQgaW1hZ2VEaXY9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHaWZfZGl2XCIpXG4gICAgICAgICAgICBpbWFnZURpdi5pbm5lckhUTUw9XCJcIlxuXG5cbiAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8NDtpKyspe1xuICAgICAgICAgICAgICAgIC8vIGxldCBpbWFnZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIix0aGlzLnByb3BzLkZldGNoZWQuZGF0YVtgJHtpfWBdLmltYWdlcy5vcmlnaW5hbC51cmwpXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixgJHtzdHlsZXMuRmV0Y2hlZEdpZn1gKVxuICAgICAgICAgICAgICAgIGltYWdlRGl2LmFwcGVuZENoaWxkKGltYWdlKVxuICAgICAgICAgICAgfVxuXG4gICAgXG4gICAgICAgICAgICBsZXQgYXJ0aWNsZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXJ0aWNsZVwiKVswXVxuICAgICAgICAgICAgbGV0IHNlbGVjRGl2PXRoaXMucHJvcHMuU2VsZWN0ZWRcbiAgICAgICAgICAgIGxldCBzZWxlY0RpdkluaXQ9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJsb2ctY29udGVudFwiKVswXVxuICAgIFxuICAgIFxuICAgICAgICAgICAgbGV0IGltYWdlcz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtzdHlsZXMuRmV0Y2hlZEdpZn1gKVxuICAgICAgICAgICAgZm9yKGxldCBqPTA7ajxpbWFnZXMubGVuZ3RoO2orKyl7XG4gICAgICAgICAgICAgICAgaW1hZ2VzW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29weT1pbWFnZXNbal0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgICAgICAgIGNvcHkucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICAgICAgICAgICAgICAgICAgY29weS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiYXJ0aWNsZUltYWdlXCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuU2VsZWN0KGNvcHkpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIFxuICBcbiAgICBcbiAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gbGV0IGluY2o9dGhpcy5zdGF0ZS5qKzFcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgLy8gICAgIGo6aW5jalxuICAgICAgICAgICAgLy8gfSlcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgfVxuICAgICBcblxuXG5cbiAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXsgICAgXG5cbiAgICAgICAgbGV0IGltYWdlRGl2PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR2lmX2RpdlwiKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLkZldGNoZWQpXG4gICAgICAgIGxldCBwYXJhbT10aGlzLnByb3BzLkZldGNoZWRcbiAgICAgICAgZnVuY3Rpb24gTG9hZE1vcmUocGFyYW0pe1xuICAgICAgICAgICAgY29uc29sZS5sb2cocGFyYW0pXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGltYWdlRGl2Lm9uc2Nyb2xsPWZ1bmN0aW9uKHByb3BzKXtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHByb3BzLkZldGNoZWQpXG4gICAgICAgIC8vICAgICBpZiAoKGltYWdlRGl2Lm9mZnNldEhlaWdodCArIGltYWdlRGl2LnNjcm9sbFRvcCkgPj0gaW1hZ2VEaXYuc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIGltYWdlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixMb2FkTW9yZShwYXJhbSkpXG5cblxuXG5cbiAgICAgICAgbGV0IHNlYXJjaF9pbnA9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzdHlsZXMuR2lmX3NlYXJjaH1gKVswXVxuICAgICAgICBzZWFyY2hfaW5wLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsKGUpPT57XG4gICAgICAgICAgICBpZihlLmtleT09XCJFbnRlclwiKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlR2lmKHNlYXJjaF9pbnAudmFsdWUpXG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICBcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nSG9sZGVyR2lmJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VhcmNofT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuR2lmX3NlYXJjaH0+PC9pbnB1dD5cbiAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5HaWZfZGlzcGxheX0gaWQ9XCJHaWZfZGl2XCI+XG4gICBcbiAgICAgICAgICAgICAgICBcbiAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgXG5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBGZXRjaGVkOiBzdGF0ZS5FZGl0LkZldGNoTGlzdCxcbiAgICAgICAgU2VsZWN0ZWQ6c3RhdGUuRWRpdC5TZWxlY3RlZCxcbiAgICAgICAgVHlwZTpzdGF0ZS5FZGl0LkNhdEZldGNoLFxuXG4gICAgICAgIC8vIGltYWdlczogc3RhdGUucmVkdWNlckVkaXQuZXJyb3IsXG4gICAgXG5cbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIEdpZjogKGtleSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5mZXRjaEdpZigga2V5KSksXG4gICAgICAgIFNlbGVjdDooZGl2KT0+ZGlzcGF0Y2goYWN0aW9ucy5TZWxlY3RTdWNjZXNzKGRpdikpXG4gIFxuXG4gICAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBXcml0aW5nXG5leHBvcnQgZGVmYXVsdCAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShJbWFnZXNGZXQpKVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsImFjdGlvbnMiLCJzdHlsZXMiLCJJbWFnZSIsIkhlYWQiLCJheGlvcyIsIkltYWdlc0ZldCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByb3BzIiwiVHlwZSIsImltYWdlRGl2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImkiLCJpbWFnZSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJGZXRjaGVkIiwiZGF0YSIsImltYWdlcyIsIm9yaWdpbmFsIiwidXJsIiwiRmV0Y2hlZEdpZiIsImFwcGVuZENoaWxkIiwiYXJ0aWNsZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzZWxlY0RpdiIsIlNlbGVjdGVkIiwic2VsZWNEaXZJbml0IiwicXVlcnlTZWxlY3RvckFsbCIsImoiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwiY29weSIsImNsb25lTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsIlNlbGVjdCIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsInBhcmFtIiwiTG9hZE1vcmUiLCJzZWFyY2hfaW5wIiwiR2lmX3NlYXJjaCIsImUiLCJrZXkiLCJoYW5kbGVHaWYiLCJ2YWx1ZSIsInJlbmRlciIsImRpdiIsImNsYXNzTmFtZSIsIlNlYXJjaCIsImlucHV0IiwiR2lmX2Rpc3BsYXkiLCJpZCIsImNvbnN0cnVjdG9yIiwiR2lmIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJFZGl0IiwiRmV0Y2hMaXN0IiwiQ2F0RmV0Y2giLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImZldGNoR2lmIiwiU2VsZWN0U3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/components/controlbarcomps/GifFetching.js\n"));

/***/ })

});