import React from "react";
import { Card } from "../card/Card";
import "./CardList.styles.css";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.profiles.map(profile => (
        <Card key={profile.id} profile={profile} />
      ))}
    </div>
  );
};
