import React, { useState } from 'react';
import "./Content.css";

const Content = () => {
  const [num,setnum] = useState(0);
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim()) {
      setItems(prevItems => [...prevItems, inputValue]);
      setInputValue("");
      setnum(num+1)
      console.log(items)
      console.log(inputValue)
    }
  };
  

  const handleDelete = (index) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
    setnum(num-1)
  };

  return (
    <div className='container'>
      <p >Number of Remaining list to do :{num}</p>
      <input
      className='input'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button className='addbtn' onClick={handleAdd}>
        <span></span><span></span><span></span><span></span>Add</button>
      <ul className='list'>
        {items.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
            <button className='delbtn' onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
