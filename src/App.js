import React, { useState } from "react";

import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [users, setUsers] = useState([]);

  const userSubmitHandler = (userName, userAge) => {
    setUsers([{ name: userName, age: userAge, id: Math.random() }, ...users]);
  };

  return (
    <div>
      <AddUser onSubmit={userSubmitHandler} />
      <UsersList users={users} />
    </div>
  );
};

export default App;
