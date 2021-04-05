import { useState, useEffect } from 'react';

const more105 = <div>MORE THEN 105</div>;
const less50 = <div>LESS THEN 50</div>;
const ok = (
  <>
    <div>ok</div>
    <div>ok</div>
  </>
);

const Counter = ({ initState, startState }) => {
  let [value, setMyValue] = useState(initState);
  let [valuePlus, setMyValuePLUS] = useState(55);

  // useEffect(() => {
  //   console.log('any change =>');
  // });

  // useEffect(() => {
  //   if (valuePlus !== 55) {
  //     console.log('valuePlus chage.. ');
  //   }
  // }, [valuePlus]);

  // useEffect(() => {
  //   console.log('at START!!!!');
  //   console.log('');
  // }, []);

  const addHandler = async (argument) => {
    console.log(' argument =>', argument);
    setMyValue((prev) => prev + 1);
    console.log(' addHandler!!! ==> ', value);
  };

  const decHandler = () => {
    setMyValue(startState);
    console.log(' decHandler  ! => ', value);
  };

  return (
    <div className="main">
      <h3>App</h3>
      <h1>{value}</h1>
      <div>{value > 105 ? more105 : null}</div>
      <div>{value < 100 ? less50 : ok}</div>
      <button onClick={addHandler}>INCREASE</button>
      <button onClick={decHandler}>RESET</button>
      <button onClick={() => setMyValuePLUS(Math.random())}>CHANGE PLUS</button>
      <div>{valuePlus}</div>
    </div>
  );
};

export default Counter;
