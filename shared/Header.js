function Header() {
  return (
    <header className="main-header">
      <div className="logo">
        <a href="/pokefetch" className="logo-link" title="home">
          <img
            src="/pokefetch/images/pokeball.png"
            alt="pokemon pokeball"
            className="logo-image"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
