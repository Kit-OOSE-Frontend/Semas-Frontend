import './InquiryOperatingExpenses.css'
import {useState} from "react";

export default function InquiryOperatingExpenses() {

    const [inquiryResult, setInquiryResult] = useState();
    return (
        <div className='inquiry-expense-wrap'>
            <div className='inquiry-expense-title'>월별 부서운영비 카드사용내역 조회</div>
            <div className='inquiry-input-wrap'>
                <div className='inquiry-input'>
                    <label>부서 이름</label>
                    <input type='text'/>
                </div>
                <div className='inquiry-input'>
                    <label>조회하고 싶은 달</label>
                    <select name='month'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                        <option value='11'>11</option>
                        <option value='12'>12</option>
                    </select>
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
                :<div className='result-err'>조회 결과가 없습니다.</div>}
        </div>
    )
}