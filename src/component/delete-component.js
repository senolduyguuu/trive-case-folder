import React from 'react';

const DeleteComponent = ({ item, onDelete }) => {
  return (
    <button onClick={() => onDelete(item)}>Sil</button>
  );
};

export default DeleteComponent;
