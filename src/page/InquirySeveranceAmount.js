import './InquirySeveranceAmount.css'
import {useCallback, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../config/Config";

export default function InquirySeveranceAmount() {

    const [employeeId, setEmployeeId] = useState('');
    const [inquiryResult, setInquiryResult] = useState();

    const handleChange = useCallback((e)=> {
        setEmployeeId(e.target.value);
    })

    const handleInquiry = async (e, employeeId) => {
        e.preventDefault();

        try {
            const response = await axios.get(`${BASE_URL}/search-severance/${employeeId}`);
            if(response.status === 200) {
                setInquiryResult(response.data.severanceAmount);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='inquiry-severance-wrap'>
            <div className='inquiry-severance-title'>퇴직금액 조회</div>
            <form className='inquiry-severance-form' onSubmit={ (e) => handleInquiry(e) }>
                <div className='employee-id-input-title'>직원 ID</div>
                <div className='inquiry-severance-input'>
                    <input className='employee-id-input' type='text' placeholder='조회할 직원의 ID를 입력하세요.' value={employeeId} onChange={handleChange}/>
                    <input className='inquiry-severance-inquiry' type='submit' value='퇴직금액 조회'/>
                </div>
            </form>
            {inquiryResult ?
                <div className='inquiry-severance-result'>
                    <table>
                        <thead>
                        <tr>
                            <th scope='col'>직원 ID</th>
                            <th scope='col'>퇴직금액</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{employeeId}</td>
                            <td>{inquiryResult}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                : <div className='no-result'>조회 결과가 없습니다.</div>}
        </div>
    )
}