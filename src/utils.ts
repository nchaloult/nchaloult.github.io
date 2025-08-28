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
