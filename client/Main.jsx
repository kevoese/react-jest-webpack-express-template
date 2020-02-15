import React, { useContext } from 'react';
import { withStore, StoreContext } from './Context/withStore';
import Button from './components/Button';

const Main = () => {
  const { store } = useContext(StoreContext);

  console.log(store);

  return (
    <div className="main bg-red-900">
      <h1 className="text-sm font-bold text-red-500">Hello world</h1>
      <Button />
    </div>
  );
};

export default withStore(Main);
