/* eslint-disable react/prop-types */

const Bar = ({ isSorted, isCompared, size }) => {
  const barColor = isSorted ? "bg-green-400 transition all duration-700" : isCompared ? "bg-red-500" : "bg-blue-500";

  return <div style={{ height: size, flexGrow: 1, flexShrink: 0 }} className={`${barColor}`}></div>;
};

export default Bar;
