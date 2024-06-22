import React, { useCallback, useState } from 'react';
import axios from 'axios';
import './UpdateAssetStatement.css';
import { BASE_URL } from '../config/Config';

export default function UpdateAssetStatement() {
    const [asset_statement_id, setAssetId] = useState(''); // 조회할 자산 ID
    const [assetData, setAssetData] = useState(null); // 조회한 자산 데이터
    const [editingMode, setEditingMode] = useState(false); // 수정 모드 상태
    const [updatedData, setUpdatedData] = useState({}); // 수정된 데이터
    const [message, setMessage] = useState(''); // 저장 결과 메시지

    // 입력 값 변경 시 updatedData 업데이트
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData({ ...updatedData, [name]: value });
    };

    // 자산 데이터 조회 함수
    const fetchAssetData = useCallback(async () => {
        try {
            const response = await axios.get(`${BASE_URL}/inquiry-asset?id=${asset_statement_id}`);
            console.log(response.data);
            setAssetData(response.data);
            setMessage('');
            setEditingMode(false);
        } catch (error) {
            console.error('자산 데이터 조회 중 오류 발생:', error);
            setMessage('자산 데이터를 조회하는 중 오류가 발생했습니다.');
        }
    }, [asset_statement_id]);

    // 수정된 데이터 저장 함수
    const handleSave = useCallback(async () => {
        try {
            const dataToSend = {
                ...updatedData,
                asset_statement_id: parseFloat(asset_statement_id),
                asset_status: updatedData.asset_status || assetData.asset_status,
                content: updatedData.content || assetData.content,
                amount_of_loss: parseFloat(updatedData.amount_of_loss || assetData.amount_of_loss),
                acquisition_value: parseFloat(updatedData.acquisition_value || assetData.acquisition_value),
                remaining_value: parseFloat(updatedData.remaining_value || assetData.remaining_value)
            };

            console.log(dataToSend)

            const response = await axios.post(`${BASE_URL}/update-asset-statement`, dataToSend);
            if (response.data) {
                setMessage('수정 성공');
                setEditingMode(false); // 수정 성공 시 수정 모드 종료
                setAssetData(response.data); // 수정된 데이터로 자산 데이터 업데이트
            } else {
                setMessage('수정 실패');
            }
        } catch (error) {
            console.error('자산 명세서 수정 중 오류 발생:', error);
            setMessage('자산 명세서를 수정하는 중 오류가 발생했습니다.');
        }
    }, [asset_statement_id, updatedData, assetData]);

    // 수정 취소 함수
    const handleCancel = () => {
        setUpdatedData({}); // 수정된 데이터 초기화
        setEditingMode(false); // 수정 모드 종료
    };

    // 조회 폼 제출 시 자산 데이터 조회
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!asset_statement_id) {
            setMessage('조회할 자산의 ID를 입력하세요.');
            return;
        }
        fetchAssetData();
    };

    // 수정 모드로 전환 함수
    const handleEdit = () => {
        setEditingMode(true);
        setUpdatedData({ ...assetData }); // 수정 모드 진입 시 기존 데이터를 updatedData에 복사
    };

    return (
        <div className='update-asset-statement-container'>
            <h1 className='name-of-update'>자산명세서</h1>
            <form onSubmit={handleSubmit}>
                <label className='update-input-name'>자산명세서 ID </label>
                <input
                    className='update-input-id'
                    type='text'
                    placeholder='조회할 자산의 ID를 입력하세요.'
                    value={asset_statement_id}
                    onChange={(e) => setAssetId(e.target.value)}
                />
                <button className='asset-id-inquiry-button' type='submit'>
                    조회
                </button>
            </form>
            {assetData && (
                <div className='update-asset-statement'>
                    <div className='info-pair'>
                        <p>자산명세서 ID:&nbsp;</p>
                        <p>{assetData.asset_statement_id || ''}</p>
                    </div>
                    <div className='info-pair'>
                        <p>현황:&nbsp;</p>
                        {editingMode ? (
                            <input
                                className='update-input1'
                                type='text'
                                placeholder='현황 내용'
                                name='asset_status' // 데이터 키 이름과 일치하도록 수정
                                value={updatedData.asset_status || assetData.asset_status}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <p>{assetData.asset_status || ''}</p>
                        )}
                    </div>
                    <div className='info-pair'>
                        <p>content:&nbsp;</p>
                        {editingMode ? (
                            <input
                                className='update-input2'
                                type='text'
                                placeholder='content'
                                name='content' // 데이터 키 이름과 일치하도록 수정
                                value={updatedData.content || assetData.content}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <p>{assetData.content || ''}</p>
                        )}
                    </div>
                    <div className='info-pair'>
                        <p>손실금액:&nbsp;</p>
                        {editingMode ? (
                            <input
                                className='update-input3'
                                type='text'
                                placeholder='-10,000,000원'
                                name='amount_of_loss' // 데이터 키 이름과 일치하도록 수정
                                value={updatedData.amount_of_loss !== undefined ? updatedData.amount_of_loss.toString() : assetData.amount_of_loss.toString()}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <p>{assetData.amount_of_loss !== undefined ? assetData.amount_of_loss.toString() : ''}</p>
                        )}
                    </div>
                    <div className='info-pair'>
                        <p>취득가액:&nbsp;</p>
                        {editingMode ? (
                            <input
                                className='update-input4'
                                type='text'
                                placeholder='2,700,000원'
                                name='acquisition_value' // 데이터 키 이름과 일치하도록 수정
                                value={updatedData.acquisition_value !== undefined ? updatedData.acquisition_value.toString() : assetData.acquisition_value.toString()}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <p>{assetData.acquisition_value !== undefined ? assetData.acquisition_value.toString() : ''}</p>
                        )}
                    </div>
                    <div className='info-pair'>
                        <p>잔존가치:&nbsp;</p>
                        {editingMode ? (
                            <input
                                className='update-input5'
                                type='text'
                                placeholder='9,100,000원'
                                name='remaining_value' // 데이터 키 이름과 일치하도록 수정
                                value={updatedData.remaining_value !== undefined ? updatedData.remaining_value.toString() : assetData.remaining_value.toString()}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <p>{assetData.remaining_value !== undefined ? assetData.remaining_value.toString() : ''}</p>
                        )}
                    </div>
                    <div className='info-pair'>
                        <p>반납 여부:&nbsp;</p>
                        <p>{assetData.closing_status ? '반납 완료' : '반납 미완료'}</p>
                    </div>
                    {!editingMode ? (
                        <div className='button-container'>
                            <button className='edit-button' onClick={handleEdit}>
                                수정
                            </button>
                        </div>
                    ) : (
                        <div className='button-container'>
                            <button className='cancel-button' onClick={handleCancel}>
                                취소
                            </button>
                            <button className='save-button' onClick={handleSave}>
                                저장
                            </button>
                        </div>
                    )}
                    {message && <p className='message'>{message}</p>}
                </div>
            )}
        </div>
    );
}
