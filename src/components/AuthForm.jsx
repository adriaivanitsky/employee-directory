import React from 'react';
import { useState } from 'react';

export default function AuthForm({ handleAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleAuth(email, password);
  };

  return (
    <form>
      <label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        ></input>
      </label>

      <label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        ></input>
      </label>
      <button onClick={handleSubmit}>submit</button>
    </form>
  );
}
