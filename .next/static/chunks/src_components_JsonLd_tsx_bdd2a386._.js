(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/JsonLd.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>JsonLd)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function JsonLd() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JsonLd.useEffect": ()=>{
            const script = document.createElement("script");
            script.type = "application/ld+json";
            script.text = JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Aditya Shah",
                url: "next-portfolio-vert-seven.vercel.app",
                jobTitle: "Front-end Hobby Developer",
                description: "Front-end Hobby Developer specializing in Next.js, React, and modern web technologies",
                image: "https://yourwebsite.com/profile-image.jpg",
                sameAs: [
                    "https://linkedin.com/in/adityashahh",
                    "https://github.com/notableadii",
                    "https://twitter.com/TheMostRealAdii",
                    "https://instagram.com/ewww_adii"
                ],
                knowsAbout: [
                    "JavaScript",
                    "Python",
                    "React",
                    "Next.js",
                    "Node.js",
                    "Web Development"
                ]
            }, null, 2);
            document.head.appendChild(script);
            return ({
                "JsonLd.useEffect": ()=>{
                    document.head.removeChild(script);
                }
            })["JsonLd.useEffect"];
        }
    }["JsonLd.useEffect"], []);
    return null;
}
_s(JsonLd, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = JsonLd;
var _c;
__turbopack_context__.k.register(_c, "JsonLd");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_JsonLd_tsx_bdd2a386._.js.map