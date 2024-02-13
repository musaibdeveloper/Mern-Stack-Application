import React from "react";
import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";
import "./UserStyles/UserList.css";

const UserList = (props) => {
  if (!props.items.length) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="user-list">
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.key}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          ></UserItem>
        );
      })}
    </ul>
  );
};

export default UserList;
