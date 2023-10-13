export function findSmallNums(nums) {
  if (!nums) throw new Error('nums is required');
  let arraySmallNums = [];
  nums.forEach(element => {
    if (element < 1) {
      arraySmallNums.push(element);
    }
  });
  return arraySmallNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error('names is required');
  if (!char) throw new Error('char is required');
  return names.filter((word) => word.charAt(0) === char);
}

export function findVerbs(words) {
  if (!words) throw new Error('words is required');
  return words.filter((word) => (word.charAt(0) === 't') &&
    (word.charAt(1) === 'o') && (word.charAt(2) === ' '))
}

export function getIntegers(nums) {
  if (!nums) throw new Error('nums is required');
  const result = [];
  console.log(nums);
  nums.map((item) => {
    if (Number.isInteger(item))
      result.push(item);})
  return result;

}

export function getCities(users) {
  if (!users) throw new Error('users is required');
  // Your code here
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error('nums is required');
  // Your code here
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error('sentences is required');
  if (!str) throw new Error('str is required');
  // Your code here
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error('triangles is required');
  // Your code here
}
