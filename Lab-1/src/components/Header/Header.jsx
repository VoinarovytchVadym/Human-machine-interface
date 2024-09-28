import React, { useState, useEffect } from "react";
import { useFileContext } from "../FileContext/FileContext"; // Шлях до вашого контексту

function Header() {
  const [fileMenuClicked, setFileMenuClicked] = useState(false);
  const { setFileContent } = useFileContext(); // Отримуємо функцію з контексту

  const HandleFileMenuClick = () => {
    setFileMenuClicked((prev) => !prev);
  };

  const HandleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const content = e.target.result;
        setFileContent(content); // Зберігаємо вміст у контекст
      };

      reader.readAsText(file);
    }
  };

  const handleDivClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="Header">
      <div className="HeaderTools">
        <div onClick={HandleFileMenuClick}>File</div>
      </div>
      {fileMenuClicked && (
        <ul className="File-dropdown">
          <li onClick={handleDivClick}>
            Open file
            <input
              id="fileInput"
              type="file"
              onChange={HandleFileSelect}
              accept=".txt"
              style={{ display: "none" }} // Сховати файл
            />
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
