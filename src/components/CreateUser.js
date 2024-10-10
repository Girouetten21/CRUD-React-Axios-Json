import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../css/CreateUser.css";

const CreateUser = ({ setUsers, users }) => {
  const [maxId, setMaxId] = useState(0);
  const [name, setName] = useState("")
  const [username, setUserName] = useState("")
  const [country, setCountry] = useState("")
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4000/users")
      .then(response => {
        const maxId = response.data.reduce((max, user) => Math.max(max, user.id), 0);
        setUsers(response.data);
        setMaxId(maxId);
        setLoading(false);
      });
  }, [setUsers]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userID = (maxId + 1).toString();
    axios
      .post(`http://localhost:4000/users`, { id: userID, name, username, country })
      .then((res) => {
        setUsers([...users, res.data])
        setName('');
        setUserName('');
        setCountry('');
        navigate('/');
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="title">Create new user</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="country">Country</label>
          <input
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            className="input"
          />
        </div>
        <button type="submit" className="create-button">
          CREATE
        </button>
      </form>
    </div>
  );
}

export default CreateUser;