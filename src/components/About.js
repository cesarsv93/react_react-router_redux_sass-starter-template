import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class About extends Component {
  render() {
    return (
      <div>
        About
      </div>
    );
  }
}

export default connect(null)(About);
