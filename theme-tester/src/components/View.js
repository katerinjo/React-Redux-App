import React from 'react';

import { connect } from 'react-redux';

import { setTheme } from '../actions';

const View = ({ content }) => {
  return (
    <main className="view">
      {content}
    </main>
  );
};

const mapStateToProps = state => {
  return {
    content: state.content
  }
}


export default connect(mapStateToProps, { setTheme })(View)