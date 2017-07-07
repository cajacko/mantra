import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DisplayView from 'components/DisplayView/DisplayView';
import switchView from 'actions/switchView';

function shuffle(array) {
  const newArray = array;
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    newArray[currentIndex] = array[randomIndex];
    newArray[randomIndex] = temporaryValue;
  }

  return newArray;
}

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
    let mantraId;
    let showNav = false;

    if (mantraLoop.length !== 0) {
      mantraId = mantraLoop[0];

      if (mantraLoop.length > 1) {
        showNav = true;
      }
    }

    this.state = { mantraId, showNav, mantraLoop, iterator: 0, orderedItems };

    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.add = this.add.bind(this);
  }

  add() {
    this.props.dispatch(switchView('AddView'));
  }

  prev() {
    let iterator = this.state.iterator;

    if (iterator <= 0 && this.state.mantraLoop.length > 0) {
      iterator = this.state.mantraLoop.length - 1;
    } else if (this.state.mantraLoop.length > 0) {
      iterator -= 1;
    } else {
      return;
    }

    const mantraId = this.state.mantraLoop[iterator];

    if (mantraId) {
      this.setState({ iterator, mantraId });
    }
  }

  next() {
    let iterator = this.state.iterator;
    const length = this.state.mantraLoop.length;

    if (iterator >= (length - 1) && length > 0) {
      iterator = 0;
    } else if (this.state.mantraLoop.length > 0) {
      iterator += 1;
    } else {
      return;
    }

    const mantraId = this.state.mantraLoop[iterator];

    if (mantraId) {
      this.setState({ iterator, mantraId });
    }
  }

  render() {
    return (
      <DisplayView
        prev={this.prev}
        next={this.next}
        mantraId={this.state.mantraId}
        showNav={this.state.showNav}
        add={this.add}
      />
    );
  }
}

DisplayViewContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // eslint-disable-next-line
  items: PropTypes.object.isRequired,
};

function mapStateToProps({ items }) {
  return { items };
}

export default connect(mapStateToProps)(DisplayViewContainer);
