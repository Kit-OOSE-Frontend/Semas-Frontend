import './InquiryAsset.css';
import { useCallback, useState } from 'react';
import axios from 'axios';
import {BASE_URL} from "../config/Config"

export default function InquiryAsset() {
    
    const [assetId, setAssetId] = useState('');
    const [assetData, setAssetData] = useState([]);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`${BASE_URL}/inquiry-asset?id=${assetId}`);
            setAssetData(response.data);
        } catch (error) {
            console.error("데이터 조회 중 오류 발생:", error);
        }
    }, [assetId]);

    return (
        <div className='inquiry-asset-container'>
            <h1 className='name-of-inquiry'>자산 현황 조회</h1>
            <div className='inquiry-asset'>
                <form onSubmit={handleSubmit}>
                    <label className='inquiry-input-name'>자산 ID </label>
                    <input
                        className='inquiry-asset-id-input'
                        type='text'
                        placeholder='조회할 자산의 ID를 입력하세요.'
                        value={assetId}
                        onChange={(e) => setAssetId(e.target.value)}
                    />
                    <button className='asset-id-inquiry-button' type='submit'>조회</button>
                </form>
            </div>
            <div className='inquiry-asset-result'>
                <table>
                    <thead>
                        <tr>
                            <th>자산 상태</th>
                            <th>내용</th>
                            <th>손실 금액</th>
                            <th>취득 가치</th>
                            <th>잔존 가치</th>
                            <th>폐기 상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assetData.map((asset, index) => (
                            <tr key={index}>
                                <td>{asset.AssetStatus}</td>
                                <td>{asset.Content}</td>
                                <td>{asset.AmountOfLoss}</td>
                                <td>{asset.AcquisitionValue}</td>
                                <td>{asset.RemainingValue}</td>
                                <td>{asset.ClosingStatus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}