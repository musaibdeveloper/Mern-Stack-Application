import React from "react";
import user from "../pages/user";

export default function UserItem({ props }) {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <image src={props.image} alt={user.name} />
        </div>
        <div className="user-item__info">
          <h2>{props.name}</h2>
          <h3>
            {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
          </h3>
        </div>
      </div>
    </li>
  );
}
