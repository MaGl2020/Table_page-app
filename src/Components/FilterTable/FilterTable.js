import React, {useState} from 'react';

export default props => {
    const [value, setValue] = useState('')
    const valueChange = e => {
        setValue(e.target.value)
    }

    return (
        <div className="input-group mb-3 mt-3">
             <div className="input-group-prepend">
                 <button 
                 className="btn btn-outline-secondary"
                 onClick={() => props.onFilter(value)}>Найти</button>
            </div>
            <input 
                type="text" 
                className="form-control"
                onChange={valueChange}
                value={value}
            />
        </div>
    )
}

