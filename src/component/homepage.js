
import reactDom from 'react-dom';
import React, { useState, useEffect } from 'react';
import DaysInWeek from './select.js';
function Homepage() {
  const [showSelectedyear, setShowSelectedyear] = useState("2020")  // selected year is 2016;
  const [weekdays, setWeekdays] = useState({})

  const [calenderData, setcalenderData] = useState([
    {
      "name": "Tyrion Lannister",
      "birthday": "12/02/1978"
    }, {
      "name": "Cersei Lannister",
      "birthday": "11/30/1975"
    }, {
      "name": "Daenerys Targaryen",
      "birthday": "11/24/1991"
    }, {
      "name": "Arya Stark",
      "birthday": "11/25/1996"
    }, {
      "name": "Jon Snow",
      "birthday": "12/03/1989"
    }, {
      "name": "Sansa Stark",
      "birthday": "08/15/1992"
    }, {
      "name": "Jorah Mormont",
      "birthday": "12/16/1968"
    }, {
      "name": "Jaime Lannister",
      "birthday": "12/06/1975"
    }, {
      "name": "Sandor Clegane",
      "birthday": "11/07/1969"
    }, {
      "name": "Tywin Lannister",
      "birthday": "10/12/1951"
    }, {
      "name": "Theon Greyjoy",
      "birthday": "12/31/1989"
    }, {
      "name": "Samwell Tarly",
      "birthday": "12/07/1990"
    }, {
      "name": "Joffrey Baratheon",
      "birthday": "06/12/1992"
    }, {
      "name": "Catelyn Stark",
      "birthday": "12/03/1962"
    }, {
      "name": "Bran Stark",
      "birthday": "12/02/1995"
    }, {
      "name": "Petyr Baelish",
      "birthday": "11/20/1974"
    }, {
      "name": "Robb Stark",
      "birthday": "11/28/1986"
    }, {
      "name": "Brienne of Tarth",
      "birthday": "11/27/1985"
    }, {
      "name": "Margaery Tyrell",
      "birthday": "12/02/1989"
    }, {
      "name": "Stannis Baratheon",
      "birthday": "09/14/1971"
    }, {
      "name": "Davos Seaworth",
      "birthday": "02/13/1973"
    }, {
      "name": "Tormund Giantsbane",
      "birthday": "12/14/1974"
    }, {
      "name": "Jeor Mormont",
      "birthday": "11/01/1955"
    }, {
      "name": "Eddard Stark",
      "birthday": "12/02/1963"
    }, {
      "name": "Khal Drogo",
      "birthday": "12/05/1980"
    }, {
      "name": "Ramsay Bolton",
      "birthday": "12/05/1976"
    },
    {
      "name": "Robert Baratheon",
      "birthday": "12/02/1965"
    },
    {
      "name": "Daario Naharis",
      "birthday": "12/02/1985"
    },
    {
      'name': "Viserys Targaryen",
      'birthday': "12/06/1984"
    }
  ])


  useEffect(() => {
    parsedata()
  }, [calenderData, showSelectedyear]);


  const parsedata = () => {
    const weekDaysMon = [];
    const weekDaysTue = [];
    const weekDaysWed = [];
    const weekDaysThu = [];
    const weekDaysFri = [];
    const weekDaysSat = [];
    const weekDaysSun = [];


    for (let i = 0; i < calenderData.length; i++) {
      let temp = calenderData[i].name.replace(/\s/g, '')
      if(temp == ''|| temp=='Null') {
        // console.error('Calendarrrr' + calenderData[i].name);
      continue;
       }
      var date = new Date(calenderData[i].birthday) // get date of birth from "calenderData" array
      // console.log(date);
      let changeyear = new Date(showSelectedyear, date.getMonth(), date.getDate(), 1)
      console.error(`date ${date.toDateString()} newdate ${changeyear.toDateString()}`)





// let nameInitials= (calenderData[i].name + calenderData)

      const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"];

      var day = weekdays[changeyear.getDay()]
      // console.log(day);
      let tempInitials = calenderData[i].name.split(' ')
      let initials = '';
      for(let i=0; i<tempInitials.length; i++) {
        initials +=  tempInitials[i].substring(0, 1);
      }
      console.log(initials)

      if (day === "Monday") {
        weekDaysMon.push({ date, initials})
      }
      else if (day === "Tuesday") {
        weekDaysTue.push({ date, initials})
      }
      else if (day === "Wednesday") {
        weekDaysWed.push({ date, initials})
      }
      else if (day === "Thursday") {
        weekDaysThu.push({ date, initials})
      }
      else if (day === "Friday") {
        weekDaysFri.push({ date, initials})
      }
      else if (day === "Saturday") {
        weekDaysSat.push({ date, initials})
      }
      else if (day === "Sunday") {
        weekDaysSun.push({ date, initials})
      }
    }


    setWeekdays({
      Mon: weekDaysMon.sort((a, b) => b.date - a.date),
      Tue: weekDaysTue.sort((a, b) => b.date - a.date),
      Wed: weekDaysWed.sort((a, b) => b.date - a.date),
      Thu: weekDaysThu.sort((a, b) => b.date - a.date),
      Fri: weekDaysFri.sort((a, b) => b.date - a.date),
      Sat: weekDaysSat.sort((a, b) => b.date - a.date),
      Sun: weekDaysSun.sort((a, b) => b.date - a.date)
    })
    console.log(weekdays)
  }




  const handleChange = (eleme) => {
    setShowSelectedyear(eleme.target.value)
    console.log(showSelectedyear)
  }

  const handleDataChange = (elem) => {
    try {
      setcalenderData(JSON.parse(elem.target.value));
    } catch (err) {
      return;
      //console.log("error")
    }


  };

  return (

    <div> <div className="app">

      <h1 className="app__header">Birthday Cal &ndash; Work Area</h1>

      <div className="app__content">

        <div id="work-area">

          <div className="calendar-container">
            <DaysInWeek weekDaysData={weekdays} />
          </div>

          <div className="app__inputs">
            <textarea className="app__txt js-json" id="json-input" placeholder="Paste the json here." value={JSON.stringify(calenderData, null, 4)} onChange={(elem) => { handleDataChange(elem) }} >
            </textarea>

            <div className="app__actions">
              <label>Year</label>
              <select className="js-year-input" value={showSelectedyear} onChange={(eleme) => { handleChange(eleme) }}>
                {/* <button></button> */}
                <option value="2020" selected>2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
              </select>
            </div>
          </div>
        </div>

        <hr className="border-line app__border" />

      </div>
    </div>
    </div>


  );

}
export default Homepage;