import './InquiryCareerDetail.css';
import { useCallback, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config/Config';

export default function InquiryCareerDetail() {
    const [empid, setEmpId] = useState('');
    const [inquiryCareerDetail, setInquiryCareerDetail] = useState();

    const handleChange = useCallback((e) => {
        setEmpId(e.target.value);
    });

    const handleInquiry = async (e, empid) => {
        e.preventDefault();
        try {
            const response = await axios.get(`${BASE_URL}/inquiry-emp-career/?id=${empid}`);
            if (response.status === 200) {
                setInquiryCareerDetail(response.data);
            }
        } catch (error) {
            console.error(error);
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
            <button onClick={() => handleInquiry}>조회</button>
            {inquiryCareerDetail?.length > 0 ? (
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
                            {inquiryCareerDetail.map((result) => (
                                <tr>
                                    <td>{result.emp_id}</td>
                                    <td>{result.emp_position}</td>
                                    <td>{result.emp_pos_detail}</td>
                                    <td>{result.emp_level}</td>
                                    <td>{result.emp_task}</td>
                                    <td>{result.emp_rate}</td>
                                    <td>{result.emp_pos_period}</td>
                                    <td>{result.emp_pos_exp}</td>
                                    <td>{result.emp_training}</td>
                                    <td>{result.emp_license}</td>
                                    <td>{result.emp_prize}</td>
                                    <td>{result.emp_punish}</td>
                                    <td>{result.emp_pos_desire}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="career-no-result">조회 결과가 없습니다.</div>
            )}
        </div>
    );
}
