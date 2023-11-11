import React from "react";

function AboutItem({title, text}) {
  return (
    <div>
      <p className="sm:text-xl text-base">{text}</p>
    </div>
  );
}

export default AboutItem;
