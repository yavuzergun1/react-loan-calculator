import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/form/Form";
import { DataProvider } from "./context/CalculateContext";
function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="form" element={<Form />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
