import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="Navigation">
      <div className="Navigation__left">
        <a href="http://localhost:3000">Book Stores</a>
        <input type="text" id="search_book" placeholder="Search" />
      </div>
      <div className="Navigation__right">
        <i className="material-icons">
          <span className="material-icons--outlined">account_circle</span>
        </i>
        <a href="http://localhost:3000">Login</a>
      </div>
    </nav>
  );
};

export default Navigation;
