import { useState, useCallback } from "react";
import axios from "axios";
import MyDatePicker from './DatePicker'
import './InputContract.css'

export default function InputContract() {
    const [contractName, setContractName] = useState("");
    const [contractDetail, setContractDetail] = useState("");
    const [contractPartner, setContractPartner] = useState("");
    const [partnerAddress, setPartnerAddress] = useState("");
    const [contractDeposit, setContractDeposit] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [department, setDepartment] = useState("");
    const [city, setCity] = useState("");
    const [message, setMessage] = useState("");

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        const contractData = {
            ContractName: contractName,
            ContractDetail: contractDetail,
            ContractDeposit: parseFloat(contractDeposit),
            ContractPartner: contractPartner,
            StartDay: startDate,
            EndDay: endDate,
            Department: department,
            PartnerAddress: `${city} ${partnerAddress}`
        };

        try {
            const response = await axios.post('/insert-contract', contractData);
            if (response.data === true) {
                setMessage("계약서 등록 성공");
            } else {
                setMessage("계약서 등록 오류");
            }
        } catch (error) {
            console.error("데이터 전송 중 오류 발생:", error);
            setMessage("데이터 전송 중 오류 발생");
        }
    }, [contractName, contractDetail, contractDeposit, contractPartner, startDate, endDate, department, city, partnerAddress]);

    const handleCancel = () => {
        if (window.confirm("계약서 작성을 취소하시겠습니까?")) {
            resetForm();
        }
    };

    const resetForm = () => {
        setContractName("");
        setContractDetail("");
        setContractPartner("");
        setPartnerAddress("");
        setContractDeposit("");
        setStartDate("");
        setEndDate("");
        setDepartment("");
        setCity("");
        setMessage("");
    };

    return (
        <div className='container'>
            <h1>계약서 작성</h1>
            <div className='Input'>
                <form onSubmit={handleSubmit}>
                    <label>계약명 </label>
                    <input
                        type="text"
                        name='nameField'
                        placeholder='계약명 입력'
                        value={contractName}
                        onChange={(e) => setContractName(e.target.value)}
                    />
                    <label>계약 상세 정보 </label>
                    <textarea
                        name='detailField'
                        placeholder='계약 상세 정보 입력'
                        className='detailInput'
                        value={contractDetail}
                        onChange={(e) => setContractDetail(e.target.value)}
                    />
                    <label>계약자 </label>
                    <input
                        type='text'
                        name='partner'
                        placeholder='계약자 입력'
                        value={contractPartner}
                        onChange={(e) => setContractPartner(e.target.value)}
                    />
                    <b>계약자 주소</b>
                    <select value={city} onChange={(e) => setCity(e.target.value)}>
                        <option value="">시/도</option>
                        <option value="서울특별시">서울특별시</option>
                        <option value="인천광역시">인천광역시</option>
                        <option value="경기도">경기도</option>
                        <option value="강원도">강원도</option>
                        <option value="세종특별시">세종특별시</option>
                        <option value="대전광역시">대전광역시</option>
                        <option value="충청북도">충청북도</option>
                        <option value="충청남도">충청남도</option>
                        <option value="광주광역시">광주광역시</option>
                        <option value="전라북도">전라북도</option>
                        <option value="전라남도">전라남도</option>
                        <option value="대구광역시">대구광역시</option>
                        <option value="경상북도">경상북도</option>
                        <option value="부산광역시">부산광역시</option>
                        <option value="경상남도">경상남도</option>
                    </select>
                    <input
                        type='text'
                        name='partnerAddress'
                        placeholder='상세 주소 입력'
                        value={partnerAddress}
                        onChange={(e) => setPartnerAddress(e.target.value)}
                    />
                    <label>계약금 </label>
                    <input
                        type="text"
                        name='deposit'
                        placeholder='계약금 입력(금액만)'
                        value={contractDeposit}
                        onChange={(e) => setContractDeposit(e.target.value)}
                    />
                    <b>계약 시작/종료일</b>
                    <MyDatePicker onChange={handleDateChange} />
                    <label>부서명 </label>
                    <input
                        type='text'
                        name='department'
                        placeholder='부서명 입력'
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    />
                    <div className="button-container">
                        <button type='button' onClick={handleCancel}>취소</button>
                        <button type='submit'>등록</button>
                    </div>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    )
}
