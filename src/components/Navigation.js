import React from 'react';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item"><a href="#professional-summary">Professional Summary</a></li>
        <li className="navigation__item"><a href="#skills">Skills</a></li>
        <li className="navigation__item"><a href="#career">Career Progression</a></li>
        <li className="navigation__item"><a href="#previous-positions">Previous Positions</a></li>
        <li className="navigation__item"><a href="#accomplishments">Accomplishments</a></li>
        <li className="navigation__item"><a href="#education">Education & Credentials</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
