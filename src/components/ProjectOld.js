import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Project extends Component {
  state = {
    color: this.props.color
  }

  hoverEvent = () => {

  }

  cancelHover = () => {
    
  }

  render() {
    return (
      <div className="project" onMouseOver={() => this.hoverEvent()} onMouseOut={() => this.cancelHover(this.props.index)}>

      </div>
    )
  }
}

export default Project;