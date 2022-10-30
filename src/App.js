import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

export default function App() {
	const [todos, setTodos] = useState(["Buy some milk", "Play mario kart"]);

	const deleteTodo = (id) => {
		const updatedTodos = todos.filter((todo, index) => {
			return index !== id;
		});
		setTodos(updatedTodos);
	};
	const addTodo = ({content}) => {
		const updatedTodos = [...todos, content];
		setTodos(updatedTodos);
	};

	return (
		<div className="todo-app container">
			<h1 className="center blue-text">Todo's</h1>
			<Todos todos={todos} deleteTodo={deleteTodo} />
			<AddTodo addTodo={addTodo} />
		</div>
	);
}
