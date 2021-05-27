import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

export default class JumbotronHead extends Component {
  render() {
    return (

      <div>
        <Jumbotron className="jumbotron">
          <p className="lead"><span className="green">Welcome</span> </p>
          <hr className="my-2" />
          <h1 className="display-3">NOLI PUBLISHERS</h1>
          <hr className="my-2" />

        </Jumbotron>
      </div>
    )
  }
}