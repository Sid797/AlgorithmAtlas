import Navbar from "./components/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import SortingPage from "./pages/SortingPage";
import SearchingPage from "./pages/SearchingPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      
      <Routes>
		<Route path="/" element={<HomePage />} />
        <Route path="/sorting" element={<SortingPage />} />
        <Route path="/searching" element={<SearchingPage />} />
      </Routes>
    </>
  );
};

export default App;
