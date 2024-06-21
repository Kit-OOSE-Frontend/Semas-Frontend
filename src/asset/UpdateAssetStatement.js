import {useCallback, useState} from 'react';
import axios from 'axios';
import './UpdateAssetStatement.css';

export default function UpdateAssetStatement() {

    return (
        <div className='update-asset-statement-container'>
            <h1 className='name-of-update'>자산명세서</h1>
            <button className='backward-update'>이전</button>
            <button className='save-update'>저장</button>
            <div className='update-asset-statement'>
                <div className="info-pair">
                    <p>자산명세서 ID:&nbsp;</p>
                    <p>123</p>
                </div>
                <form>
                    <label className='update-input-name'>현황</label>
                    <input className='update-input1' type='text' placeholder='현황 내용'/>
                </form>
                <form>
                    <label className='update-input-name'>content</label>
                    <input className='update-input2' type='text' placeholder='content'/>
                </form>
                <form>
                    <label className='update-input-name'>손실금액</label>
                    <input className='update-input3' type='text' placeholder='-10,000,000원'/>
                </form>
                <form>
                    <label className='update-input-name'>취득가액</label>
                    <input className='update-input4' type='text' placeholder='2,700,000원'/>
                </form>
                <form>
                    <label className='update-input-name'>잔존가치</label>
                    <input className='update-input5' type='text' placeholder='9,100,000원'/>
                </form>
                <div className="info-pair">
                    <p>반납 여부:&nbsp;</p>
                    <p>미반납</p>
                </div>
            </div>
        </div>
    )
}