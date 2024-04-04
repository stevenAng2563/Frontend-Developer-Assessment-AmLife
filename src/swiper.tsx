import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css'
import 'swiper/css';

// const hoursSlept: Record<string, number> = {
//   monday: 510,
//   tuesday: 420,
//   wednesday: 480,
//   thursday: 540,
//   friday: 600,
//   saturday: 660,
//   sunday: 720,
// };
const today = new Date();
const todayId: string = today.toString().split(" ").slice(0, 4).join("-")
console.log("today", todayId)


function generateDateArray(startDate: Date, endDate: Date) {
    const dateArray = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dateArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateArray;
  }

  function Select(id: string) {
    console.log("abcdsuppose")
    document.querySelectorAll('.swiper-content').forEach(function(content) {
        (content as HTMLElement).style.display = 'none';
    });
    document.querySelectorAll('.swiper-button').forEach(function(tab) {
      console.log("remove")
        tab.classList.remove('active');
        console.log("remove")
    });
    (document.getElementById(id) as HTMLElement).classList.add('active');
    (document.getElementById(id + '.content') as HTMLElement).style.display = 'flex';
}

  function Myswiper() {
    const startDate = new Date('2024-04-01'); // 开始日期
    const endDate = new Date('2024-05-31'); // 结束日期
    const dates = generateDateArray(startDate, endDate);
  return (
    <>
        <Swiper
            spaceBetween={25}
            slidesPerView={4.5}
        >
            {dates.map((date, index) => (
                <SwiperSlide key={index} className='swiper-background'>
                <button className='swiper-button' id={date.toDateString().split(" ").join("-")} onClick={() => Select(date.toDateString().split(" ").join("-"))}>
                    <div className='swiper-button-text'>{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                    <div className='swiper-button-text'>{date.toLocaleDateString('en-US', { day: 'numeric' })}</div>
                </button>
                </SwiperSlide>
            ))}
        </Swiper>
    </>
    
    );
};


export default Myswiper;