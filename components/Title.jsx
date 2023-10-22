import React from "react";

export default function Title({title}) {
  return (
    <div className="flex justify-center my-16">
      <h1 className="text-3xl cursor-pointer hover:text-green-400">{title}</h1>
    </div>
  );
}
