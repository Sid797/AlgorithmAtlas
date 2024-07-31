/* eslint-disable react/prop-types */

const Element = ({ isNumberFound, isDiscarded, isCompared, number }) => {
  const getBarColor = () => {
    if (isNumberFound) return "bg-green-400 transition all duration-700";
    if (isDiscarded) return "bg-gray-500";
    if (isCompared) return "bg-red-500";
    return "bg-blue-500";
  };

  return (
    <div className={`${getBarColor()} w-10 h-10 text-white flex justify-center items-center text-sm`}>{number}</div>
  );
};

export default Element;
