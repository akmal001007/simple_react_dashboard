import React from 'react'
import { BiBuilding, BiLogoAndroid, BiLogoHtml5 } from 'react-icons/bi'

const Card = () => {
    const courses = [
        {
            title: 'Web Development',
            duration: '2 hours',
            icon: <BiLogoHtml5 />
        },
        {
            title: 'App Development',
            duration: '3 hours',
            icon: <BiLogoAndroid />
        },
        {
            title: 'UX, UI',
            duration: '4 hours',
            icon: <BiBuilding />
        }
    ]
  return (
    <div className="card-container">
      {courses.map((course) => (
        <div className="card">
          <div className="card-cover">{course.icon}</div>
          <div className="card-title">
            <h2>{course.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card