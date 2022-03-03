

// import Select from "react-select";
import React from 'react';
const DaysInWeek= (props) => {

    const DName = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'];
    console.log(props.weekDaysData)
    //console.log(props)
// Display the data using the map function.
// Automatic resize of week day box , as per number of birthdays falling on a same day 
// math.cbrt(value) for cube root,  math.sqrt(value) for square root, 
//math.ceil(value) for to get decimal number into round figure. but that will be too upper number. 
    return (
        <>
            <div className='container'>

                {DName.map((weekday, index) => {
                     console.log(weekday)
                    const box = Math.ceil(Math.sqrt(props.weekDaysData[weekday]?.length))
                    console.log(box)
                    const calculateSize = box === 0 ? 120 : 120 / box;
                    console.log(calculateSize)

     return (
            <div>
            <div key={index} className='day'>{weekday}</div>
            <div className="init" style={{ height: "120px", width: "120px", gridTemplateColumns: `repeat(${box}, 1fr)`  }}>
            {props.weekDaysData[weekday] && props.weekDaysData[weekday].map((person) => {
     return <div style={{ height: calculateSize + "px", width: calculateSize + "px"}}>{person.initials}</div>
            })}
        </div>
        </div>)
        })}
    </div>

    </>
    )
}

export default DaysInWeek;