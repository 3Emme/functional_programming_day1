// Wrapped in class to export to application.test.js
// COUNTS COINS FROM $dollar+cents
export class Counter {
  // static quarter_Counter(amount) {
  //   const quarter_amount = ~~(amount / 0.25);
  //   return quarter_amount;
  // }
  // static dime_Counter(amount) {
  //   const dime_amount = ~~(amount / 0.1);
  //   return dime_amount;
  // }
  // static nickel_Counter(amount) {
  //   const nickel_amount = ~~(amount / 0.05);
  //   return nickel_amount;
  // }
  // static penny_Counter(amount) {
  //   const penny_amount = ~~(amount / 0.01);
  //   return penny_amount;
  // }
  // Earlier approach
  // static recursive_Counter(amount) {
  //   // let quarter_amount = 0;
  //   // let dime_amount = 0;
  //   // let nickel_amount = 0;
  //   // let penny_amount = 0;

  //   const total =
  //     quarter_amount * 0.25 +
  //     dime_amount * 0.1 +
  //     nickel_amount * 0.05 +
  //     penny_amount * 0.01;

  //   if (total == amount) {
  //     return `Done counting. Number of coins: Quarters: ${quarter_amount}, Dimes: ${dime_amount}, Nickels: ${nickel_amount}, Pennies: ${penny_amount}.`;
  //   } else {
  //     // quarter_amount = Counter.quarter_Counter(amount);
  //     if (total == amount) {
  //       const quarter_amount = ~~(amount / 0.25);
  //       return quarter_amount;
  //     } else {
  //       if (total == amount) {
  //         return (dime_amount = Counter.dime_Counter(amount));
  //       } else {
  //         if (total == amount) {
  //           return (nickel_amount = Counter.nickel_Counter(amount));
  //         } else {
  //           return (penny_Counter = Counter.penny_Counter(amount));
  //         }
  //       }
  //     }
  //   }
  // }

  static recursive_Quarter(count_Amount, quarter_Amount) {
    if (count_Amount < 0.25) {
      return quarter_Amount;
    } else {
      if (quarter_Amount == null) {
        quarter_Amount = 0;
      }
      // console.log("quarter_Amount: " + quarter_Amount);
      return Counter.recursive_Quarter(count_Amount - 0.25, quarter_Amount + 1);
    }
  }

  static recursive_Dime(count_Amount, dime_Amount) {
    if (count_Amount < 0.1) {
      return dime_Amount;
    } else {
      if (dime_Amount == null) {
        dime_Amount = 0;
      }
      // console.log("dime_Amount: " + dime_Amount);
      return Counter.recursive_Dime(count_Amount - 0.1, dime_Amount + 1);
    }
  }
  static recursive_Nickel(count_Amount, nickel_Amount) {
    if (count_Amount < 0.05) {
      return nickel_Amount;
    } else {
      if (nickel_Amount == null) {
        nickel_Amount = 0;
      }
      // console.log("nickel_Amount: " + nickel_Amount);
      return Counter.recursive_Nickel(count_Amount - 0.05, nickel_Amount + 1);
    }
  }

  static recursive_Penny(count_Amount, penny_Amount) {
    if (count_Amount < 0.0) {
      return penny_Amount;
    } else {
      if (penny_Amount == null) {
        penny_Amount = 0;
      }
      // console.log("penny_Amount: " + penny_Amount);
      return Counter.recursive_Penny(count_Amount - 0.01, penny_Amount + 1);
    }
  }

  static recursive_Coins(initial_amount) {
    let quarter_count = Counter.recursive_Quarter(initial_amount);
    let quarters = Counter.recursive_Quarter(initial_amount);
    let quarter_remainder = initial_amount - quarter_count * 0.25;
    let dimes = Counter.recursive_Dime(quarter_remainder);
    let dime_remainder = quarter_remainder - Counter.recursive_Dime(quarter_remainder) * 0.1;
    let nickels = Counter.recursive_Nickel(dime_remainder);
    let nickel_remainder = dime_remainder - nickels * 0.05;
    let pennies = Counter.recursive_Penny(nickel_remainder);
    return `Done counting. Number of coins: Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}.`;
  }
}

// console.log(Counter.recursive_Counter(0.66))
// console.log(Counter.recursive_Quarter(2));
// console.log(Counter.recursive_Dime(0.6));
// console.log(Counter.recursive_Nickel(0.96));
