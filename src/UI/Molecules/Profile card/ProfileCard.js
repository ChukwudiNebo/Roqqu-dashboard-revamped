import React from 'react'
import ProfileIcon from '../../Atoms/ProfileIcon/ProfileIcon';
import './profileCard.css'


const ProfileCard = ({ fontawesome, text }) => {
  return (
    <>
      <div className="d-flex flex-nowrap align-items-center profile">
        {/* <div> */}
          <ProfileIcon text="CN" />
          <span>
            <p>{text}</p>
          </span>
        {/* </div> */}
        <i className={`${fontawesome}`}></i>
      </div>
    </>
  );
};

export default ProfileCard
