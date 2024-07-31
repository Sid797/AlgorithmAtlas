export const generateNumberArray = (arrayLength) => {
  const array = [20];
  let currentNumber = 20;
  for (let i = 1; i < arrayLength; i++) {
    currentNumber += 5;
    array.push(currentNumber);
  }

  for (let i = arrayLength - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};
