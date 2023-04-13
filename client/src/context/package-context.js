import { createContext, useState } from "react";

export const PackageContext = createContext();

const PackageContextProvider = ({ children }) => {
  const [travelPackage, setTravelPackage] = useState();
  return (
    <PackageContext.Provider
      value={{
        travelPackage: travelPackage,
        setTravelPackage: setTravelPackage,
      }}
    >
      {children}
    </PackageContext.Provider>
  );
};

export default PackageContextProvider;
