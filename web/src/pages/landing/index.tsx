import React from "react";

import "./styles.css";

import logoImg from "../../assets/images/logo.svg";
import landdingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

function Landing() {
  return (
    <>
      <div id='page-landing'>
        <div id='page-landing-content' className='container'>
          <div className='logo-container'>
            <img src={logoImg} alt='logoImg Proffy' />
            <h2>Your online learning platform</h2>
          </div>

          <img src={landdingImg} alt='landdingImg' className='hero-image' />

          <div className='buttons-container'>
            <a href='\' className='study'>
              <img src={studyIcon} alt='Study' />
              Study
            </a>

            <a href='\' className='give-classes'>
              <img src={giveClassesIcon} alt='giveClassesIcon' />
              Teach
            </a>
          </div>
          <span className='total-connections'>
            Total of 200 connections{" "}
            <img src={purpleHeartIcon} alt='purpleHeartIcon' />{" "}
          </span>
        </div>
      </div>
    </>
  );
}

export default Landing;
