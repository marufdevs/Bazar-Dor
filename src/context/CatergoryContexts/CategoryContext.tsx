"use client";

import { createContext, useState, type ReactNode } from "react";

type CategoryContextType = {
  categoryName: string;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
};

export const CategoryContext = createContext<CategoryContextType | null>(null);

const CategoryContextProvider = ({ children }: { children: ReactNode }) => {
  const [categoryName, setCategoryName] = useState("");

  const sharedData: CategoryContextType = {
    categoryName,
    setCategoryName,
  };

  return (
    <CategoryContext.Provider value={sharedData}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
