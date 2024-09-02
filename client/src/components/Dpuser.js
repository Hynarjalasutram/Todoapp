import { useEffect } from "react";
import axios from "axios";

let Dpuser = (props) => {
  useEffect(() => {
    // Fetch tasks from the backend when the component loads
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/tasks");
        props.setData(response.data); // Set the tasks to the state
      } catch (err) {
        console.error(err);
      }
    };

    fetchTasks();
  }, [props]);

  return (
    <div>
      {props.data.map((user) => {
        return <li key={user._id}>{user.title}</li>;
      })}
    </div>
  );
};

export default Dpuser;
