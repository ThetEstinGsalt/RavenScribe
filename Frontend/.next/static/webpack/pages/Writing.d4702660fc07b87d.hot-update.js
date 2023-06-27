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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/Editing */ \"./store/actions/Editing.js\");\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/writing.module.css */ \"./styles/writing.module.css\");\n/* harmony import */ var _styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nclass ImagesFet extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    componentDidUpdate() {\n        if (this.props.Type == \"G\") {\n            let imageDiv = document.getElementById(\"Gif_div\");\n            imageDiv.innerHTML = \"\";\n            for(let i = 0; i < 4; i++){\n                // let image=document.createElement(\"img\")\n                let image = document.createElement(\"img\");\n                image.setAttribute(\"src\", this.props.Fetched.data[\"\".concat(i)].images.original.url);\n                image.setAttribute(\"class\", \"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().FetchedGif)));\n                imageDiv.appendChild(image);\n                image.addEventListener(\"click\", ()=>{\n                    let copy = image.cloneNode(true);\n                    copy.removeAttribute(\"class\");\n                    copy.setAttribute(\"class\", \"articleImage\");\n                    this.props.Select(copy);\n                });\n            }\n            let article = document.getElementsByClassName(\"article\")[0];\n            let selecDiv = this.props.Selected;\n            let selecDivInit = document.getElementsByClassName(\"blog-content\")[0];\n            let images = document.querySelectorAll(\".\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().FetchedGif)));\n            // for(let j=0;j<images.length;j++){\n            //     images[j].addEventListener('click',()=>{\n            //         let copy=images[j].cloneNode(true)\n            //         copy.removeAttribute(\"class\")\n            //         copy.setAttribute(\"class\",\"articleImage\")\n            //         this.props.Select(copy)\n            //     })\n            // }\n            const thisprops = this.props.Fetched;\n            let index = 1;\n            imageDiv.onscroll = function() {\n                if (imageDiv.offsetHeight + imageDiv.scrollTop >= imageDiv.scrollHeight) {\n                    let SecondVar = thisprops;\n                    let index = imageDiv.childElementCount;\n                    let limit = imageDiv.childElementCount + 4;\n                    const thisprops1 = this.props;\n                    for(let i = index; i < limit; i++){\n                        let thisporps2 = thisprops1;\n                        let ThirdVar = SecondVar;\n                        // console.log(ThirdVar.data[i].images.original.url)\n                        let image = document.createElement(\"img\");\n                        image.setAttribute(\"src\", ThirdVar.data[\"\".concat(i)].images.original.url);\n                        image.setAttribute(\"class\", \"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().FetchedGif)));\n                        image.addEventListener(\"click\", ()=>{\n                            let copy = image.cloneNode(true);\n                            copy.removeAttribute(\"class\");\n                            copy.setAttribute(\"class\", \"articleImage\");\n                            thisporps2.Select(copy);\n                        });\n                        imageDiv.appendChild(image);\n                    }\n                // if(index==1){\n                //     const secondVar=thisprops\n                //     for(let i=imageDiv.childElementCount;i<i+4;i++){\n                //         console.log(1)\n                //         // let image=document.createElement(\"img\")\n                //         // let image=document.createElement(\"img\")\n                //         let ThirdVar=secondVar\n                //         console.log(ThirdVar.data[5].images.original.url)\n                //         // image.setAttribute(\"src\",thisprops.data[`${i}`].images.original.url)\n                //         // image.setAttribute(\"class\",`${styles.FetchedGif}`)\n                //         // imageDiv.appendChild(image)\n                //     }\n                //     index++\n                // }\n                }\n            };\n        }\n    }\n    componentDidMount() {\n        let search_inp = document.getElementsByClassName(\"\".concat((_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Gif_search)))[0];\n        search_inp.addEventListener(\"keydown\", (e)=>{\n            if (e.key == \"Enter\") {\n                this.handleGif(search_inp.value);\n            }\n        });\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"HolderGif\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Search),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Gif_search)\n                        }, void 0, false, {\n                            fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                            lineNumber: 173,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                        lineNumber: 171,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_writing_module_css__WEBPACK_IMPORTED_MODULE_6___default().Gif_display),\n                        id: \"Gif_div\"\n                    }, void 0, false, {\n                        fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                        lineNumber: 178,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rafid/RavenScribe/Frontend/public/components/controlbarcomps/GifFetching.js\",\n                lineNumber: 170,\n                columnNumber: 13\n            }, this)\n        }, void 0, false);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            Fetched: null\n        };\n        this.Select = (div)=>{\n            this.props.Select(div);\n        };\n        this.handleGif = (key)=>{\n            this.props.Gif(key);\n        };\n    }\n}\nconst mapStateToProps = (state)=>{\n    return {\n        Fetched: state.Edit.FetchList,\n        Selected: state.Edit.Selected,\n        Type: state.Edit.CatFetch\n    };\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        Gif: (key)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__.fetchGif(key)),\n        Select: (div)=>dispatch(_store_actions_Editing__WEBPACK_IMPORTED_MODULE_3__.SelectSuccess(div))\n    };\n};\n// export default Writing\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(ImagesFet));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvY29tcG9uZW50cy9jb250cm9sYmFyY29tcHMvR2lmRmV0Y2hpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDSDtBQUNtQjtBQUNGO0FBQ3hCO0FBQ0g7QUFDRjtBQUUxQixNQUFNUSxrQkFBa0JQLDRDQUFTQTtJQWlCN0JRLHFCQUFvQjtRQUVoQixJQUFHLElBQUksQ0FBQ0MsTUFBTUMsUUFBTSxLQUFLO1lBQ3JCLElBQUlDLFdBQVNDLFNBQVNDLGVBQWU7WUFHckNGLFNBQVNHLFlBQVU7WUFHbkIsSUFBSSxJQUFJQyxJQUFFLEdBQUVBLElBQUUsR0FBRUEsSUFBSTtnQkFDaEIsMENBQTBDO2dCQUMxQyxJQUFJQyxRQUFNSixTQUFTSyxjQUFjO2dCQUNqQ0QsTUFBTUUsYUFBYSxPQUFNLElBQUksQ0FBQ1QsTUFBTVUsUUFBUUMsSUFBSSxDQUFDLEdBQUssT0FBRkwsR0FBSSxDQUFDTSxPQUFPQyxTQUFTQztnQkFDekVQLE1BQU1FLGFBQWEsU0FBUSxHQUFxQixPQUFsQmYsOEVBQWlCcUI7Z0JBQy9DYixTQUFTYyxZQUFZVDtnQkFDckJBLE1BQU1VLGlCQUFpQixTQUFRO29CQUMzQixJQUFJQyxPQUFLWCxNQUFNWSxVQUFVO29CQUN6QkQsS0FBS0UsZ0JBQWdCO29CQUNyQkYsS0FBS1QsYUFBYSxTQUFRO29CQUMxQixJQUFJLENBQUNULE1BQU1xQixPQUFPSDtnQkFJdEI7WUFDSjtZQUdBLElBQUlJLFVBQVFuQixTQUFTb0IsdUJBQXVCLFVBQVUsQ0FBQyxFQUFFO1lBQ3pELElBQUlDLFdBQVMsSUFBSSxDQUFDeEIsTUFBTXlCO1lBQ3hCLElBQUlDLGVBQWF2QixTQUFTb0IsdUJBQXVCLGVBQWUsQ0FBQyxFQUFFO1lBR25FLElBQUlYLFNBQU9ULFNBQVN3QixpQkFBaUIsSUFBc0IsT0FBbEJqQyw4RUFBaUJxQjtZQUMxRCxvQ0FBb0M7WUFDcEMsK0NBQStDO1lBQy9DLDZDQUE2QztZQUM3Qyx3Q0FBd0M7WUFDeEMsb0RB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SSxvQkFBb0IvRCxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9jb21wb25lbnRzL2NvbnRyb2xiYXJjb21wcy9HaWZGZXRjaGluZy5qcz84OWU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL0VkaXRpbmcnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy93cml0aW5nLm1vZHVsZS5jc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBJbWFnZXNGZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLlNlbGVjdD0oZGl2KT0+e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5TZWxlY3QoZGl2KVxuICAgICAgICBcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlR2lmPShrZXkpPT57XG4gICAgICAgICAgICB0aGlzLnByb3BzLkdpZihrZXkpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGU9e1xuICAgICAgICBGZXRjaGVkOm51bGwsXG4gXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCl7XG5cbiAgICAgICAgaWYodGhpcy5wcm9wcy5UeXBlPT1cIkdcIiApe1xuICAgICAgICAgICAgbGV0IGltYWdlRGl2PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR2lmX2RpdlwiKVxuXG5cbiAgICAgICAgICAgIGltYWdlRGl2LmlubmVySFRNTD1cIlwiXG5cblxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTw0O2krKyl7XG4gICAgICAgICAgICAgICAgLy8gbGV0IGltYWdlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLHRoaXMucHJvcHMuRmV0Y2hlZC5kYXRhW2Ake2l9YF0uaW1hZ2VzLm9yaWdpbmFsLnVybClcbiAgICAgICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGAke3N0eWxlcy5GZXRjaGVkR2lmfWApXG4gICAgICAgICAgICAgICAgaW1hZ2VEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3B5PWltYWdlLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgICAgICAgICBjb3B5LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgICAgICAgICAgICAgICAgIGNvcHkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImFydGljbGVJbWFnZVwiKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLlNlbGVjdChjb3B5KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICBcbiAgICAgICAgICAgIGxldCBhcnRpY2xlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcnRpY2xlXCIpWzBdXG4gICAgICAgICAgICBsZXQgc2VsZWNEaXY9dGhpcy5wcm9wcy5TZWxlY3RlZFxuICAgICAgICAgICAgbGV0IHNlbGVjRGl2SW5pdD1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxvZy1jb250ZW50XCIpWzBdXG4gICAgXG4gICAgXG4gICAgICAgICAgICBsZXQgaW1hZ2VzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3N0eWxlcy5GZXRjaGVkR2lmfWApXG4gICAgICAgICAgICAvLyBmb3IobGV0IGo9MDtqPGltYWdlcy5sZW5ndGg7aisrKXtcbiAgICAgICAgICAgIC8vICAgICBpbWFnZXNbal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAvLyAgICAgICAgIGxldCBjb3B5PWltYWdlc1tqXS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgIC8vICAgICAgICAgY29weS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKVxuICAgICAgICAgICAgLy8gICAgICAgICBjb3B5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJhcnRpY2xlSW1hZ2VcIilcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5wcm9wcy5TZWxlY3QoY29weSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgLy8gfVxuXG5cblxuICAgICAgICAgICAgY29uc3QgdGhpc3Byb3BzPXRoaXMucHJvcHMuRmV0Y2hlZFxuXG4gICAgICAgICAgICBsZXQgaW5kZXg9MVxuXG4gICAgICAgICAgICBpbWFnZURpdi5vbnNjcm9sbD1mdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmICgoaW1hZ2VEaXYub2Zmc2V0SGVpZ2h0ICsgaW1hZ2VEaXYuc2Nyb2xsVG9wKSA+PSBpbWFnZURpdi5zY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IFNlY29uZFZhcj10aGlzcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4PWltYWdlRGl2LmNoaWxkRWxlbWVudENvdW50XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaW1pdD1pbWFnZURpdi5jaGlsZEVsZW1lbnRDb3VudCs0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoaXNwcm9wczE9dGhpcy5wcm9wc1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9aW5kZXg7aTxsaW1pdDtpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRoaXNwb3JwczI9dGhpc3Byb3BzMVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgVGhpcmRWYXI9U2Vjb25kVmFyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhUaGlyZFZhci5kYXRhW2ldLmltYWdlcy5vcmlnaW5hbC51cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsVGhpcmRWYXIuZGF0YVtgJHtpfWBdLmltYWdlcy5vcmlnaW5hbC51cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGAke3N0eWxlcy5GZXRjaGVkR2lmfWApXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29weT1pbWFnZS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3B5LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiYXJ0aWNsZUltYWdlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc3BvcnBzMi5TZWxlY3QoY29weSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURpdi5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBpZihpbmRleD09MSl7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBzZWNvbmRWYXI9dGhpc3Byb3BzXG4gICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBmb3IobGV0IGk9aW1hZ2VEaXYuY2hpbGRFbGVtZW50Q291bnQ7aTxpKzQ7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygxKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIGxldCBpbWFnZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gbGV0IGltYWdlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgVGhpcmRWYXI9c2Vjb25kVmFyXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coVGhpcmRWYXIuZGF0YVs1XS5pbWFnZXMub3JpZ2luYWwudXJsKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLHRoaXNwcm9wcy5kYXRhW2Ake2l9YF0uaW1hZ2VzLm9yaWdpbmFsLnVybClcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGAke3N0eWxlcy5GZXRjaGVkR2lmfWApXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gaW1hZ2VEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpbmRleCsrXG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICBcbiAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgIH1cbiAgICAgXG5cblxuXG4gICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7ICAgIFxuIFxuICAgICBcblxuXG5cblxuICAgICAgICBsZXQgc2VhcmNoX2lucD1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3N0eWxlcy5HaWZfc2VhcmNofWApWzBdXG4gICAgICAgIHNlYXJjaF9pbnAuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwoZSk9PntcbiAgICAgICAgICAgIGlmKGUua2V5PT1cIkVudGVyXCIpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVHaWYoc2VhcmNoX2lucC52YWx1ZSlcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgIFxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdIb2xkZXJHaWYnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TZWFyY2h9PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5HaWZfc2VhcmNofT48L2lucHV0PlxuICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkdpZl9kaXNwbGF5fSBpZD1cIkdpZl9kaXZcIj5cbiAgIFxuICAgICAgICAgICAgICAgIFxuICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICBcblxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICBcbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIEZldGNoZWQ6IHN0YXRlLkVkaXQuRmV0Y2hMaXN0LFxuICAgICAgICBTZWxlY3RlZDpzdGF0ZS5FZGl0LlNlbGVjdGVkLFxuICAgICAgICBUeXBlOnN0YXRlLkVkaXQuQ2F0RmV0Y2gsXG5cbiAgICAgICAgLy8gaW1hZ2VzOiBzdGF0ZS5yZWR1Y2VyRWRpdC5lcnJvcixcbiAgICBcblxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgR2lmOiAoa2V5KSA9PiBkaXNwYXRjaChhY3Rpb25zLmZldGNoR2lmKCBrZXkpKSxcbiAgICAgICAgU2VsZWN0OihkaXYpPT5kaXNwYXRjaChhY3Rpb25zLlNlbGVjdFN1Y2Nlc3MoZGl2KSlcbiAgXG5cbiAgICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFdyaXRpbmdcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKEltYWdlc0ZldCkpXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiYWN0aW9ucyIsInN0eWxlcyIsIkltYWdlIiwiSGVhZCIsImF4aW9zIiwiSW1hZ2VzRmV0IiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJvcHMiLCJUeXBlIiwiaW1hZ2VEaXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiaSIsImltYWdlIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIkZldGNoZWQiLCJkYXRhIiwiaW1hZ2VzIiwib3JpZ2luYWwiLCJ1cmwiLCJGZXRjaGVkR2lmIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29weSIsImNsb25lTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsIlNlbGVjdCIsImFydGljbGUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2VsZWNEaXYiLCJTZWxlY3RlZCIsInNlbGVjRGl2SW5pdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0aGlzcHJvcHMiLCJpbmRleCIsIm9uc2Nyb2xsIiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiU2Vjb25kVmFyIiwiY2hpbGRFbGVtZW50Q291bnQiLCJsaW1pdCIsInRoaXNwcm9wczEiLCJ0aGlzcG9ycHMyIiwiVGhpcmRWYXIiLCJjb21wb25lbnREaWRNb3VudCIsInNlYXJjaF9pbnAiLCJHaWZfc2VhcmNoIiwiZSIsImtleSIsImhhbmRsZUdpZiIsInZhbHVlIiwicmVuZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiU2VhcmNoIiwiaW5wdXQiLCJHaWZfZGlzcGxheSIsImlkIiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsIkdpZiIsIm1hcFN0YXRlVG9Qcm9wcyIsIkVkaXQiLCJGZXRjaExpc3QiLCJDYXRGZXRjaCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZmV0Y2hHaWYiLCJTZWxlY3RTdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/components/controlbarcomps/GifFetching.js\n"));

/***/ })

});