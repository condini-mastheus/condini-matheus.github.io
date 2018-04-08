import React  from 'react';
import { people } from '../data/people.json';
import { lines } from '../data/lines.json';

function renderPeople (person, key) {
  
  return (
    <div className="person" style={person.style} key={key}>
      <div className={`thumb  ${person.class}`}>
      </div>
      <div className="mask">
            <div className="info tbl">
              <div className="tbl-cell">
                <strong className="name">
                  {person.name}
                </strong>
                <small className="relationship">
                  {person.relationship}
                </small>
              </div>
            </div>
        </div>
    </div>
  )
}

function renderLines (line, key) {


  const { x1, y1, x2, y2 } = line.ref

  return (
    <svg refTo={line.name}>
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgb(147, 106, 195)" strokeWidth="2" />
    </svg>
  )
}

function Inspirations (props) {
  return (
    <section id="inspirations" className="section-block">

      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>Inspirations</h1>
          </div>
        </div>
      </div>
      <div className="container inspiration">
        <div className="people">
          <div className="lines hidden-xs">
            {
              lines.map((line, index) => {
                return renderLines(line, index);
              })
            }
          </div>

          {
            people.map((person, index) => {
              return renderPeople(person, index);
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Inspirations;
