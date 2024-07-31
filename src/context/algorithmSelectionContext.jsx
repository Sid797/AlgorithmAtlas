/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AlgorithmContext = createContext();

export const AlgorithmProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [algorithm, setAlgorithm] = useState("bubbleSort");
  const [algorithmType, setAlgorithmType] = useState("sorting");

  useEffect(() => {
    const { pathname } = location;

    setAlgorithmType(pathname === "/searching" ? "searching" : "sorting");
    setAlgorithm(pathname === "/sorting" ? "bubbleSort" : "linearSearch");
  }, [location]);

  const handleAlgorithmTypeChange = (algorithmType) => {
    setAlgorithmType(algorithmType);
    setAlgorithm(algorithmType === "sorting" ? "bubbleSort" : "linearSearch");
    navigate(algorithmType === "sorting" ? "/sorting" : "/searching");
  };

  return (
    <AlgorithmContext.Provider value={{ algorithm, setAlgorithm, algorithmType, handleAlgorithmTypeChange }}>
      {children}
    </AlgorithmContext.Provider>
  );
};

export const useAlgorithmContext = () => useContext(AlgorithmContext);
