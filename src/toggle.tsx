import React, { useState } from 'react';
import './swiper.css'

function ToggleButton( initialState: any) {
  const [isOn, setIsOn] = useState(initialState.initialState);

  const handleClick = () => {
    setIsOn((prevState: any) => !prevState);
  };

  return (
    <button onClick={handleClick} className='abc' style={{ backgroundColor: isOn? '#d494e3':'gray'}}>
        <div className={`primary ${isOn?"ml-auto":""}`}></div>
    </button>
  );
}

export default ToggleButton;