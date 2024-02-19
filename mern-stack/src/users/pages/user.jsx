import React from "react";

import UserList from "../components/UserList";
import Image from "../images/ProfilePicture.jpeg"

export default function user() {
  const USERS = [
    {
      id: "ul",
      name: "Musaib",
      image: Image,
      places: 3,
    },

  ];
  return <UserList items={USERS}></UserList>;
}
