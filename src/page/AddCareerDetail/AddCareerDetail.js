import "./AddCareerDetail.css";
import { useCallback, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/Config";

export default function AddCareerDetail() {
    const [addCareerDetail, setAddCareerDetail] = useState({
        emp_id: 0,
        emp_position: "",
        emp_pos_detail: "",
        emp_level: "",
        emp_task: "",
        emp_rate: "",
        emp_pos_period: 0,
        emp_pos_exp: false,
        emp_training: false,
        emp_license: "",
        emp_prize: "",
        emp_punish: "",
        emp_pos_desire: "",
    });

    const handleChange = useCallback(
        e => {
            const { name, value } = e.target;
            if (name === "emp_license") {
                setAddCareerDetail({ ...addCareerDetail, [name]: value.split(",") });
            } else {
                setAddCareerDetail({ ...addCareerDetail, [name]: value });
            }
        },
        [addCareerDetail]
    );

    /* const handleAdd = (e) => {
        e.preventDefault();
        console.log(addCareerDetail.emp_id);
    }; */

    const handleAdd = async e => {
        e.preventDefault();

        const {
            emp_position,
            emp_pos_detail,
            emp_level,
            emp_task,
            emp_rate,
            emp_pos_period,
            emp_pos_exp,
            emp_training,
            emp_license,
            emp_prize,
            emp_punish,
            emp_pos_desire,
        } = addCareerDetail;
        const career = {
            emp_position: emp_position,
            emp_pos_detail: emp_pos_detail,
            emp_level: emp_level,
            emp_task: emp_task,
            emp_rate: emp_rate,
            emp_pos_period: emp_pos_period,
            emp_pos_exp: emp_pos_exp,
            emp_training: emp_training,
            emp_license: emp_license,
            emp_prize: emp_prize,
            emp_punish: emp_punish,
            emp_pos_desire: emp_pos_desire,
        };

        try {
            const response = await axios.post(`${BASE_URL}/insert-emp-career/${addCareerDetail.emp_id}`, career);
            if (response.status === 200) {
                alert(`${addCareerDetail.emp_id}번 사원 상세정보 추가 성공`);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="add-details-wrap">
            <div className="add-details-title">사원 상세경력 작성</div>
            <form onSubmit={ handleAdd }>
                <div className="detail-div">
                    <div>사원번호</div>
                    <input name="emp_id" type="number" value={addCareerDetail.emp_id} onChange={handleChange} />
                </div>
                <div className="detail-div">
                    <div>소속</div>
                    <input
                        name="emp_position"
                        type="text"
                        value={addCareerDetail.emp_position}
                        onChange={handleChange}
                    />
                </div>
                <div className="detail-div">
                    <div>발령 사항</div>
                    <input
                        name="emp_pos_detail"
                        type="text"
                        value={addCareerDetail.emp_pos_detail}
                        onChange={handleChange}
                    />
                </div>
                <div className="detail-div">
                    <div>최종학력</div>
                    <input name="emp_level" type="text" value={addCareerDetail.emp_level} onChange={handleChange} />
                </div>
                <div className="detail-div">
                    <div>직무</div>
                    <input name="emp_task" type="text" value={addCareerDetail.emp_task} onChange={handleChange} />
                </div>
                <div className="detail-div">
                    <div>평가 평점</div>
                    <input name="emp_rate" type="text" value={addCareerDetail.emp_rate} onChange={handleChange} />
                </div>
                <div className="detail-div">
                    <div>근속 기간</div>
                    <input
                        name="emp_pos_period"
                        type="text"
                        value={addCareerDetail.emp_pos_period}
                        onChange={handleChange}
                    />
                </div>
                <div className="detail-div">
                    <div>보직 경험</div>
                    <input
                        name="emp_pos_exp"
                        type="checkbox"
                        value={addCareerDetail.emp_pos_exp}
                        onChange={handleChange}
                    />
                </div>
                <div className="detail-div">
                    <div>교육 이수 여부</div>
                    <input
                        name="emp_training"
                        type="checkbox"
                        value={addCareerDetail.emp_training}
                        onChange={handleChange}
                    />
                </div>
                <div className="detail-div">
                    <div>자격증 목록</div>
                    <input name="emp_license" type="text" value={addCareerDetail.emp_license} onChange={handleChange} />
                </div>
                <div className="detail-div">
                    <div>수상경력</div>
                    <input name="emp_prize" type="text" value={addCareerDetail.emp_prize} onChange={handleChange} />
                </div>
                <div className="detail-div">
                    <div>처벌</div>
                    <input name="emp_punish" type="text" value={addCareerDetail.emp_punish} onChange={handleChange} />
                </div>
                <div className="detail-div">
                    <div>희망 직무</div>
                    <input
                        name="emp_pos_desire"
                        type="text"
                        value={addCareerDetail.emp_pos_desire}
                        onChange={handleChange}
                    />
                </div>
                <input className="submit-btn" type="submit" />
            </form>
        </div>
    );
}

/*
<div className="detail-div">
                    <div>자격증 목록</div>
                    <input
                        name="LicenseList"
                        type="text"
                        value={addCareerDetail.LicenseList.join(',')}
                        onChange={handleChange}
                    />
                </div>
                */
