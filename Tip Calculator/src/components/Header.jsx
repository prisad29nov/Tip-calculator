import React from 'react';
const Header = () => {
  return (
    <div
      style={{
        backgroundColor: 'grey',
        borderRadius: '40px',
        margin: '10px',
      }}
    >
      <h1 style={{ color: 'blue', textAlign: ' center', paddingTop: '20px' }}>
        TIP CACULATOR
      </h1>
      <h3
        style={{ color: 'brown', textAlign: ' center', paddingBottom: '20px' }}
      >
        Built in react
      </h3>
    </div>
  );
};
export default Header;
