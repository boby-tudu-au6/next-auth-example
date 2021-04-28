import { useEffect, useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import axios from 'axios';
import cookie from 'js-cookie';

export default function Home() {
  const [message, setMessage] = useState('');
  const [user, setuser] = useState(null);

  const handleRegister = async e => {
    e.preventDefault();
    const { username, email, password } = e.target;
    try {
      const { data } = await axios.post('/api/register', {
        username: username.value,
        email: email.value,
        password: password.value
      });
      return setMessage(`Register success with username- ${data.username}`);
    } catch (error) {
      setMessage(error.message);
    }
  }
  const handleLogin = async e => {
    e.preventDefault();
    const { email, password } = e.target;
    try {
      const { data } = await axios.post('/api/login', {
        email: email.value,
        password: password.value
      })
      if (data && data[0]) {
        cookie.set('user', data[0])
        setuser(data[0]);
        return setMessage(`Logged with username - ${data[0].username}`)
      }
      return setMessage("wrong credentials")
    } catch (error) {
      return setMessage(error.message);
    }
  }

  useEffect(() => {
    let data = cookie.get('user')
    if (data !== null && data !== undefined) {
      data = JSON.parse(data);
      setMessage(`Logged with username - ${data.username}`)
      setuser(data);
    }
  }, [])

  return (
    <div className="container">
      <h1>home page</h1>
      {
        user && (
          <Link href="/profile">
            <a>Go to profile page</a>
          </Link>
        )
      }

      <h1>{message}</h1>
      <form type="post" onSubmit={handleRegister}>
        <h1>Register</h1>
        <input type="text" name="username" placeholder="enter username" /><br />
        <input type="email" name="email" placeholder="Enter email" /><br />
        <input type="password" name="password" placeholder="Enter password" /><br />
        <button type="submit">Register</button>
      </form>
      <br />
      <br />
      <br />
      <br />
      <form type="post" onSubmit={handleLogin}>
        <h1>Login</h1>
        <input type="email" name="email" placeholder="Enter email" /><br />
        <input type="password" name="password" placeholder="Enter password" /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
