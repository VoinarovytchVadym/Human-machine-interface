import "./App.scss";
import ContentFrame from "./components/ContentFrame/ContentFrame";
import { FileProvider } from "./components/FileContext/FileContext";
import Header from "./components/Header/Header";

function App() {
  return (
    <FileProvider>
      <Header />
      <ContentFrame />
    </FileProvider>
  );
}

export default App;
