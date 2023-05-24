import React from 'react';
import { Link } from 'react-router-dom';

import '../style/main.css'

function Main() {
  let doorStart = function() {
    let click = document.querySelector('.click_me');
    document.querySelector('.door').classList.add('open');
    document.querySelector('.door_wrap').classList.add('spread');
    click.classList.add('show');
  }
  
  return (
    <div>
      <div className='bg'></div>
        <p className='main_title main_top'>이승연의 새로운 도전에 문을 여시겠습니까?</p>
        <Link to="/about" className='door_wrap'>
          <div className='side side_1'></div>
          <div className='side side_2'></div>
          <div className='side side_3'></div>
          <div className='side side_4'></div>
          <div className='crack door' onClick={doorStart}>
          <p className='click_me show'>Click Me</p>
            <div className='knob'></div>
            <div className='porthole'></div>
          </div>
        </Link>
    </div>
  );
}

export default Main;
