import { getStringInfo, toUpperCase } from "../app/Util";

describe("toUpperCase", () => {
  it("should return uppercase of valid string", () => {
    // arrange:
    const sut = toUpperCase;
    const expected = "ABC";

    // act:
    const actual = sut("abc");

    // assert
    expect(actual).toBe(expected);
  });
  describe("getStringInfo for arg My-String", () => {
    test("return right length", () => {
      const actual = getStringInfo("My-String");
      expect(actual.characters.length).toBe(9);
      expect(actual.characters).toHaveLength(9);
    });
    test("return right lowercase", () => {
      const actual = getStringInfo("My-String");
      expect(actual.lowerCase).toBe("my-string");
    });
    test("return right Uppercase", () => {
      const actual = getStringInfo("My-String");
      expect(actual.upperCase).toBe("MY-STRING");
    });
    test("return right characters", () => {
      const actual = getStringInfo("My-String");
      expect(actual.characters).toEqual([
        "M",
        "y",
        "-",
        "S",
        "t",
        "r",
        "i",
        "n",
        "g",
      ]);
      expect(actual.characters).toContain<string>("M");
      expect(actual.characters).toEqual(
        expect.arrayContaining(["t", "r", "i", "n", "g", "M", "y", "-", "S"])
      );
    });
    test("return defined extraInfo ", () => {
      const actual = getStringInfo("My-String");
      expect(actual.extraInfo).toBeDefined();
    });
    test("return right extraInfo ", () => {
      const actual = getStringInfo("My-String");
      expect(actual.extraInfo).toStrictEqual({});
    });
  });
});
