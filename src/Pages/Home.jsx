import React from 'react';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0',
        margin: '0',
        marginTop: '200px',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontSize: '110px',
            color: 'rgb(214, 225, 255)',
          }}
        >
          WELCOME
        </span>
        <br />
        to our <b>CONTACTS</b> app page
      </h1>
    </div>
  );
};

export default Home;
