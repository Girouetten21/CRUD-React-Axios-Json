import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import ReadUser  from "./components/ReadUser";
import deleteUser from "./components/DeleteUser";
import CreateUser from "./components/CreateUser";
import EditUser  from "./components/UpdateUser";

import "./css/menu.css"
import "./css/style.css";
import logo from './image/logo.png';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    axios.get("http://localhost:4000/users")
      .then(response => {
        setUsers(response.data)
      })
    setLoading(false)
  }, [])

  return (
    <Router>
      <nav className="menu">
        <ul>
          <li>
            <img src={logo} alt="Logo" width="200" height="200" className="logo" />
          </li>
        </ul>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><a href="https://github.com/Girouetten21/CRUD-React-Axios-Json" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={
          <div className="container mx-auto p-4">
            <h1 className="title">CRUD App with React and Axios</h1>
            <p className="text-center paragraph">
              This web application, developed with React and Axios, implements a CRUD (Create, Read, Update and Delete) interface to efficiently manage a set of users. Utilizes Axios for making HTTP requests to the JSON Server. Its main purpose is to serve as a practical demonstration of how to make HTTP requests and handle responses in a React environment.
              <p className="text-center">
                <strong>Users created: {users.length}</strong>
              </p>
            </p>
            <ReadUser 
              users={users}
              loading={loading}
              onDeleteUser ={(id) => deleteUser(id, setUsers, users)}
            />
          </div>
        } />
        <Route path='/create' element={<CreateUser  users={users} setUsers={setUsers} />} />
        <Route path='/edit/:id' element={<EditUser  />} />
      </Routes>
    </Router>
  );
}

export default App;