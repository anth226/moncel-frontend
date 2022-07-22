exports.id = 287;
exports.ids = [287];
exports.modules = {

/***/ 9848:
/***/ ((module) => {

// Exports
module.exports = {
	"linksTop": "styles_linksTop__0ScS4",
	"linksBottom": "styles_linksBottom__U6n9N"
};


/***/ }),

/***/ 1163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* reexport */ footer),
  "h": () => (/* reexport */ header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../node_modules/next/image.js
var next_image = __webpack_require__(6577);
// EXTERNAL MODULE: external "react-bootstrap/Navbar"
var Navbar_ = __webpack_require__(4934);
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "react-bootstrap/Nav"
var Nav_ = __webpack_require__(2540);
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
;// CONCATENATED MODULE: ./components/layout/header/index.tsx







const Header = ({ data  })=>{
    var ref, ref1, ref2;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-dark",
        children: /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()), {
            expand: "md",
            className: "m-0 p-0",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                className: "py-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Brand, {
                        href: "/",
                        className: "d-flex align-items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: `${"http://167.99.181.174:1337"}${(ref = data.logo) === null || ref === void 0 ? void 0 : (ref1 = ref.data) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.attributes) === null || ref2 === void 0 ? void 0 : ref2.url}`,
                            alt: "icx-logo",
                            width: 160,
                            height: 30
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Toggle, {
                        "aria-controls": "basic-navbar-nav",
                        className: "m-0 p-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                            className: "mobile-menu",
                            icon: free_solid_svg_icons_.faBars
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Collapse, {
                        id: "basic-navbar-nav",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()), {
                            className: "ms-auto d-flex justify-content-between align-items-center",
                            children: (data.links || []).map((link)=>{
                                if (!link) return null;
                                return(/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: `text-white ms-0 ms-md-3 ms-lg-4 mt-2 mt-md-0`,
                                    href: link.href,
                                    children: link.text.toUpperCase()
                                }, `header-link-${link.text}}`));
                            })
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const header = (Header);

// EXTERNAL MODULE: ../../node_modules/next/link.js
var next_link = __webpack_require__(9097);
// EXTERNAL MODULE: ./components/layout/footer/styles.module.scss
var styles_module = __webpack_require__(9848);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./components/layout/footer/index.tsx




const Footer = ({ data  })=>{
    var ref, ref1, ref2, ref3, ref4, ref5;
    const logo = ((ref = data.logo) === null || ref === void 0 ? void 0 : (ref1 = ref.data) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.attributes) === null || ref2 === void 0 ? void 0 : ref2.url) ? `${"http://167.99.181.174:1337"}${(ref3 = data.logo) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.data) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.attributes) === null || ref5 === void 0 ? void 0 : ref5.url}` : "";
    const { NavLinks: navLinks , LegalLinks: legalLinks , Copyright: copyright  } = data;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "footer",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row mb-3 d-flex align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12 col-md-3 text-center text-md-start mb-3 mb-md-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        src: logo,
                                        width: 179,
                                        height: 32,
                                        layout: "fixed",
                                        alt: "footer-logo"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12 col-md-9 text-center text-md-end",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (styles_module_default()).linksTop,
                                children: (navLinks || []).map((link)=>{
                                    if (!link) return null;
                                    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: link.href,
                                        children: link.text
                                    }, `footer-navigation-${link.text}`));
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row text-center text-md-start",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: copyright
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (styles_module_default()).linksBottom,
                            children: (legalLinks || []).map((link)=>{
                                if (!link) return null;
                                return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: link.href,
                                    children: link.text
                                }, `footer-terms-${link.text}`));
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./components/layout/index.ts





/***/ }),

/***/ 7680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    uri: `${"http://167.99.181.174:1337"}/graphql`,
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()
});


/***/ })

};
;