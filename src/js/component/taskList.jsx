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
		<div className="container-fluid">
			<h1 className="text-center">TODO LIST</h1>
			<form className="form" onSubmit={submit}>
				<span>Añadir tareas</span>
				<input
					className="mb-2"
					value={inputText}
					onChange={manejarFormulario}
				/>
				<button>Guardar</button>
			</form>

			{!validacion && (
				<div className="validacion"> Añada una tarea, por favor </div>
			)}
		</div>
	);
};

export default TaskList;
