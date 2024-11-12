import React from 'react'
import ProfileHeader from './ProfileHeader'
import '../styles/profile.css';
import me from '../assets/me.jpeg'
import { BiBook } from 'react-icons/bi';

const Profile = () => {
  const courses = [
    {
      title: "HTML",
      duration: "4 hours",
      icon: <BiBook />,
    },
    {
      title: "Javascript",
      duration: "4 hours",
      icon: <BiBook />,
    },
    {
      title: "React JS",
      duration: "4 hours",
      icon: <BiBook />,
    },
  ];
  return (
    <div className='profile'>
      <ProfileHeader />
      <div className="user-profile">
        <div className="user-detail">
          <img src={me} alt="" />
          <h3 className='username'>Akmal Nawabi</h3>
          <span className='profession'>Teacher</span>
        </div>

        <div className="user-courses">
          {courses.map(course => (
            <div className="course">
              <div className="course-detail">
                <div className="course-cover">
                  {course.icon}
                </div>
                <div className="course-name">
                  {course.title}
                </div>
                <span className="duration">{course.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile