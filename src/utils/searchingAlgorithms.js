const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const linearSearch = async (array, target, setIsSearching, setIsNumberFound, setCheckedValue, speed) => {
  setIsSearching(true);
  for (const [index, number] of array.entries()) {
    setCheckedValue([index]);
    if (target == number) {
      setIsNumberFound(true);
      break;
    }
    await delay(1050 - speed);
  }

  setIsSearching(false);
};

export const binarySearch = async (
  array,
  setDiscardedPartArray,
  target,
  setIsSearching,
  setIsNumberFound,
  setCheckedValue,
  speed
) => {
  setIsSearching(true);
  let start = 0;
  let end = array.length - 1;
  let discardedIndices = [];

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    setCheckedValue([middle]);
    await delay(1050 - speed);

    if (array[middle] === target) {
      setIsNumberFound(true);
      break;
    } else if (array[middle] < target) {
      for (let i = start; i <= middle; i++) {
        discardedIndices.push(i);
      }
      start = middle + 1;
    } else {
      for (let i = middle; i <= end; i++) {
        discardedIndices.push(i);
      }
      end = middle - 1;
    }
    setDiscardedPartArray([...discardedIndices]);
  }

  setIsSearching(false);
};

export const ternarySearch = async (
  array,
  setDiscardedPartArray,
  target,
  setIsSearching,
  setIsNumberFound,
  setCheckedValue,
  speed
) => {
  setIsSearching(true);
  let left = 0;
  let right = array.length - 1;
  let discardedIndices = [];

  while (left <= right) {
    const partitionSize = Math.floor((right - left) / 3);
    const mid1 = left + partitionSize;
    const mid2 = right - partitionSize;

    setCheckedValue([mid1, mid2]);
    await delay(1050 - speed);

    if (array[mid1] === target) {
      setCheckedValue([mid1]);
      setIsNumberFound(true);
      break;
    }

    if (array[mid2] === target) {
      setCheckedValue([mid2]);
      setIsNumberFound(true);
      break;
    }

    if (target < array[mid1]) {
      for (let i = mid1; i <= right; i++) {
        discardedIndices.push(i);
      }
      right = mid1 - 1;
    } else if (target > array[mid2]) {
      for (let i = left; i <= mid2; i++) {
        discardedIndices.push(i);
      }
      left = mid2 + 1;
    } else {
      for (let i = left; i <= mid1; i++) {
        discardedIndices.push(i);
      }
      for (let i = mid2; i <= right; i++) {
        discardedIndices.push(i);
      }
      left = mid1 + 1;
      right = mid2 - 1;
    }
    setDiscardedPartArray([...discardedIndices]);
  }

  setIsSearching(false);
};
