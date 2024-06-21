import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function MyDatePicker() {
    const [startDay, setStartDay] = useState(null);
    const [endDay, setEndDay] = useState(null);

    const handleStartDateChange = (date) => {
        setStartDay(date);
    };

    const handleEndDateChange = (date) => {
        setEndDay(date);
    };

    return (
        <div className="date-picker-wrapper">
            <DatePicker
                selected={startDay}
                onChange={handleStartDateChange}
                placeholderText="시작일"
                className="date-picker"
            />
            <h className="date-separator">~</h>
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
