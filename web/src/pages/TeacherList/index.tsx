import React from "react";
import "./styles.css";
import PageHeader from "../../components/PageHeader";

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
      </div>
    </>
  );
};

export default TeacherList;
