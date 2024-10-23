import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./Pages/Home";
import SingleMovie from "./Pages/SingleMovie";
import Error from "./Pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<SingleMovie/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
