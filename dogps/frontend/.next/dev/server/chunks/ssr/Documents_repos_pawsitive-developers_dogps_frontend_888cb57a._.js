module.exports = [
"[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/dog-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/pawsitive-developers/dogps/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
// dog = one dog object from dogs-data.ts
// isFavorite = true/false
// onToggleFavorite = function that takes a dog id
function DogCard({ dog, isFavorite, onToggleFavorite }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "dog-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: isFavorite ? "favorite-btn favorited" : "favorite-btn",
                onClick: ()=>onToggleFavorite(dog.id),
                children: isFavorite ? "\u2665" : "\u2661"
            }, void 0, false, {
                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/dog-card.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dog-card-image",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dog-card-info",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dog-card-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "dog-card-name",
                                children: dog.name
                            }, void 0, false, {
                                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/dog-card.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "dog-card-breed",
                        children: dog.breed
                    }, void 0, false, {
                        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/dog-card.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dog-card-meta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: dog.location
                            }, void 0, false, {
                                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/dog-card.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
const __TURBOPACK__default__export__ = DogCard;
}),
"[project]/Documents/repos/pawsitive-developers/dogps/frontend/lib/dogs-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/favorites.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/pawsitive-developers/dogps/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/pawsitive-developers/dogps/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$components$2f$dog$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/pawsitive-developers/dogps/frontend/components/dog-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$lib$2f$dogs$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/pawsitive-developers/dogps/frontend/lib/dogs-data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function FavoritesPage() {
    // favorites is a list of dog ids like ["1", "3"]
    const [favorites, setFavorites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // filter dropdowns
    const [breedFilter, setBreedFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [ageFilter, setAgeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
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
    // get only the dogs that are favorited, then apply filters
    const favoriteDogs = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$lib$2f$dogs$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dogs"].filter((dog)=>favorites.includes(dog.id)).filter((dog)=>{
        if (breedFilter && dog.breed !== breedFilter) return false;
        if (ageFilter && dog.ageCategory !== ageFilter) return false;
        return true;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "favorites-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "favorites-title",
                children: "Favorites"
            }, void 0, false, {
                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/favorites.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "favorites-subtitle",
                children: "Dogs you have favorited will appear here. Heart a dog on the Find a Dog page to add them."
            }, void 0, false, {
                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/favorites.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "favorites-filters",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "filter-label",
                        children: "Filter by:"
                    }, void 0, false, {
                        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/favorites.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "filter-dropdown",
                        value: breedFilter,
                        onChange: (e)=>setBreedFilter(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "All Breeds"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/favorites.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$lib$2f$dogs$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["breeds"].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: b,
                                    children: b
                                }, b, false, {
                                    fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/favorites.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/favorites.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "filter-dropdown",
                        value: ageFilter,
                        onChange: (e)=>setAgeFilter(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "All Ages"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/favorites.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$lib$2f$dogs$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ageCategories"].map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: a,
                                    children: a
                                }, a, false, {
                                    fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/favorites.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/favorites.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/favorites.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            favorites.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "favorites-empty",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "empty-title",
                        children: "No favorites yet"
                    }, void 0, false, {
                        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/favorites.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "empty-subtitle",
                        children: "Browse dogs and click the heart icon to save them here."
                    }, void 0, false, {
                        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/favorites.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/favorites.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this) : favoriteDogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "favorites-empty",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "empty-title",
                        children: "No matches"
                    }, void 0, false, {
                        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/favorites.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "empty-subtitle",
                        children: "Try adjusting your filters."
                    }, void 0, false, {
                        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/favorites.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/favorites.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "favorites-grid",
                children: favoriteDogs.map((dog)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$pawsitive$2d$developers$2f$dogps$2f$frontend$2f$components$2f$dog$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        dog: dog,
                        isFavorite: favorites.includes(dog.id),
                        onToggleFavorite: toggleFavorite
                    }, dog.id, false, {
                        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/favorites.tsx",
                        lineNumber: 80,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/favorites.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/repos/pawsitive-developers/dogps/frontend/page-components/favorites.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = FavoritesPage;
}),
];

//# sourceMappingURL=Documents_repos_pawsitive-developers_dogps_frontend_888cb57a._.js.map