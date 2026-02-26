(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/repos/pawsitive-developers/dogps/frontend/lib/dogs-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// List of all dogs available for adoption
__turbopack_context__.s([
    "ageCategories",
    ()=>ageCategories,
    "breeds",
    ()=>breeds,
    "dogs",
    ()=>dogs
]);
const dogs = [
    {
        id: "1",
        name: "Buddy",
        breed: "Golden Retriever",
        age: "3 years",
        ageCategory: "Adult",
        gender: "Male",
        location: "Irvine, CA",
        image: "/images/dog-1.jpg"
    },
    {
        id: "2",
        name: "Bella",
        breed: "Labrador Retriever",
        age: "8 months",
        ageCategory: "Puppy",
        gender: "Female",
        location: "San Diego, CA",
        image: "/images/dog-2.jpg"
    },
    {
        id: "3",
        name: "Max",
        breed: "Beagle",
        age: "5 years",
        ageCategory: "Adult",
        gender: "Male",
        location: "Los Angeles, CA",
        image: "/images/dog-3.jpg"
    },
    {
        id: "4",
        name: "Luna",
        breed: "German Shepherd",
        age: "2 years",
        ageCategory: "Adult",
        gender: "Female",
        location: "Irvine, CA",
        image: "/images/dog-4.jpg"
    },
    {
        id: "5",
        name: "Charlie",
        breed: "Corgi",
        age: "4 years",
        ageCategory: "Adult",
        gender: "Male",
        location: "San Francisco, CA",
        image: "/images/dog-5.jpg"
    },
    {
        id: "6",
        name: "Sasha",
        breed: "Siberian Husky",
        age: "9 years",
        ageCategory: "Senior",
        gender: "Female",
        location: "Portland, OR",
        image: "/images/dog-6.jpg"
    }
];
const breeds = [
    ...new Set(dogs.map((d)=>d.breed))
].sort();
const ageCategories = [
    "Puppy",
    "Adult",
    "Senior"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/pawsitive-developers/dogps/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/pawsitive-developers/dogps/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$lib$2f$dogs$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/pawsitive-developers/dogps/frontend/lib/dogs-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// onSearch = function that receives { location, breed, age }
function HeroSection({ onSearch }) {
    _s();
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [breed, setBreed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [age, setAge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    function handleSubmit(e) {
        e.preventDefault();
        onSearch({
            location,
            breed,
            age
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hero",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hero-content",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-text",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: [
                                "Find your ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "highlight",
                                    children: "best friend"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx",
                                    lineNumber: 22,
                                    columnNumber: 23
                                }, this),
                                " today"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Use our search feature to find the newest addition to your home. Sort by location, age, and breed and sign in to save your favorites for later."
                        }, void 0, false, {
                            fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "hero-form",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "form-input",
                                            placeholder: "Enter your zipcode or city",
                                            value: location,
                                            onChange: (e)=>setLocation(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "find-dogs-btn",
                                            children: "Find Dogs"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "form-select",
                                            value: breed,
                                            onChange: (e)=>setBreed(e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Breed"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 17
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$lib$2f$dogs$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breeds"].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: b,
                                                        children: b
                                                    }, b, false, {
                                                        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "form-select",
                                            value: age,
                                            onChange: (e)=>setAge(e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Age"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$lib$2f$dogs$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ageCategories"].map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: a,
                                                        children: a
                                                    }, a, false, {
                                                        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-image",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/hero-dog.jpg",
                        alt: "Happy dog on a beach"
                    }, void 0, false, {
                        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "Xp6Oe/f0zElAgEmO6sGZtLwZA5E=");
_c = HeroSection;
const __TURBOPACK__default__export__ = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/dog-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/pawsitive-developers/dogps/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
;
// dog = one dog object from dogs-data.ts
// isFavorite = true/false
// onToggleFavorite = function that takes a dog id
function DogCard({ dog, isFavorite, onToggleFavorite }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "dog-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: isFavorite ? "favorite-btn favorited" : "favorite-btn",
                onClick: ()=>onToggleFavorite(dog.id),
                children: isFavorite ? "\u2665" : "\u2661"
            }, void 0, false, {
                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/dog-card.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dog-card-image",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: dog.image,
                    alt: dog.name
                }, void 0, false, {
                    fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/dog-card.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/dog-card.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dog-card-info",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dog-card-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "dog-card-name",
                                children: dog.name
                            }, void 0, false, {
                                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/dog-card.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: dog.gender === "Male" ? "dog-card-gender male" : "dog-card-gender female",
                                children: dog.gender
                            }, void 0, false, {
                                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/dog-card.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/dog-card.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "dog-card-breed",
                        children: dog.breed
                    }, void 0, false, {
                        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/dog-card.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dog-card-meta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: dog.location
                            }, void 0, false, {
                                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/dog-card.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: dog.age
                            }, void 0, false, {
                                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/dog-card.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/dog-card.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/dog-card.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/dog-card.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = DogCard;
const __TURBOPACK__default__export__ = DogCard;
var _c;
__turbopack_context__.k.register(_c, "DogCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/find-a-dog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/pawsitive-developers/dogps/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/pawsitive-developers/dogps/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/hero-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$components$2f$dog$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/dog-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$lib$2f$dogs$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/pawsitive-developers/dogps/frontend/lib/dogs-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function FindADogPage() {
    _s();
    // favorites is a list of dog ids like ["1", "3"]
    const [favorites, setFavorites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // search filters
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        location: "",
        breed: "",
        age: ""
    });
    // when the user clicks "Find Dogs" in the hero
    function handleSearch(newFilters) {
        setFilters(newFilters);
    }
    // add or remove a dog from favorites
    function toggleFavorite(id) {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter((f)=>f !== id));
        } else {
            setFavorites([
                ...favorites,
                id
            ]);
        }
    }
    // filter dogs based on search
    const filteredDogs = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$lib$2f$dogs$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dogs"].filter((dog)=>{
        if (filters.breed && dog.breed !== filters.breed) return false;
        if (filters.age && dog.ageCategory !== filters.age) return false;
        if (filters.location && !dog.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
        return true;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSearch: handleSearch
            }, void 0, false, {
                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/find-a-dog.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "results-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "results-heading",
                        children: [
                            "Available Dogs ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "results-count",
                                children: [
                                    "(",
                                    filteredDogs.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/find-a-dog.tsx",
                                lineNumber: 43,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/find-a-dog.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    filteredDogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "no-results",
                        children: "No dogs found. Try adjusting your filters."
                    }, void 0, false, {
                        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/find-a-dog.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dog-grid",
                        children: filteredDogs.map((dog)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$components$2f$dog$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                dog: dog,
                                isFavorite: favorites.includes(dog.id),
                                onToggleFavorite: toggleFavorite
                            }, dog.id, false, {
                                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/find-a-dog.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/find-a-dog.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/find-a-dog.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/find-a-dog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(FindADogPage, "0afmF2v5lIUhDqrjzHGr3Yj76aM=");
_c = FindADogPage;
const __TURBOPACK__default__export__ = FindADogPage;
var _c;
__turbopack_context__.k.register(_c, "FindADogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_repos_pawsitive-developers_dogps_frontend_d8cc7434._.js.map