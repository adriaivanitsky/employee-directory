import React from 'react';
import { useState } from 'react';

export default function ProfileForm({ profile, setProfile, handleCreate }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreate(name, email, bio, birthday);
  };

  return (
    <form>
      {!profile.name && <h2>you gotta make a profile first dawg</h2>}
      <label>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          type="text"
          value={name}
        ></input>
      </label>

      <label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          type="email"
          value={email}
        ></input>
      </label>

      <label>
        <input
          onChange={(e) => setBirthday(e.target.value)}
          type="date"
          value={birthday}
        ></input>
      </label>

      <label>
        <textarea
          onChange={(e) => setBio(e.target.value)}
          placeholder="bio"
          value={bio}
        ></textarea>
      </label>
      <button onClick={handleSubmit}>submit</button>
    </form>
  );
}
