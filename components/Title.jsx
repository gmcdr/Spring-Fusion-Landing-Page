import React from "react";

export default function Title({title}) {
  return (
    <div className="flex justify-center my-16">
      <h1 className="
      text-4xl cursor-pointer 
      hover:text-green-400 
      tracking-wider 
      font-bold 
      capitalize">{title}</h1>
    </div>
  );
}
