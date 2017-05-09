import React from 'react';

const ProfilePic = ({url, name}) => {
  const alt = `Profile picture for ${name}`;
  return (
    <div className="text-center">
      <img src={url} alt={alt} className="rounded-circle" />
      <p className="lead">{name}</p>
    </div>
  );
}

export default ProfilePic;
