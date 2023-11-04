"use client"
import React from "react";
import NavIcon from "./NavIcon";
import { AiFillGithub } from 'react-icons/ai';
import { BiLogoDocker } from 'react-icons/bi';
import { SiBuymeacoffee } from 'react-icons/si';

function NavIcons() {
  return (
    <div className="flex">
      <NavIcon Icon={AiFillGithub} adress={"https://github.com/"} />
      <NavIcon Icon={BiLogoDocker} adress={"https://hub.docker.com/"} />
      <NavIcon
        Icon={SiBuymeacoffee}
        adress={"https://www.buymeacoffee.com/gabrielreib"}
      />
    </div>
  );
}

export default NavIcons;
