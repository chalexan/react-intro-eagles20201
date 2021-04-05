import { useState, useEffect } from 'react';
import picture from '../pic/1476.gif';

const apiAdress = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {
  const [users, setUsers] = useState(null);
  const [counter, setCounter] = useState(0);

  const fetchToApi = async () => {
    const preResult = await fetch(apiAdress);
    const result = await preResult.json();
    setUsers(result.slice(7));
  };

  useEffect(() => {
    console.log(' Lets go Fetch to API =>');
    fetchToApi();
    const interval = setInterval(() => {
      setCounter((pre) => pre + 1);
    }, 1000);

    return () => {
      console.log('DELETE  !!!!');
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log(' counter =>', counter);
  }, [counter]);

  return (
    <div className="root">
      {users ? (
        <>
          <h3>{counter}</h3>
          <h1>USERS LIST</h1>
          <ul>
            {users.map(({ id, name, email, username }) => (
              <li key={id}>
                <div>{name}</div>
                <div>{username}</div>
                <div>{email}</div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div>
          <img src={picture} alt="spinner" width="100" />
        </div>
      )}
    </div>
  );
};

export default Users;
