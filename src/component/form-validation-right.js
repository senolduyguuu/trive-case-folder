import React from 'react';
import "../scss/list-component.scss"
import maskgroup from "../img-folder/trive-img/Mask Group 19.png"

const ListComponent = ({ dataList, onDelete }) => {
  const handleDelete = (item) => {
    onDelete(item);
    localStorage.removeItem('formData'); // Silme işlemi
  };

  return (
    <div className='list-container'>
			<img src={maskgroup} alt='maskgroup'></img>
			<div className='list-container-header'>
      <p className='list-container-text'>#</p>
			<p className='list-container-text'>Name</p>
			<p className='list-container-text'>Surname</p>
			<p className='list-container-text'>Email</p>
			<p className='list-container-text'>Phone</p>
			</div>
      <ol className="list-notebook  ">
        {dataList.map((item, index) => (
          <li key={index} className="list-group-item ">
            <span>{index + 1}. {item.firstName}  {item.lastName} {item.email} {item.phone}</span>
            <button onClick={() => handleDelete(item)} className="delete-button">Sil</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ListComponent;



