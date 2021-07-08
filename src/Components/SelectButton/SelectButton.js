import React from 'react';
import './SelectButton.css';

export default props => {
    const smallUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    const bigUrl = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    return (
        <div>
            <button id="small" onClick={props.onSelect.bind(null, smallUrl)}>Маленький объем данных</button>
            <button id="big" onClick={props.onSelect.bind(null, bigUrl)}>Большой объем данных</button>
        </div>
    )
}