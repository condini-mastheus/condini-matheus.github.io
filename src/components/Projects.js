import React  from 'react';

function Projects (props) {
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
              <p>Be water, my friend.</p>
              <footer><cite title="Bruce Lee">Bruce Lee</cite></footer>
              </blockquote>
          </div>

          <div className="tbl-cell v-top"></div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
