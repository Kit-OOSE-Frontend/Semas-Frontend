import './RetirementPensionCalculation.css'
import {useCallback, useState} from "react";
import axios from "axios";

export default function RetirementPensionCalculation() {

    const [employeeId, setEmployeeId] = useState('');

    const handleChange = useCallback((e)=> {
        setEmployeeId(e.target.value);
    })

    const handleCalculation = async (e, employeeId) => {
        e.preventDefault();

        try {
            const response = await axios.post('url', employeeId);
            if(response.status === 200) {
                alert(`직원 ID ${employeeId}의 퇴직연금이 계산되어 저장되었습니다.`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='retirement-pension-wrap'>
            <div className='retirement-pension-title'>퇴직연금 계산</div>
            <form className='retirement-pension-form' onSubmit={ (e) => handleCalculation(e) }>
                <div className='employee-id-input-title'>직원 ID</div>
                <div className='retirement-pension-input'>
                    <input className='employee-id-input' type='text' placeholder='계산할 직원의 ID를 입력하세요.' value={employeeId} onChange={handleChange}/>
                    <input className='retirement-pension-submit' type='submit' value='퇴직연금 계산'/>
                </div>
            </form>
        </div>
    )
}