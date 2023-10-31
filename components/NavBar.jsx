'use client'
import React from "react";
import NavItem from "./NavItem";
import Image from "next/image";
import { AiFillGithub } from 'react-icons/ai';
import { BiLogoDocker } from 'react-icons/bi';
import NavIcon from "./NavIcon";

function NavBar() {
  return (
    <div className="flex justify-between p-5">

      <div>
        <Image src={"/logo2.png"} height={50} width={50}></Image>
      </div>

      <div className="flex justify-between glass-back p-inherit">
        <NavItem title="About" link="/about" />
        <NavItem title="Home" link="/"/>
        <NavItem title="Documentation" link="/documentation" />
      </div>

      <div className="flex">
        <NavIcon Icon={AiFillGithub} adress={'https://github.com/'} />
        <NavIcon Icon={BiLogoDocker} adress={'https://hub.docker.com/'} />
      </div>
      
    </div>
  );
}

export default NavBar;
