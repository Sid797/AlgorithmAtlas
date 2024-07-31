const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const bubbleSort = async (array, setArray, setIsSorting, setIsSorted, setComparedValues, speed) => {
  setIsSorting(true);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      setComparedValues([j, j + 1]);
      await delay(1050 - speed);
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        setArray([...array]);
      }
    }
  }
  setIsSorting(false);
  setIsSorted(true);
};

export const selectionSort = async (array, setArray, setIsSorting, setIsSorted, setComparedValues, speed) => {
  setIsSorting(true);
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      setComparedValues([minIndex, j]);
      await delay(1050 - speed);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
      setArray([...array]);
    }
  }
  setIsSorting(false);
  setIsSorted(true);
};

export const insertionSort = async (array, setArray, setIsSorting, setIsSorted, setComparedValues, speed) => {
  setIsSorting(true);
  for (let i = 1; i < array.length; i++) {
    let currentElement = array[i];
    let lastIndex = i - 1;

    while (lastIndex >= 0 && array[lastIndex] > currentElement) {
      setComparedValues([lastIndex, lastIndex + 1]);
      await delay(1050 - speed);
      array[lastIndex + 1] = array[lastIndex];
      array[lastIndex] = currentElement;

      setArray([...array]);
      lastIndex--;
    }
  }
  setIsSorting(false);
  setIsSorted(true);
};
