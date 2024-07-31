import AlgoDescription from "../components/AlgoDescription";
import SortingDisplay from "../components/SortingDisplay";
import { useAlgorithmContext } from "../context/algorithmSelectionContext";
import Navbar from "../components/Navbar";


const SortingPage = () => {
  const { algorithm } = useAlgorithmContext();
  return (
    <>
	  <Navbar />
      <SortingDisplay algorithm={algorithm} />
      <AlgoDescription algorithm={algorithm} />
    </>
  );
};

export default SortingPage;
