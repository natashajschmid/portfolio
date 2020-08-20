import React, { Component } from 'react';
import Project from './Project';

import equalicare from '../img/equalicareCover.png';
import proxxmu from '../img/proxxmuCover.png';
import recoverycafe from '../img/recoverycafeCover.png';

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Project imgsrc={equalicare} title="EqualiCare" />
          </div>
          <div className="col-md-4">
            <Project imgsrc={proxxmu} title="Proxxmu" />
          </div>
          <div className="col-md-4">
            <Project imgsrc={recoverycafe} title="Recovery Cafe"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;