import { useState } from "react";
import axios from "axios";

let Edituser = (props) => {
  let [user, setUser] = useState("");
  let [index, setIndex] = useState();
  let [userId, setUserId] = useState();

  let edit = (name, ind, id) => {
    setUser(name);
    setIndex(ind);
    setUserId(id);
  };

  let upd = async () => {
    try {
      const response = await axios.patch(`http://localhost:5000/tasks/${userId}`, {
        title: user,
      });
      props.edit(response.data, index); // Update the task in the local state
      setUser("");
    } catch (err) {
      console.error(err);
    }
  };

  let fun = (e) => {
    setUser(e.target.value);
  };

  return (
    <div>
      <input type="text" value={user} onChange={fun} />
      <button onClick={upd}>Update</button>
      <div>
        {props.data.map((user, ind) => {
          return (
            <li key={user._id}>
              {user.title}
              <button onClick={() => edit(user.title, ind, user._id)}>Edit</button>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Edituser;
