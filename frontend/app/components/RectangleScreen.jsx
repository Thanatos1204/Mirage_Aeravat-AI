// components/RectangleScreen.js
import React from 'react';

const RectangleScreen = ({ children }) => {
  return (
    <div className="bg-white bg-opacity-90 rounded-lg p-8 mt-8 shadow-lg">
      {children}
    </div>
  );
};

export default RectangleScreen;
