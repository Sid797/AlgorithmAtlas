import { useAlgorithmContext } from "../context/algorithmSelectionContext";
import SearchingDisplay from "../components/SearchingDisplay";
import AlgoDescription from "../components/AlgoDescription";
import Navbar from "../components/Navbar";

const SearchingPage = () => {
  const { algorithm } = useAlgorithmContext();
  return (
    <>
	  <Navbar />
      <SearchingDisplay algorithm={algorithm} />;
      <AlgoDescription algorithm={algorithm} />
    </>
  );
};

export default SearchingPage;
