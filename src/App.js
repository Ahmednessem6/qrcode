import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
      <Route path="/Result" element={<Home />}/>
      
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
