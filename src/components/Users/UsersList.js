import React from "react";
import Card from "../UI/Card";

import classes from "./UsersList.module.css";

const UsersList = (props) => {
  let content = <li key="-1">No user exists.</li>;

  if (props.users && props.users.length > 0) {
    content = props.users.map((user) => {
      return (
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      );
    });
  }

  return (
    <Card className={classes.users}>
      <ul>{content}</ul>
    </Card>
  );
};

export default UsersList;
