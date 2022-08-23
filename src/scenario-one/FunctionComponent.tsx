import React from 'react';

const Child = () => {
  return <h1>Implement me!</h1>;
};

export const Parent = () => {
  // ! Use the following log messages to compare this component
  // ! with the existing class component implementation.
  // console.log('[Func comp] Bound to document scroll event');
  // console.log('[Func comp] Unbound from document scroll event');
  // console.log(`[Func comp] Button clicked! Incrementing counter.`);
  // console.log(`[Func comp] Page scrolled! Resetting counter.`);

  return (
    <>
      <h1>Implement me!</h1>
      <Child />
    </>
  );
};
