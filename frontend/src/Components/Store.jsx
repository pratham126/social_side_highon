import React, { createContext, useState } from 'react';

export const Store = createContext();

const StoreProvider = (props) => {
  const [src, setSrc] = useState('no link');
  const value = { src, setSrc };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};

export default StoreProvider;
