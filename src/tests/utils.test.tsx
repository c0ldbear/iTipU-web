import { describe, expect, test } from "vitest";
import { lowerCaseString } from "../utils/lowerCaseString.tsx";

describe("Utility function tests", () => {
  test("Five should be equal to five", () => {
    const Five = "Five";
    const five = lowerCaseString(Five);
    expect(five).toBe("five");
  });
});
