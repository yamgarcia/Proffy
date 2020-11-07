import React, { FormEvent, useState } from "react";
import "./styles.css";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import warningIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

const TeacherForm: React.FC = () => {
  //* first form
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  //* second form
  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    console.log({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
    });
  }

  return (
    <>
      <div id='page-teacher-form' className='container'>
        <PageHeader
          description='The first step is to fill this form'
          title='Wanna teach? Welcome aboard!'
        />
        <main>
          <form onSubmit={handleCreateClass}>
            <fieldset>
              <legend>Profile</legend>
              <Input
                name='name'
                label='Complete name'
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Input
                name='Avatar'
                label='Avatar'
                value={avatar}
                onChange={(e) => {
                  setAvatar(e.target.value);
                }}
              />
              <Input
                name='Whatsapp'
                label='Whatsapp'
                value={whatsapp}
                onChange={(e) => {
                  setWhatsapp(e.target.value);
                }}
              />
              <Textarea
                name='bio'
                label='Biography'
                value={bio}
                onChange={(e) => {
                  setBio(e.target.value);
                }}
              ></Textarea>
            </fieldset>
            <fieldset>
              <legend>About the class</legend>
              <Select
                name='subject'
                label='Subject'
                value={subject}
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
              <Input
                name='cost'
                label='Cost per hour'
                value={cost}
                onChange={(e) => {
                  setCost(e.target.value);
                }}
              />
            </fieldset>
            <fieldset>
              <legend>
                Available schedule
                <button type='button' onClick={addNewScheduleItem}>
                  + Add New
                </button>
              </legend>
              {scheduleItems.map((scheduleItem) => {
                return (
                  <div
                    key={scheduleItem.week_day + scheduleItem.from}
                    className='schedule-item'
                  >
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
                    <Input name='from' label='From' type='time' />
                    <Input name='to' label='To' type='time' />
                  </div>
                );
              })}
            </fieldset>
            <footer>
              <p>
                <img src={warningIcon} alt='Important' />
                Important <br />
                Please fill all fields
              </p>
              <button type='submit'>Save</button>
            </footer>
          </form>
        </main>
      </div>
    </>
  );
};

export default TeacherForm;
