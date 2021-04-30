import React from 'react';
import { Link } from 'react-router-dom';

const FilteredProfile = ({id, profile}) => (
  <Link className="filtered-profile" to={`/filter4/${id}`} >
    <div className="profile-text">
      <span>{profile.firstName} {profile.lastName}</span>
    </div>
    <img src="/images/Ollie.png"></img>
    <div className="profile-text">
      <span>{profile.occupation}</span>
    </div>
  </Link>
);

export default FilteredProfile;