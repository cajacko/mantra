import React from 'react';
import { ListView } from 'react-native';
import PropTypes from 'prop-types';
import Mantra from 'components/Mantra/Mantra';
import Item from 'containers/Item/Item';

const Mantraloop = ({ mantraLoop }) => {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
  });

  const dataSource = ds.cloneWithRows(mantraLoop);

  return (
    <ListView
      dataSource={dataSource}
      renderRow={id => (
        <Item
          key={id}
          itemId={id}
          element={Mantra}
        />
      )}
    />
  );
};

Mantraloop.propTypes = {
  mantraLoop: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Mantraloop;
