export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
  else{
    return sandwich.fillings;
  }

}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
	return (person.city === 'Manchester');
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	if ((people >= 1) && (people <= 40))
  {
    return 1;
  }
  else if ((people >= 41) && (people <= 80))
  {
    return 2;
  }
  else if ((people >= 81) && (people <= 120))
  {
    return 3;
  }
  else{
    if ((people % 40) === 0){
      return Math.floor(people/40);
    }
    else{
      return Math.floor(people/40) + 1;
    }
 }
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
  let count = 0;
  arr.forEach((animalType) => {
    if (animalType === 'sheep'){
      count++;
    }
});
return count;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
}
