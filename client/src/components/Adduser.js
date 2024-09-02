import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

let Adduser = (props) => {
  let trf = useRef();
  let navigate = useNavigate();

  let add = async () => {
    try {
      // Post the new task (user) to the backend
      const response = await axios.post("http://localhost:5000/tasks", {
        title: trf.current.value,
      });
      props.fun(response.data); // Add the task to the local state
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input type="text" ref={trf} required/>
      <button onClick={add}>Adduser</button>
    </div>
  );
};

export default Adduser;
