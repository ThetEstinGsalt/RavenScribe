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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/Editing */ \"./store/actions/Editing.js\");\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/writing.module.css */ \"./styles/writing.module.css\");\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nclass ImagesFet extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    componentDidUpdate() {\n        //    let imageDiv=document.getElementById(\"Gif_div\")\n        // console.log(this.props.Fetched)\n        // imageDiv.onscroll=function(){\n        //     if ((imageDiv.offsetHeight + imageDiv.scrollTop) >= imageDiv.scrollHeight) {\n        //     for(let i=imageDiv.childElementCount;i<i+4;i++){\n        //         // let image=document.createElement(\"img\")\n        //         let image=document.createElement(\"img\")\n        //         image.setAttribute(\"src\",this.state.Fetched.data[`${i}`].images.original.url)\n        //         image.setAttribute(\"class\",`${styles.FetchedGif}`)\n        //         imageDiv.appendChild(image)\n        //     }\n        //     }\n        // }\n        // && this.state.index==this.state.j\n        if (this.props.Type == \"G\") {\n            let imageDiv = document.getElementById(\"Gif_div\");\n            imageDiv.innerHTML = \"\";\n            for(let i = 0; i < 4; i++){\n                // let image=document.createElement(\"img\")\n                let image = document.createElement(\"img\");\n                image.setAttribute(\"src\", this.props.Fetched.data[\"\".concat(i)].images.original.url);\n                image.setAttribute(\"class\", \"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().FetchedGif)));\n                imageDiv.appendChild(image);\n            }\n            let article = document.getElementsByClassName(\"article\")[0];\n            let selecDiv = this.props.Selected;\n            let selecDivInit = document.getElementsByClassName(\"blog-content\")[0];\n            let images = document.querySelectorAll(\".\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().FetchedGif)));\n            for(let j = 0; j < images.length; j++){\n                images[j].addEventListener(\"click\", ()=>{\n                    let copy = images[j].cloneNode(true);\n                    copy.removeAttribute(\"class\");\n                    copy.setAttribute(\"class\", \"articleImage\");\n                    this.props.Select(copy);\n                });\n            }\n        // let incj=this.state.j+1\n        // this.setState({\n        //     j:incj\n        // })\n        }\n    }\n    componentDidMount() {\n        let imageDiv = document.getElementById(\"Gif_div\");\n        console.log(this.props.Fetched);\n        function loadMore(imageDiv, thisprops) {\n            if (imageDiv.offsetHeight + imageDiv.scrollTop >= imageDiv.scrollHeight) {\n                for(let i = imageDiv.childElementCount; i < i + 4; i++){\n                    // let image=document.createElement(\"img\")\n                    let image = document.createElement(\"img\");\n                    image.setAttribute(\"src\", thisprops.data[\"\".concat(i)].images.original.url);\n                    image.setAttribute(\"class\", \"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().FetchedGif)));\n                    imageDiv.appendChild(image);\n                }\n            }\n        }\n        imageDiv.onscroll = loadMore(imageDiv, this.props.Fetched);\n        let search_inp = document.getElementsByClassName(\"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Gif_search)))[0];\n        search_inp.addEventListener(\"keydown\", (e)=>{\n            if (e.key == \"Enter\") {\n                this.handleGif(search_inp.value);\n            }\n        });\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"HolderGif\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Search),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Gif_search)\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                            lineNumber: 159,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                        lineNumber: 157,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Gif_display),\n                        id: \"Gif_div\"\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                        lineNumber: 164,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                lineNumber: 156,\n                columnNumber: 13\n            }, this)\n        }, void 0, false);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            Fetched: null\n        };\n        this.Select = (div)=>{\n            this.props.Select(div);\n        };\n        this.handleGif = (key)=>{\n            this.props.Gif(key);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        Fetched: state.Edit.FetchList,\n        Selected: state.Edit.Selected,\n        Type: state.Edit.CatFetch\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Gif: (key)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__.fetchGif(key)),\n        Select: (div)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__.SelectSuccess(div))\n    };\n};\n// export default Writing\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(ImagesFet));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvY29tcG9uZW50cy9jb250cm9sYmFyY29tcHMvR2lmRmV0Y2hpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDSDtBQUNtQjtBQUNGO0FBQ3hCO0FBQ0g7QUFDRjtBQUUxQixNQUFNUSxrQkFBa0JQLDRDQUFTQTtJQWlCN0JRLHFCQUFvQjtRQUNoQixxREFBcUQ7UUFDckQsa0NBQWtDO1FBRWxDLGdDQUFnQztRQUVoQyxtRkFBbUY7UUFHbkYsdURBQXVEO1FBQ3ZELHFEQUFxRDtRQUNyRCxrREFBa0Q7UUFDbEQsd0ZBQXdGO1FBQ3hGLDZEQUE2RDtRQUM3RCxzQ0FBc0M7UUFDdEMsUUFBUTtRQUtSLFFBQVE7UUFDUixJQUFJO1FBR0osb0NBQW9DO1FBQ3BDLElBQUcsSUFBSSxDQUFDQyxNQUFNQyxRQUFNLEtBQUs7WUFFckIsSUFBSUMsV0FBU0MsU0FBU0MsZUFBZTtZQUNyQ0YsU0FBU0csWUFBVTtZQUduQixJQUFJLElBQUlDLElBQUUsR0FBRUEsSUFBRSxHQUFFQSxJQUFJO2dCQUNoQiwwQ0FBMEM7Z0JBQzFDLElBQUlDLFFBQU1KLFNBQVNLLGNBQWM7Z0JBQ2pDRCxNQUFNRSxhQUFhLE9BQU0sSUFBSSxDQUFDVCxNQUFNVSxRQUFRQyxJQUFJLENBQUMsR0FBSyxPQUFGTCxHQUFJLENBQUNNLE9BQU9DLFNBQVNDO2dCQUN6RVAsTUFBTUUsYUFBYSxTQUFRLEdBQXFCLE9BQWxCZiw4RUFBaUJxQjtnQkFDL0NiLFNBQVNjLFlBQVlUO1lBQ3pCO1lBR0EsSUFBSVUsVUFBUWQsU0FBU2UsdUJBQXVCLFVBQVUsQ0FBQyxFQUFFO1lBQ3pELElBQUlDLFdBQVMsSUFBSSxDQUFDbkIsTUFBTW9CO1lBQ3hCLElBQUlDLGVBQWFsQixTQUFTZSx1QkFBdUIsZUFBZSxDQUFDLEVBQUU7WUFHbkUsSUFBSU4sU0FBT1QsU0FBU21CLGlCQUFpQixJQUFzQixPQUFsQjVCLDhFQUFpQnFCO1lBQzFELElBQUksSUFBSVEsSUFBRSxHQUFFQSxJQUFFWCxPQUFPWSxRQUFPRCxJQUFJO2dCQUM1QlgsTUFBTSxDQUFDVyxFQUFFLENBQUNFLGlCQUFpQixTQUFRO29CQUMvQixJQUFJQyxPQUFLZCxNQUFNLENBQUNXLEVBQUUsQ0FBQ0ksVUFBVTtvQkFDN0JELEtBQUtFLGdCQUFnQjtvQkFDckJGLEtBQUtqQixhQUFhLFNBQVE7b0JBQzFCLElBQUksQ0FBQ1QsTUFBTTZCLE9BQU9IO2dCQUl0QjtZQUNKO1FBT0EsMEJBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsS0FBSztRQUlUO0lBT0o7SUFDQUksb0JBQW1CO1FBRWYsSUFBSTVCLFdBQVNDLFNBQVNDLGVBQWU7UUFDckMyQixRQUFRQyxJQUFJLElBQUksQ0FBQ2hDLE1BQU1VO1FBRXZCLFNBQVN1QixTQUFTL0IsUUFBUSxFQUFDZ0MsU0FBUztZQUNoQyxJQUFJLFNBQVVDLGVBQWVqQyxTQUFTa0MsYUFBY2xDLFNBQVNtQyxjQUFjO2dCQUd2RSxJQUFJLElBQUkvQixJQUFFSixTQUFTb0MsbUJBQWtCaEMsSUFBRUEsSUFBRSxHQUFFQSxJQUFJO29CQUMzQywwQ0FBMEM7b0JBQzFDLElBQUlDLFFBQU1KLFNBQVNLLGNBQWM7b0JBQ2pDRCxNQUFNRSxhQUFhLE9BQU15QixVQUFVdkIsSUFBSSxDQUFDLEdBQUssT0FBRkwsR0FBSSxDQUFDTSxPQUFPQyxTQUFTQztvQkFDaEVQLE1BQU1FLGFBQWEsU0FBUSxHQUFxQixPQUFsQmYsOEVBQWlCcUI7b0JBQy9DYixTQUFTYyxZQUFZVDtnQkFDekI7WUFLQTtRQUNSO1FBRUFMLFNBQVNxQyxXQUFTTixTQUFTL0IsVUFBUyxJQUFJLENBQUNGLE1BQU1VO1FBUy9DLElBQUk4QixhQUFXckMsU0FBU2UsdUJBQXVCLEdBQXFCLE9BQWxCeEIsOEVBQWlCK0MsRUFBRyxDQUFDLEVBQUU7UUFDekVELFdBQVdmLGlCQUFpQixXQUFVLENBQUNpQjtZQUNuQyxJQUFHQSxFQUFFQyxPQUFLLFNBQVE7Z0JBR2QsSUFBSSxDQUFDQyxVQUFVSixXQUFXSztZQUc5QjtRQUNKO0lBR0o7SUFFQUMsU0FBUztRQUNMLHFCQUNJO3NCQUlBLDRFQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFXdEQsMEVBQWF1RDtrQ0FFekIsNEVBQUNDOzRCQUFNRixXQUFXdEQsOEVBQWlCK0M7Ozs7Ozs7Ozs7O2tDQUt2Qyw4REFBQ007d0JBQUlDLFdBQVd0RCwrRUFBa0J5RDt3QkFBRUMsSUFBRzs7Ozs7Ozs7Ozs7OztJQWUvQztJQXpLQUMsWUFBWXJELEtBQUssQ0FBQztRQUNkLEtBQUssQ0FBQ0E7YUFVVnNELFFBQU07WUFDRjVDLFNBQVE7UUFFWjtRQVpJLElBQUksQ0FBQ21CLFNBQU8sQ0FBQ2tCO1lBQ1QsSUFBSSxDQUFDL0MsTUFBTTZCLE9BQU9rQjtRQUd0QjtRQUNBLElBQUksQ0FBQ0gsWUFBVSxDQUFDRDtZQUNaLElBQUksQ0FBQzNDLE1BQU11RCxJQUFJWjtRQUNuQjtJQUNKO0FBZ0tKO0FBS0EsTUFBTWEsa0JBQWtCLENBQUNGO0lBQ3JCLE9BQU87UUFDSDVDLFNBQVM0QyxNQUFNRyxLQUFLQztRQUNwQnRDLFVBQVNrQyxNQUFNRyxLQUFLckM7UUFDcEJuQixNQUFLcUQsTUFBTUcsS0FBS0U7SUFLcEI7QUFDSjtBQUVBLE1BQU1DLHFCQUFxQixDQUFDQztJQUN4QixPQUFPO1FBQ0hOLEtBQUssQ0FBQ1osTUFBUWtCLFNBQVNwRSw0REFBZ0JxRSxDQUFFbkI7UUFDekNkLFFBQU8sQ0FBQ2tCLE1BQU1jLFNBQVNwRSxpRUFBcUJzRSxDQUFDaEI7SUFHakQ7QUFDSjtBQUVBLHlCQUF5QjtBQUN6QiwrREFBZ0J2RCxvREFBT0EsQ0FBQ2dFLGlCQUFnQkksb0JBQW9COUQsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wdWJsaWMvY29tcG9uZW50cy9jb250cm9sYmFyY29tcHMvR2lmRmV0Y2hpbmcuanM/ODllOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9FZGl0aW5nJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvd3JpdGluZy5tb2R1bGUuY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgSW1hZ2VzRmV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5TZWxlY3Q9KGRpdik9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuU2VsZWN0KGRpdilcbiAgICAgICAgXG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUdpZj0oa2V5KT0+e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5HaWYoa2V5KVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRlPXtcbiAgICAgICAgRmV0Y2hlZDpudWxsLFxuIFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xuICAgICAgICAvLyAgICBsZXQgaW1hZ2VEaXY9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHaWZfZGl2XCIpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuRmV0Y2hlZClcblxuICAgICAgICAvLyBpbWFnZURpdi5vbnNjcm9sbD1mdW5jdGlvbigpe1xuXG4gICAgICAgIC8vICAgICBpZiAoKGltYWdlRGl2Lm9mZnNldEhlaWdodCArIGltYWdlRGl2LnNjcm9sbFRvcCkgPj0gaW1hZ2VEaXYuc2Nyb2xsSGVpZ2h0KSB7XG5cblxuICAgICAgICAvLyAgICAgZm9yKGxldCBpPWltYWdlRGl2LmNoaWxkRWxlbWVudENvdW50O2k8aSs0O2krKyl7XG4gICAgICAgIC8vICAgICAgICAgLy8gbGV0IGltYWdlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgLy8gICAgICAgICBsZXQgaW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICAvLyAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLHRoaXMuc3RhdGUuRmV0Y2hlZC5kYXRhW2Ake2l9YF0uaW1hZ2VzLm9yaWdpbmFsLnVybClcbiAgICAgICAgLy8gICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGAke3N0eWxlcy5GZXRjaGVkR2lmfWApXG4gICAgICAgIC8vICAgICAgICAgaW1hZ2VEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgICAgIC8vICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuXG4gICAgICAgIC8vICYmIHRoaXMuc3RhdGUuaW5kZXg9PXRoaXMuc3RhdGUualxuICAgICAgICBpZih0aGlzLnByb3BzLlR5cGU9PVwiR1wiICl7XG5cbiAgICAgICAgICAgIGxldCBpbWFnZURpdj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdpZl9kaXZcIilcbiAgICAgICAgICAgIGltYWdlRGl2LmlubmVySFRNTD1cIlwiXG5cblxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTw0O2krKyl7XG4gICAgICAgICAgICAgICAgLy8gbGV0IGltYWdlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLHRoaXMucHJvcHMuRmV0Y2hlZC5kYXRhW2Ake2l9YF0uaW1hZ2VzLm9yaWdpbmFsLnVybClcbiAgICAgICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGAke3N0eWxlcy5GZXRjaGVkR2lmfWApXG4gICAgICAgICAgICAgICAgaW1hZ2VEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgICAgICAgICB9XG5cbiAgICBcbiAgICAgICAgICAgIGxldCBhcnRpY2xlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdXG4gICAgICAgICAgICBsZXQgc2VsZWNEaXY9dGhpcy5wcm9wcy5TZWxlY3RlZFxuICAgICAgICAgICAgbGV0IHNlbGVjRGl2SW5pdD1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxvZy1jb250ZW50XCIpWzBdXG4gICAgXG4gICAgXG4gICAgICAgICAgICBsZXQgaW1hZ2VzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3N0eWxlcy5GZXRjaGVkR2lmfWApXG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPGltYWdlcy5sZW5ndGg7aisrKXtcbiAgICAgICAgICAgICAgICBpbWFnZXNbal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3B5PWltYWdlc1tqXS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgY29weS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgICAgICAgICAgICAgICAgICBjb3B5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJhcnRpY2xlSW1hZ2VcIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5TZWxlY3QoY29weSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgXG4gIFxuICAgIFxuICAgICAgICAgIFxuXG4gICAgICAgICAgICAvLyBsZXQgaW5jaj10aGlzLnN0YXRlLmorMVxuICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAvLyAgICAgajppbmNqXG4gICAgICAgICAgICAvLyB9KVxuXG4gICAgICAgICAgICBcblxuICAgICAgICB9XG4gICAgIFxuXG5cblxuICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpeyAgICBcblxuICAgICAgICBsZXQgaW1hZ2VEaXY9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHaWZfZGl2XCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuRmV0Y2hlZClcblxuICAgICAgICBmdW5jdGlvbiBsb2FkTW9yZShpbWFnZURpdix0aGlzcHJvcHMpe1xuICAgICAgICAgICAgaWYgKChpbWFnZURpdi5vZmZzZXRIZWlnaHQgKyBpbWFnZURpdi5zY3JvbGxUb3ApID49IGltYWdlRGl2LnNjcm9sbEhlaWdodCkge1xuXG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9aW1hZ2VEaXYuY2hpbGRFbGVtZW50Q291bnQ7aTxpKzQ7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGltYWdlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsdGhpc3Byb3BzLmRhdGFbYCR7aX1gXS5pbWFnZXMub3JpZ2luYWwudXJsKVxuICAgICAgICAgICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGAke3N0eWxlcy5GZXRjaGVkR2lmfWApXG4gICAgICAgICAgICAgICAgICAgIGltYWdlRGl2LmFwcGVuZENoaWxkKGltYWdlKVxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2VEaXYub25zY3JvbGw9bG9hZE1vcmUoaW1hZ2VEaXYsdGhpcy5wcm9wcy5GZXRjaGVkKVxuXG5cblxuICAgICBcblxuXG5cblxuICAgICAgICBsZXQgc2VhcmNoX2lucD1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3N0eWxlcy5HaWZfc2VhcmNofWApWzBdXG4gICAgICAgIHNlYXJjaF9pbnAuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwoZSk9PntcbiAgICAgICAgICAgIGlmKGUua2V5PT1cIkVudGVyXCIpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVHaWYoc2VhcmNoX2lucC52YWx1ZSlcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgIFxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdIb2xkZXJHaWYnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TZWFyY2h9PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5HaWZfc2VhcmNofT48L2lucHV0PlxuICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkdpZl9kaXNwbGF5fSBpZD1cIkdpZl9kaXZcIj5cbiAgIFxuICAgICAgICAgICAgICAgIFxuICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICBcblxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICBcbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIEZldGNoZWQ6IHN0YXRlLkVkaXQuRmV0Y2hMaXN0LFxuICAgICAgICBTZWxlY3RlZDpzdGF0ZS5FZGl0LlNlbGVjdGVkLFxuICAgICAgICBUeXBlOnN0YXRlLkVkaXQuQ2F0RmV0Y2gsXG5cbiAgICAgICAgLy8gaW1hZ2VzOiBzdGF0ZS5yZWR1Y2VyRWRpdC5lcnJvcixcbiAgICBcblxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgR2lmOiAoa2V5KSA9PiBkaXNwYXRjaChhY3Rpb25zLmZldGNoR2lmKCBrZXkpKSxcbiAgICAgICAgU2VsZWN0OihkaXYpPT5kaXNwYXRjaChhY3Rpb25zLlNlbGVjdFN1Y2Nlc3MoZGl2KSlcbiAgXG5cbiAgICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFdyaXRpbmdcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKEltYWdlc0ZldCkpXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiYWN0aW9ucyIsInN0eWxlcyIsIkltYWdlIiwiSGVhZCIsImF4aW9zIiwiSW1hZ2VzRmV0IiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJvcHMiLCJUeXBlIiwiaW1hZ2VEaXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiaSIsImltYWdlIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIkZldGNoZWQiLCJkYXRhIiwiaW1hZ2VzIiwib3JpZ2luYWwiLCJ1cmwiLCJGZXRjaGVkR2lmIiwiYXBwZW5kQ2hpbGQiLCJhcnRpY2xlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNlbGVjRGl2IiwiU2VsZWN0ZWQiLCJzZWxlY0RpdkluaXQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaiIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb3B5IiwiY2xvbmVOb2RlIiwicmVtb3ZlQXR0cmlidXRlIiwiU2VsZWN0IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zb2xlIiwibG9nIiwibG9hZE1vcmUiLCJ0aGlzcHJvcHMiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjaGlsZEVsZW1lbnRDb3VudCIsIm9uc2Nyb2xsIiwic2VhcmNoX2lucCIsIkdpZl9zZWFyY2giLCJlIiwia2V5IiwiaGFuZGxlR2lmIiwidmFsdWUiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJTZWFyY2giLCJpbnB1dCIsIkdpZl9kaXNwbGF5IiwiaWQiLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwiR2lmIiwibWFwU3RhdGVUb1Byb3BzIiwiRWRpdCIsIkZldGNoTGlzdCIsIkNhdEZldGNoIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJmZXRjaEdpZiIsIlNlbGVjdFN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/components/controlbarcomps/GifFetching.js\n"));

/***/ })

});