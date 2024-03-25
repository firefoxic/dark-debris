import { normalize } from "node:path"

/**
 * Normalizes a given path by combining it with the base URL.
 *
 * @param {string} path - The path to be normalized.
 * @return {string} The normalized path.
 */
export function normalizePath(path) {
	return normalize(import.meta.env.BASE_URL + path)
}
