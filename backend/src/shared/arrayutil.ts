/**
 * Checks if a given array contains a object
 * Checks for the object using strict equals
 * Returns true if array.find's return type of not undefined
 * 
 * @param array The Array
 * @param object The Object
 * @returns Does array contain object
 */
export function contains<T> (array: T[], object: T): boolean {
    return typeof array.find(v => v === object) !== "undefined";
}