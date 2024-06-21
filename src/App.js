import './App.css';
import AddBudgetingDetail from './page/AddBudgetingDetail';
import AddCareerDetail from './page/AddCareerDetail';
import { Route, Routes } from 'react-router-dom';
import InquiryBudgetingDetail from './page/InquiryBudgetingDetail';
import InquiryCareerDetail from './page/InquiryCareerDetail';

function App() {
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
