import React from 'react';

export default function ProfileView({ profile }) {
  return (
    <div>
      <h1>your profile</h1>
      <p>name: {profile.name}</p>
      <p>email: {profile.email}</p>
      <p>birthday: {profile.birthday}</p>
      <p>bio: {profile.bio}</p>
    </div>
  );
}
