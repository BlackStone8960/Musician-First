import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';

// We don't need this component?

export const EditProfile = ({ profile, history }) => {
  return (
    <React.Fragment>
      {/* Show Signup component when user doesn't have profile information */}
      {profile.occupation === "artist" ? 
        <ProfileForm audio={false} artist={true} history={history}/> 
        :
        <ProfileForm audio={true} artist={false} history={history}/>
      }
    </React.Fragment>
  )
};

const mapStateToProps = (state) => ({
  profile: state.userAccount.profile
});

export default connect(mapStateToProps)(EditProfile);