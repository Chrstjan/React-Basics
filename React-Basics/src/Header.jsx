import "../src/Header.css";

function Header() {
  return (
    <header>
      <h1>My website</h1>
      <nav>
        <ul>
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