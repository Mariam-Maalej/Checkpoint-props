import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
const Profile = ({fullName, bio, profession, handleName, children}) => {
    return (
        
    <div className="container">
        <img className='userpicture' src={children} alt='userpicture'/>
       <br></br>
       <div className='element'>
          <h2>Full Name </h2> 
          <span onClick={() => handleName(fullName)}>{fullName}</span>
          </div>
          <div className='element'> 
          <h2>Bio  </h2>
          <span >{bio}</span>
          </div>
          <div className='element'>
          <h2>Profession  </h2>
          <span >{profession}</span>
          </div>
    </div>  
    );
           };
Profile.propTypes = {
    fullName : propTypes.string,
    bio : propTypes.string,
    profession : propTypes.string,
}
Profile.defaultProps ={
    fullName:'user name',
    bio :'user bio',
    profession :'user profession',
};

export default Profile;
