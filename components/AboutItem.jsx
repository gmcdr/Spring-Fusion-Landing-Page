import React from "react";

function AboutItem({title, text}) {
  return (
    <div>
      <h1 className="text-2xl text-green-400 my-2">{title}</h1>
      <p className="text-xl">{text}</p>
    </div>
  );
}

export default AboutItem;
