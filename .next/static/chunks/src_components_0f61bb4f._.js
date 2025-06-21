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
"[project]/src/components/DotNetworkBackground.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const DotNetworkBackground = ()=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dotsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    // =====================================
    // RESPONSIVE CONFIGURATION 👇
    // =====================================
    const getResponsiveConfig = ()=>{
        const width = window.innerWidth;
        const height = window.innerHeight;
        const area = width * height;
        const isMobile = width < 768;
        const isTablet = width < 1024 && width >= 768;
        const isSmallScreen = width < 1200;
        // Base configuration for desktop
        let config = {
            // Network Density & Size
            dotCount: 150,
            dotSize: 1,
            // Line Properties
            lineThickness: 0.8,
            connectionDistance: 200,
            // Mouse Interaction
            mouseInfluence: 150,
            mouseConnectionOpacity: 0.6,
            // Movement & Animation
            baseSpeed: 0.3,
            mouseAttraction: 0.08,
            returnToOriginal: 0.015,
            // Visual Appearance
            dotOpacity: 0.4,
            lineOpacity: 0.4,
            // Colors
            dotColor: "rgba(255, 255, 255",
            lineColor: "rgba(255, 255, 255",
            mouseLineColor: "rgba(98, 225, 159",
            // Performance
            enableMouseConnections: true,
            enableDotConnections: true
        };
        // Mobile adjustments (screens < 768px)
        if (isMobile) {
            config = {
                ...config,
                dotCount: Math.max(100, Math.floor(area / 15000)),
                dotSize: 0.8,
                lineThickness: 0.5,
                connectionDistance: 120,
                mouseInfluence: 100,
                mouseConnectionOpacity: 0.3,
                baseSpeed: 0.2,
                mouseAttraction: 0.05,
                dotOpacity: 0.3,
                lineOpacity: 0.25,
                enableMouseConnections: false
            };
        } else if (isTablet) {
            config = {
                ...config,
                dotCount: Math.max(60, Math.floor(area / 12000)),
                dotSize: 0.9,
                lineThickness: 0.6,
                connectionDistance: 160,
                mouseInfluence: 120,
                mouseConnectionOpacity: 0.4,
                baseSpeed: 0.25,
                dotOpacity: 0.35,
                lineOpacity: 0.3
            };
        } else if (isSmallScreen) {
            config = {
                ...config,
                dotCount: Math.max(80, Math.floor(area / 10000)),
                connectionDistance: 180,
                mouseInfluence: 130,
                dotOpacity: 0.37,
                lineOpacity: 0.35
            };
        } else {
            config = {
                ...config,
                dotCount: Math.min(150, Math.floor(area / 8000))
            };
        }
        return config;
    };
    // =====================================
    // END OF RESPONSIVE CONFIGURATION 👆
    // =====================================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DotNetworkBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            let CONFIG = getResponsiveConfig();
            // Initialize dots with random positions and velocities
            const initDots = {
                "DotNetworkBackground.useEffect.initDots": ()=>{
                    dotsRef.current = [];
                    for(let i = 0; i < CONFIG.dotCount; i++){
                        dotsRef.current.push({
                            x: Math.random() * canvas.width,
                            y: Math.random() * canvas.height,
                            vx: (Math.random() - 0.5) * CONFIG.baseSpeed,
                            vy: (Math.random() - 0.5) * CONFIG.baseSpeed,
                            originalVx: (Math.random() - 0.5) * CONFIG.baseSpeed,
                            originalVy: (Math.random() - 0.5) * CONFIG.baseSpeed
                        });
                    }
                }
            }["DotNetworkBackground.useEffect.initDots"];
            // Set canvas size to full window
            const resizeCanvas = {
                "DotNetworkBackground.useEffect.resizeCanvas": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    // Recalculate config on resize
                    CONFIG = getResponsiveConfig();
                    // Reinitialize dots with new config
                    initDots();
                }
            }["DotNetworkBackground.useEffect.resizeCanvas"];
            resizeCanvas();
            window.addEventListener("resize", resizeCanvas);
            initDots();
            // Track mouse movement on document instead of canvas
            const handleMouseMove = {
                "DotNetworkBackground.useEffect.handleMouseMove": (e)=>{
                    mouseRef.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            }["DotNetworkBackground.useEffect.handleMouseMove"];
            // Track mouse leaving the window
            const handleMouseLeave = {
                "DotNetworkBackground.useEffect.handleMouseLeave": ()=>{
                    mouseRef.current = {
                        x: -1000,
                        y: -1000
                    }; // Move mouse off-screen
                }
            }["DotNetworkBackground.useEffect.handleMouseLeave"];
            // Add event listeners to document instead of canvas
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseleave", handleMouseLeave);
            // Main animation loop
            const animate = {
                "DotNetworkBackground.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    const dots = dotsRef.current;
                    const mouse = mouseRef.current;
                    // Update and draw each dot
                    dots.forEach({
                        "DotNetworkBackground.useEffect.animate": (dot, i)=>{
                            // Calculate mouse influence
                            const dx = mouse.x - dot.x;
                            const dy = mouse.y - dot.y;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            // Apply mouse attraction if within influence range
                            if (distance < CONFIG.mouseInfluence && distance > 0) {
                                const force = (CONFIG.mouseInfluence - distance) / CONFIG.mouseInfluence;
                                dot.vx += dx / distance * force * CONFIG.mouseAttraction;
                                dot.vy += dy / distance * force * CONFIG.mouseAttraction;
                            } else {
                                // Gradually return to original velocity when not influenced by mouse
                                dot.vx += (dot.originalVx - dot.vx) * CONFIG.returnToOriginal;
                                dot.vy += (dot.originalVy - dot.vy) * CONFIG.returnToOriginal;
                            }
                            // Update dot position
                            dot.x += dot.vx;
                            dot.y += dot.vy;
                            // Bounce off screen edges
                            if (dot.x < 0 || dot.x > canvas.width) {
                                dot.vx *= -1;
                                dot.originalVx *= -1;
                                dot.x = Math.max(0, Math.min(canvas.width, dot.x));
                            }
                            if (dot.y < 0 || dot.y > canvas.height) {
                                dot.vy *= -1;
                                dot.originalVy *= -1;
                                dot.y = Math.max(0, Math.min(canvas.height, dot.y));
                            }
                            // Draw the dot
                            ctx.beginPath();
                            ctx.arc(dot.x, dot.y, CONFIG.dotSize, 0, Math.PI * 2);
                            ctx.fillStyle = `${CONFIG.dotColor}, ${CONFIG.dotOpacity})`;
                            ctx.fill();
                            // Draw connections between dots
                            if (CONFIG.enableDotConnections) {
                                for(let j = i + 1; j < dots.length; j++){
                                    const dx = dots[j].x - dot.x;
                                    const dy = dots[j].y - dot.y;
                                    const distance = Math.sqrt(dx * dx + dy * dy);
                                    if (distance < CONFIG.connectionDistance) {
                                        const opacity = (1 - distance / CONFIG.connectionDistance) * CONFIG.lineOpacity;
                                        ctx.beginPath();
                                        ctx.moveTo(dot.x, dot.y);
                                        ctx.lineTo(dots[j].x, dots[j].y);
                                        ctx.strokeStyle = `${CONFIG.lineColor}, ${opacity})`;
                                        ctx.lineWidth = CONFIG.lineThickness;
                                        ctx.stroke();
                                    }
                                }
                            }
                            // Draw connection from mouse to nearby dots
                            if (CONFIG.enableMouseConnections) {
                                const mouseDx = mouse.x - dot.x;
                                const mouseDy = mouse.y - dot.y;
                                const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
                                if (mouseDistance < CONFIG.mouseInfluence && mouseDistance > 0) {
                                    const opacity = (1 - mouseDistance / CONFIG.mouseInfluence) * CONFIG.mouseConnectionOpacity;
                                    ctx.beginPath();
                                    ctx.moveTo(dot.x, dot.y);
                                    ctx.lineTo(mouse.x, mouse.y);
                                    ctx.strokeStyle = `${CONFIG.mouseLineColor}, ${opacity})`;
                                    ctx.lineWidth = CONFIG.lineThickness;
                                    ctx.stroke();
                                }
                            }
                        }
                    }["DotNetworkBackground.useEffect.animate"]);
                    animationRef.current = requestAnimationFrame(animate);
                }
            }["DotNetworkBackground.useEffect.animate"];
            animate();
            // Cleanup function
            return ({
                "DotNetworkBackground.useEffect": ()=>{
                    window.removeEventListener("resize", resizeCanvas);
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseleave", handleMouseLeave);
                    if (animationRef.current) {
                        cancelAnimationFrame(animationRef.current);
                    }
                }
            })["DotNetworkBackground.useEffect"];
        }
    }["DotNetworkBackground.useEffect"], []); // Empty dependency array
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
            pointerEvents: "none"
        }
    }, void 0, false, {
        fileName: "[project]/src/components/DotNetworkBackground.tsx",
        lineNumber: 276,
        columnNumber: 5
    }, this);
};
_s(DotNetworkBackground, "MJz9lF4OogX8n/wIl76eerJpE2o=");
_c = DotNetworkBackground;
const __TURBOPACK__default__export__ = DotNetworkBackground;
var _c;
__turbopack_context__.k.register(_c, "DotNetworkBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_0f61bb4f._.js.map