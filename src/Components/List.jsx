import { useState } from 'react';
import Edit from './Edit';

let todoList = [
  { label: 'Learn React', id: 111 },
  { label: 'Learn Express', id: 2211 },
  { label: 'Learn Node JS', id: 32323 },
  { label: 'Leran MONGO DB', id: 434343 },
];

const List = () => {
  const [list, setList] = useState(todoList);
  const [selectedItem, setSelectedItem] = useState(todoList[0]);

  const deleteHandler = (id) => {
    console.log('DELETE!!!', id);
    setList((pre) => pre.filter((item) => item.id !== id));
  };

  const selectHandler = (id) => {
    console.log('SELCT HANDLER =>', id);
    setSelectedItem(list.find((item) => item.id === id));
  };

  return (
    <div className="root">
      <h1>LIST</h1>
      <ol>
        {list.map(({ label, id }) => (
          <li onClick={() => selectHandler(id)} key={id}>
            {label}
            <button onClick={() => deleteHandler(id)}>DELETE</button>
          </li>
        ))}
      </ol>

      <Edit current={selectedItem} />
    </div>
  );
};

export default List;
