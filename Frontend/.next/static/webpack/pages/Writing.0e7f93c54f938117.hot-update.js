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

/***/ "./public/components/controlbarcomps/ImagesFet.js":
/*!********************************************************!*\
  !*** ./public/components/controlbarcomps/ImagesFet.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/Editing */ \"./store/actions/Editing.js\");\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/writing.module.css */ \"./styles/writing.module.css\");\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nclass GifFetching extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    componentDidUpdate() {\n        const thisprops1 = this.props;\n        if (this.props.Type == \"I\") {\n            let imageDiv = document.getElementById(\"image_div\");\n            imageDiv.innerHTML = \"\";\n            let length = this.props.Fetched.photos.length;\n            let thisprops2 = thisprops1;\n            for(let i = 0; i < length; i++){\n                // let image=document.createElement(\"img\")\n                let thisprops3 = thisprops2;\n                let image = document.createElement(\"img\");\n                image.setAttribute(\"src\", thisprops3.Fetched.photos[\"\".concat(i)].src.small);\n                image.setAttribute(\"class\", \"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().FetchedImage)));\n                image.setAttribute(\"id\", \"Image-\".concat(i));\n                imageDiv.appendChild(image);\n                image.addEventListener(\"click\", ()=>{\n                    let copy = document.createElement(\"img\");\n                    copy.setAttribute(\"src\", thisprops3.Fetched.photos[image.id.split(\"-\")[1]].src.original);\n                    copy.removeAttribute(\"class\");\n                    copy.setAttribute(\"class\", \"articleImage\");\n                    this.props.Select(copy);\n                });\n            }\n            let article = document.getElementsByClassName(\"article\")[0];\n            let selecDiv = this.props.Selected;\n            let selecDivInit = document.getElementsByClassName(\"blog-content\")[0];\n            let images = document.querySelectorAll(\".\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().FetchedGif)));\n            // for(let j=0;j<images.length;j++){\n            //     images[j].addEventListener('click',()=>{\n            //         let copy=images[j].cloneNode(true)\n            //         copy.removeAttribute(\"class\")\n            //         copy.setAttribute(\"class\",\"articleImage\")\n            //         this.props.Select(copy)\n            //     })\n            // }\n            const thisprops = this.props.Fetched;\n            console.log(thisprops);\n            const thisporps0 = this.props;\n            let index = 1;\n            const thisState = this.state;\n            const self = this;\n            imageDiv.onscroll = function() {\n                if (imageDiv.offsetHeight + imageDiv.scrollTop >= imageDiv.scrollHeight) {\n                    // let SecondVar=thisprops\n                    // let index=imageDiv.childElementCount\n                    // let limit=imageDiv.childElementCount+4\n                    // let thisprops1=thisporps0\n                    let index = thisState.Index;\n                    self.ImageFetch(thisState.Input, index);\n                    self.setState({\n                        Index: index + 1\n                    });\n                // if(limit<50){\n                //     for(let i=index;i<limit;i++){\n                //         let thisporps2=thisprops1\n                //         let ThirdVar=SecondVar\n                //         // console.log(ThirdVar.data[i].images.original.url)\n                //         let image=document.createElement(\"img\")\n                //         image.setAttribute(\"src\",ThirdVar.photos[`${i}`].src.small)\n                //         image.setAttribute(\"class\",`${styles.FetchedGif}`)\n                //         image.setAttribute(\"id\",i)\n                //         let fourthvar=ThirdVar\n                //         let thisprops3=thisporps2\n                //         image.addEventListener('click',()=>{\n                //             let copy=document.createElement(\"img\")\n                //             copy.setAttribute(\"src\",fourthvar.data[image.id].images.original.url)\n                //             copy.removeAttribute(\"class\")\n                //             copy.setAttribute(\"class\",\"articleImage\")\n                //             thisprops3.Select(copy)\n                //         })\n                //         imageDiv.appendChild(image)\n                // }\n                // }\n                // if(index==1){\n                //     const secondVar=thisprops\n                //     for(let i=imageDiv.childElementCount;i<i+4;i++){\n                //         console.log(1)\n                //         // let image=document.createElement(\"img\")\n                //         // let image=document.createElement(\"img\")\n                //         let ThirdVar=secondVar\n                //         console.log(ThirdVar.data[5].images.original.url)\n                //         // image.setAttribute(\"src\",thisprops.data[`${i}`].images.original.url)\n                //         // image.setAttribute(\"class\",`${styles.FetchedGif}`)\n                //         // imageDiv.appendChild(image)\n                //     }\n                //     index++\n                // }\n                }\n            };\n        }\n    }\n    componentDidMount() {\n        const thisState = this.state;\n        let search_inp = document.getElementsByClassName(\"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().image_search)))[0];\n        search_inp.addEventListener(\"keydown\", (e)=>{\n            if (e.key == \"Enter\") {\n                let index = thisState.Index;\n                this.ImageFetch(search_inp.value, index);\n                this.setState({\n                    Index: index + 1,\n                    Input: search_inp.value\n                });\n            }\n        });\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"HolderImg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Search),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().image_search)\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/ImagesFet.js\",\n                            lineNumber: 210,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/ImagesFet.js\",\n                        lineNumber: 208,\n                        columnNumber: 22\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Image_display),\n                        id: \"image_div\"\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/ImagesFet.js\",\n                        lineNumber: 215,\n                        columnNumber: 22\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/ImagesFet.js\",\n                lineNumber: 207,\n                columnNumber: 11\n            }, this)\n        }, void 0, false);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            Fetched: null,\n            Index: 1,\n            Input: null\n        };\n        this.Select = (div)=>{\n            this.props.Select(div);\n        };\n        this.ImageFetch = (key, page)=>{\n            this.props.Image(key, page);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        Fetched: state.Edit.FetchList,\n        Selected: state.Edit.Selected,\n        Type: state.Edit.CatFetch\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Image: (key, page)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__.fetchImage(key, page)),\n        Select: (div)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__.SelectSuccess(div))\n    };\n};\n// export default Writing\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(GifFetching));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvY29tcG9uZW50cy9jb250cm9sYmFyY29tcHMvSW1hZ2VzRmV0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0g7QUFDbUI7QUFDRjtBQUN4QjtBQUNIO0FBQ0Y7QUFFMUIsTUFBTVEsb0JBQW9CUCw0Q0FBU0E7SUFtQi9CUSxxQkFBb0I7UUFFaEIsTUFBTUMsYUFBVyxJQUFJLENBQUNDO1FBQ3RCLElBQUcsSUFBSSxDQUFDQSxNQUFNQyxRQUFNLEtBQUs7WUFDckIsSUFBSUMsV0FBU0MsU0FBU0MsZUFBZTtZQUdyQ0YsU0FBU0csWUFBVTtZQUVuQixJQUFJQyxTQUFPLElBQUksQ0FBQ04sTUFBTU8sUUFBUUMsT0FBT0Y7WUFDckMsSUFBSUcsYUFBV1Y7WUFDZixJQUFJLElBQUlXLElBQUUsR0FBRUEsSUFBRUosUUFBT0ksSUFBSTtnQkFDckIsMENBQTBDO2dCQUMxQyxJQUFJQyxhQUFXRjtnQkFDZixJQUFJRyxRQUFNVCxTQUFTVSxjQUFjO2dCQUNqQ0QsTUFBTUUsYUFBYSxPQUFNSCxXQUFXSixRQUFRQyxNQUFNLENBQUMsR0FBSyxPQUFGRSxHQUFJLENBQUNLLElBQUlDO2dCQUMvREosTUFBTUUsYUFBYSxTQUFRLEdBQXVCLE9BQXBCckIsZ0ZBQW1Cd0I7Z0JBQ2pETCxNQUFNRSxhQUFhLE1BQUssU0FBVyxPQUFGSjtnQkFDakNSLFNBQVNnQixZQUFZTjtnQkFDckJBLE1BQU1PLGlCQUFpQixTQUFRO29CQUUzQixJQUFJQyxPQUFLakIsU0FBU1UsY0FBYztvQkFFaENPLEtBQUtOLGFBQWEsT0FBTUgsV0FBV0osUUFBUUMsTUFBTSxDQUFDSSxNQUFNUyxHQUFHQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQ1AsSUFBSVE7b0JBRTlFSCxLQUFLSSxnQkFBZ0I7b0JBQ3JCSixLQUFLTixhQUFhLFNBQVE7b0JBQzFCLElBQUksQ0FBQ2QsTUFBTXlCLE9BQU9MO2dCQUl0QjtZQUNKO1lBR0EsSUFBSU0sVUFBUXZCLFNB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Z0M7UUFHdEI7UUFDQSxJQUFJLENBQUNWLGFBQVcsQ0FBQ08sS0FBSVM7WUFDakIsSUFBSSxDQUFDL0QsTUFBTU4sTUFBTTRELEtBQUlTO1FBQ3pCO0lBQ0o7QUE2Tko7QUFLQSxNQUFNQyxrQkFBa0IsQ0FBQ3hCO0lBQ3JCLE9BQU87UUFDSGpDLFNBQVNpQyxNQUFNeUIsS0FBS0M7UUFDcEJyQyxVQUFTVyxNQUFNeUIsS0FBS3BDO1FBQ3BCNUIsTUFBS3VDLE1BQU15QixLQUFLRTtJQUtwQjtBQUNKO0FBRUEsTUFBTUMscUJBQXFCLENBQUNDO0lBQ3hCLE9BQU87UUFFSDNFLE9BQU8sQ0FBQzRELEtBQUlTLE9BQVNNLFNBQVM3RSw4REFBa0I4RSxDQUFFaEIsS0FBSVM7UUFJdER0QyxRQUFPLENBQUNnQyxNQUFNWSxTQUFTN0UsaUVBQXFCK0UsQ0FBQ2Q7SUFHakQ7QUFDSjtBQUVBLHlCQUF5QjtBQUN6QiwrREFBZ0JsRSxvREFBT0EsQ0FBQ3lFLGlCQUFnQkksb0JBQW9CdkUsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wdWJsaWMvY29tcG9uZW50cy9jb250cm9sYmFyY29tcHMvSW1hZ2VzRmV0LmpzPzllYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvRWRpdGluZydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3dyaXRpbmcubW9kdWxlLmNzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIEdpZkZldGNoaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5TZWxlY3Q9KGRpdik9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuU2VsZWN0KGRpdilcbiAgICAgICAgXG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLkltYWdlRmV0Y2g9KGtleSxwYWdlKT0+e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5JbWFnZShrZXkscGFnZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZT17XG4gICAgICAgIEZldGNoZWQ6bnVsbCxcbiAgICAgICAgSW5kZXg6MSxcbiAgICAgICAgSW5wdXQ6bnVsbCxcbiBcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcblxuICAgICAgICBjb25zdCB0aGlzcHJvcHMxPXRoaXMucHJvcHNcbiAgICAgICAgaWYodGhpcy5wcm9wcy5UeXBlPT1cIklcIiApe1xuICAgICAgICAgICAgbGV0IGltYWdlRGl2PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VfZGl2XCIpXG5cblxuICAgICAgICAgICAgaW1hZ2VEaXYuaW5uZXJIVE1MPVwiXCJcblxuICAgICAgICAgICAgbGV0IGxlbmd0aD10aGlzLnByb3BzLkZldGNoZWQucGhvdG9zLmxlbmd0aFxuICAgICAgICAgICAgbGV0IHRoaXNwcm9wczI9dGhpc3Byb3BzMVxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxsZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAvLyBsZXQgaW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICAgICAgICAgIGxldCB0aGlzcHJvcHMzPXRoaXNwcm9wczJcbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLHRoaXNwcm9wczMuRmV0Y2hlZC5waG90b3NbYCR7aX1gXS5zcmMuc21hbGwpXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixgJHtzdHlsZXMuRmV0Y2hlZEltYWdlfWApXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIixgSW1hZ2UtJHtpfWApXG4gICAgICAgICAgICAgICAgaW1hZ2VEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgY29weT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb3B5LnNldEF0dHJpYnV0ZShcInNyY1wiLHRoaXNwcm9wczMuRmV0Y2hlZC5waG90b3NbaW1hZ2UuaWQuc3BsaXQoXCItXCIpWzFdXS5zcmMub3JpZ2luYWwpXG5cbiAgICAgICAgICAgICAgICAgICAgY29weS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgICAgICAgICAgICAgICAgICBjb3B5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJhcnRpY2xlSW1hZ2VcIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5TZWxlY3QoY29weSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgXG4gICAgICAgICAgICBsZXQgYXJ0aWNsZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXJ0aWNsZVwiKVswXVxuICAgICAgICAgICAgbGV0IHNlbGVjRGl2PXRoaXMucHJvcHMuU2VsZWN0ZWRcbiAgICAgICAgICAgIGxldCBzZWxlY0RpdkluaXQ9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJsb2ctY29udGVudFwiKVswXVxuICAgIFxuICAgIFxuICAgICAgICAgICAgbGV0IGltYWdlcz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtzdHlsZXMuRmV0Y2hlZEdpZn1gKVxuICAgICAgICAgICAgLy8gZm9yKGxldCBqPTA7ajxpbWFnZXMubGVuZ3RoO2orKyl7XG4gICAgICAgICAgICAvLyAgICAgaW1hZ2VzW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgLy8gICAgICAgICBsZXQgY29weT1pbWFnZXNbal0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvcHkucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbiAgICAgICAgICAgIC8vICAgICAgICAgY29weS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiYXJ0aWNsZUltYWdlXCIpXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMucHJvcHMuU2VsZWN0KGNvcHkpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgICAgIC8vIH1cblxuXG5cbiAgICAgICAgICAgIGNvbnN0IHRoaXNwcm9wcz10aGlzLnByb3BzLkZldGNoZWRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXNwcm9wcylcbiAgICAgICAgICAgIGNvbnN0IHRoaXNwb3JwczA9dGhpcy5wcm9wc1xuICAgICAgICAgICAgbGV0IGluZGV4PTFcbiAgICAgICAgICAgIGNvbnN0IHRoaXNTdGF0ZT10aGlzLnN0YXRlXG4gICAgICAgICAgICBjb25zdCBzZWxmID10aGlzXG4gICAgICAgICAgICBpbWFnZURpdi5vbnNjcm9sbD1mdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmICgoaW1hZ2VEaXYub2Zmc2V0SGVpZ2h0ICsgaW1hZ2VEaXYuc2Nyb2xsVG9wKSA+PSBpbWFnZURpdi5zY3JvbGxIZWlnaHQpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgU2Vjb25kVmFyPXRoaXNwcm9wc1xuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgaW5kZXg9aW1hZ2VEaXYuY2hpbGRFbGVtZW50Q291bnRcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGxpbWl0PWltYWdlRGl2LmNoaWxkRWxlbWVudENvdW50KzRcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHRoaXNwcm9wczE9dGhpc3BvcnBzMFxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXg9dGhpc1N0YXRlLkluZGV4XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuSW1hZ2VGZXRjaCh0aGlzU3RhdGUuSW5wdXQsaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgSW5kZXg6aW5kZXgrMSxcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYobGltaXQ8NTApe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZm9yKGxldCBpPWluZGV4O2k8bGltaXQ7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgdGhpc3BvcnBzMj10aGlzcHJvcHMxXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbGV0IFRoaXJkVmFyPVNlY29uZFZhclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKFRoaXJkVmFyLmRhdGFbaV0uaW1hZ2VzLm9yaWdpbmFsLnVybClcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgaW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLFRoaXJkVmFyLnBob3Rvc1tgJHtpfWBdLnNyYy5zbWFsbClcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGAke3N0eWxlcy5GZXRjaGVkR2lmfWApXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIixpKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgZm91cnRodmFyPVRoaXJkVmFyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbGV0IHRoaXNwcm9wczM9dGhpc3BvcnBzMlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsZXQgY29weT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvcHkuc2V0QXR0cmlidXRlKFwic3JjXCIsZm91cnRodmFyLmRhdGFbaW1hZ2UuaWRdLmltYWdlcy5vcmlnaW5hbC51cmwpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29weS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb3B5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJhcnRpY2xlSW1hZ2VcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpc3Byb3BzMy5TZWxlY3QoY29weSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGltYWdlRGl2LmFwcGVuZENoaWxkKGltYWdlKVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYoaW5kZXg9PTEpe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3Qgc2Vjb25kVmFyPXRoaXNwcm9wc1xuICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZm9yKGxldCBpPWltYWdlRGl2LmNoaWxkRWxlbWVudENvdW50O2k8aSs0O2krKyl7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coMSlcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBsZXQgaW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIGxldCBpbWFnZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbGV0IFRoaXJkVmFyPXNlY29uZFZhclxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFRoaXJkVmFyLmRhdGFbNV0uaW1hZ2VzLm9yaWdpbmFsLnVybClcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIix0aGlzcHJvcHMuZGF0YVtgJHtpfWBdLmltYWdlcy5vcmlnaW5hbC51cmwpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gaW1hZ2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixgJHtzdHlsZXMuRmV0Y2hlZEdpZn1gKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIGltYWdlRGl2LmFwcGVuZENoaWxkKGltYWdlKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaW5kZXgrK1xuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgXG4gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuXG4gICAgICAgICAgICBcblxuICAgICAgICB9XG4gICAgIFxuXG5cblxuICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpeyAgICBcbiBcbiAgICAgXG5cblxuXG4gICAgICAgIGNvbnN0IHRoaXNTdGF0ZT10aGlzLnN0YXRlXG4gICAgICAgIGxldCBzZWFyY2hfaW5wPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c3R5bGVzLmltYWdlX3NlYXJjaH1gKVswXVxuICAgICAgICBzZWFyY2hfaW5wLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsKGUpPT57XG4gICAgICAgICAgICBpZihlLmtleT09XCJFbnRlclwiKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBpbmRleD10aGlzU3RhdGUuSW5kZXhcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLkltYWdlRmV0Y2goc2VhcmNoX2lucC52YWx1ZSxpbmRleClcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgSW5kZXg6aW5kZXgrMSxcbiAgICAgICAgICAgICAgICAgICAgSW5wdXQ6c2VhcmNoX2lucC52YWx1ZVxuICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG5cbiAgICAgICAgIFxuXG4gICAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nSG9sZGVySW1nJz5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VhcmNofT5cbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9zZWFyY2h9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2VfZGlzcGxheX0gaWQ9XCJpbWFnZV9kaXZcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgIFxuXG4gICAgICAgICAgICBcbiAgICAgICAgXG4gICAgXG4gICAgICAgICAgICBcbiAgICAgICAgIFxuXG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIFxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgRmV0Y2hlZDogc3RhdGUuRWRpdC5GZXRjaExpc3QsXG4gICAgICAgIFNlbGVjdGVkOnN0YXRlLkVkaXQuU2VsZWN0ZWQsXG4gICAgICAgIFR5cGU6c3RhdGUuRWRpdC5DYXRGZXRjaCxcblxuICAgICAgICAvLyBpbWFnZXM6IHN0YXRlLnJlZHVjZXJFZGl0LmVycm9yLFxuICAgIFxuXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuXG4gICAgICAgIEltYWdlOiAoa2V5LHBhZ2UpID0+IGRpc3BhdGNoKGFjdGlvbnMuZmV0Y2hJbWFnZSgga2V5LHBhZ2UpKSxcblxuXG5cbiAgICAgICAgU2VsZWN0OihkaXYpPT5kaXNwYXRjaChhY3Rpb25zLlNlbGVjdFN1Y2Nlc3MoZGl2KSlcbiAgXG5cbiAgICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFdyaXRpbmdcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKEdpZkZldGNoaW5nKSlcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuLy8gaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL0VkaXRpbmcnXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy93cml0aW5nLm1vZHVsZS5jc3MnXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG4vLyBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vLyBjbGFzcyBJbWFnZXNGZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuLy8gICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbi8vICAgICAgICAgc3VwZXIocHJvcHMpO1xuLy8gICAgICAgICB0aGlzLmhhbmRsZWZldGNoPShrZXkscGFnZSk9Pntcbi8vICAgICAgICAgICAgIHRoaXMucHJvcHMuSW1hZ2Uoa2V5LHBhZ2UpXG4gICAgICAgIFxuXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgdGhpcy5oYW5kbGVHaWY9KGtleSk9PntcblxuLy8gICAgICAgICAgICAgdGhpcy5wcm9wcy5HaWYoa2V5KVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIHN0YXRlPXtcbi8vICAgICAgICAgZmV0Y2hJbmRleDoxLFxuLy8gICAgIH1cbi8vICAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcbi8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcylcblxuLy8gICAgICAgICBsZXQgaW1hZ2VEaXY9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZV9kaXZcIilcbi8vICAgICAgICAgbGV0IGxlbmd0aD10aGlzLnByb3BzLkZldGNoZWQucGhvdG9zLmxlbmd0aFxuICAgICAgICBcblxuLy8gICAgICAgICBjb25zdCB0aGlzRmV0Y2g9dGhpcy5wcm9wcy5GZXRjaGVkXG4vLyAgICAgICAgIGNvbnN0IHRoaXNwcm9wPXRoaXMucHJvcHNcbi8vICAgICAgICAgaWYoaW1hZ2VEaXYuY2hpbGRFbGVtZW50Q291bnQhPT1sZW5ndGgpe1xuLy8gICAgICAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnByb3BzLkZldGNoZWQucGhvdG9zLmxlbmd0aDtpKyspe1xuLy8gICAgICAgICAgICAgICAgIGxldCB0aGlzRmV0Y2hkMj10aGlzRmV0Y2hcbi8vICAgICAgICAgICAgICAgICBsZXQgdGhpc3Byb3BkMj10aGlzcHJvcFxuLy8gICAgICAgICAgICAgICAgIC8vIGxldCBpbWFnZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4vLyAgICAgICAgICAgICAgICAgbGV0IGltYWdlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbi8vICAgICAgICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIix0aGlzRmV0Y2hkMi5waG90b3NbYCR7aX1gXS5zcmMuc21hbGwpXG4vLyAgICAgICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixgJHtzdHlsZXMuRmV0Y2hlZEltYWdlfWApXG4vLyAgICAgICAgICAgICAgICAgaW1hZ2UuaWQ9aVxuLy8gICAgICAgICAgICAgICAgIGltYWdlRGl2LmFwcGVuZENoaWxkKGltYWdlKVxuICAgICAgICAgICAgICAgIFxuXG5cbi8vICAgICAgICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9Pntcbi8vICAgICAgICAgICAgICAgICAgICAgbGV0IHRoaXNGZXRjaGQzPXRoaXNGZXRjaGQyXG4vLyAgICAgICAgICAgICAgICAgICAgIGxldCB0aGlzcG9ycGQzPXRoaXNwcm9wZDJcblxuLy8gICAgICAgICAgICAgICAgICAgICBsZXQgY29weT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvcHkuc2V0QXR0cmlidXRlKFwic3JjXCIsdGhpc0ZldGNoZDMucGhvdG9zW2ltYWdlLmlkXS5zcmMub3JpZ2luYWwpXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvcHkucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gY29weS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiYXJ0aWNsZUltYWdlXCIpXG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXNwb3JwZDMuU2VsZWN0KGNvcHkpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgfSlcblxuXG4vLyAgICAgICAgICAgICB9XG4gICAgXG4vLyAgICAgICAgICAgICBsZXQgc2VsZWNEaXZJbml0PWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9nLWNvbnRlbnRcIilbMF1cbi8vICAgICAgICAgICAgIGxldCBzZWxlY0Rpdj10aGlzLnByb3BzLlNlbGVjdGVkXG5cbi8vICAgICAgICAgICAgIGxldCBpbWFnZXM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNpbWFnZV9kaXYgaW1nXCIpXG4vLyAgICAgICAgICAgICAvLyBmb3IobGV0IGo9MDtqPGltYWdlcy5sZW5ndGg7aisrKXtcbi8vICAgICAgICAgICAgIC8vICAgICBpbWFnZXNbal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4vLyAgICAgICAgICAgICAvLyAgICAgICAgIC8vIGltYWdlc1tqXS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuLy8gICAgICAgICAgICAgLy8gICAgICAgICBsZXQgY29weT1pbWFnZXNbal0uY2xvbmVOb2RlKHRydWUpXG4vLyAgICAgICAgICAgICAvLyAgICAgICAgIGNvcHkucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcbi8vICAgICAgICAgICAgIC8vICAgICAgICAgY29weS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiYXJ0aWNsZS10aHVtYi1pbWdcIilcbi8vICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coY29weSlcbi8vICAgICAgICAgICAgIC8vICAgICAgICAgdHJ5e1xuLy8gICAgICAgICAgICAgLy8gICAgICAgICAgICAgc2VsZWNEaXYuYXBwZW5kQ2hpbGQoY29weSlcbiAgICBcbiAgICBcbi8vICAgICAgICAgICAgIC8vICAgICAgICAgfVxuLy8gICAgICAgICAgICAgLy8gICAgICAgICBjYXRjaChlKXtcbi8vICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNlbGVjRGl2SW5pdC5hcHBlbmRDaGlsZChjb3B5KVxuLy8gICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgLy8gICAgIH0pXG4vLyAgICAgICAgICAgICAvLyB9XG5cbi8vICAgICAgICAgfVxuICAgICBcbiAgICAgIFxuICAgIFxuLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLkZldGNoZWQpXG5cbiAgICAgICAgXG4vLyAgICAgfVxuLy8gICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICBcblxuLy8gICAgICAgICBsZXQgc2VhcmNoX2lucD1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3N0eWxlcy5pbWFnZV9zZWFyY2h9YClbMF1cbi8vICAgICAgICAgc2VhcmNoX2lucC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLChlKT0+e1xuLy8gICAgICAgICAgICAgaWYoZS5rZXk9PVwiRW50ZXJcIil7XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVmZXRjaChzZWFyY2hfaW5wLnZhbHVlLDEpXG5cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSlcbiAgICAgICAgXG4vLyAgICAgfVxuICAgIFxuLy8gICAgIHJlbmRlcigpIHtcbi8vICAgICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgICAgIDw+XG4gICAgICAgICBcblxuICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nSG9sZGVySW1nJz5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VhcmNofT5cbiAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2Vfc2VhcmNofT48L2lucHV0PlxuICAgIFxuICAgICAgICAgICBcbi8vICAgICAgICAgICAgIDwvZGl2PlxuXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkltYWdlX2Rpc3BsYXl9IGlkPVwiaW1hZ2VfZGl2XCI+XG4gICBcbiAgICAgICAgICAgICAgICBcbiAgICAgXG4vLyAgICAgICAgICAgICA8L2Rpdj5cblxuXG4vLyAgICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgXG5cbi8vICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgXG4vLyAgICAgICAgICk7XG4vLyAgICAgfVxuLy8gfVxuXG5cblxuXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBGZXRjaGVkOiBzdGF0ZS5FZGl0LkZldGNoTGlzdCxcbi8vICAgICAgICAgU2VsZWN0ZWQ6c3RhdGUuRWRpdC5TZWxlY3RlZFxuLy8gICAgICAgICAvLyBpbWFnZXM6IHN0YXRlLnJlZHVjZXJFZGl0LmVycm9yLFxuICAgIFxuXG4vLyAgICAgfVxuLy8gfVxuXG4vLyBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBJbWFnZTogKGtleSxwYWdlKSA9PiBkaXNwYXRjaChhY3Rpb25zLmZldGNoSW1hZ2UoIGtleSxwYWdlKSksXG4gICAgIFxuLy8gICAgICAgICBTZWxlY3Q6KGRpdik9PmRpc3BhdGNoKGFjdGlvbnMuU2VsZWN0U3VjY2VzcyhkaXYpKVxuXG4gIFxuXG4vLyAgICAgfVxuLy8gfVxuXG4vLyAvLyBleHBvcnQgZGVmYXVsdCBXcml0aW5nXG4vLyBleHBvcnQgZGVmYXVsdCAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShJbWFnZXNGZXQpKVxuXG5cblxuXG5cblxuLy8gaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsdGhpc0ZldGNoZDIucGhvdG9zW2Ake2l9YF0uc3JjLnNtYWxsKVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsImFjdGlvbnMiLCJzdHlsZXMiLCJJbWFnZSIsIkhlYWQiLCJheGlvcyIsIkdpZkZldGNoaW5nIiwiY29tcG9uZW50RGlkVXBkYXRlIiwidGhpc3Byb3BzMSIsInByb3BzIiwiVHlwZSIsImltYWdlRGl2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImxlbmd0aCIsIkZldGNoZWQiLCJwaG90b3MiLCJ0aGlzcHJvcHMyIiwiaSIsInRoaXNwcm9wczMiLCJpbWFnZSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzcmMiLCJzbWFsbCIsIkZldGNoZWRJbWFnZSIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvcHkiLCJpZCIsInNwbGl0Iiwib3JpZ2luYWwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJTZWxlY3QiLCJhcnRpY2xlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNlbGVjRGl2IiwiU2VsZWN0ZWQiLCJzZWxlY0RpdkluaXQiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiRmV0Y2hlZEdpZiIsInRoaXNwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ0aGlzcG9ycHMwIiwiaW5kZXgiLCJ0aGlzU3RhdGUiLCJzdGF0ZSIsInNlbGYiLCJvbnNjcm9sbCIsIm9mZnNldEhlaWdodCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsIkluZGV4IiwiSW1hZ2VGZXRjaCIsIklucHV0Iiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsInNlYXJjaF9pbnAiLCJpbWFnZV9zZWFyY2giLCJlIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJTZWFyY2giLCJpbnB1dCIsIkltYWdlX2Rpc3BsYXkiLCJjb25zdHJ1Y3RvciIsInBhZ2UiLCJtYXBTdGF0ZVRvUHJvcHMiLCJFZGl0IiwiRmV0Y2hMaXN0IiwiQ2F0RmV0Y2giLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImZldGNoSW1hZ2UiLCJTZWxlY3RTdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/components/controlbarcomps/ImagesFet.js\n"));

/***/ })

});