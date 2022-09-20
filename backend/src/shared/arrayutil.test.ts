import { contains } from "./arrayutil";

test("does contains work properly", () => {
    expect(contains([1, 2, 3], 4)).toBe(false);
    expect(contains(["Hello", "World"], "!")).toBe(false);

    expect(contains([1, 2, 3], 3)).toBe(true);
    expect(contains(["Hello", "World"], "World")).toBe(true);
});