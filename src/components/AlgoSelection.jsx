import { useAlgorithmContext } from "../context/algorithmSelectionContext";

const AlgoSelection = () => {
  const { algorithm, setAlgorithm, algorithmType, handleAlgorithmTypeChange } = useAlgorithmContext();

  return (
    <div className="flex flex-wrap justify-end gap-1 py-1">
      <select
        className="bg-transparent border p-3 border-gray-300 text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block"
        id="type-algorithm"
        value={algorithmType}
        onChange={(e) => handleAlgorithmTypeChange(e.target.value)}
      >
        <option value="sorting" className="text-black">
          Sorting Algos
        </option>
        <option value="searching" className="text-black">
          Searching Algos
        </option>
      </select>
      {algorithmType == "sorting" ? (
        <select
          className="bg-transparent border p-2 border-gray-300 text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block"
          id="algorithm"
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          <option value="bubbleSort" className="text-black">
            Bubble Sort
          </option>
          <option value="selectionSort" className="text-black">
            Selection Sort
          </option>
          <option value="insertionSort" className="text-black">
            Insertion Sort
          </option>
        </select>
      ) : (
        <select
          className="bg-transparent border
          p-2 border-gray-300 text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block"
          id="algorithm"
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          <option value="linearSearch" className="text-black">
            Linear Search
          </option>
          <option value="binarySearch" className="text-black">
            Binary Search
          </option>
          {/* <option value="ternarySearch" className="text-black">
            Ternary Search
          </option> */}
        </select>
      )}
    </div>
  );
};

export default AlgoSelection;
