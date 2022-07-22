exports.id = 20;
exports.ids = [20];
exports.modules = {

/***/ 1285:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 8797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1163);
/* harmony import */ var styles_icx_secondary_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1285);
/* harmony import */ var styles_icx_secondary_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styles_icx_secondary_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const OneCol = (props)=>{
    const { header , footer , children  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .h, {
                data: header
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (styles_icx_secondary_module_scss__WEBPACK_IMPORTED_MODULE_2___default().page),
                children: [
                    children,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout__WEBPACK_IMPORTED_MODULE_1__/* .Footer */ .$, {
                        data: footer
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OneCol);


/***/ }),

/***/ 7453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sidebar_cta)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../node_modules/next/link.js
var next_link = __webpack_require__(9097);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/sidebar-cta/scroll.js

const isBrowser = "undefined" !== `undefined`;
function getScrollPosition({ element , useWindow  }) {
    if (!isBrowser) return {
        x: 0,
        y: 0
    };
    const target = element ? element.current : document.body;
    const position = target.getBoundingClientRect();
    return useWindow ? {
        x: window.scrollX,
        y: window.scrollY
    } : {
        x: position.left,
        y: position.top
    };
}
function useScrollPosition(effect, deps, element, useWindow, wait) {
    const position = (0,external_react_.useRef)(getScrollPosition({
        useWindow
    }));
    let throttleTimeout = null;
    const callBack = ()=>{
        const currPos = getScrollPosition({
            element,
            useWindow
        });
        effect({
            prevPos: position.current,
            currPos
        });
        position.current = currPos;
        throttleTimeout = null;
    };
    (0,external_react_.useLayoutEffect)(()=>{
        const handleScroll = ()=>{
            if (wait) {
                if (throttleTimeout === null) {
                    throttleTimeout = setTimeout(callBack, wait);
                }
            } else {
                callBack();
            }
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll)
        ;
    }, deps);
}

;// CONCATENATED MODULE: ./components/sidebar-cta/index.tsx



const Sidebar = ({ data  })=>{
    useScrollPosition(({ currPos  })=>{
        const sidebar = document.getElementById('sidebar-cta');
        const position = currPos.y;
        if (position <= -120) {
            sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.add('affix');
        } else {
            sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.remove('affix');
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "sidebar-cta p-0 p-md-4 text-center",
        id: "sidebar-cta",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "text-primary pb-2",
                children: "Food Handler Certificate"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "text-white text-start list-square",
                children: (data.ProductList || []).map((t)=>{
                    if (!t) return null;
                    return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "pb-1",
                        children: t.text
                    }));
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "display-2 price my-0 mt-lg-2 mb-lg-3 text-white",
                children: data.ProductPrice
            }),
            data.Button ? /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: data.Button.href,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "btn btn-primary",
                    children: data.Button.text
                })
            }) : null
        ]
    }));
};
/* harmony default export */ const sidebar_cta = (Sidebar);


/***/ })

};
;