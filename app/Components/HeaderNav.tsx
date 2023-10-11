"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderNav = () => {
  const pathname = usePathname();
  return (
    <header>
      <nav>
        <menu className="flex gap-5">
          <li>
            <Link href="/" className={`${pathname === "/" ? "underline" : ""}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`${pathname === "/about" ? "underline" : ""}`}>
              About
            </Link>
          </li>
        </menu>
      </nav>
      <style jsx>
        {`
          nav {
            background-color: tomato;
          }
          li {
            background-color: teal;
          }
        `}
      </style>
    </header>
  );
};

export default HeaderNav;
