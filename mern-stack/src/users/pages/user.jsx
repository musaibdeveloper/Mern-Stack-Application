import React from "react";

import UserList from "../components/UserList";

export default function user() {
  const USERS = [
    {
      id: "ul",
      name: "Kitten",
      image: "https://placekitten.com/640/360",
      places: 3,
    },
    
  ];
  return <UserList items={USERS}></UserList>;
}
