"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const HeaderNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  console.log(router.back);
  return (
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
  );
};

export default HeaderNav;
