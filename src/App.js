import './App.css';
import AddDetailsOfExecution from "./page/AddDetailsOfExecution";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<AddDetailsOfExecution/>} />
      </Routes>
  );
}

export default App;
