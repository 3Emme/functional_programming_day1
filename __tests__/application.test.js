import { Counter } from "../application.js";

describe("Counter", () => {
  test("Returns number of quarters for given amount", () => {
      // Tests integer division is working properly and removing fraction remainder.
      expect(Counter.recursive_Quarter(0.44)).toEqual(1);
  });
  test("Returns number of dimes for given amount", () => {
    // Tests integer division is working properly and removing fraction remainder.
    expect(Counter.recursive_Dime(0.11)).toEqual(1);
});
  test("Returns number of nickels for given amount", () => {
    // Tests integer division is working properly and removing fraction remainder.
    expect(Counter.recursive_Nickel(0.07)).toEqual(1);
  });
  test("Returns number of pennies for given amount", () => {
    // Tests integer division is working properly and removing fraction remainder.
    expect(Counter.recursive_Penny(0.04)).toEqual(4);
  });

  test("Returns number of coins of given types for an amount", () => {
    // Tests integer division is working properly and removing fraction remainder.
    expect(Counter.recursive_Coins(0.41)).toEqual("Done counting. Number of coins: Quarters: 1, Dimes: 1, Nickels: 1, Pennies: 1.");
  });
});

// describe('SolarProfile', () => {
//   let profile1;
//   beforeEach(() => {
//     profile1 = new SolarProfile(28,35)
// });

//   test('Test 1: first test desc', () =>{
//     expect(profile1.earthAge).toEqual(28);
//   });
