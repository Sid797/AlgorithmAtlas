/* eslint-disable react/prop-types */

const SearchingController = ({
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
}) => {
  return (
    <div className="w-full max-w-[1200px] min-h-10 flex justify-between my-5 px-2 md:px-10">
      <div className="flex gap-2">
        <span className="flex flex-col justify-between">
          <label htmlFor="speed" className="text-gray-600 text-xs">
            Searching Speed:{speed}
          </label>
          <input
            className="w-full"
            type="range"
            id="speed"
            min="10"
            max="1045"
            value={speed}
            disabled={isSearching}
            onChange={(e) => setSpeed(parseInt(e.target.value))}
          />
        </span>

        <div className="flex flex-col justify-between">
          <label htmlFor="arraySize" className="text-gray-600 text-xs">
            Array Size:{arraySize}
          </label>
          <input
            className="w-full"
            type="range"
            id="arraySize"
            min="10"
            max="100"
            disabled={isSearching}
            value={arraySize}
            onChange={(e) => setArraySize(parseInt(e.target.value))}
          />
        </div>

        <div className="flex flex-col justify-between">
          <label htmlFor="target" className="text-gray-600 text-xs">
            Target value:
          </label>
          <input
            className="w-full"
            type="number"
            min="1"
            max="1000"
            id="target"
            disabled={isSearching}
            value={target}
            onChange={(e) => setTarget(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="flex gap-2 items-end">
        <button
          className="px-2 py-1 bg-blue-600 text-white text-sm rounded-lg disabled:grayscale"
          onClick={generateNewArray}
          disabled={isSearching}
        >
          Reset
        </button>

        <button
          className="px-2 py-1 bg-blue-600 text-white text-sm rounded-lg disabled:grayscale"
          onClick={startSearching}
          disabled={isSearching || target == 0 || isNumberFound}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchingController;
