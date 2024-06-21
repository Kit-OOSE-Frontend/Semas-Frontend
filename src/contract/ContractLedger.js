import { useCallback, useState } from "react";
import axios from "axios";
import './ContractLedger.css';

export default function ContractLedger() {
    const [selectedType, setSelectedType] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [results, setResults] = useState([]);

    const handleSelectChange = (e) => {
        setSelectedType(e.target.value);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (!selectedType || !inputValue) {
            alert("조회 유형을 선택하고 값을 입력하세요.");
            return;
        }

        let queryParam = selectedType === '계약자' ? 'partner' : 'department';
        try {
            const response = await axios.get(`/inquiry-contact-ledger?${queryParam}=${inputValue}`);
            setResults(response.data);
        } catch (error) {
            console.error("데이터를 가져오는 중 오류 발생:", error);
            alert("데이터를 가져오는 중 오류가 발생했습니다.");
        }
    }, [selectedType, inputValue]);

    return (
        <div className='container'>
            <h1>계약대장 조회</h1>
            <div className='Input'>
                <select defaultValue="" onChange={handleSelectChange}>
                    <option value="">---------------</option>
                    <option value='계약자'>계약자</option>
                    <option value='부서'>부서</option>
                </select>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="inputField"
                        placeholder="조회 내용을 입력하세요."
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button type="submit">조회</button>
                </form>
            </div>
            {results.length > 0 && (
                <div className='Results'>
                    <h2>조회 결과</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Contract Name</th>
                                <th>Contract Detail</th>
                                <th>Contract Deposit</th>
                                <th>Contract Partner</th>
                                <th>Start Day</th>
                                <th>End Day</th>
                                <th>Department</th>
                                <th>Partner Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result, index) => (
                                <tr key={index}>
                                    <td>{result.ContractName}</td>
                                    <td>{result.ContractDetail}</td>
                                    <td>{result.ContractDeposit}</td>
                                    <td>{result.ContractPartner}</td>
                                    <td>{result.StartDay}</td>
                                    <td>{result.EndDay}</td>
                                    <td>{result.Department}</td>
                                    <td>{result.PartnerAddress}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}
