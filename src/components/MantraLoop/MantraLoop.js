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

        if (lastId === item) {
          last = true;
        }

        return (
          <Item
            key={item}
            itemId={item}
            element={Mantra}
            last={last}
          />
        );
      }}
    />
  );
};

Mantraloop.propTypes = {
  mantraLoop: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Mantraloop;
