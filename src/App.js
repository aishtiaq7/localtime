import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [vanTime, setVanTime] = useState('');
  const [bdTime, setBdTime] = useState();

  function changeTimeZone( dateToChange){ //Changes time to BANGLADESH TIME

    const changeThisDate = new Date(dateToChange);
    const options = {
        // day: '2-digit', month: '2-digit', year: '2-digit',
        // hour: '2-digit', minute: '2-digit', second: '2-digit',
        timeZone: 'Asia/Dhaka',
        // timeZoneName: 'short',
        dateStyle: 'short',
        timeStyle: 'short',
        hour12: true,
    }
    const formatter = new Intl.DateTimeFormat('en-GB', options)
    const dateInNewTimezone = formatter.format(changeThisDate)


    console.log(dateInNewTimezone);
    return dateInNewTimezone;
}
  const callback = () =>{
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    setVanTime(time);
    
    let bdTime = new Date();
    bdTime = changeTimeZone(bdTime);
    setBdTime(bdTime);
  }

  setInterval(callback, 1000);

  return (
    <div className="app">
      <div className='container'>
        <div className='singleTime'>
          <h3>Vancouver time:</h3>
          <h3>{vanTime}</h3>
        </div>

        <div className='singleTime'>
          <h3>Bangladesh Time:</h3>
          <h3>{bdTime}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
