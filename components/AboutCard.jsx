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
    group max-w-sm justify-center ml-2"
    >
      <Link className="flex-col justify-center text-center my-1" href={``}>
        <div className="flex justify-center">
          <Image
            src={imageSrc}
            width={45}
            height={45}
            className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
            alt="image is not available"
            style={{
              maxWidth: "100%",
              height: "auto",
              marginTop:'20px'
            }}
          ></Image>
        </div>

        <div className="">
          <div className="">
            <h1 className="text-xl my-2">{title}</h1>
          </div>
          <div>
            <p className=" text-md mx-4">{text}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AboutCard;
