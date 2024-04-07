import './App.css';
import MySwiper from './swiper';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const hoursSlept: Record<string, number> = {
  monday: 510,
  tuesday: 420,
  wednesday: 480,
  thursday: 540,
  friday: 600,
  saturday: 660,
  sunday: 720,
};

const dayColor: Record<string, string> = {
  monday: "d494e3",
  tuesday: "97b9fd",
  wednesday: "d494e3",
  thursday: "97b9fd",
  friday: "d494e3",
  saturday: "97b9fd",
  sunday: "97b9fd",
}

function App() {
  const title = {
    header: "Sleep Schedule",
    content1: "Activity Progress",
    content2: "Your Schedule",
  }

  const sortDays = (days: string[]) => {
    const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days.sort((a, b) => dayOrder.indexOf(a) - dayOrder.indexOf(b));
  };

  const daysOfWeek = sortDays(Object.keys(hoursSlept));
  const hours = Object.values(hoursSlept);
  const maxHours = Math.max(...hours);
  
  const barStyles = (hoursValue: number, colorvalue: string) => ({
    height: `${( hoursValue / maxHours) * 90}%`,
    background: `#${colorvalue}`,
  });

  daysOfWeek.map((theday, i) => (
  //   console.log("abcmhss", theday, i),
    console.log("abcd", barStyles(hoursSlept[theday], dayColor[theday]))
    ))
  return (
    <div className='mb-6'>
      <div className="App mb-3">
        <div className="content">
          <h3>{ title.header }</h3>
        </div>
      </div>
      <div className='d-flex'>
        <div className="col-9">
          <h3>{ title.content1 }</h3>
        </div>
        <div className="col-3 d-flex">
          <button className='graphButton'>Weekly <FontAwesomeIcon icon={faChevronDown} /></button>
        </div>
      </div>
      <div className='h-100 chart-wrap mb-3'>
        <div className="sleep-chart">
        {daysOfWeek.map((day, index) => (
            <div key={index} className="sleep-bar">
              <div className="fullbar">
                <div className="bar" style={barStyles(hoursSlept[day], dayColor[day])}></div>
              </div>
              <div className="label">{day.substring(0, 3)}</div>
            </div>
        ))}
            </div>
      </div>
      <div>
        <h3>{title.content2}</h3>
        <MySwiper />
      </div>
    </div>
  );
}

export default App;
