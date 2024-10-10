import { useState } from 'react';
import { Link } from "react-router-dom";
import "../css/ReadUser.css";

const ReadUser = ({ users, loading, onDeleteUser }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="space-y-6">
      {loading && <p>loading ...</p>}
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search users"
          className="search-input"
        />
      </div>
      {users &&
        <table className="table">
          <thead>
            <tr>
              <th className="th">ID</th>
              <th className="th">Name</th>
              <th className="th">Username</th>
              <th className="th">Country</th>
              <th className="th" colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="td">{user.id}</td>
                <td className="td">{truncateString(user.name, 10)}</td>
                <td className="td">{truncateString(user.username, 10)}</td>
                <td className="td">{truncateString(user.country, 10)}</td>
                <td className="td">
                  <Link to={`/edit/${user.id}`}>
                    <button className="edit-button">EDIT</button>
                  </Link>
                </td>
                <td className="td">
                  <button className="delete-button"
                    onClick={() => onDeleteUser(user.id)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
}

export default ReadUser;