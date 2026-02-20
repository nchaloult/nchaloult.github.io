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
