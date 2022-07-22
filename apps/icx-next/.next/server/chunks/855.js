"use strict";
exports.id = 855;
exports.ids = [855];
exports.modules = {

/***/ 7855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6577);


const Recommendation = ({ data  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row text-center text-md-start",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "line"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "mb-5",
                        children: data.Title
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row display-flex",
                children: (data.Recommendations || []).map((quote, i)=>{
                    var ref, ref1, ref2, ref3, ref4, ref5;
                    if (!quote) return null;
                    const imgSrc = (quote === null || quote === void 0 ? void 0 : (ref = quote.image) === null || ref === void 0 ? void 0 : (ref1 = ref.data) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.attributes) === null || ref2 === void 0 ? void 0 : ref2.url) ? `${"http://167.99.181.174:1337"}${quote === null || quote === void 0 ? void 0 : (ref3 = quote.image) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.data) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.attributes) === null || ref5 === void 0 ? void 0 : ref5.url}` : "";
                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-12 col-md-6 mb-4 mb-md-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                src: imgSrc,
                                width: 150,
                                height: 27,
                                layout: "fixed",
                                alt: `recommendation-card-${i}-icon`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("blockquote", {
                                className: "mt-3",
                                children: quote.title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("cite", {
                                className: "pt-2 small",
                                children: [
                                    "- ",
                                    quote.description
                                ]
                            })
                        ]
                    }, `recommendation-card-${i}`));
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Recommendation);


/***/ })

};
;