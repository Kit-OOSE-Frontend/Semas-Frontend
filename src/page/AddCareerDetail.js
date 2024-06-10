import './AddCareerDetail.css';
import { useCallback, useState } from 'react';

export default function AddCareerDetail() {
    const [addCareerDetail, setAddCareerDetail] = useState({
        EmployeeId: 0,
        Position: '',
        PositionDetail: '',
        HighestLevel: '',
        Task: '',
        Rate: '',
        Period: 0.0,
        PositionExpereience: '',
        TrainingCompletion: '',
        LicenseList: [],
        Prize: '',
        Punish: '',
        DesiredTask: '',
    });

    const handleChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            if (name === 'LicenseList') {
                setAddCareerDetail({ ...addCareerDetail, [name]: value.split(',') });
            } else {
                setAddCareerDetail({ ...addCareerDetail, [name]: value });
            }
        },
        [addCareerDetail]
    );

    const handleAdd = (e) => {
        e.preventDefault();
        console.log(addCareerDetail);
    };

    return (
        <div className="add-details-wrap">
            <div className="add-details-title">사원 상세경력 작성</div>
            <form onSubmit={(e) => handleAdd(e)}>
                <div className="detail-div">
                    <div>사원번호</div>
                    <input name="EmployeeId" type="number" value={addCareerDetail.EmployeeId} onChange={handleChange} />
                </div>
                <div className="detail-div">
                    <div>직책</div>
                    <input name="Position" type="text" value={addCareerDetail.Position} onChange={handleChange} />
                </div>
                <div className="detail-div">
                    <div>직책 상세</div>
                    <input
                        name="PositionDetail"
                        type="text"
                        value={addCareerDetail.PositionDetail}
                        onChange={handleChange}
                    />
                </div>
                <div className="detail-div">
                    <div>최종학력</div>
                    <input
                        name="HighestLevel"
                        type="text"
                        value={addCareerDetail.HighestLevel}
                        onChange={handleChange}
                    />
                </div>
                <div className="detail-div">
                    <div>직무</div>
                    <input name="Task" type="text" value={addCareerDetail.Task} onChange={handleChange} />
                </div>
                <div className="detail-div">
                    <div>평점</div>
                    <input name="Rate" type="text" value={addCareerDetail.Rate} onChange={handleChange} />
                </div>
                <div className="detail-div">
                    <div>기간</div>
                    <input name="Period" type="text" value={addCareerDetail.Period} onChange={handleChange} />
                </div>
                <div className="detail-div">
                    <div>직책 경험</div>
                    <input
                        name="PositionExpereience"
                        type="checkbox"
                        value={addCareerDetail.PositionExpereience}
                        onChange={handleChange}
                    />
                </div>
                <div className="detail-div">
                    <div>교육 경험</div>
                    <input
                        name="TrainingCompletion"
                        type="checkbox"
                        value={addCareerDetail.TrainingCompletion}
                        onChange={handleChange}
                    />
                </div>
                <div className="detail-div">
                    <div>자격증 목록</div>
                    <input
                        name="LicenseList"
                        type="text"
                        value={addCareerDetail.LicenseList.join(',')}
                        onChange={handleChange}
                    />
                </div>
                <div className="detail-div">
                    <div>수상경력</div>
                    <input name="Prize" type="text" value={addCareerDetail.Prize} onChange={handleChange} />
                </div>
                <div className="detail-div">
                    <div>Punish</div>
                    <input name="Punish" type="text" value={addCareerDetail.Punish} onChange={handleChange} />
                </div>
                <div className="detail-div">
                    <div>요구 작업</div>
                    <input name="DesiredTask" type="text" value={addCareerDetail.DesiredTask} onChange={handleChange} />
                </div>
                <input className="submit-btn" type="submit" />
            </form>
        </div>
    );
}
