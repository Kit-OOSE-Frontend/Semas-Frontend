import React, { useState, useCallback } from 'react';
import './InquiryBudgetingDetail.css';

export default function InquiryBudgetingDetail() {
    const [inquiryCareerDetail, setInquiryCareerDetail] = useState();
    const [detailOfExecution, setDetailOfExecution] = useState();
    const [budgetid, setBudgetid] = useState('');

    const handleChange = useCallback(
        (e) => {
            setBudgetid(e.target.value);
        },
        [budgetid]
    );

    const handleInquiry = async (e, budgetid) => {
        e.preventDefault();
        try {
            const response1 = await axios.get(`${BASE_URL}/inquiry-budget-form/?id=${budgetid}`);
            if (response1.status === 200) {
                setInquiryCareerDetail(response1.data);
            }
            const response2 = await axios.get(`${BASE_URL}/inquiry-budget-detail-list/?id=${budgetid}`);
            if (response2.status === 200) {
                setDetailOfExecution(response2.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="inquiry-budget-wrap">
            <div className="inquiry-budget-title">예산 편성 신청 조회</div>
            <div className="inquiry-budget-input-wrap">
                <div className="inquiry-budget-input">
                    <label>예산 편성 신청 번호</label>
                    <input name="budgetid" type="text" value={budgetid} onChange={handleChange} />
                </div>
            </div>
            <button onClick={() => handleInquiry}>조회</button>
            {inquiryCareerDetail?.length > 0 ? (
                <div className="inquiry-budget-result">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">예산 편성 신청 제목</th>
                                <th scope="col">신청 부서</th>
                                <th scope="col">약정서 제목</th>
                                <th scope="col">약정서 내용</th>
                                <th scope="col">예산활용계획서 제목</th>
                                <th scope="col">예산활용계획서 내용</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inquiryCareerDetail.map((result) => (
                                <tr>
                                    <td>{result.budget_name}</td>
                                    <td>{result.budget_category}</td>
                                    <td>{result.agreement_name}</td>
                                    <td>{result.agreement_detail}</td>
                                    <td>{result.plan_name}</td>
                                    <td>{result.plan_detail}</td>
                                </tr>
                            ))}
                            <th scope="row" rowSpan={inquiryCareerDetail.map((result) => result.budget_detail_count)}>
                                세목
                            </th>
                            <th scope="col">품목</th>
                            <th scope="col">수량</th>
                            <th scope="col">단위가격</th>
                            <th scope="col">단위</th>
                            <th scope="col">총가격</th>
                            {detailOfExecution.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td>{row.budget_detail_name}</td>
                                    <td>{row.budget_detail_quantity}</td>
                                    <td>{row.budget_detail_unit_price}</td>
                                    <td>{row.budget_detail_unit}</td>
                                    <td>{row.budget_detail_unit_price * row.budget_detail_quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="budget-no-result">조회 결과가 없습니다.</div>
            )}
        </div>
    );
}
