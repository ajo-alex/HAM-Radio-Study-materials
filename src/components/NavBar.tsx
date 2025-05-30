/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function NavBar() {
  const items = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Rides", route: "/rides" },
    { name: "Rules", route: "/rules" },
    { name: "Hall of Fame", route: "/hall-of-fame" },
    { name: "Blogs", route: "/blogs" },
  ];
  return (
    <div className="py-8 flex justify-between items-center container mx-auto">
      <img src="/logo.avif" alt="" className="w-32" />
      <div className="flex gap-8 font-semibold uppercase">
        {items.map((obj) => {
          return (
            <Link href={obj.route} key={obj.name}>
              <div>{obj.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;
