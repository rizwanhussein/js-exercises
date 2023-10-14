export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let index = nums.indexOf(n);
  if (index >= 0 && index < nums.length - 1) {
    return nums[index + 1];
  }
  if (index === -1 || index === nums.length - 1) {
    return null;
  }
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

  let countForZero = 0;
  let countForOne = 0;

  for (let i = 0, length = str.length; i < length; i++) {
    if (str[i] === "0") {
      countForZero++;
    } else {
      countForOne++;
    }
  }

  return {
    0: countForZero,
    1: countForOne,
  };
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return parseFloat(n.toString().split("").reverse().join(""));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  let total = 0;
  for (let outerLoop = 0; outerLoop < arrs.length; outerLoop++) {
    {
      for (let innerLoop = 0; innerLoop < arrs[outerLoop].length; innerLoop++) {
        total += arrs[outerLoop][innerLoop];
      }
    }
  }
  return total;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
