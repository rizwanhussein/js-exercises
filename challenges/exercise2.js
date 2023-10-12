export function getSquares(nums) {
  if (nums === undefined) throw new Error('nums is required');

  if (nums.length === 0) {
    return nums
  }
  else {
    for (let i = 0; i < nums.length; i++) {
      nums[i] = Math.pow(nums[i], 2);
    }
  }
  return nums;
}

export function camelCaseWords(words) {

  if (words === undefined) throw new Error('words is required');

  if (words.length === 1) {
    return words[0];
  }
  else if (words.length === 2) {
    let newWord = words[0].concat(words[1].charAt(0).toUpperCase());
    return newWord.concat(words[1].slice(1));
  }
  else if (words.length > 2) {
    let j = 1;
    do {
      words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1)
      j++;
    } while (j < words.length)
    return words.join("");
  }
}

export function getTotalSubjects(people) {
  let totalSubjects = 0;
  if (people === undefined) throw new Error('people is required');
  for (let key in people) {
    totalSubjects += people[key].subjects.length
  }
  return totalSubjects;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error('menu is required');
  if (!ingredient) throw new Error('ingredient is required');
  let ingredientArray = [];
  menu.forEach(element => {
    ingredientArray.push(element.ingredients);
  });
  for(let i = 0; i < ingredientArray.length; i++){
    for(let j = 0; j < ingredientArray[i].length; j++){
      if (ingredientArray[i][j] === ingredient){
        return true;
      }
    }
  }
return false;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error('arr1 is required');
  if (arr2 === undefined) throw new Error('arr2 is required');
  // Your code here!
}
