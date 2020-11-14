import React from "react";
import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}
interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnetion() {
    api.post("connections", {
      user_id: teacher.id,
    });
  }

  return (
    <>
      <article className='teacher-item'>
        <header>
          <img src={teacher.avatar} alt={teacher.name} />
          <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
          </div>
        </header>

        <p> {teacher.bio} </p>

        <footer>
          <p>
            Price/hour
            <strong>${teacher.cost}</strong>
          </p>
          <a
            target='_blank'
            onClick={createNewConnetion}
            href={`https://wa.me/${teacher.whatsapp}?text=Hello ${teacher.name}, I'd like to take private classes in ${teacher.subject}`}
          >
            <img src={whatsappIcon} alt='Contact-whatsapp' />
            Get in Contact
          </a>
        </footer>
      </article>
    </>
  );
};

export default TeacherItem;
