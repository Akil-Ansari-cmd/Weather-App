import React, { useContext } from 'react';
import { UserContext } from "./Practice1";

const Practice5 = () => {
    const data = useContext(UserContext);
  return (
    <div>
      <h1>Component 5</h1>
      <h2>{`Hello ${data[0]?.brand} again!`}</h2>
    </div>
  )
}

export default Practice5
