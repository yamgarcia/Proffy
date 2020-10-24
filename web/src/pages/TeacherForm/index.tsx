import React from "react";
import PageHeader from "../../components/PageHeader";

const TeacherForm: React.FC = () => {
  return (
    <>
    <div id='page-teacher-form' className='container'>
      <PageHeader 
      description="The first step is to fill this form"
      title='Wanna teach? Welcome aboard!' />
      <main>
        <fieldset>
          <legend>Profile</legend>
          <div className='input-block'>
              <label htmlFor='name'>Complete name</label>
              <input type='text' id='name' />
          </div>
          <div className='input-block'>
              <label htmlFor='Avatar'>Avatar</label>
              <input type='text' id='Avatar' />
          </div>
          <div className='input-block'>
              <label htmlFor='Whatsapp'>Whatsapp</label>
              <input type='text' id='Whatsapp' />
          </div>
        </fieldset>
      </main>
    </div>
    </>
  );
};

export default TeacherForm;
