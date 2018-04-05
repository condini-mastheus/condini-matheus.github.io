import React  from 'react';

import Menu from './Menu';

function Header (props) {
  return (
  <header id="header">
    <div className="container">
      <div className="row show-grid">
        <div className="col-xs-8 col-sm-4 col-md-4">
          <span className="logo"><a href="#a">&#123; @condini-mastheus &#125;</a></span>
        </div>
        <div className="col-md-8 col-sm-8 hidden-xs">
          <Menu />
        </div>
        <div className="col-xs-4 visible-xs mobile">
            <button className="menu-icon"><i className="fa fa-bars" /></button> 
        </div>
      </div>
    </div>
  </header>
  );
}

export default Header;
