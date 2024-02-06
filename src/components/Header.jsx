import React from "react";

import { Link } from "react-router-dom";


const Header = () => {
  

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Welcome Page</Link>
        </li>

          <li>
            <Link to="/UserIdentification">User Identification</Link>
          </li>

          <li>
            <Link to="/Questionaire">Questionaire</Link>
          </li>

          <li>
            <Link to="/Strategies">Strategy</Link>
          </li>

      </ul>
    </nav>
  );
};

export default Header;