import React from 'react';

export default function ProfileForm({ profile }) {
  return (
    <form>
      {!profile.name && <h2>you gotta make a profile first dawg</h2>}
      <label>
        <input placeholder="name" type="text"></input>
      </label>

      <label>
        <input placeholder="email" type="email"></input>
      </label>

      <label>
        <input type="date"></input>
      </label>

      <label>
        <textarea placeholder="bio"></textarea>
      </label>
      <button>submit</button>
    </form>
  );
}
