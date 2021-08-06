import React from 'react';
import { connect } from 'react-redux';
import MusicPlayer from './MusicPlayer';
import ChatBox from './chat/ChatBox';

export const MusicianPage = ({ profile, id }) => (
  <div className="other-user-profile">
    <div className="name-bio">
      <span>{profile.firstName} {profile.lastName}</span>
      <span>{`${profile.occupation} Bio`}</span>
    </div>
    <div className="picture-bio">
      <img src={profile.photoUrl} alt="user-photo" className="profile-photo"></img>
      <div className="bio-box">
        <div className="bio-sentence">{profile.bio}</div>
      </div>
    </div>
    <div className="button-wrapper">
      <div className="button button-anchor button--black">Schedule a free Zoom call</div>
      <div className="button button-anchor button--black">Hire Now</div>
    </div>
    <div className="music-box">
      <MusicPlayer songs={profile.songs} />
    </div>
    <div className="chat-box-wrapper">
      <ChatBox otherId={id} otherProfile={profile} />
    </div>
  </div>
);

const mapStateToProps = (state, props) => {
  const clickedUser = state.otherAccounts.find((account) => account.id === props.match.params.id)
  return {
    profile: clickedUser.profile,
    id: clickedUser.id
  };
};

export default connect(mapStateToProps)(MusicianPage);