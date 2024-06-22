import './AddDetailsOfExecution.css'
import {useCallback, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../../config/Config";

export default function AddDetailsOfExecution() {

    const [detailsOfExecution, setDetailsOfExecution] = useState({
        cardNum: '',
        department: '',
        date: '',
        place: '',
        objective: '',
        participant: '',
        amount: 0,
    });

    const handleChange = useCallback((e) => {
            const {name, value} = e.target;
            setDetailsOfExecution(
                {...detailsOfExecution, [name]: value}
            )
        }, [detailsOfExecution]
    )

    const handleAdd = async (e, detailsOfExecution) => {
        e.preventDefault();
        const {cardNum, department, date, place, objective, participant, amount} = detailsOfExecution;
        const detail = {
            cardNum: cardNum,
            department: department,
            date: date,
            place: place,
            purpose: objective,
            participant: participant,
            amount: amount
        }

        try {
            const response = await axios.post(`${BASE_URL}/write-detailsofexecution`, detail);
            if(response.status === 200) {
                alert('집행세부내역 추가 성공');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='add-details-wrap'>
            <div className='add-details-title'>집행 세부내역 작성</div>
            <form onSubmit={(e) => handleAdd(e)}>
                <div className='detail-div'>
                    <div>카드번호</div>
                    <input name='cardNum' type='text' value={detailsOfExecution.cardNum} onChange={handleChange}/>
                </div>
                <div className='detail-div'>
                    <div>부서</div>
                    <input name='department' type='text' value={detailsOfExecution.department}
                           onChange={handleChange}/>
                </div>
                <div className='detail-div'>
                    <div>날짜</div>
                    <input name='date' type='date' value={detailsOfExecution.date} onChange={handleChange}/>
                </div>
                <div className='detail-div'>
                    <div>장소</div>
                    <input name='place' type='text' value={detailsOfExecution.place} onChange={handleChange}/>
                </div>
                <div className='detail-div'>
                    <div>목적</div>
                    <input name='objective' type='text' value={detailsOfExecution.objective}
                           onChange={handleChange}/>
                </div>
                <div className='detail-div'>
                    <div>참여자</div>
                    <input name='participant' type='text' value={detailsOfExecution.participant}
                           onChange={handleChange}/>
                </div>
                <div className='detail-div'>
                    <div>금액</div>
                    <input name='amount' type='text' value={detailsOfExecution.amount} onChange={handleChange}/>
                </div>
                <input className='submit-btn' type='submit' value='작성'/>
            </form>
        </div>
    )
}