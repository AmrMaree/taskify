import { useState } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});

  return (
    <div className="App">
      <Header />
      <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
      <TaskList taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
    </div>
  );
}

export default App;
