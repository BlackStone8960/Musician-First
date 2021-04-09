import React from 'react';
import { Link } from 'react-router-dom';

const FilteredProfile = ({id, name, job}) => (
  <Link className="" to={`/filter4/${id}`} >
    <div>{name}</div>
    <img src="/images/Ollie.png"></img>
    <div>{job}</div>
  </Link>
);

export default FilteredProfile;