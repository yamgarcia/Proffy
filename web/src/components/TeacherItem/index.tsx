import React from "react";
import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem: React.FC = () => {
  return (
    <>
      <article className='teacher-item'>
        <header>
          <img
            src='https://avatars3.githubusercontent.com/u/46078084?s=460&u=b0ff170f13ccf75c5d168fea9f839188561fe461&v=4'
            alt='Marcos Garcia'
          />
          <div>
            <strong>Marcos Garcia</strong>
            <span>Computer Architecture</span>
          </div>
        </header>

        <p>
          “Computer Architecture is the science of selecting hardware,
          components to create computers that meet functional goals.”
        </p>

        <footer>
          <p>
            Price/hour
            <strong>$80.90</strong>
          </p>
          <button type='button'>
            <img src={whatsappIcon} alt='Contact-whatsapp' />
            Get in Contact
          </button>
        </footer>
      </article>
    </>
  );
};

export default TeacherItem;
