import React, {useCallback} from 'react';

export default props =>  {
    const { handleChangeResult, submitAddResult } = props;

	const handleSubmit = useCallback((e) => submitAddResult(e), [
		submitAddResult,
	]);
	const handleChange = useCallback((e) => handleChangeResult(e), [
		handleChangeResult,
	]);
	return (
		<div className="input-group mb-3 mt-3">
			<form onSubmit={handleSubmit}>
				<input
					required
					type="text"
					name="id"
					value={props.addId}
					className="form-control"
					placeholder="ID"
					onChange={handleChange}
				/>
				<input
					required
					type="text"
					name="firstName"
					value={props.addFirstName}
					className="form-control"
					placeholder="First Name"
					onChange={handleChange}
				/>
				<input
					required
					type="text"
					name="lastName"
					value={props.addLastName}
					className="form-control"
					placeholder="Last Name"
					onChange={handleChange}
				/>
				<input
					required
					type="email"
					name="email"
					value={props.addEmail}
					className="form-control"
					placeholder="Email"
					onChange={handleChange}
				/>
				<input
					required
					type="phone"
					name="phone"
					value={props.addPhone}
					className="form-control"
					placeholder="Phone"
					onChange={handleChange}
				/>
				<div className="input-group-prepend">
					<button className="btn btn-outline-secondary" type="submit">
						Добавить в таблицу
					</button>
				</div>
			</form>
		</div>
	)
}