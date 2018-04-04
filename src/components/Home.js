import React  from 'react';

function Home (props) {
  return (
    <section id="home">
      <div className="tbl">
        <div className="tbl-row">
          <div className="tbl-cell v-bottom"><span className="curly">&#123;</span></div>

          <div className="tbl-cell v-bottom">
              <div className="wrap-hexagon">
                <div className="hexagon">
                  <div className="hexTop"></div>
                  <div className="hexBottom"></div>
                </div>
              </div>
          </div>

          <div className="tbl-cell v-bottom"><span className="curly">&#125;</span></div>
        </div>
        <div className="tbl-row">

          <div className="tbl-cell v-top"></div>
          <div className="tbl-cell v-top">
            <h1 className="me-title text-center">MATHEUS CONDINI</h1>
            <blockquote className="me-blockquote">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu interdum sem"
              </blockquote>
          </div>
          <div className="tbl-cell v-top"></div>

        </div>
      </div>
    </section>
  );
}

export default Home;
