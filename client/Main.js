import React, { useContext } from 'react';
import { withStore, StoreContext } from './Context/withStore';

const Main = () => {
  const { store } = useContext(StoreContext);

  console.log(store);

  return (
    <div className="main">
      <h1>HELLO WORLD</h1>
    </div>
  );
};

export default withStore(Main);
