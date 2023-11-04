"use client";
import React from "react";
import NavItem from "./NavItem";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { BiSolidBookmarks } from "react-icons/bi";
import { AiFillBook } from "react-icons/ai";

import NavIcon from "./NavIcon";
import NavIcons from "./NavIcons";

function NavBar() {
  return (
    <div className="flex justify-between p-5">
      <div>
        <Image src={"/logo2.png"} height={50} width={50}></Image>
      </div>

      <div className="flex justify-between glass-back p-inherit">
        <NavItem title="About" link="/about" Icon={BiSolidBookmarks} />
        <NavItem title="Home" link="/" Icon={AiFillHome} />
        <NavItem
          title="Documentation"
          link="/documentation"
          Icon={AiFillBook}
        />
      </div>

      <div className="hidden sm:block">
        <NavIcons></NavIcons>
      </div>
    </div>
  );
}

export default NavBar;
