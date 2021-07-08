import React from 'react';
import './RowValue.css';

export default ({person}) => (
    <div className='Information'> 
    <h1 className='Heading'>Информация о пользователе</h1>        
        <p>Выбран пользователь: <b>{person.firstName + ' ' + person.lastName}</b></p> 
        <p> Описание: <br></br>{person.description}</p>
        <p>Адрес проживания: <b>{person.address.streetAddress}</b></p>
        <p>Город: <b>{person.address.city}</b></p>
        <p>Провинция/штат: <b>{person.address.state}</b></p>
        <p>Индекс: <b>{person.address.zip}</b></p>
    </div>
)