/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/
// quarter = 25 cents, dime = 10, nickel = 5, penny = 1
const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * @param {number} cents
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */

function fewestCoinChange(cents) {

    var change = {};

    if (cents >= 25) {
        change['quarter'] = Math.floor(cents / 25);
        cents = cents % 25;
    }
    if (cents >= 10) {
        change['dime'] = Math.floor(cents / 10);
        cents = cents % 10;
    }
    if (cents >= 5) {
        change['nickle'] = Math.floor(cents / 5);
        cents = cents % 5;
    }
    if (cents > 0) {
        change['penny'] = cents;
    }
    return change;
}



function fewestCoinChange(cents) {
    let denoms = {
        'fifty': 50,
        'quarter': 25,
        'dime': 10,
        'nickel': 5,
        'penny': 1
    };
    let coins = {};
    for (let key in denoms) {
        if (cents >= denoms[key]) {
            coins[key] = Math.floor(cents / denoms[key]);
            cents %= denoms[key];
        }
    }
    return coins;

}

function fewestCoinChange(cents) {
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny = 0;
    let remaining = cents;
    let results = {};

    while (remaining >= 25) {
        remaining -= 25;
        quarter++;
    }
    while (remaining >= 10) {
        remaining -= 10;
        dime++;
    }
    while (remaining >= 5) {
        remaining -= 5;
        nickel++;
    }
    while (remaining >= 1) {
        remaining -= 1;
        penny++;
    }

    if (quarter != 0) {
        results.quarter = quarter;
    }
    if (dime != 0) {
        results.dime = dime;
    }
    if (nickel != 0) {
        results.nickel = nickel;
    }
    if (penny != 0) {
        results.penny = penny;
    }
    return results;
}



console.log(fewestCoinChange(cents1)); // { quarter: 1 }
console.log(fewestCoinChange(cents2)); // { quarter: 2 }
console.log(fewestCoinChange(cents3)); // { nickel: 1, penny: 4 }
console.log(fewestCoinChange(cents4)); // { quarter: 3, dime: 2, penny: 4 }