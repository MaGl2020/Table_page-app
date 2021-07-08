import React from 'react';

export default props => (
  <table className="table table-bordered">
    <thead>
      <tr className="table-success">
        <th onClick={props.onSort.bind(null, 'id')}>
          id {props.sortColumn === 'id' ? <font>{props.arrow}</font> : null}
        </th>
        <th onClick={props.onSort.bind(null, 'firstName')}>
          firstName {props.sortColumn === 'firstName' ? <font>{props.arrow}</font> : null}
        </th>
        <th onClick={props.onSort.bind(null, 'lastName')}>
          lastName {props.sortColumn === 'lastName' ? <font>{props.arrow}</font> : null}
        </th>
        <th onClick={props.onSort.bind(null, 'email')}>
          email {props.sortColumn === 'email' ? <font>{props.arrow}</font> : null}
        </th>
        <th onClick={props.onSort.bind(null, 'phone')}>
          phone {props.sortColumn === 'phone' ? <font>{props.arrow}</font> : null} 
        
        </th>
      </tr>
    </thead>
    <tbody>
    { props.result.map(item => (
      <tr key={item.id + item.email} onClick={props.rowClick.bind(null, item)}>
        <td>{item.id}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
      </tr>
    ))}
    </tbody>
  </table>
)
