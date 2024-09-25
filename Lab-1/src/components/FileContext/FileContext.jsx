import React, { createContext, useContext, useState } from "react";

// Створюємо контекст
const FileContext = createContext();

// Створюємо провайдер
export const FileProvider = ({ children }) => {
  const [fileContent, setFileContent] = useState("");

  return (
    <FileContext.Provider value={{ fileContent, setFileContent }}>
      {children}
    </FileContext.Provider>
  );
};

// Хук для використання контексту
export const useFileContext = () => useContext(FileContext);
