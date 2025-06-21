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
"[project]/src/components/SmoothScroll.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/SmoothScroll.tsx
__turbopack_context__.s({
    "default": (()=>SmoothScroll)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@studio-freight/lenis/dist/lenis.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SmoothScroll({ children }) {
    _s();
    // Create a ref to store the Lenis instance
    const lenisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScroll.useEffect": ()=>{
            // Initialize Lenis with configuration options
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.2,
                easing: {
                    "SmoothScroll.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["SmoothScroll.useEffect"],
                touchMultiplier: 2,
                infinite: false
            });
            // Store the Lenis instance in our ref
            lenisRef.current = lenis;
            // Create the animation loop function
            function raf(time) {
                // Update Lenis on each animation frame
                lenis.raf(time);
                // Request the next animation frame to keep the loop running
                requestAnimationFrame(raf);
            }
            // Start the animation loop
            requestAnimationFrame(raf);
            // Optional: Add scroll event listener for debugging or additional functionality
            lenis.on("scroll", {
                "SmoothScroll.useEffect": (e)=>{
                // Uncomment the line below to see scroll progress in console
                // console.log('Scroll progress:', e.progress);
                }
            }["SmoothScroll.useEffect"]);
            // Cleanup function to destroy Lenis instance when component unmounts
            return ({
                "SmoothScroll.useEffect": ()=>{
                    if (lenisRef.current) {
                        lenisRef.current.destroy();
                    }
                }
            })["SmoothScroll.useEffect"];
        }
    }["SmoothScroll.useEffect"], []); // Empty dependency array means this effect runs once on mount
    // Return children as-is (Lenis works globally once initialized)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(SmoothScroll, "EGg8JqRqiLdZLNuaMV97MRehwwE=");
_c = SmoothScroll;
var _c;
__turbopack_context__.k.register(_c, "SmoothScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_c675dbc0._.js.map