import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <ul className={style.social_list}>
        <li>
          <a
            href="https://www.facebook.com/lucas.jacinto.71619/"
            target="_blank"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/lucasdesjacinto/" target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lucas-souza-jacinto/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p className={style.copy_rigth}>
        <span>Arena Crypto</span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
