import React from 'react';

export default props => {
	return (
		<div className="input-group-prepend">
			<button
				onClick={() => props.onSwitch()}
				className="btn btn-outline-secondary"
			>
                Добавить
			</button>
		</div>
	)
}
