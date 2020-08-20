import React from 'react';
import '../App.css';

const Project = (props) => {
  return ( 
    <div className="card text-center shadow">
      <div className="row no-gutters">
        <div className="col-7 overflow">
          <img src={props.imgsrc} alt={props.title} className="card-img-top card-fluid" />
        </div>
        <div className="col-5">
          <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">
              Sit exercitation tempor cillum cupidatat est veniam. Cupidatat aliquip mollit laboris nulla quis Lorem incididunt elit consectetur irure adipisicing. Nostrud Lorem ex veniam do. Fugiat minim voluptate veniam ad ad dolore duis tempor tempor voluptate magna.
            </p>
            <a href="#" className="btn btn-primary">View Case Study</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;



// ORIGINAL

// <div className="card text-center shadow">
//   <div className="overflow">
//     <img src={props.imgsrc} alt={props.title} className="card-img-top" />
//   </div>
//   <div className="card-body text-dark">
//     <h4 className="card-title">{props.title}</h4>
//     <p className="card-text text-secondary">
//       Sit exercitation tempor cillum cupidatat est veniam. Cupidatat aliquip mollit laboris nulla quis Lorem incididunt elit consectetur irure adipisicing. Nostrud Lorem ex veniam do. Fugiat minim voluptate veniam ad ad dolore duis tempor tempor voluptate magna.
//     </p>
//     <a href="#" className="btn btn-primary">View Case Study</a>
//   </div>
// </div>