import React  from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

function Header (props) {
  return (
  <header id="header">
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={4}>
          {/* <code>&lt;{'Col xs={12} md={8}'} /&gt;</code> */}
          <span className="logo"><a href="#">&#123; @condini-mastheus &#125;</a></span>
        </Col>
        <Col xs={6} md={8}>
          {/* <code>&lt;{'Col xs={6} md={4}'} /&gt;</code> */}
          <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">Inspiration</a></li>
          </ul>
        </Col>
      </Row>
    </Grid>
  </header>
  );
}

export default Header;
