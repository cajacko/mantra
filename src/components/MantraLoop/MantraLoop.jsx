import React from 'react';
import Mantra from 'containers/Mantra/Mantra';

const MantraLoop = ({ mantra }) => (
  <div>
    <Mantra temp />
    {
      mantra.map((id) => {
        return <Mantra key={id} id={id} />;
      })
    }
  </div>
);

export default MantraLoop;
