//include images into your bundle
import React, { useState, useEffect } from "react";
import TaskList from "./taskList.jsx";
import Tarea from "./tarea.jsx";

//create your first component
const Home = () => {
	const [listaTareas, setListaTareas] = useState([]);

	useEffect(() => {
		//codigo que voy a ejecutar
		fetch("https://assets.breatheco.de/apis/fake/todos/user/LulM", {
			method: "GET",
			ContentType: "application/json",
		})
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data);
			});
	}, []);

	const nuevaTarea = (tarea) => {
		setListaTareas([tarea, ...listaTareas]); //Operador spreat (...)
	};

	const borrar = (id) => {
		const listaFiltrada = listaTareas.filter((e, index) => index !== id);
		setListaTareas(listaFiltrada);
	};

	return (
		<div className="container-fluid">
			<TaskList nuevaTarea={nuevaTarea} />

			<div className="listaTareas">
				{listaTareas.map((e, index) => (
					<Tarea key={index} tarea={e} borrar={borrar} id={index} />
				))}
			</div>
		</div>
	);
};

export default Home;
