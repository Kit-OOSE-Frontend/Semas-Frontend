import './App.css';
import AddDetailsOfExecution from "./page/AddDetailsOfExecution/AddDetailsOfExecution";
import {Route, Routes} from "react-router-dom";
import InquiryOperatingExpenses from "./page/InquiryOperatingExpenses/InquiryOperatingExpenses";
import RetirementPensionCalculation from "./page/RetirementPensionCalculation/RetirementPensionCalculation";
import InquirySeveranceAmount from "./page/InquirySeveranceAmount/InquirySeveranceAmount";

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
