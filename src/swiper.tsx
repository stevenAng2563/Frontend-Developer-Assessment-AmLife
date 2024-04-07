import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css'
import 'swiper/css';
import { format } from 'date-fns';
import bed from './assets/bed.png'
import alarm from './assets/alarm.png'
import ToggleButton from './toggle';

const sleepSchedules = [
  {
    date: "2024-03-21",
    date_bedtime: "2024-03-21 21:00:00",
    alert_on_bedtime: true,
    date_wake: "2024-03-22 05:30:00",
    alert_on_wake: true,
  },
  {
    date: "2024-03-22",
    date_bedtime: "2024-03-22 22:00:00",
    alert_on_bedtime: true,
    date_wake: "2024-03-23 06:30:00",
    alert_on_wake: true,
  },
  {
    date: "2024-03-23",
    date_bedtime: "2024-03-23 23:00:00",
    alert_on_bedtime: true,
    date_wake: "2024-03-24 07:30:00",
    alert_on_wake: true,
  },
  {
    date: "2024-04-06",
    date_bedtime: "2024-04-06 21:00:00",
    alert_on_bedtime: true,
    date_wake: "2024-04-07 05:30:00",
    alert_on_wake: true,
  },
  {
    date: "2024-04-07",
    date_bedtime: "2024-04-07 22:00:00",
    alert_on_bedtime: true,
    date_wake: "2024-04-08 06:30:00",
    alert_on_wake: true,
  },
  {
    date: "2024-04-08",
    date_bedtime: "2024-04-08 23:00:00",
    alert_on_bedtime: true,
    date_wake: "2024-04-09 07:30:00",
    alert_on_wake: true,
  },
];
localStorage.setItem('sleepSchedule', JSON.stringify(sleepSchedules))
const schedule = localStorage.getItem('sleepSchedule')
if (schedule) {
  const sleepSchedule = JSON.parse(schedule)
}else {
  console.log('No sleep schedules found in local storage.');
}

const today = new Date();
const todayId: string = today.toString().split(" ").slice(0, 4).join("-")
// console.log("pipi", Math.floor(Math.abs((new Date("2024-04-06 23:00:00").getTime() - today.getTime())/ (1000 * 60 * 60))))
// console.log("pipi1", Math.ceil(Math.abs((new Date("2024-04-06 23:00:00").getTime() - today.getTime())/ (1000 * 60))% 60))

function generateDateArray(startDate: Date, endDate: Date) {
    const dateArray = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dateArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateArray;
  }

  function Select(id: string, id2: string) {
    document.querySelectorAll('.swiper-content').forEach(function(content) {
        (content as HTMLElement).style.display = 'none';
    });
    document.querySelectorAll('.bedtime').forEach(function(content) {
      (content as HTMLElement).style.display = 'none';
  });
    document.querySelectorAll('.swiper-button').forEach(function(tab) {
      tab.classList.remove('active');
    });
    (document.getElementById(id) as HTMLElement).classList.add('active');
    (document.querySelector(`.swiper-content[id="${id}"]`) as HTMLElement).style.display = 'flex';
    document.querySelectorAll(`.bedtime.${"a"+id2}`).forEach(function(content){
      (content as HTMLElement).style.display = 'block';
    })
  }

  const renderSwiperContent = (date: Date, index: React.Key | null | undefined) => {
    return (
      <div key={index} className="swiper-content"
        style={{ display: date.toDateString().split(" ").join("-") === todayId ? 'flex' : 'none' }}
        id={date.toDateString().split(" ").join("-")}
      >
        {sleepSchedules.map((schedule, index) => (
          <div key={index} className={`col-12 bedtime ${"a" + schedule.date}`} style={{ display: schedule.date === date.toISOString().slice(0, 10)? 'block':'none'}}>
            <div className='bedtime-col d-flex px-3'>
              <div className='col-2 bed-img'><img src={bed} alt="img" /></div>
              <div className='col-10'>
                <div className="d-flex">
                  <strong>Bedtime,</strong>
                  <div className="small-letter"> {format(new Date(schedule.date_bedtime), 'h:mma.')}</div>
                </div>
                <div className='mt-1 d-flex'>
                  {new Date(schedule.date_bedtime).getTime() > today.getTime() ? (
                  <>
                    <div>in</div>
                    {Math.floor(Math.abs((new Date(schedule.date_bedtime).getTime() - today.getTime()) / (1000 * 60 * 60))) < 24 ?(
                    <>
                      <div className="small-letter">
                        {Math.floor(Math.abs((new Date(schedule.date_bedtime).getTime() - today.getTime()) / (1000 * 60 * 60)))}hours
                      </div>
                      <div className="small-letter">
                        {Math.ceil(Math.abs((new Date(schedule.date_bedtime).getTime() - today.getTime()) / (1000 * 60)) % 60)}minutes
                      </div>
                    </>
                    ): (
                      <div className="small-letter">
                        &gt; 24 hours
                      </div>
                    )}
                  <div className='toggleButton'>
                    <ToggleButton initialState={schedule.alert_on_bedtime}/>
                  </div>
                  </>
                  ): (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className='bedtime-col d-flex px-3'>
              <div className='col-2 alarm-img'><img src={alarm} alt="img" /></div>
              <div className='col-10'>
                <div className="d-flex">
                  <strong>Alarm,</strong>
                  <div className="small-letter"> {format(new Date(schedule.date_wake), 'h:mma.')}</div>
                </div>
                <div className='mt-1 d-flex'>
                  {new Date(schedule.date_wake).getTime() > today.getTime() ? (
                  <>
                    <div>in</div>
                    {Math.floor(Math.abs((new Date(schedule.date_wake).getTime() - today.getTime()) / (1000 * 60 * 60))) < 24 ?(
                    <>
                      <div className="small-letter">
                        {Math.floor(Math.abs((new Date(schedule.date_wake).getTime() - today.getTime()) / (1000 * 60 * 60)))}hours
                      </div>
                      <div className="small-letter">
                        {Math.ceil(Math.abs((new Date(schedule.date_wake).getTime() - today.getTime()) / (1000 * 60)) % 60)}minutes
                      </div>
                    </>
                    ): (
                      <div className="small-letter">
                        &gt; 24 hours
                      </div>
                    )}
                  <div className='toggleButton'>
                    <ToggleButton initialState={schedule.alert_on_wake} />
                  </div>
                  </>
                  ): (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div>
              {date.toISOString().slice(0, 10)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  function Myswiper() {
    const startDate = new Date('2024-03-01');
    const endDate = new Date('2024-05-31');
    const initialDate = Math.floor(Math.abs(today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    const dates = generateDateArray(startDate, endDate);
    // {dates.map((date, index) => (
    //   console.log("hihi", Object.values(sleepSchedules).map(schedule => schedule))
    // ))}
  return (
    <>
        <Swiper
            spaceBetween={25}
            slidesPerView={4.5}
            initialSlide={initialDate}
        >
            {dates.map((date, index) => (
                <SwiperSlide key={index} className='swiper-background'>
                    <button className={`swiper-button ${date.toDateString().split(" ").join("-") === todayId ? 'active' : ''}`}
                      id={date.toDateString().split(" ").join("-")}
                      onClick={() => Select(date.toDateString().split(" ").join("-"), date.toISOString().slice(0, 10))}>
                        <div className='swiper-button-text'>{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                        <div className='swiper-button-text'>{date.toLocaleDateString('en-US', { day: 'numeric' })}</div>
                    </button>
                </SwiperSlide>
            ))}
        </Swiper>
        <div className='mx-3'>
          {dates.map((date, index) => renderSwiperContent(date, index))}
        </div>
    </>
    
    );
};


export default Myswiper;