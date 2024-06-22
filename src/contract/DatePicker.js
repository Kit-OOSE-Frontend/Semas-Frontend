import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function MyDatePicker({ onChange }) {
    const [startDay, setStartDay] = useState(null);
    const [endDay, setEndDay] = useState(null);

    const handleStartDateChange = (date) => {
        setStartDay(date);
        onChange([date, endDay]); // 시작일이 변경되면 부모 컴포넌트에 시작일과 종료일 전달
    };

    const handleEndDateChange = (date) => {
        setEndDay(date);
        onChange([startDay, date]); // 종료일이 변경되면 부모 컴포넌트에 시작일과 종료일 전달
    };

    return (
        <div className="date-picker-wrapper">
            <DatePicker
                selected={startDay}
                onChange={handleStartDateChange}
                placeholderText="시작일"
                className="date-picker"
            />
            <span className="date-separator">~</span>
            <DatePicker
                selected={endDay}
                onChange={handleEndDateChange}
                placeholderText="종료일"
                className="date-picker"
            />
        </div>
    );
}

export default MyDatePicker;
