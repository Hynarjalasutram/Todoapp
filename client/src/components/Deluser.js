import axios from "axios";

let Deluser = (props) => {
  const deleteUser = async (ind, id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      props.del(ind); // Remove the task from the local state
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {props.data.map((user, ind) => {
        return (
          <li key={user._id}>
            {user.title}
            <button onClick={() => deleteUser(ind, user._id)}>Delete</button>
          </li>
        );
      })}
    </div>
  );
};

export default Deluser;
