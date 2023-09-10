import React, {useState, useEffect} from "react";

const TodoList = () => {
    const [item, setItem] = useState("");
const [todos, setTodos] = useState(() => {
  
  const localValue = localStorage.getItem("Items")
  if (localValue == null) return []

  return JSON.parse(localValue)
});


const [editedTodo, setEditingTodo] = useState(null)



useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(todos))
}, [todos])



function handleSubmit(e) {
  e.preventDefault(); // prevent from Refreshing
  if (editedTodo) {
    const updatedTodo = todos.map((todo) =>
      todo.id === editedTodo.id ? { ...todo, title: item } : todo
    )
    setTodos(updatedTodo);
    setItem("");
    setEditingTodo(null)
  } else {
    setTodos([...todos, { id: Date.now(), title: item }])
    setItem("")
   }
}
function handleDelete(id) {
  setTodos([...todos.filter(todo => todo.id !== id)])

}
function handleUpdate(id, title) {
  setItem(title)
  setEditingTodo({id, title})
}
return (
  <>
    <form onSubmit={handleSubmit}>
            <h3>{editedTodo ? "Edit Item" : "Add New Item"}</h3>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
     <button>{editedTodo ? "Edit" : "Add" }</button>
    </form>
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <span>{todo.title}</span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
          <button onClick={() => handleUpdate(todo.id, todo.title)}>Update</button>
          </div>
      ))}  
   </div>
  </>
);
}

export default TodoList