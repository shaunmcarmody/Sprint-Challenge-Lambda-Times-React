import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
            {
              props.tabs.map((tab, i) =>
                <Tab
                  tab={tab}
                  selectedTab={props.selectedTab}
                  selectTabHandler={props.selectTabHandler}
                  key={i}
                />
              )
            }
      </div>
    </div>
  );
};

Tabs.propTypes =  {
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  tabs: PropTypes.arrayOf(PropTypes.string)
}

// Make sure to use PropTypes to validate your types!
export default Tabs;
