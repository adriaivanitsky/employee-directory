import React from 'react';

export default function AuthForm() {
  return (
    <form>
      <label>
        <input type="text" placeholder="email"></input>
      </label>

      <label>
        <input type="password" placeholder="password"></input>
      </label>
      <button>submit</button>
    </form>
  );
}
