import './App.css';
import AddBudgetingDetail from './page/AddBudgetingDetail';
import AddCareerDetail from './page/AddCareerDetail';
import AddDetailsOfExecution from './page/AddDetailsOfExecution';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/detail" element={<AddDetailsOfExecution />} />
            <Route path="/budget" element={<AddBudgetingDetail />} />
            <Route path="/career" element={<AddCareerDetail />} />
        </Routes>
    );
}

export default App;
