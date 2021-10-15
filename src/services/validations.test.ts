import { email, insuranceNumber, onlyLetters } from "./validations";

describe("email validation", () => {
  test("should return false on empty string", () => {
    expect(email("")).toBe(false);
  });

  test("should return true on valid email", () => {
    expect(email("asdasd@sdfsdf.com")).toBe(true);
  });

  test("should return false on input asdasd@sdfsdf", () => {
    expect(email("asdasd@sdfsdf")).toBe(false);
  });

  test("should return false on input @sdfsdf.com", () => {
    expect(email("@sdfsdf.com")).toBe(false);
  });
});

describe("insuranceNumber validation", () => {
  test("should return false on empty string", () => {
    expect(insuranceNumber("")).toBe(false);
  });

  test("should return true on valid insurance number SN123456G", () => {
    expect(insuranceNumber("SN123456G")).toBe(true);
  });

  test("should return false on invalid insurance number ASSadsasd", () => {
    expect(insuranceNumber("ASSadsasd")).toBe(false);
  });

  test("should return false on invalid insurance number 12345", () => {
    expect(insuranceNumber("12345")).toBe(false);
  });
});

describe("onlyletters validation", () => {
  test("should return false on empty string", () => {
    expect(onlyLetters("")).toBe(false);
  });

  test("should return true on valid input ASSadsasd", () => {
    expect(onlyLetters("ASSadsasd")).toBe(true);
  });

  test("should return false on invalid input ASSadsasd1234", () => {
    expect(onlyLetters("ASSadsasd1234")).toBe(false);
  });

  test("should return false on invalid input 12123e", () => {
    expect(onlyLetters("12345")).toBe(false);
  });
});
