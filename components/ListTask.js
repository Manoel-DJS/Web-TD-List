import React, { useState } from 'react';

const ListComponent = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setNewItem('');
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className='div-list'>
      <h1>My List</h1>
      <input
        className='input-field' 
        type="text" 
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)} 
      />
      <button className='add-button' onClick={handleAddItem}>Add Item</button>
      <ul className='list-item'>
        {items.map((item, index) => (
          <li className='item' key={index}>
            {item} 
            <button className='remove-button' onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
