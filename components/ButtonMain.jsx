import Link from "next/link";
import React from "react";

function ButtonMain({ text, adress }) {
  return (
    <Link href={adress}>
      <div className="mx-2 my-4">
        <a
          className="
      sm:px-9 
      sm:py-4 
      px-6
      py-3
      rounded-full 
      cursor-pointer 
      hover:bg-transparent 
      no-underline 
      bg-green-400 
      text-slate-800 
      text-lg 
      font-semibold
      hover:border 
    border-green-500
    hover:text-white"
          href=""
        >
          {text}
        </a>
      </div>
    </Link>
  );
}

export default ButtonMain;
