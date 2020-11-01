import React from "react";
import "./styles.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

const TeacherList: React.FC = () => {
  return (
    <>
      <div id='page-teacher-list' className='container'>
        <PageHeader title='Here are the available Teachers'>
          <form id='search-teachers'>
            <Select
              name='subject'
              label='Subject'
              options={[
                { value: "Art", label: "Art" },
                { value: "Biology", label: "Biology" },
                { value: "Math", label: "Math" },
                { value: "Science", label: "Science" },
                { value: "History", label: "History" },
                { value: "Grammar", label: "Grammar" },
                { value: "Chemistry", label: "Chemistry" },
              ]}
            />
            <Select
              name='week_day'
              label='Week Day'
              options={[
                { value: "0", label: "Sunday" },
                { value: "1", label: "Monday" },
                { value: "2", label: "Tuesday" },
                { value: "3", label: "Wednesday" },
                { value: "4", label: "Thursday" },
                { value: "5", label: "Friday" },
                { value: "6", label: "Saturday" },
              ]}
            />
            <Input type='time' name='time' label='Time' />
          </form>
        </PageHeader>

        <main>
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </main>
      </div>
    </>
  );
};

export default TeacherList;
