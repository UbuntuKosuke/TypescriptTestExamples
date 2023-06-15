import { StringUtils, getStringInfo, toUpperCase } from "../app/Util";

describe.only("StringUtils tests", () => {
  let sut: StringUtils;

  beforeEach(() => {
    sut = new StringUtils();
    console.log("start up");
  });

  it("Should return correct uppercase", () => {
    const actual = sut.toUpperCase("abc");
    expect(actual).toBe("ABC");
  });
  it("Should throw error on invalid argument - function", () => {
    function expectError() {
      const actual = sut.toUpperCase("");
    }
    expect(expectError).toThrow();
    expect(expectError).toThrowError("Invalid argument!");
    console.log("Actual test");
  });

  it("Should throw error on invalid argument - arrow function", () => {
    expect(() => {
      sut.toUpperCase("");
    }).toThrowError("Invalid argument!");
    console.log("Actual test");
  });

  it.only("Should throw error on invalid argument - try catch block", (done) => {
    try {
      sut.toUpperCase("");
      done("getStringInfo should throw error for invlaid arg");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty("message", "Invalid argument!");
      done();
    }
  });
});

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

  describe("toUpperCase examples", () => {
    it.each([
      { input: "abc", expected: "ABC" },
      { input: "My-String", expected: "MY-STRING" },
      { input: "def", expected: "DEF" },
    ])("$input toUpperCase should be $expected", ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
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
