import React from 'react';
import { LineWave } from 'react-loader-spinner';
import { Div } from './Loader.styled';

const Loader = () => {
  return (
    <Div>
      <LineWave
        height="100"
        width="100"
        color="#0D6EeD"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />{' '}
    </Div>
  );
};

export default Loader;
