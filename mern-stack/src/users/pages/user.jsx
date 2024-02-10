import React from "react";

import UserList from "../components/UserList";

export default function user() {
  const USERS = [
    {
      id: "ul",
      name: "Musaib",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fshop.auditydraws.com%2Fpages%2Faudity-random-drawing-generator&psig=AOvVaw0LsouNgUdajFf907zJIwbx&ust=1706713433348000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjO05GxhYQDFQAAAAAdAAAAABAE",
      places: "3",
    },
  ];

  return <UserList items={USERS}></UserList>;
}
