import React from "react";
import { Link } from "react-router-dom";

const FilteredProfile = ({ id, profile }) => (
  <Link className="filtered-profile" to={`/MusicianPage/${id}`}>
    <div className="profile-text">
      <span>
        {profile.firstName} {profile.lastName}
      </span>
    </div>
    <img
      src={profile.photoUrl}
      alt="user-photo"
      className="profile-photo"
    ></img>
    <div className="profile-text">
      <span>{profile.occupation}</span>
    </div>
    <div className="genre-labels">
      <span className="label primary-genre-label">{profile.primaryGenre}</span>
      {profile.secondaryGenre && (
        <span className="label secondary-genre-label">
          {profile.secondaryGenre}
        </span>
      )}
    </div>
  </Link>
);

export default FilteredProfile;
