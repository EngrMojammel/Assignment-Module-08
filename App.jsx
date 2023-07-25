import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import NotFound from "./pages/NotFound";
 

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Income" element={<Income/>}/>
          <Route path="/Expense" element={<Expense/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
};

export default App;