import './InquiryOperatingExpenses.css'
import {useCallback, useState} from "react";

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
            <button>조회</button>
            {inquiryResult?
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
                        <tr>
                            <td>2024-06-07</td>
                            <td>회계</td>
                            <td>1234-5678-90</td>
                            <td>회의 비품 구매</td>
                            <td>세븐일레븐</td>
                            <td>사원, 디자인팀</td>
                            <td>200만원</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                :<div className='no-result'>조회 결과가 없습니다.</div>}
        </div>
    )
}