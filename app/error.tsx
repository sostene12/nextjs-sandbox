'use client'
import React from 'react';

interface Props{
    error: Error;
    reset: () => void;
}

const ErrorPage = ({error,reset}:Props) => {
    console.log('Error',error);
  return (
    <>
        <div>An unexpected error has occured.</div>
        <div className="btn" onClick={() => reset()}>Retry</div>
    </>
  )
}

export default ErrorPage