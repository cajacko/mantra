import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Mantra from 'containers/Mantra/Mantra';
import Item from 'containers/Item/Item';


const Mantraloop = ({ mantraLoop }) => {
  const lastId = mantraLoop[mantraLoop.length - 1];
  return (
    <FlatList
      data={mantraLoop}
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
};

export default Mantraloop;
