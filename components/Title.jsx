import React from "react";

export default function Title({title}) {
  return (
    <div className="flex justify-center sm:my-16 my-8">
      <h1 className="
      sm:text-4xl 
      text-2xl
      cursor-pointer 
      hover:text-green-400 
      tracking-wider 
      font-bold 
      capitalize">{title}</h1>
    </div>
  );
}
