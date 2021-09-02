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
    <div className="genre-tags">
      <span className="tag primary-genre-tag">{profile.primaryGenre}</span>
      {profile.secondaryGenre !== "" && (
        <span className="tag secondary-genre-tag">
          {profile.secondaryGenre}
        </span>
      )}
    </div>
  </Link>
);

export default FilteredProfile;
