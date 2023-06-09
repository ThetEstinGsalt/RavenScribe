"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/reducers/Editing.js":
/*!***********************************!*\
  !*** ./store/reducers/Editing.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ \"./store/actions/actionTypes.js\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility */ \"./store/utility.js\");\n\n\n// import { combineReducers } from 'redux'\nconst initialState = {\n    FetchList: null,\n    OptionSelected: null,\n    TextOption: null,\n    error: null,\n    Selected: null,\n    Font: \"blog-content\"\n};\nconst FetchedFail = (state, action)=>{\n    return (0,_utility__WEBPACK_IMPORTED_MODULE_1__.updateObject)(state, {\n        error: action.error\n    });\n};\n_c = FetchedFail;\nconst FetchedSuccess = (state, action)=>{\n    return (0,_utility__WEBPACK_IMPORTED_MODULE_1__.updateObject)(state, {\n        FetchList: action.list,\n        error: null\n    });\n};\n_c1 = FetchedSuccess;\nconst SelectedDiv = (state, action)=>{\n    return (0,_utility__WEBPACK_IMPORTED_MODULE_1__.updateObject)(state, {\n        Selected: action.Selected\n    });\n};\n_c2 = SelectedDiv;\nconst SelectFont = (state, action)=>{\n    return (0,_utility__WEBPACK_IMPORTED_MODULE_1__.updateObject)(state, {\n        Font: action.Font\n    });\n};\n_c3 = SelectFont;\nconst reducerEdit = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.FETCH_SUCCESS:\n            return FetchedSuccess(state, action);\n        case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.FETCH_FAIL:\n            return FetchedFail(state, action);\n        case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.SELECTSUCCESS:\n            return SelectedDiv(state, action);\n        case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.FONT_SELECT:\n            return SelectFont(state, action);\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducerEdit);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"FetchedFail\");\n$RefreshReg$(_c1, \"FetchedSuccess\");\n$RefreshReg$(_c2, \"SelectedDiv\");\n$RefreshReg$(_c3, \"SelectFont\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9FZGl0aW5nLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFxRDtBQUVaO0FBQ3pDLDBDQUEwQztBQU0xQyxNQUFNRSxlQUFlO0lBRWpCQyxXQUFXLElBQUk7SUFDZkMsZ0JBQWdCLElBQUk7SUFDcEJDLFlBQVksSUFBSTtJQUNoQkMsT0FBTSxJQUFJO0lBQ1ZDLFVBQVMsSUFBSTtJQUNiQyxNQUFLO0FBRVQ7QUFHQSxNQUFPQyxjQUFhLENBQUNDLE9BQU9DLFNBQVc7SUFDbkMsT0FBT1Ysc0RBQVlBLENBQUNTLE9BQU87UUFDdkJKLE9BQU9LLE9BQU9MLEtBQUs7SUFFdkI7QUFDSjtLQUxPRztBQU9QLE1BQU1HLGlCQUFpQixDQUFDRixPQUFPQyxTQUFXO0lBR3RDLE9BQU9WLHNEQUFZQSxDQUFDUyxPQUFPO1FBQ3ZCUCxXQUFXUSxPQUFPRSxJQUFJO1FBQ3RCUCxPQUFPLElBQUk7SUFFZjtBQUNKO01BUk1NO0FBVU4sTUFBTUUsY0FBWSxDQUFDSixPQUFNQyxTQUFTO0lBQzlCLE9BQU9WLHNEQUFZQSxDQUFDUyxPQUFNO1FBQ3RCSCxVQUFTSSxPQUFPSixRQUFRO0lBQzVCO0FBQ0o7TUFKTU87QUFPTixNQUFNQyxhQUFXLENBQUNMLE9BQU1DLFNBQVM7SUFDN0IsT0FBT1Ysc0RBQVlBLENBQUNTLE9BQU07UUFDdEJGLE1BQUtHLE9BQU9ILElBQUk7SUFDcEI7QUFDSjtNQUpNTztBQVNOLE1BQU1DLGNBQWMsV0FBa0M7UUFBakNOLHlFQUFRUixjQUFjUztJQUN2QyxPQUFRQSxPQUFPTSxJQUFJO1FBQ2YsS0FBS2pCLCtEQUF5QjtZQUMxQixPQUFRWSxlQUFlRixPQUFPQztRQUVsQyxLQUFLWCw0REFBc0I7WUFDdkIsT0FBUVMsWUFBWUMsT0FBT0M7UUFDL0IsS0FBS1gsK0RBQXlCO1lBQzFCLE9BQVFjLFlBQVlKLE9BQU9DO1FBQy9CLEtBQUtYLDZEQUF1QjtZQUN4QixPQUFRZSxXQUFXTCxPQUFPQztRQUk5QjtZQUNJLE9BQU9EO0lBQ2Y7QUFDSjtBQUlBLCtEQUFlTSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3JlZHVjZXJzL0VkaXRpbmcuanM/ZDQ2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJ1xuXG5pbXBvcnQgeyB1cGRhdGVPYmplY3QgfSBmcm9tICcuLi91dGlsaXR5J1xuLy8gaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5cblxuXG5cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuIFxuICAgIEZldGNoTGlzdDogbnVsbCxcbiAgICBPcHRpb25TZWxlY3RlZDogbnVsbCxcbiAgICBUZXh0T3B0aW9uOiBudWxsLFxuICAgIGVycm9yOm51bGwsXG4gICAgU2VsZWN0ZWQ6bnVsbCxcbiAgICBGb250OlwiYmxvZy1jb250ZW50XCJcblxufVxuXG5cbmNvbnN0ICBGZXRjaGVkRmFpbD0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICByZXR1cm4gdXBkYXRlT2JqZWN0KHN0YXRlLCB7XG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG5cbiAgICB9KTtcbn1cblxuY29uc3QgRmV0Y2hlZFN1Y2Nlc3MgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIFxuXG4gICAgcmV0dXJuIHVwZGF0ZU9iamVjdChzdGF0ZSwge1xuICAgICAgICBGZXRjaExpc3Q6IGFjdGlvbi5saXN0LFxuICAgICAgICBlcnJvcjogbnVsbCxcbiBcbiAgICB9KVxufVxuXG5jb25zdCBTZWxlY3RlZERpdj0oc3RhdGUsYWN0aW9uKT0+e1xuICAgIHJldHVybiB1cGRhdGVPYmplY3Qoc3RhdGUse1xuICAgICAgICBTZWxlY3RlZDphY3Rpb24uU2VsZWN0ZWRcbiAgICB9KVxufVxuXG5cbmNvbnN0IFNlbGVjdEZvbnQ9KHN0YXRlLGFjdGlvbik9PntcbiAgICByZXR1cm4gdXBkYXRlT2JqZWN0KHN0YXRlLHtcbiAgICAgICAgRm9udDphY3Rpb24uRm9udFxuICAgIH0pXG59XG5cblxuXG5cbmNvbnN0IHJlZHVjZXJFZGl0ID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuRkVUQ0hfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiAoRmV0Y2hlZFN1Y2Nlc3Moc3RhdGUsIGFjdGlvbikpXG5cbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5GRVRDSF9GQUlMOlxuICAgICAgICAgICAgcmV0dXJuIChGZXRjaGVkRmFpbChzdGF0ZSwgYWN0aW9uKSlcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxFQ1RTVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIChTZWxlY3RlZERpdihzdGF0ZSwgYWN0aW9uKSlcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5GT05UX1NFTEVDVDpcbiAgICAgICAgICAgIHJldHVybiAoU2VsZWN0Rm9udChzdGF0ZSwgYWN0aW9uICkpXG5cbiAgICBcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJFZGl0Il0sIm5hbWVzIjpbImFjdGlvblR5cGVzIiwidXBkYXRlT2JqZWN0IiwiaW5pdGlhbFN0YXRlIiwiRmV0Y2hMaXN0IiwiT3B0aW9uU2VsZWN0ZWQiLCJUZXh0T3B0aW9uIiwiZXJyb3IiLCJTZWxlY3RlZCIsIkZvbnQiLCJGZXRjaGVkRmFpbCIsInN0YXRlIiwiYWN0aW9uIiwiRmV0Y2hlZFN1Y2Nlc3MiLCJsaXN0IiwiU2VsZWN0ZWREaXYiLCJTZWxlY3RGb250IiwicmVkdWNlckVkaXQiLCJ0eXBlIiwiRkVUQ0hfU1VDQ0VTUyIsIkZFVENIX0ZBSUwiLCJTRUxFQ1RTVUNDRVNTIiwiRk9OVF9TRUxFQ1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/Editing.js\n"));

/***/ })

});