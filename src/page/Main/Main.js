import {Link} from "react-router-dom";
import './Main.css'

export default function Main() {
    return (
        <div className='main-wrap'>
            <div className='add-details-title'>메인 페이지</div>
            <div className='main-container'>
                <Link to='/add'>
                    <button>집행 세부내역 작성</button>
                </Link>
                <Link to='/inquiry'>
                    <button>월별 부서운영비 카드사용내역 조회</button>
                </Link>
                <Link to='/retire'>
                    <button>퇴직연금 계산</button>
                </Link>
                <Link to='/inquiry-severance-amount'>
                    <button>퇴직금액 조회</button>
                </Link>
                <Link to='/contract-ledger'>
                    <button>계약대장 조회</button>
                </Link>
                <Link to='/input-contract'>
                    <button>계약서 작성</button>
                </Link>
                <Link to='/update-asset'>
                    <button>자산 조회 및 수정</button>
                </Link>
                <Link to='/budget'>
                    <button>예산 편성 신청</button>
                </Link>
                <Link to='/career'>
                    <button>상세경력 입력</button>
                </Link>
                <Link to='/inquirybudget'>
                    <button>예산 편성 신청 내역 조회</button>
                </Link>
                <Link to='/inquirycareer'>
                    <button>상세경력 조회</button>
                </Link>
            </div>
        </div>
    )
}