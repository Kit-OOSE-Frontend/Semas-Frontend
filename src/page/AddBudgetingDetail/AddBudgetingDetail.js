import React, { useState, useCallback } from 'react';
import './AddBudgetingDetail.css';
import axios from 'axios';
import { BASE_URL } from '../../config/Config';

export default function AddBudgetingDetail() {
    const [budgeting, setBudgeting] = useState({
        budget_name: '',
        budget_department: '',
        agreement_name: '',
        agreement_detail: '',
        plan_name: '',
        plan_detail: '',
        budget_detail_count: 3,
    });

    //detail_Of_Execution: [],

    const [detailOfExecution, setDetailOfExecution] = useState([
        {
            budget_detail_name: '',
            budget_detail_quantity: 0,
            budget_detail_unit_price: 0,
            budget_detail_unit: '',
        },
    ]);

    const handleChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setBudgeting({ ...budgeting, [name]: value });
        },
        [budgeting]
    );

    const handleChangeDetail = useCallback(
        (rowIndex, name, event) => {
            const newData = [...detailOfExecution];
            newData[rowIndex][name] = event.target.value;
            setDetailOfExecution(newData);
        },
        [detailOfExecution]
    );

    const addRow = () => {
        setBudgeting({ ...budgeting, budget_detail_count: budgeting.budget_detail_count + 1 });
        setDetailOfExecution([
            ...detailOfExecution,
            {
                budget_detail_name: '',
                budget_detail_quantity: 0,
                budget_detail_unit_price: 0,
                budget_detail_unit: '',
            },
        ]);
    };

    const deleteRow = (rowIndex) => {
        setBudgeting({ ...budgeting, budget_detail_count: budgeting.budget_detail_count - 1 });
        const newData = [...detailOfExecution];
        newData.splice(rowIndex, 1);
        setDetailOfExecution(newData);
    };

    const handleAdd = async (e, budgeting, detailOfExecution) => {
        e.preventDefault();
        const {
            budget_name,
            budget_department,
            agreement_name,
            agreement_detail,
            plan_name,
            plan_detail,
            budget_detail_count,
        } = budgeting;
        const budgetform = {
            budget_name: budget_name,
            budget_department: budget_department,
            agreement_name: agreement_name,
            agreement_detail: agreement_detail,
            plan_name: plan_name,
            plan_detail: plan_detail,
            budget_detail_count: budget_detail_count,
        };

        const [{ budget_detail_name, budget_detail_quantity, budget_detail_unit_price, budget_detail_unit }] =
            detailOfExecution;
        const detailform = [
            {
                budget_detail_name: budget_detail_name,
                budget_detail_quantity: budget_detail_quantity,
                budget_detail_unit_price: budget_detail_unit_price,
                budget_detail_unit: budget_detail_unit,
            },
        ];

        try {
            const response1 = await axios.post(`${BASE_URL}/apply-budget-form`, budgetform);
            const id = 0;
            const response2 = await axios.post(`${BASE_URL}/submit-budget-detail-list/${id}`, detailform);
            if (response1.status === 200) {
                alert('예산편성 신청 완료');
            }
            if (response2.status === 200) {
                alert('예산편성세목 신청 완료');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="add-details-wrap">
            <div className="add-details-title">예산 편성 신청 내역 입력</div>
            <form onSubmit={(e) => handleAdd(e)}>
                <div className="detail-div">
                    <div>예산 편성 신청 제목</div>
                    <input name="budget_name" type="text" value={budgeting.budget_name} onChange={handleChange} />
                </div>
                <div className="detail-div">
                    <div>신청 부서</div>
                    <input
                        name="budget_department"
                        type="text"
                        value={budgeting.budget_department}
                        onChange={handleChange}
                    />
                </div>
                <div className="detail-div">
                    <div>약정서 제목</div>
                    <input name="agreement_name" type="text" value={budgeting.agreement_name} onChange={handleChange} />
                </div>
                <div className="detail-div">
                    <div>약정서 내용</div>
                    <input
                        name="agreement_detail"
                        type="text"
                        value={budgeting.agreement_detail}
                        onChange={handleChange}
                    />
                </div>
                <div className="detail-div">
                    <div>예산활용계획서 제목</div>
                    <input name="plan_name" type="text" value={budgeting.plan_name} onChange={handleChange} />
                </div>
                <div className="detail-div">
                    <div>예산활용계획서 내용</div>
                    <input name="plan_detail" type="text" value={budgeting.plan_detail} onChange={handleChange} />
                </div>
                <div className="detail-div">
                    <table>
                        <thead>
                            <tr>
                                {['품목', '수량', '단위가격', '단위', '총가격'].map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {detailOfExecution.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td>
                                        <input
                                            type="text"
                                            value={row.budget_detail_name}
                                            onChange={(event) =>
                                                handleChangeDetail(rowIndex, 'budget_detail_name', event)
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={row.budget_detail_quantity}
                                            onChange={(event) =>
                                                handleChangeDetail(rowIndex, 'budget_detail_quantity', event)
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={row.budget_detail_unit_price}
                                            onChange={(event) =>
                                                handleChangeDetail(rowIndex, 'budget_detail_unit_price', event)
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={row.budget_detail_unit}
                                            onChange={(event) =>
                                                handleChangeDetail(rowIndex, 'budget_detail_unit', event)
                                            }
                                        />
                                    </td>
                                    <td>{row.budget_detail_quantity * row.budget_detail_unit_price}</td>
                                    {detailOfExecution.length > 1 && (
                                        <td>
                                            <button onClick={() => deleteRow(rowIndex)}>행 삭제</button>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={addRow}>행 추가</button>
                </div>

                <input className="submit-btn" type="submit" />
            </form>
        </div>
    );
}
