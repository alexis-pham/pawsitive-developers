import express from "express";

const router = express.Router();

const GOOGLE_PLACES_KEY = process.env.GOOGLE_MAPS_API_KEY;
if (!GOOGLE_PLACES_KEY) throw new Error("Missing GOOGLE_PLACES_KEY");

function assertInput(input) {
  if (typeof input !== "string") return "";
  const trimmed = input.trim();
  // Keep it simple; you can tighten to digits-only if you ONLY want ZIP.
  if (trimmed.length < 1 || trimmed.length > 64) return "";
  return trimmed;
}

// GET /api/places/autocomplete?input=900
router.get("/autocomplete", async (req, res) => {
  const input = assertInput(req.query.input);
  const sessionToken = typeof req.query.sessionToken === "string" ? req.query.sessionToken : undefined;

  if (!input) return res.json({ suggestions: [] });

  // Autocomplete (New): POST https://places.googleapis.com/v1/places:autocomplete :contentReference[oaicite:2]{index=2}
  const resp = await fetch("https://places.googleapis.com/v1/places:autocomplete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": GOOGLE_PLACES_KEY,
      // FieldMask header is supported for Autocomplete (New) :contentReference[oaicite:3]{index=3}
      "X-Goog-FieldMask":
        "suggestions.placePrediction.placeId," +
        "suggestions.placePrediction.text.text," +
        "suggestions.placePrediction.types",
    },
    body: JSON.stringify({
      input,
      // Restrict to US (adjust for your needs)
      includedRegionCodes: ["US"],
      // Helps billing; generate per “typing session” (uuid v4 is typical) :contentReference[oaicite:4]{index=4}
      ...(sessionToken ? { sessionToken } : {}),
    }),
  });

  if (!resp.ok) {
    const errText = await resp.text();
    return res.status(502).json({ error: "Places autocomplete failed", details: errText });
  }

  const data = await resp.json();

  // Optional: filter to more ZIP-ish results (types vary).
  // Place types list shows postal_code_prefix/suffix as possible types. :contentReference[oaicite:5]{index=5}
  const raw = (data.suggestions ?? []).map((s) => s.placePrediction).filter(Boolean);

  const suggestions = raw.map((p) => ({
    placeId: p.placeId,
    label: p.text?.text ?? "",
    types: p.types ?? [],
  }));

  res.json({ suggestions });
});

// GET /api/places/details?placeId=...&sessionToken=...
router.get("/details", async (req, res) => {
  const placeId = typeof req.query.placeId === "string" ? req.query.placeId : "";
  const sessionToken = typeof req.query.sessionToken === "string" ? req.query.sessionToken : undefined;

  if (!placeId) return res.status(400).json({ error: "Missing placeId" });

  // Place Details (New): GET /v1/places/{placeId} with field mask header :contentReference[oaicite:6]{index=6}
  const url = new URL(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`);

  const resp = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": GOOGLE_PLACES_KEY,
      ...(sessionToken ? { "X-Goog-Session-Token": sessionToken } : {}),
      "X-Goog-FieldMask": "addressComponents,formattedAddress,location",
    },
  });

  if (!resp.ok) {
    const errText = await resp.text();
    return res.status(502).json({ error: "Places details failed", details: errText });
  }

  const place = await resp.json();

  // Extract ZIP from addressComponents (look for type === "postal_code")
  const components = place.addressComponents ?? [];
  const postal = components.find((c) => (c.types ?? []).includes("postal_code"));

  res.json({
    formattedAddress: place.formattedAddress ?? "",
    location: place.location ?? null, // lat/lng
    postalCode: postal?.longText ?? postal?.shortText ?? "",
    addressComponents: components,
  });
});

export default router;