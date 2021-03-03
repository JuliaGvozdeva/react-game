export default function generateElements(sizeGame) {
  const endItem = sizeGame * sizeGame;
  let numberArray = [];
  let random = getRandomIntInclusive(1, endItem);

  for (let i = 1; i <= endItem; i++) {
    while (numberArray.indexOf(random) !== -1) {
      random = getRandomIntInclusive(1, endItem);
    }
    numberArray.push(random);
  }

  let e = Math.ceil((numberArray.indexOf(endItem) + 1) / sizeGame);
  let summ = checkSolution(numberArray, endItem);

  if ((summ + e) % 2 !== 0) {
    generateElements(sizeGame);
  }

  return numberArray;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkSolution(numberArray, endItem) {
  let n = 0;
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] !== endItem) {
      for (let j = i; j < numberArray.length; j++) {
        if (numberArray[i] > numberArray[j] && numberArray[j] !== endItem) {
          n++;
        }
      }
    }
  }
  return n;
}