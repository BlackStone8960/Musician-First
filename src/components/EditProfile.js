import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';

export const EditProfile = ({ profile }) => {
  
  return (
    <>
      {profile.occupation === "artist" ? 
        <ProfileForm audio={false} artist={true}/> 
        :
        <ProfileForm audio={true} artist={false}/>
      }
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    profile: state.accounts.find((account) => account.id === state.auth.uid).profile
  }
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);