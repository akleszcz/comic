import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const Error = props => {
  const error = props.error;
  const inProgress = props.inProgress;
  if (inProgress) {
    return (
      <LoadingSpinner/>
    );
  }
  if (error) {
    return (
      <span className="error">
        {error}
      </span>
    );
  }

  return (
    <span />
  );
};

export default Error;
