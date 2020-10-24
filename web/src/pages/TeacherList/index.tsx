import React from "react";
import "./styles.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";

const TeacherList: React.FC = () => {
  return (
    <>
      <div id='page-teacher-list' className='container'>
        <PageHeader title='Here are the available Teachers'>
          <form id='search-teachers'>
            <Input name='subject' label='Subject' />
            <Input name='week_day' label='Week Day' />
            <Input type='time' name='time' label='Time' />
          </form>
        </PageHeader>

        <main>
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </main>
      </div>
    </>
  );
};

export default TeacherList;
