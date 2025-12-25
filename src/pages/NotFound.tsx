import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>Page NotFound bro, what are you doing? 🤨🙄</h1>
      <Link to='/'>Go back home</Link>
    </div>
  );
}
