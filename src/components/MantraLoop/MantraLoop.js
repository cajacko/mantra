import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Mantra from 'containers/Mantra/Mantra';
import Item from 'containers/Item/Item';


const Mantraloop = ({ mantraLoop, onRefresh, refreshing }) => {
  let lastId;

  if (mantraLoop.length) {
    lastId = mantraLoop[mantraLoop.length - 1].key;
  }

  return (
    <FlatList
      data={mantraLoop}
      onRefresh={onRefresh}
      refreshing={refreshing}
      renderItem={({ item }) => {
        let last = false;

        if (lastId === item.key) {
          last = true;
        }

        return (
          <Item
            key={item.key}
            itemId={item.key}
            element={Mantra}
            last={last}
          />
        );
      }}
    />
  );
};

Mantraloop.propTypes = {
  mantraLoop: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
  })).isRequired,
  refreshing: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
};

export default Mantraloop;
