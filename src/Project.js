import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Project = (props) => {
// class Project extends Component {}
  return ( 
    // <div className="card text-center shadow mx-auto">
    <div className="project">
      <Link to={props.link}>
        <div className="card mx-auto">
          <div className="row no-gutters">
            <div className="col-7 overflow">
              <img src={props.image} alt={props.title} className="card-img-top card-fluid" />
            </div>
            <div className="col-5">
              <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">
                  {props.description}
                </p>
                <a href="#" className="btn btn-secondary">View Case Study</a>
                {/* <Link to="/equalicare" className="btn btn-secondary">View Case Study</Link> */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Project;