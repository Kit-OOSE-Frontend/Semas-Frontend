import './App.css';
import AddBudgetingDetail from './page/AddBudgetingDetail';
import AddCareerDetail from './page/AddCareerDetail';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/budget" element={<AddBudgetingDetail />} />
            <Route path="/career" element={<AddCareerDetail />} />
        </Routes>
    );
}

export default App;
