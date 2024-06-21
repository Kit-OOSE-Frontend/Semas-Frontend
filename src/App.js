import './App.css';
import AddDetailsOfExecution from "./page/AddDetailsOfExecution";
import {Route, Routes} from "react-router-dom";
import InquiryOperatingExpenses from "./page/InquiryOperatingExpenses";
import RetirementPensionCalculation from "./page/RetirementPensionCalculation";
import InquirySeveranceAmount from "./page/InquirySeveranceAmount";
import ContractLedger from './contract/ContractLedger';
import InputContract from './contract/InputContract';
import InquiryAsset from './asset/InquiryAsset';
import UpdateAssetStatement from './asset/UpdateAssetStatement';

function App() {
  // return (
  //     <Routes>
  //       <Route path="/add" element={<AddDetailsOfExecution/>} />
  //       <Route path="/inquiry" element={<InquiryOperatingExpenses/>} />
  //       <Route path="/retire" element={<RetirementPensionCalculation/>} />
  //       <Route path="/" element={<InquirySeveranceAmount/>} />
  //     </Routes>
  // );
  //return <InquirySeveranceAmount/>

  return (
    <Routes>
      <Route path='/contract-ledger' element={<ContractLedger/>}/>
      <Route path='/input-contract' element={<InputContract/>}/>
      <Route path='/inquiry-asset' element={<InquiryAsset/>}/>
      <Route path='/update-asset' element={<UpdateAssetStatement/>}/>
    </Routes>
  );
  
  //return <ContractLedger/>
  //return <InputContract/>
  //return <InquiryAsset/>
  //return <UpdateAssetStatement/>
}

export default App;
