import React from "react";
import "./form-add-item.scss";

const FormAddItem = () => {
	return (
		<form className="app__form-add-item">
			<input
			placeholder="О чем вы сейчас думаете?"/>
			<button>Добавить</button>
		</form>
	);
};

export default FormAddItem;