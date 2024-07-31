/* eslint-disable react/prop-types */
import { useState } from "react";
import Element from "./Element";
import useSearchingAlgorithm from "../hooks/useSearchingAlgorithm";
import SearchingController from "./SearchingController";

const SearchingDisplay = ({ algorithm }) => {
  const [speed, setSpeed] = useState(800);
  const [arraySize, setArraySize] = useState(25);

  const {
    array,
    discardedPartArray,
    target,
    setTarget,
    isSearching,
    isNumberFound,
    checkedValue,
    startSearching,
    generateNewArray,
  } = useSearchingAlgorithm(algorithm, speed, arraySize);

  const controllerProps = {
    target,
    setTarget,
    isSearching,
    isNumberFound,
    startSearching,
    setSpeed,
    speed,
    setArraySize,
    arraySize,
    generateNewArray,
  };

  return (
    <div className="w-full min-h-[400px] flex flex-col items-center">
      <SearchingController {...controllerProps} />
      <div className="w-full gap-[1px] md:gap-1 flex flex-wrap justify-center items-center my-10 px-2 md:px-5">
        {array.map((number, index) => {
          return (
            <Element
              key={number}
              isNumberFound={isNumberFound && checkedValue == index}
              isCompared={checkedValue.includes(index)}
              isDiscarded={discardedPartArray.includes(index)}
              number={number}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchingDisplay;
