import { useStore, actions } from './store';

function App() {
    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;
    const handleAddTodo = () => {
        dispatch(actions.addTodoInput(todoInput));
        dispatch(actions.setTodoInput(''));
    };

    return (
        <div style={{ padding: 20 }}>
            <input
                value={todoInput}
                placeholder="Enter todo..."
                onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </div>
    );
}
export default App;
