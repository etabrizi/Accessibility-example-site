import styles from "./Footer.module.scss";
import cx from "classnames";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://twitter.com/yourhandle", label: "Twitter" },
  { href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
  { href: "https://github.com/yourgithub", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className={cx(styles["footer"])}>
      <div className={cx(styles["footer__container"])}>
        <nav>
          <ul className={cx(styles["footer__list"])}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className={cx(styles["footer__link"])} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <ul className={cx(styles["footer__social-list"])}>
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  className={cx(styles["footer__social-link"])}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={cx(styles["footer__info"])}>
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <p>
            <Link className={cx(styles["footer__link"])} href="/privacy">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link className={cx(styles["footer__link"])} href="/terms">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
