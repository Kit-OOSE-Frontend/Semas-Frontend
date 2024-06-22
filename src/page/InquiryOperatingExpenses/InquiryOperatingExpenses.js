import './InquiryOperatingExpenses.css'
import {useCallback, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../../config/Config";

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toISOString().slice(0, 10);
}

export default function InquiryOperatingExpenses() {

    const [operatingExpensesInputs, setOperatingExpensesInputs] = useState({
        department: '',
        date: ''
    });

    const [inquiryResult, setInquiryResult] = useState();

    const {department, date} = operatingExpensesInputs;

    const handleChange = useCallback((e) => {
            const { name, value } = e.target;
            setOperatingExpensesInputs(
                {...operatingExpensesInputs, [name]: value}
            )
        }, [operatingExpensesInputs]
    )

    const handleInquiry = async ()=> {

        const params = {
            department: department,
            date: date.replace('-','')
        }

        try {
            const response = await axios.get(`${BASE_URL}/showinquiry-operatingexpenses`, { params });
            if(response.status === 200) {
                setInquiryResult(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='inquiry-expense-wrap'>
            <div className='inquiry-expense-title'>월별 부서운영비 카드사용내역 조회</div>
            <div className='inquiry-input-wrap'>
                <div className='inquiry-input'>
                    <label>부서 이름</label>
                    <input name='department' type='text' value={department} onChange={handleChange}/>
                </div>
                <div className='inquiry-input'>
                    <label>조회하고 싶은 달</label>
                    <input name='date' type='month' value={date} onChange={handleChange}/>
                </div>
            </div>
            <button onClick={handleInquiry}>조회</button>
            {inquiryResult?.length > 0 ? (
                    <div className='inquiry-result'>
                        <table>
                            <thead>
                            <tr>
                                <th scope='col'>날짜</th>
                                <th scope='col'>부서</th>
                                <th scope='col'>카드번호</th>
                                <th scope='col'>목적</th>
                                <th scope='col'>장소</th>
                                <th scope='col'>참여자</th>
                                <th scope='col'>금액</th>
                            </tr>
                            </thead>
                            <tbody>
                            {inquiryResult.map(result => (
                            <tr>
                                <td>{formatDate(result.date)}</td>
                                <td>{result.department}</td>
                                <td>{result.card_num}</td>
                                <td>{result.purpose}</td>
                                <td>{result.place}</td>
                                <td>{result.participant}</td>
                                <td>{result.amount}</td>
                            </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )
                : <div className='no-result'>조회 결과가 없습니다.</div>}
        </div>
    )
}