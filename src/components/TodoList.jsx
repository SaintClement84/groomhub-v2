import TodoItem from './TodoItem'
import './TodoList.css'

function TodoList({ todos, onToggle, onDelete, onEdit }) {
  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </ul>
      ) : (
        <div className="empty-list">
          <p>No tasks to display</p>
        </div>
      )}
    </div>
  )
}

export default TodoList
