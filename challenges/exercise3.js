export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let arraySmallNums = [];
  nums.forEach((element) => {
    if (element < 1) {
      arraySmallNums.push(element);
    }
  });
  return arraySmallNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter((word) => word.charAt(0) === char);
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(
    (word) =>
      word.charAt(0) === "t" && word.charAt(1) === "o" && word.charAt(2) === " "
  );
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const result = [];
  nums.map((item) => {
    if (Number.isInteger(item)) result.push(item);
  });
  return result;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  let arrayOfCityFromUser = [];
  users.forEach((user) => {
    arrayOfCityFromUser.push(user.data.city.displayName);
  });
  return arrayOfCityFromUser;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.round(Math.sqrt(nums[i]) * 100) / 100;
  }
  return nums;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let foundSentences = [];
  for (let i = 0; i < sentences.length; i++) {
    if (
      sentences[i].includes(str) ||
      sentences[i].toLowerCase().includes(str.toLowerCase())
    ) {
      foundSentences.push(sentences[i]);
    }
  }
  return foundSentences;
}
export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  let largestNumber = [0, 0, 0, 0, 0];
  for (let arrayIndex = 0; arrayIndex < triangles.length; arrayIndex++) {
    for (
      let subArrayIndex = 0;
      subArrayIndex < triangles[arrayIndex].length;
      subArrayIndex++
    ) {
      if (triangles[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {
        largestNumber[arrayIndex] = triangles[arrayIndex][subArrayIndex];
      }
    }
  }

  return largestNumber;
}
