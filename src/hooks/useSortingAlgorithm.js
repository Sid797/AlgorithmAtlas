import { useEffect } from "react";
import { useState } from "react";
import { generateNumberArray } from "../utils/generateNumberArray";
import { bubbleSort, insertionSort, selectionSort } from "../utils/sortingAlgorithms";

const useSortingAlgorithm = (sortingAlgorithm, speed, arrayLength) => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [comparedValues, setComparedValues] = useState([]);

  useEffect(() => {
    setArray(generateNumberArray(arrayLength));
    setIsSorted(false);
  }, [arrayLength]);

  const generateNewArray = () => {
    setArray(generateNumberArray(arrayLength));
    setIsSorted(false);
  };

  const startSorting = async () => {
    switch (sortingAlgorithm) {
      case "bubbleSort":
        bubbleSort(array, setArray, setIsSorting, setIsSorted, setComparedValues, speed);
        break;
      case "selectionSort":
        selectionSort(array, setArray, setIsSorting, setIsSorted, setComparedValues, speed);
        break;
      case "insertionSort":
        insertionSort(array, setArray, setIsSorting, setIsSorted, setComparedValues, speed);
        break;

      default:
        break;
    }
  };

  return { array, isSorting, isSorted, comparedValues, startSorting, generateNewArray };
};

export default useSortingAlgorithm;
