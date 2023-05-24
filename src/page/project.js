import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../header'
import '../style/project.css'


function Project() {
  return (
    <div className='menu_bg'>
      <Header />
      <div className='bg'></div>
      <div className='container'>
        <Link to="/aesop" color="rgb(37, 32, 32)" ><span className='aesop pj'>aesop</span></Link>
        <Link to="/porsche" color="#9b111e" ><span className='porsche pj'>porsche</span></Link>
      </div>
    </div>
  );
}

export default Project;
