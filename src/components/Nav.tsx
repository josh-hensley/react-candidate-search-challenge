const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav>
      <ul className="nav">
        <li className="nav-item"><a href="/" className="nav-link">Candidate Search</a></li>
        <li className="nav-item"><a href="/SavedCandidates" className="nav-link">Saved Candidates</a></li>
      </ul>
    </nav>
  )
};

export default Nav;
