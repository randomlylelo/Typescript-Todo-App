import * as React from 'react'
import { TodoList } from './Todo/TodoList';
import { AddTodoForm } from './Todo/AddTodoForm';

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = React.useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

	const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

	return (
		<>
			<AddTodoForm addTodo={addTodo} />
			<TodoList todos={todos} toggleTodo={toggleTodo} />
		</>
	);
}

export default App;