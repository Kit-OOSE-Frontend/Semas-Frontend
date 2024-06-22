import { useCallback, useState } from 'react';
import axios from 'axios';
import './UpdateAssetStatement.css';

export default function UpdateAssetStatement() {
    const [assetId, setAssetId] = useState(''); // 조회할 자산 ID
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
            const response = await axios.get(`/inquiry-asset?id=${assetId}`);
            setAssetData(response.data);
        } catch (error) {
            console.error('자산 데이터 조회 중 오류 발생:', error);
        }
    }, [assetId]);

    // 수정된 데이터 저장 함수
    const handleSave = useCallback(async () => {
        try {
            const response = await axios.post('/update-asset-statement', updatedData);
            if (response.data) {
                setMessage('수정 성공');
                setEditingMode(false); // 수정 성공 시 수정 모드 종료
                setAssetData(response.data); // 수정된 데이터로 자산 데이터 업데이트
            } else {
                setMessage('수정 실패');
            }
        } catch (error) {
            console.error('자산 명세서 수정 중 오류 발생:', error);
            setMessage('수정 중 오류 발생');
        }
    }, [updatedData]);

    // 수정 취소 함수
    const handleCancel = () => {
        setUpdatedData({}); // 수정된 데이터 초기화
        setEditingMode(false); // 수정 모드 종료
    };

    // 조회 폼 제출 시 자산 데이터 조회
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchAssetData();
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
                    value={assetId}
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
                        <p>{assetData.AssetStatus}</p> {/* 실제 데이터 필드에 맞게 변경 */}
                    </div>
                    <form>
                        <label className='update-input-name'>현황</label>
                        <input
                            className='update-input1'
                            type='text'
                            placeholder='현황 내용'
                            name='AssetStatus'
                            value={editingMode ? updatedData.AssetStatus || assetData.AssetStatus : assetData.AssetStatus}
                            onChange={handleInputChange}
                            disabled={!editingMode}
                        />
                    </form>
                    <form>
                        <label className='update-input-name'>content</label>
                        <input
                            className='update-input2'
                            type='text'
                            placeholder='content'
                            name='Content'
                            value={editingMode ? updatedData.Content || assetData.Content : assetData.Content}
                            onChange={handleInputChange}
                            disabled={!editingMode}
                        />
                    </form>
                    <form>
                        <label className='update-input-name'>손실금액</label>
                        <input
                            className='update-input3'
                            type='text'
                            placeholder='-10,000,000원'
                            name='AmountOfLoss'
                            value={editingMode ? updatedData.AmountOfLoss || assetData.AmountOfLoss.toString() : assetData.AmountOfLoss.toString()}
                            onChange={handleInputChange}
                            disabled={!editingMode}
                        />
                    </form>
                    <form>
                        <label className='update-input-name'>취득가액</label>
                        <input
                            className='update-input4'
                            type='text'
                            placeholder='2,700,000원'
                            name='AcquisitionValue'
                            value={editingMode ? updatedData.AcquisitionValue || assetData.AcquisitionValue.toString() : assetData.AcquisitionValue.toString()}
                            onChange={handleInputChange}
                            disabled={!editingMode}
                        />
                    </form>
                    <form>
                        <label className='update-input-name'>잔존가치</label>
                        <input
                            className='update-input5'
                            type='text'
                            placeholder='9,100,000원'
                            name='RemainingValue'
                            value={editingMode ? updatedData.RemainingValue || assetData.RemainingValue.toString() : assetData.RemainingValue.toString()}
                            onChange={handleInputChange}
                            disabled={!editingMode}
                        />
                    </form>
                    <div className='info-pair'>
                        <p>반납 여부:&nbsp;</p>
                        <p>{assetData.ClosingStatus}</p> {/* 실제 데이터 필드에 맞게 변경 */}
                    </div>
                    {!editingMode ? (
                        <div className='button-container'>
                            <button className='edit-button' onClick={() => setEditingMode(true)}>
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
