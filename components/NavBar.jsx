'use client'
import React from "react";
import NavItem from "./NavItem";
import Image from "next/image";


function NavBar() {
  return (
    <div className="flex justify-between m-5">

      <div>
        <Image src={"/logo2.png"} height={50} width={50}></Image>
      </div>

      <div className="flex justify-between">
        <NavItem title="About" link="/about" />
        <NavItem title="Home" link="/"/>
        <NavItem title="Documentation" link="/contact" />
      </div>

      <div className="hidden sm:inline">
        <a href="https://github.com/gmcdr/api-generator"><button className="border border-green-600 p-2 rounded hover:bg-green-600 ">Get Started</button></a>
      </div>
      
    </div>
  );
}

export default NavBar;
