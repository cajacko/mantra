import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DisplayView from 'components/DisplayView/DisplayView';
import shuffle from 'helpers/shuffle';

function getVisibleItems(items) {
  const visibleItems = [];

  Object.keys(items).forEach((id) => {
    if (items[id].deleted === false) {
      visibleItems.push(id);
    }
  });

  return visibleItems;
}

class DisplayViewContainer extends Component {
  constructor(props) {
    super(props);

    const orderedItems = getVisibleItems(props.items);
    const mantraLoop = shuffle(orderedItems);

    let showsButtons = false;

    if (mantraLoop.length > 1) {
      showsButtons = true;
    }

    this.state = { showsButtons, mantraLoop };
  }

  render() {
    return (
      <DisplayView
        mantraLoop={this.state.mantraLoop}
        showsButtons={this.state.showsButtons}
      />
    );
  }
}

DisplayViewContainer.propTypes = {
  // eslint-disable-next-line
  items: PropTypes.object.isRequired,
};

function mapStateToProps({ items }) {
  return { items };
}

export default connect(mapStateToProps)(DisplayViewContainer);
