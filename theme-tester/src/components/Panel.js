import React from 'react';

import { connect } from 'react-redux';

import { setTheme } from '../actions';

const Panel = props => {
  return (
    <div className="panel">
      <button>style1</button>
      <button>style2</button>
      <button>style3</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    theme: state.theme
  }
}


export default connect(mapStateToProps, { setTheme })(Panel)