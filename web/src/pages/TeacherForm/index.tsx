import React from "react";
import "./styles.css";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import warningIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

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
            <Textarea name='bio' label='Biography'></Textarea>
          </fieldset>

          <fieldset>
            <legend>About the class</legend>
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
            <Input name='cost' label='Cost per hour' />
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt='Important' />
              Important <br />
              Please fill all fields
            </p>
            <button type='button'>Save</button>
          </footer>
        </main>
      </div>
    </>
  );
};

export default TeacherForm;
