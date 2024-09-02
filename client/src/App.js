import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Dpuser from "./components/Dpuser";
import Adduser from "./components/Adduser";
import Edituser from "./components/Edituser";
import Deluser from "./components/Deluser";
import { useState } from "react";

let App = () => {
  let [data, setData] = useState([]);

  let addUser = (user) => {
    setData([...data, user]); // Add user to the local state
  };

  let delUser = (ind) => {
    data.splice(ind, 1); // Delete user from the local state
    setData([...data]);
  };

  let editUser = (user, ind) => {
    data[ind] = user; // Edit user in the local state
    setData([...data]);
  };

  return (
    <div class="App-header">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Dpuser data={data} setData={setData} />} />
          <Route path="/add" element={<Adduser fun={addUser} />} />
          <Route path="/edit" element={<Edituser edit={editUser} data={data} />} />
          <Route path="/del" element={<Deluser data={data} del={delUser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
