import AlgoSelection from "./AlgoSelection";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-14 bg-gray-700">
      <div className="flex justify-between items-center w-full max-w-[1200px] px-2 md:px-10">
        <p className="text-gray-400 font-bold text-xl">
          <span className="font-black text-xl text-white">Algo</span>Atlas
        </p>
        <AlgoSelection />
      </div>
    </div>
  );
};

export default Navbar;
