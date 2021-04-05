import List from './List';
import Counter from './Counter';
import Users from './Users';
import { useState } from 'react';

const initState100 = 100;
const initText = 'TEXT';

const Root = () => {
  const [showUsers, setShowUsers] = useState(false);
  return (
    <div>
      <button onClick={() => setShowUsers((pre) => !pre)}>SHOW USERS</button>
      {showUsers ? <Users /> : null}
      <List />
      <Counter initState={initState100} startState={50} />
      {/* <Counter initState={initText} startState={initText} /> */}
    </div>
  );
};

export default Root;
