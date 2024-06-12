"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Hero.js":
/*!********************************!*\
  !*** ./src/components/Hero.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Hero: function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ Hero auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Hero() {\n    _s();\n    const words = [\n        \"Radiologist\",\n        \"Mentor\",\n        \"Teacher\"\n    ];\n    const [i, setI] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [j, setJ] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [currentWord, setCurrentWord] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isDeleting, setIsDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isCursorVisible, setIsCursorVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setCurrentWord(words[i]);\n        const timer = setTimeout(()=>{\n            if (isDeleting) {\n                setJ(j - 1);\n                if (j === 0) {\n                    setIsDeleting(false);\n                    setI(i === words.length - 1 ? 0 : i + 1);\n                }\n            } else {\n                setJ(j + 1);\n                if (j === currentWord.length) {\n                    setIsDeleting(true);\n                }\n            }\n        }, 200);\n        return ()=>clearTimeout(timer);\n    }, [\n        i,\n        j,\n        isDeleting,\n        currentWord\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const cursorTimer = setInterval(()=>{\n            setIsCursorVisible(!isCursorVisible);\n        }, 500);\n        return ()=>clearInterval(cursorTimer);\n    }, [\n        isCursorVisible\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative bg-gray-50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"lg:relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-25 lg:text-left\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-4 lg:w-1/2 sm:px-8 xl:pr-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"block xl:inline\",\n                                            children: \"Radiology Training Portal\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 15\n                                        }, this),\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"block text-indigo-600 xl:inline\",\n                                            children: \"Dr. Pasquale Capriglione\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        id: \"typewriter\",\n                                        children: [\n                                            \"I am a \",\n                                            currentWord.substring(0, j),\n                                            isCursorVisible && \"|\",\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-full h-64 sm:h-72 md:h-96 hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"absolute inset-0 w-full h-full object-cover\",\n                            src: \"/hero.png\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full  px-6 py-8 rounded-lg shadow-lg bg-white p-6 mt-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-3xl lg:text-3xl xl:text-6xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Click on the organ you want to analyze\"\n                        }, void 0, false, {\n                            fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                            lineNumber: 68,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                        lineNumber: 67,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center mt-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-3xl items-center justify-center mt-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    legacyBehavior: true,\n                                    href: \"/liver\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"button text-2xl text-center hover:bg-gray-100 rounded-md p-6\",\n                                        children: \"Liver\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    legacyBehavior: true,\n                                    href: \"/skull\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"button text-2xl text-center hover:bg-gray-100 rounded-md p-6\",\n                                        children: \"Coming soon!\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    legacyBehavior: true,\n                                    href: \"/lung\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"button text-2xl text-center hover:bg-gray-100 rounded-md p-6\",\n                                        children: \"Coming soon!\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    legacyBehavior: true,\n                                    href: \"/other-organ\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"button text-2xl text-center hover:bg-gray-100 rounded-md p-6\",\n                                        children: \"Coming soon!\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                            lineNumber: 71,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                        lineNumber: 70,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/eislm/Documents/git/radiology-training/src/components/Hero.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(Hero, \"M/+GFCDAPNSlZ4mjzlqEf75xEGU=\");\n_c = Hero;\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlcm8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNkI7QUFDc0I7QUFFNUMsU0FBU0k7O0lBQ2QsTUFBTUMsUUFBUTtRQUFDO1FBQWU7UUFBVTtLQUFVO0lBQ2xELE1BQU0sQ0FBQ0MsR0FBR0MsS0FBSyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMzQixNQUFNLENBQUNLLEdBQUdDLEtBQUssR0FBR04sK0NBQVFBLENBQUM7SUFDM0IsTUFBTSxDQUFDTyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNXLGlCQUFpQkMsbUJBQW1CLEdBQUdaLCtDQUFRQSxDQUFDO0lBRXZERCxnREFBU0EsQ0FBQztRQUNSUyxlQUFlTixLQUFLLENBQUNDLEVBQUU7UUFDdkIsTUFBTVUsUUFBUUMsV0FBVztZQUN2QixJQUFJTCxZQUFZO2dCQUNkSCxLQUFLRCxJQUFJO2dCQUNULElBQUlBLE1BQU0sR0FBRztvQkFDWEssY0FBYztvQkFDZE4sS0FBS0QsTUFBTUQsTUFBTWEsTUFBTSxHQUFHLElBQUksSUFBSVosSUFBSTtnQkFDeEM7WUFDRixPQUFPO2dCQUNMRyxLQUFLRCxJQUFJO2dCQUNULElBQUlBLE1BQU1FLFlBQVlRLE1BQU0sRUFBRTtvQkFDNUJMLGNBQWM7Z0JBQ2hCO1lBQ0Y7UUFDRixHQUFHO1FBQ0gsT0FBTyxJQUFNTSxhQUFhSDtJQUM1QixHQUFHO1FBQUNWO1FBQUdFO1FBQUdJO1FBQVlGO0tBQVk7SUFFbENSLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWtCLGNBQWNDLFlBQVk7WUFDOUJOLG1CQUFtQixDQUFDRDtRQUN0QixHQUFHO1FBQ0gsT0FBTyxJQUFNUSxjQUFjRjtJQUM3QixHQUFHO1FBQUNOO0tBQWdCO0lBRXBCLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUtELFdBQVU7O2tDQUNkLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRTtvQ0FBR0YsV0FBVTs7c0RBQ1osOERBQUNHOzRDQUFLSCxXQUFVO3NEQUFrQjs7Ozs7O3dDQUFpQztzREFDbkUsOERBQUNHOzRDQUFLSCxXQUFVO3NEQUFrQzs7Ozs7Ozs7Ozs7OzhDQUlwRCw4REFBQ0k7b0NBQUVKLFdBQVU7OENBQ1gsNEVBQUNHO3dDQUFLRSxJQUFHOzs0Q0FBYTs0Q0FDWm5CLFlBQVlvQixTQUFTLENBQUMsR0FBR3RCOzRDQUNoQ00sbUJBQW1COzRDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLakMsOERBQUNTO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDTzs0QkFDQ1AsV0FBVTs0QkFDVlEsS0FBSTs0QkFDSkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSVYsOERBQUNWO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNVO3NDQUFJOzs7Ozs7Ozs7OztrQ0FFUCw4REFBQ1g7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ3hCLGtEQUFJQTtvQ0FBQ21DLGNBQWM7b0NBQUNDLE1BQUs7OENBQ3hCLDRFQUFDQzt3Q0FBRWIsV0FBVTtrREFBK0Q7Ozs7Ozs7Ozs7OzhDQUU5RSw4REFBQ3hCLGtEQUFJQTtvQ0FBQ21DLGNBQWM7b0NBQUNDLE1BQUs7OENBQ3hCLDRFQUFDQzt3Q0FBRWIsV0FBVTtrREFBK0Q7Ozs7Ozs7Ozs7OzhDQUU5RSw4REFBQ3hCLGtEQUFJQTtvQ0FBQ21DLGNBQWM7b0NBQUNDLE1BQUs7OENBQ3hCLDRFQUFDQzt3Q0FBRWIsV0FBVTtrREFBK0Q7Ozs7Ozs7Ozs7OzhDQUU5RSw4REFBQ3hCLGtEQUFJQTtvQ0FBQ21DLGNBQWM7b0NBQUNDLE1BQUs7OENBQ3hCLDRFQUFDQzt3Q0FBRWIsV0FBVTtrREFBK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEY7R0FwRmdCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby5qcz8wNjg2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEhlcm8oKSB7XG4gIGNvbnN0IHdvcmRzID0gW1wiUmFkaW9sb2dpc3RcIiwgXCJNZW50b3JcIiwgXCJUZWFjaGVyXCJdO1xuICBjb25zdCBbaSwgc2V0SV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2osIHNldEpdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjdXJyZW50V29yZCwgc2V0Q3VycmVudFdvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0RlbGV0aW5nLCBzZXRJc0RlbGV0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzQ3Vyc29yVmlzaWJsZSwgc2V0SXNDdXJzb3JWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q3VycmVudFdvcmQod29yZHNbaV0pO1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoaXNEZWxldGluZykge1xuICAgICAgICBzZXRKKGogLSAxKTtcbiAgICAgICAgaWYgKGogPT09IDApIHtcbiAgICAgICAgICBzZXRJc0RlbGV0aW5nKGZhbHNlKTtcbiAgICAgICAgICBzZXRJKGkgPT09IHdvcmRzLmxlbmd0aCAtIDEgPyAwIDogaSArIDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRKKGogKyAxKTtcbiAgICAgICAgaWYgKGogPT09IGN1cnJlbnRXb3JkLmxlbmd0aCkge1xuICAgICAgICAgIHNldElzRGVsZXRpbmcodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAyMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9LCBbaSwgaiwgaXNEZWxldGluZywgY3VycmVudFdvcmRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGN1cnNvclRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0SXNDdXJzb3JWaXNpYmxlKCFpc0N1cnNvclZpc2libGUpO1xuICAgIH0sIDUwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoY3Vyc29yVGltZXIpO1xuICB9LCBbaXNDdXJzb3JWaXNpYmxlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLWdyYXktNTBcIj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImxnOnJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy03eGwgdy1mdWxsIHB0LTE2IHBiLTIwIHRleHQtY2VudGVyIGxnOnB5LTI1IGxnOnRleHQtbGVmdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBsZzp3LTEvMiBzbTpweC04IHhsOnByLTE2XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgdHJhY2tpbmctdGlnaHQgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTV4bCBtZDp0ZXh0LTZ4bCBsZzp0ZXh0LTV4bCB4bDp0ZXh0LTZ4bFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB4bDppbmxpbmVcIj5SYWRpb2xvZ3kgVHJhaW5pbmcgUG9ydGFsPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1pbmRpZ28tNjAwIHhsOmlubGluZVwiPlxuICAgICAgICAgICAgICBEci4gUGFzcXVhbGUgQ2FwcmlnbGlvbmUgXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0zIG1heC13LW1kIG14LWF1dG8gdGV4dC1sZyB0ZXh0LWdyYXktNTAwIHNtOnRleHQteGwgbWQ6bXQtNSBtZDptYXgtdy0zeGxcIj5cbiAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJ0eXBld3JpdGVyXCI+XG4gICAgICAgICAgICAgICAgSSBhbSBhIHtjdXJyZW50V29yZC5zdWJzdHJpbmcoMCwgail9XG4gICAgICAgICAgICAgICAge2lzQ3Vyc29yVmlzaWJsZSAmJiBcInxcIn17XCIgXCJ9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtNjQgc206aC03MiBtZDpoLTk2IGhpZGRlbiBsZzpibG9jayBsZzphYnNvbHV0ZSBsZzppbnNldC15LTAgbGc6cmlnaHQtMCBsZzp3LTEvMiBsZzpoLWZ1bGxcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgIHNyYz1cIi9oZXJvLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgIHB4LTYgcHktOCByb3VuZGVkLWxnIHNoYWRvdy1sZyBiZy13aGl0ZSBwLTYgbXQtMTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC00eGwgdHJhY2tpbmctdGlnaHQgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTV4bCBtZDp0ZXh0LTN4bCBsZzp0ZXh0LTN4bCB4bDp0ZXh0LTZ4bFwiPlxuICAgICAgICA8aDIgPkNsaWNrIG9uIHRoZSBvcmdhbiB5b3Ugd2FudCB0byBhbmFseXplPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNCB3LWZ1bGwgbWF4LXctM3hsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC02XCI+XG4gICAgICAgICAgPExpbmsgbGVnYWN5QmVoYXZpb3IgaHJlZj1cIi9saXZlclwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIHRleHQtMnhsIHRleHQtY2VudGVyIGhvdmVyOmJnLWdyYXktMTAwIHJvdW5kZWQtbWQgcC02XCI+TGl2ZXI8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGxlZ2FjeUJlaGF2aW9yIGhyZWY9XCIvc2t1bGxcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiB0ZXh0LTJ4bCB0ZXh0LWNlbnRlciBob3ZlcjpiZy1ncmF5LTEwMCByb3VuZGVkLW1kIHAtNlwiPkNvbWluZyBzb29uITwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgbGVnYWN5QmVoYXZpb3IgaHJlZj1cIi9sdW5nXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gdGV4dC0yeGwgdGV4dC1jZW50ZXIgaG92ZXI6YmctZ3JheS0xMDAgcm91bmRlZC1tZCBwLTZcIj5Db21pbmcgc29vbiE8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGxlZ2FjeUJlaGF2aW9yIGhyZWY9XCIvb3RoZXItb3JnYW5cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiB0ZXh0LTJ4bCB0ZXh0LWNlbnRlciBob3ZlcjpiZy1ncmF5LTEwMCByb3VuZGVkLW1kIHAtNlwiPkNvbWluZyBzb29uITwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlcm8iLCJ3b3JkcyIsImkiLCJzZXRJIiwiaiIsInNldEoiLCJjdXJyZW50V29yZCIsInNldEN1cnJlbnRXb3JkIiwiaXNEZWxldGluZyIsInNldElzRGVsZXRpbmciLCJpc0N1cnNvclZpc2libGUiLCJzZXRJc0N1cnNvclZpc2libGUiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJjbGVhclRpbWVvdXQiLCJjdXJzb3JUaW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJoMSIsInNwYW4iLCJwIiwiaWQiLCJzdWJzdHJpbmciLCJpbWciLCJzcmMiLCJhbHQiLCJoMiIsImxlZ2FjeUJlaGF2aW9yIiwiaHJlZiIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Hero.js\n"));

/***/ })

});