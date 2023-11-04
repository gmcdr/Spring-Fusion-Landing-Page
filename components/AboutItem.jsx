import React from "react";

function AboutItem({title, text}) {
  return (
    <div>
      <h1 className="sm:text-2xl text-xl text-green-400 my-2">{title}</h1>
      <p className="sm:text-xl text-base">{text}</p>
    </div>
  );
}

export default AboutItem;
