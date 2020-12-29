// import React from 'react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
// import Footer from './Footer';

// const Project = (props) => {  [after this was taken away, added "state", ""render()", & this. before "props"]
class Project extends Component {
  state = {
    color: this.props.color
  }

  hoverEvent = (index) => {
    let btnList = document.querySelectorAll(".view-button");
    btnList[index].classList.add("button-hover-"+index);

    let imgList = document.querySelectorAll(".card-img-top");
    imgList[index].style.transform = "scale(1.05)";
  }

  cancelHover = (index) => {
    let btnList = document.querySelectorAll(".view-button");
    btnList[index].classList.remove("button-hover-"+index);

    let imgList = document.querySelectorAll(".card-img-top");
    imgList[index].style.transform = "none";
  }
  // TOOK OUT BEFORE "view-btn": btn btn-secondary 

  render() {
    return ( 
      // <div className="card text-center shadow mx-auto">
      <div className="project">
        <Link to={this.props.link}>
          <div className="card mx-auto border-0">
            <div className="row no-gutters">
              <div className="col-8 overflow">
                <img src={this.props.image} alt={this.props.title} className="card-img-top card-fluid rounded" />
              </div>
              <div className="col-4 my-auto">
                <div className="card-body text-dark">
                  <hr className="card-line card-line-top" style={{background: this.state.color}}/>
                  <h4 className="card-title">{this.props.title}</h4>
                  <p className="card-text">
                    {this.props.description}
                  </p>
                  <a href="#" className="view-btn view-button" style=
                    {{color:this.state.color,
                    borderColor: this.state.color}} onMouseOver={()=>this.hoverEvent(this.props.index)} onMouseOut={()=>this.cancelHover(this.props.index)}>
                    {/* View Case Study */} {this.props.button}
                  </a>
                  {/* <Link to="/equalicare" className="btn btn-secondary">View Case Study</Link> */}
                  <hr className="card-line card-line-bottom" style={{background: this.state.color}}/>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Project;