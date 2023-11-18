import React from "react";

function AboutItem({title, text}) {
  return (
    <div>
      <p className="sm:text-lg text-base">{text}</p>
    </div>
  );
}

export default AboutItem;
