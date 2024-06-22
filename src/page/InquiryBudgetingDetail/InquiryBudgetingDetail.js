import React, { useState, useCallback } from "react";
import "./InquiryBudgetingDetail.css";
import axios from "axios";
import { BASE_URL } from "../../config/Config";

export default function InquiryBudgetingDetail() {
    const [inquiryBudgetDetail, setInquiryBudgetDetail] = useState(null);
    const [detailOfExecution, setDetailOfExecution] = useState([]);
    const [budgetid, setBudgetid] = useState("");
    const [status, setStatus] = useState("");

    const handleChange = useCallback(
        e => {
            setBudgetid(e.target.value);
        },
        [budgetid]
    );

    const handleInquiry = async () => {
        try {
            const response1 = await axios.get(`${BASE_URL}/inquiry-budget-form?id=${budgetid}`);
            if (response1.status === 200) {
                setInquiryBudgetDetail(response1.data);
                setStatus("성공");
                //console.log(response1.data);
                const response2 = await axios.get(`${BASE_URL}/inquiry-budget-detail-list?id=${budgetid}`);
                if (response2.status === 200) {
                    setDetailOfExecution(response2.data);
                    //console.log(response2.data);
                } else {
                    setStatus("실패");
                }
            } else {
                setStatus("실패");
            }
            console.log(inquiryBudgetDetail);
            console.log(detailOfExecution);
            console.log(status);
        } catch (error) {
            console.error(error);
            setStatus("실패");
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
            <button onClick={handleInquiry}>조회</button>

            {status === "성공" && inquiryBudgetDetail ? (
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
                            <tr>
                                <td>{inquiryBudgetDetail.budget_name}</td>
                                <td>{inquiryBudgetDetail.budget_department}</td>
                                <td>{inquiryBudgetDetail.agreement_name}</td>
                                <td>{inquiryBudgetDetail.agreement_detail}</td>
                                <td>{inquiryBudgetDetail.plan_name}</td>
                                <td>{inquiryBudgetDetail.plan_detail}</td>
                            </tr>
                            <tr>
                                <th scope="row" rowSpan={inquiryBudgetDetail.budget_detail_count}>
                                    세목
                                </th>
                                <th scope="col">품목</th>
                                <th scope="col">수량</th>
                                <th scope="col">단위가격</th>
                                <th scope="col">단위</th>
                                <th scope="col">총가격</th>
                            </tr>
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
                <div className="budget-no-result">{status === "실패" ? "조회 결과가 없습니다." : ""}</div>
            )}
        </div>
    );
}
