import React from 'react';
import PropTypes from 'prop-types';
import LoopView from 'components/LoopView/LoopView';
import AddView from 'containers/AddView/AddView';

const Views = ({ view }) => {
  switch (view) {
    case 'LoopView':
      return <LoopView />;
    case 'AddView':
      return <AddView />;
    default:
      // eslint-disable-next-line
      console.error(`View does not have a corresponding component/container: ${view}`, view);
      return null;
  }
};

Views.propTypes = {
  view: PropTypes.string.isRequired,
};

export default Views;
