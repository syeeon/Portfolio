import React, { Component } from 'react';

import Header from '../header'
import '../style/contact.css'


function Contact() {
  return (
    <div className='menu_bg'>
        <Header />
        <div className='bg'></div>
        <div className='container contact_wrap'>
            <h1 className='contact_title'>Contact</h1>
            <div className='contact_box'>
                <ul>
                    <li className='email'>Email</li>
                    <li>glsy1150@naver.com</li>
                    <li className='phone'>Phone</li>
                    <li>010-9948-9742</li>
                </ul>
                <div>
                    <p className='contact_main_txt'>"이승연의 문"을 여시겠습니까?</p>
                    <a href="/introduction_file.pdf" download="/introduction_file.pdf" className='file' target="_blank">이력서 다운로드</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;
