import React, { Component } from 'react'
import FE from './FE';
import DS from './DS';
import GM from './GM';
import IF from './IF';
import Spacing from './Spacing';

export default class Major extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Spacing />
            <FE />
          </div>
          <div className="col">
            <Spacing />
            <DS />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Spacing />
            <GM />
          </div>
          <div className="col">
            <Spacing />
            <IF />
          </div>
        </div>
      </div>
    )
  }
}
