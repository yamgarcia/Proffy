import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import landdingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import { cleanup } from "@testing-library/react";
import api from "../../services/api";

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((res) => {
      const { total } = res.data;

      setTotalConnections(total);
    });
  }, []);

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
            <Link to='/study' className='study'>
              <img src={studyIcon} alt='Study' />
              Study
            </Link>
            <Link to='/give-classes' className='give-classes'>
              <img src={giveClassesIcon} alt='giveClassesIcon' />
              Teach
            </Link>
          </div>
          <span className='total-connections'>
            Total of {totalConnections} connections{" "}
            <img src={purpleHeartIcon} alt='purpleHeartIcon' />{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default Landing;
