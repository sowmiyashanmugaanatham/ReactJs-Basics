import React from 'react';

const ChildTwo = () => {
    console.log('ChildTwo Render')
  return (
    <div>
      ChildTwo component
    </div>
  );
}

export const MemoizedChildTwo = React.memo (ChildTwo);
