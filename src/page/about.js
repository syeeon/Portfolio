import React, { Component } from 'react';

import Header from '../header'
import '../style/about.css'
import Tree from './growing'


function About() {
  return (
    <div className='menu_bg'>
      <Header />
      <div className='bg'></div>
      <div className='container sub_content'>
        <div className='about_sub_txt_wrap'>
          <h1 className='about_me'>About Me</h1>
          <h2 className='about_me_sub_title'>새로운 도전의 문을 열고,</h2>
          <h2 className='about_me_sub_title bottom '>계속 성장하는 프론트엔드가 되겠습니다.</h2>
          <div className='about_sub_txt_box_1 right'>
            <div className='right'>
              <p>뷰티 APP 회사에서 재직할 당시,</p>
              <p>개발팀과 App 리뉴얼 회의를 참여한 경험이 있습니다.</p>
              <p>리뉴얼 후 유저들의 만족스러운 피드백을 보며</p>
            </div>
            <div>
              <p>사용자의 needs에 맞추어</p> 
              <p>편리하고 효과적인 웹사이트를 구현할 수 있는 </p>
              <p>프론트엔드에 관심을 가지게 되었습니다.</p>
            </div>
          </div>
          <br />
          <div className='about_sub_txt_box_2'>
            <p>
            사용자들이 필요로 하는 기능이 무엇일지 끊임없이 고민하며,
            <br />
            유저들이 필요로 하는 개발자가 되기 위해 꾸준히 노력하고 성장하는 프론트엔드가 되겠습니다.
            </p>
          </div>
        </div>
        <div className='about_sub_txt_wrap_2'>
          <h3 className='sub_title top'>저는 이런 것을 다룰줄압니다.</h3>
            <p className='txt'>Html - Css - jQuery - Javascript - React</p>
            <p className='txt'>Photoshop - Illustrator </p>
          <h3 className='sub_title top'>저는 이런 것을 배웠습니다.</h3>
            <p className='txt'>프로젝트기반 프론트엔드(React, Vue) 웹&앱 SW개발자 양성과정 총 970시간 수료</p>
            <p className='txt'>한국관광대학교 졸업 </p>
        </div>
      </div>
      <Tree/>
    </div>
  );
}

export default About;
