import React from "react";
import "./styles.css";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

const TeacherForm: React.FC = () => {
  return (
    <>
      <div id='page-teacher-form' className='container'>
        <PageHeader
          description='The first step is to fill this form'
          title='Wanna teach? Welcome aboard!'
        />
        <main>
          <fieldset>
            <legend>Profile</legend>
            <Input name='name' label='Complete name' />
            <Input name='Avatar' label='Avatar' />
            <Input type='number' name='Whatsapp' label='Whatsapp' />
          </fieldset>
        </main>
      </div>
    </>
  );
};

export default TeacherForm;
