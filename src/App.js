import './App.css';
import AddDetailsOfExecution from "./page/AddDetailsOfExecution";
import {Route, Routes} from "react-router-dom";
import InquiryOperatingExpenses from "./page/InquiryOperatingExpenses";
import RetirementPensionCalculation from "./page/RetirementPensionCalculation";
import InquirySeveranceAmount from "./page/InquirySeveranceAmount";

function App() {
  return (
      <Routes>
        <Route path="/add" element={<AddDetailsOfExecution/>} />
        <Route path="/inquiry" element={<InquiryOperatingExpenses/>} />
        <Route path="/retire" element={<RetirementPensionCalculation/>} />
        <Route path="/" element={<InquirySeveranceAmount/>} />
      </Routes>
  );
}

export default App;
