/*
import './AddBudgetingDetail.css';
import { useCallback, useState } from 'react';

export default function AddBudgetingDetail() {
    const [budgeting, setBudgeting] = useState({
        budgetingID: '',
        budgetingName: '',
        budgetByTaxCategory: '',
        detailOfExecution: '',
        writtenAgreement: '',
        businessPerformancePlan: '',
        isRequest: true,
        isApproval: false,
    });

    const [detailOfExecution, setDetailOfExecution] = useState({
        productName: '',
        quantity: 0,
        unitPrice: 0,
        unit: '',
        totalPrice: '',
    });

    const handleChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setBudgeting({ ...budgeting, [name]: value });
        },
        [budgeting]
    );

    const handleChangeDetail = useCallback(
        (e) => {
            const { name, value } = e.target;
            setDetailOfExecution({ ...detailOfExecution, [name]: value });
        },
        [detailOfExecution]
    );

    const handleAdd = (e) => {
        e.preventDefault();
        console.log(budgeting);
    };

    return (
        <div className="add-details-wrap">
            <div className="add-details-title">예산 편성 신청 내역 입력</div>
            <form onSubmit={(e) => handleAdd(e)}>
                <div className="detail-div">
                    <div>예산 편성 제목</div>
                    <input name="budgetingName" type="text" value={budgeting.budgetingName} onChange={handleChange} />
                </div>
                <div className="detail-div">
                    <div>신청 부서</div>
                    <input
                        name="budgetByTaxCategory"
                        type="text"
                        value={budgeting.budgetByTaxCategory}
                        onChange={handleChange}
                    />
                </div>
                <div className="detail-div">
                    <div>약정서</div>
                    <input
                        name="writtenAgreement"
                        type="file"
                        value={budgeting.writtenAgreement}
                        onChange={handleChange}
                    />
                </div>
                <div className="detail-div">
                    <div>예산활용계획서</div>
                    <input
                        name="businessPerformancePlan"
                        type="file"
                        value={budgeting.businessPerformancePlan}
                        onChange={handleChange}
                    />
                </div>
                <input className="submit-btn" type="submit" />
            </form>
        </div>
    );
}

*/

import React, { useState, useCallback } from 'react';
import './InquiryBudgetingDetail.css';

export default function InquiryBudgetingDetail() {
    const [budgeting, setBudgeting] = useState({
        budgetingID: '',
        budget_Name: '',
        budget_Category: '',

        written_Agreement: '',
        businessPerformancePlan: '',
        isRequest: true,
        isApproval: false,
    });

    //detail_Of_Execution: [],

    const [detailOfExecution, setDetailOfExecution] = useState([
        {
            productName: '',
            quantity: 0,
            unitPrice: 0,
            unit: '',
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

    const handleAdd = (e) => {
        e.preventDefault();
        setBudgeting({ ...budgeting, detailOfExecution: detailOfExecution });
        console.log(budgeting);
    };

    const addRow = () => {
        setDetailOfExecution([
            ...detailOfExecution,
            {
                productName: '',
                quantity: 0,
                unitPrice: 0,
                unit: '',
            },
        ]);
    };

    const deleteRow = (rowIndex) => {
        const newData = [...detailOfExecution];
        newData.splice(rowIndex, 1);
        setDetailOfExecution(newData);
    };

    return (
        <div className="add-details-wrap">
            <div className="add-details-title">예산 편성 신청 내역 입력</div>
            <form onSubmit={(e) => handleAdd(e)}>
                <div className="detail-div">
                    <div>예산 편성 제목</div>
                    <input name="budgetingName" type="text" value={budgeting.budgetingName} onChange={handleChange} />
                </div>
                <div className="detail-div">
                    <div>신청 부서</div>
                    <input
                        name="budgetByTaxCategory"
                        type="text"
                        value={budgeting.budgetByTaxCategory}
                        onChange={handleChange}
                    />
                </div>
                <div className="detail-div">
                    <div>약정서</div>
                    <input
                        name="writtenAgreement"
                        type="file"
                        value={budgeting.writtenAgreement}
                        onChange={handleChange}
                    />
                </div>
                <div className="detail-div">
                    <div>예산활용계획서</div>
                    <input
                        name="businessPerformancePlan"
                        type="file"
                        value={budgeting.businessPerformancePlan}
                        onChange={handleChange}
                    />
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
                                            value={row.productName}
                                            onChange={(event) => handleChangeDetail(rowIndex, 'productName', event)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={row.quantity}
                                            onChange={(event) => handleChangeDetail(rowIndex, 'quantity', event)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={row.unitPrice}
                                            onChange={(event) => handleChangeDetail(rowIndex, 'unitPrice', event)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={row.unit}
                                            onChange={(event) => handleChangeDetail(rowIndex, 'unit', event)}
                                        />
                                    </td>
                                    <td>{row.quantity * row.unitPrice}</td>
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
