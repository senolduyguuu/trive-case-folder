import React from 'react';
import "../scss/list-component.scss"
import maskgroup from "../img-folder/trive-img/Mask Group 19.png"

const ListComponent = ({ dataList, onDelete }) => {
  const handleDelete = (item) => {
    onDelete(item);
    localStorage.removeItem('formData'); // Silme işlemi
  };

  return (
		<div>
	<table className="table">
  <thead className="thead-dark">
    <tr>
      <th className='list-compnent-header' scope="col">#</th>
      <th className='list-compnent-header' scope="col">Name</th>
      <th className='list-compnent-header' scope="col">Surname</th>
      <th className='list-compnent-header' scope="col">Email</th>
      <th className='list-compnent-header' scope="col">Phone</th>

    </tr>
  </thead>
  <tbody>
    {dataList.map((item, index) => (
      <tr key={index}>
        <th className='list-component-text' scope="row">{index + 1}</th>
        <td className='list-component-text'>{item.firstName}</td>
        <td className='list-component-text' >{item.lastName}</td>
        <td className='list-component-text'>{item.email}</td>
        <td className='list-component-text'>{item.phone}</td>
        <td>
          <button onClick={() => handleDelete(item)} className="btn text-danger">Sil</button>
        </td>
      </tr>
    ))}
		
  </tbody>
	
</table>
{[...Array(8)].map((_, index) => (
    <div key={index} className="list-form-line"></div>
  ))}
</div>

  );
};

export default ListComponent;
