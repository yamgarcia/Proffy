import React from "react";
import "./styles.css";
import PageHeader from "../../components/PageHeader";

const TeacherList: React.FC = () => {
  return (
    <>
      <div id='page-teacher-list' className='container'>
        <PageHeader title='Here are the available Teachers' />
      </div>
    </>
  );
};

export default TeacherList;
