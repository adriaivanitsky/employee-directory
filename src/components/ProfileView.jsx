import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ProfileView({ profile }) {
  const history = useHistory();
  const handleSubmit = () => {
    history.push('/profile/edit');
  };

  return (
    <div>
      <h1>your profile</h1>
      <p>name: {profile.name}</p>
      <p>email: {profile.email}</p>
      <p>birthday: {profile.birthday}</p>
      <p>bio: {profile.bio}</p>
      <button onClick={handleSubmit}>edit profile</button>
    </div>
  );
}
