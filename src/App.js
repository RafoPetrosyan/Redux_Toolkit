import React from 'react';

import User from "components/User";
import Todos from "components/Todos";
import Posts from "components/Posts";

const App = () => {
  return (
    <div className="App">
      <User />
      <Todos />
      <Posts />
    </div>
  );
}

export default App;
