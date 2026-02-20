// Returns a random string to be used as a `key` prop on JSX elements.
//
// Returns a cryptographically-strong, randomly-generated UUID, so it's
// basically impossible for more than one element to have the same key.
//
// TODO: Consider replacing this with something less computationally expensive.
// Date.now() might be good.
export function getRandomKey(): string {
  return crypto.randomUUID();
}

// Detects whether the current device's primary pointer is a touch input
// (i.e. a phone or tablet, not a laptop with a mouse).
//
// Safe to use in both React components and Astro components: during
// Astro's SSG pass (where `window` is undefined), this evaluates to false.
export const isTouchDevice =
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: coarse)").matches;

// Inserts <wbr> (word break opportunity) tags before natural URL break points
// like /, ., -, ?, #, &, and =. Skips the protocol (e.g. "https://").
//
// Returns an HTML string, so it works in both:
//   - Astro components (via set:html)
//   - React components (wrap the logic in a component with JSX)
const BREAK_BEFORE = new Set(["/", ".", "-", "_", "?", "#", "&", "="]);

export function getBreakableUrl(url: string): string {
  let result = "";

  // Skip past the protocol (e.g. "https://") so we don't break there.
  const protocolEnd = url.indexOf("://");
  const startIdx = protocolEnd !== -1 ? protocolEnd + 3 : 0;
  if (startIdx > 0) result = url.slice(0, startIdx);

  for (let i = startIdx; i < url.length; i++) {
    const char = url[i];
    if (BREAK_BEFORE.has(char)) {
      result += "<wbr>";
    }
    result += char;
  }

  return result;
}
