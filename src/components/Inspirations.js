import React  from 'react';
import { people } from '../data/people.json';
import { lines } from '../data/lines.json';

function renderPeople (person, key) {

  
  return (
    <div className={`person ${person.me !== undefined ? 'to' : 'from'}`} style={person.style} key={key}>
      <div className="thumb">
        <img src={person.photo} alt="" className="img-responsive img-circle" />
      </div>
      {/* <strong className="name">
            {person.name}
            </strong>
            <small className="relationship">
            {person.relationship}
          </small> */}
    </div>
  )
}

function renderLines (line, key) {

  return (
    <div className="line" style={line.style} key={key}>
      <svg width="100%" height="100%">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgb(147, 106, 195)" />
      </svg>
    </div>
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
          {
            lines.map((line, index) => {
              return renderLines(line, index);
            })
          }

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
