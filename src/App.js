import './App.css';
import AddDetailsOfExecution from "./page/AddDetailsOfExecution/AddDetailsOfExecution";
import {Route, Routes} from "react-router-dom";
import InquiryOperatingExpenses from "./page/InquiryOperatingExpenses/InquiryOperatingExpenses";
import RetirementPensionCalculation from "./page/RetirementPensionCalculation/RetirementPensionCalculation";
import InquirySeveranceAmount from "./page/InquirySeveranceAmount/InquirySeveranceAmount";
import AddBudgetingDetail from './page/AddBudgetingDetail/AddBudgetingDetail';
import AddCareerDetail from './page/AddCareerDetail/AddCareerDetail';
import InquiryBudgetingDetail from './page/InquiryBudgetingDetail/InquiryBudgetingDetail';
import InquiryCareerDetail from './page/InquiryCareerDetail/InquiryCareerDetail';
import ContractLedger from "./contract/ContractLedger";
import InputContract from "./contract/InputContract";
import InquiryAsset from "./asset/InquiryAsset";
import UpdateAssetStatement from "./asset/UpdateAssetStatement";

function App() {
  return (
      <Routes>
        <Route path="/add" element={<AddDetailsOfExecution/>} />
        <Route path="/inquiry" element={<InquiryOperatingExpenses/>} />
        <Route path="/retire" element={<RetirementPensionCalculation/>} />
          <Route path="/" element={<InquirySeveranceAmount/>} />
          <Route path='/contract-ledger' element={<ContractLedger/>}/>
          <Route path='/input-contract' element={<InputContract/>}/>
          <Route path='/update-asset' element={<UpdateAssetStatement/>}/>
          <Route path="/budget" element={<AddBudgetingDetail />} />
          <Route path="/career" element={<AddCareerDetail />} />
          <Route path="/inquirybudget" element={<InquiryBudgetingDetail />} />
          <Route path="/inquirycareer" element={<InquiryCareerDetail />} />
      </Routes>
  );
}

export default App;
