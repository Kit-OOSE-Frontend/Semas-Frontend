import './App.css';
import AddDetailsOfExecution from "./page/AddDetailsOfExecution";
import {Route, Routes} from "react-router-dom";
import InquiryOperatingExpenses from "./page/InquiryOperatingExpenses";
import RetirementPensionCalculation from "./page/RetirementPensionCalculation";
import InquirySeveranceAmount from "./page/InquirySeveranceAmount";
import AddBudgetingDetail from './page/AddBudgetingDetail';
import AddCareerDetail from './page/AddCareerDetail';
import { Route, Routes } from 'react-router-dom';
import InquiryBudgetingDetail from './page/InquiryBudgetingDetail';
import InquiryCareerDetail from './page/InquiryCareerDetail';

function App() {
  return (
      <Routes>
        <Route path="/add" element={<AddDetailsOfExecution/>} />
        <Route path="/inquiry" element={<InquiryOperatingExpenses/>} />
        <Route path="/retire" element={<RetirementPensionCalculation/>} />
        <Route path="/" element={<InquirySeveranceAmount/>} />
      </Routes>
  );
    return (
        <Routes>
            <Route path="/budget" element={<AddBudgetingDetail />} />
            <Route path="/career" element={<AddCareerDetail />} />
            <Route path="/inquirybudget" element={<InquiryBudgetingDetail />} />
            <Route path="/inquirycareer" element={<InquiryCareerDetail />} />
        </Routes>
    );
}

export default App;
