import { useState } from 'react'
import './TodoItem.css'

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleEdit = () => {
    if (editText.trim() !== '') {
      onEdit(todo.id, editText)
      setIsEditing(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit()
    } else if (e.key === 'Escape') {
      setIsEditing(false)
      setEditText(todo.text)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined,
    })
  }

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
        />
        <div className="todo-text-wrapper">
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyPress={handleKeyPress}
              onBlur={handleEdit}
              autoFocus
              className="todo-edit-input"
            />
          ) : (
            <>
              <span className="todo-text">{todo.text}</span>
              <span className="todo-date">{formatDate(todo.createdAt)}</span>
            </>
          )}
        </div>
      </div>
      <div className="todo-actions">
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="edit-btn"
            title="Edit task"
          >
            ✎
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="delete-btn"
          title="Delete task"
        >
          ✕
        </button>
      </div>
    </li>
  )
}

export default TodoItem
