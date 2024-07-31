/* eslint-disable react/prop-types */
import { useState } from "react";
import useSortingAlgorithm from "../hooks/useSortingAlgorithm";
import Bar from "./Bar";
import SortingController from "./SortingController";

const SortingDisplay = ({ algorithm }) => {
  const [speed, setSpeed] = useState(800);
  const [arraySize, setArraySize] = useState(25);

  const { array, isSorting, comparedValues, startSorting, generateNewArray, isSorted } = useSortingAlgorithm(
    algorithm,
    speed,
    arraySize
  );

  const controllerProps = {
    isSorting,
    startSorting,
    setSpeed,
    speed,
    setArraySize,
    arraySize,
    generateNewArray,
    isSorted,
  };

  return (
    <div className="w-full min-h-[400px] flex flex-col items-center">
      <SortingController {...controllerProps} />
      <div className="flex w-full gap-[1px] md:gap-1 justify-center items-start mb-10 px-2 md:px-5">
        {array.map((number, index) => {
          return <Bar key={number} isSorted={isSorted} isCompared={comparedValues.includes(index)} size={number}></Bar>;
        })}
      </div>
    </div>
  );
};

export default SortingDisplay;
