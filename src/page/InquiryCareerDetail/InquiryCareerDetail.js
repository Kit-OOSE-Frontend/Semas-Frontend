import "./InquiryCareerDetail.css";
import { useCallback, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/Config";

export default function InquiryCareerDetail() {
    const [empid, setEmpId] = useState("");
    const [inquiryCareerDetail, setInquiryCareerDetail] = useState();
    const [status, setStatus] = useState("");

    const handleChange = useCallback(e => {
        setEmpId(e.target.value);
    });

    const handleInquiry = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/inquiry-emp-career?id=${empid}`);
            console.log(response);
            if (response.status === 200) {
                setInquiryCareerDetail(response.data);
                setStatus("성공");
            } else {
                setStatus("실패");
            }
        } catch (error) {
            console.error(error);
            setStatus("실패");
        }
    };

    return (
        <div className="inquiry-career-wrap">
            <div className="inquiry-career-title">사원 상세정보 조회</div>
            <div className="inquiry-id-input-wrap">
                <div className="inquiry-id-input">
                    <label>사원 id</label>
                    <input name="emp_id" type="text" value={empid} onChange={handleChange} />
                </div>
            </div>
            <button onClick={handleInquiry}>조회</button>
            {status === "성공" && inquiryCareerDetail ? (
                <div className="inquiry-career-result">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">사원번호</th>
                                <th scope="col">소속</th>
                                <th scope="col">발령 사항</th>
                                <th scope="col">최종학력</th>
                                <th scope="col">직무</th>
                                <th scope="col">평가 평점</th>
                                <th scope="col">근속 기간</th>
                                <th scope="col">보직 경험</th>
                                <th scope="col">교육 이수 여부</th>
                                <th scope="col">자격증 목록</th>
                                <th scope="col">수상경력</th>
                                <th scope="col">처벌</th>
                                <th scope="col">희망 직무</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{inquiryCareerDetail.emp_id}</td>
                                <td>{inquiryCareerDetail.emp_position}</td>
                                <td>{inquiryCareerDetail.emp_pos_detail}</td>
                                <td>{inquiryCareerDetail.emp_level}</td>
                                <td>{inquiryCareerDetail.emp_task}</td>
                                <td>{inquiryCareerDetail.emp_rate}</td>
                                <td>{inquiryCareerDetail.emp_pos_period}</td>
                                <td>{inquiryCareerDetail.emp_pos_exp ? "유경험" : "무경험"}</td>
                                <td>{inquiryCareerDetail.emp_training ? "이수함" : "이수하지않음"}</td>
                                <td>{inquiryCareerDetail.emp_license}</td>
                                <td>{inquiryCareerDetail.emp_prize}</td>
                                <td>{inquiryCareerDetail.emp_punish}</td>
                                <td>{inquiryCareerDetail.emp_pos_desire}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="career-no-result">{status === "실패" ? "조회 결과가 없습니다." : ""}</div>
            )}
        </div>
    );
}
