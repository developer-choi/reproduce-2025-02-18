'use client';

import ServerComponent from './ServerComponent';
import {useState} from 'react';

export default function ClientComponent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>

      <ServerComponent/>
    </>
  );
}
