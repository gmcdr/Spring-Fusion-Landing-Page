import Link from "next/link";
import React from "react";

function NavItem({ title, link, Icon }) {
  return (
    <div className="flex mx-4">
      <Link className="text-lg hover:text-green-500" href={link}>
        <p>{title}</p>
      </Link>
    </div>
  );
}

export default NavItem;
