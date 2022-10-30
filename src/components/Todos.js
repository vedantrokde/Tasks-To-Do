import React from "react";

const Todos = ({ todos, deleteTodo }) => {
	const todoList = todos.length ? (
		todos.map((todo, index) => {
			return (
				<div className="collection-item" key={index}>
					<span
						onClick={() => {
							deleteTodo(index);
						}}
					>
						{todo}
					</span>
				</div>
			);
		})
	) : (
		<p className="center">You have no todo's left, yay!</p>
	);

	return <div className="todos collection">{todoList}</div>;
};

export default Todos;
