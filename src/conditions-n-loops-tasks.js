/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }

  if (b > a && b > c) {
    return b;
  }

  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  function isCorrectSideLength(sideLength, otherSideLength1, otherSideLength2) {
    return (
      sideLength > Math.abs(otherSideLength1 - otherSideLength2) &&
      sideLength < otherSideLength1 + otherSideLength2
    );
  }

  return (
    isCorrectSideLength(a, b, c) &&
    isCorrectSideLength(b, c, a) &&
    isCorrectSideLength(c, a, b) &&
    new Set([a, b, c]).size === 2
  );
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const digits = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  let tens = '';
  for (let i = 0; i < Math.floor(num / 10); i += 1) {
    tens += 'X';
  }

  const digit = num % 10 !== 0 ? digits[(num % 10) - 1] : '';

  return `${tens}${digit}`;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '.':
        result += 'point';
        break;
      case ',':
        result += 'point';
        break;
      case '-':
        result += 'minus';
        break;
      default:
        result += '';
    }

    if (i !== numberStr.length - 1) {
      result += ' ';
    }
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length); i += 1) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length - 1; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const digitCount = String(num).length;
  for (let pos = 1; pos <= digitCount; pos += 1) {
    const currentDigit = Math.floor(
      (num - Math.floor(num / 10 ** pos) * 10 ** pos) / 10 ** (pos - 1)
    );
    if (currentDigit === digit) {
      return true;
    }
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 1; i < arr.length - 1; i += 1) {
    let leftSum = 0;
    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }

    let rightSum = 0;
    for (let j = i + 1; j < arr.length; j += 1) {
      rightSum += arr[j];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  function getNextDirection(direction) {
    switch (direction) {
      case '+1':
        return '-0';
      case '-0':
        return '-1';
      case '-1':
        return '+0';
      case '+0':
        return '+1';
      default:
        return '0';
    }
  }

  const matrix = new Array(size);
  for (let i = 0; i < size; i += 1) {
    matrix[i] = new Array(size);
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = 0;
    }
  }

  let i = 0;
  let j = 0;
  let di = '+0';
  let dj = '+1';
  for (let num = 1; num <= size * size; num += 1) {
    matrix[i][j] = num;
    const nextI = i + Number(di);
    const nextJ = j + Number(dj);
    if (
      nextI >= size ||
      nextI < 0 ||
      nextJ >= size ||
      nextJ < 0 ||
      matrix[nextI][nextJ] !== 0
    ) {
      di = getNextDirection(di);
      dj = getNextDirection(dj);
    }
    i += Number(di);
    j += Number(dj);
  }
  return matrix;
}
/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const rotatedMatrix = matrix;

  const swap = (i1, j1, i2, j2) => {
    const temp = rotatedMatrix[i1][j1];
    rotatedMatrix[i1][j1] = rotatedMatrix[i2][j2];
    rotatedMatrix[i2][j2] = temp;
  };

  for (let i = 0; i < rotatedMatrix.length; i += 1) {
    for (let j = 0; j < rotatedMatrix[i].length - i; j += 1) {
      swap(
        i,
        j,
        rotatedMatrix[i].length - j - 1,
        rotatedMatrix[i].length - i - 1
      );
    }
  }

  for (let i = 0; i < rotatedMatrix.length / 2; i += 1) {
    for (let j = 0; j < rotatedMatrix[i].length; j += 1) {
      swap(i, j, rotatedMatrix.length - i - 1, j);
    }
  }
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const array = arr;

  const swap = (i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  const partition = (start, end) => {
    const pivot = array[end];

    let p = start - 1;

    for (let i = start; i <= end; i += 1) {
      if (pivot > array[i]) {
        p += 1;
        swap(i, p);
      }
    }

    p += 1;
    swap(p, end);

    return p;
  };

  const quickSort = (start, end) => {
    if (start >= end) {
      return;
    }

    const p = partition(start, end);
    quickSort(start, p - 1);
    quickSort(p + 1, end);
  };

  quickSort(0, array.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  function shuffle(initStr) {
    let shuffled = '';
    for (let i = 0; i < initStr.length; i += 2) {
      shuffled += initStr[i];
    }
    for (let i = 1; i < initStr.length; i += 2) {
      shuffled += initStr[i];
    }
    return shuffled;
  }

  const map = new Map();
  function cache(func, arg) {
    if (map.has(arg)) {
      return map.get(arg);
    }

    const result = func(arg);
    map.set(arg, result);
    return result;
  }

  let result = str;
  for (let i = 0; i < iterations; i += 1) {
    result = cache(shuffle, result);
  }

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  function splitNumber(num) {
    const digitsCount = Math.floor(Math.log10(num)) + 1;
    const digits = new Array(digitsCount);

    for (let i = 0; i < digitsCount; i += 1) {
      digits[i] =
        number - (number - Math.floor((number % 10 ** (i + 1)) / 10 ** i));
    }

    return digits;
  }

  function joinNumber(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i += 1) {
      num += arr[i] * 10 ** i;
    }
    return num;
  }

  function permutation(array, n, clbk) {
    if (n === array.length - 1) {
      clbk(array);
    }

    for (let i = n; i < array.length; i += 1) {
      const arr = [...array];
      const temp = arr[n];
      arr[n] = arr[i];
      arr[i] = temp;
      permutation(arr, n + 1, clbk);
    }
  }

  function findBigger(array, num) {
    let biggerNum = num;
    let biggerArr = array;

    permutation(array, 0, (arr) => {
      const currentNum = joinNumber(arr);
      if (currentNum > num && (num === biggerNum || currentNum < biggerNum)) {
        biggerNum = currentNum;
        biggerArr = arr;
      }
    });

    return [biggerNum, biggerArr];
  }

  let nearestBigger = number;
  const digits = splitNumber(number);

  for (let i = 1; i < digits.length; i += 1) {
    const subArr = [...digits].splice(0, i + 1);
    const subNum = joinNumber(subArr);

    const [biggerNum, biggerArr] = findBigger(subArr, subNum);

    if (biggerNum !== subNum) {
      digits.splice(0, i + 1, ...biggerArr);
      nearestBigger = joinNumber(digits);
      break;
    }
  }

  return nearestBigger;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
