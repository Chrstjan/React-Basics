import styles from "./css/Header.module.css";

function Header() {
  return (
    <header>
      <h1>My website</h1>
      <nav>
        <ul className={styles.header}>
          <li>
            <a href="#">Item One</a>
            <a href="#">Item Two</a>
            <a href="#">Item Three</a>
            <a href="#">Item Four</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
