import React from "react";

const ApiCard = ({ img }) => {
  const { url } = img;
  return <img className="img-api" src={url} alt="" />;
};

export default ApiCard;
