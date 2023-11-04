import Link from "next/link";
import React from "react";

function NavIcon({ Icon, adress }) {
  return (
    <div className="mx-2 cursor-pointer text-2xl">
      <Link href={adress}>
        <Icon></Icon>
      </Link>
    </div>
  );
}

export default NavIcon;
