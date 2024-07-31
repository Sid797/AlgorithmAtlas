import { useEffect } from "react";
import { useState } from "react";
import { generateNumberArray } from "../utils/generateNumberArray";
import { binarySearch, linearSearch, ternarySearch } from "../utils/searchingAlgorithms";

const useSearchingAlgorithm = (searchingAlgorithm, speed, arrayLength) => {
  const [array, setArray] = useState([]);
  const [discardedPartArray, setDiscardedPartArray] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isNumberFound, setIsNumberFound] = useState(false);
  const [checkedValue, setCheckedValue] = useState([]);
  const [target, setTarget] = useState(0);

  const generateNewArray = () => {
    setArray(generateNumberArray(arrayLength).sort((a, b) => a - b));
    setIsNumberFound(false);
    setCheckedValue([]);
    setDiscardedPartArray([]);
  };

  useEffect(() => {
    generateNewArray();
  }, [arrayLength]);

  const startSearching = async () => {
    switch (searchingAlgorithm) {
      case "linearSearch":
        linearSearch(array, target, setIsSearching, setIsNumberFound, setCheckedValue, speed);
        break;
      case "binarySearch":
        binarySearch(array, setDiscardedPartArray, target, setIsSearching, setIsNumberFound, setCheckedValue, speed);
        break;
      case "ternarySearch":
        ternarySearch(array, setDiscardedPartArray, target, setIsSearching, setIsNumberFound, setCheckedValue, speed);
        break;

      default:
        break;
    }
  };

  return {
    array,
    discardedPartArray,
    target,
    setTarget,
    isSearching,
    isNumberFound,
    checkedValue,
    startSearching,
    generateNewArray,
  };
};

export default useSearchingAlgorithm;
