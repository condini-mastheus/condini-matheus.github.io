import React  from 'react';
import { people } from '../data/people.json';

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
