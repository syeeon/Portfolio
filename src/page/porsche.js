import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../header'
import PorscheMain from '../image/porsche_main.jpg'
import '../style/porsche.css'


function Porsche() {
  return (
    <div className='menu_bg'>
      <Header />
        <div>
          <img src={PorscheMain} alt="porsche_main" className='porsche_main' />
        </div>
      <div className='container porsche_review_wrap '>
      <div className='view_btn_box'> 
          <a href="https://baby-1306b.web.app" target="_blank"><span className='view_btn view_btn_right'>View Live</span></a>
          <a href="https://github.com/syeeon/prosch" target="_blank" ><span className='view_btn'>View Github</span></a>
        </div>
        <div className='review_box'>
          <h1>Review</h1>
          <div>
            <p>본 프로젝트는 React를 이용하여 홈, 회원가입, 로그인, 마이페이지, Model 리스트 등의 페이지로 구성되어 있는 반응형 싱글 페이지 웹앱 프로젝트 입니다.</p>
            <p>Firebase Authentication 연동하여 회원가입, 로그인, 패스워드 변경이 가능하도록 구현하였습니다. <br />  
            JSON 파일을 통해 Model 정보를 불러오며 각 시리즈별로 Model 정보 확인이 가능하도록 구현하였습니다.</p>
            <div className='skill_box'>
              <h2>Skill</h2>
              <p>React - Javascript</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='porsche_desktop_wrap'>
          <div className='desktop_box'>
            <div className='desktop_content'>
              <video autoPlay muted loop src="/video/porsche_desktop.mp4"></video>
            </div>
          </div>
        </div>
        <div className='porsche_desktop_wrap_sub'>
          <div className='porsche_explain_wrap'>
            <p className='porsche_explain'>
              미디어쿼리를 이용하여 데스크탑, 테블릿, 모바일 환경에서도 사용자가 편히 서비스를 이용할 수 있도록 반응형으로 구현하였습니다.
            </p>
          </div>
          <div className='porsche_desktop_sub_centent'>
            <div className='desktop_sub'>
            <div className='videos'>
              <video className='video_flex viedo_rigth' autoPlay muted loop src="/video/porsche_tablet.mp4"></video>
              <video className='video_flex' autoPlay muted loop src="/video/porsche_mobile.mp4"></video>
            </div>
            </div>
          </div>
        </div>
        <div className='porsche_desktop_wrap_sub'>
          <div className='porsche_explain_wrap'>
            <p className='porsche_explain'>
              Firebase Authentication 연동하여 회원가입, 로그인, 로그아웃, 패스워드 변경이 가능하도록 구현하였습니다.
            </p>
          </div>
          <div className='porsche_desktop_sub_centent'>
            <div className='desktop_sub'>
              <video autoPlay muted loop src="/video/porsche_login.mov"></video>
            </div>
          </div>
        </div>
        <div className='porsche_desktop_wrap_sub'>
          <div className='porsche_explain_wrap'>
            <p className='porsche_explain'>
              JSON 파일을 이용하여 Model List 페이지를 구성하였고 모델별로 페이지를 구분하여 보기 쉽게 구현하였습니다.
            </p>
          </div>
          <div className='porsche_desktop_sub_centent'>
            <div className='desktop_sub'>
              <video autoPlay muted loop src="/video/porsche_model.mov"></video>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Link to="/aesop">
          <div className='porsche_footer_wrap'>
            <p>Next Aesop</p>
          </div>
        </Link>
      </footer>
    </div>
  );
}

export default Porsche;
