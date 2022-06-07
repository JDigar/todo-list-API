//include images into your bundle
import React, { useState, useEffect } from "react";
import TaskList from "./taskList.jsx";
import Tarea from "./tarea.jsx";

//create your first component
const Home = () => {
	const [listaTareas, setListaTareas] = useState([]);

	const updateToDo = (tareas) => {
		console.log(tareas);
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Jonny", {
			method: "PUT",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(tareas),
		})
			.then((resp) => resp.json())
			.then((data) => {
				// data = data.map((tarea) => tarea.label);
				// setListaTareas(data);
				console.log(data);
			});
	};

	const nuevaTarea = (tarea) => {
		setListaTareas([{ label: tarea, done: false }, ...listaTareas]); //Operador spreat (...)
	};

	const borrar = (id) => {
		const listaFiltrada = listaTareas.filter((e, index) => index !== id);
		setListaTareas(listaFiltrada);
	};

	useEffect(() => {
		//codigo que voy a ejecutar
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Jonny", {
			method: "GET",
			ContentType: "application/json",
		})
			.then((resp) => resp.json())
			.then((data) => {
				//data = ((tarea) => tarea.label);
				setListaTareas(data);
			});
	}, []);

	useEffect(() => {
		if (listaTareas.length > 0) {
			console.log(listaTareas);
			updateToDo(listaTareas);
		}
	}, [listaTareas]);

	return (
		<div className="container-fluid">
			<TaskList nuevaTarea={nuevaTarea} />

			<div className="listaTareas">
				{listaTareas.map((item, index) => (
					<Tarea
						key={index}
						tarea={item.label}
						borrar={borrar}
						id={index}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
