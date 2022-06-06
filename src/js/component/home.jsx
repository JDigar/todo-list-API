//include images into your bundle
import React, { useState } from "react";
import TaskList from "./taskList.jsx";
import Tarea from "./tarea.jsx";

// fetch("https://assets.breatheco.de/apis/fake/todos/user/jonathandiaz", {
// 	method: "GET",
// 	body: JSON.stringify(todos),
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
// })
// 	.then((resp) => {
// 		console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
// 		console.log(resp.status); // el código de estado = 200 o código = 400 etc.
// 		console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
// 		return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
// 	})
// 	.then((data) => {
// 		//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
// 		console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
// 	})
// 	.catch((error) => {
// 		//manejo de errores
// 		console.log(error);
// 	});

//create your first component
const Home = () => {
	const [listaTareas, setListaTareas] = useState([]);

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
