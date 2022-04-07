import React, { Component } from 'react';

class PureComponent extends Component {
  render() {
      console.log('Pure component render')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    );
  }
}

export default PureComponent;
