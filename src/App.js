import './App.css';
import AddDetailsOfExecution from "./page/AddDetailsOfExecution";
import {Route, Routes} from "react-router-dom";
import InquaryOperatingExpenses from "./page/InquaryOperatingExpenses";

function App() {
  return (
      <Routes>
        <Route path="/add" element={<AddDetailsOfExecution/>} />
        <Route path="/" element={<InquaryOperatingExpenses/>} />
      </Routes>
  );
}

export default App;
