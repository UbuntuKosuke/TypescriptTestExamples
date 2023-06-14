import { toUpperCase } from "../app/Util";

describe("toUpperCase", () => {
  it("should return the input string in uppercase", () => {
    const input = "hello world";
    const expectedOutput = "HELLO WORLD";

    const result = toUpperCase(input);

    expect(result).toBe(expectedOutput);
  });

  it("should return an empty string if the input is an empty string", () => {
    const input = "";
    const expectedOutput = "";

    const result = toUpperCase(input);

    expect(result).toBe(expectedOutput);
  });
});
