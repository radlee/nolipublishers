import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

export default class JumbotronHead extends Component {
  render() {
    return (

      <div>
        <Jumbotron className="jumbotron">
          <h1 className="display-3">NOLI PUBLISHERS</h1>
          <hr className="my-2" />
          <p className="lead"><span className="green">Together We Can Make a Change</span> </p>
          <hr className="my-2" />
        </Jumbotron>
      </div>
    )
  }
}