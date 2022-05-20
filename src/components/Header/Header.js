import React from 'react';
import "./Header.css"
import Films from "../Films";
import Serials from "../Serials";
import People from "../People";
import More from "../More";
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-navigate">
          <div className="header-info">
            <Link to="/"><span className="icon-blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c logo-header"></span></Link>
            <Link to="/films">{<Films/>}</Link>
            <Link to="/serials">{<Serials/>}</Link>
            <Link to="/people">{<People/>}</Link>
            <Link to="/more">{<More/>}</Link>
          </div>
          <div className="header-user">
            <Link to="#"><span className="icon-glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517"></span></Link>
            <Link to="#"><div className="header-language">EN</div></Link>
            <Link to="#"><span className="icon-glyphicons-basic-441-bell-9cd2af257b98c4af3460078777d8e38a5e12bca89704eeac2f39273afcbd06ff"></span></Link>
            <Link to="#"><div className="header-avatar"><h3>F</h3></div></Link>
            <Link to="#"><span className="icon-glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1"></span></Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;