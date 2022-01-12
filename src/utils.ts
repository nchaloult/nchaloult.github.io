import { v4 as uuidv4 } from 'uuid';

// Returns a random string to be used as a `key` prop on JSX elements.
//
// Returns a cryptographically-strongly randomly generated UUID (what a
// mouthful), so it's basically impossible for more than one element to have the
// same key.
export function getRandomKey(): string {
  return uuidv4();
}
