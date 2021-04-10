import React from 'react';
import { Link } from 'react-router-dom';

const FilteredProfile = ({id, name, job}) => (
  <Link className="filtered-profile" to={`/filter4/${id}`} >
    <div className="profile-text">
      <span>{name}</span>
    </div>
    <img src="/images/Ollie.png"></img>
    <div className="profile-text">
      <span>{job}</span>
    </div>
  </Link>
);

export default FilteredProfile;