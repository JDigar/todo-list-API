//include images into your bundle

import React, { useState } from "react";

//create your first component
const TaskList = (props) => {
	const [inputText, setInputText] = useState("");
	const [validacion, setValidacion] = useState(true);

	const manejarFormulario = (event) => {
		setInputText(event.target.value);
	};

	const submit = (event) => {
		event.preventDefault();
		if (inputText.trim() !== "") {
			props.nuevaTarea(inputText);
			setInputText("");
			setValidacion(true);
		} else {
			setValidacion(false);
		}
	};

	return (
		<div>
			<h1 className="text-center">TODO LIST</h1>
			<form className="form container-fluid" onSubmit={submit}>
				<span>Add task</span>
				<input
					className="mb-2"
					value={inputText}
					onChange={manejarFormulario}
				/>
				<button>Save task</button>
			</form>

			{!validacion && (
				<div className="validacion"> Añada una tarea, por favor </div>
			)}
		</div>
	);
};

export default TaskList;
