function TaskList({ tasks, onDelete }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => onDelete(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
