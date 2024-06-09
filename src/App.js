import './App.css';
import AddDetailsOfExecution from "./page/AddDetailsOfExecution";
import {Route, Routes} from "react-router-dom";
import InquiryOperatingExpenses from "./page/InquiryOperatingExpenses";
import RetirementPensionCalculation from "./page/RetirementPensionCalculation";

function App() {
  return (
      <Routes>
        <Route path="/add" element={<AddDetailsOfExecution/>} />
        <Route path="/inquiry" element={<InquiryOperatingExpenses/>} />
        <Route path="/" element={<RetirementPensionCalculation/>} />
      </Routes>
  );
}

export default App;
