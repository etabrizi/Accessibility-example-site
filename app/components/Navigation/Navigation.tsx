"use client";

import styles from "./Navigation.module.scss";
import cx from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className={cx(styles["navigation"])}>
      <a className={cx(styles["navigation__skip-link"])} href="#main-content">
        Skip to main content
      </a>
      <nav>
        <ul className={cx(styles["navigation__list"])}>
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={cx(styles["navigation__item"], {
                [styles["navigation__item--active"]]: pathname === link.href,
              })}
            >
              <Link className={cx(styles["navigation__link"])} href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
