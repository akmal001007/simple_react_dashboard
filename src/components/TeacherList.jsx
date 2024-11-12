import React from 'react';
import '../styles/teacherList.css';
import me from '../assets/me.jpeg'

const TeacherList = () => {
    const teachers = [
      {
        image: me,
        name: "Eng. Akmal",
        duration: "32 hours lesson",
        cost: "200",
      },
      {
        image: me,
        name: "Engineer Akmal",
        duration: "32 hours lesson",
        cost: "250",
      },
      {
        image: me,
        name: "Nawabi",
        duration: "32 hours lesson",
        cost: "300",
      },
      {
        image: me,
        name: "Ahmad",
        duration: "32 hours lesson",
        cost: "2100",
      },
    ];
  return (
    <div className="teacher-list">
      <div className="list-header">
        <h2>Teachers</h2>
        <select>
          <option value="english">English</option>
          <option value="dari">Dari</option>
        </select>
      </div>

      <div className="list-container">
        {teachers.map((teacher) => (
          <div className="list">
            <div className="teacher-detail">
              <img src={teacher.image} alt={teacher.name} />
              <h2>{teacher.name}</h2>
            </div>
            <span>{teacher.duration}</span>
            <span>{teacher.cost}</span>
            <span className='teacher-todo'>:</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherList