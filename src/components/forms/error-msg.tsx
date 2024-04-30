/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const ErrorMsg = ({ error }: { error: any }) => {
  return (
    <>
      <p style={{ color: 'red' }}>{error}</p>
    </>
  );
};

export default ErrorMsg;
