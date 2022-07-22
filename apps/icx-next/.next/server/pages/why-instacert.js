"use strict";
(() => {
var exports = {};
exports.id = 520;
exports.ids = [520];
exports.modules = {

/***/ 3369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ why_instacert),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./components/sidebar-cta/index.tsx + 1 modules
var sidebar_cta = __webpack_require__(7453);
;// CONCATENATED MODULE: ./components/why-instacert/hero/index.tsx


const CertificateHero2 = ({ data  })=>{
    // this is bad. please add a slug or type name in storyblok to make this suck less
    // /* eslint-disable no-unsafe-optional-chaining */
    // const text1 = ("text" in hero.body?.[0] || {}) ? (hero.body?.[0] as ComponentListItem).text : "";
    // const heroListItems = ("list_items" in (hero.body?.[1] || {})) ? (hero.body?.[1] as ComponentList).list_items : [];
    // const text2 = ("text" in hero.body?.[2] || {}) ? (hero.body?.[2] as ComponentListItem).text : ""; 
    // /* eslint-enable no-unsafe-optional-chaining */
    const heroSectionData = data.HeroSection;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-12 col-md-7 col-lg-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "mb-4 text-center text-md-start",
                            children: data.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: heroSectionData.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "list-container",
                            children: (heroSectionData.HeroList || []).map((listItem, i)=>{
                                if (!listItem) return null;
                                return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "mb-3",
                                    children: listItem.text
                                }, `hero-list-item-${i}}`));
                            })
                        }),
                        heroSectionData.closing ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: heroSectionData.closing
                        }) : null
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-12 col-md-5 col-lg-4 d-none d-md-flex justify-content-end",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(sidebar_cta/* default */.Z, {
                        data: heroSectionData
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const hero = (CertificateHero2);

// EXTERNAL MODULE: ./components/certificate/recommendation/index.tsx
var recommendation = __webpack_require__(7855);
// EXTERNAL MODULE: ./components/layout/one-col/index.tsx
var one_col = __webpack_require__(8797);
// EXTERNAL MODULE: ./lib/strapi/graphql.ts
var graphql = __webpack_require__(7680);
;// CONCATENATED MODULE: ./pages/why-instacert.tsx







const Certificate = (props)=>{
    const strapiData = props.strapiData.iccWhyInstacertPage.data.attributes;
    const layoutData = props.strapiData.iccLandingPage.data.attributes;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(one_col/* default */.Z, {
                header: layoutData.header,
                footer: layoutData.footer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-primary",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(hero, {
                            data: strapiData
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-light",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-12 col-md-7 col-lg-8",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(recommendation/* default */.Z, {
                                        data: strapiData.RecommendationSection
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-dark d-md-none",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-12",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(sidebar_cta/* default */.Z, {
                                        data: strapiData.HeroSection
                                    })
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "d-md-none mobile-space"
            })
        ]
    }));
};
/* harmony default export */ const why_instacert = (Certificate);
const getStaticProps = async ()=>{
    const { data  } = await graphql/* client.query */.L.query({
        query: client_.gql`
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
            iccWhyInstacertPage {
                data {
                  attributes {
                    title
                    HeroSection {
                      title
                      closing
                      HeroList {
                          text
                      }
                      ProductName
                      ProductList {
                          text
                      }
                      ProductPrice
                      Button {
                          text
                          href
                      }
                    }
                    RecommendationSection {
                      Title
                      Recommendations {
                          image {
                            data {
                              attributes {
                                url
                              }
                            }
                          }
                          title
                          description
                      }
                    }
                  }
                }
            }
        }
        `
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
var __webpack_exports__ = __webpack_require__.X(0, [47,6,287,20,855], () => (__webpack_exec__(3369)));
module.exports = __webpack_exports__;

})();