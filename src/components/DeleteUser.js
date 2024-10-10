import axios from "axios";

const deleteUser = (id, setUsers, users) => {
  axios.delete(`http://localhost:4000/users/${id}`)
    .then((response) => {
      const updatedUsers = users.filter((user) => Number(user.id) !== Number(id));
      setUsers(updatedUsers);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default deleteUser;