import Link from "next/link";
import React from "react";
import Image from "next/image";

function AboutCard({ imageSrc, title, text }) {
  return (
    <div
      className="cursor-pointer sm:p-3 
    sm:hover:shadow-green-400 sm:shadow-md 
    rounded-lg sm:border 
    sm:border-slate-400 
    sm:m-2 transition-shadow duration-200
    group max-w-sm"
    >
      <Link href={`/`}>
        <Image
          src={imageSrc}
          width={50}
          height={50}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          alt="image is not available"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        ></Image>
        <div className="">
          <div className="flex justify-center my-1">
            <h1 className="text-xl">{title}</h1>
          </div>
          <div>
            <p className=" text-md">
              {text}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AboutCard;
