import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "../css/UpdateUser.css";

const UpdateUser = () => {
  const [data, setData] = useState([])
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [country, setCountry] = useState('');
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:4000/users/" + parseInt(id))
      .then(response => {
        const data = response.data;
        setName(data.name);
        setUserName(data.username);
        setCountry(data.country);
      })
      .catch(error => console.log(error))
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put("http://localhost:4000/users/" + id.toString(), {
      name,
      username,
      country
    })
      .then(response => {
        setData(response.data);
        navigate('/')
      })
  }

  const goHome = () => {
    navigate('/')
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="title">Update User Data</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
        </div>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
          />
        </div>
        <div className="input-group">
          <label>Country:</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="input"
          />
        </div>
        <div className="button-container">
          <button
            type="submit"
            className="edit-button">ACCEPT
          </button>
          <button
            onClick={goHome}
            className="cancel-button">CENCEL
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;