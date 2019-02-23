import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => (
    <div
      className={props.tab === props.selectedTab ? 'tab active-tab' : 'tab'}
      onClick={() => props.selectTabHandler(props.tab)}
    >
    {props.tab.toUpperCase()}
    </div>
  )

Tab.propTypes =  {
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  tab: PropTypes.string
}

export default Tab;
