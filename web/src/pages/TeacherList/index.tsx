import React, { FormEvent, useState } from "react";
import "./styles.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [week_day, setWeek_day] = useState("");
  const [time, setTime] = useState("");

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const res = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });

    console.log(res.data);
  }

  return (
    <>
      <div id='page-teacher-list' className='container'>
        <PageHeader title='Here are the available Teachers'>
          <form onSubmit={searchTeachers} id='search-teachers'>
            <Select
              name='subject'
              value={subject}
              label='Subject'
              onChange={(e) => {
                setSubject(e.target.value);
              }}
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
              value={week_day}
              label='Week Day'
              onChange={(e) => {
                setWeek_day(e.target.value);
              }}
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
            <Input
              type='time'
              name='time'
              label='Time'
              onChange={(e) => {
                setTime(e.target.value);
              }}
            />
            <button type='submit'>Search</button>
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
