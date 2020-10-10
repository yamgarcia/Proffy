import React from "react";
import "./styles.css";
import PageHeader from "../../components/PageHeader";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherList: React.FC = () => {
  return (
    <>
      <div id='page-teacher-list' className='container'>
        <PageHeader title='Here are the available Teachers'>
          <form id='search-teachers'>
            <div className='input-block'>
              <label htmlFor='subject'>Subject</label>
              <input type='text' id='subject' />
            </div>
            <div className='input-block'>
              <label htmlFor='week_day'>Week Day</label>
              <input type='text' id='subject' />
            </div>
            <div className='input-block'>
              <label htmlFor='time'>Time</label>
              <input type='text' id='subject' />
            </div>
          </form>
        </PageHeader>

        <main>
          <article className='teacher-item'>
            <header>
              <img
                src='https://avatars3.githubusercontent.com/u/46078084?s=460&u=b0ff170f13ccf75c5d168fea9f839188561fe461&v=4'
                alt='Marcos Garcia'
              />
              <div>Marcos Garcia</div>
              <span>Computer Architecture</span>
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
        </main>
      </div>
    </>
  );
};

export default TeacherList;
