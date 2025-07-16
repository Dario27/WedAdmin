import {useState} from 'react'
import DatePicker from 'react-datepicker';


function DateRangePicker() {

    const [startDate, setStartDate] = useState(new Date("2014/02/08"));

    const [endDate, setEndDate] = useState(new Date());

    const CustomInput = ({ value, onClick, onChange }) => (
      <input
        type="text"
        value={value}
        onClick={onClick}
        onChange={onChange}
        className="form-control"
        onKeyDown={(e) => {
          if (
            !/[\d\/]/.test(e.key) && 
            e.key !== "Backspace" && 
            e.key !== "ArrowLeft" && 
            e.key !== "ArrowRight" &&
            e.key !== "Tab" &&
            e.key !== "Delete"
          ) {
            e.preventDefault();
          }
        }}
      />
    )
  return (
    <>
    <div className="daterange-picker">
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          // selectsStart
          startDate={startDate}
          endDate={endDate}
          customInput={<CustomInput />}
          className="form-control"
        />
        <span className="range-seperator"> to </span>
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          // selectsEnd
          endDate={endDate}
          minDate={startDate}
          customInput={<CustomInput />}
          className="form-control"
        />
    </div>
    </>
  )
}

export default DateRangePicker