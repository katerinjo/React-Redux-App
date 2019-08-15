import React from 'react';

import { connect } from 'react-redux';

import { setTheme } from '../actions';

const Panel = ({ theme, setTheme}) => {
  return (
    <div className='panel'>
      <button
        className={theme === 0 ? 'active-btn' : 'passive-btn'}
        onClick={() => setTheme(0)}
      >style0</button>
      <button
        className={theme === 1 ? 'active-btn' : 'passive-btn'}
        onClick={() => setTheme(1)}
      >style1</button>
      <button
        className={theme === 2 ? 'active-btn' : 'passive-btn'}
        onClick={() => setTheme(2)}
      >style2</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    theme: state.theme
  }
}


export default connect(mapStateToProps, { setTheme })(Panel)