"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 7892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_layout_one_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8797);
/* harmony import */ var components_sidebar_cta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7453);
/* harmony import */ var lib_strapi_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7680);
/* harmony import */ var styles_icx_secondary_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1285);
/* harmony import */ var styles_icx_secondary_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styles_icx_secondary_module_scss__WEBPACK_IMPORTED_MODULE_5__);






const Contact = (props)=>{
    const strapiData = props.strapiData.iccContact.data.attributes;
    const layoutData = props.strapiData.iccLandingPage.data.attributes;
    const sidebarData = props.strapiData.iccCertificatePage.data.attributes;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (styles_icx_secondary_module_scss__WEBPACK_IMPORTED_MODULE_5___default().page),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_one_col__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            header: layoutData.header,
            footer: layoutData.footer,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-primary",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-12 col-md-7 col-lg-8",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-center text-md-start",
                                        children: "Contact Us"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-12 col-md-5 col-lg-4 d-none d-md-flex justify-content-end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_sidebar_cta__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        data: sidebarData.HeroSection
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-light",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-12 col-md-7 col-lg-8 text-start",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (styles_icx_secondary_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (styles_icx_secondary_module_scss__WEBPACK_IMPORTED_MODULE_5___default().line)
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                children: strapiData.title
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        id: "form-enquiry",
                                        name: "form-general-icc",
                                        action: "https://formspree.io/f/xoqyzdzy",
                                        method: "POST",
                                        className: "clearfix form-validation",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: strapiData.description
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-6 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                htmlFor: "firstname",
                                                                children: [
                                                                    strapiData.FirstNameLabel,
                                                                    "*"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                required: true,
                                                                name: "firstname",
                                                                type: "text",
                                                                className: "form-control",
                                                                id: "form-enquiry-firstname",
                                                                "aria-describedby": "",
                                                                placeholder: strapiData.FirstNamePlaceholder || ""
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "feedback invalid-feedback",
                                                                children: strapiData.InvalidFirstName
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                htmlFor: "lastname",
                                                                children: [
                                                                    strapiData.LastNameLabel,
                                                                    "*"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                required: true,
                                                                name: "lastname",
                                                                type: "text",
                                                                className: "form-control",
                                                                id: "form-enquiry-lastname",
                                                                "aria-describedby": "",
                                                                placeholder: strapiData.LastNamePlaceholder || ""
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "feedback invalid-feedback",
                                                                children: strapiData.InvalidLastName
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-6 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                htmlFor: "email",
                                                                children: [
                                                                    strapiData.EmailLabel,
                                                                    "*"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                required: true,
                                                                name: "email",
                                                                type: "email",
                                                                className: "form-control",
                                                                id: "form-enquiry-email",
                                                                "aria-describedby": "",
                                                                placeholder: strapiData.EmailPlaceholder || ""
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "feedback invalid-feedback",
                                                                children: strapiData.InvalidEmail
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                htmlFor: "phone",
                                                                children: [
                                                                    strapiData.PhoneLabel,
                                                                    "*"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                name: "phone",
                                                                className: "form-control",
                                                                id: "form-enquiry-phone",
                                                                "aria-describedby": "",
                                                                placeholder: strapiData.PhonePlaceholder || ""
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "feedback invalid-feedback",
                                                                children: strapiData.InvalidPhone
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "row",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form-group col-12 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            htmlFor: "subject",
                                                            children: [
                                                                strapiData.SubjectLabel,
                                                                "*"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            required: true,
                                                            name: "subject",
                                                            type: "text",
                                                            className: "form-control",
                                                            id: "form-enquiry-subject",
                                                            "aria-describedby": "",
                                                            placeholder: strapiData.SubjectPlaceholder || ""
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "feedback invalid-feedback",
                                                            children: strapiData.SubjectLabel
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "row",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form-group col-12 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            htmlFor: "message",
                                                            children: [
                                                                strapiData.MessageLabel,
                                                                "*"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                            required: true,
                                                            name: "message",
                                                            className: "form-control",
                                                            id: "form-enquiry-message",
                                                            "aria-describedby": "",
                                                            rows: 10,
                                                            cols: 50,
                                                            placeholder: strapiData.MessagePlaceholder || ""
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "feedback invalid-feedback",
                                                            children: strapiData.InvalidMessage
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                id: "form-enquiry-submit",
                                                type: "submit",
                                                className: "mt-4 btn btn-primary",
                                                children: strapiData.ButtonLabel
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);
const getStaticProps = async ()=>{
    const { data  } = await lib_strapi_graphql__WEBPACK_IMPORTED_MODULE_4__/* .client.query */ .L.query({
        query: _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
        query {
            iccLandingPage {
                data {
                  attributes {
                    header {
                      logo {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                      links { 
                          href
                        text
                      }
                    }
                    footer {
                      logo {
                        data {
                          attributes {
                            url
                          }
                                    }
                      }
                      NavLinks {
                        text
                        href
                      }
                      LegalLinks {
                        text
                        href
                      }
                      Copyright
                    }
                  }
                }
            }
            iccContact {
                data {
                    attributes {
                        title
                        description
                        FirstNameLabel
                        FirstNamePlaceholder
                        LastNameLabel
                        LastNamePlaceholder
                        EmailLabel
                        EmailPlaceholder
                        PhoneLabel
                        PhonePlaceholder
                        SubjectLabel
                        SubjectPlaceholder
                        MessageLabel
                        MessagePlaceholder
                        ButtonLabel
                        InvalidFirstName
                        InvalidLastName
                        InvalidEmail
                        InvalidPhone
                        InvalidSubject
                        InvalidMessage
                        MobileButtonLabel
                        LeadNote
                    }
                }
            
            }
            iccCertificatePage {
                data {
                  attributes {
                    HeroSection {
                      title
                      HeroList {
                        text
                      }
                      ProductName
                      ProductPrice
                      ProductList {
                        text
                      }
                      Button {
                        text
                        href
                      }
                    }
                  }
                }
            }
        }`
    });
    return {
        props: {
            strapiData: data
        }
    };
};


/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4678:
/***/ ((module) => {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 2540:
/***/ ((module) => {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ 4934:
/***/ ((module) => {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [47,6,287,20], () => (__webpack_exec__(7892)));
module.exports = __webpack_exports__;

})();