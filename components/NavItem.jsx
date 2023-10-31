import Link from "next/link";
import React from "react";

function NavItem({ title, link, Icon }) {
  return (
    <div className="flex mx-4">
      <Link className="text-lg font-medium" href={link}>
        <p className="hover:text-green-400">{title}</p>
      </Link>
    </div>
  );
}

export default NavItem;
