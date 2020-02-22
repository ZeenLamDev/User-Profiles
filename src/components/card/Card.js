import React from "react";
import "./Card.styles.css";

export const Card = props => (
  <div className="card-container">
    <img
      alt="profile"
      src={`https://i.picsum.photos/id/${props.profile.id}/180/180.jpg`}
    />
    <h2>{props.profile.name}</h2>
    <h2>{props.profile.username}</h2>
    <p>{props.profile.email}</p>
  </div>
);
