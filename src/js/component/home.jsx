//include images into your bundle
import React, { useState, useEffect } from "react";
import TaskList from "./taskList.jsx";
import Tarea from "./tarea.jsx";

//create your first component
const Home = () => {
	const [listaTareas, setListaTareas] = useState([]);

	useEffect(() => {
		//codigo que voy a ejecutar
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Jonny", {
			method: "GET",
			ContentType: "application/json",
		})
			.then((resp) => resp.json())
			.then((data) => {
				data = data.map((tarea) => tarea.label);
				setListaTareas(data);
			});
	}, []);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Jonny", {
			method: "PUT",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify([
				{ label: "Aprender a programar", done: false },
				{ label: "Morir programando", done: false },
				{ label: "PROGRAMAR MOLA", done: false },
			]),
		})
			.then((resp) => resp.json())
			.then((data) => {
				data = data.map((tarea) => tarea.label);
				setListaTareas(data);
			});
	});

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
