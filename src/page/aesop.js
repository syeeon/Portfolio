import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../header'
import AesopMain from '../image/content.jpg'
import '../style/aesop.css'


function Aesop() {
  return (
    <div className='menu_bg'>
      <Header />
        <div>
          <img src={AesopMain} alt="aesop_main" className='aesop_main' />
        </div>
      <div className='aesop_review_wrap'>
        <div className='view_btn_box'> 
          <a href="http://glsy1150.dothome.co.kr/syeeon/php" target="_blank"><span className='view_btn view_btn_right'>View Live</span></a>
          <a href="http://glsy1150.dothome.co.kr/syeeon/php/admin/login/login.php" target="_blank"><span className='view_btn view_btn_right'>View Live Admin</span></a>
          <a href="https://github.com/syeeon/aesop" target="_blank"><span className='view_btn'>View Github</span></a>
        </div>
        <div className='review_box'>
          <h1>Review</h1>
          <div>
            <p>본 프로젝트는 Javascript, PHP, MySQL 를 이용하여, 스킨&바디 브랜드 홈페이지를 판매 목적 사이트에 맞게 리뉴얼한 Web Project 입니다.</p>
            <p>회원가입, 로그인, 게시판 작성, 회원 정보 수정 등이 기능이 가능하며 Admin 페이지 내에서 유저 관리 및 페이지 관리를 할 수 있도록 웹사이트를 구현하였습니다.</p>
            <div className='skill_box'>
              <h2>Skill</h2>
              <p>Javascript - jQuery - PHP - MySQL </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='aesop_desktop_wrap'>
          <div className='desktop_box'>
            <div className='desktop_content'>
              <video autoPlay muted loop src="/video/aesop_index.mp4"></video>
            </div>
          </div>
        </div>
        <div className='aesop_desktop_wrap_sub'>
          <div className='aesop_explain_wrap'>
            <p className='aesop_explain'>
            회원가입, 로그인, 로그아웃, 회원 정보 수정, 회원 탈퇴 기능을 구현하였습니다.
            로그인 시 Mypage 로 이동, 로그아웃 시 index 페이지로 이동하도록 구현하였습니다.
            </p>
          </div>
          <div className='aesop_desktop_sub_centent'>
            <div className='desktop_sub'>
            <video autoPlay muted loop src="/video/aesop_login.mp4"></video>
            </div>
          </div>
        </div>
        <div className='aesop_desktop_wrap_sub'>
          <div className='aesop_explain_wrap'>
            <p className='aesop_explain'>
              게시판 작성, 수정 및 삭제가 가능하도록 구현하였습니다.
              홈페이지 로그인 접속이 된 경우에 한하여 이용이 가능하며, <br />
              수정과 삭제 시 유저의 패스워드를 입력해야 접근이 가능하도록 구현하였습니다.
            </p>
          </div>
          <div className='aesop_desktop_sub_centent'>
            <div className='desktop_sub'>
            <video autoPlay muted loop src="/video/aesop_board.mp4"></video>
            </div>
          </div>
        </div>
        <div className='aesop_desktop_wrap_sub'>
          <div className='aesop_explain_wrap'>
            <p className='aesop_explain'>
              관리자 페이지를 따로 생성하여 스토어 이동, 유저 리스트, Notice, F&A 관리가 가능하도록 구현하였습니다.
              유저 정보 확인 및 탈퇴 기능이 가능하며, Notice 의 경우 관리자 페이지에서만 작성이 가능하도록 구현하였습니다.
            </p>
          </div>
          <div className='aesop_desktop_sub_centent'>
            <div className='desktop_sub'>
            <video autoPlay muted loop src="/video/aesop_admin.mp4"></video>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Link to="/porsche">
          <div className='aesop_footer_wrap'>
            <p>Next Porsche</p>
          </div>
        </Link>
      </footer>
    </div>
  );
}

export default Aesop;
